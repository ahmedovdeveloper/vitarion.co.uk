import {
  ArrowLeft,
  Download,
  HeartPulse,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Eye,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { getProductViewStats } from "../utils/analytics";

import stage1Front from "../assets/stage1-front.jpg";
import stage2Front from "../assets/stage2-front.jpg";
import stage3Front from "../assets/stage3-front.jpg";
import stage4Front from "../assets/stage4-front.jpg";
import mimiPreterm from "../assets/mimi-preterm.jpg";

const PRODUCT_LIBRARY = {
  "rich-omegos": {
    category: "Supplements",
    title: "RICH OMEGOS",
    subtitle: "A concentrated daily omega 3 soft capsule with astaxanthin and vitamin E.",
    image: "https://www.dropbox.com/scl/fi/7cpobjtsj2filasw2hiz6/RICH-OMEGOS-3D-FOR-UK.png?rlkey=3tx498avign17245rdajo24ga&raw=1",
    imageAlt: "RICH OMEGOS 3D",
    description:
      "RICH OMEGOS provides EPA and DHA from fish oil, together with astaxanthin and vitamin E, in a convenient one-capsule daily routine. Each pack contains 60 soft capsules, providing 60 days at the recommended intake.",
    howToTake: [
      "Take one soft capsule once daily with food and a glass of water. Choose a meal you have regularly and swallow the capsule whole.",
      "If you miss a day, resume your usual serving the next day. Do not take an extra serving to make up for one you missed.",
    ],
    ingredients: [
      { label: "Fish oil concentrate", value: "1,230 mg" },
      { label: "Total omega 3 fatty acids", value: "369 mg" },
      { label: "EPA and DHA", value: "221 mg EPA + 148 mg DHA" },
      { label: "Astaxanthin", value: "6 mg" },
      { label: "Vitamin E", value: "5 mg alpha-TE (42% NRV)" },
    ],
    benefits: [
      "EPA and DHA contribute to the normal function of the heart. The beneficial effect is obtained with a daily intake of 250 mg of EPA and DHA; one RICH OMEGOS capsule provides 369 mg.",
      "Vitamin E contributes to the protection of cells from oxidative stress.",
      "The formula includes 6 mg astaxanthin alongside fish oil and vitamin E.",
    ],
    warnings: [
      "Contains FISH and SOYA. The capsule shell contains bovine gelatine. This product is not suitable for vegetarians or vegans.",
      "If you take anticoagulant or antiplatelet medicine, check with a healthcare professional before use.",
      "Food supplements should not be used as a substitute for a varied, balanced diet and a healthy lifestyle. Do not exceed the recommended daily intake. Keep out of reach of children.",
      "If you are pregnant or breastfeeding, have a medical condition, or take medication, ask a doctor or pharmacist before use. If you take warfarin or another blood thinner, seek advice before taking this product.",
      "Store in a cool, dry place away from direct sunlight. Keep the container tightly closed. Check the pack for its best-before date and batch number.",
    ],
    faq: [
      {
        q: "Can I take it with other supplements?",
        a: "Check for overlapping vitamins, minerals and fish oil before combining products. Ask a pharmacist if you are unsure, especially if you take medicines.",
      },
      {
        q: "Where do I find the full label?",
        a: "The pack is the reference for the complete ingredient list, batch number, best-before date and any specific warnings. Keep it until you finish the product.",
      },
    ],
    documentUrl: "https://www.dropbox.com/scl/fi/yp703czq71w1m09dj2d7f/RICH-OMEGOS-QR-page-draft.docx?rlkey=520f9evzs4plwfrzihttnnn03&dl=1&utm_source=chatgpt.com",
    footerText: "Vitarion Ltd · 92A Bedfont Lane, Feltham, Middlesex TW14 9BP, United Kingdom · Address effective 1 October 2026 · vitarion.co.uk",
    url: "https://vitarion.co.uk/products/rich-omegos",
  },
  "her-eliona": {
    category: "Supplements",
    title: "HER ELIONA",
    subtitle: "A daily supplement for women with omega 3, selected vitamins, collagen and cranberry extract.",
    image: "https://www.dropbox.com/scl/fi/1crjqu2hwyh4tp4py1mrn/HER-ELIONA-FOR-UK.png?rlkey=yv71937killb9ynl8p9o9y1mb&raw=1",
    imageAlt: "HER ELIONA",
    description:
      "HER ELIONA brings fish-derived omega 3, vitamin D, vitamin K, biotin and vitamin E together in a simple two-capsule daily routine. Each pack contains 60 soft capsules, providing 30 days at the recommended intake.",
    howToTake: [
      "Take two soft capsules together once daily with a meal and a glass of water. Choose a mealtime you can follow consistently. Swallow the capsules whole.",
      "If you miss a day, resume your usual serving the next day. Do not take an extra serving to make up for one you missed.",
    ],
    ingredients: [
      { label: "Fish oil concentrate", value: "1,200 mg" },
      { label: "EPA and DHA", value: "216 mg EPA + 144 mg DHA" },
      { label: "Hydrolysed fish collagen", value: "400 mg" },
      { label: "Cranberry extract 10:1", value: "200 mg" },
      { label: "Vitamin E", value: "30 mg alpha-TE (250% NRV)" },
      { label: "Vitamin D3", value: "50 µg (1,000% NRV)" },
      { label: "Vitamin K2 as MK-7", value: "180 µg (240% NRV)" },
      { label: "Biotin", value: "300 µg (600% NRV)" },
    ],
    benefits: [
      "EPA and DHA contribute to the normal function of the heart. The beneficial effect is obtained with a daily intake of 250 mg of EPA and DHA; the recommended HER ELIONA portion provides 360 mg.",
      "Vitamin D and vitamin K contribute to the maintenance of normal bones. Vitamin D contributes to the normal function of the immune system.",
      "Biotin contributes to the maintenance of normal hair and normal skin. Vitamin E contributes to the protection of cells from oxidative stress.",
      "The formula also includes 400 mg of hydrolysed fish collagen and 200 mg of cranberry extract in its daily serving.",
    ],
    warnings: [
      "Contains FISH and SOYA. The capsule shell contains bovine gelatine. This product is not suitable for vegetarians or vegans.",
      "This formula supplies 50 µg of vitamin D per daily serving. If you already take vitamin D or a multivitamin, check the combined amount with a healthcare professional. Vitamin K can interact with warfarin.",
      "Allura Red AC (E129) may have an adverse effect on activity and attention in children.",
      "Food supplements should not be used as a substitute for a varied, balanced diet and a healthy lifestyle. Do not exceed the recommended daily intake. Keep out of reach of children.",
      "If you are pregnant or breastfeeding, have a medical condition, or take medication, ask a doctor or pharmacist before use. If you take warfarin or another blood thinner, seek advice before taking this product.",
      "Store in a cool, dry place away from direct sunlight. Keep the container tightly closed. Check the pack for its best-before date and batch number.",
    ],
    faq: [
      {
        q: "Can I take it with other supplements?",
        a: "Check for overlapping vitamins, minerals and fish oil before combining products. Ask a pharmacist if you are unsure, especially if you take medicines.",
      },
      {
        q: "Where do I find the full label?",
        a: "The pack is the reference for the complete ingredient list, batch number, best-before date and any specific warnings. Keep it until you finish the product.",
      },
    ],
    documentUrl: "https://www.dropbox.com/scl/fi/8r2sry58ecbspok6x6f95/HER-ELIONA-QR-page-draft.docx?rlkey=s338w10tlcpp67zz5ctv6nm2j&dl=1&utm_source=chatgpt.com",
    footerText: "Vitarion Ltd · 92A Bedfont Lane, Feltham, Middlesex TW14 9BP, United Kingdom · Address effective 1 October 2026 · vitarion.co.uk",
    url: "https://vitarion.co.uk/products/her-eliona",
  },
  "his-grador": {
    category: "Supplements",
    title: "HIS GRADOR",
    subtitle: "An everyday men’s supplement with zinc, selenium, vitamins, omega 3 and selected botanicals.",
    image: "https://www.dropbox.com/scl/fi/l7wgcpyjc1q0zt0aljzuj/hisGRADOR-FOR-UK3D.png?rlkey=02ipxftlfnl78c6y0bb46p6a7&raw=1",
    imageAlt: "HIS GRADOR",
    description:
      "HIS GRADOR combines minerals and vitamins with fish oil, CoQ10, amino acids and Panax ginseng in one daily soft capsule. Each pack contains 60 capsules, providing 60 days at the recommended intake.",
    howToTake: [
      "Take one soft capsule once daily with a meal and a glass of water. Breakfast or lunch may be convenient if you prefer to avoid taking a ginseng-containing supplement late in the day. Swallow whole.",
      "If you miss a day, resume your usual serving the next day. Do not take an extra serving to make up for one you missed.",
    ],
    ingredients: [
      { label: "Fish oil concentrate", value: "500 mg" },
      { label: "EPA and DHA", value: "90 mg EPA + 60 mg DHA" },
      { label: "Vitamin C", value: "80 mg (100% NRV)" },
      { label: "Vitamin E", value: "12 mg alpha-TE (100% NRV)" },
      { label: "Vitamin B6", value: "1.4 mg (100% NRV)" },
      { label: "Vitamin D3", value: "15 µg (300% NRV)" },
      { label: "Vitamin K2", value: "90 µg (120% NRV)" },
      { label: "Zinc", value: "15 mg (150% NRV)" },
      { label: "Selenium", value: "55 µg (100% NRV)" },
      { label: "L-arginine", value: "125 mg" },
      { label: "L-carnitine", value: "100 mg" },
      { label: "Coenzyme Q10", value: "50 mg" },
      { label: "Panax ginseng root extract 10:1", value: "80 mg" },
    ],
    benefits: [
      "Zinc contributes to the maintenance of normal testosterone levels in the blood and to normal fertility and reproduction.",
      "Selenium contributes to normal spermatogenesis. Zinc, selenium and vitamin D contribute to the normal function of the immune system.",
      "Vitamin C and vitamin B6 contribute to normal energy-yielding metabolism and to the reduction of tiredness and fatigue.",
      "The formula also contains fish oil, CoQ10, L-arginine, L-carnitine and Panax ginseng root extract.",
    ],
    warnings: [
      "Contains FISH and SOYA. The capsule shell contains bovine gelatine. This product is not suitable for vegetarians or vegans.",
      "Vitamin K can interact with warfarin. Ginseng can interact with some medicines, including medicines for blood sugar or blood pressure. This product contains 15 mg zinc per capsule; check the total zinc from other supplements before combining them.",
      "Food supplements should not be used as a substitute for a varied, balanced diet and a healthy lifestyle. Do not exceed the recommended daily intake. Keep out of reach of children.",
      "If you are pregnant or breastfeeding, have a medical condition, or take medication, ask a doctor or pharmacist before use. If you take warfarin or another blood thinner, seek advice before taking this product.",
      "Store in a cool, dry place away from direct sunlight. Keep the container tightly closed. Check the pack for its best-before date and batch number.",
    ],
    faq: [
      {
        q: "Can I take it with other supplements?",
        a: "Check for overlapping vitamins, minerals and fish oil before combining products. Ask a pharmacist if you are unsure, especially if you take medicines.",
      },
      {
        q: "Where do I find the full label?",
        a: "The pack is the reference for the complete ingredient list, batch number, best-before date and any specific warnings. Keep it until you finish the product.",
      },
    ],
    documentUrl: "https://www.dropbox.com/scl/fi/v2cg9mwwnaj1ef5mesme9/HIS-GRADOR-QR-page-draft.docx?rlkey=vawtvgatjmnykxw8jjono33jk&dl=1&utm_source=chatgpt.com",
    footerText: "Vitarion Ltd · 92A Bedfont Lane, Feltham, Middlesex TW14 9BP, United Kingdom · Address effective 1 October 2026 · vitarion.co.uk",
    url: "https://vitarion.co.uk/products/his-grador",
  },
  "mimi-organics-stage-1": {
    category: "Mimi Organics",
    title: "Stage 1",
    subtitle: "0–6 Months",
    image: stage1Front,
    imageAlt: "Mimi Organics Stage 1",
    description:
      "Organic infant milk formula with gentle nourishment for early development. Designed for the first stage of life with lactose as the only carbohydrate source and no palm oil.",
    howToTake: [
      "Prepare according to the feeding instructions on the pack and use the product as part of a balanced feeding routine.",
      "Follow the age-specific guidance and always feed under the advice of a healthcare professional or parent/guardian where needed.",
    ],
    highlights: [
      "Organic infant milk formula",
      "Made with organic milk",
      "Lactose only",
      "DHA & ARA",
      "GOS/FOS prebiotics",
      "No palm oil, No GMOs",
      "Vitamins & minerals",
    ],
    benefits: [
      "Gentle nutrition designed for the start of life.",
      "Supports early development with key nutrients and prebiotic fibres.",
      "Formulated to deliver a practical, balanced first-stage feeding option.",
    ],
    warnings: [
      "Use only as directed on the pack.",
      "Prepared formula should be used promptly and stored in line with the label guidance.",
      "Follow local guidance and seek professional advice when needed.",
    ],
    faq: [
      {
        q: "What is special about Stage 1?",
        a: "It is formulated for infants from birth to six months with gentle nutrition tailored to early growth and development.",
      },
      {
        q: "Is it suitable for all babies?",
        a: "Use according to the product instructions and, when needed, consult a healthcare professional for individual feeding advice.",
      },
    ],
    footerText: "Mimi Organics · premium nutrition for every stage of early life",
    url: "https://vitarion.co.uk/product/mimi-organics-stage-1",
  },
  "mimi-organics-stage-2": {
    category: "Mimi Organics",
    title: "Stage 2",
    subtitle: "6–12 Months",
    image: stage2Front,
    imageAlt: "Mimi Organics Stage 2",
    description:
      "Follow-on formula crafted to support growing babies and toddlers. Designed to complement the next stage of balanced nutrition.",
    howToTake: [
      "Follow the feeding guidance on the pack for the correct amount and frequency for the child’s age and needs.",
      "Prepare safely and store according to the instructions provided on the packaging.",
    ],
    highlights: [
      "Organic follow-on formula",
      "Made with organic milk",
      "Lactose as main carbohydrate",
      "DHA & ARA",
      "GOS/FOS & optional HMO",
      "Iron, Calcium, Vitamin D",
      "No palm oil, No GMOs",
    ],
    benefits: [
      "Created to support the transition from breast milk or infant formula into the next feeding stage.",
      "Contains nutrient support for normal growth and early development.",
      "Designed for everyday use as part of a structured feeding routine.",
    ],
    warnings: [
      "Use only as directed.",
      "Store and prepare safely in line with the product guidance.",
      "Always follow age-appropriate feeding instructions.",
    ],
    faq: [
      {
        q: "When should it be introduced?",
        a: "Stage 2 is designed for the appropriate age range indicated on the packaging and should be used according to the feeding guidance given.",
      },
      {
        q: "Does it contain added sugar?",
        a: "The formula is designed to meet the stage-specific nutrition needs outlined on the pack without unnecessary added sugar.",
      },
    ],
    footerText: "Mimi Organics · premium nutrition for every stage of early life",
    url: "https://vitarion.co.uk/product/mimi-organics-stage-2",
  },
  "mimi-organics-stage-3": {
    category: "Mimi Organics",
    title: "Stage 3",
    subtitle: "12–24 Months",
    image: stage3Front,
    imageAlt: "Mimi Organics Stage 3",
    description:
      "Growing-up milk for active toddlers and daily balanced nutrition. A gentle option to support increasing nutritional needs during early childhood.",
    howToTake: [
      "Use in line with the feeding guidance for toddlers and young children on the pack.",
      "Prepare and serve as directed, and keep the feeding routine consistent with your child’s daily plan.",
    ],
    highlights: [
      "Organic growing-up milk",
      "No added sucrose",
      "Prebiotics & fibre",
      "DHA for brain development",
      "Iron, Iodine, Zinc",
      "Calcium & Vitamin D3",
      "Gentle nutrition for toddlers",
    ],
    benefits: [
      "Supports the nutritional needs of toddlers during the transition to a more varied diet.",
      "Includes nutrients that are important for growth and development.",
      "Provides a practical, balanced addition to a growing child’s routine.",
    ],
    warnings: [
      "Use only as directed and according to age guidance.",
      "Follow the pack instructions for preparation, serving and storage.",
      "Seek professional guidance when needed.",
    ],
    faq: [
      {
        q: "Is it suitable for toddlers?",
        a: "Yes, it is designed for the age range indicated for young children and should be used consistently with the pack guidance.",
      },
      {
        q: "How does it fit into a toddler diet?",
        a: "It is intended as a nutritional support alongside a balanced diet and feeding routine appropriate for the child.",
      },
    ],
    footerText: "Mimi Organics · premium nutrition for every stage of early life",
    url: "https://vitarion.co.uk/product/mimi-organics-stage-3",
  },
  "mimi-organics-stage-4": {
    category: "Mimi Organics",
    title: "Stage 4",
    subtitle: "24–36 Months",
    image: stage4Front,
    imageAlt: "Mimi Organics Stage 4",
    description:
      "Growing-up milk for toddlers and young children requiring continued daily nutrition through the next phase of early development.",
    howToTake: [
      "Follow the label instructions for the recommended serving size and frequency.",
      "Prepare and store according to the product guidance for hygiene and freshness.",
    ],
    highlights: [
      "Organic growing-up milk",
      "No added sucrose",
      "Prebiotics & fibre",
      "DHA support",
      "Calcium, Vitamin D3, Iron",
      "Iodine & Zinc",
      "Daily nutrition for toddlers",
    ],
    benefits: [
      "Supports toddlers through a next stage of growth and daily nutrition.",
      "Designed to complement a balanced diet and family nutrition routine.",
      "Helpful for maintaining nutritional consistency as children grow.",
    ],
    warnings: [
      "Use as directed on the pack.",
      "Child feeding plans should be consistent with age guidance and family health advice.",
      "Store properly and prepare with clean utensils.",
    ],
    faq: [
      {
        q: "Who is Stage 4 for?",
        a: "It is intended for the age range stated on the pack and is designed to support early childhood nutrition through the toddler period.",
      },
      {
        q: "Does it replace meals?",
        a: "It supports a balanced intake as part of a healthy feeding routine rather than replacing a varied diet.",
      },
    ],
    footerText: "Mimi Organics · premium nutrition for every stage of early life",
    url: "https://vitarion.co.uk/product/mimi-organics-stage-4",
  },
  "mimi-preterm": {
    category: "Mimi Organics",
    title: "Mimi Preterm",
    subtitle: "Specialised FSMP Nutrition",
    image: mimiPreterm,
    imageAlt: "Mimi Preterm",
    description:
      "Specialised FSMP nutrition for premature and low-birth-weight infants. Intended for professional use under medical supervision.",
    howToTake: [
      "Use only under the guidance of the relevant medical or healthcare professional.",
      "Follow the preparation and feeding instructions shown on the product label and clinical guidance.",
    ],
    highlights: [
      "For premature & LBW infants",
      "High energy & protein enriched",
      "DHA & ARA",
      "DHT Oils & OPO structured fat",
      "Nucleotides, Choline, Taurine",
      "Under medical supervision",
    ],
    benefits: [
      "Designed for infants with heightened nutritional needs.",
      "Provides structured energy and nutrient support in specialised care settings.",
      "Created for clinical and specialist feeding plans where evidence-based nutrition is essential.",
    ],
    warnings: [
      "This product is intended for special medical purposes and should be used under medical supervision.",
      "Follow the professional guidance for preparation and administration.",
      "Do not use outside the intended clinical context.",
    ],
    faq: [
      {
        q: "Is this a standard formula?",
        a: "No. This is a specialised nutrition product for specific medical circumstances and should be used under appropriate professional guidance.",
      },
      {
        q: "Who should use it?",
        a: "It is intended for infants requiring specialised nutritional support, including premature or low-birth-weight situations.",
      },
    ],
    footerText: "Mimi Organics · specialised nutrition under professional guidance",
    url: "https://vitarion.co.uk/product/mimi-preterm",
  },
};

export default function ProductPage() {
  const { slug } = useParams();
  const product = PRODUCT_LIBRARY[slug];
  const [productStats, setProductStats] = useState({ views: 0, uniqueUsers: 0 });

  useEffect(() => {
    let isMounted = true;

    const loadStats = async () => {
      if (!slug) {
        return;
      }

      const stats = await getProductViewStats(slug);
      if (isMounted) {
        setProductStats(stats);
      }
    };

    loadStats();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white text-slate-700 font-sans">
        <SiteHeader active="Products" accent="teal" />
        <main className="max-w-4xl mx-auto px-6 py-20">
          <p className="text-teal-600 font-semibold tracking-[0.2em] text-[10px] mb-3">PRODUCT NOT FOUND</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0c2c4d] mb-4">This product is not available.</h1>
          <p className="text-slate-600 mb-8">The product you’re looking for may have moved or the link might be outdated.</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-700"
          >
            <ArrowLeft size={16} /> Back to Products
          </Link>
        </main>
      </div>
    );
  }

  const productDoc = product.documentUrl;
  const responsibilityList =
    product.category === "Mimi Organics"
      ? [
          "Mimi Organics · premium nutrition for every stage of early life",
        ]
      : [
          "Manufactured by: TOP PHARM SERVICE LLC, Kamolot Mahalla, Yangi Street, House 90, Syrdarya District, Syrdarya Region, Republic of Uzbekistan.",
          "Imported and distributed in the United Kingdom by: Vitarion Ltd, Allied House, 29–39 London Road, Twickenham, TW1 3SZ, United Kingdom.",
          "Customer enquiries: + +44 7770 54 0202| enquiries@vitarion.co.uk | www.vitarion.co.uk",
        ];

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
              <img src={product.image} alt={product.imageAlt} className="w-full h-auto object-contain rounded-2xl" />
            </div>

            <div>
              <p className="text-teal-600 font-semibold tracking-[0.2em] text-[10px] mb-3">FEATURED PRODUCT</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0c2c4d] leading-tight mb-2">{product.title}</h1>
              <p className="text-xl font-semibold text-slate-700 mb-1">{product.subtitle}</p>
              <p className="text-sm text-slate-500 mb-6">{product.category} — {product.title === "Stage 1" || product.title === "Stage 2" || product.title === "Stage 3" || product.title === "Stage 4" || product.title === "Mimi Preterm" ? "Nutrition range" : "60 Soft Capsules"}</p>

              <p className="text-base leading-relaxed text-slate-600 mb-7">{product.description}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                {productDoc && (
                  <a
                    href={productDoc}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#0c2c4d] hover:bg-[#163d66] text-white font-semibold text-sm px-5 py-3 rounded-lg transition"
                  >
                    View Document <Download size={16} />
                  </a>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-2 text-sm font-semibold text-teal-800">
                  <Eye size={16} />
                  {productStats.views} views
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-extrabold text-[#0c2c4d] mb-4">Nutritional information</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {product.ingredients?.map(({ label, value }) => (
                <div key={label} className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">{label}</p>
                  <p className="mt-2 text-xl font-extrabold text-[#0c2c4d]">{value}</p>
                </div>
              )) ||
                product.highlights?.map((item) => (
                  <div key={item} className="rounded-xl bg-slate-50 border border-slate-200 p-3">
                    <p className="text-[10px] uppercase tracking-[0.12em] text-slate-500">Key benefit</p>
                    <p className="mt-2 text-base font-extrabold text-[#0c2c4d]">{item}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 mb-3">
              <HeartPulse className="text-teal-600" size={20} />
              <h2 className="text-xl font-extrabold text-[#0c2c4d]">What does {product.title} contain?</h2>
            </div>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              {product.benefits.map((item) => (
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
            <h2 className="text-lg font-extrabold text-[#0c2c4d] mb-3">How to take it</h2>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              {product.howToTake.map((item) => (
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
              {product.warnings.map((item) => (
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
              {(product.ingredients?.map(({ label }) => label) || product.highlights || []).map((item) => (
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
              {product.faq.map(({ q, a }) => (
                <li key={q} className="flex gap-2">
                  <span className="mt-1 text-teal-600">•</span>
                  <span>{q}: {a}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-extrabold text-[#0c2c4d] mb-3">Storage</h2>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <li className="flex gap-2"><span className="mt-1 text-teal-600">•</span><span>Store in a cool, dry place away from direct sunlight.</span></li>
              <li className="flex gap-2"><span className="mt-1 text-teal-600">•</span><span>Keep the container tightly closed and out of reach of children.</span></li>
              <li className="flex gap-2"><span className="mt-1 text-teal-600">•</span><span>Check the pack for the best-before date and batch number.</span></li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-extrabold text-[#0c2c4d] mb-3">Responsible businesses</h2>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              {responsibilityList.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 text-teal-600">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
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
