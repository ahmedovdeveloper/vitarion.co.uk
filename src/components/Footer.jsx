import React from "react";
import { Phone, Mail, MapPin, Globe, MessageCircle, Send } from "lucide-react";

import LogoMark from "../assets/vitarion-logo.png";

/**
 * columns: array of { title: string, items: string[] } — rendered as link columns
 * bg: tailwind bg class for the footer, defaults to the standard navy
 */


export default function SiteFooter({ columns, bg = "bg-[#081b33]" }) {
  return (
    <footer className={`bg-white text-slate-300 text-sm`}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
                          <img src={LogoMark} alt="VITARION LTD logo" className="w-full h-full object-contain" />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Global distribution for FMCG, FSMP, general nutrition and food
            supplements.
          </p>
          <div className="flex items-center gap-3 text-slate-300">
            <Globe size={16} />
            <Send size={16} />
            <MessageCircle size={16} />
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title || Math.random()}>
            {col.title && (
              <h4 className="text-white font-semibold mb-3 text-xs tracking-wider">
                {col.title}
              </h4>
            )}
            <ul className="space-y-2 text-xs text-slate-400">
              {col.items.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 text-[11px] text-slate-400 px-6 py-4 flex flex-col sm:flex-row justify-between gap-2 max-w-7xl mx-auto">
        <p>© 2024 VITARION LTD. All rights reserved.</p>
        <p>VITARION LTD is a company registered in England and Wales.</p>
        <p>Company No. 15609777</p>
      </div>
    </footer>
  );
}