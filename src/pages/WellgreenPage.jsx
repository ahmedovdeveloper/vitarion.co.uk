import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  Factory,
  Globe2,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Sprout,
  Star,
  Truck,
  FileText,
  Lock,
  Users,
  MessageCircle,
  Phone,
  Mail,
  MapPin,

} from "lucide-react";

import SiteHeader, { LogoMark } from "../components/Header";
import infoImage from "../assets/information.png"; 
import heroImage from "../assets/herelogo.png"
const productCards = [
  {
    title: "Botanical Extracts",
    image:
      "https://www.dropbox.com/scl/fi/3j5w92bzfuz02fwag5pz1/products1.png?rlkey=5wgdg8l3cdfvx8qc8n8i3ur6j&st=0txmk9ok&dl=1",
  },
  {
    title: "Fruit & Vegetable Powders",
    image:
      "https://www.dropbox.com/scl/fi/ydcxo5r7s2kjqnwvo7191/Gemini_Generated_Image_ke716ske716ske71.jpeg?rlkey=gvyf5qt6we8bjj0qxak5wc5gs&st=px1ft2j4&dl=1",
  },
  {
    title: "Functional Ingredients",
    image:
      "https://www.dropbox.com/scl/fi/yag6luf4merevygd01b0g/Gemini_Generated_Image_gspfz9gspfz9gspf.jpeg?rlkey=cdgcnzwn8u7h266xaa2sy2st8&st=idxoej2n&dl=1",
  },
  {
    title: "Mushroom Extracts",
    image:
      "https://www.dropbox.com/scl/fi/rhsq4gjdx1b3d12q4suu8/Gemini_Generated_Image_fcblfwfcblfwfcbl.jpeg?rlkey=afjm4y66d1j1w46czjzmylhgq&st=0kjfn45c&dl=1",
  },
  {
    title: "Amino Acids & Nutritional Ingredients",
    image:
      "https://www.dropbox.com/scl/fi/ytkvoaeqkyp5uw501ihp4/Gemini_Generated_Image_6fwswj6fwswj6fws.jpeg?rlkey=a117k3ea5ajm1gekycjbwhfh2&st=g1wu0p6z&dl=1",
  },
  {
    title: "Phytochemicals",
    image:
      "https://www.dropbox.com/scl/fi/ujmn6v9x6tu0vxnh1sl26/5ae8c817-2094-4c1d-8959-003ce232d433.png?rlkey=qp694rh6rgi5bwysd9bf5s1mc&st=aimj3luy&dl=1",
  },
  {
    title: "Cosmetic Ingredients",
    image:
      "https://www.dropbox.com/scl/fi/cjz5lxc187kiio193m7mb/Gemini_Generated_Image_1bwytg1bwytg1bwy.jpeg?rlkey=uqedcu94gerebdpm7cippxh7o&st=29bt79om&dl=1",
  },
];
import img from "../assets/image.png"
const featuredProducts = [
  {
    title: "Green Tea Extract",
    specs: "EGCG ≥ 98%",
    cas: "CAS: 84650-60-2",
    image:
      "https://www.dropbox.com/scl/fi/p69wnz5yet3rkr12sc5os/Gemini_Generated_Image_vt0r30vt0r30vt0r.jpeg?rlkey=32hmbryhvcrn5msg5ai4stf5i&st=xgbh7dlz&dl=1",
  },
  {
    title: "Turmeric Extract",
    specs: "Curcumin ≥ 95%",
    cas: "CAS: 458-37-7",
    image:
      "https://www.dropbox.com/scl/fi/5d3457atmafusmzcwb74x/Gemini_Generated_Image_p9w5tpp9w5tpp9w5.jpeg?rlkey=r6ib575kphztuixc94t5b60hf&st=spbb1big&dl=1",
  },
  {
    title: "Goji Berry Extract",
    specs: "Polysaccharides ≥ 50%",
    cas: "CAS: 107-43-7",
    image:
      "https://www.dropbox.com/scl/fi/jhy1pidoeryk84jcenebm/Gemini_Generated_Image_wu10cuwu10cuwu10.jpeg?rlkey=v61hmlbvm0b9nikxiqa0jzald&st=9zghv5sy&dl=1",
  },
  {
    title: "Reishi Mushroom Extract",
    specs: "Polysaccharides ≥ 30%",
    cas: "CAS: 84604-12-6",
    image:
      "https://www.dropbox.com/scl/fi/nunizsjd008d0mirc23zb/Gemini_Generated_Image_n5h200n5h200n5h2.jpeg?rlkey=tbqgkb8qkdf6degsgs48frqex&st=x43y4qwv&dl=1",
  },
  {
    title: "L-Theanine",
    specs: "Purity ≥ 98%",
    cas: "CAS: 3081-61-6",
    image:
      "https://www.dropbox.com/scl/fi/vjnztzsnb1ov8cuizrozy/Gemini_Generated_Image_u2fudcu2fudcu2fu.jpeg?rlkey=svx0lbtvfox3qy4qcwzet4azr&st=mg7co8l5&dl=1",
  },
  {
    title: "Blueberry Extract",
    specs: "Anthocyanins ≥ 25%",
    cas: "CAS: 84082-34-8",
    image:
      "https://www.dropbox.com/scl/fi/vdu1avbzts37zif8n8005/Gemini_Generated_Image_puapappuapappuap.jpeg?rlkey=spwtnvjywqqhe33vucjdqh7ct&st=eyxlto6b&dl=1",
  },
];

const heroBenefits = [
  { Icon: Leaf, label: "Natural & Organic" },
  { Icon: Star, label: "High Purity & Quality" },
  { Icon: Globe2, label: "Backed by Science" },
  { Icon: ShieldCheck, label: "Reliable Supply Chain" },
  { Icon: Factory, label: "Your Trusted Partner" },
];

const partnerBenefits = [
  { Icon: Leaf, title: "UK Stock & Flexible Quantities", description: "Available now" },
  { Icon: Users, title: "Dedicated Support (Maggie's Team)", description: "Expert assistance" },
  { Icon: FileText, title: "Technical Documents (COA, TDS, MSDS)", description: "Complete documentation" },
  { Icon: Lock, title: "Reliable & Transparent Supply Chain", description: "Full traceability" },
  { Icon: Truck, title: "Fast Delivery Across the UK & EU", description: "Quick turnaround" },
];

const values = [
  "Natural, traceable botanical sourcing",
  "High-quality ingredient standards",
  "Sustainable, responsible production",
  "Consistency and compliance across markets",
];

export default function WellgreenPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <SiteHeader active="Wellgreen" accent="green" />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#f5f8f7]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${heroImage}')`,
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(241,246,244,0.96)_0%,rgba(241,246,244,0.88)_40%,rgba(12,44,77,0.2)_60%)]" />

          <div className="relative max-w-7xl mx-auto px-6 py-10 lg:py-16">
            <div className="grid lg:grid-cols-[1.08fr_1fr] gap-8 items-center">
              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-green-700">
                  <BadgeCheck size={14} />
                  OUR TRUSTED PARTNER
                </div>

                <div className="mb-6 flex items-center gap-5 flex-wrap">
                  <div className="text-[2.1rem] sm:text-[2.5rem] font-black leading-none text-[#0c2c4d]">
                    VITARION
                  </div>
                  <div className="h-10 w-px bg-slate-300" />
                  <div className="text-[2.1rem] sm:text-[2.5rem] font-black leading-none text-green-700">
                    wellgreen
                  </div>
                </div>

                <h1 className="max-w-[640px] text-4xl font-black leading-[1.05] text-[#0c2c4d] sm:text-[3.5rem]">
                  Global Natural Ingredients for a Healthier World
                </h1>

                <p className="mt-6 max-w-[650px] text-base leading-relaxed text-slate-600 sm:text-lg">
                  Vitarion Ltd is the official partner of Wellgreen in the UK and Europe,
                  bringing high-quality, natural plant extracts and functional ingredients
                  to global supplement, food, beverage and pharmaceutical manufacturers.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                  {heroBenefits.map(({ Icon, label }) => (
                    <div
                      key={label}
                      className="rounded-[1.2rem] border border-slate-200 bg-white/90 p-3 text-center shadow-sm backdrop-blur-sm"
                    >
                      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                        <Icon size={19} />
                      </div>
                      <p className="text-[11px] font-semibold leading-snug text-slate-700">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button className="inline-flex items-center gap-2 rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
                    Explore Wellgreen Products <ArrowRight size={16} />
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-[#0c2c4d] px-6 py-3 text-sm font-semibold text-[#0c2c4d] transition hover:bg-[#0c2c4d] hover:text-white">
                    Contact us <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="relative z-10 hidden lg:block" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white max-w-7xl mx-auto px-6 py-14">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_1.3fr] items-start">
            <div>
              <h2 className="text-4xl font-black text-[#0c2c4d]">About Wellgreen</h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Wellgreen Technology Co., Ltd. is a leading manufacturer and supplier of
                high-quality plant extracts, natural ingredients and functional raw materials,
                based in Xi'an, China. With advanced R&D, state-of-the-art facilities and a
                commitment to sustainability, Wellgreen serves global customers in the
                nutraceutical, pharmaceutical, food, beverage and cosmetic industries.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-green-700 bg-green-50 px-5 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-600 hover:text-white">
                Learn More About Wellgreen <ArrowRight size={16} />
              </button>
            </div>
            <div>
              <img src={infoImage} alt="Information" />
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="bg-white py-14">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-4xl font-black text-[#0c2c4d]">Product Categories</h2>
                <p className="mt-2 text-slate-600">
                  A comprehensive range of natural ingredients for your innovative products.
                </p>
              </div>
              <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-green-700 px-5 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-700 hover:text-white">
                View All Products <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {productCards.map(({ title, image }) => (
                <div
                  key={title}
                  className="group overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b263d]/25 to-transparent" />
                  </div>
                  <div className="flex items-center justify-between gap-3 px-4 py-4">
                    <span className="text-base font-bold text-[#0c2c4d]">{title}</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0c2c4d]">
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-slate-50 py-14">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-4xl font-black text-[#0c2c4d]">Featured Products</h2>
                <p className="mt-2 text-slate-600">
                  Popular ingredients trusted by global manufacturers.
                </p>
              </div>
              <button className="hidden sm:inline-flex items-center gap-2 rounded-full text-sm font-semibold text-green-700 transition hover:underline">
                View All Ingredients <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {featuredProducts.map(({ title, specs, cas, image }) => (
                <div
                  key={cas}
                  className="rounded-[1.4rem] border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-lg transition"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#0c2c4d] text-lg">{title}</h3>
                    <p className="text-sm text-slate-600 mt-2">{specs}</p>
                    <p className="text-xs text-slate-500 mt-1">{cas}</p>
                    <button className="mt-4 w-full rounded-full border border-green-700 px-4 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-700 hover:text-white">
                      Inquire Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="max-w-7xl mx-auto px-6 py-16">
              <img src={img} alt="Partner Benefits" className="w-full h-auto" />
        </section>


        <section className="relative mt-4 overflow-hidden bg-[#e9f3eb]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-90"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d311e]/60 via-[#0d311e]/35 to-[#0d311e]/70" />

          <div className="relative max-w-7xl mx-auto px-6 py-10 text-center text-white">
            <p className="text-2xl sm:text-3xl font-medium italic tracking-wide">
              “Partnering for a Healthier, More Sustainable Future.”
            </p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0d311e]">
              Get in Touch with Our Wellgreen Team <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </main>

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