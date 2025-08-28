"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Cookie, X } from "lucide-react"
import Link from "next/link"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="bg-white/95 backdrop-blur-sm border-amber-200 shadow-lg max-w-4xl mx-auto">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <Cookie className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Wij gebruiken cookies</h3>
              <p className="text-sm text-gray-600 mb-4">
                Wij gebruiken cookies om uw ervaring op onze website te verbeteren, verkeer te analyseren en
                gepersonaliseerde content aan te bieden. Door op "Accepteren" te klikken, stemt u in met ons gebruik van
                cookies. Lees meer in ons{" "}
                <Link href="/privacy-beleid" className="text-amber-600 hover:text-amber-700 underline">
                  privacybeleid
                </Link>{" "}
                en{" "}
                <Link href="/cookie-beleid" className="text-amber-600 hover:text-amber-700 underline">
                  cookiebeleid
                </Link>
                .
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={acceptCookies} className="bg-amber-600 hover:bg-amber-700 text-white">
                  Accepteren
                </Button>
                <Button
                  onClick={declineCookies}
                  variant="outline"
                  className="border-amber-200 text-amber-700 hover:bg-amber-50 bg-transparent"
                >
                  Weigeren
                </Button>
                <Link href="/cookie-beleid">
                  <Button variant="ghost" className="text-amber-700 hover:bg-amber-50">
                    Meer informatie
                  </Button>
                </Link>
              </div>
            </div>
            <Button onClick={declineCookies} variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
