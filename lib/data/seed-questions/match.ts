// src/lib/data/seed-questions/match.ts

export const MATCH_QUESTIONS = {
  "general-knowledge": [
    {
      slug: "countries-and-capitals",
      title: "Match each country with its capital.",
      explanation: "Paris is the capital of France, Tokyo of Japan, Cairo of Egypt, and Ottawa of Canada.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "France", right: "Paris" },
          { id: "b", left: "Japan", right: "Tokyo" },
          { id: "c", left: "Egypt", right: "Cairo" },
          { id: "d", left: "Canada", right: "Ottawa" },
        ],
      },
    },
    {
      slug: "famous-inventions-and-inventors",
      title: "Match each invention with its associated inventor.",
      explanation: "Alexander Graham Bell is associated with the telephone, Thomas Edison with the phonograph, Johannes Gutenberg with the printing press, and James Watt with improvements to the steam engine.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Telephone", right: "Alexander Graham Bell" },
          { id: "b", left: "Phonograph", right: "Thomas Edison" },
          { id: "c", left: "Printing press", right: "Johannes Gutenberg" },
          { id: "d", left: "Improved steam engine", right: "James Watt" },
        ],
      },
    },
  ],

  science: [
    {
      slug: "animals-and-classification",
      title: "Match each animal with its biological group.",
      explanation: "Frogs are amphibians, eagles are birds, sharks are fish, and snakes are reptiles.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Frog", right: "Amphibian" },
          { id: "b", left: "Eagle", right: "Bird" },
          { id: "c", left: "Shark", right: "Fish" },
          { id: "d", left: "Snake", right: "Reptile" },
        ],
      },
    },
    {
      slug: "scientific-elements-and-symbols",
      title: "Match each chemical element with its symbol.",
      explanation: "Sodium is Na, potassium is K, iron is Fe, and silver is Ag.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Sodium", right: "Na" },
          { id: "b", left: "Potassium", right: "K" },
          { id: "c", left: "Iron", right: "Fe" },
          { id: "d", left: "Silver", right: "Ag" },
        ],
      },
    },
  ],

  technology: [
    {
      slug: "computer-components-and-functions",
      title: "Match each computer component with its primary function.",
      explanation: "The CPU processes instructions, RAM stores temporary working data, the SSD provides persistent storage, and the GPU handles graphics processing.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "CPU", right: "Processes instructions" },
          { id: "b", left: "RAM", right: "Temporary working memory" },
          { id: "c", left: "SSD", right: "Persistent data storage" },
          { id: "d", left: "GPU", right: "Graphics processing" },
        ],
      },
    },
    {
      slug: "network-protocols-and-purposes",
      title: "Match each network protocol with its primary purpose.",
      explanation: "DNS resolves domain names, DHCP assigns network configuration, SMTP sends email, and SSH provides secure remote access.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "DNS", right: "Resolves domain names" },
          { id: "b", left: "DHCP", right: "Assigns network configuration" },
          { id: "c", left: "SMTP", right: "Sends email" },
          { id: "d", left: "SSH", right: "Secure remote access" },
        ],
      },
    },
  ],

  mathematics: [
    {
      slug: "shapes-and-properties",
      title: "Match each geometric shape with its number of sides.",
      explanation: "A triangle has three sides, a square has four, a pentagon has five, and a hexagon has six.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Triangle", right: "3 sides" },
          { id: "b", left: "Square", right: "4 sides" },
          { id: "c", left: "Pentagon", right: "5 sides" },
          { id: "d", left: "Hexagon", right: "6 sides" },
        ],
      },
    },
    {
      slug: "mathematical-functions-and-derivatives",
      title: "Match each function with its derivative.",
      explanation: "The derivative of x² is 2x, x³ is 3x², sin(x) is cos(x), and eˣ is eˣ.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "x²", right: "2x" },
          { id: "b", left: "x³", right: "3x²" },
          { id: "c", left: "sin(x)", right: "cos(x)" },
          { id: "d", left: "eˣ", right: "eˣ" },
        ],
      },
    },
  ],

  history: [
    {
      slug: "historical-civilizations-and-regions",
      title: "Match each ancient civilization with its historical region.",
      explanation: "Ancient Egypt developed along the Nile, Mesopotamia between the Tigris and Euphrates, the Indus Valley in South Asia, and ancient Greece around the Mediterranean.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Ancient Egypt", right: "Nile Valley" },
          { id: "b", left: "Mesopotamia", right: "Tigris and Euphrates region" },
          { id: "c", left: "Indus Valley Civilization", right: "South Asia" },
          { id: "d", left: "Ancient Greece", right: "Mediterranean region" },
        ],
      },
    },
    {
      slug: "historical-events-and-years",
      title: "Match each historical event with its year.",
      explanation: "The French Revolution began in 1789, World War I began in 1914, World War II began in 1939, and the Berlin Wall fell in 1989.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "French Revolution begins", right: "1789" },
          { id: "b", left: "World War I begins", right: "1914" },
          { id: "c", left: "World War II begins", right: "1939" },
          { id: "d", left: "Berlin Wall falls", right: "1989" },
        ],
      },
    },
  ],

  geography: [
    {
      slug: "continents-and-landmarks",
      title: "Match each famous landmark with its continent.",
      explanation: "The Pyramids of Giza are in Africa, the Eiffel Tower is in Europe, the Great Wall is in Asia, and Machu Picchu is in South America.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Pyramids of Giza", right: "Africa" },
          { id: "b", left: "Eiffel Tower", right: "Europe" },
          { id: "c", left: "Great Wall of China", right: "Asia" },
          { id: "d", left: "Machu Picchu", right: "South America" },
        ],
      },
    },
    {
      slug: "mountains-and-locations",
      title: "Match each mountain range or peak with its location.",
      explanation: "The Andes extend along western South America, the Himalayas are in Asia, the Alps are in Europe, and Mount Kilimanjaro is in Tanzania, Africa.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Andes", right: "South America" },
          { id: "b", left: "Himalayas", right: "Asia" },
          { id: "c", left: "Alps", right: "Europe" },
          { id: "d", left: "Mount Kilimanjaro", right: "Tanzania" },
        ],
      },
    },
  ],

  language: [
    {
      slug: "words-and-parts-of-speech",
      title: "Match each word with its part of speech.",
      explanation: "Run is a verb, beautiful is an adjective, quickly is an adverb, and happiness is a noun.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Run", right: "Verb" },
          { id: "b", left: "Beautiful", right: "Adjective" },
          { id: "c", left: "Quickly", right: "Adverb" },
          { id: "d", left: "Happiness", right: "Noun" },
        ],
      },
    },
    {
      slug: "grammatical-tenses-and-examples",
      title: "Match each grammatical tense with its example.",
      explanation: "Simple past describes a completed past action, present continuous describes an ongoing action, present perfect connects past actions to the present, and future simple describes a future action.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Simple past", right: "She visited Cairo yesterday." },
          { id: "b", left: "Present continuous", right: "They are studying now." },
          { id: "c", left: "Present perfect", right: "I have finished my work." },
          { id: "d", left: "Future simple", right: "He will travel tomorrow." },
        ],
      },
    },
  ],

  literature: [
    {
      slug: "literary-works-and-authors",
      title: "Match each literary work with its author.",
      explanation: "Pride and Prejudice was written by Jane Austen, Hamlet by William Shakespeare, The Great Gatsby by F. Scott Fitzgerald, and Don Quixote by Miguel de Cervantes.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Pride and Prejudice", right: "Jane Austen" },
          { id: "b", left: "Hamlet", right: "William Shakespeare" },
          { id: "c", left: "The Great Gatsby", right: "F. Scott Fitzgerald" },
          { id: "d", left: "Don Quixote", right: "Miguel de Cervantes" },
        ],
      },
    },
    {
      slug: "literary-terms-and-definitions",
      title: "Match each literary device with its definition.",
      explanation: "Anaphora repeats words at the beginning of successive clauses, irony contrasts expectation with reality, allegory uses symbolic representation, and personification gives human qualities to nonhuman things.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Anaphora", right: "Repetition at the beginning of successive clauses" },
          { id: "b", left: "Irony", right: "A contrast between expectation and reality" },
          { id: "c", left: "Allegory", right: "A narrative with symbolic meaning" },
          { id: "d", left: "Personification", right: "Giving human qualities to nonhuman things" },
        ],
      },
    },
  ],

  arts: [
    {
      slug: "artists-and-artworks",
      title: "Match each artist with a famous artwork.",
      explanation: "Leonardo da Vinci painted the Mona Lisa, Vincent van Gogh painted The Starry Night, Edvard Munch created The Scream, and Johannes Vermeer painted Girl with a Pearl Earring.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Leonardo da Vinci", right: "Mona Lisa" },
          { id: "b", left: "Vincent van Gogh", right: "The Starry Night" },
          { id: "c", left: "Edvard Munch", right: "The Scream" },
          { id: "d", left: "Johannes Vermeer", right: "Girl with a Pearl Earring" },
        ],
      },
    },
    {
      slug: "art-movements-and-characteristics",
      title: "Match each art movement with its characteristic.",
      explanation: "Impressionism emphasizes light and fleeting visual effects, Cubism breaks subjects into geometric forms, Surrealism explores dreamlike imagery, and Expressionism emphasizes subjective emotion.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Impressionism", right: "Light and fleeting visual effects" },
          { id: "b", left: "Cubism", right: "Geometric fragmentation of forms" },
          { id: "c", left: "Surrealism", right: "Dreamlike and unconscious imagery" },
          { id: "d", left: "Expressionism", right: "Emotional and subjective representation" },
        ],
      },
    },
  ],

  music: [
    {
      slug: "instruments-and-families",
      title: "Match each musical instrument with its instrument family.",
      explanation: "The violin belongs to the string family, the flute to woodwind, the trumpet to brass, and the snare drum to percussion.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Violin", right: "String" },
          { id: "b", left: "Flute", right: "Woodwind" },
          { id: "c", left: "Trumpet", right: "Brass" },
          { id: "d", left: "Snare drum", right: "Percussion" },
        ],
      },
    },
    {
      slug: "music-theory-terms",
      title: "Match each music theory term with its meaning.",
      explanation: "Tempo describes speed, dynamics describe loudness, timbre describes sound quality, and harmony describes the combination of simultaneous musical notes.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Tempo", right: "Speed of the music" },
          { id: "b", left: "Dynamics", right: "Loudness and softness" },
          { id: "c", left: "Timbre", right: "Quality or character of a sound" },
          { id: "d", left: "Harmony", right: "Combination of simultaneous notes" },
        ],
      },
    },
  ],

  "movies-tv": [
    {
      slug: "movies-and-directors",
      title: "Match each movie with its director.",
      explanation: "Steven Spielberg directed Jaws, Christopher Nolan directed Inception, James Cameron directed Titanic, and Greta Gerwig directed Barbie.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Jaws", right: "Steven Spielberg" },
          { id: "b", left: "Inception", right: "Christopher Nolan" },
          { id: "c", left: "Titanic", right: "James Cameron" },
          { id: "d", left: "Barbie", right: "Greta Gerwig" },
        ],
      },
    },
    {
      slug: "film-techniques-and-definitions",
      title: "Match each filmmaking technique with its definition.",
      explanation: "A long take is a continuous shot, a montage combines shots to compress time or convey ideas, a match cut connects visually or conceptually related shots, and a jump cut creates a noticeable break in continuity.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Long take", right: "A continuous shot without an edit" },
          { id: "b", left: "Montage", right: "A sequence of edited shots conveying ideas or time" },
          { id: "c", left: "Match cut", right: "A cut connecting visually or conceptually related shots" },
          { id: "d", left: "Jump cut", right: "An edit that creates a noticeable continuity break" },
        ],
      },
    },
  ],

  games: [
    {
      slug: "gaming-platforms-and-companies",
      title: "Match each gaming platform with its manufacturer.",
      explanation: "PlayStation is made by Sony, Xbox by Microsoft, Nintendo Switch by Nintendo, and Steam Deck by Valve.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "PlayStation", right: "Sony" },
          { id: "b", left: "Xbox", right: "Microsoft" },
          { id: "c", left: "Nintendo Switch", right: "Nintendo" },
          { id: "d", left: "Steam Deck", right: "Valve" },
        ],
      },
    },
    {
      slug: "game-development-terms",
      title: "Match each game development concept with its definition.",
      explanation: "A game engine provides development tools, a physics engine simulates physical behavior, an NPC is a non-player character, and a hitbox defines an area used for collision or interaction detection.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Game engine", right: "Software framework for developing games" },
          { id: "b", left: "Physics engine", right: "Simulates physical interactions" },
          { id: "c", left: "NPC", right: "Non-player character" },
          { id: "d", left: "Hitbox", right: "Area used for collision or interaction detection" },
        ],
      },
    },
  ],

  sports: [
    {
      slug: "sports-and-equipment",
      title: "Match each sport with its equipment.",
      explanation: "Tennis uses a racket, football uses a ball, boxing uses gloves, and hockey uses a stick.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Tennis", right: "Racket" },
          { id: "b", left: "Football", right: "Ball" },
          { id: "c", left: "Boxing", right: "Gloves" },
          { id: "d", left: "Hockey", right: "Stick" },
        ],
      },
    },
    {
      slug: "sports-and-competition-formats",
      title: "Match each competition format with its description.",
      explanation: "A knockout tournament eliminates teams after a loss, a round-robin format has participants play one another, a league table ranks teams by accumulated results, and a relay race involves successive team members completing parts of a race.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Knockout tournament", right: "Participants are eliminated after a loss" },
          { id: "b", left: "Round-robin", right: "Each participant plays every other participant" },
          { id: "c", left: "League table", right: "Teams are ranked by accumulated results" },
          { id: "d", left: "Relay race", right: "Team members complete successive race sections" },
        ],
      },
    },
  ],

  business: [
    {
      slug: "business-roles-and-responsibilities",
      title: "Match each business role with its main responsibility.",
      explanation: "A CEO leads the organization, a CFO oversees finances, a CTO leads technology, and a CMO oversees marketing.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "CEO", right: "Leads the organization" },
          { id: "b", left: "CFO", right: "Oversees financial management" },
          { id: "c", left: "CTO", right: "Leads technology strategy" },
          { id: "d", left: "CMO", right: "Oversees marketing strategy" },
        ],
      },
    },
    {
      slug: "business-models-and-revenue",
      title: "Match each business model with its revenue approach.",
      explanation: "Subscription businesses charge recurring fees, freemium businesses offer basic services free with paid upgrades, marketplaces connect buyers and sellers, and advertising models generate revenue by selling advertising space or attention.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Subscription model", right: "Recurring customer payments" },
          { id: "b", left: "Freemium model", right: "Free basic service with paid upgrades" },
          { id: "c", left: "Marketplace model", right: "Connects buyers and sellers" },
          { id: "d", left: "Advertising model", right: "Revenue from advertisements" },
        ],
      },
    },
  ],

  economics: [
    {
      slug: "economic-terms-and-definitions",
      title: "Match each economic term with its definition.",
      explanation: "Inflation is a general rise in prices, unemployment refers to people without work who are seeking employment, GDP measures economic output, and interest is the cost of borrowing money or the return on lending.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Inflation", right: "General rise in prices" },
          { id: "b", left: "Unemployment", right: "People without work who are seeking employment" },
          { id: "c", left: "GDP", right: "Value of final goods and services produced" },
          { id: "d", left: "Interest", right: "Cost of borrowing or return on lending" },
        ],
      },
    },
    {
      slug: "market-structures-and-characteristics",
      title: "Match each market structure with its main characteristic.",
      explanation: "Perfect competition has many firms and homogeneous products, monopoly has a single seller, oligopoly has a few dominant firms, and monopolistic competition involves many firms selling differentiated products.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Perfect competition", right: "Many firms selling homogeneous products" },
          { id: "b", left: "Monopoly", right: "One dominant seller" },
          { id: "c", left: "Oligopoly", right: "A small number of dominant firms" },
          { id: "d", left: "Monopolistic competition", right: "Many firms selling differentiated products" },
        ],
      },
    },
  ],

  programming: [
    {
      slug: "programming-languages-and-uses",
      title: "Match each programming language with a common use.",
      explanation: "JavaScript is widely used in web development, Python in automation and data science, SQL in database queries, and Swift in Apple platform development.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "JavaScript", right: "Web development" },
          { id: "b", left: "Python", right: "Automation and data science" },
          { id: "c", left: "SQL", right: "Database queries" },
          { id: "d", left: "Swift", right: "Apple platform development" },
        ],
      },
    },
    {
      slug: "data-structures-and-characteristics",
      title: "Match each data structure with its characteristic.",
      explanation: "A stack follows last-in, first-out, a queue follows first-in, first-out, a hash table maps keys to values, and a tree organizes data hierarchically.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Stack", right: "Last in, first out" },
          { id: "b", left: "Queue", right: "First in, first out" },
          { id: "c", left: "Hash table", right: "Maps keys to values" },
          { id: "d", left: "Tree", right: "Hierarchical data structure" },
        ],
      },
    },
  ],

  health: [
    {
      slug: "body-organs-and-functions",
      title: "Match each body organ with its primary function.",
      explanation: "The heart pumps blood, the lungs exchange gases, the kidneys filter blood and produce urine, and the stomach helps digest food.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Heart", right: "Pumps blood" },
          { id: "b", left: "Lungs", right: "Exchange oxygen and carbon dioxide" },
          { id: "c", left: "Kidneys", right: "Filter blood and produce urine" },
          { id: "d", left: "Stomach", right: "Helps digest food" },
        ],
      },
    },
    {
      slug: "vitamins-and-functions",
      title: "Match each vitamin with an important function.",
      explanation: "Vitamin A supports vision, vitamin C supports collagen formation, vitamin D helps regulate calcium absorption, and vitamin K is important for blood clotting.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Vitamin A", right: "Supports normal vision" },
          { id: "b", left: "Vitamin C", right: "Supports collagen formation" },
          { id: "c", left: "Vitamin D", right: "Helps regulate calcium absorption" },
          { id: "d", left: "Vitamin K", right: "Supports normal blood clotting" },
        ],
      },
    },
  ],

  food: [
    {
      slug: "foods-and-origins",
      title: "Match each food with its commonly associated country of origin.",
      explanation: "Sushi is associated with Japan, pizza with Italy, tacos with Mexico, and croissants with France.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Sushi", right: "Japan" },
          { id: "b", left: "Pizza", right: "Italy" },
          { id: "c", left: "Tacos", right: "Mexico" },
          { id: "d", left: "Croissant", right: "France" },
        ],
      },
    },
    {
      slug: "cooking-methods-and-descriptions",
      title: "Match each cooking method with its description.",
      explanation: "Braising combines browning with slow cooking in liquid, poaching gently cooks food in liquid, sautéing cooks quickly in a small amount of fat, and blanching briefly cooks food before cooling it rapidly.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Braising", right: "Slow cooking with a small amount of liquid" },
          { id: "b", left: "Poaching", right: "Gentle cooking in liquid" },
          { id: "c", left: "Sautéing", right: "Quick cooking in a small amount of fat" },
          { id: "d", left: "Blanching", right: "Brief cooking followed by rapid cooling" },
        ],
      },
    },
  ],

  nature: [
    {
      slug: "animals-and-habitats",
      title: "Match each animal with its typical habitat.",
      explanation: "Camels are adapted to deserts, polar bears to Arctic environments, penguins to Southern Hemisphere regions, and orangutans to tropical forests of Southeast Asia.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Camel", right: "Desert" },
          { id: "b", left: "Polar bear", right: "Arctic environment" },
          { id: "c", left: "Penguin", right: "Southern Hemisphere coastal regions" },
          { id: "d", left: "Orangutan", right: "Tropical rainforest" },
        ],
      },
    },
    {
      slug: "ecological-terms-and-definitions",
      title: "Match each ecological term with its definition.",
      explanation: "Biodiversity describes variety of life, an ecosystem includes organisms and their environment, a food web connects feeding relationships, and a keystone species has a disproportionately large ecological impact.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Biodiversity", right: "Variety of living organisms" },
          { id: "b", left: "Ecosystem", right: "Organisms interacting with their environment" },
          { id: "c", left: "Food web", right: "Network of feeding relationships" },
          { id: "d", left: "Keystone species", right: "Species with a disproportionately large ecological impact" },
        ],
      },
    },
  ],

  psychology: [
    {
      slug: "emotions-and-descriptions",
      title: "Match each emotion with its description.",
      explanation: "Joy is associated with happiness, fear with perceived danger, sadness with loss or disappointment, and anger with frustration or perceived injustice.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Joy", right: "Feeling of happiness" },
          { id: "b", left: "Fear", right: "Response to perceived danger" },
          { id: "c", left: "Sadness", right: "Response often associated with loss" },
          { id: "d", left: "Anger", right: "Response often associated with frustration" },
        ],
      },
    },
    {
      slug: "psychological-theories-and-theorists",
      title: "Match each psychological theory or concept with its associated theorist.",
      explanation: "Classical conditioning is associated with Ivan Pavlov, the hierarchy of needs with Abraham Maslow, cognitive development theory with Jean Piaget, and psychoanalysis with Sigmund Freud.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Classical conditioning", right: "Ivan Pavlov" },
          { id: "b", left: "Hierarchy of needs", right: "Abraham Maslow" },
          { id: "c", left: "Cognitive development theory", right: "Jean Piaget" },
          { id: "d", left: "Psychoanalysis", right: "Sigmund Freud" },
        ],
      },
    },
  ],

  philosophy: [
    {
      slug: "philosophers-and-ideas",
      title: "Match each philosopher with an associated idea.",
      explanation: "Socrates is associated with the Socratic method, Plato with the theory of Forms, Aristotle with systematic logic, and René Descartes with the statement 'I think, therefore I am.'",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Socrates", right: "Socratic method" },
          { id: "b", left: "Plato", right: "Theory of Forms" },
          { id: "c", left: "Aristotle", right: "Systematic logic" },
          { id: "d", left: "René Descartes", right: "I think, therefore I am" },
        ],
      },
    },
    {
      slug: "philosophical-branches-and-questions",
      title: "Match each branch of philosophy with the question it investigates.",
      explanation: "Epistemology examines knowledge, metaphysics investigates fundamental reality, ethics studies moral questions, and aesthetics examines beauty and art.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Epistemology", right: "What can we know?" },
          { id: "b", left: "Metaphysics", right: "What is fundamentally real?" },
          { id: "c", left: "Ethics", right: "What makes an action right or wrong?" },
          { id: "d", left: "Aesthetics", right: "What is beauty and artistic value?" },
        ],
      },
    },
  ],

  religion: [
    {
      slug: "religions-and-sacred-texts",
      title: "Match each religious tradition with its sacred text.",
      explanation: "The Quran is central to Islam, the Bible to Christianity, the Torah to Judaism, and the Vedas are foundational sacred texts in Hindu traditions.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Islam", right: "Quran" },
          { id: "b", left: "Christianity", right: "Bible" },
          { id: "c", left: "Judaism", right: "Torah" },
          { id: "d", left: "Hindu traditions", right: "Vedas" },
        ],
      },
    },
    {
      slug: "religious-terms-and-meanings",
      title: "Match each religious term with its meaning.",
      explanation: "Zakat is obligatory charity in Islam, Sawm refers to fasting, Hajj is pilgrimage to Mecca, and Salah refers to the prescribed daily prayers.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Zakat", right: "Obligatory charity" },
          { id: "b", left: "Sawm", right: "Fasting" },
          { id: "c", left: "Hajj", right: "Pilgrimage to Mecca" },
          { id: "d", left: "Salah", right: "Prescribed daily prayers" },
        ],
      },
    },
  ],

  travel: [
    {
      slug: "travel-destinations-and-countries",
      title: "Match each famous travel destination with its country.",
      explanation: "Kyoto is in Japan, Petra is in Jordan, the Colosseum is in Italy, and the Pyramids of Giza are in Egypt.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Kyoto", right: "Japan" },
          { id: "b", left: "Petra", right: "Jordan" },
          { id: "c", left: "Colosseum", right: "Italy" },
          { id: "d", left: "Pyramids of Giza", right: "Egypt" },
        ],
      },
    },
    {
      slug: "travel-terms-and-definitions",
      title: "Match each travel term with its meaning.",
      explanation: "An itinerary outlines a trip, a layover is a stop between flight segments, a round trip includes outbound and return travel, and a travel visa grants permission to enter a country under specified conditions.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Itinerary", right: "Planned schedule of a trip" },
          { id: "b", left: "Layover", right: "Stop between flight segments" },
          { id: "c", left: "Round trip", right: "Journey that includes outbound and return travel" },
          { id: "d", left: "Travel visa", right: "Authorization to enter a country under specified conditions" },
        ],
      },
    },
  ],

  culture: [
    {
      slug: "cultural-celebrations-and-countries",
      title: "Match each celebration with its commonly associated country.",
      explanation: "Carnival in Rio de Janeiro is associated with Brazil, Diwali is widely celebrated in India, Hanami is a Japanese cherry blossom tradition, and Oktoberfest originated in Germany.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Rio Carnival", right: "Brazil" },
          { id: "b", left: "Diwali", right: "India" },
          { id: "c", left: "Hanami", right: "Japan" },
          { id: "d", left: "Oktoberfest", right: "Germany" },
        ],
      },
    },
    {
      slug: "cultural-heritage-terms",
      title: "Match each cultural heritage term with its meaning.",
      explanation: "Tangible heritage includes physical objects and places, intangible heritage includes living traditions and practices, cultural preservation protects heritage, and cultural transmission passes traditions between generations.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Tangible heritage", right: "Physical cultural objects and places" },
          { id: "b", left: "Intangible heritage", right: "Living traditions and practices" },
          { id: "c", left: "Cultural preservation", right: "Protecting cultural heritage" },
          { id: "d", left: "Cultural transmission", right: "Passing traditions between generations" },
        ],
      },
    },
  ],

  education: [
    {
      slug: "school-subjects-and-topics",
      title: "Match each school subject with what it studies.",
      explanation: "Biology studies living organisms, geography studies Earth and places, history studies the past, and mathematics studies numbers and structures.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Biology", right: "Living organisms" },
          { id: "b", left: "Geography", right: "Earth and places" },
          { id: "c", left: "History", right: "The past" },
          { id: "d", left: "Mathematics", right: "Numbers and structures" },
        ],
      },
    },
    {
      slug: "educational-theories-and-theorists",
      title: "Match each educational theory or concept with its associated theorist.",
      explanation: "Constructivism is associated with Jean Piaget, social learning theory with Albert Bandura, the zone of proximal development with Lev Vygotsky, and the taxonomy of educational objectives with Benjamin Bloom.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Constructivist theory", right: "Jean Piaget" },
          { id: "b", left: "Social learning theory", right: "Albert Bandura" },
          { id: "c", left: "Zone of proximal development", right: "Lev Vygotsky" },
          { id: "d", left: "Taxonomy of educational objectives", right: "Benjamin Bloom" },
        ],
      },
    },
  ],

  "current-events": [
    {
      slug: "international-organizations-and-headquarters",
      title: "Match each international organization with its headquarters city.",
      explanation: "The United Nations is headquartered in New York City, the World Health Organization in Geneva, UNESCO in Paris, and the African Union in Addis Ababa.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "United Nations", right: "New York City" },
          { id: "b", left: "World Health Organization", right: "Geneva" },
          { id: "c", left: "UNESCO", right: "Paris" },
          { id: "d", left: "African Union", right: "Addis Ababa" },
        ],
      },
    },
    {
      slug: "global-development-goals-and-focus",
      title: "Match each Sustainable Development Goal with its focus.",
      explanation: "SDG 1 addresses poverty, SDG 4 focuses on education, SDG 13 addresses climate action, and SDG 16 promotes peace, justice, and strong institutions.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "SDG 1", right: "No Poverty" },
          { id: "b", left: "SDG 4", right: "Quality Education" },
          { id: "c", left: "SDG 13", right: "Climate Action" },
          { id: "d", left: "SDG 16", right: "Peace, Justice and Strong Institutions" },
        ],
      },
    },
  ],

  other: [
    {
      slug: "measurement-tools-and-quantities",
      title: "Match each measuring instrument with the quantity it measures.",
      explanation: "A thermometer measures temperature, a stopwatch measures time, a scale measures mass or weight depending on its design, and a ruler measures length.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Thermometer", right: "Temperature" },
          { id: "b", left: "Stopwatch", right: "Time" },
          { id: "c", left: "Scale", right: "Mass or weight" },
          { id: "d", left: "Ruler", right: "Length" },
        ],
      },
    },
    {
      slug: "project-management-terms",
      title: "Match each project management term with its definition.",
      explanation: "A milestone marks a significant event, a deliverable is a produced result, a dependency describes a relationship between tasks, and a risk is an uncertain event that may affect project objectives.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "MATCH",
      content: {
        pairs: [
          { id: "a", left: "Milestone", right: "Significant point or event in a project" },
          { id: "b", left: "Deliverable", right: "Specific output produced by a project" },
          { id: "c", left: "Dependency", right: "Relationship between tasks that affects their order" },
          { id: "d", left: "Risk", right: "Uncertain event that may affect project objectives" },
        ],
      },
    },
  ],
} ;