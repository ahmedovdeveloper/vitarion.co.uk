import React, { useEffect, useState } from "react";
import { Globe, MessageCircle, Send } from "lucide-react";

import LogoMark from "../assets/vitarion-logo.png";
import { getSiteViews } from "../utils/analytics";

export default function SiteFooter({ columns, bg = "bg-[#081b33]" }) {
  const [totalVisitors, setTotalVisitors] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const loadVisitors = async () => {
      const count = await getSiteViews();
      if (isMounted) {
        setTotalVisitors(count);
      }
    };

    loadVisitors();

    return () => {
      isMounted = false;
    };
  }, []);

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

      <div className="border-t border-slate-200 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Total visitors</p>
            <p className="text-2xl md:text-3xl font-black text-[#0c2c4d]">
              {new Intl.NumberFormat("en-US").format(totalVisitors)}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-[11px] text-slate-400 px-6 py-4 flex flex-col sm:flex-row justify-between gap-2 max-w-7xl mx-auto">
        <p>© 2024 VITARION LTD. All rights reserved.</p>
        <p>VITARION LTD is a company registered in England and Wales.</p>
        <p>Company No. 15609777</p>
      </div>
    </footer>
  );
}