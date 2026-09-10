import React from "react";
import mimiPreterm from "../assets/mimi-preterm.jpg";
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
  Info,
  ArrowRight,
  MessageCircle,
} from "lucide-react"; 
import Header from "../components/Header";
import SiteHeader from "../components/Header";

const IMAGES = {
  hero: mimiPreterm,
  handshake:
    "https://images.unsplash.com/photo-1752159684779-0639174cdfac?w=900&q=80&auto=format&fit=crop",
  fmcg: "https://images.unsplash.com/photo-1704713911962-409fa07a4a3a?w=800&q=80&auto=format&fit=crop",
  fsmp: "https://images.unsplash.com/photo-1632053002928-1919605ee6f7?w=800&q=80&auto=format&fit=crop",
  nutrition:
    "https://images.unsplash.com/photo-1576089073624-b5751a8f4de9?w=800&q=80&auto=format&fit=crop",
  supplements:
    "https://images.unsplash.com/photo-1556739664-787e863d09c4?w=800&q=80&auto=format&fit=crop",
  logistics:
    "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=900&q=80&auto=format&fit=crop",
  ctaHandshake:
    "https://images.unsplash.com/photo-1752159684779-0639174cdfac?w=1000&q=80&auto=format&fit=crop",
};

const NAV_LINKS = [
  "Home",
  "About",
  "Business Areas",
  "Products",
  "Mimi Organics",
  "Partnerships",
  "Quality & Compliance",
  "Contact",
];

const CORE_VALUES = [
  "Integrity in every engagement",
  "Quality and safety at the core",
  "Compliance with global standards",
  "Long-term partnership mindset",
  "Customer and consumer focus",
  "Innovation and continuous growth",
];

const BUSINESS_AREAS = [
  {
    title: "FMCG",
    accent: "border-teal-500",
    iconBg: "bg-teal-600",
    Icon: ShoppingCart,
    titleColor: "text-slate-900",
    image: IMAGES.fmcg,
    description:
      "Fast-moving consumer goods sourcing, distribution and brand representation for selected international markets.",
  },
  {
    title: "FSMP & Specialised Nutrition",
    accent: "border-purple-600",
    iconBg: "bg-purple-700",
    Icon: Stethoscope,
    titleColor: "text-purple-700",
    image: IMAGES.fsmp,
    description:
      "Specialised nutrition products for specific dietary and medical purposes, subject to regulatory requirements and professional use conditions.",
  },
  {
    title: "General Nutrition",
    accent: "border-green-600",
    iconBg: "bg-green-600",
    Icon: Leaf,
    titleColor: "text-green-700",
    image: IMAGES.nutrition,
    description:
      "Nutrition products for families, children, adults and active lifestyles. Supporting daily wellbeing through trusted nutrition.",
  },
  {
    title: "Food Supplements",
    accent: "border-amber-500",
    iconBg: "bg-amber-500",
    Icon: Pill,
    titleColor: "text-amber-600",
    image: IMAGES.supplements,
    description:
      "Vitamins, minerals, nutraceuticals and wellness products for pharmacy, retail and online channels.",
  },
];

const WHAT_WE_DO = [
  "Global sourcing and supply",
  "Brand representation",
  "Import and export support",
  "Market entry coordination",
  "Packaging and label localisation",
  "Regulatory documentation support",
  "Logistics and supply chain management",
  "Long-term distributor relationships",
];

const CERTIFICATIONS = [
  { code: "GMP", label: "Good Manufacturing Practice" },
  { code: "ISO", label: "International Standards" },
  { code: "HACCP", label: "Food Safety Management" },
  { code: "QA", label: "Quality Assurance", color: "text-amber-500" },
];

const STATS = [
  { value: "UK", flag: "🇬🇧", label: "Based" },
  { value: "4+", label: "Business Areas" },
  { value: "Global", label: "Markets Focus" },
  { value: "Quality", label: "Driven Operations" },
  { value: "Partnerships", label: "Built for Long-Term" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
     

      {/* Nav */}
        <SiteHeader active="About" accent="green"/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#eef4f6] to-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-teal-600 font-semibold tracking-[0.2em] text-xs mb-3">
              ABOUT
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0b2544] leading-tight">
              VITARION LTD
            </h1>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-500 mb-6">
              United Kingdom
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              A UK-based global distribution and trading company
              specialising in FMCG, FSMP, general nutrition and food
              supplements.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We connect reliable manufacturers with international markets
              through trust, quality, compliance and long-term partnerships.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={IMAGES.hero}
              alt="London Tower Bridge skyline"
              className="w-full h-72 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2544]/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <InfoCard
          icon={<Target size={20} className="text-white" />}
          iconBg="bg-teal-600"
          title="Our Mission"
        >
          To distribute and represent high-quality FMCG, FSMP, general
          nutrition and supplement products through trusted global
          partnerships, with a strong focus on quality, safety and
          long-term market development.
        </InfoCard>

        <InfoCard
          icon={<Eye size={20} className="text-white" />}
          iconBg="bg-[#0b2544]"
          title="Our Vision"
        >
          To become a recognised UK-based partner for international
          nutrition and FMCG distribution, helping reliable manufacturers
          reach new markets and helping distributors access carefully
          selected, market-ready products.
        </InfoCard>

      <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm p-7">
  {/* Background Image */}
  <img
    src={IMAGES.handshake}
    alt="Business handshake"
    className="absolute right-0 top-1 -translate-y-1/2 w-56  opacity-75 pointer-events-none select-none"
  />

  {/* Content */}
  <div className="relative z-10">
    <div className="flex items-center gap-3 mb-4">
      <span className="w-10 h-10 rounded-full bg-[#0b2544] flex items-center justify-center">
        <CheckCircle2 size={20} className="text-white" />
      </span>
      <h3 className="font-bold text-[#0b2544] text-lg">
        Our Core Values
      </h3>
    </div>

    <ul className="space-y-2.5">
      {CORE_VALUES.map((v) => (
        <li
          key={v}
          className="flex items-start gap-2 text-sm text-slate-600"
        >
          <CheckCircle2
            size={16}
            className="text-teal-500 mt-0.5 shrink-0"
          />
          {v}
        </li>
      ))}
    </ul>
  </div>
</div>
      </section>

      {/* Business Areas */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-[#0b2544] mb-10">
          Our Business Areas
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_AREAS.map(
            ({ title, image, description, Icon, iconBg, accent, titleColor }) => (
              <div
                key={title}
                className={`rounded-xl overflow-hidden bg-white border-t-4 ${accent} shadow-sm hover:shadow-lg transition-shadow`}
              >
                <div className="relative h-36">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <span
                    className={`absolute -bottom-5 left-5 w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={20} className="text-white" />
                  </span>
                </div>
                <div className="pt-8 pb-6 px-5">
                  <h3 className={`font-bold mb-2 ${titleColor}`}>{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* What We Do + Quality & Compliance */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-100 shadow-sm p-7 bg-white">
          <h3 className="text-xl font-extrabold text-[#0b2544] mb-5">
            What We Do
          </h3>
          <ul className="grid sm:grid-cols-1 gap-2.5 mb-6">
            {WHAT_WE_DO.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 size={16} className="text-teal-500 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="rounded-xl overflow-hidden h-40">
            <img
              src="https://www.dropbox.com/scl/fi/8oiubapjb9376jxp9d0ir/QzIiKMqN2RilFe2BT1yN6s9CWqNxXoBKWiNbYAYJ45NTKYiawBO8y1hIc-Id9jeCGYhZvI8WrRNEvU3HbJyIWqjEpJes0rEzVU_Px3N34qVtdBoervTdCxH_kd5NZNwcMb_zBXiXPVYegj856eyWcwiMMgc_u-sTUPnex9GgsxOmztqLSjl-guZjwhTLORcP.jpeg?rlkey=jxayscg43ds392v2yzb3cwhjl&raw=1"
              alt="Global logistics and shipping"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 shadow-sm p-7 bg-white flex flex-col">
          <h3 className="text-xl font-extrabold text-[#0b2544] mb-4">
            Quality & Compliance Commitment
          </h3>
          <div className="flex gap-3 mb-6">
            <span className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0">
              <CheckCircle2 size={20} className="text-teal-600" />
            </span>
            <p className="text-sm text-slate-600 leading-relaxed">
              VITARION LTD works only with manufacturers and suppliers who
              follow recognised quality, safety and manufacturing standards.
              We believe that quality, documentation and compliance are the
              foundation of trust.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3 mb-6">
            {CERTIFICATIONS.map(({ code, label, color }) => (
              <div
                key={code}
                className="rounded-lg border border-slate-100 bg-slate-50 text-center py-4 px-1"
              >
                <p
                  className={`font-extrabold text-lg ${
                    color ?? "text-[#0b2544]"
                  }`}
                >
                  {code}
                </p>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-start gap-2 bg-teal-50/60 border border-teal-100 rounded-lg px-4 py-3 text-xs text-slate-600">
            <Info size={14} className="text-teal-600 mt-0.5 shrink-0" />
            All product availability, claims, labelling and distribution
            activities are subject to applicable laws and regulatory
            requirements in each target market.
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-6 items-stretch">
        <div className="rounded-2xl border border-slate-100 shadow-sm p-7 bg-white">
          <h3 className="text-xl font-extrabold text-[#0b2544] mb-3">
            Global Presence
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            From the United Kingdom, serving partners and markets worldwide.
          </p>
          <WorldDotMap />
        </div>

        <div className="rounded-2xl border border-slate-100 shadow-sm bg-white p-7 grid grid-cols-2 sm:grid-cols-3 gap-6 content-center">
          {STATS.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="text-2xl font-extrabold text-[#0b2544] flex items-center justify-center sm:justify-start gap-1">
                {s.flag && <span>{s.flag}</span>}
                {s.value}
              </p>
              <p className="text-xs text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0b2544]">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 items-center gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-extrabold text-white mb-2">
              Let&apos;s Build Success Together
            </h3>
            <p className="text-slate-300 text-sm mb-5 max-w-xl">
              We are always open to new opportunities and partnerships with
              manufacturers, distributors and commercial partners around
              the world.
            </p>
            <button className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 transition-colors text-white font-semibold text-sm px-6 py-3 rounded-full">
              Contact Us <ArrowRight size={16} />
            </button>
          </div>
          <div className="rounded-xl overflow-hidden h-40 hidden md:block">
            <img
              src={IMAGES.ctaHandshake}
              alt="Handshake between business partners"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-300 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <LogoMark small />
              <div>
                <p className="font-extrabold text-white leading-none">
                  VITARION LTD
                </p>
                <p className="text-[9px] tracking-[0.2em] text-teal-400 font-semibold">
                  UNITED KINGDOM
                </p>
              </div>
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
            title="Quick Links"
            items={["Home", "About", "Business Areas", "Products", "Mimi Organics"]}
          />
          <FooterColumn
            title="Our Services"
            items={[
              "Global Distribution",
              "Import & Export",
              "Brand Representation",
              "Market Entry Support",
              "Regulatory Coordination",
            ]}
          />
          <FooterColumn
            title="Information"
            items={[
              "Quality & Compliance",
              "Partnerships",
              "Contact",
              "Privacy Policy",
              "Terms of Use",
            ]}
          />

          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone size={12} /> +44 7770 54 0202
              </li>
              <li className="flex items-center gap-2">
                <Mail size={12} /> info@vitarion.co.uk
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={12} className="mt-0.5 shrink-0" />
                71–75 Shelton Street, Covent Garden, London WC2H 9JQ, United
                Kingdom
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 text-[11px] text-slate-500 px-6 py-4 flex flex-col sm:flex-row justify-between gap-2 max-w-7xl mx-auto">
          <p>© 2024 VITARION LTD. All rights reserved.</p>
          <p>VITARION LTD is a company registered in England and Wales.</p>
        </div>
      </footer>
    </div>
  );
}

function InfoCard({ icon, iconBg, title, children }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-7 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center`}
        >
          {icon}
        </span>
        <h3 className="font-bold text-[#0b2544] text-lg">{title}</h3>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">{children}</p>
    </div>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-3">{title}</h4>
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

function LogoMark({ small }) {
  const size = small ? "w-8 h-8" : "w-10 h-10";
  return (
    <div
      className={`${size} rounded-lg bg-gradient-to-br from-teal-500 to-[#0b2544] grid grid-cols-3 gap-[2px] p-1.5`}
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i} className="bg-white/80 rounded-[1px]" />
      ))}
    </div>
  );
}

/** Simple inline dot-map of the world (decorative, no external asset needed) */
function WorldDotMap() {
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-100 h-48 flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 600 300" className="w-full h-full">
        {Array.from({ length: 400 }).map((_, i) => {
          const x = (i % 40) * 15 + 5;
          const y = Math.floor(i / 40) * 15 + 5;
          const show =
            (x > 60 && x < 220 && y > 40 && y < 160 && (x + y) % 27 < 18) ||
            (x > 260 && x < 340 && y > 30 && y < 200 && (x + y) % 23 < 15) ||
            (x > 380 && x < 560 && y > 40 && y < 180 && (x + y) % 25 < 16) ||
            (x > 420 && x < 560 && y > 180 && y < 260 && (x + y) % 21 < 13);
          if (!show) return null;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={1.6}
              className="fill-teal-400/70"
            />
          );
        })}
        <circle cx={140} cy={70} r={4} className="fill-teal-600" />
        <path
          d="M140 70 L340 110 M140 70 L470 90 M140 70 L480 210"
          className="stroke-teal-500/50"
          strokeWidth={1}
          strokeDasharray="3 3"
          fill="none"
        />
      </svg>
    </div>
  );
}