// src/lib/data/seed-questions/multiple-select.ts

export const MULTIPLE_SELECT_QUESTIONS = {
  "general-knowledge": [
    {
      slug: "countries-in-europe",
      title: "Which of these countries are in Europe?",
      explanation: "France and Germany are European countries. Brazil is in South America, while Japan is in Asia.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "France" },
          { id: "b", text: "Brazil" },
          { id: "c", text: "Germany" },
          { id: "d", text: "Japan" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "international-organizations",
      title: "Which organizations are part of the United Nations system?",
      explanation: "UNICEF and the World Health Organization are part of the UN system. NATO and the World Trade Organization are separate international organizations.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "UNICEF" },
          { id: "b", text: "NATO" },
          { id: "c", text: "World Health Organization" },
          { id: "d", text: "World Trade Organization" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  science: [
    {
      slug: "states-of-matter",
      title: "Which of these are states of matter?",
      explanation: "Solid, liquid, and gas are common states of matter. Light is electromagnetic radiation, not a state of matter.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Solid" },
          { id: "b", text: "Light" },
          { id: "c", text: "Liquid" },
          { id: "d", text: "Sound" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "cellular-organelles",
      title: "Which cell organelles contain their own DNA?",
      explanation: "Mitochondria and chloroplasts contain their own DNA. Ribosomes and the Golgi apparatus do not.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Mitochondria" },
          { id: "b", text: "Golgi apparatus" },
          { id: "c", text: "Chloroplasts" },
          { id: "d", text: "Ribosomes" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  technology: [
    {
      slug: "computer-hardware",
      title: "Which components are essential parts of a computer?",
      explanation: "The CPU processes instructions, and RAM provides temporary working memory. A browser and a text editor are software applications.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "CPU" },
          { id: "b", text: "Web browser" },
          { id: "c", text: "RAM" },
          { id: "d", text: "Text editor" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "network-protocols",
      title: "Which protocols are commonly used for secure communication?",
      explanation: "HTTPS secures web communication using TLS, while SSH provides secure remote access. FTP and HTTP do not provide encryption by default.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "HTTPS" },
          { id: "b", text: "FTP" },
          { id: "c", text: "SSH" },
          { id: "d", text: "HTTP" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  mathematics: [
    {
      slug: "basic-even-numbers",
      title: "Which of these numbers are even?",
      explanation: "Even numbers are divisible by two without a remainder. Both 12 and 24 are even.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "7" },
          { id: "b", text: "12" },
          { id: "c", text: "19" },
          { id: "d", text: "24" },
        ],
        correctOptionIds: ["b", "d"],
      },
    },
    {
      slug: "prime-numbers",
      title: "Which of these numbers are prime?",
      explanation: "A prime number has exactly two positive divisors: one and itself. Both 29 and 31 are prime numbers.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "21" },
          { id: "b", text: "29" },
          { id: "c", text: "31" },
          { id: "d", text: "39" },
        ],
        correctOptionIds: ["b", "c"],
      },
    },
  ],

  history: [
    {
      slug: "ancient-civilizations",
      title: "Which civilizations existed in the ancient world?",
      explanation: "Ancient Egypt and Mesopotamia were major ancient civilizations. The United States and modern Germany emerged much later.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Ancient Egypt" },
          { id: "b", text: "United States" },
          { id: "c", text: "Mesopotamia" },
          { id: "d", text: "Modern Germany" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "world-war-two-events",
      title: "Which events occurred during World War II?",
      explanation: "The attack on Pearl Harbor and the D-Day landings occurred during World War II. The French Revolution and the fall of the Berlin Wall happened in different periods.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Attack on Pearl Harbor" },
          { id: "b", text: "French Revolution" },
          { id: "c", text: "D-Day landings" },
          { id: "d", text: "Fall of the Berlin Wall" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  geography: [
    {
      slug: "african-countries",
      title: "Which of these countries are in Africa?",
      explanation: "Kenya and Morocco are African countries. Thailand is in Asia, and Peru is in South America.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Kenya" },
          { id: "b", text: "Thailand" },
          { id: "c", text: "Morocco" },
          { id: "d", text: "Peru" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "major-world-rivers",
      title: "Which rivers are among the longest in the world?",
      explanation: "The Nile and Amazon are two of the world's longest river systems. The Rhine and Thames are considerably shorter.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Nile" },
          { id: "b", text: "Thames" },
          { id: "c", text: "Amazon" },
          { id: "d", text: "Rhine" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  language: [
    {
      slug: "parts-of-speech",
      title: "Which of these are parts of speech?",
      explanation: "Nouns and verbs are parts of speech. Paragraph and punctuation are writing concepts, not parts of speech.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Noun" },
          { id: "b", text: "Paragraph" },
          { id: "c", text: "Verb" },
          { id: "d", text: "Punctuation" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "english-grammatical-tenses",
      title: "Which sentences use the present perfect tense?",
      explanation: "The present perfect uses have or has with a past participle. Both selected sentences follow this structure.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "She has finished her work." },
          { id: "b", text: "They are playing football." },
          { id: "c", text: "I have visited London." },
          { id: "d", text: "He walked to school." },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  literature: [
    {
      slug: "literary-genres",
      title: "Which of these are literary genres?",
      explanation: "Fantasy and mystery are literary genres. Metaphor and alliteration are literary devices.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Fantasy" },
          { id: "b", text: "Metaphor" },
          { id: "c", text: "Mystery" },
          { id: "d", text: "Alliteration" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "literary-movements",
      title: "Which movements significantly influenced modern literature?",
      explanation: "Modernism and Romanticism are major literary movements. Sonnet and haiku are poetic forms.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Modernism" },
          { id: "b", text: "Sonnet" },
          { id: "c", text: "Romanticism" },
          { id: "d", text: "Haiku" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  arts: [
    {
      slug: "visual-art-forms",
      title: "Which of these are visual art forms?",
      explanation: "Painting and sculpture are visual art forms. Poetry and music are different artistic forms.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Painting" },
          { id: "b", text: "Poetry" },
          { id: "c", text: "Sculpture" },
          { id: "d", text: "Music" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "art-history-techniques",
      title: "Which techniques are associated with Renaissance painting?",
      explanation: "Chiaroscuro and linear perspective were important techniques in Renaissance art. Cubism and collage became prominent in later artistic movements.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Chiaroscuro" },
          { id: "b", text: "Cubism" },
          { id: "c", text: "Linear perspective" },
          { id: "d", text: "Collage" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  music: [
    {
      slug: "musical-instruments",
      title: "Which of these are string instruments?",
      explanation: "The violin and guitar produce sound through vibrating strings. The flute and trumpet are wind instruments.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Violin" },
          { id: "b", text: "Flute" },
          { id: "c", text: "Guitar" },
          { id: "d", text: "Trumpet" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "music-theory-concepts",
      title: "Which terms are fundamental concepts in music theory?",
      explanation: "Harmony and rhythm are fundamental musical concepts. Typography and perspective belong to other fields.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Harmony" },
          { id: "b", text: "Typography" },
          { id: "c", text: "Rhythm" },
          { id: "d", text: "Perspective" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  "movies-tv": [
    {
      slug: "film-production-roles",
      title: "Which people commonly work in film production?",
      explanation: "Directors and cinematographers are key film production roles. Referees and architects generally work in different professions.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Director" },
          { id: "b", text: "Referee" },
          { id: "c", text: "Cinematographer" },
          { id: "d", text: "Architect" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "film-editing-techniques",
      title: "Which are established film editing techniques?",
      explanation: "Cross-cutting and match cuts are established editing techniques. Stop-motion is an animation technique, while method acting is an acting approach.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Cross-cutting" },
          { id: "b", text: "Method acting" },
          { id: "c", text: "Match cut" },
          { id: "d", text: "Stop-motion" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  games: [
    {
      slug: "video-game-genres",
      title: "Which of these are video game genres?",
      explanation: "Role-playing games and strategy games are established video game genres. HDMI and USB are technology standards.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Role-playing game" },
          { id: "b", text: "HDMI" },
          { id: "c", text: "Strategy game" },
          { id: "d", text: "USB" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "game-development-concepts",
      title: "Which concepts are commonly used in game development?",
      explanation: "Game loops and collision detection are fundamental game development concepts. DNS and SMTP are network-related protocols.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Game loop" },
          { id: "b", text: "DNS" },
          { id: "c", text: "Collision detection" },
          { id: "d", text: "SMTP" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  sports: [
    {
      slug: "team-sports",
      title: "Which of these are team sports?",
      explanation: "Football and basketball are team sports. Tennis and swimming can be competed in individually.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Football" },
          { id: "b", text: "Tennis" },
          { id: "c", text: "Basketball" },
          { id: "d", text: "Swimming" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "olympic-sports",
      title: "Which sports are included in the Summer Olympic Games?",
      explanation: "Fencing and artistic gymnastics are Summer Olympic sports. Alpine skiing and ski jumping are Winter Olympic sports.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Fencing" },
          { id: "b", text: "Alpine skiing" },
          { id: "c", text: "Artistic gymnastics" },
          { id: "d", text: "Ski jumping" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  business: [
    {
      slug: "business-departments",
      title: "Which are common departments in a business?",
      explanation: "Marketing and human resources are common business departments. Astronomy and geology are scientific disciplines.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Marketing" },
          { id: "b", text: "Astronomy" },
          { id: "c", text: "Human Resources" },
          { id: "d", text: "Geology" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "business-growth-strategies",
      title: "Which strategies can help a business expand into new markets?",
      explanation: "Market penetration and market development are recognized growth strategies. Depreciation and amortization are accounting concepts.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Market penetration" },
          { id: "b", text: "Depreciation" },
          { id: "c", text: "Market development" },
          { id: "d", text: "Amortization" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  economics: [
    {
      slug: "basic-economic-concepts",
      title: "Which are basic economic concepts?",
      explanation: "Supply and demand are fundamental economic concepts. Photosynthesis and gravity belong to natural sciences.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Supply" },
          { id: "b", text: "Photosynthesis" },
          { id: "c", text: "Demand" },
          { id: "d", text: "Gravity" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "macroeconomic-indicators",
      title: "Which indicators are commonly used to measure economic performance?",
      explanation: "GDP and the unemployment rate are widely used macroeconomic indicators. Blood pressure and atmospheric pressure measure unrelated phenomena.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Gross Domestic Product" },
          { id: "b", text: "Blood pressure" },
          { id: "c", text: "Unemployment rate" },
          { id: "d", text: "Atmospheric pressure" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  programming: [
    {
      slug: "programming-data-types",
      title: "Which are common programming data types?",
      explanation: "Strings and integers are common data types. HTML and CSS are technologies used to structure and style web pages.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "String" },
          { id: "b", text: "HTML" },
          { id: "c", text: "Integer" },
          { id: "d", text: "CSS" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "programming-algorithms",
      title: "Which algorithms are commonly used for searching and sorting?",
      explanation: "Binary search is a searching algorithm, while merge sort is a sorting algorithm. HTTP and JSON are web technologies and data formats.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Binary search" },
          { id: "b", text: "HTTP" },
          { id: "c", text: "Merge sort" },
          { id: "d", text: "JSON" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  health: [
    {
      slug: "human-body-systems",
      title: "Which are major systems of the human body?",
      explanation: "The nervous and digestive systems are major body systems. The solar and electrical systems are not biological systems.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Nervous system" },
          { id: "b", text: "Solar system" },
          { id: "c", text: "Digestive system" },
          { id: "d", text: "Electrical system" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "essential-nutrients",
      title: "Which nutrients are essential for normal body function?",
      explanation: "Vitamins and minerals are essential micronutrients that support normal body functions. Plastic and glass are not nutrients.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Vitamins" },
          { id: "b", text: "Plastic" },
          { id: "c", text: "Minerals" },
          { id: "d", text: "Glass" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  food: [
    {
      slug: "food-groups",
      title: "Which foods are good sources of protein?",
      explanation: "Eggs and lentils are good sources of protein. Olive oil is primarily fat, while sugar is primarily carbohydrate.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Eggs" },
          { id: "b", text: "Olive oil" },
          { id: "c", text: "Lentils" },
          { id: "d", text: "Sugar" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "cooking-techniques",
      title: "Which cooking methods use dry heat?",
      explanation: "Roasting and baking are dry-heat cooking methods. Boiling and steaming use water or steam to transfer heat.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Roasting" },
          { id: "b", text: "Boiling" },
          { id: "c", text: "Baking" },
          { id: "d", text: "Steaming" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  nature: [
    {
      slug: "animal-classification",
      title: "Which of these animals are mammals?",
      explanation: "Dolphins and bats are mammals. Sharks are fish, and frogs are amphibians.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Dolphin" },
          { id: "b", text: "Shark" },
          { id: "c", text: "Bat" },
          { id: "d", text: "Frog" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "ecosystem-interactions",
      title: "Which relationships are recognized ecological interactions?",
      explanation: "Mutualism benefits both participating species, while parasitism benefits one and harms the other. Photosynthesis and erosion are different natural processes.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Mutualism" },
          { id: "b", text: "Photosynthesis" },
          { id: "c", text: "Parasitism" },
          { id: "d", text: "Erosion" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  psychology: [
    {
      slug: "basic-psychology-branches",
      title: "Which are recognized branches of psychology?",
      explanation: "Clinical and developmental psychology are established branches of psychology. Astronomy and botany are separate scientific disciplines.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Clinical psychology" },
          { id: "b", text: "Astronomy" },
          { id: "c", text: "Developmental psychology" },
          { id: "d", text: "Botany" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "cognitive-psychology-processes",
      title: "Which are studied as cognitive processes?",
      explanation: "Memory and attention are major cognitive processes studied in psychology. Photosynthesis and fermentation are biological processes.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Memory" },
          { id: "b", text: "Photosynthesis" },
          { id: "c", text: "Attention" },
          { id: "d", text: "Fermentation" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  philosophy: [
    {
      slug: "major-philosophical-branches",
      title: "Which are major branches of philosophy?",
      explanation: "Ethics and metaphysics are major philosophical branches. Algebra and chemistry are separate academic disciplines.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Ethics" },
          { id: "b", text: "Algebra" },
          { id: "c", text: "Metaphysics" },
          { id: "d", text: "Chemistry" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "philosophical-schools",
      title: "Which are recognized schools of philosophical thought?",
      explanation: "Existentialism and empiricism are established philosophical traditions. Impressionism is an art movement, while Baroque is a cultural and artistic period.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Existentialism" },
          { id: "b", text: "Impressionism" },
          { id: "c", text: "Empiricism" },
          { id: "d", text: "Baroque" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  religion: [
    {
      slug: "major-world-religions",
      title: "Which are widely recognized world religions?",
      explanation: "Buddhism and Hinduism are major world religions. Stoicism is a philosophical school, and humanism is a philosophical and ethical tradition.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Buddhism" },
          { id: "b", text: "Stoicism" },
          { id: "c", text: "Hinduism" },
          { id: "d", text: "Humanism" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "religious-texts",
      title: "Which texts are sacred scriptures in their respective religious traditions?",
      explanation: "The Quran is the central scripture of Islam, and the Vedas are foundational sacred texts in Hindu traditions. The Republic is a philosophical work, and the Iliad is an epic poem.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "The Quran" },
          { id: "b", text: "The Republic" },
          { id: "c", text: "The Vedas" },
          { id: "d", text: "The Iliad" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  travel: [
    {
      slug: "travel-documentation",
      title: "Which documents are commonly needed for international travel?",
      explanation: "A passport and, when required, a visa are common international travel documents. A library card and gym membership are not travel documents.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Passport" },
          { id: "b", text: "Library card" },
          { id: "c", text: "Visa" },
          { id: "d", text: "Gym membership" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "travel-transportation",
      title: "Which transportation options are commonly used for long-distance international travel?",
      explanation: "Commercial flights and international trains are common options for long-distance international travel. Local bicycles and city buses generally serve shorter journeys.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Commercial flights" },
          { id: "b", text: "City buses" },
          { id: "c", text: "International trains" },
          { id: "d", text: "Local bicycles" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  culture: [
    {
      slug: "cultural-traditions",
      title: "Which are examples of cultural traditions?",
      explanation: "Traditional festivals and folk dances are examples of cultural traditions. Calculus and computer programming are academic and technical disciplines.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Traditional festivals" },
          { id: "b", text: "Calculus" },
          { id: "c", text: "Folk dances" },
          { id: "d", text: "Computer programming" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "cultural-heritage",
      title: "Which are recognized forms of intangible cultural heritage?",
      explanation: "Oral traditions and traditional performing arts are forms of intangible cultural heritage. Ancient buildings and archaeological sites are examples of tangible heritage.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Oral traditions" },
          { id: "b", text: "Ancient buildings" },
          { id: "c", text: "Traditional performing arts" },
          { id: "d", text: "Archaeological sites" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  education: [
    {
      slug: "learning-methods",
      title: "Which are common active learning methods?",
      explanation: "Group discussions and problem-based learning encourage active participation. Passive reading and simply listening to a lecture are less interactive approaches.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Group discussions" },
          { id: "b", text: "Passive reading" },
          { id: "c", text: "Problem-based learning" },
          { id: "d", text: "Listening to a lecture without interaction" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "educational-assessment",
      title: "Which are examples of formative assessment?",
      explanation: "Practice quizzes and classroom feedback can help teachers monitor learning during instruction. Final examinations and end-of-course standardized tests are generally summative assessments.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Practice quizzes" },
          { id: "b", text: "Final examinations" },
          { id: "c", text: "Classroom feedback" },
          { id: "d", text: "End-of-course standardized tests" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  "current-events": [
    {
      slug: "international-cooperation",
      title: "Which are examples of international cooperation?",
      explanation: "International climate agreements and cross-border humanitarian aid are examples of countries working together. Domestic traffic regulations and local school schedules are generally national or local matters.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "International climate agreements" },
          { id: "b", text: "Domestic traffic regulations" },
          { id: "c", text: "Cross-border humanitarian aid" },
          { id: "d", text: "Local school schedules" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "global-development-goals",
      title: "Which are among the United Nations Sustainable Development Goals?",
      explanation: "Quality Education and Clean Water and Sanitation are official Sustainable Development Goals. Space Exploration and Global Internet Ownership are not among the 17 goals.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Quality Education" },
          { id: "b", text: "Space Exploration" },
          { id: "c", text: "Clean Water and Sanitation" },
          { id: "d", text: "Global Internet Ownership" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],

  other: [
    {
      slug: "everyday-measurement-tools",
      title: "Which tools are used to measure physical quantities?",
      explanation: "A thermometer measures temperature, and a ruler measures length. A notebook and calendar are not measurement instruments.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Thermometer" },
          { id: "b", text: "Notebook" },
          { id: "c", text: "Ruler" },
          { id: "d", text: "Calendar" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
    {
      slug: "scientific-measurement-units",
      title: "Which are SI base units?",
      explanation: "The kelvin is the SI base unit of thermodynamic temperature, and the ampere is the SI base unit of electric current. The joule and newton are derived SI units.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MULTIPLE_SELECT",
      content: {
        options: [
          { id: "a", text: "Kelvin" },
          { id: "b", text: "Joule" },
          { id: "c", text: "Ampere" },
          { id: "d", text: "Newton" },
        ],
        correctOptionIds: ["a", "c"],
      },
    },
  ],
} as const;