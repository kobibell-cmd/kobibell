"use client";
import { useState } from "react";

export default function ContactForm(){
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("כללי");
  const [message, setMessage] = useState("");

  const submit = () => {
    const subject = encodeURIComponent(`פנייה מהאתר – ${topic}`);
    const body = encodeURIComponent(`שם: ${name}\nטלפון: ${phone}\nנושא: ${topic}\n\n${message}`);
    window.location.href = `mailto:office@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
      <label className="block text-sm font-medium">שם מלא</label>
      <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="הקלידו" />
      <label className="block text-sm font-medium mt-4">טלפון</label>
      <input value={phone} onChange={e=>setPhone(e.target.value)} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="05x-xxxxxxx" />
      <label className="block text-sm font-medium mt-4">נושא</label>
      <select value={topic} onChange={e=>setTopic(e.target.value)} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 bg-white">
        <option>כללי</option>
        <option>מקרקעין</option>
        <option>נזיקין</option>
        <option>דיני עבודה</option>
        <option>דיני משפחה</option>
        <option>חוזים</option>
        <option>התחדשות עירונית</option>
        <option>ליקויי בנייה</option>
        <option>פלילי</option>
      </select>
      <label className="block text-sm font-medium mt-4">פרטי הפנייה</label>
      <textarea value={message} onChange={e=>setMessage(e.target.value)} rows={4} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" placeholder="ספרו בקצרה מה הצורך" />
      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <button onClick={submit} className="rounded-2xl bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-black">שלח פנייה במייל</button>
        <a href="tel:0545427765" className="rounded-2xl border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-100">חייגו 054-5427765</a>
        <a href="https://wa.me/972545427765" target="_blank" className="rounded-2xl bg-green-600 text-white px-6 py-3 font-semibold hover:bg-green-700">וואטסאפ מיידי</a>
      </div>
    </div>
  );
}
