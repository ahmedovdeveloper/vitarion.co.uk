import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

import stage1Front from "../assets/stage1-front.jpg";
import stage2Front from "../assets/stage2-front.jpg";
import stage3Front from "../assets/stage3-front.jpg";
import stage4Front from "../assets/stage4-front.jpg";
import mimiPreterm from "../assets/mimi-preterm.jpg";

const PRODUCT_CATEGORIES = ["All", "Supplements", "Mimi Organics"];

const PRODUCTS = [
  {
    title: "Rich Omegos",
    category: "Supplements",
    short: "Fish oil, astaxanthin and vitamin E for daily wellbeing.",
    image: "https://www.dropbox.com/scl/fi/7cpobjtsj2filasw2hiz6/RICH-OMEGOS-3D-FOR-UK.png?rlkey=3tx498avign17245rdajo24ga&raw=1",
    route: "/product/rich-omegos",
  },
  {
    title: "HER ELIONA",
    category: "Supplements",
    short: "Omega-3, collagen, biotin and cranberry for everyday female wellness.",
    image: "https://www.dropbox.com/scl/fi/1crjqu2hwyh4tp4py1mrn/HER-ELIONA-FOR-UK.png?rlkey=yv71937killb9ynl8p9o9y1mb&raw=1",
    route: "/product/her-eliona",
  },
  {
    title: "HIS GRADOR",
    category: "Supplements",
    short: "Zinc, selenium, omega-3 and ginseng for daily male vitality support.",
    image: "https://www.dropbox.com/scl/fi/dc68yi9z81ala7ghdo5ap/hisGRADOR-FOR-UK.png?rlkey=iiy1r7s927zhmndkhcz35itq9&dl=1",
    route: "/product/his-grador",
  },
];

const MIMI_ITEMS = [
  {
    title: "Stage 1",
    category: "Mimi Organics",
    sub: "0–6 Months",
    short: "Organic infant milk formula with gentle nourishment for early development.",
    image: stage1Front,
    route: "/product/mimi-organics-stage-1",
  },
  {
    title: "Stage 2",
    category: "Mimi Organics",
    sub: "6–12 Months",
    short: "Follow-on formula crafted to support growing babies and toddlers.",
    image: stage2Front,
    route: "/product/mimi-organics-stage-2",
  },
  {
    title: "Stage 3",
    category: "Mimi Organics",
    sub: "12–24 Months",
    short: "Growing-up milk for active toddlers and daily balanced nutrition.",
    image: stage3Front,
    route: "/product/mimi-organics-stage-3",
  },
  {
    title: "Stage 4",
    category: "Mimi Organics",
    sub: "24–36 Months",
    short: "Growing-up milk for toddlers needing nutrition through the next stage of development.",
    image: stage4Front,
    route: "/product/mimi-organics-stage-4",
  },
  {
    title: "Mimi Preterm",
    category: "Mimi Organics",
    sub: "Medical Nutrition",
    short: "Specialised nutrition for premature and low-birth-weight infants.",
    image: mimiPreterm,
    route: "/product/mimi-preterm",
  },
];

const ALL_ITEMS = [...PRODUCTS, ...MIMI_ITEMS];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Supplements");

  const visibleProducts =
    selectedCategory === "All"
      ? ALL_ITEMS
      : ALL_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans">
      <SiteHeader active="Products" accent="teal" />

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <section className="mb-10">
          <p className="text-teal-600 font-semibold tracking-[0.2em] text-[10px] mb-3">OUR PRODUCTS</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0c2c4d] leading-tight mb-3">
            Supplements &amp; Mimi Organics
          </h1>
          <div className="w-14 h-1 bg-teal-500 rounded-full mb-5" />

          <div className="flex flex-wrap gap-2">
            {PRODUCT_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={[
                    "inline-flex items-center rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors",
                    isActive
                      ? "border-teal-600 bg-teal-600 text-white shadow-sm"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-teal-200 hover:text-teal-700",
                  ].join(" ")}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </section>

        <section className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {visibleProducts.map(({ title, category, short, image, route, sub }) => (
            <div key={`${category}-${title}`} className="group rounded-[22px] border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="overflow-hidden rounded-[18px] bg-slate-50 mb-4 border border-slate-100">
                <img src={image} alt={title} className="w-full h-80 object-contain group-hover:scale-[1.02] transition-transform duration-200" />
              </div>

              <div className="px-1 pb-1">
                <p className={`text-[10px] font-semibold uppercase tracking-[0.18em] mb-2 ${category === "Mimi Organics" ? "text-green-700" : "text-teal-600"}`}>
                  {category}
                </p>
                <h2 className="text-xl font-extrabold text-[#0c2c4d] mb-1">{title}</h2>
                {sub && <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 mb-3">{sub}</p>}
                <p className="text-sm text-slate-600 leading-relaxed mb-4 min-h-[42px]">{short}</p>

                <Link
                  to={route}
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${category === "Mimi Organics" ? "text-[#0c2c4d] hover:text-green-700" : "text-[#0c2c4d] hover:text-teal-700"}`}
                >
                  View Product <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>

      <SiteFooter
        columns={[
          { title: "QUICK LINKS", items: ["Home", "About", "Business Areas", "Products"] },
          { title: "", items: ["Partnerships", "Quality & Compliance", "Contact"] },
          { title: "", items: ["Privacy Policy", "Terms of Use"] },
        ]}
      />
    </div>
  );
}
