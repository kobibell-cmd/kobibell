import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="font-semibold">קובי בל – משרד עורכי דין</p>
          <p className="mt-2 text-gray-600">הרצל 36, בית גור, אשקלון • סניף מודיעין</p>
        </div>
        <div>
          <p className="font-semibold">יצירת קשר</p>
          <p className="mt-2 text-gray-600">טל׳ 054-5427765 • <Link className="underline" href="https://wa.me/972545427765" target="_blank">וואטסאפ</Link></p>
          <p className="text-gray-600">office@example.com</p>
        </div>
        <div className="text-gray-500">
          <p>© {new Date().getFullYear()} כל הזכויות שמורות.</p>
          <p className="mt-2"><Link className="underline" href="/legal/terms">תקנון אתר</Link> • <Link className="underline" href="/legal/privacy">מדיניות פרטיות</Link> • <Link className="underline" href="/sitemap">מפת אתר</Link></p>
        </div>
      </div>
    </footer>
  );
}
