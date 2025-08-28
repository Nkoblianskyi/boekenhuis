import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, ArrowLeft, Share2, Star, Calendar } from "lucide-react"
import Link from "next/link"

// This would normally come from a database or CMS
const getReview = (id: string) => {
  const reviews = {
    "1": {
      id: 1,
      title: "De Avond is Ongemak",
      author: "Marieke Lucas Rijneveld",
      reviewer: "Emma van der Berg",
      rating: 4.5,
      readTime: "8 min",
      publishDate: "12 maart 2025",
      genre: "Literaire Fictie",
      isbn: "9789025446208",
      publisher: "Prometheus",
      pages: 286,
      publicationYear: 2018,
      image: "/ongemak.jpg",
      excerpt:
        "Een aangrijpend verhaal over verlies, rouw en het vinden van hoop in de donkerste momenten van het leven.",
      fullReview: {
        intro:
          'Marieke Lucas Rijneveld heeft met "De Avond is Ongemak" een meesterwerk geschreven dat de lezer diep raakt. Dit debuut, dat de International Booker Prize won, is een aangrijpende verkenning van rouw, schuld en de complexiteit van familiebanden.',
        sections: [
          {
            title: "Verhaal en Thema's",
            content:
              "Het verhaal volgt Jas, een tiener die worstelt met de dood van hun oudere broer Matthies in een tragisch ongeval. Rijneveld toont meesterlijk hoe rouw een familie kan verscheuren en hoe elk gezinslid op hun eigen manier probeert om te gaan met het verlies.",
          },
          {
            title: "Schrijfstijl",
            content:
              "Rijneveld's proza is poëtisch en rauw tegelijk. Hun gebruik van taal is vernieuwend - ze creëren nieuwe woorden en beelden die de emotionele toestand van de hoofdpersoon perfect weergeven. De schrijfstijl is soms uitdagend, maar altijd belonend voor de aandachtige lezer.",
          },
          {
            title: "Personages",
            content:
              "Jas is een complex en geloofwaardig personage. Hun worsteling met identiteit, seksualiteit en rouw wordt met grote empathie en inzicht beschreven. Ook de andere familieleden zijn genuanceerd uitgewerkt, elk met hun eigen manier van rouwen.",
          },
          {
            title: "Conclusie",
            content:
              "Dit is een boek dat lang nawerkt. Rijneveld heeft een verhaal geschreven dat universeel is in zijn thema's, maar uniek in zijn uitvoering. Een aanrader voor iedereen die houdt van literaire fictie die niet bang is om moeilijke onderwerpen aan te pakken.",
          },
        ],
      },
      pros: [
        "Prachtige, poëtische schrijfstijl",
        "Diepgaande karakterontwikkeling",
        "Authentieke weergave van rouw",
        "Vernieuwend gebruik van taal",
      ],
      cons: ["Soms uitdagende schrijfstijl", "Zwaar onderwerp", "Niet voor elke lezer toegankelijk"],
    },
    "2": {
      id: 2,
      title: "Het Diner",
      author: "Herman Koch",
      reviewer: "Lisa de Jong",
      rating: 4.2,
      readTime: "10 min",
      publishDate: "8 maart 2025",
      genre: "Literaire Thriller",
      isbn: "9789041411358",
      publisher: "Anthos",
      pages: 304,
      publicationYear: 2009,
      image: "/diner.jpg",
      excerpt:
        "Een psychologische thriller die de grenzen van moraal en familie verkent tijdens een ogenschijnlijk gewoon diner.",
      fullReview: {
        intro:
          'Herman Koch\'s "Het Diner" is een meesterlijk geconstrueerde psychologische thriller die de lezer van begin tot eind in zijn greep houdt. Het verhaal ontvouwt zich tijdens een diner tussen twee echtparen, waarbij langzaam duidelijk wordt wat er werkelijk op het spel staat.',
        sections: [
          {
            title: "Plot en Spanning",
            content:
              "Koch bouwt de spanning meesterlijk op. Wat begint als een gewoon diner tussen familieleden, ontwikkelt zich tot een intense confrontatie over moraal, verantwoordelijkheid en de grenzen van ouderliefde.",
          },
          {
            title: "Karakterisering",
            content:
              "De hoofdpersoon Paul is een fascinerende en tegelijkertijd verontrustende verteller. Koch toont zijn talent voor het creëren van complexe, gelaagde personages die de lezer zowel aantrekken als afstoten.",
          },
          {
            title: "Thema's",
            content:
              "Het boek verkent thema's als klassenstrijd, opvoeding, en de vraag hoe ver ouders zullen gaan om hun kinderen te beschermen. Deze universele thema's maken het verhaal zeer herkenbaar.",
          },
          {
            title: "Schrijfstijl",
            content:
              "Koch's schrijfstijl is helder en toegankelijk, maar tegelijkertijd gelaagd. Hij weet de lezer te misleiden zonder ooit echt te liegen, wat het verhaal extra kracht geeft.",
          },
        ],
      },
      pros: [
        "Meesterlijke spanningsopbouw",
        "Complexe, realistische personages",
        "Relevante maatschappelijke thema's",
        "Verrassende wendingen",
      ],
      cons: ["Soms ongemakkelijke personages", "Moreel ambigue verhaal", "Kan confronterend zijn"],
    },
    "3": {
      id: 3,
      title: "De Ontdekking van de Hemel",
      author: "Harry Mulisch",
      reviewer: "Dr. Sarah Vermeer",
      rating: 4.8,
      readTime: "15 min",
      publishDate: "1 maart 2025",
      genre: "Literaire Fictie",
      isbn: "9789023456789",
      publisher: "De Bezige Bij",
      pages: 896,
      publicationYear: 1992,
      image: "/hemel.jpg",
      excerpt:
        "Mulisch's magnum opus - een filosofische roman over vriendschap, liefde en de zoektocht naar de zin van het bestaan.",
      fullReview: {
        intro:
          'Harry Mulisch\'s "De Ontdekking van de Hemel" wordt terecht beschouwd als een van de belangrijkste Nederlandse romans van de 20e eeuw. Dit monumentale werk combineert filosofie, geschiedenis en mythologie in een verhaal dat de lezer lang bijblijft.',
        sections: [
          {
            title: "Verhaal en Structuur",
            content:
              "Het verhaal volgt de vriendschap tussen Max Delius en Onno Quist, en hun gedeelde liefde voor Ada. Mulisch weeft hun persoonlijke verhaal samen met grote historische gebeurtenissen en filosofische vraagstukken.",
          },
          {
            title: "Filosofische Diepgang",
            content:
              "Mulisch verkent fundamentele vragen over het bestaan, de relatie tussen hemel en aarde, en de rol van het toeval in ons leven. Het boek is doordrenkt van filosofische en religieuze symboliek.",
          },
          {
            title: "Literaire Kwaliteit",
            content:
              "De schrijfstijl is rijk en gelaagd, vol van literaire verwijzingen en woordspelingen. Mulisch toont zijn eruditie zonder pedant te worden, wat het boek toegankelijk houdt ondanks de complexiteit.",
          },
          {
            title: "Historische Context",
            content:
              "Het boek speelt zich af tegen de achtergrond van belangrijke historische gebeurtenissen, van de Tweede Wereldoorlog tot de jaren zestig. Mulisch gebruikt deze context om universele thema's te verkennen.",
          },
        ],
      },
      pros: [
        "Monumentaal en ambitieus werk",
        "Rijke filosofische inhoud",
        "Meesterlijke schrijfstijl",
        "Complexe maar boeiende plot",
      ],
      cons: ["Zeer lang en complex", "Vereist concentratie", "Niet voor casual lezers"],
    },
    "4": {
      id: 4,
      title: "Turks Fruit",
      author: "Jan Wolkers",
      reviewer: "Tom Bakker",
      rating: 4.6,
      readTime: "7 min",
      publishDate: "22 februari 2025",
      genre: "Klassiek",
      isbn: "9789029567890",
      publisher: "Meulenhoff",
      pages: 208,
      publicationYear: 1969,
      image: "/fruit.jpg",
      excerpt: "Wolkers' klassieke liefdesverhaal - rauw, eerlijk en tijdloos in zijn emotionele kracht.",
      fullReview: {
        intro:
          'Jan Wolkers\' "Turks Fruit" is een van de meest gelezen Nederlandse romans aller tijden. Dit intense liefdesverhaal heeft generaties lezers geraakt met zijn rauwe eerlijkheid en emotionele kracht.',
        sections: [
          {
            title: "Het Verhaal",
            content:
              "Het boek vertelt het verhaal van de turbulente relatie tussen de beeldhouwer Erik en Olga. Wolkers toont zowel de passie als de pijn van hun liefde, zonder iets te verhullen of te romantiseren.",
          },
          {
            title: "Schrijfstijl",
            content:
              "Wolkers' stijl is direct en ongepolijst, wat perfect past bij het verhaal. Hij schrijft zonder omhaal over seksualiteit en emoties, wat in 1969 revolutionair was.",
          },
          {
            title: "Karakters",
            content:
              "Erik en Olga zijn geen perfecte personages, maar juist daardoor zo herkenbaar. Hun gebreken en kwaliteiten maken hen tot echte mensen van vlees en bloed.",
          },
          {
            title: "Culturele Impact",
            content:
              "Het boek heeft de Nederlandse literatuur en cultuur diepgaand beïnvloed. Het opende deuren voor een meer open behandeling van seksualiteit en emoties in de literatuur.",
          },
        ],
      },
      pros: [
        "Tijdloze emotionele kracht",
        "Eerlijke, directe schrijfstijl",
        "Authentieke personages",
        "Cultureel belangrijk werk",
      ],
      cons: ["Kan confronterend zijn", "Gedateerde elementen", "Niet voor gevoelige lezers"],
    },
    "5": {
      id: 5,
      title: "Bonita Avenue",
      author: "Peter Buwalda",
      reviewer: "Mark Jansen",
      rating: 4.1,
      readTime: "12 min",
      publishDate: "15 februari 2025",
      genre: "Literaire Fictie",
      isbn: "9789023456123",
      publisher: "De Bezige Bij",
      pages: 640,
      publicationYear: 2010,
      image: "/avenue.jpg",
      excerpt: "Een ambitieuze familieroman over geheimen, verraad en de donkere kanten van het moderne leven.",
      fullReview: {
        intro:
          'Peter Buwalda\'s debuutroman "Bonita Avenue" is een ambitieus en complex werk dat de donkere onderstroom van een ogenschijnlijk perfect gezin blootlegt. Het boek combineert familiedrama met maatschappijkritiek in een verhaal dat de lezer niet loslaat.',
        sections: [
          {
            title: "Plot en Structuur",
            content:
              "Het verhaal draait om de familie Sigerius en de geheimen die hun perfecte façade bedreigen. Buwalda vertelt het verhaal vanuit meerdere perspectieven, wat de complexiteit en rijkdom van het verhaal vergroot.",
          },
          {
            title: "Thema's",
            content:
              "Het boek verkent thema's als familie, verraad, seksualiteit en de impact van internet op ons leven. Buwalda toont hoe moderne technologie zowel verbindt als isoleert.",
          },
          {
            title: "Karakterontwikkeling",
            content:
              "De personages zijn complex en gelaagd, elk met hun eigen motivaties en geheimen. Buwalda slaagt erin om empathie te wekken voor zelfs de meest gebrekkige karakters.",
          },
          {
            title: "Schrijfstijl",
            content:
              "Buwalda's stijl is energiek en modern, met een scherp oog voor detail. Hij weet humor en ernst te combineren op een manier die het verhaal toegankelijk houdt ondanks de zware thema's.",
          },
        ],
      },
      pros: [
        "Complexe, meeslepende plot",
        "Actuele thema's",
        "Sterke karakterontwikkeling",
        "Moderne, toegankelijke stijl",
      ],
      cons: ["Soms te complex", "Lange opbouw", "Confronterende inhoud"],
    },
    "6": {
      id: 6,
      title: "De Helaasheid der Dingen",
      author: "Dimitri Verhulst",
      reviewer: "Anna Visser",
      rating: 4.3,
      readTime: "9 min",
      publishDate: "8 februari 2025",
      genre: "Autobiografisch",
      isbn: "9789025434567",
      publisher: "Contact",
      pages: 224,
      publicationYear: 2006,
      image: "/haasse.jpg",
      excerpt: "Verhulst's autobiografische roman over opgroeien in een disfunctioneel gezin - donker maar vol humor.",
      fullReview: {
        intro:
          'Dimitri Verhulst\'s "De Helaasheid der Dingen" is een autobiografische roman die het verhaal vertelt van een jongen die opgroeit in een disfunctioneel gezin in België. Ondanks de zware thematiek weet Verhulst humor en warmte in zijn verhaal te weven.',
        sections: [
          {
            title: "Autobiografische Kracht",
            content:
              "De kracht van het boek ligt in zijn authenticiteit. Verhulst schrijft vanuit eigen ervaring over armoede, alcoholisme en familietrauma, wat het verhaal een rauwe eerlijkheid geeft.",
          },
          {
            title: "Humor in Duisternis",
            content:
              "Ondanks de donkere onderwerpen weet Verhulst humor te vinden in de meest onwaarschijnlijke situaties. Deze humor maakt het verhaal draaglijk en toont de veerkracht van de menselijke geest.",
          },
          {
            title: "Taal en Stijl",
            content:
              "Verhulst schrijft in een directe, ongepolijste stijl die perfect past bij zijn verhaal. Hij gebruikt Vlaamse uitdrukkingen en dialect om de authenticiteit te vergroten.",
          },
          {
            title: "Universele Thema's",
            content:
              "Hoewel het verhaal specifiek is, raken de thema's van familie, overleven en volwassen worden universele snaren. Het boek spreekt lezers aan die vergelijkbare ervaringen hebben gehad.",
          },
        ],
      },
      pros: ["Authentiek en eerlijk", "Humor ondanks zware thema's", "Krachtige schrijfstijl", "Universeel herkenbaar"],
      cons: ["Confronterende inhoud", "Dialectgebruik", "Emotioneel zwaar"],
    },
  }

  return reviews[id as keyof typeof reviews] || null
}

const relatedReviews = [
  {
    id: 4,
    title: "De Ontdekking van de Hemel",
    author: "Harry Mulisch",
    genre: "Literaire Fictie",
    rating: 4.7,
  },
  {
    id: 5,
    title: "Bonita Avenue",
    author: "Peter Buwalda",
    genre: "Literaire Fictie",
    rating: 4.1,
  },
  {
    id: 3,
    title: "Turks Fruit",
    author: "Jan Wolkers",
    genre: "Klassiek",
    rating: 4.8,
  },
]

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
  const review = getReview(params.id)

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
