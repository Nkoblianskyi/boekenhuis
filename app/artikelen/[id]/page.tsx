import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getArticleById, getRelatedArticles } from "@/data/articles"

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = getArticleById(Number.parseInt(params.id))
  const relatedArticles = getRelatedArticles(Number.parseInt(params.id), 3)

  if (!article) {
    return (
      <div className="min-h-screen">
        <main className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Artikel Niet Gevonden</h1>
            <p className="text-muted-foreground mb-8">Het artikel dat je zoekt bestaat niet of is verwijderd.</p>
            <Button asChild>
              <Link href="/artikelen">Terug naar Artikelen</Link>
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <main>
        {/* Article Header */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/artikelen">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Terug naar Artikelen
              </Link>
            </Button>

            <Badge variant="secondary" className="mb-4">
              {article.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">{article.title}</h1>

            <div className="flex items-center justify-between mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {article.author}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {article.readTime}
                </span>
                <span>{article.publishDate}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Image */}
        <section className="mb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={article.image || "/placeholder.svg?height=400&width=800"}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="text-foreground leading-relaxed space-y-6">
                <p className="text-lg">{article.content.intro}</p>
                {article.content.sections.map((section, index) => (
                  <div key={index} className="space-y-3">
                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">{section.title}</h2>
                    <p className="leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Gerelateerde Artikelen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Card key={relatedArticle.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {relatedArticle.category}
                    </Badge>
                    <CardTitle className="text-lg hover:text-primary transition-colors">
                      <Link href={`/artikelen/${relatedArticle.id}`}>{relatedArticle.title}</Link>
                    </CardTitle>
                    <CardDescription className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {relatedArticle.readTime}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href={`/artikelen/${relatedArticle.id}`}>Lees Artikel</Link>
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
