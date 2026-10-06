import React, { useEffect, useState } from "react";
import { ArrowLeft, BarChart3, Eye } from "lucide-react";
import { Link } from "react-router-dom";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { getAnalyticsSnapshot, PRODUCT_LABELS } from "../utils/analytics";

const formatNumber = (value) => new Intl.NumberFormat("en-US").format(value || 0);

export default function StatisticPage() {
  const [stats, setStats] = useState({ siteViews: 0, productViews: [] });

  useEffect(() => {
    let isMounted = true;

    const loadStats = async () => {
      const snapshot = await getAnalyticsSnapshot();
      if (isMounted) {
        setStats(snapshot);
      }
    };

    loadStats();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f7fafc] text-slate-700 font-sans">
      <SiteHeader active="Products" accent="teal" />

      <main className="max-w-7xl mx-auto px-6 py-10 md:py-14">
        <div className="mb-7">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800">
            <ArrowLeft size={16} /> Back to Products
          </Link>
        </div>

        <section className="mb-8 rounded-[28px] border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-xl bg-teal-100 p-2 text-teal-700">
              <BarChart3 size={22} />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600">Analytics</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0c2c4d]">Site statistics</h1>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">Total site views</p>
              <p className="text-4xl font-black text-[#0c2c4d]">{formatNumber(stats.siteViews)}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 mb-2">Tracked pages</p>
              <p className="text-4xl font-black text-[#0c2c4d]">{stats.productViews.length + 1}</p>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-5">
            <Eye className="text-teal-600" size={20} />
            <h2 className="text-2xl font-extrabold text-[#0c2c4d]">Product views</h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">Product</th>
                  <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">Views</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {stats.productViews.length > 0 ? (
                  stats.productViews.map(({ slug, name, count }) => (
                    <tr key={slug}>
                      <td className="px-4 py-3 text-sm font-medium text-[#0c2c4d]">{name || PRODUCT_LABELS[slug] || slug}</td>
                      <td className="px-4 py-3 text-sm text-slate-700">{formatNumber(count)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="px-4 py-6 text-sm text-slate-500">No product views recorded yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
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
