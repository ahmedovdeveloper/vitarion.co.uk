import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";


const PRODUCTS = [
  {
    title: "Rich Omegos",
    category: "Omega-3",
    short: "Fish oil, astaxanthin and vitamin E for daily wellbeing.",
    image: "https://www.dropbox.com/scl/fi/7cpobjtsj2filasw2hiz6/RICH-OMEGOS-3D-FOR-UK.png?rlkey=3tx498avign17245rdajo24ga&raw=1",
    route: "/products/rich-omegos",
  },
  {
    title: "HER ELIONA",
    category: "Women’s Support",
    short: "Omega-3, collagen, biotin and cranberry for everyday female wellness.",
    image: "https://www.dropbox.com/scl/fi/1crjqu2hwyh4tp4py1mrn/HER-ELIONA-FOR-UK.png?rlkey=yv71937killb9ynl8p9o9y1mb&raw=1",
    route: "/products/her-eliona",
  },
  {
    title: "HIS GRADOR",
    category: "Men’s Support",
    short: "Zinc, selenium, omega-3 and ginseng for daily male vitality support.",
    image: "https://www.dropbox.com/scl/fi/dc68yi9z81ala7ghdo5ap/hisGRADOR-FOR-UK.png?rlkey=iiy1r7s927zhmndkhcz35itq9&dl=1",
    route: "/products/his-grador",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-700 font-sans">
      <SiteHeader active="Products" accent="teal" />

      <main className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <section className="mb-10">
          <p className="text-teal-600 font-semibold tracking-[0.2em] text-[10px] mb-3">OUR PRODUCTS</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0c2c4d] leading-tight mb-3">
            Product Range
          </h1>
          <div className="w-14 h-1 bg-teal-500 rounded-full" />
        </section>

        <section className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {PRODUCTS.map(({ title, category, short, image, route }) => (
            <div key={title} className="group rounded-[22px] border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md transition-all duration-200">
              <div className="overflow-hidden rounded-[18px] bg-slate-50 mb-4 border border-slate-100">
                <img src={image} alt={title} className="w-full h-100  group-hover:scale-[1.02] transition-transform duration-200" />
              </div>

              <div className="px-1 pb-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-600 mb-2">
                  {category}
                </p>
                <h2 className="text-xl font-extrabold text-[#0c2c4d] mb-2">{title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 min-h-[42px]">{short}</p>

                <Link
                  to={route}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0c2c4d] hover:text-teal-700"
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
          { title: "QUICK LINKS", items: ["Home", "About", "Business Areas", "Products", "Mimi Organics"] },
          { title: "", items: ["Partnerships", "Quality & Compliance", "Contact"] },
          { title: "", items: ["Privacy Policy", "Terms of Use"] },
        ]}
      />
    </div>
  );
}
