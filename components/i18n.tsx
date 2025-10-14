"use client";

import type React from "react";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "en" | "hi";

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
} | null>(null);

const dict: Record<Lang, Record<string, string>> = {
  en: {
    // AI section
    "ai.title": "AI Intelligence That Accelerates Learning",
    "ai.desc":
      "Let AI Intelligence plan, guide, and evaluate your progress - so you focus on smart studying and mastering every subject faster.",
    "ai.features.currentAffairs.title": "Current Affairs & Job Alerts",
    "ai.features.currentAffairs.desc":
      "Stay updated with daily current affairs, government job notifications, and exam-wise updates - all in one personalized AI feed.",
    "ai.features.askAnyQuestion.title": "Ask AI - Get Instant Answers & Tricks",
    "ai.features.askAnyQuestion.desc":
      "Type or speak your question and let AI question answer generator explain it step-by-step with easy tricks and shortcuts for quick solving.",
    "ai.features.youtubeLive.title": "YouTube Live Classes & Doubt Sessions",
    "ai.features.youtubeLive.desc":
      "Attend live classes, ask doubts in real time, and get guided learning from your favorite educators.",
    "ai.features.voiceScreenshot.title": "Voice + Screenshot Q&A & Sharing",
    "ai.features.voiceScreenshot.desc":
      "Ask by voice or share a screenshot - let AI answer your question instantly with clear explanations you can save or share.",
    "ai.features.diagramExplanations.title": "Visual & Diagram-Based Learning",
    "ai.features.diagramExplanations.desc":
      "Understand tough topics with AI-generated diagrams and visual explanations - perfect for self-study and quick revisions",
    "ai.features.quizzesMocks.title":
      "Quizzes & Mock Tests (All Exam Patterns)",
    "ai.features.quizzesMocks.desc":
      "Take adaptive tests, practice previous year papers, and analyze results with AI-powered feedback to track real progress.",

    // Why section
    "why.title": "Why Teachers Choose Meritranker",
    "why.saveTime.title": "Save Time & Effort",
    "why.saveTime.desc":
      "Automate note creation, slide building, and mock generation with AI tools for teaching.",
    "why.aiAccuracy.title": "Improve Accuracy with AI",
    "why.aiAccuracy.desc":
      "Smart suggestions refine your content and correct errors in real time.",
    "why.dailyAssistant.title": "Your Daily Teaching Assistant",
    "why.dailyAssistant.desc":
      "No technical skills required — let your AI assistant handle daily communication and responses.",
    "why.brandBoost.title": "Boost Your Brand",
    "why.brandBoost.desc":
      "Grow your personal brand, get discovered by students, and teach online to earn money through Meritranker.",
  },
  hi: {
    // AI section
    "ai.title": "सीखने को तेज़ करने वाली एआई इंटेलिजेंस",
    "ai.desc":
      "एआई इंटेलिजेंस को आपकी पढ़ाई की योजना बनाने, मार्गदर्शन करने और प्रगति का मूल्यांकन करने दें — ताकि आप स्मार्ट स्टडी पर ध्यान दें और हर विषय को तेजी से मास्टर करें।",
    "ai.features.currentAffairs.title": "करेंट अफेयर्स और नौकरी अलर्ट्स",
    "ai.features.currentAffairs.desc":
      "दैनिक करंट अफेयर्स, सरकारी नौकरी सूचनाएं, और परीक्षा-वार अपडेट्स से हमेशा अपडेट रहें — सब कुछ एक ही पर्सनलाइज़्ड एआई फ़ीड में।",
    "ai.features.askAnyQuestion.title":
      "एआई से पूछें — तुरंत जवाब और ट्रिक्स पाएं",
    "ai.features.askAnyQuestion.desc":
      "अपना सवाल टाइप करें या बोलें, और एआई प्रश्न-उत्तर जेनरेटर उसे आसान ट्रिक्स और शॉर्टकट्स के साथ स्टेप-बाय-स्टेप समझाएगा।",
    "ai.features.youtubeLive.title": "YouTube लाइव क्लासेस और डाउट सेशन्स",
    "ai.features.youtubeLive.desc":
      "लाइव क्लासेस में शामिल हों, रियल-टाइम में अपने सवाल पूछें, और अपने पसंदीदा शिक्षकों से गाइडेड लर्निंग पाएं।",
    "ai.features.voiceScreenshot.title":
      "वॉइस + स्क्रीनशॉट प्रश्न-उत्तर और शेयरिंग",
    "ai.features.voiceScreenshot.desc":
      "आवाज़ से पूछें या स्क्रीनशॉट शेयर करें — एआई तुरंत स्पष्ट व्याख्या के साथ जवाब देगा, जिसे आप सेव या शेयर कर सकते हैं।",
    "ai.features.diagramExplanations.title": "दृश्य और डायग्राम आधारित लर्निंग",
    "ai.features.diagramExplanations.desc":
      "कठिन विषयों को एआई द्वारा बनाए गए डायग्राम और विज़ुअल एक्सप्लनेशन से आसानी से समझें — सेल्फ-स्टडी और क्विक रिविज़न के लिए परफेक्ट।",
    "ai.features.quizzesMocks.title":
      "क्विज़ और मॉक टेस्ट (सभी परीक्षा पैटर्न)",
    "ai.features.quizzesMocks.desc":
      "एडैप्टिव टेस्ट दें, पिछले वर्षों के प्रश्नपत्र हल करें, और एआई-संचालित फीडबैक से अपनी असली प्रगति का विश्लेषण करें।",

    // Why section
    "why.title": "शिक्षक Meritranker क्यों चुनते हैं",
    "why.saveTime.title": "समय और मेहनत बचाएं",
    "why.saveTime.desc":
      "एआई टूल्स की मदद से नोट्स तैयार करना, स्लाइड बनाना और मॉक टेस्ट जनरेट करना ऑटोमेट करें।",
    "why.aiAccuracy.title": "एआई से बढ़ाएं सटीकता",
    "why.aiAccuracy.desc":
      "स्मार्ट सुझावों के साथ अपने कंटेंट को बेहतर बनाएं और रियल टाइम में त्रुटियों को सुधारें।",
    "why.dailyAssistant.title": "आपका दैनिक शिक्षण सहायक",
    "why.dailyAssistant.desc":
      "कोई तकनीकी कौशल की आवश्यकता नहीं — आपका एआई असिस्टेंट दैनिक संचार और उत्तर देने का काम संभालेगा।",
    "why.brandBoost.title": "अपना ब्रांड बढ़ाएं",
    "why.brandBoost.desc":
      "अपना पर्सनल ब्रांड विकसित करें, छात्रों तक अपनी पहचान बनाएं, और Meritranker के ज़रिए ऑनलाइन पढ़ाकर कमाई करें।",
  },
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (localStorage.getItem("lang") as Lang | null)
        : null;
    if (stored === "en" || stored === "hi") setLang(stored);
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang: (l: Lang) => {
        setLang(l);
        if (typeof window !== "undefined") localStorage.setItem("lang", l);
      },
      t: (key: string) => dict[lang][key] ?? key,
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useT must be used within I18nProvider");
  return ctx.t;
}

export function useLang() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLang must be used within I18nProvider");
  return { lang: ctx.lang, setLang: ctx.setLang };
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center rounded-md border border-slate-600 overflow-hidden">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-3 py-1 text-sm ${
          lang === "en"
            ? "bg-cyan-500 text-white"
            : "text-slate-200 hover:bg-slate-700/40"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("hi")}
        className={`px-3 py-1 text-sm ${
          lang === "hi"
            ? "bg-cyan-500 text-white"
            : "text-slate-200 hover:bg-slate-700/40"
        }`}
        aria-pressed={lang === "hi"}
      >
        हिंदी
      </button>
    </div>
  );
}
