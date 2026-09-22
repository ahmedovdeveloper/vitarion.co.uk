import React from "react";
import { ArrowLeft, Download, HeartPulse, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const PRODUCT_IMAGE =
  "https://www.dropbox.com/scl/fi/7cpobjtsj2filasw2hiz6/RICH-OMEGOS-3D-FOR-UK.png?rlkey=3tx498avign17245rdajo24ga&raw=1";
const PRODUCT_DOC =
  "https://www.dropbox.com/scl/fi/ymqbt0lmx60b2ut657ly8/Rich-OMEGOS-Vitarion-web.docx?rlkey=y2sj54yf1rlw5rph9z87wp5ad&raw=1";

const nutrientRows = [
  { label: "Fish oil concentrate", value: "1,230 mg" },
  { label: "EPA", value: "221 mg" },
  { label: "DHA", value: "148 mg" },
  { label: "Astaxanthin", value: "6 mg" },
  { label: "Vitamin E", value: "5 mg α-TE" },
  { label: "NRV", value: "42%" },
];

const benefits = [
  "EPA and DHA contribute to the normal function of the heart. The beneficial effect is obtained with a daily intake of 250 mg EPA and DHA.",
  "Vitamin E contributes to the protection of cells from oxidative stress.",
];

const notes = [
  "EPA and DHA are long-chain omega-3 fatty acids naturally found in fish oil.",
  "Each daily capsule of Rich Omegos provides a combined 369 mg of EPA and DHA.",
  "Astaxanthin is a naturally occurring carotenoid and Rich Omegos provides 6 mg from astaxanthin-rich oleoresin derived from Haematococcus pluvialis.",
];

const dailyIntake = [
  "Adults: Take one soft capsule daily with food and water.",
  "Swallow the capsule whole.",
  "Do not exceed the recommended daily intake.",
];

const warnings = [
  "Food supplements should not be used as a substitute for a varied, balanced diet and a healthy lifestyle.",
  "Keep out of reach of young children.",
  "Not intended for persons under 18 years of age.",
  "Consult a healthcare professional before use if you are pregnant or breastfeeding, are taking anticoagulant or antiplatelet medication, have a medical condition, are receiving medical treatment or are scheduled for surgery.",
  "Do not use if you are allergic to fish, soya or any other ingredient.",
  "Discontinue use and seek professional advice if an adverse reaction occurs.",
];

const storage = [
  "Store in a cool, dry place below 25°C.",
  "Protect from direct sunlight and excessive heat.",
  "Keep the container or blister inside the original carton.",
  "Do not use after the best-before date printed on the package.",
  "Do not use if the packaging or protective seal is damaged.",
];

const ingredients = [
  "Fish oil concentrate (FISH)",
  "Soft-capsule shell (bovine gelatine, humectant: glycerol, purified water)",
  "Astaxanthin preparation (medium-chain triglycerides, astaxanthin-rich oleoresin from Haematococcus pluvialis, antioxidant: mixed tocopherols)",
  "Emulsifier: SOYA lecithin",
  "Beeswax",
  "Vitamin E (D-alpha-tocopherol)",
  "Anti-caking agent: silicon dioxide",
  "Antioxidants: mixed tocopherols and rosemary extract",
  "Allergen information: contains FISH and SOYA.",
];

export default function RichOmegosPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans">
      <SiteHeader active="Products" accent="teal" />

      <main className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        <div className="mb-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800">
            <ArrowLeft size={16} /> Back to Products
          </Link>
        </div>

        <section className="rounded-[28px] border border-slate-200 bg-[#f7fbfb] p-6 md:p-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
            <div className="rounded-[24px] bg-white border border-slate-200 p-4 shadow-sm">
              <img src={PRODUCT_IMAGE} alt="RICH OMEGOS" className="w-full h-auto object-contain rounded-2xl" />
            </div>

            <div>
              <p className="text-teal-600 font-semibold tracking-[0.2em] text-[10px] mb-3">FEATURED PRODUCT</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0c2c4d] leading-tight mb-2">RICH OMEGOS</h1>
              <p className="text-xl font-semibold text-slate-700 mb-1">Omega-3 • Astaxanthin • Vitamin E</p>
              <p className="text-sm text-slate-500 mb-6">Food Supplement — 60 Soft Capsules</p>

              <p className="text-base leading-relaxed text-slate-600 mb-7">
                Rich Omegos is a convenient one-a-day food supplement combining fish oil concentrate, astaxanthin and vitamin E.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PRODUCT_DOC}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0c2c4d] hover:bg-[#163d66] text-white font-semibold text-sm px-5 py-3 rounded-lg transition"
                >
                  View Document <Download size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-extrabold text-[#0c2c4d] mb-4">Each soft capsule provides</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {nutrientRows.map(({ label, value }) => (
                <div key={label} className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">{label}</p>
                  <p className="mt-2 text-xl font-extrabold text-[#0c2c4d]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 mb-3">
              <HeartPulse className="text-teal-600" size={20} />
              <h2 className="text-xl font-extrabold text-[#0c2c4d]">Nutritional Benefits</h2>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              {benefits.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 size={16} className="text-teal-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-extrabold text-[#0c2c4d] mb-3">What are EPA and DHA?</h2>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              {notes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 text-teal-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-extrabold text-[#0c2c4d] mb-3">Recommended daily intake</h2>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              {dailyIntake.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 text-teal-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="text-teal-600" size={20} />
              <h2 className="text-lg font-extrabold text-[#0c2c4d]">Important information</h2>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              {warnings.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 text-amber-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-extrabold text-[#0c2c4d] mb-3">Storage</h2>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              {storage.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 text-teal-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="text-teal-600" size={20} />
              <h2 className="text-lg font-extrabold text-[#0c2c4d]">Ingredients</h2>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              {ingredients.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 text-teal-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-[24px] bg-[#0c2c4d] text-white p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200 mb-3">Imported and distributed in the United Kingdom by</p>
          <h2 className="text-3xl font-extrabold mb-2">Vitarion Ltd</h2>
          <p className="text-sm text-slate-200">Allied House, 29–39 London Road, Twickenham, TW1 3SZ, United Kingdom</p>
          <div className="mt-4 grid sm:grid-cols-3 gap-4 text-sm text-slate-100">
            <p>Tel: +44 (0)7770 541212</p>
            <p>Email: enquiries@vitarion.co.uk</p>
            <p>Web: www.vitarion.co.uk</p>
          </div>
        </section>
      </main>

      <SiteFooter
        columns={[
          { title: "QUICK LINKS", items: ["Home", "About", "Business Areas", "Products", "Mimi Organics"] },
          { title: "", items: ["Partnerships", "Quality & Compliance", "Contact"] },
          { title: "", items: ["Privacy Policy", "Terms of Use"] },
        ]}
      />
    </div>
  );
}
