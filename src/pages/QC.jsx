import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  ClipboardCheck,
  Handshake,
  Factory,
  Globe,
  FlaskConical,
  Beaker,
  FileText,
  Info,
  ShoppingCart,
  Pill,
  Milk,
  HeartPulse,
  Leaf,
  Users,
  XCircle,
  FolderCheck,
  ArrowRight,
  Download,
} from "lucide-react";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

// Product images for the "Product Category Compliance" cards.
// Adjust the path/extension below to match where your files actually live,
// e.g. "../assets/r1.png", "../assets/r1.jpg", "../assets/r1.webp", etc.
import r1 from "../assets/r1.jpg";
import r2 from "../assets/r2.jpg";
import r3 from "../assets/r3.jpg";
import r4 from "../assets/r4.jpg";
import r5 from "../assets/r5.png";

const IMAGES = {
  hero: "https://www.dropbox.com/scl/fi/5z53slddtm32e01f2p0p0/content-3.png?rlkey=6hpz1dix4p02sef6m6rhlpfls&st=r3fqhwrq&raw=1",
};

const HERO_BADGES = [
  { Icon: ShieldCheck, label: "QUALITY FIRST" },
  { Icon: CheckCircle2, label: "SAFETY ASSURED" },
  { Icon: ClipboardCheck, label: "COMPLIANCE FOCUSED" },
  { Icon: Handshake, label: "TRUSTED PARTNERSHIPS" },
];

const STANDARDS = [
  { Icon: Factory, title: "GMP", text: "Good Manufacturing Practice ensures consistent and controlled production according to quality requirements." },
  { Icon: Globe, title: "ISO STANDARDS", text: "Relevant ISO certifications support quality management, food safety and operational excellence." },
  { Icon: CheckCircle2, title: "HACCP", text: "Hazard Analysis and Critical Control Points to identify, evaluate and control food safety hazards." },
  { Icon: FlaskConical, title: "LABORATORY TESTING", text: "Microbiological, heavy metal, contaminant and other essential tests to ensure product safety." },
  { Icon: CheckCircle2, title: "FOOD SAFETY SYSTEMS", text: "Robust food safety systems to protect consumers and support international market access." },
  { Icon: FileText, title: "REGULATORY READINESS", text: "Market-specific regulatory review of labels, claims, ingredients and product information." },
];

const DOC_COLUMNS = [
  {
    title: "COMPANY & MANUFACTURING DOCUMENTS",
    items: ["Company profile", "Manufacturing licence", "GMP certificate", "ISO certificate", "HACCP certificate", "Halal certificate (where applicable)", "Free sale certificate (where applicable)", "Export permission (where applicable)"],
  },
  {
    title: "PRODUCT DOCUMENTS",
    items: ["Product specification", "Ingredient list", "Nutrition facts", "Certificate of Analysis", "Finished product specification", "Shelf-life statement", "Packaging artwork"],
  },
  {
    title: "SAFETY & TESTING DOCUMENTS",
    items: ["Microbiological test report", "Heavy metal test report", "Pesticide residue report (where applicable)", "Aflatoxin testing", "Contaminant testing", "Batch testing records", "Stability data"],
  },
  {
    title: "REGULATORY & LABEL DOCUMENTS",
    items: ["Product registration certificates", "Label text & artwork", "Claims substantiation", "Instructions for use", "Warning statements", "Language translations", "Country-specific compliance review"],
  },
  {
    title: "INFANT & SPECIALISED NUTRITION DOCUMENTS",
    items: ["Formula composition", "Nutritional analysis", "DHA / ARA profile", "Microbiological safety", "Heavy metal & contaminant testing", "Preparation instructions", "Breastfeeding notice", "Age suitability & claims"],
  },
  {
    title: "FSMP & CLINICAL NUTRITION DOCUMENTS",
    items: ["Scientific / clinical rationale", "Intended use statement", "Target population", "Medical supervision wording", "Osmolality (where relevant)", "Renal solute load (where relevant)", "Regulatory approval / notification"],
  },
];

const CATEGORY_COMPLIANCE = [
  { Icon: ShoppingCart, title: "FMCG", text: "We ensure that all FMCG products meet food safety, labelling, packaging and country-specific regulatory requirements.", image: r1 },
  { Icon: Pill, title: "FOOD SUPPLEMENTS", text: "Ingredient safety, dosage, claims, warning statements and labelling are reviewed for each target market.", image: r2 },
  { Icon: Milk, title: "INFANT & YOUNG-CHILD NUTRITION", text: "The highest standards of safety, quality and compliance for infant and young-child nutrition products.", image: r3 },
  { Icon: HeartPulse, title: "FSMP & SPECIALISED NUTRITION", text: "Specialised products are handled with strict regulatory awareness and intended for professional use only.", image: r4 },
  { Icon: Leaf, title: "GENERAL NUTRITION & WELLNESS", text: "Quality ingredients, clean formulations and reliable manufacturing are essential to our selection.", image: r5 },
];

const COMMITMENTS = [
  { Icon: XCircle, label: "No unsupported claims" },
  { Icon: ShieldCheck, label: "No false approval statements" },
  { Icon: FolderCheck, label: "Documentation first" },
  { Icon: Users, label: "Consumer safety first" },
  { Icon: Globe, label: "Market-specific compliance" },
  { Icon: Handshake, label: "Long-term partner trust" },
];

export default function QualityCompliancePage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans">
      <SiteHeader active="Quality & Compliance" accent="green" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#eef6f6] to-white">
        <div className="absolute inset-y-0 right-0 w-[45%] lg:w-[50%]">
          <img
            src={IMAGES.hero}
            alt="Quality and compliance background"
            className="w-full h-full object-cover object-right"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(238,246,246,0.65),transparent_35%),linear-gradient(90deg,rgba(238,246,246,0.96)_0%,rgba(238,246,246,0.82)_42%,rgba(12,44,77,0.18)_100%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0c2c4d] leading-tight mb-4">
              QUALITY &amp;
              <br />
              COMPLIANCE
            </h1>
            <h2 className="text-lg font-bold text-green-700 mb-5">
              Quality, Safety and Regulatory Responsibility
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-3 max-w-md">
              At VITARION LTD, we work only with manufacturers and
              suppliers who meet recognised standards of quality, safety,
              documentation and regulatory compliance.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-md">
              Our commitment is to protect consumers, support our partners
              and ensure successful, sustainable and responsible growth in
              every market we serve.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {HERO_BADGES.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center shrink-0 bg-white/80">
                    <Icon size={15} className="text-green-700" />
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-[22rem]" />
        </div>
      </section>

      {/* Quality standards */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-xl font-extrabold text-center text-[#0c2c4d] mb-2">
          QUALITY STANDARDS WE VALUE
        </h2>
        <div className="w-14 h-1 bg-green-600 rounded-full mx-auto mb-10" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STANDARDS.map(({ Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-slate-100 p-6 text-center">
              <Icon size={28} className="text-green-700 mx-auto mb-3" />
              <p className="font-extrabold text-[#0c2c4d] text-sm mb-2">{title}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Documentation */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-xl font-extrabold text-center text-[#0c2c4d] mb-10">
          DOCUMENTATION WE MAY REQUEST
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {DOC_COLUMNS.map(({ title, items }) => (
            <div key={title} className="rounded-xl border border-slate-100 p-5">
              <p className="font-bold text-teal-700 text-xs mb-3">{title}</p>
              <ul className="text-xs text-slate-500 space-y-1.5">
                {items.map((it) => (
                  <li key={it} className="flex gap-1.5"><span>•</span><span>{it}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="flex items-center gap-2 text-xs text-slate-500 border-t border-slate-100 pt-4">
          <Info size={14} className="text-green-700 shrink-0" />
          All documentation is reviewed according to the laws and
          regulatory requirements of the target market.
        </p>
      </section>

      {/* Product category compliance */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-xl font-extrabold text-center text-[#0c2c4d] mb-10">
          PRODUCT CATEGORY COMPLIANCE
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-6">
          {CATEGORY_COMPLIANCE.map(({ Icon, title, text, image }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-100 p-5 flex flex-col"
            >
              <Icon size={22} className="text-teal-700 mb-3" />
              <p className="font-extrabold text-[#0c2c4d] text-xs mb-2">{title}</p>
              <p className="text-[11px] text-slate-500 leading-relaxed mb-4">{text}</p>
              <div className="mt-auto flex items-end justify-center pt-2">
                <img
                  src={image}
                  alt={title}
                  className="max-h-32 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="flex items-center gap-2 text-xs text-slate-500 border-t border-slate-100 pt-4">
          <ShieldCheck size={14} className="text-green-700 shrink-0" />
          FSMP and specialised nutrition products are not general consumer
          products. Their use, sale, distribution and claims must comply
          with applicable laws and professional requirements of each
          country.
        </p>
      </section>

      {/* Our commitment bar */}
      <section className="bg-[#0c2c4d]">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h2 className="text-lg font-extrabold text-white mb-8">OUR COMMITMENT</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {COMMITMENTS.map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <span className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center">
                  <Icon size={18} className="text-white" />
                </span>
                <p className="text-xs text-slate-200 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-extrabold text-[#0c2c4d]">
              LET&apos;S BUILD SUCCESSFUL MARKETS TOGETHER
            </p>
            <p className="text-sm text-slate-500 max-w-lg">
              VITARION LTD welcomes partnership discussions with
              manufacturers, brand owners, distributors, pharmacies,
              retailers, healthcare partners and online platforms.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 transition-colors text-white font-semibold text-sm px-5 py-3 rounded-lg">
              CONTACT VITARION LTD <ArrowRight size={16} />
            </button>
            <button className="inline-flex items-center gap-2 border border-[#0c2c4d] text-[#0c2c4d] hover:bg-[#0c2c4d] hover:text-white transition-colors font-semibold text-sm px-5 py-3 rounded-lg">
              DOWNLOAD PARTNERSHIP BROCHURE <Download size={16} />
            </button>
          </div>
        </div>
      </section>

      <SiteFooter
        columns={[
          { title: "QUICK LINKS", items: ["Home", "About", "Business Areas", "Products", "Mimi Organics"] },
          { title: "LEGAL", items: ["Partnerships", "Quality & Compliance", "Contact", "Privacy Policy", "Cookie Policy"] },
        ]}
      />
    </div>
  );
}