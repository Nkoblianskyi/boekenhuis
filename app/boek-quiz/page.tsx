"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Trophy, RotateCcw, Share2, Clock, CheckCircle, XCircle } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: "Makkelijk" | "Gemiddeld" | "Moeilijk"
}

const questions: Question[] = [
  {
    id: 1,
    question: "Wie schreef de Nederlandse klassieker 'Max Havelaar'?",
    options: ["Louis Couperus", "Multatuli", "Willem Frederik Hermans", "Gerard Reve"],
    correctAnswer: 1,
    explanation:
      "Multatuli (Eduard Douwes Dekker) schreef 'Max Havelaar' in 1860, een kritiek op het Nederlandse kolonialisme.",
    difficulty: "Makkelijk",
  },
  {
    id: 2,
    question: "Welke Nederlandse auteur won de Booker Prize in 2020?",
    options: ["Marieke Lucas Rijneveld", "Tommy Wieringa", "Lize Spit", "Jaap Robben"],
    correctAnswer: 0,
    explanation: "Marieke Lucas Rijneveld won de International Booker Prize in 2020 voor 'De avond is ongemak'.",
    difficulty: "Gemiddeld",
  },
  {
    id: 3,
    question: "In welk jaar werd de Libris Literatuurprijs voor het eerst uitgereikt?",
    options: ["1993", "1987", "1995", "1990"],
    correctAnswer: 1,
    explanation: "De Libris Literatuurprijs werd voor het eerst uitgereikt in 1987 aan A.F.Th. van der Heijden.",
    difficulty: "Moeilijk",
  },
  {
    id: 4,
    question: "Welk boek van Harry Mulisch wordt beschouwd als zijn magnum opus?",
    options: ["Het stenen bruidsbed", "De ontdekking van de hemel", "De Aanslag", "Siegfried"],
    correctAnswer: 1,
    explanation: "'De ontdekking van de hemel' (1992) wordt algemeen beschouwd als Mulisch's meesterwerk.",
    difficulty: "Gemiddeld",
  },
  {
    id: 5,
    question: "Wie schreef 'Het Achterhuis'?",
    options: ["Anne Frank", "Etty Hillesum", "Marga Minco", "Ida Vos"],
    correctAnswer: 0,
    explanation: "Anne Frank schreef haar beroemde dagboek 'Het Achterhuis' tijdens de Tweede Wereldoorlog.",
    difficulty: "Makkelijk",
  },
  {
    id: 6,
    question: "Welke literaire stroming wordt geassocieerd met Willem Frederik Hermans?",
    options: ["Romantiek", "Realisme", "Nieuwe Zakelijkheid", "Vijftigers"],
    correctAnswer: 3,
    explanation: "Willem Frederik Hermans behoorde tot de Vijftigers, samen met Gerard Reve en Harry Mulisch.",
    difficulty: "Moeilijk",
  },
  {
    id: 7,
    question: "Welk boek van Cees Nooteboom won de Europese Literatuurprijs?",
    options: ["Rituelen", "In Nederland", "De volgende wereld", "Het volgende verhaal"],
    correctAnswer: 3,
    explanation: "'Het volgende verhaal' (1991) won de Europese Literatuurprijs en de Libris Literatuurprijs.",
    difficulty: "Moeilijk",
  },
  {
    id: 8,
    question: "Wie is de auteur van 'Turks Fruit'?",
    options: ["Jan Wolkers", "Remco Campert", "Simon Vestdijk", "Godfried Bomans"],
    correctAnswer: 0,
    explanation: "Jan Wolkers schreef 'Turks Fruit' in 1969, later verfilmd door Paul Verhoeven.",
    difficulty: "Makkelijk",
  },
]

type QuizState = "start" | "playing" | "finished"

export default function BookQuizPage() {
  const [quizState, setQuizState] = useState<QuizState>("start")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [userAnswers, setUserAnswers] = useState<number[]>([])
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [timerActive, setTimerActive] = useState(false)

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (timerActive && timeLeft > 0 && quizState === "playing") {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && quizState === "playing") {
      handleTimeUp()
    }
    return () => clearInterval(interval)
  }, [timerActive, timeLeft, quizState])

  const startQuiz = () => {
    setQuizState("playing")
    setCurrentQuestion(0)
    setUserAnswers([])
    setScore(0)
    setTimeLeft(30)
    setTimerActive(true)
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(answerIndex)
    setTimerActive(false)
    setShowExplanation(true)

    const newAnswers = [...userAnswers, answerIndex]
    setUserAnswers(newAnswers)

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleTimeUp = () => {
    if (selectedAnswer === null) {
      setSelectedAnswer(-1) // -1 indicates no answer selected
      setShowExplanation(true)
      setTimerActive(false)
      setUserAnswers([...userAnswers, -1])
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setTimeLeft(30)
      setTimerActive(true)
    } else {
      setQuizState("finished")
      setTimerActive(false)
    }
  }

  const resetQuiz = () => {
    setQuizState("start")
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setUserAnswers([])
    setShowExplanation(false)
    setScore(0)
    setTimeLeft(30)
    setTimerActive(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80) return "Uitstekend! Je bent een echte literatuurkenner!"
    if (percentage >= 60) return "Goed gedaan! Je hebt een solide kennis van Nederlandse literatuur."
    if (percentage >= 40) return "Niet slecht! Er is nog ruimte voor verbetering."
    return "Tijd om meer te lezen! Ontdek onze boekenaanbevelingen."
  }

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 80) return "text-green-600"
    if (percentage >= 60) return "text-primary"
    if (percentage >= 40) return "text-yellow-600"
    return "text-red-600"
  }

  if (quizState === "start") {
    return (
      <div className="min-h-screen">

        <main>
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <BookOpen className="h-16 w-16 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  Nederlandse Literatuur Quiz
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Test je kennis van de Nederlandse literatuur! Van klassiekers tot moderne meesterwerken.
                </p>
              </div>

              <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Quiz Informatie</CardTitle>
                  <CardDescription>Wat je kunt verwachten</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-2">{questions.length}</div>
                      <div className="text-sm text-muted-foreground">Vragen</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-2">30s</div>
                      <div className="text-sm text-muted-foreground">Per Vraag</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-2">Mix</div>
                      <div className="text-sm text-muted-foreground">Moeilijkheid</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground">Quiz Regels:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Je hebt 30 seconden per vraag</li>
                      <li>• Kies het beste antwoord uit de opties</li>
                      <li>• Je krijgt uitleg na elke vraag</li>
                      <li>• Aan het einde zie je je totaalscore</li>
                    </ul>
                  </div>

                  <Button onClick={startQuiz} size="lg" className="w-full">
                    Start Quiz
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

  if (quizState === "playing") {
    const question = questions[currentQuestion]
    const progress = ((currentQuestion + 1) / questions.length) * 100

    return (
      <div className="min-h-screen">
        <Navigation />
        <main>
          <section className="py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Progress and Timer */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">
                    Vraag {currentQuestion + 1} van {questions.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span
                      className={`text-sm font-medium ${timeLeft <= 10 ? "text-red-500" : "text-muted-foreground"}`}
                    >
                      {timeLeft}s
                    </span>
                  </div>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{question.difficulty}</Badge>
                    <span className="text-sm text-muted-foreground">
                      Score: {score}/{currentQuestion + (selectedAnswer !== null ? 1 : 0)}
                    </span>
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-balance">{question.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {question.options.map((option, index) => {
                      let buttonVariant: "default" | "outline" | "destructive" | "secondary" = "outline"
                      let buttonClass = "bg-transparent"

                      if (showExplanation) {
                        if (index === question.correctAnswer) {
                          buttonVariant = "default"
                          buttonClass = "bg-green-500 hover:bg-green-600 text-white"
                        } else if (index === selectedAnswer && selectedAnswer !== question.correctAnswer) {
                          buttonVariant = "destructive"
                        }
                      } else if (selectedAnswer === index) {
                        buttonVariant = "secondary"
                      }

                      return (
                        <Button
                          key={index}
                          variant={buttonVariant}
                          className={`w-full text-left justify-start h-auto p-4 ${buttonClass}`}
                          onClick={() => handleAnswerSelect(index)}
                          disabled={selectedAnswer !== null}
                        >
                          <span className="mr-3 font-medium">{String.fromCharCode(65 + index)}.</span>
                          {option}
                          {showExplanation && index === question.correctAnswer && (
                            <CheckCircle className="h-5 w-5 ml-auto" />
                          )}
                          {showExplanation && index === selectedAnswer && selectedAnswer !== question.correctAnswer && (
                            <XCircle className="h-5 w-5 ml-auto" />
                          )}
                        </Button>
                      )
                    })}
                  </div>

                  {showExplanation && (
                    <div className="mt-6 p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Uitleg:</h4>
                      <p className="text-muted-foreground text-sm">{question.explanation}</p>
                    </div>
                  )}

                  {showExplanation && (
                    <div className="mt-6 flex justify-end">
                      <Button onClick={nextQuestion}>
                        {currentQuestion < questions.length - 1 ? "Volgende Vraag" : "Bekijk Resultaten"}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    )
  }

  // Results screen
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <Trophy className="h-16 w-16 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Quiz Voltooid!</h1>
              <p className="text-xl text-muted-foreground">Hier zijn je resultaten</p>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">
                  <span className={getScoreColor()}>{score}</span>
                  <span className="text-muted-foreground">/{questions.length}</span>
                </CardTitle>
                <CardDescription className="text-lg">
                  {Math.round((score / questions.length) * 100)}% correct
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-lg text-foreground mb-4">{getScoreMessage()}</p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">Vraag Overzicht:</h3>
                  <div className="space-y-2">
                    {questions.map((question, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <span className="text-sm">Vraag {index + 1}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{question.difficulty}</Badge>
                          {userAnswers[index] === question.correctAnswer ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={resetQuiz} variant="outline" className="flex-1 bg-transparent">
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Opnieuw Proberen
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Share2 className="h-4 w-4 mr-2" />
                    Deel Resultaat
                  </Button>
                </div>

                <div className="text-center pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Wil je meer leren over Nederlandse literatuur?</p>
                  <Button asChild>
                    <a href="/artikelen">Lees Onze Artikelen</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

    </div>
  )
}
