export interface Article {
  id: number
  title: string
  excerpt: string
  author: string
  readTime: string
  publishDate: string
  category: string
  image: string
  featured?: boolean
  content: {
    intro: string
    sections: {
      title: string
      content: string
    }[]
  }
}

export const articles: Article[] = [
  {
    id: 1,
    title: "De Renaissance van Nederlandse Literatuur in 2025",
    excerpt:
      "Een diepgaande analyse van de huidige trends in de Nederlandse literatuurwereld en waarom jonge auteurs weer de spotlight pakken.",
    author: "Emma van der Berg",
    readTime: "8 min",
    publishDate: "15 maart 2025",
    category: "Literaire Trends",
    image: "/article-featured.png",
    featured: true,
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
  },
  {
    id: 2,
    title: "Interview: Marieke Lucas Rijneveld over hun nieuwe roman",
    excerpt: "Een exclusief gesprek over inspiratie, schrijfproces en de toekomst van poëtische proza.",
    author: "Pieter Janssen",
    readTime: "12 min",
    publishDate: "10 maart 2025",
    category: "Interviews",
    image: "/article-interview.png",
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
  },
  {
    id: 3,
    title: "5 Leestips voor de Perfecte Leeshoek",
    excerpt: "Creëer de ideale omgeving voor uren leesplezier met deze praktische tips en tricks.",
    author: "Sophie de Wit",
    readTime: "6 min",
    publishDate: "8 maart 2025",
    category: "Leestips",
    image: "/article-reading-corner.png",
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
  },
  {
    id: 4,
    title: "Waarom Klassiekers Nog Steeds Relevant Zijn",
    excerpt: "Een verkenning van tijdloze thema's in klassieke literatuur en hun betekenis voor moderne lezers.",
    author: "Thomas Bakker",
    readTime: "10 min",
    publishDate: "5 maart 2025",
    category: "Literaire Analyse",
    image: "/article-classics.png",
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
  },
  {
    id: 5,
    title: "De Opkomst van Klimaatfictie in Nederland",
    excerpt:
      "Hoe Nederlandse auteurs klimaatverandering verwerken in hun verhalen en wat dit betekent voor de literatuur.",
    author: "Emma van der Berg",
    readTime: "9 min",
    publishDate: "2 maart 2025",
    category: "Literaire Trends",
    image: "/article-climate-fiction.png",
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
  },
  {
    id: 6,
    title: "Boekclubs: Tips voor Levendige Discussies",
    excerpt: "Maak van je boekclub een succes met deze bewezen strategieën voor diepgaande gesprekken.",
    author: "Sophie de Wit",
    readTime: "7 min",
    publishDate: "28 februari 2025",
    category: "Leestips",
    image: "/article-book-clubs.png",
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
  },
  {
    id: 7,
    title: "De Digitale Revolutie in het Uitgeven",
    excerpt: "Hoe e-books en audioboeken de manier waarop we lezen en publiceren voorgoed hebben veranderd.",
    author: "Thomas Bakker",
    readTime: "11 min",
    publishDate: "25 februari 2025",
    category: "Boekenmarkt",
    image: "/article-digital-publishing.png",
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
  },
  {
    id: 8,
    title: "Gesprek met Uitgeverij Prometheus",
    excerpt: "Een kijkje achter de schermen bij een van Nederlands meest invloedrijke uitgeverijen.",
    author: "Pieter Janssen",
    readTime: "15 min",
    publishDate: "22 februari 2025",
    category: "Interviews",
    image: "/article-publisher-interview.png",
    content: {
      intro:
        "Een kijkje achter de schermen bij een van Nederlands meest invloedrijke uitgeverijen. In dit exclusieve interview spreken we met directeur Marjolein van der Meer over de uitdagingen en kansen in de moderne uitgeverijwereld.",
      sections: [
        {
          title: "De Geschiedenis van Prometheus",
          content:
            '"Prometheus werd opgericht in 1993 met de missie om kwaliteitsliteratuur toegankelijk te maken voor een breed publiek," vertelt Van der Meer. "We begonnen klein, maar hebben altijd geloofd in de kracht van goede verhalen."',
        },
        {
          title: "Selectieproces van Manuscripten",
          content:
            'Het selecteren van nieuwe titels is een zorgvuldig proces. "We ontvangen jaarlijks duizenden manuscripten. Ons team van redacteuren beoordeelt elk werk op literaire kwaliteit, originaliteit en commercieel potentieel," legt Van der Meer uit.',
        },
        {
          title: "Digitale Transformatie",
          content:
            'De uitgeverij heeft zich aangepast aan de digitale tijd. "E-books en audioboeken zijn nu een belangrijk deel van onze strategie. We investeren ook in sociale media marketing om jonge lezers te bereiken."',
        },
        {
          title: "Steun voor Nederlandse Auteurs",
          content:
            '"We zijn trots op onze Nederlandse auteurs," benadrukt Van der Meer. "Van gevestigde namen tot debutanten, we geloven in het investeren in lokaal talent. Nederlandse literatuur heeft zoveel te bieden."',
        },
        {
          title: "Toekomstvisie",
          content:
            'Kijkend naar de toekomst blijft Prometheus optimistisch. "Boeken zullen altijd bestaan, ongeacht het format. Onze taak is om ervoor te zorgen dat goede verhalen hun weg vinden naar lezers, of dat nu digitaal of fysiek is."',
        },
      ],
    },
  },
]

export const getArticleById = (id: number): Article | undefined => {
  return articles.find((article) => article.id === id)
}

export const getFeaturedArticle = (): Article | undefined => {
  return articles.find((article) => article.featured)
}

export const getRelatedArticles = (currentId: number, limit = 3): Article[] => {
  return articles.filter((article) => article.id !== currentId).slice(0, limit)
}
