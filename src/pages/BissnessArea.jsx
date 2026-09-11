import React from "react";
import mimiLogo from "../assets/mimi-logo.png";
import mimiPreterm from "../assets/mimi-preterm.jpg";
import stage1Front from "../assets/stage1-front.jpg";
import stage1Back from "../assets/stage1-back.jpg";
import stage2Front from "../assets/stage2-front.jpg";
import stage2Back from "../assets/stage2-back.jpg";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Target,
  Eye,
  CheckCircle2,
  ShoppingCart,
  Stethoscope,
  Leaf,
  Pill,
  Plus,
  Globe,
  Baby,
  Ribbon,
  Shield,
  FileCheck2,
  Handshake,
  Globe2,
  Users,
  Download,
  Info,
  ArrowRight,
  MessageCircle,
} from "lucide-react"; 

import Header from "../components/Header";
import SiteHeader from "../components/Header";
import LogoMark from "../assets/vitarion-logo.png";
 
/**
 * VITARION LTD — Business Areas page
 * React + Tailwind CSS
 */

const IMAGES = {
  hero: mimiPreterm,
};

const AREAS_ROW_1 = [
  {
    number: "01",
    title: "FMCG DISTRIBUTION",
    Icon: ShoppingCart,
    color: "teal",
    lead: "Fast-moving consumer goods for selected international markets.",
    body: "We source, represent and distribute carefully selected FMCG products across wholesale, retail, pharmacy and online channels.",
    bullets: [
      "Food and beverage products",
      "Family and household goods",
      "Wellness-oriented FMCG",
      "Halal and lifestyle products",
      "Pharmacy & retail consumer goods",
      "Export-ready branded goods",
    ],
    footerLabel: "Our Goal: Deliver trusted FMCG products that meet real market needs.",
  },
  {
    number: "02",
    title: "FSMP & SPECIALISED NUTRITION",
    Icon: Plus,
    color: "purple",
    lead: "Specialised nutrition for specific dietary and medical purposes.",
    body: "We develop and distribute specialised nutrition products for infants, children, adults and medical-use conditions, subject to regulatory requirements.",
    bullets: [
      "Food for Special Medical Purposes",
      "Specialised infant nutrition",
      "Preterm & low-birth-weight nutrition",
      "Paediatric nutrition",
      "Clinical & dietetic nutrition",
      "Hospital, pharmacy & professional use",
    ],
    footerLabel:
      "Compliance Note: All products are subject to final regulatory approval and professional use requirements in each market.",
  },
];

const MIMI_STAGES = [
  { label: "STAGE 1", months: "0–6 MONTHS", color: "green" },
  { label: "STAGE 2", months: "6–12 MONTHS", color: "blue" },
  { label: "STAGE 3", months: "12–24 MONTHS", color: "orange" },
  { label: "STAGE 4", months: "24–36 MONTHS", color: "purple" },
];

const STAGE_IMAGES = [stage1Front, stage1Back, stage2Front, stage2Back];

const ANFA_BULLETS = [
  "Vitamins & minerals",
  "Cardiovascular support",
  "Gastrointestinal support",
  "Respiratory & ENT support",
  "Women's health",
  "Neurological & wellbeing support",
  "Immunity & vitality",
  "Pharmacy & online channels",
];

const AREAS_ROW_2 = [
  {
    number: "05",
    title: "GENERAL NUTRITION",
    Icon: Leaf,
    color: "green",
    lead: "Nutrition for families, adults and active lifestyles.",
    body: "We work with general nutrition products that support everyday health, active lifestyles and balanced nutrition.",
    bullets: [
      "Family nutrition powders",
      "Adult nutrition products",
      "Active lifestyle nutrition",
      "Protein & wellness nutrition",
      "Fortified food products",
      "Healthy ageing nutrition",
      "Halal nutrition products",
    ],
    footerLabel: "Our Goal: Promote better nutrition through reliable, science-backed products.",
  },
  {
    number: "06",
    title: "FOOD SUPPLEMENTS",
    Icon: Pill,
    color: "amber",
    lead: "Vitamins, minerals, nutraceuticals and wellness products.",
    body: "We focus on high-quality supplements supported by strong science, clean formulations and compliance-ready documentation.",
    bullets: [
      "Vitamins & minerals",
      "Softgels, capsules, tablets & sachets",
      "Omega-3 & fatty-acid products",
      "Herbal & botanical supplements",
      "Beauty-from-within supplements",
      "Immunity & vitality products",
      "Digestive wellness products",
      "Pharmacy & online retail products",
    ],
    footerLabel: "Our Goal: Deliver safe, effective and reliable supplements for global markets.",
  },
  {
    number: "07",
    title: "IMPORT, EXPORT & BRAND REPRESENTATION",
    Icon: Globe,
    color: "blue",
    lead: "Market access support from the United Kingdom.",
    body: "We help manufacturers and brand owners enter new markets through professional import-export and commercial services.",
    bullets: [
      "Exclusive distribution",
      "Brand representation",
      "Import & export coordination",
      "Market entry support",
      "Regulatory document coordination",
      "Packaging & label localisation",
      "Wholesale & retail partner development",
      "B2B commercial introductions",
    ],
    footerLabel: "Our Goal: Build long-term partnerships that create sustainable growth.",
  },
];

const COMMITMENTS = [
  {
    Icon: Shield,
    title: "QUALITY FIRST",
    text: "We work only with trusted manufacturers and quality assured products.",
  },
  {
    Icon: FileCheck2,
    title: "COMPLIANCE LED",
    text: "We follow international standards and regulatory requirements.",
  },
  {
    Icon: Handshake,
    title: "PARTNERSHIP DRIVEN",
    text: "We build long-term relationships based on trust and mutual growth.",
  },
  {
    Icon: Globe2,
    title: "GLOBAL PERSPECTIVE",
    text: "We connect products with markets across the world.",
  },
  {
    Icon: Users,
    title: "PEOPLE & HEALTH",
    text: "We contribute to better nutrition and healthier communities.",
  },
];

const COLOR_MAP = {
  teal: { text: "text-teal-600", bg: "bg-teal-600", footerBg: "bg-teal-600", footerText: "text-white" },
  purple: { text: "text-purple-700", bg: "bg-purple-700", footerBg: "bg-purple-700", footerText: "text-white" },
  green: { text: "text-green-600", bg: "bg-green-600", footerBg: "bg-green-50", footerText: "text-green-800" },
  amber: { text: "text-amber-600", bg: "bg-amber-500", footerBg: "bg-amber-50", footerText: "text-amber-800" },
  blue: { text: "text-blue-700", bg: "bg-blue-700", footerBg: "bg-blue-50", footerText: "text-blue-800" },
};

const STAGE_COLOR = {
  green: "bg-green-100 text-green-600 text-green-700",
  blue: "bg-blue-100 text-blue-600 text-blue-700",
  orange: "bg-orange-100 text-orange-600 text-orange-700",
  purple: "bg-purple-100 text-purple-600 text-purple-700",
};

export default function BusinessAreasPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans">
     
      {/* Nav */}
      <SiteHeader  active="Business Areas" accent="green"/>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#eef6f6 0%,#ffffff 55%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0c2c4d] leading-[1.05] mb-4">
              BUSINESS AREAS
            </h1>
            <div className="w-14 h-1 bg-teal-500 rounded-full mb-4" />
            <h2 className="text-xl sm:text-2xl font-bold text-teal-600 mb-6">
              Our Focus. Your Growth. Global Impact.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 max-w-md">
              VITARION LTD operates across selected high-demand consumer and
              nutrition categories, connecting reliable manufacturers with
              international markets through distribution, sourcing, brand
              representation and compliance-aware market development.
            </p>
            <p className="text-slate-600 leading-relaxed max-w-md">
              Our business areas are built on quality, trust, compliance and
              long-term partnerships that create real value for our partners
              and the communities they serve.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={IMAGES.hero}
              alt="London skyline"
              className="w-full h-72 sm:h-96 object-cover"
            />
            <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full opacity-90">
              <g fill="none" stroke="#0c2c4d" strokeWidth="1" strokeDasharray="3 4" opacity="0.55">
                <path d="M120 120 Q300 40 480 130" />
                <path d="M120 120 Q300 190 560 220" />
                <path d="M120 120 Q220 260 400 300" />
              </g>
              <g fill="#0c2c4d">
                <circle cx="120" cy="120" r="4" />
                <circle cx="480" cy="130" r="3.5" />
                <circle cx="560" cy="220" r="3.5" />
                <circle cx="400" cy="300" r="3.5" />
                <circle cx="300" cy="70" r="3" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Business Area Cards */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {AREAS_ROW_1.map((area) => (
            <AreaCard key={area.number} area={area} />
          ))}
          <MimiCard />
          <AnfaCard />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AREAS_ROW_2.map((area) => (
            <AreaCard key={area.number} area={area} />
          ))}
        </div>
      </section>

      {/* Our Commitment */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-[#0c2c4d] mb-3">
          OUR COMMITMENT
        </h2>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-10 text-sm">
          We are committed to quality, transparency, compliance and
          long-term partnerships. Our success is built on the success of
          our partners.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
          {COMMITMENTS.map(({ Icon, title, text }, i) => (
            <div
              key={title}
              className={`text-center ${
                i === COMMITMENTS.length - 1 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span className="w-14 h-14 mx-auto rounded-full border-2 border-[#0c2c4d] flex items-center justify-center mb-3">
                <Icon size={24} className="text-[#0c2c4d]" />
              </span>
              <p className="font-bold text-[#0c2c4d] text-xs tracking-wide mb-1">
                {title}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0c2c4d]">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
              <Mail size={20} className="text-white" />
            </span>
            <div>
              <h3 className="text-xl font-extrabold text-white mb-1">
                Let&apos;s Build Success Together
              </h3>
              <p className="text-slate-300 text-sm">
                We are always open to new opportunities and partnerships.
                Get in touch with us today.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 transition-colors text-white font-semibold text-sm px-6 py-3 rounded-lg">
              Contact Us <ArrowRight size={16} />
            </button>
            <button className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 transition-colors text-white font-semibold text-sm px-6 py-3 rounded-lg">
              Download Company Profile <Download size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-300 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={LogoMark} alt="VITARION LTD logo" className="w-full h-full object-contain" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Global distribution for FMCG, FSMP, general nutrition and food
              supplements.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <MessageCircle size={18} />
            </div>
          </div>

          <FooterColumn
            title="QUICK LINKS"
            items={["Home", "About", "Business Areas", "Products", "Mimi Organics"]}
          />
          <FooterColumn
            title=""
            items={["Partnerships", "Quality & Compliance", "Contact", "Privacy Policy"]}
          />
          <FooterColumn title="" items={["Terms of Use", "Cookie Policy"]} />

          <div>
            <h4 className="text-white font-semibold mb-3 text-xs tracking-wider">
              GET IN TOUCH
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone size={14} /> +44 7770 54 0202
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} /> info@vitarion.co.uk
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                71–75 Shelton Street, Covent Garden, London WC2H 9JQ, United
                Kingdom
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 text-[11px] text-slate-500 px-6 py-4 flex flex-col sm:flex-row justify-between gap-2 max-w-7xl mx-auto">
          <p>© 2024 VITARION LTD. All rights reserved.</p>
          <p>VITARION LTD is a company registered in England and Wales.</p>
          <p>Company No. 15609777</p>
        </div>
      </footer>
    </div>
  );
}

function AreaCard({ area }) {
  const { number, title, Icon, color, lead, body, bullets, footerLabel } = area;
  const c = COLOR_MAP[color];
  return (
    <div className="rounded-2xl border border-slate-100 shadow-sm bg-white flex flex-col overflow-hidden">
      <div className="p-6 flex-1">
        <p className={`font-extrabold text-sm mb-3 ${c.text}`}>{number}</p>
        <span className={`w-12 h-12 rounded-full ${c.bg} flex items-center justify-center mb-4`}>
          <Icon size={20} className="text-white" />
        </span>
        <h3 className={`font-extrabold text-lg leading-snug mb-3 ${color === "purple" ? c.text : "text-[#0c2c4d]"}`}>
          {title}
        </h3>
        <p className="text-sm font-semibold text-slate-800 mb-3">{lead}</p>
        <p className="text-sm text-slate-500 leading-relaxed mb-3">{body}</p>
        <ul className="text-sm text-slate-600 space-y-1.5">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span>•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`text-xs font-medium px-6 py-3 ${c.footerBg} ${c.footerText}`}>
        {footerLabel}
      </div>
    </div>
  );
}

function MimiCard() {
  return (
    <div className="rounded-2xl border border-slate-100 shadow-sm bg-white flex flex-col overflow-hidden">
      <div className="p-6 flex-1">
        <div className="flex items-center gap-3 mb-3">
          <img src={mimiLogo} alt="Mimi Organics logo" className="w-10 h-10 object-contain rounded-lg bg-white p-1 shadow-sm ring-1 ring-slate-200" />
          <div>
            <span className="text-2xl font-extrabold block" style={{ color: "#f59e0b" }}>
              mimi
            </span>
            <p className="text-[10px] tracking-[0.3em] text-slate-400 font-semibold mt-1">
              — ORGANICS —
            </p>
          </div>
        </div>
        <img src={mimiPreterm} alt="Mimi preterm nutrition product" className="w-full h-32 object-cover rounded-lg mb-4 border border-slate-100" />
        <h3 className="font-extrabold text-[#0c2c4d] text-base leading-snug mb-3">
          PREMIUM NUTRITION LINE
        </h3>
        <p className="text-sm font-semibold text-slate-800 mb-2">
          Infant, young-child and specialised nutrition.
        </p>
        <p className="text-sm text-slate-500 leading-relaxed mb-4">
          A complete growth and nutrition range designed with premium
          ingredients, modern science and family care.
        </p>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {STAGE_IMAGES.map((src, index) => (
            <img
              key={`${src}-${index}`}
              src={src}
              alt={`Stage ${index + 1} nutrition product`}
              className="w-full h-20 object-cover rounded-md border border-slate-100"
            />
          ))}
        </div>

        <div className="space-y-2 mb-4">
          {MIMI_STAGES.map((stage) => {
            const [bg, iconColor, textColor] = STAGE_COLOR[stage.color].split(" ");
            return (
              <div key={stage.label} className="flex items-center gap-2 text-sm">
                <span className={`w-6 h-6 rounded-full ${bg} flex items-center justify-center shrink-0`}>
                  <Baby size={14} className={iconColor} />
                </span>
                <span className={`font-semibold w-16 ${textColor}`}>{stage.label}</span>
                <span className="text-slate-500 text-xs">{stage.months}</span>
              </div>
            );
          })}
        </div>

        <div className="flex items-start gap-2 mb-1">
          <Ribbon size={16} className="text-purple-500 mt-0.5 shrink-0" />
          <p className="text-xs font-bold text-slate-700">MIMI PRETERM</p>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">
          Specialised FSMP concept for premature and low-birth-weight
          infants, for use under medical supervision.
        </p>
      </div>
      <div className="bg-slate-100 text-slate-600 text-xs font-medium px-6 py-3">
        Important Note: Product composition, claims, availability and
        distribution are subject to applicable regulatory requirements.
      </div>
    </div>
  );
}

function AnfaCard() {
  return (
    <div className="rounded-2xl border border-slate-100 shadow-sm bg-white flex flex-col overflow-hidden">
      <div className="p-6 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center shrink-0">
            <Leaf size={16} className="text-white" />
          </span>
          <span className="text-xl font-extrabold text-[#0c2c4d]">ANFA</span>
        </div>
        <p className="text-[10px] tracking-[0.3em] text-slate-400 font-semibold mb-4">
          PHARMACEUTICALS
        </p>
        <h3 className="font-extrabold text-teal-600 text-base leading-snug mb-3">
          SUPPLEMENTS PORTFOLIO
        </h3>
        <p className="text-sm font-semibold text-slate-800 mb-3">
          Nutraceutical and biologically active supplement products.
        </p>
        <p className="text-sm text-slate-500 leading-relaxed mb-3">
          ANFA Pharmaceuticals (founded in 2013) produces and distributes
          high-quality supplements in line with ISO 22000 and ISO 9001
          standards.
        </p>
        <ul className="text-sm text-slate-600 space-y-1.5">
          {ANFA_BULLETS.map((b) => (
            <li key={b} className="flex gap-2">
              <span>•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-blue-50 text-blue-800 text-xs font-medium px-6 py-3">
        View Selected Portfolio and Partnership Opportunities.
      </div>
    </div>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-3 text-xs tracking-wider min-h-[1rem]">
        {title}
      </h4>
      <ul className="space-y-2 text-xs text-slate-400">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="hover:text-teal-400 transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
