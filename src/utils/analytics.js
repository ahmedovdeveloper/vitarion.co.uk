export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "";
export const ANALYTICS_API_URL = (import.meta.env.VITE_ANALYTICS_API_URL || "").replace(/\/$/, "");
export const MONGODB_DATA_API_KEY = import.meta.env.VITE_MONGODB_DATA_API_KEY || "";

export const SITE_VIEWS_KEY = "vitarion_site_views";
export const PRODUCT_VIEWS_KEY = "vitarion_product_views";
export const UNIQUE_VISITORS_KEY = "vitarion_unique_visitors";
export const USER_ID_KEY = "vitarion_user_id";

export const PRODUCT_LABELS = {
  "rich-omegos": "Rich Omegos",
  "her-eliona": "HER ELIONA",
  "his-grador": "HIS GRADOR",
  "mimi-organics-stage-1": "Mimi Organics Stage 1",
  "mimi-organics-stage-2": "Mimi Organics Stage 2",
  "mimi-organics-stage-3": "Mimi Organics Stage 3",
  "mimi-organics-stage-4": "Mimi Organics Stage 4",
  "mimi-preterm": "Mimi Preterm",
};

const getNumberValue = (value, fallback = 0) => {
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : fallback;
};

const readJson = (key, fallback = {}) => {
  try {
    const rawValue = window.localStorage.getItem(key);
    if (!rawValue) {
      return fallback;
    }

    const parsedValue = JSON.parse(rawValue);
    return parsedValue && typeof parsedValue === "object" ? parsedValue : fallback;
  } catch {
    return fallback;
  }
};

const getStoredArray = (key, fallback = []) => {
  try {
    const rawValue = window.localStorage.getItem(key);
    if (!rawValue) {
      return fallback;
    }

    const parsedValue = JSON.parse(rawValue);
    return Array.isArray(parsedValue) ? parsedValue : fallback;
  } catch {
    return fallback;
  }
};

export const getUserId = () => {
  if (typeof window === "undefined") {
    return "guest";
  }

  const existingUserId = window.localStorage.getItem(USER_ID_KEY);
  if (existingUserId) {
    return existingUserId;
  }

  const nextUserId = typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `user-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  window.localStorage.setItem(USER_ID_KEY, nextUserId);
  return nextUserId;
};

const createVisitorId = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `visitor-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const getSessionVisitorId = () => {
  if (typeof window === "undefined") {
    return "";
  }

  const existingId = window.sessionStorage.getItem("vitarion_session_visitor_id");
  if (existingId) {
    return existingId;
  }

  const nextId = createVisitorId();
  window.sessionStorage.setItem("vitarion_session_visitor_id", nextId);
  return nextId;
};

const registerUniqueVisitor = () => {
  if (typeof window === "undefined") {
    return false;
  }

  const visitorId = getSessionVisitorId();
  const visitors = getStoredArray(UNIQUE_VISITORS_KEY, []);

  if (visitors.includes(visitorId)) {
    return false;
  }

  visitors.push(visitorId);
  window.localStorage.setItem(UNIQUE_VISITORS_KEY, JSON.stringify(visitors));
  return true;
};

const markSessionPageSeen = (storageKey) => {
  if (typeof window === "undefined") {
    return false;
  }

  if (window.sessionStorage.getItem(storageKey)) {
    return false;
  }

  window.sessionStorage.setItem(storageKey, "1");
  return true;
};

const getProductViewerIds = (slug) => {
  const storageKey = `vitarion_product_viewers_${slug}`;
  return getStoredArray(storageKey, []);
};

const addProductViewer = (slug, userId) => {
  if (!slug || !userId || typeof window === "undefined") {
    return;
  }

  const storageKey = `vitarion_product_viewers_${slug}`;
  const currentUsers = getStoredArray(storageKey, []);
  if (currentUsers.includes(userId)) {
    return;
  }

  currentUsers.push(userId);
  window.localStorage.setItem(storageKey, JSON.stringify(currentUsers));
};

const fallbackLocalSnapshot = () => {
  const storedSiteViews = getNumberValue(window.localStorage.getItem(SITE_VIEWS_KEY), 0);
  const uniqueVisitors = getStoredArray(UNIQUE_VISITORS_KEY, []);
  const storedData = readJson(PRODUCT_VIEWS_KEY, {});

  return {
    siteViews: Math.max(storedSiteViews, uniqueVisitors.length),
    productViews: Object.entries(storedData)
      .map(([slug, count]) => ({
        slug,
        name: PRODUCT_LABELS[slug] || slug,
        count: getNumberValue(count, 0),
        uniqueUsers: getNumberValue(getProductViewerIds(slug).length, 0),
      }))
      .sort((a, b) => b.count - a.count),
  };
};

const normalizeProductViews = (productViews = {}) => {
  return Object.entries(productViews)
    .map(([slug, value]) => {
      if (typeof value === "object" && value !== null) {
        return {
          slug,
          name: PRODUCT_LABELS[slug] || slug,
          count: getNumberValue(value?.count, 0),
          uniqueUsers: getNumberValue(value?.uniqueUsers, 0),
        };
      }

      return {
        slug,
        name: PRODUCT_LABELS[slug] || slug,
        count: getNumberValue(value, 0),
        uniqueUsers: getProductViewerIds(slug).length,
      };
    })
    .sort((a, b) => b.count - a.count);
};

export const getProductViewStats = async (slug) => {
  try {
    const payload = await requestAnalytics("/api/analytics");
    if (payload && payload.productViews) {
      const item = normalizeProductViews(payload.productViews).find((entry) => entry.slug === slug);
      return {
        views: item?.count || 0,
        uniqueUsers: item?.uniqueUsers || 0,
      };
    }
  } catch {
    // fallback below
  }

  const productViews = await getProductViews();
  const viewCount = productViews.find((item) => item.slug === slug)?.count || 0;
  const uniqueUsers = getProductViewerIds(slug).length || (viewCount > 0 ? 1 : 0);

  return {
    views: viewCount,
    uniqueUsers,
  };
};

const requestAnalytics = async (path = "/api/analytics", options = {}) => {
  const candidates = ANALYTICS_API_URL
    ? [
        `${ANALYTICS_API_URL}${path}`,
        `${ANALYTICS_API_URL.replace(/\/$/, "")}${path}`,
        ANALYTICS_API_URL,
      ]
    : [path, `${window.location.origin}${path}`].filter(Boolean);

  let lastError = null;

  for (const url of [...new Set(candidates)]) {
    try {
      const response = await fetch(url, {
        cache: "no-store",
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...(MONGODB_DATA_API_KEY ? { "api-key": MONGODB_DATA_API_KEY } : {}),
          ...(options.headers || {}),
        },
      });

      if (!response.ok) {
        lastError = new Error(`Analytics request failed: ${response.status}`);
        continue;
      }

      return response.json();
    } catch (error) {
      lastError = error;
    }
  }

  if (lastError) {
    throw lastError;
  }

  return null;
};

export const initGoogleAnalytics = () => {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined") {
    return;
  }

  if (document.getElementById("ga-script")) {
    return;
  }

  const gaScript = document.createElement("script");
  gaScript.id = "ga-script";
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
  });
};

export const getSiteViews = async () => {
  try {
    const payload = await requestAnalytics("/api/analytics");
    if (!payload) {
      return fallbackLocalSnapshot().siteViews;
    }
    return getNumberValue(payload?.siteViews, 0);
  } catch {
    if (typeof window === "undefined") {
      return 0;
    }
    return fallbackLocalSnapshot().siteViews;
  }
};

export const getProductViews = async () => {
  try {
    const payload = await requestAnalytics("/api/analytics");
    if (!payload) {
      return fallbackLocalSnapshot().productViews;
    }

    return normalizeProductViews(payload?.productViews || {});
  } catch {
    if (typeof window === "undefined") {
      return [];
    }
    return fallbackLocalSnapshot().productViews;
  }
};

export const getAnalyticsSnapshot = async () => {
  try {
    const payload = await requestAnalytics("/api/analytics");
    if (!payload) {
      return fallbackLocalSnapshot();
    }

    return {
      siteViews: getNumberValue(payload?.siteViews, 0),
      uniqueVisitors: getNumberValue(payload?.uniqueVisitors, 0),
      productViews: normalizeProductViews(payload?.productViews || {}),
    };
  } catch {
    if (typeof window === "undefined") {
      return { siteViews: 0, uniqueVisitors: 0, productViews: [] };
    }
    return fallbackLocalSnapshot();
  }
};

export const incrementSiteView = async (pathname) => {
  if (typeof window === "undefined") {
    return 0;
  }

  const sessionKey = `vitarion_seen_route_${pathname || "/"}`;
  if (!markSessionPageSeen(sessionKey)) {
    return getNumberValue(window.localStorage.getItem(SITE_VIEWS_KEY), 0);
  }

  try {
    const payload = await requestAnalytics("/api/analytics/track", {
      method: "POST",
      body: JSON.stringify({
        pathname: pathname || "/",
        title: document.title || "Vitarion",
        userId: getUserId(),
        visitorId: getSessionVisitorId(),
      }),
    });

    const isNewVisitor = registerUniqueVisitor();
    const currentSiteViews = getNumberValue(window.localStorage.getItem(SITE_VIEWS_KEY), 0) + (isNewVisitor ? 1 : 0);
    window.localStorage.setItem(SITE_VIEWS_KEY, String(getNumberValue(payload?.siteViews, 0) || currentSiteViews));

    if (payload && window.gtag) {
      window.gtag("event", "page_view", {
        page_location: pathname,
        page_title: document.title || "Vitarion",
      });
    }

    return getNumberValue(payload?.siteViews, 0) || currentSiteViews;
  } catch {
    const isNewVisitor = registerUniqueVisitor();
    const currentSiteViews = getNumberValue(window.localStorage.getItem(SITE_VIEWS_KEY), 0) + (isNewVisitor ? 1 : 0);
    window.localStorage.setItem(SITE_VIEWS_KEY, String(currentSiteViews));
    return currentSiteViews;
  }
};

export const incrementProductView = async (slug) => {
  if (!slug || typeof window === "undefined") {
    return 0;
  }

  const sessionKey = `vitarion_seen_product_${slug}`;
  if (!markSessionPageSeen(sessionKey)) {
    const currentViews = readJson(PRODUCT_VIEWS_KEY, {});
    return getNumberValue(currentViews[slug], 0);
  }

  try {
    const userId = getUserId();
    const payload = await requestAnalytics("/api/analytics/track", {
      method: "POST",
      body: JSON.stringify({
        pathname: `/product/${slug}`,
        title: PRODUCT_LABELS[slug] || slug,
        userId,
        visitorId: getSessionVisitorId(),
      }),
    });

    const productPayload = payload?.productViews && payload.productViews[slug];
    const nextValue = typeof productPayload === "object"
      ? getNumberValue(productPayload.count, 0)
      : getNumberValue(productPayload, 0) || getNumberValue(readJson(PRODUCT_VIEWS_KEY, {})[slug], 0) + 1;

    const currentViews = readJson(PRODUCT_VIEWS_KEY, {});
    currentViews[slug] = nextValue;
    window.localStorage.setItem(PRODUCT_VIEWS_KEY, JSON.stringify(currentViews));
    addProductViewer(slug, userId);

    if (payload && window.gtag) {
      window.gtag("event", "view_item", {
        item_id: slug,
        item_name: PRODUCT_LABELS[slug] || slug,
        content_type: "product",
      });
    }

    return nextValue;
  } catch {
    const currentViews = readJson(PRODUCT_VIEWS_KEY, {});
    const nextValue = getNumberValue(currentViews[slug], 0) + 1;
    currentViews[slug] = nextValue;
    window.localStorage.setItem(PRODUCT_VIEWS_KEY, JSON.stringify(currentViews));
    return nextValue;
  }
};

export const trackPathView = async (pathname = "/") => {
  const productSlug = pathname.match(/^(?:\/product\/|\/products\/)([^/?#]+)/)?.[1];

  if (productSlug) {
    await incrementProductView(productSlug);
  }

  await incrementSiteView(pathname);

  return {
    pathname,
    productSlug,
    siteViews: getNumberValue(window.localStorage.getItem(SITE_VIEWS_KEY), 0),
  };
};
