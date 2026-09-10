import React from "react";
import mimiPreterm from "../assets/mimi-preterm.jpg";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Globe,
  Clock,
  Send,
  Lock,
  Handshake,
  Package,
  Factory,
  ShoppingCart,
  ShieldCheck,
  BadgeCheck,
  Award,
  FileCheck2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import SiteHeader from "../components/Header";

/**
 * VITARION LTD — Contact Us page
 * React + Tailwind CSS
 */

const IMAGES = {
  hero: mimiPreterm,
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

const CONTACT_METHODS = [
  {
    Icon: Phone,
    label: "Telephone / WhatsApp",
    value: "+44 7770 54 0202",
    note: "Monday to Friday: 09:00 – 17:30 (UK Time)",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "info@vitarion.co.uk",
    note: "We aim to respond within 24 hours",
  },
  {
    Icon: Globe,
    label: "Website",
    value: "www.vitarion.co.uk",
    note: null,
  },
  {
    Icon: MapPin,
    label: "Head Office Address",
    value: "71–75 Shelton Street, Covent Garden, London WC2H 9JQ, United Kingdom",
    note: null,
  },
];

const BUSINESS_HOURS = [
  { day: "Monday – Friday", hours: "09:00 – 17:30" },
  { day: "Saturday", hours: "By appointment" },
  { day: "Sunday", hours: "Closed" },
];

const ENQUIRY_CARDS = [
  {
    Icon: Handshake,
    color: "green",
    title: "PARTNERSHIP ENQUIRIES",
    text: "VITARION LTD is open to cooperation with manufacturers, brand owners, distributors, wholesalers, pharmacies, retailers, healthcare distributors, online platforms and market-entry partners worldwide.",
    cta: "Learn more about Partnerships",
  },
  {
    Icon: Package,
    color: "navy",
    title: "PRODUCT ENQUIRIES",
    text: "Ask us about our product portfolio including Mimi Organics infant & young-child nutrition, Mimi Preterm FSMP concept, ANFA Pharmaceuticals supplements, FMCG and general nutrition products.",
    cta: "View Products",
  },
  {
    Icon: Factory,
    color: "green",
    title: "MANUFACTURER ENQUIRIES",
    text: "If you are a manufacturer or supplier, please include product catalogue, certifications, manufacturing standards and target markets in your message to help us review cooperation opportunities.",
    cta: "Learn more",
  },
  {
    Icon: ShoppingCart,
    color: "navy",
    title: "DISTRIBUTOR & RETAIL ENQUIRIES",
    text: "Distributors, wholesalers, pharmacy chains, retailers and online platforms are welcome to contact us for product availability, pricing, territory and cooperation models.",
    cta: "Contact Sales",
  },
];

const CERTIFICATIONS = [
  { Icon: BadgeCheck, code: "GMP", label: "Good Manufacturing Practice" },
  { Icon: Award, code: "ISO", label: "Quality Management" },
  { Icon: ShieldCheck, code: "HACCP", label: "Food Safety System" },
  { Icon: FileCheck2, code: "", label: "Regulatory Readiness" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans">
    <SiteHeader active="Contact" accent="green"/>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-extrabold text-[#0c2c4d] leading-[1.05] mb-4">
              CONTACT US
            </h1>
            <h2 className="text-xl font-bold text-green-700 mb-6">
              Let&apos;s Build Successful Markets Together
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 max-w-md">
              VITARION LTD welcomes enquiries from manufacturers, brand
              owners, distributors, wholesalers, pharmacy partners,
              retailers, healthcare-oriented companies and online
              platforms.
            </p>
            <p className="text-slate-600 leading-relaxed max-w-md">
              Whether you are interested in product distribution, brand
              representation, import-export cooperation, Mimi Organics,
              ANFA Pharmaceuticals supplements, FSMP, FMCG, general
              nutrition or food supplements, our team is ready to discuss
              cooperation.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={IMAGES.hero}
              alt="Mimi Organics and ANFA Pharmaceuticals product lineup"
              className="w-full h-full object-cover "
            />
            <svg viewBox="0 0 600 300" className="absolute inset-0 w-full h-full opacity-70 pointer-events-none">
              <g fill="none" stroke="#0c2c4d" strokeWidth="1" strokeDasharray="2 3" opacity="0.4">
                <path d="M100 60 Q250 20 400 70" />
                <path d="M150 60 Q300 120 450 90" />
              </g>
              <g fill="#0c2c4d">
                <circle cx="180" cy="55" r="4" />
                <circle cx="330" cy="65" r="4" />
                <circle cx="430" cy="80" r="4" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Get In Touch + Form */}
      <section className="max-w-7xl mx-auto px-6 py-6 grid lg:grid-cols-[1fr_1.6fr] gap-6">
        {/* Get In Touch */}
        <div className="rounded-2xl border border-slate-200 p-7">
          <h3 className="text-lg font-extrabold text-green-800 tracking-wide mb-6">
            GET IN TOUCH
          </h3>
          <div className="space-y-6">
            {CONTACT_METHODS.map(({ Icon, label, value, note }) => (
              <div key={label} className="flex gap-4">
                <span className="w-11 h-11 rounded-full bg-[#0c2c4d] flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-white" />
                </span>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                  <p className="font-bold text-[#0c2c4d] leading-snug">
                    {value}
                  </p>
                  {note && (
                    <p className="text-xs text-slate-400 mt-0.5">{note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-xl bg-slate-50 border border-slate-100 p-4">
            <div className="flex items-center gap-2 mb-3">
              <Clock size={16} className="text-[#0c2c4d]" />
              <p className="font-bold text-[#0c2c4d] text-sm">Business Hours</p>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {BUSINESS_HOURS.map((row) => (
                <li key={row.day} className="flex justify-between">
                  <span>{row.day}</span>
                  <span className="font-medium">{row.hours}</span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-200">
              Time zone: United Kingdom Time (GMT/BST)
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-slate-200 p-7">
          <h3 className="text-lg font-extrabold text-green-800 tracking-wide mb-1">
            SEND US AN ENQUIRY
          </h3>
          <p className="text-sm text-slate-500 mb-6">
            Please complete the form below and our team will respond as
            soon as possible.
          </p>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name *">
                <input
                  type="text"
                  placeholder="Your name and surname"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600"
                />
              </Field>
              <Field label="Company Name *">
                <input
                  type="text"
                  placeholder="Your company or organisation"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600"
                />
              </Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Country *">
                <select className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600">
                  <option>Select your country</option>
                  <option>United Kingdom</option>
                  <option>Uzbekistan</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Email Address *">
                <input
                  type="email"
                  placeholder="Your business email"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600"
                />
              </Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Phone / WhatsApp">
                <input
                  type="text"
                  placeholder="Your contact number"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600"
                />
              </Field>
              <Field label="Enquiry Type *">
                <select className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600">
                  <option>Select enquiry type</option>
                  <option>Partnership</option>
                  <option>Product</option>
                  <option>Manufacturer</option>
                  <option>Distributor / Retail</option>
                </select>
              </Field>
            </div>
            <Field label="Message *">
              <textarea
                rows={5}
                placeholder="Please tell us about your company, product category, target market and cooperation interest."
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-green-600/30 focus:border-green-600 resize-none"
              />
            </Field>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-green-800 hover:bg-green-900 transition-colors text-white font-semibold text-sm py-3.5 rounded-lg"
            >
              <Send size={16} /> SEND ENQUIRY
            </button>
            <p className="flex items-start gap-2 text-xs text-slate-500">
              <Lock size={14} className="text-green-700 mt-0.5 shrink-0" />
              Your information is kept confidential and will only be used
              to respond to your enquiry. We do not share your information
              with third parties.
            </p>
          </form>
        </div>
      </section>

      {/* Enquiry type cards */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ENQUIRY_CARDS.map(({ Icon, color, title, text, cta }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200 p-6 text-center"
          >
            <span
              className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 ${
                color === "green" ? "bg-green-800" : "bg-[#0c2c4d]"
              }`}
            >
              <Icon size={22} className="text-white" />
            </span>
            <h3 className="font-extrabold text-[#0c2c4d] text-sm tracking-wide mb-3">
              {title}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              {text}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 hover:text-green-800"
            >
              {cta} <ArrowRight size={13} />
            </a>
          </div>
        ))}
      </section>

      {/* Quality & Compliance bar */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-7 flex flex-col lg:flex-row items-center gap-8">
          <span className="w-14 h-14 rounded-full bg-green-800 flex items-center justify-center shrink-0">
            <ShieldCheck size={24} className="text-white" />
          </span>
          <div className="flex-1">
            <h3 className="font-extrabold text-[#0c2c4d] text-sm tracking-wide mb-2">
              QUALITY &amp; COMPLIANCE COMMITMENT
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
              All products are sourced from reliable manufacturers who
              follow recognised quality standards. Product availability,
              claims, labelling and distribution are subject to applicable
              laws and regulatory requirements in each target market.
              FSMP and specialised nutrition products must be used under
              medical supervision where required.
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            {CERTIFICATIONS.map(({ Icon, code, label }) => (
              <div key={label} className="text-center w-20">
                <span className="w-12 h-12 mx-auto rounded-full border-2 border-green-700 flex items-center justify-center mb-1.5">
                  <Icon size={18} className="text-green-700" />
                </span>
                {code && (
                  <p className="text-[10px] font-bold text-[#0c2c4d]">{code}</p>
                )}
                <p className="text-[9px] text-slate-500 leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-300 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <LogoMark small />
            
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
              <MessageCircle size={16} />
            </div>
          </div>

          <FooterColumn
            title="QUICK LINKS"
            items={["Home", "About", "Business Areas", "Products", "Mimi Organics", "Partnerships"]}
          />
          <FooterColumn
            title="PRODUCTS"
            items={["Mimi Organics", "Mimi Preterm", "ANFA Pharmaceuticals", "Supplements", "FMCG", "Nutrition"]}
          />
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs tracking-wider">
              CONTACT INFO
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

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-slate-600 mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-3 text-xs tracking-wider">
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

function LogoMark({ small }) {
  const size = small ? "w-9 h-9" : "w-11 h-11";
  return (
    <div
      className={`${size} rounded-lg grid grid-cols-3 gap-[3px] p-2`}
      style={{ background: "linear-gradient(135deg,#2dd4bf,#0c2c4d)" }}
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i} className="bg-white/85 rounded-[1px]" />
      ))}
    </div>
  );
}