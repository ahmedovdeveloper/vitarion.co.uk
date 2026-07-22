import React from "react";
import stage1Front from "../assets/stage1-front.jpg";
import stage2Front from "../assets/stage2-front.jpg";
import stage3Front from "../assets/stage3-front.jpg";
import stage4Front from "../assets/stage4-front.jpg";
import mimiPreterm from "../assets/mimi-preterm.jpg";
import {
  Leaf,
  Droplet,
  ShieldCheck,
  Brain,
  Heart,
  BadgeCheck,
  Baby,
  Milk,
  ChevronRight,
  Package,
  Truck,
  Users,
  Zap,
  Sparkles,
  Ribbon,
  ArrowRight,
  Download,
} from "lucide-react";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80&auto=format&fit=crop",
};

const HERO_BADGES = [
  { Icon: Leaf, label: "ORGANIC INGREDIENTS" },
  { Icon: Droplet, label: "NO PALM OIL, NO GMOS" },
  { Icon: ShieldCheck, label: "GENTLE NUTRITION" },
  { Icon: Brain, label: "SCIENTIFICALLY FORMULATED" },
  { Icon: BadgeCheck, label: "EU ORGANIC CERTIFIED" },
];

const RANGE = [
  { label: "STAGE 1", sub: "0–6 MONTHS", desc: "Infant Milk Formula", color: "text-green-700 bg-green-50" },
  { label: "STAGE 2", sub: "6–12 MONTHS", desc: "Follow-On Formula", color: "text-blue-700 bg-blue-50" },
  { label: "STAGE 3", sub: "12–24 MONTHS", desc: "Growing-Up Milk", color: "text-orange-700 bg-orange-50" },
  { label: "STAGE 4", sub: "24–36 MONTHS", desc: "Growing-Up Milk", color: "text-purple-700 bg-purple-50" },
  { label: "PRETERM", sub: "FROM BIRTH", desc: "Specialised FSMP Nutrition", color: "text-purple-800 bg-purple-50" },
];

const PRODUCTS = [
  {
    stage: "STAGE 1",
    age: "0–6 MONTHS",
    name: "Infant Milk Formula",
    image: stage1Front,
    color: "text-green-700",
    btn: "bg-green-700 hover:bg-green-800",
    bullets: [
      "Organic infant milk formula",
      "Made with organic milk",
      "Lactose only",
      "DHA & ARA",
      "GOS/FOS prebiotics",
      "No palm oil, No GMOs",
      "Vitamins & minerals",
    ],
  },
  {
    stage: "STAGE 2",
    age: "6–12 MONTHS",
    name: "Follow-On Formula",
    image: stage2Front,
    color: "text-blue-700",
    btn: "bg-blue-700 hover:bg-blue-800",
    bullets: [
      "Organic follow-on formula",
      "Made with organic milk",
      "Lactose as main carbohydrate",
      "DHA & ARA",
      "GOS/FOS & optional HMO",
      "Iron, Calcium, Vitamin D",
      "No palm oil, No GMOs",
    ],
  },
  {
    stage: "STAGE 3",
    age: "12–24 MONTHS",
    name: "Growing-Up Milk",
    image: stage3Front,
    color: "text-orange-700",
    btn: "bg-orange-600 hover:bg-orange-700",
    bullets: [
      "Organic growing-up milk",
      "No added sucrose",
      "Prebiotics & fibre",
      "DHA for brain development",
      "Iron, Iodine, Zinc",
      "Calcium & Vitamin D3",
      "Gentle nutrition for toddlers",
    ],
  },
  {
    stage: "STAGE 4",
    age: "24–36 MONTHS",
    name: "Growing-Up Milk",
    image: stage4Front,
    color: "text-purple-700",
    btn: "bg-purple-700 hover:bg-purple-800",
    bullets: [
      "Organic growing-up milk",
      "No added sucrose",
      "Prebiotics & fibre",
      "DHA support",
      "Calcium, Vitamin D3, Iron",
      "Iodine & Zinc",
      "Daily nutrition for toddlers",
    ],
  },
  {
    stage: "MIMI PRETERM",
    age: "FROM BIRTH",
    name: "Specialised FSMP Nutrition",
    image: mimiPreterm,
    color: "text-purple-800",
    btn: "bg-purple-800 hover:bg-purple-900",
    bullets: [
      "For premature & LBW infants",
      "High energy & protein enriched",
      "DHA & ARA",
      "DHT Oils & OPO structured fat",
      "Nucleotides, Choline, Taurine",
      "Under medical supervision",
    ],
  },
];

const WHY_CHOOSE = [
  { Icon: Leaf, title: "ORGANIC INGREDIENTS", text: "Made with carefully selected organic ingredients." },
  { Icon: Droplet, title: "NO PALM OIL, NO GMOS", text: "Clean formulations for your child's gentle nutrition." },
  { Icon: ShieldCheck, title: "SCIENTIFIC NUTRITION", text: "Formulated with modern science and global nutritional standards." },
  { Icon: Brain, title: "SUPPORTS GROWTH & DEVELOPMENT", text: "DHA, ARA and essential nutrients for healthy growth and brain development." },
  { Icon: Heart, title: "GENTLE & EASY TO DIGEST", text: "Lactose based nutrition with prebiotics for healthy digestion." },
  { Icon: Sparkles, title: "EU ORGANIC CERTIFIED", text: "Produced under strict quality and safety standards.", highlight: true },
];

const PRETERM_BADGES = [
  { Icon: Zap, label: "HIGH ENERGY", sub: "80 kcal / 100 ml" },
  { Icon: Milk, label: "PROTEIN ENRICHED", sub: "" },
  { Icon: Brain, label: "DHA & ARA SUPPORT", sub: "" },
  { Icon: Droplet, label: "MCT OILS & OPO FAT", sub: "" },
  { Icon: ShieldCheck, label: "UNDER MEDICAL SUPERVISION", sub: "" },
];

const BOTTOM_CARDS = [
  { Icon: ShieldCheck, title: "QUALITY & SAFETY", text: "Manufactured to international quality standards with strict quality control and testing.", cta: "Learn more" },
  { Icon: Package, title: "PACKAGING", text: "Premium packaging designed to preserve freshness and ensure product safety.", cta: "Learn more" },
  { Icon: Truck, title: "DISTRIBUTION", text: "Available through pharmacies, healthcare partners, retailers and professional channels.", cta: "Learn more" },
  { Icon: Users, title: "PARTNERSHIPS", text: "We welcome distributors, pharmacy chains, retailers and business partners.", cta: "Partner with us" },
];

export default function MimiOrganicsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans">
      <SiteHeader active="Mimi Organics" accent="green" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={IMAGES.hero} alt="" className="absolute inset-0 w-full h-full opacity-15" />
        <div className="max-w-7xl mx-auto px-6 py-14 relative">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-4xl font-extrabold text-green-700">mimi</span>
            <span className="text-2xl font-extrabold text-amber-500">organics</span>
            <Leaf size={22} className="text-green-600" />
          </div>
          <p className="text-xs tracking-[0.3em] text-slate-400 font-semibold mb-6">
            — PURE NUTRITION. ORGANIC BEGINNINGS. —
          </p>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-green-800 mb-4 max-w-xl">
            Premium Nutrition for Every Stage of Growth
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mb-1">
            Mimi Organics is a premium nutrition line developed for infant,
            young-child and specialised nutrition categories.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mb-6">
            A complete range crafted with organic ingredients, modern
            science and gentle nutrition to support your child&apos;s
            healthy growth, development and strong start in life.
          </p>
          <div className="flex flex-wrap gap-6">
            {HERO_BADGES.map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center w-20">
                <span className="w-11 h-11 rounded-full border border-green-200 flex items-center justify-center mb-2">
                  <Icon size={18} className="text-green-700" />
                </span>
                <p className="text-[10px] font-semibold text-slate-500 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Range */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-xl font-extrabold text-center text-green-800 mb-8">
          THE MIMI ORGANICS RANGE
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {RANGE.map((r) => (
            <div key={r.label} className={`rounded-xl border border-slate-100 p-5 text-center ${r.color}`}>
              <Baby size={22} className="mx-auto mb-2" />
              <p className="font-extrabold text-sm">{r.label}</p>
              <p className="text-[11px] text-slate-500 mb-1">{r.sub}</p>
              <p className="text-xs font-semibold">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products in detail */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-xl font-extrabold text-center text-green-800 mb-8">
          OUR PRODUCTS IN DETAIL
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((p) => (
            <div key={p.stage} className="rounded-xl border border-slate-100 shadow-sm bg-white flex flex-col overflow-hidden">
              <div className="h-50 bg-slate-50">
                <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className={`font-extrabold text-sm ${p.color}`}>{p.stage}</p>
                <p className="text-xs text-slate-400 mb-1">{p.age}</p>
                <p className="text-sm font-bold text-slate-800 mb-3">{p.name}</p>
                <ul className="text-xs text-slate-500 space-y-1 mb-4 flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-1.5"><span>•</span><span>{b}</span></li>
                  ))}
                </ul>
                <button className={`w-full text-white text-xs font-semibold py-2.5 rounded-lg transition-colors ${p.btn}`}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-xl font-extrabold text-center text-green-800 mb-8">
          WHY CHOOSE MIMI ORGANICS?
        </h2>
        <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {WHY_CHOOSE.map(({ Icon, title, text, highlight }) => (
            <div
              key={title}
              className={`rounded-xl p-5 text-center border ${
                highlight ? "bg-green-600 text-white border-green-600" : "border-slate-100 bg-white"
              }`}
            >
              <Icon size={26} className={`mx-auto mb-3 ${highlight ? "text-white" : "text-green-700"}`} />
              <p className={`text-xs font-bold mb-2 ${highlight ? "text-white" : "text-slate-800"}`}>{title}</p>
              <p className={`text-[11px] leading-relaxed ${highlight ? "text-green-50" : "text-slate-500"}`}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mimi Preterm detail */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="rounded-2xl border border-slate-100 shadow-sm p-7 grid lg:grid-cols-[220px_1fr_260px] gap-8 items-center">
          <div className="h-48 bg-slate-50 rounded-xl overflow-hidden">
            <img src={mimiPreterm} alt="Mimi Preterm product" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-extrabold text-purple-800 mb-1">MIMI PRETERM</p>
            <p className="text-sm font-bold text-slate-800 mb-3">
              Specialised FSMP Nutrition – For Premature and Low Birth
              Weight Infants
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              Mimi Preterm is a Food for Special Medical Purposes (FSMP)
              concept developed for premature and low birth weight
              infants. It is a high energy, protein enriched formula with
              MCT oils, OPO structured fat, DHA, ARA, nucleotides, vitamins
              and minerals.
            </p>
            <div className="flex flex-wrap gap-5">
              {PRETERM_BADGES.map(({ Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center text-center w-24">
                  <span className="w-11 h-11 rounded-full border border-purple-200 flex items-center justify-center mb-1.5">
                    <Icon size={18} className="text-purple-700" />
                  </span>
                  <p className="text-[10px] font-semibold text-slate-600 leading-tight">{label}</p>
                  {sub && <p className="text-[9px] text-slate-400">{sub}</p>}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-100 p-5">
            <p className="font-bold text-slate-800 text-xs mb-2">IMPORTANT NOTE</p>
            <p className="text-xs text-slate-500 leading-relaxed mb-2">
              Mimi Preterm is not a general consumer product.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              It is designed for use under medical supervision and must be
              used as directed by a healthcare professional.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom 4 cards */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BOTTOM_CARDS.map(({ Icon, title, text, cta }) => (
          <div key={title} className="rounded-xl border border-slate-100 p-6">
            <span className="w-11 h-11 rounded-full bg-green-50 flex items-center justify-center mb-4">
              <Icon size={20} className="text-green-700" />
            </span>
            <h3 className="font-bold text-[#0c2c4d] text-sm mb-2">{title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">{text}</p>
            <a href="#" className="inline-flex items-center gap-1 text-xs font-semibold text-green-700">
              {cta} <ArrowRight size={13} />
            </a>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-green-800">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center shrink-0">
              <Leaf size={20} className="text-white" />
            </span>
            <h3 className="text-lg font-extrabold text-white">
              Interested in Mimi Organics distribution?
            </h3>
          </div>
          <p className="text-green-100 text-sm max-w-md">
            VITARION LTD is open to cooperation with manufacturers,
            distributors, pharmacy partners, retailers and market-entry
            partners worldwide.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button className="inline-flex items-center gap-2 bg-white text-green-800 hover:bg-green-50 transition-colors font-semibold text-sm px-5 py-3 rounded-lg">
              CONTACT VITARION LTD <ArrowRight size={16} />
            </button>
            <button className="inline-flex items-center gap-2 border border-white/50 text-white hover:bg-white/10 transition-colors font-semibold text-sm px-5 py-3 rounded-lg">
              DOWNLOAD BROCHURE <Download size={16} />
            </button>
          </div>
        </div>
      </section>

      <SiteFooter
        bg="bg-[#0a2e1c]"
        columns={[
          { title: "QUICK LINKS", items: ["Home", "About", "Business Areas", "Products", "Mimi Organics"] },
          { title: "", items: ["Partnerships", "Quality & Compliance", "Contact", "Privacy Policy"] },
          { title: "", items: ["Terms of Use", "Cookie Policy"] },
        ]}
      />
    </div>
  );
}