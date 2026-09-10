import React from "react";
import {
  ShoppingCart,
  Stethoscope,
  Leaf,
  Pill,
  Building2,
  Globe,
  Target,
  Award,
  Users,
  Baby,
  Package,
  Truck,
  ShieldCheck,
  Ribbon,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Milk,
  BabyIcon,
  Package2,
  CupSoda,
} from "lucide-react";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const IMAGES = {
  hero: "https://www.dropbox.com/scl/fi/hl6t6ey738tdrg6izikcw/content-2.png?rlkey=e97teqh2boj7lo53quxo6h8vl&st=knx1zxq5&raw=1",
  fmcg: "https://images.unsplash.com/photo-1704713911962-409fa07a4a3a?w=700&q=80&auto=format&fit=crop",
  fsmp: "https://images.unsplash.com/photo-1632053002928-1919605ee6f7?w=700&q=80&auto=format&fit=crop",
  nutrition: "https://images.unsplash.com/photo-1576089073624-b5751a8f4de9?w=700&q=80&auto=format&fit=crop",
  supplements: "https://images.unsplash.com/photo-1556739664-787e863d09c4?w=700&q=80&auto=format&fit=crop",
};

const BUSINESS_AREAS = [
  {
    title: "FMCG",
    Icon: ShoppingCart,
    color: "bg-teal-600",
    text: "text-[#0c2c4d]",
    link: "text-teal-700",
    image: IMAGES.fmcg,
    desc: "Fast-moving consumer goods distribution and sourcing for selected international markets.",
  },
  {
    title: "FSMP",
    Icon: Stethoscope,
    color: "bg-purple-700",
    text: "text-purple-700",
    link: "text-purple-700",
    image: IMAGES.fsmp,
    desc: "Specialised nutrition products for specific dietary and medical purposes, subject to local regulatory requirements.",
  },
  {
    title: "GENERAL NUTRITION",
    Icon: Leaf,
    color: "bg-green-600",
    text: "text-green-700",
    link: "text-green-700",
    image: IMAGES.nutrition,
    desc: "Nutrition products for families, children, adults and active lifestyles.",
  },
  {
    title: "FOOD SUPPLEMENTS",
    Icon: Pill,
    color: "bg-amber-500",
    text: "text-amber-600",
    link: "text-amber-600",
    image: IMAGES.supplements,
    desc: "High-quality vitamins, minerals, nutraceuticals and wellness products for pharmacy, retail and online channels.",
  },
];

const ABOUT_POINTS_LEFT = [
  { Icon: Building2, label: "UK-Based Company" },
  { Icon: Globe, label: "Global Distribution" },
  { Icon: Target, label: "FMCG & Nutrition Focus" },
];

const ABOUT_POINTS_RIGHT = [
  { Icon: Award, label: "Brand Representation" },
  { Icon: Package, label: "Import / Export Support" },
  { Icon: Users, label: "Long-term Partnerships" },
];

const PRODUCT_CATS_LEFT = [
  "Infant and young-child nutrition",
  "FSMP and specialised medical nutrition",
  "General nutrition powders",
  "Vitamins and minerals",
];

const PRODUCT_CATS_RIGHT = [
  "Softgels, capsules and tablets",
  "Functional drinks and wellness FMCG",
  "Halal nutrition products",
  "Pharmacy and retail nutrition brands",
];

const MIMI_STAGES = [
  { label: "STAGE 1", months: "0–6 MONTHS", icon: Milk, color: "#22c55e" },
  { label: "STAGE 2", months: "6–12 MONTHS", icon: BabyIcon, color: "#3b82f6" },
  { label: "STAGE 3", months: "12–24 MONTHS", icon: Package2, color: "#d97706" },
  { label: "STAGE 4", months: "24–36 MONTHS", icon: CupSoda, color: "#7e22ce" },
];


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans">
      <SiteHeader active="Home" accent="teal" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#eef6f6] to-white">
        <div className="absolute inset-y-0 right-0 w-[45%] lg:w-[50%]">
          <img
            src={IMAGES.hero}
            alt="VITARION hero background"
            className="w-full h-full object-cover object-right"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(238,246,246,0.65),transparent_35%),linear-gradient(90deg,rgba(238,246,246,0.96)_0%,rgba(238,246,246,0.82)_42%,rgba(12,44,77,0.18)_100%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif text-4xl sm:text-[2.75rem] font-bold text-[#0c2c4d] leading-tight mb-5">
              UK-Based Global Distribution for FMCG, FSMP &amp; Nutrition
              Products
            </h1>
            <div className="w-14 h-1 bg-teal-500 rounded-full mb-5" />
            <p className="text-slate-600 leading-relaxed mb-8 max-w-lg">
              VITARION LTD is a United Kingdom–based company engaged in the
              sourcing, distribution and international trade of FMCG,
              FSMP, general nutrition and supplement products across
              global markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-1 bg-[#0c2c4d] hover:bg-[#0a2340] transition-colors text-white font-semibold text-sm px-6 py-3 rounded-lg">
                EXPLORE OUR BUSINESS <ChevronRight size={16} />
              </button>
              <button className="inline-flex items-center gap-1 border border-[#0c2c4d] text-[#0c2c4d] hover:bg-[#0c2c4d] hover:text-white transition-colors font-semibold text-sm px-6 py-3 rounded-lg">
                CONTACT US <ChevronRight size={16} />
              </button>
            </div>
          </div>
          <div className="min-h-[22rem]" />
        </div>
      </section>

      {/* Business Areas */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-[#0c2c4d] mb-2">
          OUR BUSINESS AREAS
        </h2>
        <div className="w-14 h-1 bg-teal-500 rounded-full mx-auto mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_AREAS.map(({ title, Icon, color, text, link, image, desc }) => (
            <div key={title} className="rounded-xl overflow-hidden bg-white shadow-sm border border-slate-100">
              <div className="relative h-32">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <span className={`absolute -bottom-5 left-5 w-11 h-11 rounded-full ${color} flex items-center justify-center shadow-lg`}>
                  <Icon size={20} className="text-white" />
                </span>
              </div>
              <div className="pt-8 pb-6 px-5">
                <h3 className={`font-bold mb-2 ${text}`}>{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{desc}</p>
                <a href="#" className={`inline-flex items-center gap-1 text-sm font-semibold ${link}`}>
                  Learn more <ChevronRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About + Product Categories */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-extrabold text-[#0c2c4d] mb-2">ABOUT VITARION LTD</h2>
          <div className="w-10 h-1 bg-teal-500 rounded-full mb-5" />
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            We connect reliable manufacturers with trusted international
            markets by offering professional distribution, market entry
            support, regulatory coordination and brand representation.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            From the United Kingdom, we build long-term partnerships with
            manufacturers and brands seeking international growth.
          </p>
          <div className="grid grid-cols-2 gap-y-4 mb-6">
            <ul className="space-y-3">
              {ABOUT_POINTS_LEFT.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon size={16} className="text-teal-600" /> {label}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {ABOUT_POINTS_RIGHT.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon size={16} className="text-teal-600" /> {label}
                </li>
              ))}
            </ul>
          </div>
          <button className="inline-flex items-center gap-1 bg-[#0c2c4d] hover:bg-[#0a2340] transition-colors text-white font-semibold text-sm px-6 py-3 rounded-lg">
            MORE ABOUT US <ChevronRight size={16} />
          </button>
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-[#0c2c4d] mb-2">OUR PRODUCT CATEGORIES</h2>
          <div className="w-10 h-1 bg-teal-500 rounded-full mb-5" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-5">
            <ul className="space-y-4">
              {PRODUCT_CATS_LEFT.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <Package size={16} className="text-slate-400 mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {PRODUCT_CATS_RIGHT.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <Pill size={16} className="text-slate-400 mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-100 pt-4">
            All product supply and distribution activities are subject to
            applicable laws, regulatory requirements and market
            authorisations in the relevant countries.
          </p>
        </div>
      </section>

      {/* Mimi Organics banner */}
  <section className="max-w-7xl mx-auto px-6 py-10">
  <div
    className="rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 items-center"
    style={{ background: "linear-gradient(135deg,#f6f2fc,#f9f7fb)" }}
  >
    {/* Логотип */}
    <div className="flex flex-col items-center lg:items-start">
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-extrabold" style={{ color: "#166534" }}>mimi</span>
      </div>
      <span className="text-[10px] tracking-[0.3em] text-amber-500 font-semibold mt-1">
        ORGANICS
      </span>
    </div>

    {/* Центральный блок */}
    <div>
      <h3 className="text-lg font-extrabold text-purple-800 text-center mb-1">
        Mimi Organics – Premium Nutrition Line
      </h3>
      <p className="text-sm text-slate-500 text-center mb-6">
        Developed for infant, young-child and specialised nutrition categories.
      </p>

      <div className="flex items-center justify-center flex-wrap gap-4 mb-7">
        {MIMI_STAGES.map((s, i) => {
          const Icon = s.icon;
          return (
            <React.Fragment key={s.label}>
              <div className="flex flex-col items-center gap-2 w-24">
                <div
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm"
                  style={{ border: `1.5px solid ${s.color}33` }}
                >
                  <Icon size={18} style={{ color: s.color }} />
                </div>
                <div className="text-center leading-tight">
                  <p className="text-[11px] font-extrabold text-slate-700">{s.label}</p>
                  <p className="text-[10px] text-slate-400">{s.months}</p>
                </div>
              </div>
              {i < MIMI_STAGES.length - 1 && (
                <ChevronRight size={16} className="text-slate-300 mb-6" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="text-center">
        <button className="inline-flex items-center gap-1 bg-purple-700 hover:bg-purple-800 transition-colors text-white font-semibold text-sm px-6 py-3 rounded-lg">
          EXPLORE MIMI ORGANICS <ChevronRight size={16} />
        </button>
      </div>
    </div>

    {/* Карточка MIMI PRETERM */}
    <div className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4 max-w-xs">
      <Ribbon size={26} className="text-purple-700 shrink-0 mt-1" />
      <div>
        <p className="font-extrabold text-purple-700 mb-1 text-sm">MIMI PRETERM</p>
        <p className="text-xs text-slate-500 leading-relaxed">
          Specialised FSMP nutrition for premature and low-birth-weight infants, for use under medical supervision.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Two info cards */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-100 shadow-sm p-6 flex gap-4">
          <span className="w-11 h-11 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
            <Globe size={20} className="text-white" />
          </span>
          <div>
            <h3 className="font-bold text-[#0c2c4d] mb-1">GLOBAL DISTRIBUTION &amp; PARTNERSHIPS</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-2">
              We work with manufacturers, brand owners and commercial
              partners to support international market access and
              long-term distribution.
            </p>
            <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
              LEARN MORE <ChevronRight size={14} />
            </a>
          </div>
        </div>
        <div className="rounded-xl border border-slate-100 shadow-sm p-6 flex gap-4">
          <span className="w-11 h-11 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
            <ShieldCheck size={20} className="text-white" />
          </span>
          <div>
            <h3 className="font-bold text-[#0c2c4d] mb-1">QUALITY, SAFETY &amp; COMPLIANCE</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-2">
              We are committed to quality, safety and compliance with
              international standards and regulatory requirements.
            </p>
            <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
              LEARN MORE <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0c2c4d] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-[1.3fr_1fr] gap-8 items-center relative">
          <div className="flex items-start gap-4">
            <span className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center shrink-0">
              <Mail size={20} className="text-white" />
            </span>
            <div>
              <h3 className="text-xl font-extrabold text-white mb-1">LET&apos;S BUILD SUCCESS TOGETHER</h3>
              <p className="text-slate-300 text-sm mb-4">
                We are always open to new opportunities and partnerships.
                Get in touch with us today.
              </p>
              <button className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 transition-colors text-white font-semibold text-sm px-6 py-3 rounded-lg">
                CONTACT US <ChevronRight size={16} />
              </button>
            </div>
          </div>
          <div className="text-slate-200 text-sm space-y-3">
            <p className="flex items-center gap-2"><Phone size={16} /> +44 7770 54 0202</p>
            <p className="flex items-center gap-2"><Mail size={16} /> info@vitarion.co.uk</p>
            <p className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> 71–75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom</p>
          </div>
        </div>
      </section>

      <SiteFooter
        columns={[
          { title: "QUICK LINKS", items: ["About", "Business Areas", "Products", "Mimi Organics"] },
          { title: "", items: ["Partnerships", "Quality & Compliance", "Contact", "Privacy Policy"] },
          { title: "", items: ["Terms of Use", "Cookie Policy"] },
        ]}
      />
    </div>
  );
}