import React from "react";
import {
  Gem,
  Globe,
  ShieldCheck,
  FlaskConical,
  Milk,
  HeartPulse,
  Pill,
  Users,
  GlassWater,
  ShoppingCart,
  ArrowRight,
  Truck,
  Handshake,
  Leaf,
} from "lucide-react";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import stage1Front from "../assets/stage1-front.jpg";
import stage2Front from "../assets/stage2-front.jpg";
import stage3Front from "../assets/stage3-front.jpg";
import stage4Front from "../assets/stage4-front.jpg";
import mimiPreterm from "../assets/mimi-preterm.jpg";
import anfaProduct from "../assets/anfa product.png";
import lg1 from "../assets/lg1.jpg";
import lg2 from "../assets/lg2.jpg";
import lg3 from "../assets/lg3.jpg";
import lg4 from "../assets/lg4.jpg";

const IMAGES = {
  hero: "https://www.dropbox.com/scl/fi/8ehklmv3m09vbtc3sh18f/content.png?rlkey=1xpvadv5bla8vsm3mtkrp6nmk&st=mixw5oik&raw=1",
};

const HERO_BADGES = [
  { Icon: Gem, label: "Premium Quality Products" },
  { Icon: Globe, label: "Global Distribution Network" },
  { Icon: ShieldCheck, label: "Regulatory Compliant" },
  { Icon: FlaskConical, label: "Science-Based Nutrition" },
];

const CATEGORIES = [
  {
    title: "INFANT & YOUNG-CHILD NUTRITION",
    color: "bg-teal-50",
    text: "text-teal-800",
    Icon: Milk,
    image: stage3Front,
    desc: "Premium milk-based nutrition for healthy growth",
    bullets: ["Stage 1 (0–6 months)", "Stage 2 (6–12 months)", "Stage 3 (12–24 months)", "Stage 4 (24–36 months)", "Growing-up nutrition"],
  },
  {
    title: "FSMP & SPECIALISED NUTRITION",
    color: "bg-purple-50",
    text: "text-purple-800",
    Icon: HeartPulse,
    image: mimiPreterm,
    desc: "Nutrition for specific dietary and medical purposes",
    bullets: ["Mimi Preterm (FSMP)", "Clinical & Dietetic Nutrition", "Paediatric Nutrition", "Hospital & Pharmacy Use", "Special Dietary Needs"],
  },
  {
    title: "FOOD SUPPLEMENTS",
    color: "bg-amber-50",
    text: "text-amber-700",
    Icon: Pill,
    image: lg4,
    desc: "Vitamins, minerals, nutraceuticals and wellness products",
    bullets: ["Vitamins & Minerals", "Softgels, Capsules, Tablets", "Omega-3 & Fatty Acids", "Herbal & Botanical", "Immunity & Vitality"],
  },
  {
    title: "GENERAL NUTRITION",
    color: "bg-blue-50",
    text: "text-blue-800",
    Icon: Users,
    image: lg1,
    desc: "Nutrition for families, adults and active lifestyles",
    bullets: ["Nutrition Powders", "Protein & Wellness", "Active Lifestyle Nutrition", "Healthy Ageing", "Halal Nutrition Products"],
  },
  {
    title: "FUNCTIONAL DRINKS & WELLNESS FMCG",
    color: "bg-red-50",
    text: "text-red-700",
    Icon: GlassWater,
    image: lg2,
    desc: "Innovative functional and wellness beverages",
    bullets: ["Functional Drinks", "Herbal & Vitamin Drinks", "Wellness Shots", "Family Health Drinks", "Clean-Label FMCG"],
  },
  {
    title: "PHARMACY & RETAIL NUTRITION BRANDS",
    color: "bg-slate-100",
    text: "text-slate-800",
    Icon: ShoppingCart,
    image: lg3,
    desc: "Products for pharmacy, retail and online channels",
    bullets: ["Pharmacy-Ready Products", "Retail Nutrition Brands", "Online Nutrition Products", "Private Label Options", "Distributor Exclusive Lines"],
  },
];

const FEATURED_PRODUCT = {
  title: "RICH OMEGOS",
  subtitle: "Omega-3 • Astaxanthin • Vitamin E",
  pack: "Food Supplement — 60 Soft Capsules",
  description:
    "Rich Omegos is a convenient one-a-day food supplement combining fish oil concentrate, astaxanthin and vitamin E.",
  nutrientFacts: [
    { label: "Fish oil concentrate", value: "1,230 mg" },
    { label: "EPA", value: "221 mg" },
    { label: "DHA", value: "148 mg" },
    { label: "Astaxanthin", value: "6 mg" },
    { label: "Vitamin E", value: "5 mg α-TE" },
    { label: "NRV", value: "42%" },
  ],
  benefits: [
    "Heart function — EPA and DHA contribute to the normal function of the heart. The beneficial effect is obtained with a daily intake of 250 mg EPA and DHA.",
    "Protection from oxidative stress — Vitamin E contributes to the protection of cells from oxidative stress.",
  ],
  notes: [
    "EPA and DHA are long-chain omega-3 fatty acids naturally found in fish oil. Each daily capsule of Rich Omegos provides a combined 369 mg of EPA and DHA.",
    "Astaxanthin is a naturally occurring carotenoid. Rich Omegos provides 6 mg of astaxanthin from astaxanthin-rich oleoresin derived from the microalga Haematococcus pluvialis.",
  ],
  dailyIntake: [
    "Adults: Take one soft capsule daily with food and water. Swallow the capsule whole.",
    "Do not exceed the recommended daily intake.",
  ],
  importantInfo: [
    "Food supplements should not be used as a substitute for a varied, balanced diet and a healthy lifestyle.",
    "Keep out of reach of young children.",
    "Not intended for persons under 18 years of age.",
    "Consult a healthcare professional before use if you are pregnant or breastfeeding, taking anticoagulant or antiplatelet medication, have a medical condition, are receiving medical treatment or are scheduled for surgery.",
    "Do not use if you are allergic to fish, soya or any other ingredient.",
    "Discontinue use and seek professional advice if an adverse reaction occurs.",
  ],
  storage: [
    "Store in a cool, dry place below 25°C. Protect from direct sunlight and excessive heat.",
    "Keep the container or blister inside the original carton.",
    "Do not use after the best-before date printed on the package.",
    "Do not use if the packaging or protective seal is damaged.",
  ],
  ingredients: [
    "Fish oil concentrate (FISH); soft-capsule shell (bovine gelatine, humectant: glycerol, purified water); astaxanthin preparation (medium-chain triglycerides, astaxanthin-rich oleoresin from Haematococcus pluvialis, antioxidant: mixed tocopherols); emulsifier: SOYA lecithin; beeswax; vitamin E (D-alpha-tocopherol); anti-caking agent: silicon dioxide; antioxidants: mixed tocopherols and rosemary extract.",
    "Allergen information: For allergens, see ingredients in bold. Contains FISH and SOYA.",
  ],
  distributor: {
    name: "Vitarion Ltd",
    address: "Allied House, 29–39 London Road, Twickenham, TW1 3SZ, United Kingdom",
    tel: "+44 (0)7770 541212",
    email: "enquiries@vitarion.co.uk",
    web: "www.vitarion.co.uk",
  },
};

const WHY_PARTNER = [
  { Icon: Globe, label: "Global Market Access" },
  { Icon: ShieldCheck, label: "Quality Assurance" },
  { Icon: FlaskConical, label: "Regulatory Support" },
  { Icon: Truck, label: "Reliable Logistics Network" },
  { Icon: Handshake, label: "Long-Term Partnerships" },
  { Icon: Leaf, label: "Ethical & Halal Focus" },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans">
      <SiteHeader active="Products" accent="teal" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-[45%] lg:w-[50%]">
          <img
            src={IMAGES.hero}
            alt="Product lineup"
            className="w-full h-full object-cover object-right"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#eef6f6]/90 via-[#eef6f6]/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-teal-600 font-semibold tracking-[0.2em] text-xs mb-3">
              OUR PRODUCTS
            </p>
            <h1 className="font-serif text-4xl font-bold text-[#0c2c4d] leading-tight mb-4">
              Quality Nutrition. Trusted Worldwide.
            </h1>
            <div className="w-14 h-1 bg-teal-500 rounded-full mb-5" />
            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-md">
              VITARION LTD offers a carefully selected portfolio of FMCG,
              FSMP, general nutrition and food supplements for
              international markets through trusted manufacturer
              partnerships.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {HERO_BADGES.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <Icon size={16} className="text-teal-600" /> {label}
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-[22rem]" />
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl font-extrabold text-center text-[#0c2c4d] mb-2">
          OUR PRODUCT CATEGORIES
        </h2>
        <div className="w-14 h-1 bg-teal-500 rounded-full mx-auto mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map(({ title, color, text, Icon, image, desc, bullets }) => (
            <div key={title} className={`relative overflow-hidden rounded-xl ${color}`}>
              <img
                src={image}
                alt=""
                className="absolute inset-y-0 right-0 w-[45%] h-full object-cover opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-r to-transparent" />
              <div className="relative flex items-center p-6">
                <div className="flex-1 min-w-0 pr-6">
                  <h3 className={`font-extrabold text-sm mb-2 ${text}`}>{title}</h3>
                  <p className="text-xs text-slate-500 mb-4">{desc}</p>
                  <ul className="text-xs text-slate-600 space-y-2 mb-4">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <Icon size={14} className={text} /> {b}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className={`inline-flex items-center gap-1 text-xs font-semibold ${text}`}>
                    View Products <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured product detail */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-[28px] border border-slate-200 bg-[#f8fbfc] p-6 md:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-teal-600 font-semibold tracking-[0.2em] text-[10px] mb-3">FEATURED PRODUCT</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0c2c4d] mb-2">
                {FEATURED_PRODUCT.title}
              </h2>
              <p className="text-lg font-semibold text-slate-700 mb-1">
                {FEATURED_PRODUCT.subtitle}
              </p>
              <p className="text-sm text-slate-500 mb-5">{FEATURED_PRODUCT.pack}</p>
              <p className="text-sm leading-relaxed text-slate-600 mb-6">
                {FEATURED_PRODUCT.description}
              </p>
            </div>
            <div className="lg:max-w-md w-full rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-3">Each soft capsule provides</p>
              <div className="grid grid-cols-2 gap-3">
                {FEATURED_PRODUCT.nutrientFacts.map(({ label, value }) => (
                  <div key={label} className="rounded-xl bg-slate-50 border border-slate-100 p-3">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">{label}</p>
                    <p className="text-lg font-extrabold text-[#0c2c4d] mt-1">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-5">
              <h3 className="text-base font-extrabold text-[#0c2c4d] mb-3">Nutritional benefits</h3>
              <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                {FEATURED_PRODUCT.benefits.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 text-teal-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-5">
              <h3 className="text-base font-extrabold text-[#0c2c4d] mb-3">What are EPA and DHA?</h3>
              <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                {FEATURED_PRODUCT.notes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 text-teal-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-5">
              <h3 className="text-base font-extrabold text-[#0c2c4d] mb-3">Recommended daily intake</h3>
              <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                {FEATURED_PRODUCT.dailyIntake.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 text-teal-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-5">
              <h3 className="text-base font-extrabold text-[#0c2c4d] mb-3">Important information</h3>
              <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                {FEATURED_PRODUCT.importantInfo.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 text-amber-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-slate-200 p-5">
              <h3 className="text-base font-extrabold text-[#0c2c4d] mb-3">Storage & ingredients</h3>
              <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
                {FEATURED_PRODUCT.storage.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 text-teal-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
                {FEATURED_PRODUCT.ingredients.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 text-teal-600">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-[#0c2c4d] p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200 mb-2">Imported and distributed in the United Kingdom by</p>
            <p className="text-2xl font-extrabold mb-1">{FEATURED_PRODUCT.distributor.name}</p>
            <p className="text-sm text-slate-200">{FEATURED_PRODUCT.distributor.address}</p>
            <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm text-slate-100">
              <p>Tel: {FEATURED_PRODUCT.distributor.tel}</p>
              <p>Email: {FEATURED_PRODUCT.distributor.email}</p>
              <p>Web: {FEATURED_PRODUCT.distributor.web}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mimi Organics + ANFA banners */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl p-7 text-center" style={{ background: "linear-gradient(135deg,#f3eefc,#fdf6ec)" }}>
          <div className="flex items-baseline justify-center gap-2 mb-1">
            <span className="text-2xl font-extrabold text-green-700">mimi</span>
            <span className="text-sm font-extrabold text-amber-500">organics</span>
          </div>
          <p className="font-bold text-amber-600 text-sm mb-2">Premium Nutrition Line</p>
          <p className="text-xs text-slate-500 leading-relaxed mb-6 max-w-sm mx-auto">
            Designed for every stage of your child&apos;s growth with love,
            care and advanced nutrition.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
            {[
              { label: "Stage One", src: stage1Front },
              { label: "Stage Two", src: stage2Front },
              { label: "Stage Three", src: stage3Front },
              { label: "Stage Four", src: stage4Front },
              { label: "Preterm", src: mimiPreterm },
            ].map((item) => (
              <div key={item.label} className="overflow-hidden rounded bg-white/70 border border-purple-100">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-20 object-cover"
                />
              </div>
            ))}
          </div>
          <button className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 transition-colors text-white font-semibold text-xs px-5 py-2.5 rounded-lg">
            EXPLORE MIMI ORGANICS <ArrowRight size={14} />
          </button>
        </div>

        <div className="rounded-2xl p-7 bg-blue-50 text-center">
          <p className="text-xl font-extrabold text-blue-900 mb-1">ANFA</p>
          <p className="text-[10px] tracking-[0.2em] text-blue-500 font-semibold mb-2">PHARMACEUTICALS</p>
          <p className="font-bold text-blue-800 text-sm mb-2">Trusted Supplements Portfolio</p>
          <p className="text-xs text-slate-500 leading-relaxed mb-6 max-w-sm mx-auto">
            High-quality nutraceutical and supplement products developed
            with science and care.
          </p>
          <div className="mb-6">
            <div className="overflow-hidden rounded border border-blue-100 bg-white">
              <img
                src={anfaProduct}
                alt="ANFA product lineup"
                className="w-full h-28 object-contain bg-white"
              />
            </div>
          </div>
          <button className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 transition-colors text-white font-semibold text-xs px-5 py-2.5 rounded-lg">
            VIEW SUPPLEMENTS PORTFOLIO <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* Why partner */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-lg font-extrabold text-center text-[#0c2c4d] mb-8">
          WHY PARTNER WITH VITARION LTD?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 border-t border-b border-slate-100 py-8">
          {WHY_PARTNER.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <Icon size={22} className="text-teal-600" />
              <p className="text-xs font-semibold text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0c2c4d]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold">
              Looking to introduce your products to new markets?
            </p>
            <p className="text-slate-300 text-sm">
              Let&apos;s build a successful partnership together.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button className="inline-flex items-center gap-2 bg-white text-[#0c2c4d] hover:bg-slate-100 transition-colors font-semibold text-sm px-5 py-3 rounded-lg">
              CONTACT US <ArrowRight size={16} />
            </button>
            <button className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 transition-colors text-white font-semibold text-sm px-5 py-3 rounded-lg">
              DISCUSS PARTNERSHIP <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <SiteFooter
        columns={[
          { title: "QUICK LINKS", items: ["Home", "About", "Business Areas", "Products", "Mimi Organics"] },
          { title: "", items: ["Partnerships", "Quality & Compliance", "Contact", "Privacy Policy"] },
          { title: "", items: ["Terms of Use", "Cookie Policy"] },
        ]}
      />
    </div>
  );
} 