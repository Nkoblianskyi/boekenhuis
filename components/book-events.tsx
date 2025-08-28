import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BookEvents() {
  const events = [
    {
      title: "Literaire Salon Amsterdam",
      date: "28 februari 2025",
      time: "19:30 - 22:00",
      location: "Concertgebouw Amsterdam",
      attendees: 45,
      description: "Een avond vol poëzie en proza met Nederlandse auteurs",
      image: "/literary-salon-amsterdam-evening.png",
    },
    {
      title: "Boekclub Bijeenkomst",
      date: "5 maart 2025",
      time: "18:00 - 20:00",
      location: "Bibliotheek Utrecht",
      attendees: 12,
      description: "Bespreking van 'De Avond is Ongemak' van Marieke Lucas Rijneveld",
      image: "/book-club-meeting-library.png",
    },
    {
      title: "Schrijfworkshop voor Beginners",
      date: "12 maart 2025",
      time: "14:00 - 17:00",
      location: "Boekenhuis Nederland",
      attendees: 8,
      description: "Leer de basis van creatief schrijven in een inspirerende omgeving",
      image: "/writing-workshop-creative.png",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Aankomende Evenementen</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Doe mee aan onze literaire evenementen en ontmoet andere boekliefhebbers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Users className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-medium text-gray-700">{event.attendees}</span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-orange-800 text-lg leading-tight">{event.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Button asChild className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white">
                  <Link href="/contact">Aanmelden</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent"
          >
            <Link href="/contact">Bekijk alle evenementen</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
