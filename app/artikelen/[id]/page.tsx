import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"

// This would normally come from a database or CMS
const getArticle = (id: string) => {
  const articles = {
    "1": {
      id: 1,
      title: "De Renaissance van Nederlandse Literatuur in 2025",
      content: {
        intro:
          "De Nederlandse literatuurwereld beleeft momenteel een ware renaissance. Na jaren waarin internationale bestsellers de boekhandels domineerden, zien we nu een opmerkelijke terugkeer naar Nederlandse verhalen en stemmen.",
        sections: [
          {
            title: "Jonge Auteurs in de Spotlight",
            content:
              "Auteurs zoals Marieke Lucas Rijneveld, Jaap Robben en Lize Spit hebben de weg geëffend voor een nieuwe generatie Nederlandse schrijvers. Hun succes heeft uitgeverijen aangemoedigd om meer te investeren in lokaal talent.",
          },
          {
            title: "Thema's die Resoneren",
            content:
              "De huidige Nederlandse literatuur kenmerkt zich door een focus op authentieke, persoonlijke verhalen. Thema's zoals identiteit, familie, en de Nederlandse geschiedenis worden op vernieuwende wijzen verkend.",
          },
          {
            title: "De Rol van Sociale Media",
            content:
              "Platforms zoals Instagram en TikTok hebben een cruciale rol gespeeld in het promoten van Nederlandse boeken. BookTok heeft vooral jonge lezers weer enthousiast gemaakt voor literatuur.",
          },
          {
            title: "Vooruitblik",
            content:
              "Met de groeiende interesse in Nederlandse verhalen en de steun van zowel uitgeverijen als lezers, ziet de toekomst er rooskleurig uit voor onze literatuur. We kunnen nog veel moois verwachten in de komende jaren.",
          },
        ],
      },
      author: "Emma van der Berg",
      readTime: "8 min",
      publishDate: "15 maart 2025",
      category: "Literaire Trends",
      image: "/article-featured.png",
    },
    "2": {
      id: 2,
      title: "Interview: Marieke Lucas Rijneveld over hun nieuwe roman",
      content: {
        intro:
          "In een exclusief interview spreekt Marieke Lucas Rijneveld over hun nieuwste werk, de uitdagingen van het schrijven na internationale erkenning, en hun visie op de toekomst van Nederlandse literatuur.",
        sections: [
          {
            title: "Over het nieuwe boek",
            content:
              '"Dit boek is persoonlijker dan alles wat ik eerder heb geschreven," vertelt Rijneveld. "Het gaat over thuiskomen, over de plekken die ons vormen en de verhalen die we onszelf vertellen."',
          },
          {
            title: "De druk van succes",
            content:
              'Na het winnen van de International Booker Prize voelde Rijneveld de druk om te presteren. "Ik moest leren om weer voor mezelf te schrijven, niet voor de verwachtingen van anderen."',
          },
          {
            title: "Advies voor jonge schrijvers",
            content:
              '"Blijf authentiek," benadrukt Rijneveld. "De beste verhalen komen voort uit waarheid, uit de moed om kwetsbaar te zijn op papier."',
          },
          {
            title: "Toekomstplannen",
            content:
              'Rijneveld werkt momenteel aan een dichtbundel en overweegt een vertaling van hun werk naar het Engels. "Ik wil blijven experimenteren met taal en vorm."',
          },
        ],
      },
      author: "Lisa de Jong",
      readTime: "12 min",
      publishDate: "8 maart 2025",
      category: "Interviews",
      image: "/article-interview.png",
    },
    "3": {
      id: 3,
      title: "De Perfecte Leeshoek Inrichten: Tips van Experts",
      content: {
        intro:
          "Een goede leeshoek kan het verschil maken tussen een boek dat je wegzet en een boek dat je in één ruk uitleest. Wij vroegen interieurexperts en fervente lezers naar hun beste tips.",
        sections: [
          {
            title: "Verlichting is Alles",
            content:
              "Goede verlichting is essentieel voor comfortabel lezen. Kies voor een combinatie van natuurlijk licht overdag en warme, gerichte verlichting voor 's avonds. Een leeslamp met verstelbare arm is ideaal.",
          },
          {
            title: "De Juiste Stoel",
            content:
              "Investeer in een comfortabele stoel die je rug ondersteunt. Een fauteuil met armleuningen is perfect, maar zorg ervoor dat je voeten plat op de grond kunnen staan.",
          },
          {
            title: "Organisatie en Opslag",
            content:
              "Houd je favoriete boeken binnen handbereik. Een klein bijzettafeltje voor je drankje en een plaid voor koude avonden maken je leeshoek compleet.",
          },
          {
            title: "Persoonlijke Touches",
            content:
              "Maak je leeshoek persoonlijk met planten, foto's of kunstwerken. Dit creëert een ruimte waar je graag tijd doorbrengt.",
          },
        ],
      },
      author: "Tom Bakker",
      readTime: "6 min",
      publishDate: "22 februari 2025",
      category: "Leestips",
      image: "/article-reading-corner.png",
    },
    "4": {
      id: 4,
      title: "Waarom Klassiekers Nog Steeds Relevant Zijn",
      content: {
        intro:
          "In een tijd van snelle veranderingen en digitale media, blijven literaire klassiekers een belangrijke plaats innemen in onze cultuur. Maar waarom zijn deze oude verhalen nog steeds relevant?",
        sections: [
          {
            title: "Universele Thema's",
            content:
              "Klassiekers behandelen thema's die tijdloos zijn: liefde, verlies, macht, identiteit. Deze fundamentele menselijke ervaringen zijn net zo relevant nu als honderd jaar geleden.",
          },
          {
            title: "Literaire Kwaliteit",
            content:
              "De reden dat bepaalde boeken de tand des tijds doorstaan, is vaak hun uitzonderlijke literaire kwaliteit. Ze bieden rijke taal, complexe personages en meesterlijke verhaalstructuren.",
          },
          {
            title: "Historisch Perspectief",
            content:
              "Klassiekers geven ons inzicht in verschillende tijdperken en culturen. Ze helpen ons begrijpen hoe mensen in het verleden dachten en leefden.",
          },
          {
            title: "Invloed op Moderne Literatuur",
            content:
              "Veel hedendaagse auteurs putten inspiratie uit klassiekers. Door deze werken te lezen, krijgen we een beter begrip van literaire tradities en ontwikkelingen.",
          },
        ],
      },
      author: "Dr. Sarah Vermeer",
      readTime: "10 min",
      publishDate: "14 februari 2025",
      category: "Literaire Analyse",
      image: "/article-classics.png",
    },
    "5": {
      id: 5,
      title: "De Opkomst van Klimaatfictie in Nederland",
      content: {
        intro:
          "Klimaatfictie, of 'cli-fi', is een groeiend genre in de Nederlandse literatuur. Steeds meer auteurs gebruiken fictie om de klimaatcrisis te verkennen en lezers bewust te maken van milieukwesties.",
        sections: [
          {
            title: "Wat is Klimaatfictie?",
            content:
              "Klimaatfictie omvat verhalen die zich afspelen in een wereld beïnvloed door klimaatverandering. Dit kunnen dystopische toekomstvisioenen zijn, maar ook verhalen over hoe mensen nu al omgaan met de gevolgen.",
          },
          {
            title: "Nederlandse Voorlopers",
            content:
              "Auteurs zoals Esther Gerritsen en Kees van Beijnum hebben baanbrekend werk geleverd in dit genre. Hun boeken combineren literaire kwaliteit met urgente maatschappelijke thema's.",
          },
          {
            title: "Impact op Lezers",
            content:
              "Onderzoek toont aan dat klimaatfictie lezers kan motiveren om milieubewuster te leven. Verhalen maken abstracte problemen concreet en emotioneel toegankelijk.",
          },
          {
            title: "De Toekomst van het Genre",
            content:
              "Met de groeiende urgentie van klimaatproblemen, verwachten we dat klimaatfictie een steeds belangrijkere plaats zal innemen in de Nederlandse literatuur.",
          },
        ],
      },
      author: "Mark Jansen",
      readTime: "9 min",
      publishDate: "5 februari 2025",
      category: "Literaire Trends",
      image: "/article-climate-fiction.png",
    },
    "6": {
      id: 6,
      title: "Boekclubs: De Kracht van Samen Lezen",
      content: {
        intro:
          "Boekclubs beleven een renaissance. In een tijd waarin we steeds meer digitaal communiceren, bieden boekclubs een unieke kans voor diepgaande, persoonlijke gesprekken over literatuur.",
        sections: [
          {
            title: "Voordelen van Boekclubs",
            content:
              "Boekclubs motiveren om regelmatig te lezen, introduceren je aan nieuwe genres en auteurs, en bieden de kans om verschillende perspectieven op een verhaal te horen.",
          },
          {
            title: "Een Boekclub Starten",
            content:
              "Begin klein met 4-6 mensen, kies een vaste datum en tijd, en selecteer boeken die binnen een maand gelezen kunnen worden. Zorg voor een comfortabele, neutrale locatie.",
          },
          {
            title: "Gesprekstechnieken",
            content:
              "Bereid vragen voor, maar laat het gesprek natuurlijk verlopen. Moedig iedereen aan om deel te nemen en respecteer verschillende meningen over het boek.",
          },
          {
            title: "Online vs. Offline",
            content:
              "Hoewel online boekclubs praktisch zijn, bieden fysieke bijeenkomsten vaak diepere verbindingen en rijkere discussies.",
          },
        ],
      },
      author: "Anna Visser",
      readTime: "7 min",
      publishDate: "28 januari 2025",
      category: "Leestips",
      image: "/article-book-clubs.png",
    },
    "7": {
      id: 7,
      title: "Digitaal Uitgeven: De Toekomst van Boeken?",
      content: {
        intro:
          "De uitgeverijwereld ondergaat een digitale revolutie. Van e-books tot audioboeken, van self-publishing tot AI-gegenereerde content - hoe ziet de toekomst van boeken eruit?",
        sections: [
          {
            title: "De Opkomst van E-books",
            content:
              "E-books zijn niet langer een niche product. Ze bieden voordelen zoals draagbaarheid, aanpasbare lettergrootte en directe beschikbaarheid. Toch blijven fysieke boeken populair.",
          },
          {
            title: "Audioboeken Boomen",
            content:
              "Audioboeken groeien het snelst van alle boekformaten. Ze maken lezen toegankelijk tijdens het reizen, sporten of huishoudelijke taken.",
          },
          {
            title: "Self-Publishing Revolutie",
            content:
              "Platforms zoals Amazon KDP hebben het voor auteurs mogelijk gemaakt om hun werk direct uit te geven. Dit democratiseert het uitgeven, maar brengt ook uitdagingen met zich mee.",
          },
          {
            title: "AI en de Toekomst",
            content:
              "Kunstmatige intelligentie begint een rol te spelen in het schrijven en uitgeven van boeken. Dit roept vragen op over authenticiteit en de rol van menselijke creativiteit.",
          },
        ],
      },
      author: "Peter de Vries",
      readTime: "11 min",
      publishDate: "20 januari 2025",
      category: "Digitale Trends",
      image: "/article-digital-publishing.png",
    },
  }

  return articles[id as keyof typeof articles] || null
}

const relatedArticles = [
  {
    id: 2,
    title: "Interview: Marieke Lucas Rijneveld over hun nieuwe roman",
    category: "Interviews",
    readTime: "12 min",
  },
  {
    id: 5,
    title: "De Opkomst van Klimaatfictie in Nederland",
    category: "Literaire Trends",
    readTime: "9 min",
  },
  {
    id: 4,
    title: "Waarom Klassiekers Nog Steeds Relevant Zijn",
    category: "Literaire Analyse",
    readTime: "10 min",
  },
]

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = getArticle(params.id)

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
              <Button variant="outline" size="sm" className="bg-transparent">
                <Share2 className="h-4 w-4 mr-2" />
                Delen
              </Button>
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
