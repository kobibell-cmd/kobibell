import { ReactNode } from "react";
export default function Section({id, title, subtitle, children}:{id?:string; title:string; subtitle?:string; children:ReactNode;}){
  return (
    <section id={id} className="py-16" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
        {subtitle && <p className="mt-2 text-gray-600">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
