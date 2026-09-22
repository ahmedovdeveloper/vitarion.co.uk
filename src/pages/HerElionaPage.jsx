import React from "react";
import { ArrowLeft, Download, HeartPulse, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const PRODUCT_IMAGE =
  "https://www.dropbox.com/scl/fi/1crjqu2hwyh4tp4py1mrn/HER-ELIONA-FOR-UK.png?rlkey=yv71937killb9ynl8p9o9y1mb&raw=1";
const PRODUCT_DOC =
  "https://www.dropbox.com/scl/fi/x9wkm6rqtbwurc6vpm7ge/HER-ELIONA-vitarion-web.docx?rlkey=r9q2mwe93i93m4yluwptnv7yi&dl=1";

const nutrientRows = [
  { label: "Fish oil concentrate", value: "1,200 mg" },
  { label: "EPA", value: "216 mg" },
  { label: "DHA", value: "144 mg" },
  { label: "Vitamin E", value: "30 mg α-TE" },
  { label: "Vitamin D3", value: "50 µg" },
  { label: "Vitamin K2 (MK-7)", value: "180 µg" },
  { label: "Biotin", value: "300 µg" },
  { label: "Hydrolysed fish collagen", value: "400 mg" },
  { label: "Cranberry extract 10:1", value: "200 mg" },
];

const benefits = [
  "EPA and DHA contribute to the normal function of the heart. The beneficial effect is obtained with a daily intake of 250 mg EPA and DHA.",
  "Vitamin D contributes to the maintenance of normal bones and teeth, the normal function of the immune system and normal muscle function.",
  "Vitamin K contributes to the maintenance of normal bones and normal blood clotting.",
  "Vitamin E contributes to the protection of cells from oxidative stress.",
  "Biotin contributes to the maintenance of normal hair, normal skin and normal energy-yielding metabolism.",
  "Collagen is a naturally occurring structural protein. No specific health claim is made for the collagen contained in this product.",
  "Cranberry is included as a characteristic botanical ingredient. The product is not intended to prevent, treat or cure urinary tract infections or any other medical condition.",
];

const dailyIntake = [
  "Adult women should take: one soft capsule twice daily with food and water.",
  "Swallow the capsules whole.",
  "Do not exceed the recommended daily intake.",
  "Consistent daily use is recommended as part of a varied, balanced diet and healthy lifestyle.",
];

const warnings = [
  "Do not exceed the recommended daily intake.",
  "Food supplements should not be used as a substitute for a varied, balanced diet and healthy lifestyle.",
  "Keep out of reach of young children.",
  "Do not use if you are allergic to fish or any other ingredient.",
  "Consult a healthcare professional before use if you are pregnant, breastfeeding, taking medication, receiving medical treatment or have a diagnosed medical condition.",
  "Consult a healthcare professional before use if you take anticoagulant or antiplatelet medication, including warfarin.",
  "Stop using the product and seek professional advice if you experience an adverse reaction.",
  "This product is not intended to diagnose, treat, cure or prevent disease.",
];

const ingredients = [
  "Fish oil concentrate (FISH)",
  "Soft-capsule shell (gelatine, humectant: glycerol, purified water, colours: Brilliant Blue FCF (E133), Allura Red AC (E129))",
  "Hydrolysed fish collagen (FISH)",
  "Medium-chain triglycerides (MCT oil)",
  "Cranberry extract (10:1)",
  "Emulsifier: lecithins",
  "Vitamin E (D-alpha-tocopherol)",
  "Beeswax",
  "Anti-caking agent: silicon dioxide",
  "Antioxidant: mixed tocopherols",
  "Biotin",
  "Vitamin K2 (menaquinone-7)",
  "Vitamin D3 (cholecalciferol)",
  "Allergen information: for allergens, see ingredients in bold. Contains FISH.",
  "Colour warning: Allura Red AC (E129) may have an adverse effect on activity and attention in children.",
];

const faq = [
  "Is HER ELIONA a medicine? No. It is a food supplement and is not intended to diagnose, treat, cure or prevent any disease.",
  "Does HER ELIONA prevent urinary tract infections? No. Cranberry is included as a botanical ingredient, but the product is not intended to prevent or treat urinary tract infections.",
  "How long will one pack last? Each pack contains 60 soft capsules. At the recommended intake of two capsules daily, one pack provides a 30-day supply.",
  "Should the capsules be taken with food? Yes. Take one capsule twice daily with food and water.",
  "Can I take HER ELIONA with other supplements? Check the combined amounts of vitamins D, E and K, biotin and omega-3 across all products you use.",
  "Can I take it during pregnancy or breastfeeding? Consult a qualified healthcare professional before use during pregnancy or breastfeeding.",
  "Does HER ELIONA contain fish? Yes. The fish oil concentrate and hydrolysed collagen are derived from fish.",
  "Is HER ELIONA suitable for vegetarians or vegans? No. It contains fish-derived ingredients and gelatine.",
  "Does biotin affect laboratory tests? Biotin can interfere with certain laboratory test results, particularly before thyroid, hormone, cardiac or other blood tests.",
];

const storage = [
  "Store in a cool, dry place below 25°C.",
  "Protect from direct sunlight, moisture and excessive heat.",
  "Keep the capsules in their original packaging and out of reach of young children.",
  "Do not use after the best-before date or if the packaging is damaged.",
  "Batch number and best before end: see the base or side of the package.",
];

export default function HerElionaPage() {
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
              <img src={PRODUCT_IMAGE} alt="HER ELIONA" className="w-full h-auto object-contain rounded-2xl" />
            </div>

            <div>
              <p className="text-teal-600 font-semibold tracking-[0.2em] text-[10px] mb-3">FEATURED PRODUCT</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0c2c4d] leading-tight mb-2">HER ELIONA</h1>
              <p className="text-xl font-semibold text-slate-700 mb-1">Daily nutritional support for women</p>
              <p className="text-sm text-slate-500 mb-6">Food Supplement — 60 Soft Capsules</p>

              <p className="text-base leading-relaxed text-slate-600 mb-7">
                HER ELIONA is a carefully formulated food supplement for adult women. It combines omega-3 fatty acids, vitamins D3, E and K2, biotin, hydrolysed fish collagen and cranberry extract in convenient soft capsules.
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
            <h2 className="text-xl font-extrabold text-[#0c2c4d] mb-4">Nutritional information</h2>
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
              <h2 className="text-xl font-extrabold text-[#0c2c4d]">What does HER ELIONA contain?</h2>
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
            <h2 className="text-lg font-extrabold text-[#0c2c4d] mb-3">How to take HER ELIONA</h2>
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
            <h2 className="text-lg font-extrabold text-[#0c2c4d] mb-3">Responsible businesses</h2>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <li><strong>Manufactured by:</strong> TOP PHARM SERVICE LLC, Kamolot Mahalla, Yangi Street, House 90, Syrdarya District, Syrdarya Region, Republic of Uzbekistan.</li>
              <li><strong>Imported and distributed in the United Kingdom by:</strong> Vitarion Ltd, Allied House, 29–39 London Road, Twickenham, TW1 3SZ, United Kingdom.</li>
              <li><strong>Customer enquiries:</strong> +44 (0)7770 541212 | enquiries@vitarion.co.uk | www.vitarion.co.uk</li>
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
