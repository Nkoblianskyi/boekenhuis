import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Heart, Users, Target, Award, Coffee } from "lucide-react"

const teamMembers = [
  {
    name: "Emma van der Berg",
    role: "Oprichter & Hoofdredacteur",
    bio: "Emma heeft meer dan 15 jaar ervaring in de Nederlandse literatuurwereld. Zij begon Boekenhuis Nederland vanuit haar passie voor het delen van verhalen.",
    image: "/team-emma.jpg",
    specialties: ["Nederlandse Literatuur", "Poëzie", "Klassiekers"],
  },
  {
    name: "Pieter Janssen",
    role: "Senior Recensent",
    bio: "Pieter is gespecialiseerd in internationale literatuur en heeft een scherp oog voor opkomende auteurs. Hij spreekt vloeiend vijf talen.",
    image: "/team-pieter.jpg",
    specialties: ["Internationale Fictie", "Thrillers", "Biografieën"],
  },
  {
    name: "Sophie de Wit",
    role: "Community Manager",
    bio: "Sophie zorgt ervoor dat onze leesgemeenschap bloeit. Zij organiseert onze boekendagen en beheert onze online discussies.",
    image: "/team-sophie.jpg",
    specialties: ["Young Adult", "Fantasy", "Community Building"],
  },
  {
    name: "Thomas Bakker",
    role: "Content Specialist",
    bio: "Thomas schrijft onze diepgaande artikelen over literaire trends en boekenmarkt ontwikkelingen. Hij heeft een achtergrond in journalistiek.",
    image: "/team-thomas.jpg",
    specialties: ["Literaire Analyse", "Markttrends", "Interviews"],
  },
]

const milestones = [
  {
    year: "2018",
    title: "De Start",
    description: "Emma begint Boekenhuis Nederland als een kleine blog vanuit haar appartement in Amsterdam.",
  },
  {
    year: "2019",
    title: "Eerste Team",
    description: "Pieter en Sophie sluiten zich aan bij het team. We publiceren onze eerste 100 recensies.",
  },
  {
    year: "2020",
    title: "Online Groei",
    description: "Tijdens de pandemie groeit onze online gemeenschap explosief naar 5.000 actieve lezers.",
  },
  {
    year: "2021",
    title: "Eerste Boekendag",
    description: "We organiseren ons eerste fysieke evenement in Amsterdam met 200 bezoekers.",
  },
  {
    year: "2022",
    title: "Landelijke Erkenning",
    description: "Boekenhuis Nederland wint de 'Beste Literaire Website' award van de Nederlandse Boekenbond.",
  },
  {
    year: "2023",
    title: "Uitbreiding",
    description: "Thomas voegt zich bij het team. We lanceren onze interactieve boek quiz en bereiken 10.000 lezers.",
  },
  {
    year: "2025",
    title: "Nieuwe Website",
    description:
      "Complete vernieuwing van onze website met verbeterde gebruikerservaring en meer interactieve features.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Over Boekenhuis Nederland
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Sinds 2018 verbinden wij boekliefhebbers door middel van kwalitatieve recensies, diepgaande artikelen en
              een warme, uitnodigende gemeenschap.
            </p>
            <div className="flex justify-center">
              <BookOpen className="h-16 w-16 text-primary" />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Heart className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Onze Missie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Wij geloven dat elk boek een verhaal vertelt dat de moeite waard is om gedeeld te worden. Onze
                    missie is om lezers te inspireren, nieuwe boeken te ontdekken en een levendige gemeenschap van
                    boekliefhebbers te creëren.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Target className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Onze Visie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We streven ernaar de meest vertrouwde bron voor boekenaanbevelingen in Nederland te zijn. Door
                    eerlijke recensies en diepgaande analyses helpen we lezers de perfecte boeken voor hun smaak te
                    vinden.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Users className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Onze Waarden</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Authenticiteit, inclusiviteit en passie voor literatuur staan centraal in alles wat we doen. We
                    waarderen diversiteit in verhalen en stemmen, en creëren een veilige ruimte voor alle
                    boekliefhebbers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ons Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ontmoet de mensen achter Boekenhuis Nederland - een gepassioneerd team van lezers, schrijvers en
                literatuurliefhebbers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Coffee className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Onze Reis</h2>
              <p className="text-lg text-muted-foreground">
                Van een kleine blog tot Nederlands meest vertrouwde boekwebsite - dit is ons verhaal.
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">{milestone.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                      <CardTitle className="text-xl">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Onze Impact</h2>
              <p className="text-lg text-muted-foreground">
                Samen hebben we een bloeiende gemeenschap van boekliefhebbers gecreëerd.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">500+</h3>
                <p className="text-muted-foreground">Boekrecensies</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">10K+</h3>
                <p className="text-muted-foreground">Actieve Lezers</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">25</h3>
                <p className="text-muted-foreground">Boekendagen</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">98%</h3>
                <p className="text-muted-foreground">Tevreden Lezers</p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
