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