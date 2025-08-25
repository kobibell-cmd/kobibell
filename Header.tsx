"use client";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "ראשי" },
  { label: "גירושין", children: [
    { href: "/areas/divorce/settlement", label: "הסכם גירושין" },
    { href: "/areas/divorce/custody", label: "משמורת" },
    { href: "/areas/divorce/prenup", label: "הסכם ממון" },
    { href: "/areas/divorce/mediation", label: "גישור גירושין" },
    { href: "/areas/divorce/with-children", label: "גירושין עם ילדים" },
    { href: "/areas/divorce/rabbinate", label: "הליך גירושין ברבנות" },
    { href: "/areas/divorce/child-support", label: "מזונות ומדור" },
    { href: "/areas/divorce/property-split", label: "חלוקת רכוש בגירושין" },
    { href: "/areas/divorce/marital-property", label: "יחסי ממון ותביעות" },
  ]},
  { label: "דיני משפחה", children: [
    { href: "/areas/family/dissolution", label: "התרת נישואין" },
    { href: "/areas/family/prenup-before", label: "הסכם ממון לפני נישואין" },
    { href: "/areas/family/disputes", label: "סכסוכים משפחתיים" },
    { href: "/areas/family/common-law", label: "הסכם ידועים בציבור" },
  ]},
  { label: "צוואות וירושות", children: [
    { href: "/areas/wills/inheritance-lawyer", label: "עורך דין ירושה" },
    { href: "/areas/wills/will-lawyer", label: "עורך דין צוואה" },
    { href: "/areas/wills/probate-request", label: "בקשה לצו ירושה" },
    { href: "/areas/wills/write-will", label: "עריכת צוואה" },
    { href: "/areas/wills/objection", label: "התנגדות לצוואה" },
    { href: "/areas/wills/probate-order", label: "צו קיום צוואה" },
    { href: "/areas/wills/mutual-will", label: "צוואה הדדית" },
  ]},
  { label: "תחומי המשרד", children: [
    { href: "/areas/real-estate", label: "נדל"ן ומקרקעין" },
    { href: "/areas/labor", label: "דיני עבודה" },
    { href: "/areas/torts", label: "נזיקין" },
    { href: "/areas/contracts", label: "חוזים ומשפט אזרחי" },
    { href: "/areas/urban-renewal", label: "התחדשות עירונית" },
    { href: "/areas/defects", label: "ליקויי בנייה" },
    { href: "/areas/civil", label: "תביעות אזרחיות" },
  ]},
  { label: "מחלקה פלילית", children: [
    { href: "/criminal/police-interrogation", label: "חקירה באזהרה" },
    { href: "/criminal/arrests-bail", label: "מעצרים ושחרורים" },
    { href: "/criminal/record-expungement", label: "מחיקת רישום פלילי" },
    { href: "/criminal/white-collar", label: "עבירות צווארון לבן" },
  ]},
  { label: "מחלקת דיני משפחה – קימברלי", children: [
    { href: "/kimberly", label: "אודות קימברלי" },
    { href: "/kimberly/family-services", label: "שירותי משפחה" },
    { href: "/kimberly/articles", label: "מאמרים" },
  ]},
  { label: "אודות", children: [
    { href: "/about", label: "על המשרד" },
    { href: "/team", label: "צוות המשרד" },
    { href: "/testimonials", label: "המלצות" },
  ]},
  { label: "מן התקשורת", children: [
    { href: "/media/articles", label: "כתבות" },
    { href: "/media/video", label: "וידאו" },
    { href: "/media/radio", label: "רדיו" },
    { href: "/media/podcasts", label: "פודקאסטים" },
  ]},
  { href: "/contact", label: "צור קשר" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200" dir="rtl">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="w-10 h-10 rounded-2xl bg-gray-900 text-white grid place-items-center font-semibold">KB</Link>
          <div className="leading-tight">
            <p className="font-bold">קובי בל – משרד עורכי דין</p>
            <p className="text-xs text-gray-500">אזרחי • נדל"ן • נזיקין • עבודה • משפחה • פלילי</p>
          </div>
        </div>

        <button onClick={()=>setOpen(!open)} className="md:hidden rounded-xl border px-3 py-1 text-sm">תפריט</button>

        <ul className="hidden md:flex items-center gap-5 text-sm">
          {nav.map((item, idx) => (
            <li key={idx} className="relative group">
              {"children" in item ? (
                <>
                  <span className="cursor-default">{item.label}</span>
                  <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border rounded-2xl shadow-lg p-3 min-w-56">
                    {(item.children||[]).map((c,i)=>(
                      <Link key={i} className="block whitespace-nowrap px-3 py-1.5 rounded-lg hover:bg-gray-100" href={c.href}>{c.label}</Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={item.href!}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="md:hidden border-t" dir="rtl">
          <div className="mx-auto max-w-7xl px-4 py-3 text-sm grid gap-2">
            {nav.map((item, idx) => (
              <div key={idx}>
                {"children" in item ? (
                  <details>
                    <summary className="cursor-pointer py-1">{item.label}</summary>
                    <div className="pl-3 pr-1 py-1 grid">
                      {item.children!.map((c, i)=>(<Link key={i} className="py-1" href={c.href}>{c.label}</Link>))}
                    </div>
                  </details>
                ) : (
                  <Link href={item.href!}>{item.label}</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
