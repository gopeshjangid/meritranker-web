"use client"

import type React from "react"

import { I18nProvider } from "./i18n"

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return <I18nProvider>{children}</I18nProvider>
}
