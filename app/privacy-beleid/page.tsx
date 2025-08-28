import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Users, Mail, Calendar } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Privacybeleid</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Hoe wij uw persoonlijke gegevens verzamelen, gebruiken en beschermen
          </p>
          <p className="text-sm text-gray-500 mt-4">Laatst bijgewerkt: 15 januari 2025</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Inleiding
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Boekenhuis Nederland ("wij", "ons", "onze") respecteert uw privacy en is toegewijd aan het beschermen
                van uw persoonlijke gegevens. Dit privacybeleid legt uit hoe wij informatie over u verzamelen, gebruiken
                en delen wanneer u onze website bezoekt of onze diensten gebruikt.
              </p>
              <p>
                Dit beleid is van toepassing op alle informatie die wij verzamelen via onze website, e-mailcommunicatie,
                en andere digitale kanalen.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Welke gegevens verzamelen wij?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Persoonlijke informatie</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Naam en contactgegevens (e-mail, telefoon)</li>
                  <li>Demografische informatie (leeftijd, geslacht, locatie)</li>
                  <li>Leesvoorkeuren en interesses</li>
                  <li>Boekingsgegevens voor consultaties</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Technische informatie</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>IP-adres en browserinformatie</li>
                  <li>Cookies en vergelijkbare technologieën</li>
                  <li>Websitegebruik en navigatiepatronen</li>
                  <li>Apparaat- en verbindingsinformatie</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Hoe gebruiken wij uw gegevens?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Dienstverlening</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Het leveren van onze diensten en beantwoorden van vragen</li>
                    <li>Verwerken van boekingen en consultaties</li>
                    <li>Versturen van nieuwsbrieven en updates</li>
                    <li>Personaliseren van content en aanbevelingen</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Verbetering en analyse</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Analyseren van websitegebruik en prestaties</li>
                    <li>Verbeteren van onze diensten en gebruikerservaring</li>
                    <li>Ontwikkelen van nieuwe functies en content</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Delen van gegevens
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Wij verkopen, verhuren of delen uw persoonlijke gegevens niet met derden, behalve in de volgende
                gevallen:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Met uw expliciete toestemming</li>
                <li>Voor het leveren van gevraagde diensten (bijv. betalingsverwerkers)</li>
                <li>Om te voldoen aan wettelijke verplichtingen</li>
                <li>Om onze rechten en eigendom te beschermen</li>
                <li>In geval van bedrijfsovername of fusie</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Gegevensbeveiliging
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Wij nemen de beveiliging van uw gegevens serieus en implementeren passende technische en
                organisatorische maatregelen:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>SSL-encryptie voor alle datatransmissies</li>
                <li>Regelmatige beveiligingsaudits en updates</li>
                <li>Beperkte toegang tot persoonlijke gegevens</li>
                <li>Veilige opslag en back-upprocedures</li>
                <li>Training van medewerkers in gegevensbescherming</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Uw rechten
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Onder de AVG heeft u de volgende rechten betreffende uw persoonlijke gegevens:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Recht op inzage</li>
                  <li>Recht op rectificatie</li>
                  <li>Recht op verwijdering</li>
                  <li>Recht op beperking van verwerking</li>
                </ul>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Recht op gegevensoverdraagbaarheid</li>
                  <li>Recht van bezwaar</li>
                  <li>Recht om toestemming in te trekken</li>
                  <li>Recht op klacht bij toezichthouder</li>
                </ul>
              </div>
              <p className="text-gray-600 mt-4">
                Om gebruik te maken van deze rechten, kunt u contact met ons opnemen via info@boekenhuis.online
              </p>
            </CardContent>
          </Card>

          {/* Retention */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Bewaartermijnen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Wij bewaren uw persoonlijke gegevens niet langer dan noodzakelijk:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Contactgegevens: tot 2 jaar na laatste contact</li>
                <li>Boekingsgegevens: tot 7 jaar na laatste boeking</li>
                <li>Nieuwsbriefabonnementen: tot uitschrijving</li>
                <li>Websiteanalytics: geanonimiseerd na 26 maanden</li>
                <li>Cookies: volgens cookiebeleid</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Voor vragen over dit privacybeleid of uw persoonlijke gegevens kunt u contact met ons opnemen:
              </p>
              <div className="bg-amber-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900">Boekenhuis Nederland</p>
                <p className="text-gray-600">World Trade Center Amsterdam</p>
                <p className="text-gray-600">Strawinskylaan 77, 1077 XX Amsterdam</p>
                <p className="text-gray-600">E-mail: privacy@boekenhuis.online</p>
                <p className="text-gray-600">Telefoon: +31 20 684 5213</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
