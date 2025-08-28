import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Lightbulb, Target, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ReadingTips() {
  const tips = [
    {
      icon: <BookOpen className="w-6 h-6 text-amber-600" />,
      title: "Dagelijks Lezen",
      description: "Stel een vast leesmoment in, bijvoorbeeld 30 minuten voor het slapen gaan.",
      color: "amber",
    },
    {
      icon: <Target className="w-6 h-6 text-orange-600" />,
      title: "Lees Doelen Stellen",
      description: "Begin met realistische doelen zoals 1 boek per maand en bouw langzaam op.",
      color: "orange",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-600" />,
      title: "Varieer je Genres",
      description: "Ontdek nieuwe werelden door verschillende genres en auteurs te verkennen.",
      color: "yellow",
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Maak Notities",
      description: "Schrijf interessante citaten en gedachten op om je leeservaring te verdiepen.",
      color: "red",
    },
  ]

  const readingStats = [
    { number: "15 min", label: "Dagelijks lezen verhoogt vocabulaire" },
    { number: "68%", label: "Meer empathie door fictie lezen" },
    { number: "6x", label: "Minder kans op dementie" },
    { number: "30%", label: "Beter slapen na lezen" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="w-8 h-8 text-amber-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Leestips & Voordelen</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Ontdek hoe je meer plezier uit lezen kunt halen en waarom het zo goed voor je is
          </p>
        </div>

        {/* Reading Tips */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {tips.map((tip, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <CardHeader className="text-center pb-3">
                <div
                  className={`w-12 h-12 bg-${tip.color}-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  {tip.icon}
                </div>
                <CardTitle className="text-gray-900 text-lg">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reading Benefits Stats */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Wetenschappelijk Bewezen Voordelen van Lezen
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {readingStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-amber-700 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-700 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
            <Link href="/boek-quiz">Test Je Leeskennis</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
