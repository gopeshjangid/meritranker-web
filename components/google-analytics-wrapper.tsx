"use client"

import { GoogleAnalytics } from "nextjs-google-analytics"

export function GoogleAnalyticsWrapper({ gaMeasurementId }: { gaMeasurementId: string }) {
    return <GoogleAnalytics trackPageViews gaMeasurementId={gaMeasurementId} />
}
