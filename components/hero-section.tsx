import { Button } from "@/components/ui/button"
import { BookOpen, Users, Star } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-background to-muted py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Welkom bij Boekenhuis Nederland
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Ontdek de rijke wereld van Nederlandse en internationale literatuur. Van klassiekers tot moderne
            bestsellers, wij brengen boekliefhebbers samen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/recensies">Bekijk Recensies</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              <Link href="/boek-quiz">Doe de Boek Quiz</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">500+</h3>
            <p className="text-muted-foreground">Boekrecensies</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">10.000+</h3>
            <p className="text-muted-foreground">Actieve Lezers</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Star className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">4.8/5</h3>
            <p className="text-muted-foreground">Gemiddelde Beoordeling</p>
          </div>
        </div>
      </div>
    </section>
  )
}
