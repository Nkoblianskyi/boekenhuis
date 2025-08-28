"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/favicon.ico" alt="Boekenhuis Nederland Logo" width={40} height={40} />
            <span className="text-xl font-bold text-foreground">Boekenhuis Nederland</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/over-ons" className="text-foreground hover:text-primary transition-colors">
              Over Ons
            </Link>
            <Link href="/artikelen" className="text-foreground hover:text-primary transition-colors">
              Artikelen
            </Link>
            <Link href="/boek-quiz" className="text-foreground hover:text-primary transition-colors">
              Boek Quiz
            </Link>
            <Link href="/recensies" className="text-foreground hover:text-primary transition-colors">
              Recensies
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <Link href="/" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/over-ons" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Over Ons
              </Link>
              <Link href="/artikelen" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Artikelen
              </Link>
              <Link href="/boek-quiz" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Boek Quiz
              </Link>
              <Link href="/recensies" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Recensies
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
