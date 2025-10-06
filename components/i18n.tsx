"use client"

import type React from "react"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Lang = "en" | "hi"

const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string } | null>(null)

const dict: Record<Lang, Record<string, string>> = {
  en: {
    // AI section
    "ai.title": "Intelligence that accelerates your learning",
    "ai.desc": "Let built-in intelligence plan, guide, and evaluate—so you focus on mastering the syllabus.",
    "ai.features.currentAffairs.title": "Current Affairs & Job Alerts",
    "ai.features.currentAffairs.desc":
      "Daily current affairs, exam-wise updates, and government job notifications—always stay informed.",
    "ai.features.askAnyQuestion.title": "Ask Any Question + Simple Tricks",
    "ai.features.askAnyQuestion.desc":
      "Type your doubt and get clear answers with simple tricks and shortcuts for faster solving.",
    "ai.features.youtubeLive.title": "YouTube Live Classes & Doubts",
    "ai.features.youtubeLive.desc":
      "Join live sessions, ask questions in real time, and get solutions from your favorite teachers.",
    "ai.features.voiceScreenshot.title": "Voice + Screenshot Q&A & Sharing",
    "ai.features.voiceScreenshot.desc":
      "Speak your doubt or share a screenshot. Get instant, step-by-step explanations you can share.",
    "ai.features.diagramExplanations.title": "Diagram-based Explanations",
    "ai.features.diagramExplanations.desc": "Understand concepts faster with clean, visual diagrams and labeled steps.",
    "ai.features.quizzesMocks.title": "Quizzes & Mock Tests (All Patterns)",
    "ai.features.quizzesMocks.desc":
      "Attempt topic-wise practice, previous-year patterns, and adaptive mocks to track progress.",

    // Why section
    "why.title": "Why teachers choose Meritranker",
    "why.saveTime.title": "Save Time & Effort",
    "why.saveTime.desc": "Create notes, slides, and tests faster with built‑in automation.",
    "why.aiAccuracy.title": "AI Improves Accuracy",
    "why.aiAccuracy.desc": "Smart suggestions help fix mistakes and enhance clarity.",
    "why.dailyAssistant.title": "Your Daily Assistant",
    "why.dailyAssistant.desc": "No tech team required—an assistant for routine tasks and replies.",
    "why.brandBoost.title": "Boost Your Brand",
    "why.brandBoost.desc": "Get discovered by students and grow your presence online.",
  },
  hi: {
    // AI section
    "ai.title": "ऐसी बुद्धिमत्ता जो आपकी सीखने की रफ्तार बढ़ाए",
    "ai.desc":
      "अंदर‑ही‑अंदर मौजूद इंटेलिजेंस आपकी पढ़ाई की योजना बनाती है, मार्गदर्शन करती है और मूल्यांकन करती है—ताकि आप सिलेबस में महारत पर ध्यान दें।",
    "ai.features.currentAffairs.title": "करंट अफेयर्स और नौकरी अलर्ट",
    "ai.features.currentAffairs.desc": "रोज़ाना करंट अफेयर्स, परीक्षा‑वार अपडेट और सरकारी नौकरी नोटिफिकेशन—हमेशा अपडेट रहें।",
    "ai.features.askAnyQuestion.title": "कोई भी सवाल पूछें + आसान ट्रिक्स",
    "ai.features.askAnyQuestion.desc": "अपना डाउट टाइप करें और आसान ट्रिक्स व शॉर्टकट्स के साथ साफ‑सुथरे जवाब पाएं।",
    "ai.features.youtubeLive.title": "YouTube लाइव क्लास और डाउट्स",
    "ai.features.youtubeLive.desc": "लाइव सेशन में जुड़ें, रियल‑टाइम में सवाल पूछें, और अपने पसंदीदा टीचर्स से समाधान पाएं।",
    "ai.features.voiceScreenshot.title": "वॉइस + स्क्रीनशॉट Q&A और शेयरिंग",
    "ai.features.voiceScreenshot.desc": "अपना डाउट बोलें या स्क्रीनशॉट शेयर करें—तुरंत स्टेप‑बाय‑स्टेप समझाइश पाएं और शेयर करें।",
    "ai.features.diagramExplanations.title": "डायग्राम‑आधारित समझाइश",
    "ai.features.diagramExplanations.desc": "साफ‑सुथरे विजुअल डायग्राम और लेबल्ड स्टेप्स के साथ कॉन्सेप्ट जल्दी समझें।",
    "ai.features.quizzesMocks.title": "क्विज़ और मॉक टेस्ट (सभी पैटर्न)",
    "ai.features.quizzesMocks.desc": "टॉपिक‑वाइज़ प्रैक्टिस, पिछले वर्षों के पैटर्न और एडेप्टिव मॉक से अपनी प्रगति ट्रैक करें।",

    // Why section
    "why.title": "टीचर्स Meritranker क्यों चुनते हैं",
    "why.saveTime.title": "समय और मेहनत की बचत",
    "why.saveTime.desc": "ऑटोमेशन की मदद से नोट्स, स्लाइड्स और टेस्ट जल्दी बनाएं।",
    "why.aiAccuracy.title": "AI से बेहतर शुद्धता",
    "why.aiAccuracy.desc": "स्मार्ट सुझाव गलतियाँ सुधारें और स्पष्टता बढ़ाएं।",
    "why.dailyAssistant.title": "आपका रोज़ का सहायक",
    "why.dailyAssistant.desc": "कोई टेक टीम नहीं चाहिए—रूटीन कामों और रिप्लाई के लिए सहायक।",
    "why.brandBoost.title": "अपना ब्रांड बढ़ाएं",
    "why.brandBoost.desc": "स्टूडेंट्स तक आसानी से पहुँचें और ऑनलाइन उपस्थिति बढ़ाएं।",
  },
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null
    if (stored === "en" || stored === "hi") setLang(stored)
  }, [])

  const value = useMemo(
    () => ({
      lang,
      setLang: (l: Lang) => {
        setLang(l)
        if (typeof window !== "undefined") localStorage.setItem("lang", l)
      },
      t: (key: string) => dict[lang][key] ?? key,
    }),
    [lang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useT() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useT must be used within I18nProvider")
  return ctx.t
}

export function useLang() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useLang must be used within I18nProvider")
  return { lang: ctx.lang, setLang: ctx.setLang }
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLang()
  return (
    <div className="inline-flex items-center rounded-md border border-slate-600 overflow-hidden">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`px-3 py-1 text-sm ${lang === "en" ? "bg-cyan-500 text-white" : "text-slate-200 hover:bg-slate-700/40"}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("hi")}
        className={`px-3 py-1 text-sm ${lang === "hi" ? "bg-cyan-500 text-white" : "text-slate-200 hover:bg-slate-700/40"}`}
        aria-pressed={lang === "hi"}
      >
        हिंदी
      </button>
    </div>
  )
}
