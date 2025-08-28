import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, ArrowLeft, Share2, Star, Calendar } from "lucide-react"
import Link from "next/link"
import { getReviewById, getRelatedReviews } from "@/data/reviews"

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-5 w-5 ${
        i < Math.floor(rating)
          ? "fill-yellow-400 text-yellow-400"
          : i < rating
            ? "fill-yellow-400/50 text-yellow-400"
            : "text-gray-300"
      }`}
    />
  ))
}

export default function ReviewPage({ params }: { params: { id: string } }) {
  const review = getReviewById(Number.parseInt(params.id))
  const relatedReviews = getRelatedReviews(Number.parseInt(params.id), 3)

  if (!review) {
    return (
      <div className="min-h-screen">
        <main className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Recensie Niet Gevonden</h1>
            <p className="text-muted-foreground mb-8">De recensie die je zoekt bestaat niet of is verwijderd.</p>
            <Button asChild>
              <Link href="/recensies">Terug naar Recensies</Link>
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <main>
        {/* Header */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/recensies">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Terug naar Recensies
              </Link>
            </Button>
          </div>
        </section>

        {/* Review Content */}
        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex gap-12">
              {/* Book Cover and Info */}
              <div className="lg:w-1/3 mb-8 lg:mb-0">
                <div className="sticky top-8">
                  <img
                    src={review.image || "/placeholder.svg?height=600&width=400"}
                    alt={review.title}
                    className="w-full max-w-sm mx-auto lg:mx-0 rounded-lg shadow-lg mb-6"
                  />

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{review.title}</CardTitle>
                      <CardDescription>door {review.author}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2">
                        {renderStars(review.rating)}
                        <span className="font-medium">{review.rating}/5</span>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Genre:</span>
                          <Badge variant="secondary">{review.genre}</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Uitgever:</span>
                          <span>{review.publisher}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Pagina's:</span>
                          <span>{review.pages}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Jaar:</span>
                          <span>{review.publicationYear}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Review Content */}
              <div className="lg:w-2/3">
                <div className="mb-8">
                  <Badge variant="secondary" className="mb-4">
                    {review.genre}
                  </Badge>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                    Recensie: {review.title}
                  </h1>
                  <div className="flex items-center gap-2 mb-6">
                    {renderStars(review.rating)}
                    <span className="text-lg font-medium">{review.rating}/5</span>
                  </div>

                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {review.reviewer}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {review.readTime}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {review.publishDate}
                      </span>
                    </div>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Share2 className="h-4 w-4 mr-2" />
                      Delen
                    </Button>
                  </div>
                </div>

                {/* Review Text */}
                <div className="prose prose-lg max-w-none mb-12">
                  <div className="text-foreground leading-relaxed space-y-6">
                    <p className="text-lg">{review.fullReview.intro}</p>
                    {review.fullReview.sections.map((section, index) => (
                      <div key={index} className="space-y-3">
                        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">{section.title}</h2>
                        <p className="leading-relaxed">{section.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pros and Cons */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-green-600">Pluspunten</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {review.pros.map((pro, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">+</span>
                            <span className="text-sm">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg text-red-600">Minpunten</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {review.cons.map((con, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-2">-</span>
                            <span className="text-sm">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Reviews */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Gerelateerde Recensies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedReviews.map((relatedReview) => (
                <Card key={relatedReview.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{relatedReview.genre}</Badge>
                      <div className="flex items-center gap-1">
                        {renderStars(relatedReview.rating)}
                        <span className="ml-1 text-sm">{relatedReview.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg hover:text-primary transition-colors">
                      <Link href={`/recensies/${relatedReview.id}`}>{relatedReview.title}</Link>
                    </CardTitle>
                    <CardDescription>door {relatedReview.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={`/recensies/${relatedReview.id}`}>Lees Recensie</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
