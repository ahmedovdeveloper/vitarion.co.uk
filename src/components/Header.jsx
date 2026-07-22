import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import vitarionLogo from "../assets/vitarion-logo.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Business Areas", to: "/business-areas" },
  { label: "Products", to: "/products" },
  { label: "Mimi Organics", to: "/mimi-organics" },
  { label: "Partnerships", to: "/partnerships" },
  { label: "Quality & Compliance", to: "/quality-compliance" },
  { label: "Contact", to: "/contact" },
];

const ACCENT = {
  teal: "text-teal-600 border-teal-500",
  green: "text-green-700 border-green-700",
  navy: "text-[#0c2c4d] border-[#0c2c4d]",
};

/**
 * active: one of the NAV_LINKS labels, e.g. "Home", "Mimi Organics"
 * accent: "teal" | "green" | "navy" — controls the active-link color per page theme
 */
export default function SiteHeader({ active = "Home", accent = "teal" }) {
  return (
    <>
      <div className="bg-[#0c2c4d] text-slate-200 text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="flex items-center gap-1.5">
              <Phone size={14} /> 07770 517344
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Mail size={14} /> info@vitarion.co.uk
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin size={14} /> 71–75 Shelton Street, Covent Garden,
              London WC2H 9JQ, United Kingdom
            </span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <span>🇬🇧</span> United Kingdom <ChevronDown size={14} />
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div>
              <p className="text-xl font-extrabold tracking-tight text-[#0c2c4d] leading-none">
                VITARION LTD
              </p>
              <p className="text-[10px] tracking-[0.25em] text-teal-600 font-bold">
                UNITED KINGDOM
              </p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={
                  link.label === active
                    ? `${ACCENT[accent]} pb-1 border-b-2 font-semibold`
                    : "hover:text-teal-600 transition-colors"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

export function LogoMark({ small }) {
  const size = small ? "w-9 h-9" : "w-11 h-11";
  return (
    <img
      src={vitarionLogo}
      alt="VITARION LTD logo"
      className={`${size} object-contain rounded-lg bg-white/90 p-1 shadow-sm ring-1 ring-slate-200`}
    />
  );
}