import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, User } from "lucide-react"
import Link from "next/link"

const featuredBooks = [
  {
    id: 1,
    title: "De Avond is Ongemak",
    author: "Marieke Lucas Rijneveld",
    genre: "Literaire Fictie",
    rating: 4.5,
    readTime: "6 uur",
    description: "Een aangrijpend verhaal over verlies, rouw en het vinden van hoop in de donkerste momenten.",
    image: "/dutch-literary-book-cover.png",
  },
  {
    id: 2,
    title: "Turks Fruit",
    author: "Jan Wolkers",
    genre: "Klassiek",
    rating: 4.8,
    readTime: "4 uur",
    description: "Een tijdloze Nederlandse klassieker over liefde, passie en het leven in al zijn facetten.",
    image: "/classic-dutch-novel-cover.png",
  },
  {
    id: 3,
    title: "Het Diner",
    author: "Herman Koch",
    genre: "Thriller",
    rating: 4.3,
    readTime: "5 uur",
    description: "Een psychologische thriller die je aan de rand van je stoel houdt tot de laatste pagina.",
    image: "/dutch-thriller-book-cover.png",
  },
]

export function FeaturedBooks() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Uitgelichte Boeken</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ontdek onze selectie van de beste Nederlandse en internationale boeken, zorgvuldig gekozen door onze
            redactie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <Card key={book.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge variant="secondary" className="mb-2">
                    {book.genre}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                    {book.rating}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{book.title}</CardTitle>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {book.author}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {book.readTime}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{book.description}</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href={`/recensies/${book.id}`}>Lees Recensie</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/recensies">Bekijk Alle Recensies</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
