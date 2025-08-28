import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cookie, Settings, BarChart, Target, Shield } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Cookie className="w-8 h-8 text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Cookiebeleid</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Informatie over hoe wij cookies en vergelijkbare technologieën gebruiken
          </p>
          <p className="text-sm text-gray-500 mt-4">Laatst bijgewerkt: 15 januari 2025</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* What are cookies */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Cookie className="w-5 h-5" />
                Wat zijn cookies?
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u een website bezoekt.
                Ze helpen websites om uw voorkeuren te onthouden en uw ervaring te verbeteren.
              </p>
              <p>
                Wij gebruiken cookies om onze website goed te laten functioneren, uw voorkeuren te onthouden, en om te
                begrijpen hoe bezoekers onze website gebruiken.
              </p>
            </CardContent>
          </Card>

          {/* Types of cookies */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Soorten cookies die wij gebruiken
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Essential cookies */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  Essentiële cookies (Altijd actief)
                </h3>
                <p className="text-gray-600 mb-2">
                  Deze cookies zijn noodzakelijk voor het functioneren van de website en kunnen niet worden
                  uitgeschakeld.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Sessie-identificatie</li>
                  <li>Beveiligingscookies</li>
                  <li>Cookie-voorkeuren</li>
                  <li>Taalvoorkeuren</li>
                </ul>
              </div>

              {/* Analytics cookies */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <BarChart className="w-4 h-4 text-blue-600" />
                  Analytische cookies
                </h3>
                <p className="text-gray-600 mb-2">
                  Deze cookies helpen ons begrijpen hoe bezoekers onze website gebruiken.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Google Analytics (geanonimiseerd)</li>
                  <li>Paginaweergaven en bezoekduur</li>
                  <li>Populaire content en zoektermen</li>
                  <li>Technische prestaties</li>
                </ul>
              </div>

              {/* Functional cookies */}
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Settings className="w-4 h-4 text-purple-600" />
                  Functionele cookies
                </h3>
                <p className="text-gray-600 mb-2">
                  Deze cookies verbeteren de functionaliteit en personalisatie van de website.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Leesvoorkeuren en favorieten</li>
                  <li>Formuliergegevens (tijdelijk)</li>
                  <li>Thema en weergave-instellingen</li>
                  <li>Nieuwsbrief voorkeuren</li>
                </ul>
              </div>

              {/* Marketing cookies */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-orange-600" />
                  Marketing cookies
                </h3>
                <p className="text-gray-600 mb-2">
                  Deze cookies worden gebruikt voor gerichte content en advertenties.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Boek aanbevelingen</li>
                  <li>Gepersonaliseerde content</li>
                  <li>Social media integraties</li>
                  <li>Nieuwsbrief targeting</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Third party cookies */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-800">Cookies van derden</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Sommige cookies worden geplaatst door externe diensten die op onze website verschijnen:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Google Analytics</h4>
                  <p className="text-gray-600 text-sm">
                    Voor websiteanalyse en prestatiemetingen. Gegevens worden geanonimiseerd.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Social Media Plugins</h4>
                  <p className="text-gray-600 text-sm">Voor het delen van content op sociale media platforms.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Embedded Content</h4>
                  <p className="text-gray-600 text-sm">
                    Voor het weergeven van video's, kaarten en andere externe content.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Managing cookies */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Cookies beheren
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Via onze website</h3>
                  <p className="text-gray-600 mb-2">
                    U kunt uw cookie-voorkeuren aanpassen via de cookie-banner die verschijnt bij uw eerste bezoek, of
                    door onderaan elke pagina op "Cookie-instellingen" te klikken.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Via uw browser</h3>
                  <p className="text-gray-600 mb-2">U kunt cookies ook beheren via de instellingen van uw browser:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Chrome: Instellingen → Privacy en beveiliging → Cookies</li>
                    <li>Firefox: Instellingen → Privacy en beveiliging</li>
                    <li>Safari: Voorkeuren → Privacy</li>
                    <li>Edge: Instellingen → Cookies en sitegegevens</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="text-amber-800 font-medium mb-1">Let op:</p>
                  <p className="text-amber-700 text-sm">
                    Het uitschakelen van bepaalde cookies kan de functionaliteit van onze website beperken.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Retention periods */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-800">Bewaartermijnen</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-900">Sessie cookies</span>
                  <span className="text-gray-600">Tot einde browsersessie</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-900">Functionele cookies</span>
                  <span className="text-gray-600">1 jaar</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-900">Analytische cookies</span>
                  <span className="text-gray-600">26 maanden</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-900">Marketing cookies</span>
                  <span className="text-gray-600">2 jaar</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-900">Cookie-voorkeuren</span>
                  <span className="text-gray-600">1 jaar</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-800">Wijzigingen in dit beleid</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Wij kunnen dit cookiebeleid van tijd tot tijd bijwerken om wijzigingen in onze praktijken of om andere
                operationele, juridische of regelgevingredenen weer te geven. Wij raden u aan dit beleid regelmatig te
                controleren voor updates.
              </p>
              <p className="text-gray-600 mt-4">
                Voor vragen over dit cookiebeleid kunt u contact met ons opnemen via{" "}
                <a href="mailto:privacy@boekenhuis.online" className="text-amber-600 hover:text-amber-700 underline">
                  privacy@boekenhuis.online
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
