export const FILL_BLANK_QUESTIONS = {
  "general-knowledge": [
    {
      slug: "largest-planet-and-its-star",
      title: "Complete the Solar System Facts",
      explanation: "Jupiter is the largest planet in our Solar System, and the Sun is its central star.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The largest planet in our Solar System is " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", and the star at its center is the " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["Jupiter"], placeholder: "Planet name" },
          { id: "a2", answers: ["Sun", "the Sun"], placeholder: "Star name" },
        ],
      },
    },
    {
      slug: "world-famous-landmarks",
      title: "Complete the Landmark Facts",
      explanation: "The Eiffel Tower is in Paris, while the Great Wall is located in China.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The Eiffel Tower is located in " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the Great Wall is located in " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["Paris"], placeholder: "City" },
          { id: "a2", answers: ["China"], placeholder: "Country" },
        ],
      },
    },
  ],

  science: [
    {
      slug: "basic-cell-structures",
      title: "Complete the Cell Biology Facts",
      explanation: "The nucleus contains most of a cell's genetic material, while mitochondria produce much of its usable energy.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The cell structure that contains most genetic material is the " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: " produce most of the energy used by the cell." },
        ],
        blanks: [
          { id: "a1", answers: ["nucleus", "the nucleus"], placeholder: "Cell structure" },
          { id: "a2", answers: ["mitochondria"], placeholder: "Cell structures" },
        ],
      },
    },
    {
      slug: "states-of-matter",
      title: "Complete the States of Matter",
      explanation: "Matter commonly exists as solid, liquid, and gas. Melting changes a solid into a liquid, while evaporation changes a liquid into a gas.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The process that changes a solid into a liquid is called " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the process that changes a liquid into a gas is called " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["melting"], placeholder: "Change of state" },
          { id: "a2", answers: ["evaporation"], placeholder: "Change of state" },
        ],
      },
    },
  ],

  technology: [
    {
      slug: "computer-hardware-basics",
      title: "Complete the Computer Hardware Facts",
      explanation: "The CPU processes instructions, while RAM temporarily stores data that programs are actively using.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: " processes instructions, while " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: " temporarily stores data currently in use." },
        ],
        blanks: [
          { id: "a1", answers: ["CPU", "Central Processing Unit"], placeholder: "Computer component" },
          { id: "a2", answers: ["RAM", "Random Access Memory"], placeholder: "Memory type" },
        ],
      },
    },
    {
      slug: "internet-and-web-technologies",
      title: "Complete the Web Technology Facts",
      explanation: "HTTP is a protocol used for transferring web resources, and DNS translates domain names into IP addresses.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The protocol commonly used to transfer web resources is " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: " translates domain names into IP addresses." },
        ],
        blanks: [
          { id: "a1", answers: ["HTTP", "Hypertext Transfer Protocol"], placeholder: "Protocol" },
          { id: "a2", answers: ["DNS", "Domain Name System"], placeholder: "Internet system" },
        ],
      },
    },
  ],

  mathematics: [
    {
      slug: "basic-arithmetic",
      title: "Complete the Arithmetic",
      explanation: "Multiplication is performed before addition in the standard order of operations. Therefore, 3 × 4 + 2 equals 14.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "In the expression 3 × 4 + 2, multiplication is performed before " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ". The final result is " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["addition"], placeholder: "Operation" },
          { id: "a2", answers: ["14"], placeholder: "Answer" },
        ],
      },
    },
    {
      slug: "geometry-circle-formulas",
      title: "Complete the Circle Formulas",
      explanation: "The circumference of a circle is 2πr, and its area is πr², where r is the radius.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The formula for the circumference of a circle is " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while its area is calculated using " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["2πr", "2*pi*r", "2 pi r"], placeholder: "Formula" },
          { id: "a2", answers: ["πr²", "pi*r^2", "pi r squared"], placeholder: "Formula" },
        ],
      },
    },
  ],

  history: [
    {
      slug: "ancient-civilizations",
      title: "Complete the Ancient History Facts",
      explanation: "Ancient Egyptian civilization developed along the Nile River, while Mesopotamian civilizations developed between the Tigris and Euphrates rivers.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "Ancient Egyptian civilization developed along the " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: " River, while Mesopotamia developed between the " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: " and Euphrates rivers." },
        ],
        blanks: [
          { id: "a1", answers: ["Nile", "Nile River"], placeholder: "River" },
          { id: "a2", answers: ["Tigris"], placeholder: "River" },
        ],
      },
    },
    {
      slug: "renaissance-history",
      title: "Complete the Renaissance Facts",
      explanation: "The Renaissance began in Italy and later spread across Europe. Leonardo da Vinci was one of its most influential artists and thinkers.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The Renaissance began in " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", and one of its most famous artists was " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["Italy"], placeholder: "Country" },
          { id: "a2", answers: ["Leonardo da Vinci"], placeholder: "Artist" },
        ],
      },
    },
  ],

  geography: [
    {
      slug: "continents-and-oceans",
      title: "Complete the Geography Facts",
      explanation: "Asia is the largest continent by area, and the Pacific Ocean is the largest ocean.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The largest continent by area is " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", and the largest ocean is the " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["Asia"], placeholder: "Continent" },
          { id: "a2", answers: ["Pacific", "Pacific Ocean"], placeholder: "Ocean" },
        ],
      },
    },
    {
      slug: "major-world-rivers",
      title: "Complete the River Geography Facts",
      explanation: "The Amazon River flows through South America, while the Nile flows through northeastern Africa.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The Amazon River is located in " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the Nile River flows through " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: " Africa." },
        ],
        blanks: [
          { id: "a1", answers: ["South America"], placeholder: "Continent" },
          { id: "a2", answers: ["northeastern", "north-eastern"], placeholder: "Direction" },
        ],
      },
    },
  ],

  language: [
    {
      slug: "parts-of-speech",
      title: "Complete the Grammar Facts",
      explanation: "A noun names a person, place, thing, or idea. A verb expresses an action or state.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "A word that names a person, place, thing, or idea is a " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while a word that expresses an action or state is a " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["noun"], placeholder: "Part of speech" },
          { id: "a2", answers: ["verb"], placeholder: "Part of speech" },
        ],
      },
    },
    {
      slug: "english-sentence-structure",
      title: "Complete the Sentence Structure Facts",
      explanation: "A subject identifies who or what the sentence is about. A predicate tells what the subject does or is.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The part of a sentence that identifies who or what it is about is the " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the part that tells something about the subject is the " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["subject"], placeholder: "Sentence part" },
          { id: "a2", answers: ["predicate"], placeholder: "Sentence part" },
        ],
      },
    },
  ],

  literature: [
    {
      slug: "famous-literary-works",
      title: "Complete the Literature Facts",
      explanation: "William Shakespeare wrote Hamlet, while George Orwell wrote the novel 1984.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The playwright who wrote Hamlet was " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the author of 1984 was " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["William Shakespeare", "Shakespeare"], placeholder: "Author" },
          { id: "a2", answers: ["George Orwell", "Orwell"], placeholder: "Author" },
        ],
      },
    },
    {
      slug: "literary-elements",
      title: "Complete the Literary Elements",
      explanation: "The protagonist is the central character, while the antagonist opposes the protagonist or their goals.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The central character in a story is called the " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the character or force opposing them is the " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["protagonist"], placeholder: "Literary term" },
          { id: "a2", answers: ["antagonist"], placeholder: "Literary term" },
        ],
      },
    },
  ],

  arts: [
    {
      slug: "primary-colors",
      title: "Complete the Color Theory Facts",
      explanation: "In traditional painting, red, yellow, and blue are commonly taught as the primary colors.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "In traditional painting, two primary colors are " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: " and " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["red"], placeholder: "Color" },
          { id: "a2", answers: ["yellow"], placeholder: "Color" },
        ],
      },
    },
    {
      slug: "art-techniques",
      title: "Complete the Art Technique Facts",
      explanation: "A sculpture is a three-dimensional artwork, while a fresco is a painting technique involving pigment applied to wet plaster.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "A three-dimensional work of art is called a " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while a painting made on wet plaster is known as a " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["sculpture"], placeholder: "Art form" },
          { id: "a2", answers: ["fresco"], placeholder: "Painting technique" },
        ],
      },
    },
  ],

  music: [
    {
      slug: "musical-instruments",
      title: "Complete the Instrument Facts",
      explanation: "A piano is a keyboard instrument, while a violin is a string instrument.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The piano is commonly classified as a " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: " instrument, while the violin is a " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: " instrument." },
        ],
        blanks: [
          { id: "a1", answers: ["keyboard"], placeholder: "Instrument family" },
          { id: "a2", answers: ["string"], placeholder: "Instrument family" },
        ],
      },
    },
    {
      slug: "music-theory-basics",
      title: "Complete the Music Theory Facts",
      explanation: "A semitone is the smallest commonly used interval in Western equal-tempered music, and an octave spans eight note names.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The interval between two adjacent notes on a piano is a " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the interval spanning eight note names is an " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["semitone", "half step", "half-step"], placeholder: "Musical interval" },
          { id: "a2", answers: ["octave"], placeholder: "Musical interval" },
        ],
      },
    },
  ],

  "movies-tv": [
    {
      slug: "movie-production",
      title: "Complete the Film Production Facts",
      explanation: "The screenplay provides the written story, while the director guides the creative and practical process of making the film.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The written script of a film is called a " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the person who guides the film's creative production is the " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["screenplay", "script"], placeholder: "Film term" },
          { id: "a2", answers: ["director", "film director"], placeholder: "Film role" },
        ],
      },
    },
    {
      slug: "cinema-terminology",
      title: "Complete the Cinema Terminology",
      explanation: "A close-up focuses on a subject or detail, while a long shot shows the subject within a wider environment.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "A camera shot that emphasizes a subject's face or a small detail is a " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while a shot showing a subject within a wide environment is a " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["close-up", "close up"], placeholder: "Camera shot" },
          { id: "a2", answers: ["long shot"], placeholder: "Camera shot" },
        ],
      },
    },
  ],

  games: [
    {
      slug: "video-game-basics",
      title: "Complete the Video Game Facts",
      explanation: "A game engine provides tools for building games, while a game controller is an input device used to control gameplay.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "Software used to build and run many video games is called a game " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while a device used to control gameplay is a game " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["engine"], placeholder: "Game development term" },
          { id: "a2", answers: ["controller", "gamepad"], placeholder: "Input device" },
        ],
      },
    },
    {
      slug: "game-development-concepts",
      title: "Complete the Game Development Facts",
      explanation: "NPC stands for non-player character, and FPS can refer to frames per second when describing performance.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "A character controlled by the game rather than a player is called an " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the common performance measurement for rendered images per second is " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["NPC", "non-player character", "non player character"], placeholder: "Game term" },
          { id: "a2", answers: ["FPS", "frames per second"], placeholder: "Measurement" },
        ],
      },
    },
  ],

  sports: [
    {
      slug: "football-basics",
      title: "Complete the Football Facts",
      explanation: "A standard football team has eleven players on the field, and a match normally lasts 90 minutes of regulation time.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "A standard football team has " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: " players on the field, and a standard match has " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: " minutes of regulation time." },
        ],
        blanks: [
          { id: "a1", answers: ["11", "eleven"], placeholder: "Number" },
          { id: "a2", answers: ["90", "ninety"], placeholder: "Minutes" },
        ],
      },
    },
    {
      slug: "olympic-games",
      title: "Complete the Olympic Facts",
      explanation: "The modern Olympic Games were first held in Athens in 1896. The Olympic symbol contains five interlocking rings.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The first modern Olympic Games were held in " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: " in 1896, and the Olympic symbol contains " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: " interlocking rings." },
        ],
        blanks: [
          { id: "a1", answers: ["Athens"], placeholder: "City" },
          { id: "a2", answers: ["5", "five"], placeholder: "Number" },
        ],
      },
    },
  ],

  business: [
    {
      slug: "business-basics",
      title: "Complete the Business Fundamentals",
      explanation: "Revenue is the income generated by business activities, while profit is what remains after expenses are deducted from revenue.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The money a business earns from its activities is called " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the amount remaining after expenses are deducted is called " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["revenue"], placeholder: "Business term" },
          { id: "a2", answers: ["profit"], placeholder: "Business term" },
        ],
      },
    },
    {
      slug: "business-organizational-structures",
      title: "Complete the Business Structure Facts",
      explanation: "A sole proprietorship is owned by one individual, while a corporation is a separate legal entity from its owners.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "A business owned by one individual is called a " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while a business recognized as a separate legal entity is a " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["sole proprietorship"], placeholder: "Business structure" },
          { id: "a2", answers: ["corporation"], placeholder: "Business structure" },
        ],
      },
    },
  ],

  economics: [
    {
      slug: "supply-and-demand",
      title: "Complete the Economics Basics",
      explanation: "Demand describes consumers' willingness and ability to buy, while supply describes producers' willingness and ability to sell.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The quantity of a product consumers are willing and able to buy is called " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the quantity producers are willing and able to sell is called " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["demand"], placeholder: "Economic term" },
          { id: "a2", answers: ["supply"], placeholder: "Economic term" },
        ],
      },
    },
    {
      slug: "macroeconomic-indicators",
      title: "Complete the Macroeconomics Facts",
      explanation: "GDP measures the value of final goods and services produced within a country, while inflation describes a general rise in prices over time.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The total value of final goods and services produced within a country is measured by " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while a general increase in prices over time is called " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["GDP", "Gross Domestic Product"], placeholder: "Economic indicator" },
          { id: "a2", answers: ["inflation"], placeholder: "Economic term" },
        ],
      },
    },
  ],

  programming: [
    {
      slug: "programming-fundamentals",
      title: "Complete the Programming Basics",
      explanation: "A variable stores a value, while a function is a reusable block of code designed to perform a task.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "A named storage location for a value in a program is called a " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while a reusable block of code designed to perform a task is a " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["variable"], placeholder: "Programming term" },
          { id: "a2", answers: ["function"], placeholder: "Programming term" },
        ],
      },
    },
    {
      slug: "object-oriented-programming",
      title: "Complete the Object-Oriented Programming Facts",
      explanation: "Encapsulation groups data and related behavior, while inheritance allows a class to derive features from another class.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The OOP principle that bundles data and related behavior is " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the principle that allows a class to derive features from another class is " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["encapsulation"], placeholder: "OOP principle" },
          { id: "a2", answers: ["inheritance"], placeholder: "OOP principle" },
        ],
      },
    },
  ],

  health: [
    {
      slug: "human-body-basics",
      title: "Complete the Human Body Facts",
      explanation: "The heart pumps blood throughout the body, while the lungs exchange oxygen and carbon dioxide.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The organ that pumps blood around the body is the " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the organs responsible for gas exchange are the " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["heart"], placeholder: "Organ" },
          { id: "a2", answers: ["lungs"], placeholder: "Organs" },
        ],
      },
    },
    {
      slug: "human-digestive-system",
      title: "Complete the Digestive System Facts",
      explanation: "Digestion begins in the mouth, and most nutrient absorption takes place in the small intestine.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The digestive process begins in the " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", and most nutrient absorption occurs in the " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["mouth"], placeholder: "Body part" },
          { id: "a2", answers: ["small intestine"], placeholder: "Organ" },
        ],
      },
    },
  ],

  food: [
    {
      slug: "food-groups",
      title: "Complete the Food and Nutrition Facts",
      explanation: "Carbohydrates are an important energy source, while proteins provide amino acids needed for growth and repair.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "An important source of energy in many foods is " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while nutrients that provide amino acids for growth and repair are " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["carbohydrates", "carbohydrate"], placeholder: "Nutrient" },
          { id: "a2", answers: ["proteins", "protein"], placeholder: "Nutrient" },
        ],
      },
    },
    {
      slug: "cooking-methods",
      title: "Complete the Cooking Method Facts",
      explanation: "Boiling cooks food in bubbling liquid, while steaming cooks food using hot vapor.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "Cooking food in bubbling liquid is called " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while cooking food using hot water vapor is called " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["boiling"], placeholder: "Cooking method" },
          { id: "a2", answers: ["steaming"], placeholder: "Cooking method" },
        ],
      },
    },
  ],

  nature: [
    {
      slug: "plant-biology",
      title: "Complete the Plant Biology Facts",
      explanation: "Photosynthesis allows plants to use light energy to produce sugars, and chlorophyll is the pigment that absorbs light.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The process by which plants use light to make sugars is called " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", and the green pigment involved in absorbing light is " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["photosynthesis"], placeholder: "Biological process" },
          { id: "a2", answers: ["chlorophyll"], placeholder: "Pigment" },
        ],
      },
    },
    {
      slug: "ecosystems-and-food-chains",
      title: "Complete the Ecosystem Facts",
      explanation: "Producers make their own food, usually through photosynthesis, while decomposers break down dead organic matter.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "Organisms that make their own food in an ecosystem are called " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while organisms that break down dead organic matter are called " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["producers"], placeholder: "Ecological role" },
          { id: "a2", answers: ["decomposers"], placeholder: "Ecological role" },
        ],
      },
    },
  ],

  psychology: [
    {
      slug: "psychology-basics",
      title: "Complete the Psychology Basics",
      explanation: "Memory is the ability to encode, store, and retrieve information, while perception involves interpreting sensory information.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The mental ability to encode, store, and retrieve information is called " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while interpreting information from the senses is called " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["memory"], placeholder: "Mental process" },
          { id: "a2", answers: ["perception"], placeholder: "Mental process" },
        ],
      },
    },
    {
      slug: "cognitive-psychology",
      title: "Complete the Cognitive Psychology Facts",
      explanation: "Classical conditioning involves learning through associations, while operant conditioning involves learning through consequences.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "Learning through associations between stimuli is called " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while learning through consequences such as rewards and punishments is called " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["classical conditioning"], placeholder: "Learning theory" },
          { id: "a2", answers: ["operant conditioning"], placeholder: "Learning theory" },
        ],
      },
    },
  ],

  philosophy: [
    {
      slug: "philosophy-basics",
      title: "Complete the Philosophy Facts",
      explanation: "Ethics examines questions about right and wrong, while epistemology studies knowledge and how we know things.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The branch of philosophy that studies right and wrong is " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the branch that studies knowledge is " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["ethics"], placeholder: "Philosophical branch" },
          { id: "a2", answers: ["epistemology"], placeholder: "Philosophical branch" },
        ],
      },
    },
    {
      slug: "branches-of-philosophy",
      title: "Complete the Philosophical Concepts",
      explanation: "Metaphysics explores the nature of reality and existence, while logic studies principles of valid reasoning.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The branch of philosophy concerned with reality and existence is " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the study of valid reasoning is " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["metaphysics"], placeholder: "Philosophical branch" },
          { id: "a2", answers: ["logic"], placeholder: "Philosophical branch" },
        ],
      },
    },
  ],

  religion: [
    {
      slug: "world-religions-facts",
      title: "Complete the World Religion Facts",
      explanation: "The Quran is the central religious text of Islam, while the Bible is the central sacred text of Christianity.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The central religious text of Islam is the " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the central sacred text of Christianity is the " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["Quran", "Qur'an"], placeholder: "Religious text" },
          { id: "a2", answers: ["Bible"], placeholder: "Religious text" },
        ],
      },
    },
    {
      slug: "islamic-history-and-practices",
      title: "Complete the Islamic Practice Facts",
      explanation: "The Hajj pilgrimage takes place in Makkah, and Ramadan is the ninth month of the Islamic lunar calendar.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The Islamic pilgrimage known as Hajj takes place in " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", and the month of fasting is " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["Makkah", "Mecca"], placeholder: "City" },
          { id: "a2", answers: ["Ramadan", "Ramadhan"], placeholder: "Islamic month" },
        ],
      },
    },
  ],

  travel: [
    {
      slug: "travel-geography-basics",
      title: "Complete the Travel Geography Facts",
      explanation: "A passport is an official travel document, while a visa grants permission to enter or stay in a country under specified conditions.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "An official document used to identify a traveler internationally is a " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while permission to enter or stay in another country is often granted through a " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["passport"], placeholder: "Travel document" },
          { id: "a2", answers: ["visa"], placeholder: "Travel authorization" },
        ],
      },
    },
    {
      slug: "international-travel-terminology",
      title: "Complete the International Travel Facts",
      explanation: "An itinerary outlines a travel plan, while a layover is a stop between connecting flights.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "A document outlining the details of a planned trip is an " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while a stop between connecting flights is called a " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["itinerary"], placeholder: "Travel term" },
          { id: "a2", answers: ["layover", "stopover"], placeholder: "Travel term" },
        ],
      },
    },
  ],

  culture: [
    {
      slug: "cultural-heritage",
      title: "Complete the Cultural Heritage Facts",
      explanation: "Tangible heritage includes physical objects and places, while intangible heritage includes traditions, practices, and knowledge.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "Physical cultural objects and historic buildings are examples of " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: " heritage, while traditions and cultural practices are examples of " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: " heritage." },
        ],
        blanks: [
          { id: "a1", answers: ["tangible"], placeholder: "Heritage type" },
          { id: "a2", answers: ["intangible"], placeholder: "Heritage type" },
        ],
      },
    },
    {
      slug: "cultural-anthropology",
      title: "Complete the Cultural Anthropology Facts",
      explanation: "Anthropology studies humans and their societies, while ethnography is a research approach involving detailed study of cultures and communities.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The broad study of humans and their societies is called " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while detailed research into a particular culture or community is often called " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["anthropology"], placeholder: "Field of study" },
          { id: "a2", answers: ["ethnography"], placeholder: "Research approach" },
        ],
      },
    },
  ],

  education: [
    {
      slug: "learning-fundamentals",
      title: "Complete the Learning Facts",
      explanation: "A curriculum defines the planned learning content, while an assessment evaluates students' knowledge or skills.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The planned content and subjects taught in an educational program form its " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while an evaluation of students' knowledge or skills is an " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["curriculum"], placeholder: "Education term" },
          { id: "a2", answers: ["assessment"], placeholder: "Education term" },
        ],
      },
    },
    {
      slug: "research-methodology",
      title: "Complete the Research Methodology Facts",
      explanation: "A hypothesis is a testable proposed explanation, while a conclusion summarizes what the research findings indicate.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "A testable proposed explanation in research is called a " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the final interpretation of research findings is the " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["hypothesis"], placeholder: "Research term" },
          { id: "a2", answers: ["conclusion"], placeholder: "Research term" },
        ],
      },
    },
  ],

  "current-events": [
    {
      slug: "international-organizations",
      title: "Complete the International Organization Facts",
      explanation: "The United Nations was established in 1945, and its headquarters are located in New York City.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The United Nations was established in " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", and its headquarters are located in " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["1945"], placeholder: "Year" },
          { id: "a2", answers: ["New York City", "New York"], placeholder: "City" },
        ],
      },
    },
    {
      slug: "global-governance",
      title: "Complete the Global Governance Facts",
      explanation: "The World Health Organization coordinates international public health work, while UNESCO focuses on education, science, culture, and communication.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "The UN agency responsible for international public health is the " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while the agency focused on education, science, and culture is " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["WHO", "World Health Organization"], placeholder: "Organization" },
          { id: "a2", answers: ["UNESCO"], placeholder: "Organization" },
        ],
      },
    },
  ],

  other: [
    {
      slug: "measurement-units",
      title: "Complete the Measurement Facts",
      explanation: "A kilometer contains 1,000 meters, while a kilogram contains 1,000 grams.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "One kilometer is equal to " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: " meters, and one kilogram is equal to " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: " grams." },
        ],
        blanks: [
          { id: "a1", answers: ["1000", "1,000"], placeholder: "Number" },
          { id: "a2", answers: ["1000", "1,000"], placeholder: "Number" },
        ],
      },
    },
    {
      slug: "project-management-basics",
      title: "Complete the Project Management Facts",
      explanation: "A project milestone marks a significant point in progress, while a deliverable is a specific output produced by a project.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "FILL_BLANK",
      content: {
        blocks: [
          { id: "b1", type: "TEXT", text: "A significant point or event in a project's progress is called a " },
          { id: "b2", type: "BLANK", blankId: "a1" },
          { id: "b3", type: "TEXT", text: ", while a specific output produced by a project is called a " },
          { id: "b4", type: "BLANK", blankId: "a2" },
          { id: "b5", type: "TEXT", text: "." },
        ],
        blanks: [
          { id: "a1", answers: ["milestone"], placeholder: "Project term" },
          { id: "a2", answers: ["deliverable"], placeholder: "Project term" },
        ],
      },
    },
  ],
} ;