import Link from "next/link"
import {  Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/favicon.ico" alt="Boekenhuis Nederland Logo" width={40} height={40} />
              <span className="text-xl font-bold text-foreground">Boekenhuis Nederland</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Uw vertrouwde partner in de wereld van Nederlandse en internationale literatuur. Ontdek, lees en deel uw
              passie voor boeken met onze gemeenschap.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Herengracht 123, 1015 BG Amsterdam</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+31 20 684 5213</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@boekenhuis.online</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Snelle Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/over-ons" className="text-muted-foreground hover:text-primary transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/artikelen" className="text-muted-foreground hover:text-primary transition-colors">
                  Artikelen
                </Link>
              </li>
              <li>
                <Link href="/recensies" className="text-muted-foreground hover:text-primary transition-colors">
                  Boekrecensies
                </Link>
              </li>
              <li>
                <Link href="/boek-quiz" className="text-muted-foreground hover:text-primary transition-colors">
                  Boek Quiz
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Juridisch</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-beleid" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Beleid
                </Link>
              </li>
              <li>
                
              </li>
              <li>
                <Link href="/cookie-beleid" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Beleid
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Boekenhuis Nederland. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
