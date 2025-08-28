"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, User, Search, Star, BookOpen } from "lucide-react"
import Link from "next/link"

const reviews = [
  {
    id: 1,
    title: "De Avond is Ongemak",
    author: "Marieke Lucas Rijneveld",
    reviewer: "Emma van der Berg",
    rating: 4.5,
    readTime: "8 min",
    publishDate: "12 maart 2024",
    genre: "Literaire Fictie",
    isbn: "9789025446208",
    publisher: "Prometheus",
    pages: 286,
    excerpt:
      "Een aangrijpend verhaal over verlies, rouw en het vinden van hoop in de donkerste momenten van het leven.",
    review: "Rijneveld toont opnieuw hun meesterschap in het vangen van emoties in prachtige, poëtische taal.",
    image: "/ongemak.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Het Diner",
    author: "Herman Koch",
    reviewer: "Pieter Janssen",
    rating: 4.2,
    readTime: "6 min",
    publishDate: "10 maart 2024",
    genre: "Thriller",
    isbn: "9789041711441",
    publisher: "Ambo Anthos",
    pages: 304,
    excerpt: "Een psychologische thriller die je aan de rand van je stoel houdt tot de laatste pagina.",
    review: "Koch weet spanning op te bouwen zoals weinig anderen. Een meesterwerk van psychologische manipulatie.",
    image: "/diner.jpg",
  },
  {
    id: 3,
    title: "Turks Fruit",
    author: "Jan Wolkers",
    reviewer: "Thomas Bakker",
    rating: 4.8,
    readTime: "10 min",
    publishDate: "8 maart 2024",
    genre: "Klassiek",
    isbn: "9789029538725",
    publisher: "Meulenhoff",
    pages: 208,
    excerpt: "Een tijdloze Nederlandse klassieker over liefde, passie en het leven in al zijn facetten.",
    review: "Wolkers' meesterwerk blijft na al die jaren nog steeds ontroeren en verbazen. Onverminderd krachtig.",
    image: "/fruit.jpg",
  },
  {
    id: 4,
    title: "De Ontdekking van de Hemel",
    author: "Harry Mulisch",
    reviewer: "Emma van der Berg",
    rating: 4.7,
    readTime: "12 min",
    publishDate: "5 maart 2024",
    genre: "Literaire Fictie",
    isbn: "9789023456789",
    publisher: "De Bezige Bij",
    pages: 900,
    excerpt: "Mulisch' magnum opus - een filosofische roman over vriendschap, liefde en het goddelijke.",
    review: "Een monumentaal werk dat de lezer meeneemt op een reis door geschiedenis, filosofie en menselijkheid.",
    image: "/hemel.jpg",
  },
  {
    id: 5,
    title: "Bonita Avenue",
    author: "Peter Buwalda",
    reviewer: "Sophie de Wit",
    rating: 4.1,
    readTime: "9 min",
    publishDate: "2 maart 2024",
    genre: "Literaire Fictie",
    isbn: "9789023456123",
    publisher: "De Bezige Bij",
    pages: 635,
    excerpt: "Een complexe familieroman die de donkere kanten van het moderne leven blootlegt.",
    review: "Buwalda schrijft met precisie over de complexiteit van menselijke relaties en moderne technologie.",
    image: "/avenue.jpg",
  },
  {
    id: 6,
    title: "Oeroeg",
    author: "Hella S. Haasse",
    reviewer: "Thomas Bakker",
    rating: 4.4,
    readTime: "7 min",
    publishDate: "28 februari 2024",
    genre: "Klassiek",
    isbn: "9789021400112",
    publisher: "Querido",
    pages: 128,
    excerpt: "Een indringende novelle over vriendschap en de gevolgen van kolonialisme.",
    review: "Haasse toont in dit korte maar krachtige verhaal de complexiteit van koloniale verhoudingen.",
    image: "/haasse.jpg",
  },
]

const genres = ["Alle Genres", "Literaire Fictie", "Thriller", "Klassiek", "Young Adult", "Fantasy", "Non-fictie"]
const ratings = ["Alle Beoordelingen", "5 sterren", "4+ sterren", "3+ sterren"]

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("Alle Genres")
  const [selectedRating, setSelectedRating] = useState("Alle Beoordelingen")

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === "Alle Genres" || review.genre === selectedGenre
    const matchesRating =
      selectedRating === "Alle Beoordelingen" ||
      (selectedRating === "5 sterren" && review.rating >= 4.8) ||
      (selectedRating === "4+ sterren" && review.rating >= 4.0) ||
      (selectedRating === "3+ sterren" && review.rating >= 3.0)

    return matchesSearch && matchesGenre && matchesRating
  })

  const featuredReview = reviews.find((review) => review.featured)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : i < rating
              ? "fill-yellow-400/50 text-yellow-400"
              : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <div className="min-h-screen">

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Boekrecensies</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Ontdek onze uitgebreide collectie boekrecensies van Nederlandse en internationale literatuur. Van
              klassiekers tot moderne meesterwerken.
            </p>
            <div className="flex justify-center">
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Zoek boeken of auteurs..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
                <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Genre" />
                  </SelectTrigger>
                  <SelectContent>
                    {genres.map((genre) => (
                      <SelectItem key={genre} value={genre}>
                        {genre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedRating} onValueChange={setSelectedRating}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Beoordeling" />
                  </SelectTrigger>
                  <SelectContent>
                    {ratings.map((rating) => (
                      <SelectItem key={rating} value={rating}>
                        {rating}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Review */}
        {featuredReview && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Uitgelichte Recensie</h2>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="lg:flex">
                  <div className="lg:w-1/3">
                    <img
                      src={featuredReview.image || "/placeholder.svg?height=400&width=300"}
                      alt={featuredReview.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-2/3 p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="secondary">{featuredReview.genre}</Badge>
                      <div className="flex items-center gap-1">
                        {renderStars(featuredReview.rating)}
                        <span className="ml-2 text-sm font-medium">{featuredReview.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                      <Link href={`/recensies/${featuredReview.id}`}>{featuredReview.title}</Link>
                    </h3>
                    <p className="text-lg text-muted-foreground mb-4">door {featuredReview.author}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{featuredReview.excerpt}</p>
                    <blockquote className="border-l-4 border-primary pl-4 mb-6 italic text-foreground">
                      "{featuredReview.review}"
                    </blockquote>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredReview.reviewer}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredReview.readTime}
                      </span>
                    </div>
                    <Button asChild>
                      <Link href={`/recensies/${featuredReview.id}`}>Lees Volledige Recensie</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Reviews Grid */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-foreground">Alle Recensies ({filteredReviews.length})</h2>
            </div>

            {filteredReviews.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Geen recensies gevonden</h3>
                <p className="text-muted-foreground">Probeer je zoekopdracht of filters aan te passen.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredReviews
                  .filter((review) => !review.featured)
                  .map((review) => (
                    <Card key={review.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={review.image || "/placeholder.svg?height=300&width=400"}
                          alt={review.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {review.genre}
                          </Badge>
                          <div className="flex items-center gap-1">
                            {renderStars(review.rating)}
                            <span className="ml-1 text-xs font-medium">{review.rating}</span>
                          </div>
                        </div>
                        <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                          <Link href={`/recensies/${review.id}`}>{review.title}</Link>
                        </CardTitle>
                        <CardDescription className="text-sm">door {review.author}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{review.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                          <span className="flex items-center">
                            <User className="h-3 w-3 mr-1" />
                            {review.reviewer}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {review.readTime}
                          </span>
                        </div>
                        <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                          <Link href={`/recensies/${review.id}`}>Lees Recensie</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Wil je een boek laten recenseren?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stuur ons je suggesties voor boeken die we zouden moeten recenseren. We horen graag van je!
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Stuur Suggestie</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
