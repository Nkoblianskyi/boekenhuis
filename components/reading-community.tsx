import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar, Trophy, BookMarked } from "lucide-react"
import Link from "next/link"

export function ReadingCommunity() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sluit Je Aan Bij Onze Leesgemeenschap</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deel je passie voor boeken met duizenden andere lezers. Ontdek nieuwe verhalen en maak deel uit van onze
            groeiende gemeenschap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <MessageCircle className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-xl">Discussies</CardTitle>
              <CardDescription>Deel je gedachten over je favoriete boeken</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/artikelen">Doe Mee</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Calendar className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-xl">Boekendagen</CardTitle>
              <CardDescription>Bezoek onze maandelijkse boekenevenementen</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/contact">Reserveer</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Trophy className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-xl">Leesuitdagingen</CardTitle>
              <CardDescription>Test je kennis met onze interactieve quiz</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/boek-quiz">Start Quiz</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <BookMarked className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-xl">Leeslijsten</CardTitle>
              <CardDescription>Ontdek gepersonaliseerde boekenaanbevelingen</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/recensies">Ontdek</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
