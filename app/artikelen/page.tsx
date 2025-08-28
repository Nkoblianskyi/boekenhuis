"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock, User, Search, Filter, BookOpen, Mic, Lightbulb, TrendingUp } from "lucide-react"
import Link from "next/link"

const featuredArticle = {
  id: 1,
  title: "De Renaissance van Nederlandse Literatuur in 2025",
  excerpt:
    "Een diepgaande analyse van de huidige trends in de Nederlandse literatuurwereld en waarom jonge auteurs weer de spotlight pakken.",
  author: "Emma van der Berg",
  readTime: "8 min",
  publishDate: "15 maart 2025",
  category: "Literaire Trends",
  image: "/article-featured.png",
  featured: true,
}

const articles = [
  {
    id: 2,
    title: "Interview: Marieke Lucas Rijneveld over hun nieuwe roman",
    excerpt: "Een exclusief gesprek over inspiratie, schrijfproces en de toekomst van poëtische proza.",
    author: "Pieter Janssen",
    readTime: "12 min",
    publishDate: "10 maart 2025",
    category: "Interviews",
    image: "/article-interview.png",
  },
  {
    id: 3,
    title: "5 Leestips voor de Perfecte Leeshoek",
    excerpt: "Creëer de ideale omgeving voor uren leesplezier met deze praktische tips en tricks.",
    author: "Sophie de Wit",
    readTime: "6 min",
    publishDate: "8 maart 2025",
    category: "Leestips",
    image: "/article-reading-corner.png",
  },
  {
    id: 4,
    title: "Waarom Klassiekers Nog Steeds Relevant Zijn",
    excerpt: "Een verkenning van tijdloze thema's in klassieke literatuur en hun betekenis voor moderne lezers.",
    author: "Thomas Bakker",
    readTime: "10 min",
    publishDate: "5 maart 2025",
    category: "Literaire Analyse",
    image: "/article-classics.png",
  },
  {
    id: 5,
    title: "De Opkomst van Klimaatfictie in Nederland",
    excerpt:
      "Hoe Nederlandse auteurs klimaatverandering verwerken in hun verhalen en wat dit betekent voor de literatuur.",
    author: "Emma van der Berg",
    readTime: "9 min",
    publishDate: "2 maart 2025",
    category: "Literaire Trends",
    image: "/article-climate-fiction.png",
  },
  {
    id: 6,
    title: "Boekclubs: Tips voor Levendige Discussies",
    excerpt: "Maak van je boekclub een succes met deze bewezen strategieën voor diepgaande gesprekken.",
    author: "Sophie de Wit",
    readTime: "7 min",
    publishDate: "28 februari 2025",
    category: "Leestips",
    image: "/article-book-clubs.png",
  },
  {
    id: 7,
    title: "De Digitale Revolutie in het Uitgeven",
    excerpt: "Hoe e-books en audioboeken de manier waarop we lezen en publiceren voorgoed hebben veranderd.",
    author: "Thomas Bakker",
    readTime: "11 min",
    publishDate: "25 februari 2025",
    category: "Boekenmarkt",
    image: "/article-digital-publishing.png",
  },
  {
    id: 8,
    title: "Gesprek met Uitgeverij Prometheus",
    excerpt: "Een kijkje achter de schermen bij een van Nederlands meest invloedrijke uitgeverijen.",
    author: "Pieter Janssen",
    readTime: "15 min",
    publishDate: "22 februari 2025",
    category: "Interviews",
    image: "/article-publisher-interview.png",
  },
]

const categories = [
  { name: "Alle Artikelen", count: 45, icon: BookOpen },
  { name: "Interviews", count: 12, icon: Mic },
  { name: "Leestips", count: 15, icon: Lightbulb },
  { name: "Literaire Trends", count: 8, icon: TrendingUp },
  { name: "Literaire Analyse", count: 6, icon: BookOpen },
  { name: "Boekenmarkt", count: 4, icon: TrendingUp },
]

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle Artikelen")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "Alle Artikelen" || article.category === selectedCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Literaire Artikelen</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Diepgaande analyses, interviews met auteurs, leestips en de laatste trends in de Nederlandse en
              internationale literatuurwereld.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Zoek artikelen..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => {
                const IconComponent = category.icon
                const isSelected = selectedCategory === category.name
                return (
                  <Button
                    key={index}
                    variant={isSelected ? "default" : "outline"}
                    className={isSelected ? "" : "bg-transparent"}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {category.name}
                  </Button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Uitgelicht Artikel</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredArticle.image || "/placeholder.svg?height=400&width=600"}
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <Badge variant="secondary" className="mb-4">
                    {featuredArticle.category}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors">
                    <Link href={`/artikelen/${featuredArticle.id}`}>{featuredArticle.title}</Link>
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredArticle.author}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredArticle.readTime}
                    </span>
                    <span>{featuredArticle.publishDate}</span>
                  </div>
                  <Button asChild>
                    <Link href={`/artikelen/${featuredArticle.id}`}>Lees Artikel</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              {selectedCategory === "Alle Artikelen"
                ? "Recente Artikelen"
                : `${selectedCategory} (${filteredArticles.length})`}
            </h2>
            {filteredArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Geen artikelen gevonden voor "{searchTerm}" in categorie "{selectedCategory}"
                </p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("Alle Artikelen")
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg?height=240&width=400"}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">
                        {article.category}
                      </Badge>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                        <Link href={`/artikelen/${article.id}`}>{article.title}</Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {article.author}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4">{article.publishDate}</p>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href={`/artikelen/${article.id}`}>Lees Meer</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
