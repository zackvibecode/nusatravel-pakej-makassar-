"use client";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";
import Icon from "../ui/Icon";
import { NORMAL_DATES, PREMIER_DATES, WHATSAPP_URL, type DateRow } from "@/data/content";

type DateType = "biasa" | "cuti_sekolah";

function seasonClass(season: string) {
  switch (season) {
    case "Cuti Sekolah":
      return "border-indigo-200 bg-indigo-50 text-indigo-600";
    case "Normal Date":
      return "border-gray-200 bg-gray-50 text-gray-600";
    default:
      return "border-amber-200 bg-amber-50 text-amber-600";
  }
}

function typeBadge(type: DateRow["type"]) {
  if (type === "cuti_sekolah") {
    return {
      label: "Cuti Sekolah",
      cls: "border-indigo-200 bg-indigo-50 text-indigo-600",
    };
  }
  return {
    label: "Date Biasa",
    cls: "border-gray-200 bg-gray-50 text-gray-600",
  };
}

// ---- Desktop table ----
function DateTable({ rows }: { rows: DateRow[] }) {
  if (rows.length === 0) {
    return (
      <div className="card px-5 py-8 text-center">
        <p className="text-sm text-gray-500">Tiada tarikh tersedia buat masa ini.</p>
      </div>
    );
  }
  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-gray-200 text-2xs uppercase tracking-wider text-gray-400">
              <th className="px-5 py-2.5 font-medium">Pergi</th>
              <th className="px-5 py-2.5 font-medium">Pulang</th>
              <th className="px-5 py-2.5 font-medium">Jenis</th>
              <th className="px-5 py-2.5 font-medium">Asal</th>
              <th className="px-5 py-2.5 font-medium">Promo</th>
              <th className="px-5 py-2.5 text-right font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((r) => {
              const badge = typeBadge(r.type);
              return (
                <tr key={`${r.depart}-${r.return}`} className="transition-colors hover:bg-gray-50/50">
                  <td className="whitespace-nowrap px-5 py-3 font-semibold text-brand-charcoal">
                    {r.depart}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-gray-600">
                    {r.return}
                  </td>
                  <td className="px-5 py-3">
                    <span className={`badge ${badge.cls}`}>{badge.label}</span>
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-gray-400 line-through">
                    {r.originalPrice}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-sm font-bold text-brand-red">
                    {r.promoPrice}
                  </td>
                  <td className="px-5 py-3 text-right">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-md bg-[#25D366] px-2.5 py-1 text-2xs font-semibold text-white transition-colors hover:bg-[#1ebe5d]"
                    >
                      <Icon name="whatsapp" className="h-3 w-3" />
                      Semak Seat
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ---- Mobile cards ----
function DateCards({ rows }: { rows: DateRow[] }) {
  if (rows.length === 0) {
    return (
      <div className="card px-5 py-8 text-center">
        <p className="text-sm text-gray-500">Tiada tarikh tersedia buat masa ini.</p>
      </div>
    );
  }
  return (
    <div className="grid gap-2.5">
      {rows.map((r) => {
        const badge = typeBadge(r.type);
        return (
          <div key={`${r.depart}-${r.return}-m`} className="card p-3.5">
            <div className="flex items-center justify-between">
              <span className={`badge ${badge.cls}`}>{badge.label}</span>
              <div className="text-right">
                <p className="text-2xs text-gray-400 line-through">
                  {r.originalPrice}
                </p>
                <p className="text-sm font-bold text-brand-red">
                  {r.promoPrice}
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3 text-xs">
              <div>
                <p className="text-2xs text-gray-400">Pergi</p>
                <p className="font-semibold text-brand-charcoal">{r.depart}</p>
              </div>
              <Icon name="arrow-right" className="h-3.5 w-3.5 text-gray-300" />
              <div className="text-right">
                <p className="text-2xs text-gray-400">Pulang</p>
                <p className="font-semibold text-brand-charcoal">{r.return}</p>
              </div>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-3 w-full !py-2 !text-2xs"
            >
              <Icon name="whatsapp" className="h-3.5 w-3.5" />
              Semak Seat
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default function DepartureDates() {
  const [selectedDateType, setSelectedDateType] = useState<DateType>("biasa");

  const allDates: DateRow[] = [...NORMAL_DATES, ...PREMIER_DATES];
  const filteredDates = allDates.filter((item) => item.type === selectedDateType);

  return (
    <section id="tarikh-pelepasan" className="section bg-gray-50">
      <div className="container-x">
        <SectionTitle
          eyebrow="Jadual Pelepasan"
          title={
            <>
              Tarikh Pelepasan <span className="text-brand-red">2026</span>
            </>
          }
          subtitle="Pilih tarikh yang sesuai dan WhatsApp team Nusatravel untuk semak kekosongan seat terkini."
        />

        {/* Filter tabs */}
        <div className="mx-auto mt-8 flex max-w-md">
          <div className="grid w-full grid-cols-2 overflow-hidden rounded-lg border border-gray-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setSelectedDateType("biasa")}
              className={`rounded-md px-4 py-2.5 text-xs font-semibold transition-all ${
                selectedDateType === "biasa"
                  ? "bg-brand-charcoal text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Date Biasa
            </button>
            <button
              type="button"
              onClick={() => setSelectedDateType("cuti_sekolah")}
              className={`rounded-md px-4 py-2.5 text-xs font-semibold transition-all ${
                selectedDateType === "cuti_sekolah"
                  ? "bg-brand-charcoal text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Date Cuti Sekolah
            </button>
          </div>
        </div>

        {/* Desktop: table */}
        <div className="mt-6 hidden md:block">
          <DateTable rows={filteredDates} />
        </div>

        {/* Mobile: cards */}
        <div className="mt-6 md:hidden">
          <DateCards rows={filteredDates} />
        </div>
      </div>
    </section>
  );
}
