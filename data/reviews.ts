export interface Review {
  id: number
  title: string
  author: string
  reviewer: string
  rating: number
  readTime: string
  publishDate: string
  genre: string
  isbn: string
  publisher: string
  pages: number
  publicationYear: number
  excerpt: string
  image: string
  featured?: boolean
  fullReview: {
    intro: string
    sections: {
      title: string
      content: string
    }[]
  }
  pros: string[]
  cons: string[]
}

export const reviews: Review[] = [
  {
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
    excerpt:
      "Een aangrijpend verhaal over verlies, rouw en het vinden van hoop in de donkerste momenten van het leven.",
    image: "/ongemak.jpg",
    featured: true,
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
  {
    id: 2,
    title: "Het Diner",
    author: "Herman Koch",
    reviewer: "Pieter Janssen",
    rating: 4.2,
    readTime: "6 min",
    publishDate: "10 maart 2025",
    genre: "Thriller",
    isbn: "9789041711441",
    publisher: "Ambo Anthos",
    pages: 304,
    publicationYear: 2009,
    excerpt: "Een psychologische thriller die je aan de rand van je stoel houdt tot de laatste pagina.",
    image: "/diner.jpg",
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
  {
    id: 3,
    title: "Turks Fruit",
    author: "Jan Wolkers",
    reviewer: "Thomas Bakker",
    rating: 4.8,
    readTime: "10 min",
    publishDate: "8 maart 2025",
    genre: "Klassiek",
    isbn: "9789029538725",
    publisher: "Meulenhoff",
    pages: 208,
    publicationYear: 1969,
    excerpt: "Een tijdloze Nederlandse klassieker over liefde, passie en het leven in al zijn facetten.",
    image: "/fruit.jpg",
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
  {
    id: 4,
    title: "De Ontdekking van de Hemel",
    author: "Harry Mulisch",
    reviewer: "Emma van der Berg",
    rating: 4.7,
    readTime: "12 min",
    publishDate: "5 maart 2025",
    genre: "Literaire Fictie",
    isbn: "9789023456789",
    publisher: "De Bezige Bij",
    pages: 900,
    publicationYear: 1992,
    excerpt: "Mulisch' magnum opus - een filosofische roman over vriendschap, liefde en het goddelijke.",
    image: "/hemel.jpg",
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
  {
    id: 5,
    title: "Bonita Avenue",
    author: "Peter Buwalda",
    reviewer: "Sophie de Wit",
    rating: 4.1,
    readTime: "9 min",
    publishDate: "2 maart 2025",
    genre: "Literaire Fictie",
    isbn: "9789023456123",
    publisher: "De Bezige Bij",
    pages: 635,
    publicationYear: 2010,
    excerpt: "Een complexe familieroman die de donkere kanten van het moderne leven blootlegt.",
    image: "/avenue.jpg",
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
  {
    id: 6,
    title: "Oeroeg",
    author: "Hella S. Haasse",
    reviewer: "Thomas Bakker",
    rating: 4.4,
    readTime: "7 min",
    publishDate: "28 februari 2025",
    genre: "Klassiek",
    isbn: "9789021400112",
    publisher: "Querido",
    pages: 128,
    publicationYear: 1948,
    excerpt: "Een indringende novelle over vriendschap en de gevolgen van kolonialisme.",
    image: "/haasse.jpg",
    fullReview: {
      intro:
        'Hella S. Haasse\'s "Oeroeg" is een meesterwerk van de Nederlandse literatuur dat de complexiteit van koloniale verhoudingen en vriendschap verkent. Deze korte maar krachtige novelle heeft generaties lezers geraakt.',
      sections: [
        {
          title: "Het Verhaal",
          content:
            "Het boek vertelt over de vriendschap tussen een Nederlandse jongen en zijn Javaanse speelkameraad Oeroeg, en hoe deze vriendschap wordt beïnvloed door de koloniale context en maatschappelijke veranderingen.",
        },
        {
          title: "Koloniale Thematiek",
          content:
            "Haasse toont met grote subtiliteit hoe kolonialisme niet alleen politieke en economische gevolgen heeft, maar ook diepgaande invloed uitoefent op persoonlijke relaties en identiteitsvorming.",
        },
        {
          title: "Schrijfstijl",
          content:
            "Haasse's proza is elegant en beheerst, met een verfijnde stijl die de emotionele complexiteit van het verhaal perfect weergeeft. Elke zin is zorgvuldig gekozen.",
        },
        {
          title: "Tijdloze Relevantie",
          content:
            "Ondanks dat het boek in 1948 werd geschreven, blijven de thema's van vriendschap, identiteit en culturele verschillen zeer relevant voor moderne lezers.",
        },
      ],
    },
    pros: [
      "Meesterlijke, elegante schrijfstijl",
      "Diepgaande thematiek",
      "Tijdloze relevantie",
      "Perfecte lengte en structuur",
    ],
    cons: ["Kan gedateerd aanvoelen", "Subtiele stijl niet voor iedereen", "Korte lengte"],
  },
]

export const getReviewById = (id: number): Review | undefined => {
  return reviews.find((review) => review.id === id)
}

export const getFeaturedReview = (): Review | undefined => {
  return reviews.find((review) => review.featured)
}

export const getRelatedReviews = (currentId: number, limit = 3): Review[] => {
  return reviews.filter((review) => review.id !== currentId).slice(0, limit)
}
