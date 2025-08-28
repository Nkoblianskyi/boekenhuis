"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [formType, setFormType] = useState("")

  const handleSubmit = (e: React.FormEvent, type: string) => {
    e.preventDefault()
    setFormType(type)
    setShowSuccessPopup(true)

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowSuccessPopup(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bericht Verzonden!</h3>
              <p className="text-gray-600">
                {formType === "booking"
                  ? "Uw boekingsaanvraag is succesvol verzonden. Wij nemen binnen 24 uur contact met u op."
                  : "Uw bericht is succesvol verzonden. Wij reageren zo snel mogelijk op uw vraag."}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Contact & Boekingen</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Neem contact met ons op voor vragen of boek een persoonlijke boekconsultatie
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-amber-800">Contactgegevens</CardTitle>
                <CardDescription>Bezoek ons of neem direct contact op</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Adres</p>
                    <p className="text-gray-600 text-sm">
                      World Trade Center Amsterdam
                      <br />
                      Strawinskylaan 77
                      <br />
                      1077 XX Amsterdam
                      <br />
                      Nederland
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-medium text-gray-900">Telefoon</p>
                    <p className="text-gray-600 text-sm">+31 20 684 5213</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600 text-sm">info@boekenhuis.online</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Openingstijden</p>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Ma-Vr: 09:00 - 18:00</p>
                      <p>Za: 10:00 - 16:00</p>
                      <p>Zo: Gesloten</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Forms */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-amber-800">Neem Contact Op</CardTitle>
                <CardDescription>Boek een consultatie of stel uw vraag</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="booking" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-amber-100">
                    <TabsTrigger
                      value="booking"
                      className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Boek Consultatie
                    </TabsTrigger>
                    <TabsTrigger
                      value="question"
                      className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Stel een Vraag
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="booking" className="mt-6">
                    <form onSubmit={(e) => handleSubmit(e, "booking")} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Voornaam *</label>
                          <Input
                            required
                            placeholder="Uw voornaam"
                            className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Achternaam *</label>
                          <Input
                            required
                            placeholder="Uw achternaam"
                            className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <Input
                          type="email"
                          required
                          placeholder="uw.email@boekenhuis.online"
                          className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Telefoon</label>
                        <Input
                          type="tel"
                          placeholder="+31 6 12345678"
                          className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Gewenste Datum *</label>
                          <Input
                            type="date"
                            required
                            className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Gewenste Tijd *</label>
                          <Input
                            type="time"
                            required
                            className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Type Consultatie *</label>
                        <select
                          required
                          className="w-full px-3 py-2 border border-amber-200 rounded-md focus:border-amber-500 focus:ring-amber-500"
                        >
                          <option value="">Selecteer een optie</option>
                          <option value="personal-reading">Persoonlijke Leesadvies</option>
                          <option value="book-club">Boekclub Begeleiding</option>
                          <option value="author-meeting">Auteur Ontmoeting</option>
                          <option value="literature-course">Literatuur Cursus</option>
                          <option value="other">Anders</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Aanvullende Informatie</label>
                        <Textarea
                          placeholder="Vertel ons meer over uw wensen en voorkeuren..."
                          className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                          rows={4}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Boek Consultatie
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="question" className="mt-6">
                    <form onSubmit={(e) => handleSubmit(e, "question")} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Naam *</label>
                          <Input
                            required
                            placeholder="Uw volledige naam"
                            className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                          <Input
                            type="email"
                            required
                            placeholder="uw.email@boekenhuis.online"
                            className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Onderwerp *</label>
                        <Input
                          required
                          placeholder="Waar gaat uw vraag over?"
                          className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Categorie</label>
                        <select className="w-full px-3 py-2 border border-amber-200 rounded-md focus:border-amber-500 focus:ring-amber-500">
                          <option value="">Selecteer een categorie</option>
                          <option value="book-recommendation">Boek Aanbeveling</option>
                          <option value="author-info">Auteur Informatie</option>
                          <option value="book-club">Boekclub</option>
                          <option value="events">Evenementen</option>
                          <option value="technical">Technische Ondersteuning</option>
                          <option value="other">Anders</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Uw Vraag *</label>
                        <Textarea
                          required
                          placeholder="Stel hier uw vraag. Hoe meer details u geeft, hoe beter wij u kunnen helpen..."
                          className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                          rows={6}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Verstuur Vraag
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Boekdag Informatie
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  <strong>Persoonlijke Consultatie:</strong> 60 minuten individueel advies over uw leesvoorkeuren en
                  boekenkeuzes.
                </p>
                <p>
                  <strong>Boekclub Begeleiding:</strong> Professionele begeleiding voor uw boekclub met discussievragen
                  en achtergrond informatie.
                </p>
                <p>
                  <strong>Auteur Ontmoetingen:</strong> Exclusieve gesprekken met Nederlandse en internationale auteurs.
                </p>
                <p>
                  <strong>Literatuur Cursussen:</strong> Diepgaande cursussen over specifieke genres, periodes of
                  auteurs.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Veelgestelde Vragen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-900">Hoe snel krijg ik antwoord?</p>
                  <p>Wij reageren binnen 24 uur op alle vragen en boekingsaanvragen.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Zijn consultaties gratis?</p>
                  <p>
                    De eerste 30 minuten consultatie is altijd gratis. Uitgebreide sessies hebben een kleine vergoeding.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Kan ik online advies krijgen?</p>
                  <p>Ja, wij bieden zowel persoonlijke als online consultaties via videobellen aan.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
