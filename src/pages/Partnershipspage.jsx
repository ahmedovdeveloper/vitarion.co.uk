import React from "react";
import {
  Handshake,
  Globe,
  ShieldCheck,
  TrendingUp,
  Factory,
  Tag,
  Users,
  ShoppingCart,
  HeartPulse,
  MessageSquare,
  ClipboardList,
  Search,
  Box,
  BarChart3,
  CheckSquare,
  Baby,
  Pill,
  Leaf,
  Droplet,
  Sprout,
  GlassWater,
  Heart,
  Activity,
  Wheat,
  FileCheck2,
  FlaskConical,
  ArrowRight,
  Download,
} from "lucide-react";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const IMAGES = {
  hero: "https://www.dropbox.com/scl/fi/pell0epbolwwx24hlbak5/content-1.png?rlkey=j5py2shbgzqdd0czpahoqiggn&st=av88edcg&raw=1",
};

const HERO_BADGES = [
  { Icon: Handshake, label: "TRUSTED PARTNERSHIPS" },
  { Icon: Globe, label: "GLOBAL MARKET ACCESS" },
  { Icon: ShieldCheck, label: "QUALITY & COMPLIANCE" },
  { Icon: TrendingUp, label: "LONG-TERM GROWTH" },
];

const OPPORTUNITIES = [
  {
    n: "01",
    Icon: Factory,
    title: "FOR MANUFACTURERS",
    lead: "Expand your products into new markets through VITARION LTD.",
    bullets: ["Exclusive distribution", "Market-entry support", "Packaging & label localisation", "Regulatory document coordination", "B2B sales development", "Long-term representation"],
  },
  {
    n: "02",
    Icon: Tag,
    title: "FOR BRAND OWNERS",
    lead: "International brand representation and market development.",
    bullets: ["Brand positioning", "Distributor introductions", "Localisation of communication", "Channel strategy support", "Product range planning", "Exclusive representation"],
  },
  {
    n: "03",
    Icon: Users,
    title: "FOR DISTRIBUTORS & WHOLESALERS",
    lead: "Access selected FMCG, nutrition and supplement products.",
    bullets: ["Competitive product portfolio", "Reliable supply & documentation", "Flexible partnership models", "Marketing support", "Training & product information", "Territory opportunities"],
  },
  {
    n: "04",
    Icon: ShoppingCart,
    title: "FOR PHARMACIES, RETAILERS & ONLINE PLATFORMS",
    lead: "Quality nutrition and wellness products for your customers.",
    bullets: ["Pharmacy & retail channels", "E-commerce support", "Launch coordination", "Product communication", "Supply & documentation", "Category support"],
  },
  {
    n: "05",
    Icon: HeartPulse,
    title: "FOR HEALTHCARE & PROFESSIONAL PARTNERS",
    lead: "Specialised nutrition for professional and medical-use channels.",
    bullets: ["FSMP & clinical nutrition", "Hospital & pharmacy channels", "Medical nutrition partners", "Professional-use products", "Regulatory compliance support", "Medical supervision awareness"],
  },
];

const PROCESS_STEPS = [
  { n: "01", Icon: MessageSquare, title: "Initial Discussion", text: "We learn about your company, products, markets and objectives." },
  { n: "02", Icon: ClipboardList, title: "Product & Document Review", text: "We review product information, quality and documentation." },
  { n: "03", Icon: Search, title: "Market Feasibility", text: "We assess market potential, regulatory fit and commercial fit." },
  { n: "04", Icon: Handshake, title: "Commercial Proposal", text: "We discuss model, terms, pricing and responsibilities." },
  { n: "05", Icon: Box, title: "Localisation & Preparation", text: "We support packaging, label, documents and market readiness." },
  { n: "06", Icon: BarChart3, title: "Distribution & Growth", text: "We grow together through sales, support and long-term focus." },
];

const PARTNERSHIP_MODELS_LEFT = [
  "Exclusive Distribution",
  "Non-Exclusive Distribution",
  "Brand Representation",
  "Import / Export Cooperation",
  "Private Label Opportunities",
];

const PARTNERSHIP_MODELS_RIGHT = [
  "Product Localisation",
  "B2B Commercial Representation",
  "Strategic Partnerships",
  "Long-Term Cooperation",
];

const PRODUCT_AREAS = [
  { Icon: Baby, label: "Infant & Young-Child Nutrition" },
  { Icon: HeartPulse, label: "FSMP & Specialised Nutrition" },
  { Icon: Leaf, label: "General Nutrition" },
  { Icon: Pill, label: "Food Supplements" },
  { Icon: Droplet, label: "Vitamins & Minerals" },
  { Icon: Wheat, label: "Omega-3 & Essential Fatty Acids" },
  { Icon: Sprout, label: "Herbal & Botanical Supplements" },
  { Icon: GlassWater, label: "Functional Drinks & Wellness FMCG" },
  { Icon: Heart, label: "Women's Health Supplements" },
  { Icon: Activity, label: "Immunity & Vitality Products" },
  { Icon: FlaskConical, label: "Digestive Wellness Products" },
  { Icon: CheckSquare, label: "Halal & Family Nutrition Products" },
];

const DOC_LEFT = [
  "Certificate of Analysis",
  "Product Specifications",
  "Ingredient Specifications",
  "GMP / ISO / HACCP Certificates",
  "Free Sale Certificate (where applicable)",
  "Stability Data",
];

const DOC_RIGHT = [
  "Microbiological Testing",
  "Heavy Metal & Contaminant Testing",
  "Halal Certificate (where applicable)",
  "Label & Claims Information",
  "Regulatory Registration Support",
  "Packaging Artwork",
];

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans">
      <SiteHeader active="Partnerships" accent="navy" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#eef6f6] to-white">
        <div className="absolute inset-y-0 right-0 w-[45%] lg:w-[50%]">
          <img
            src={IMAGES.hero}
            alt="Partnership background"
            className="w-full h-full object-cover object-right"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(238,246,246,0.65),transparent_35%),linear-gradient(90deg,rgba(238,246,246,0.96)_0%,rgba(238,246,246,0.82)_42%,rgba(12,44,77,0.18)_100%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0c2c4d] leading-tight mb-4">
              PARTNERSHIPS
            </h1>
            <h2 className="text-xl font-bold text-green-700 mb-5">
              Building Trusted Global Partnerships
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3 max-w-md">
              VITARION LTD is open to cooperation with manufacturers, brand
              owners, distributors, wholesalers, pharmacy chains, retail
              groups, online platforms and healthcare-oriented partners.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-md">
              From our base in the United Kingdom, we connect quality
              products with the right markets across FMCG, specialised
              nutrition, general nutrition, infant &amp; young-child
              nutrition and food supplements.
            </p>
            <div className="flex flex-wrap gap-6">
              {HERO_BADGES.map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center w-20">
                  <span className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center mb-2 bg-white/80">
                    <Icon size={18} className="text-[#0c2c4d]" />
                  </span>
                  <p className="text-[10px] font-semibold text-slate-500 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-[22rem]" />
        </div>
      </section>

      {/* Opportunities */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-extrabold text-center text-[#0c2c4d] mb-2">
          PARTNERSHIP <span className="text-green-700">OPPORTUNITIES</span>
        </h2>
        <div className="w-14 h-1 bg-green-600 rounded-full mx-auto mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {OPPORTUNITIES.map(({ n, Icon, title, lead, bullets }) => (
            <div key={n} className="relative rounded-xl border border-slate-100 shadow-sm p-6 overflow-hidden">
              <span className="absolute top-4 right-5 text-4xl font-extrabold text-slate-100">{n}</span>
              <span className="w-11 h-11 rounded-full bg-green-800 flex items-center justify-center mb-4 relative">
                <Icon size={20} className="text-white" />
              </span>
              <h3 className="font-extrabold text-[#0c2c4d] text-sm leading-snug mb-3 relative">{title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3 relative">{lead}</p>
              <ul className="text-xs text-slate-500 space-y-1.5 mb-4 relative">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-1.5"><span>•</span><span>{b}</span></li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 relative">
                Learn more <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Process + Models */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-100 p-7">
          <h3 className="text-lg font-extrabold text-center text-[#0c2c4d] mb-6">
            OUR PARTNERSHIP PROCESS
          </h3>
          <div className="flex flex-wrap items-start justify-center gap-2">
            {PROCESS_STEPS.map(({ n, Icon, title, text }, i) => (
              <React.Fragment key={n}>
                <div className="flex flex-col items-center text-center w-24">
                  <span className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center mb-2">
                    <Icon size={18} className="text-white" />
                  </span>
                  <p className="text-[10px] text-slate-400 font-bold">{n}</p>
                  <p className="text-[11px] font-bold text-[#0c2c4d] leading-tight">{title}</p>
                  <p className="text-[9px] text-slate-400 leading-tight mt-0.5">{text}</p>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <ArrowRight size={14} className="text-slate-300 mt-3 hidden sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 p-7">
          <h3 className="text-lg font-extrabold text-center text-green-700 mb-6">
            PARTNERSHIP MODELS
          </h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-5">
            <ul className="space-y-3">
              {PARTNERSHIP_MODELS_LEFT.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckSquare size={15} className="text-green-700 mt-0.5 shrink-0" /> {m}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {PARTNERSHIP_MODELS_RIGHT.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckSquare size={15} className="text-green-700 mt-0.5 shrink-0" /> {m}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
            We are open to flexible partnership structures that create
            sustainable value for both sides.
          </p>
        </div>
      </section>

      {/* Product areas + Quality docs */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-100 p-7">
          <h3 className="text-lg font-extrabold text-center text-green-700 mb-6">
            PRODUCT AREAS WE WORK IN
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {PRODUCT_AREAS.map(({ Icon, label }) => (
              <div key={label} className="text-center">
                <span className="w-12 h-12 mx-auto rounded-full border border-slate-200 flex items-center justify-center mb-2">
                  <Icon size={18} className="text-green-700" />
                </span>
                <p className="text-[10px] text-slate-500 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 p-7">
          <h3 className="text-lg font-extrabold text-center text-green-700 mb-6">
            QUALITY &amp; DOCUMENTATION
          </h3>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-5">
            <ul className="space-y-3">
              {DOC_LEFT.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckSquare size={15} className="text-green-700 mt-0.5 shrink-0" /> {d}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {DOC_RIGHT.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckSquare size={15} className="text-green-700 mt-0.5 shrink-0" /> {d}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
            We give strong importance to documentation, quality and
            compliance to ensure product safety and successful market
            access.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-800">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center shrink-0">
              <Leaf size={20} className="text-white" />
            </span>
            <div>
              <h3 className="text-lg font-extrabold text-white mb-1">
                Let&apos;s Build Successful Markets Together
              </h3>
              <p className="text-green-100 text-sm max-w-lg">
                VITARION LTD welcomes partnership discussions. Whether you
                are a manufacturer, brand owner, distributor, retailer or
                healthcare partner, we are here to help.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button className="inline-flex items-center gap-2 bg-white text-green-800 hover:bg-green-50 transition-colors font-semibold text-sm px-5 py-3 rounded-lg">
              CONTACT VITARION LTD <ArrowRight size={16} />
            </button>
            <button className="inline-flex items-center gap-2 border border-white/50 text-white hover:bg-white/10 transition-colors font-semibold text-sm px-5 py-3 rounded-lg">
              DOWNLOAD PARTNERSHIP BROCHURE <Download size={16} />
            </button>
          </div>
        </div>
      </section>

      <SiteFooter
        columns={[
          { title: "QUICK LINKS", items: ["Home", "About", "Business Areas", "Products", "Mimi Organics"] },
          { title: "LEGAL", items: ["Partnerships", "Quality & Compliance", "Contact", "Terms of Use", "Privacy Policy", "Cookie Policy"] },
        ]}
      />
    </div>
  );
}