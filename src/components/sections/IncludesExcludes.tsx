import SectionTitle from "../ui/SectionTitle";
import Icon from "../ui/Icon";
import { INCLUDES, EXCLUDES } from "@/data/content";

export default function IncludesExcludes() {
  return (
    <section className="section bg-gray-50">
      <div className="container-x">
        <SectionTitle
          eyebrow="Harga Pakej"
          title={
            <>
              Apa Yang <span className="text-brand-red">Termasuk</span> & Tidak
              Termasuk
            </>
          }
          subtitle="Transparen dari awal — tiada caj tersembunyi."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {/* Includes */}
          <div className="card overflow-hidden">
            <div className="flex items-center gap-2.5 border-b border-gray-200 bg-green-50/50 px-5 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-green-500 text-white">
                <Icon name="check" className="h-3.5 w-3.5" />
              </span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                Harga Termasuk
              </h3>
            </div>
            <ul className="divide-y divide-gray-100">
              {INCLUDES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 px-5 py-2.5 text-xs text-gray-600 sm:text-[13px]"
                >
                  <Icon
                    name="check"
                    className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-500"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Excludes */}
          <div className="card overflow-hidden">
            <div className="flex items-center gap-2.5 border-b border-gray-200 bg-red-50/50 px-5 py-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-red text-white">
                <Icon name="cross" className="h-3.5 w-3.5" />
              </span>
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                Harga Tidak Termasuk
              </h3>
            </div>
            <ul className="divide-y divide-gray-100">
              {EXCLUDES.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 px-5 py-2.5 text-xs text-gray-600 sm:text-[13px]"
                >
                  <Icon
                    name="cross"
                    className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-brand-red"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
