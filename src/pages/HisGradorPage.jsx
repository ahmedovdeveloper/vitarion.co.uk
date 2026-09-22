import React from "react";
import { ArrowLeft, Download, HeartPulse, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const PRODUCT_IMAGE = "https://www.dropbox.com/scl/fi/dc68yi9z81ala7ghdo5ap/hisGRADOR-FOR-UK.png?rlkey=iiy1r7s927zhmndkhcz35itq9&dl=1";
const PRODUCT_DOC = "https://www.dropbox.com/scl/fi/ueu04d1r1eu80rg30yspq/HIS_GRADOR-web.docx?rlkey=bybzrtyz0nwuxc1mwvncoopx0&dl=1";

const nutrientRows = [
  { label: "Fish oil concentrate", value: "500 mg" },
  { label: "EPA", value: "90 mg" },
  { label: "DHA", value: "60 mg" },
  { label: "Vitamin D3", value: "15 µg" },
  { label: "Vitamin K2 MK-7", value: "90 µg" },
  { label: "Zinc", value: "15 mg" },
  { label: "Selenium", value: "55 µg" },
  { label: "L-arginine", value: "125 mg" },
  { label: "Coenzyme Q10", value: "50 mg" },
  { label: "Panax ginseng extract", value: "50 mg" },
];

const benefits = [
  "Zinc contributes to the maintenance of normal testosterone levels in the blood.",
  "Zinc contributes to normal fertility and reproduction.",
  "Selenium contributes to normal spermatogenesis.",
  "Vitamin D, zinc and selenium contribute to the normal function of the immune system.",
  "Vitamin D contributes to the maintenance of normal muscle function.",
  "Vitamins D and K contribute to the maintenance of normal bones.",
  "Zinc and selenium contribute to the protection of cells from oxidative stress.",
  "No specific health claim is made for L-arginine, coenzyme Q10 or Panax ginseng; their presence and quantities are provided as factual product information.",
];

const useNotes = [
  "Adult men: take one soft capsule daily with a meal and water.",
  "Do not exceed one capsule daily.",
  "Taking the capsule earlier in the day may be preferable if ginseng affects your sleep.",
];

const warnings = [
  "For adults only.",
  "Food supplements should not replace a varied, balanced diet and healthy lifestyle.",
  "Keep out of reach of young children.",
  "Do not use if allergic to fish or any ingredient.",
  "Consult a healthcare professional before use if you take warfarin or another anticoagulant, blood-pressure medicines, nitrates, medicines for diabetes or erectile dysfunction, stimulants, or any prescribed medicine.",
  "Consult a healthcare professional before use if you have a cardiovascular, liver, kidney, bleeding, blood-pressure or blood-sugar condition.",
  "Vitamin K can interfere with anticoagulant management.",
  "L-arginine and ginseng may also interact with medicines.",
];

const ingredients = [
  "Fish oil concentrate (FISH)",
  "Soft-capsule shell (bovine gelatine, humectant: glycerol, purified water, colour: plain caramel (E150a))",
  "Medium-chain triglycerides (MCT oil)",
  "L-arginine",
  "Coenzyme Q10 (ubiquinone)",
  "Panax ginseng C.A. Meyer extract (10:1)",
  "Emulsifier: lecithins (SOYA)",
  "Zinc citrate",
  "Beeswax",
  "Anti-caking agent: silicon dioxide",
  "Antioxidant: mixed tocopherols",
  "Vitamin K2 (menaquinone-7)",
  "Selenium (L-selenomethionine)",
  "Vitamin D3 (cholecalciferol)",
  "Allergen information: contains FISH and SOYA.",
  "Colour: plain caramel (E150a).",
];

const faq = [
  "Does HIS GRADOR increase testosterone? No increase claim is made. Zinc contributes to the maintenance of normal testosterone levels in the blood.",
  "Does it treat erectile dysfunction or low testosterone? No. HIS GRADOR is a food supplement, not a medicine, and is not intended to diagnose, treat, cure or prevent disease.",
  "Why only one capsule daily? One capsule supplies 15 mg zinc. Two capsules would supply 30 mg, above NHS advice not to exceed 25 mg zinc daily from supplements unless advised by a doctor.",
  "Can I take it with other supplements? Check the total zinc, selenium, vitamins D and K, omega-3 and herbal ingredients across all products. Ask a pharmacist or doctor if uncertain.",
];

const storage = [
  "Store in a cool, dry place below 25°C, protected from direct sunlight and excessive heat.",
  "Keep in the original packaging.",
  "For a product enquiry, provide the product name, batch number, best-before date and place of purchase.",
];

export default function HisGradorPage() {
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
              <img src={PRODUCT_IMAGE} alt="HIS GRADOR" className="w-full h-auto object-contain rounded-2xl" />
            </div>

            <div>
              <p className="text-teal-600 font-semibold tracking-[0.2em] text-[10px] mb-3">FEATURED PRODUCT</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0c2c4d] leading-tight mb-2">HIS GRADOR</h1>
              <p className="text-lg font-semibold text-slate-700 mb-1">Male vitality support</p>
              <p className="text-sm text-slate-500 mb-6">Food Supplement — 30 Soft Capsules</p>

              <p className="text-base leading-relaxed text-slate-600 mb-7">
                HIS GRADOR is a food supplement for adult men combining zinc, selenium, vitamins D3 and K2, omega-3 fish oil, L-arginine, coenzyme Q10 and Panax ginseng extract.
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
            <h2 className="text-xl font-extrabold text-[#0c2c4d] mb-4">Daily nutritional content</h2>
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
              <h2 className="text-xl font-extrabold text-[#0c2c4d]">Authorised nutritional benefits</h2>
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

        <section className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-extrabold text-[#0c2c4d] mb-3">Recommended use</h2>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              {useNotes.map((item) => (
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
            <div className="flex items-center gap-2 mb-3">
              <FileText className="text-teal-600" size={20} />
              <h2 className="text-lg font-extrabold text-[#0c2c4d]">Ingredients and allergens</h2>
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

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-extrabold text-[#0c2c4d] mb-3">Frequently asked questions</h2>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              {faq.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 text-teal-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-extrabold text-[#0c2c4d] mb-3">Storage and traceability</h2>
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
            <h2 className="text-lg font-extrabold text-[#0c2c4d] mb-3">Product responsibility</h2>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <li><strong>Manufactured by:</strong> TOP PHARM SERVICE LLC, Uzbekistan.</li>
              <li><strong>Imported and distributed by:</strong> Vitarion Ltd, Allied House, 29-39 London Road, Twickenham, TW1 3SZ, United Kingdom.</li>
              <li><strong>Enquiries:</strong> +44 (0)7770 541212 | enquiries@vitarion.co.uk | www.vitarion.co.uk</li>
            </ul>
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
