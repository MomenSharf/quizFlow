// src/lib/data/seed-questions/ordering.ts

export const ORDERING_QUESTIONS = {
  "general-knowledge": [
    {
      slug: "human-life-stages",
      title: "Arrange these human life stages in chronological order.",
      explanation: "Human development generally progresses from infancy through childhood and adolescence to adulthood.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Infancy" },
          { id: "b", text: "Childhood" },
          { id: "c", text: "Adolescence" },
          { id: "d", text: "Adulthood" },
        ],
      },
    },
    {
      slug: "scientific-discovery-process",
      title: "Arrange the main stages of a scientific investigation.",
      explanation: "A simplified scientific investigation begins with a question, develops a hypothesis, tests it through experiments, and analyzes the results.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Ask a research question" },
          { id: "b", text: "Form a hypothesis" },
          { id: "c", text: "Conduct an experiment" },
          { id: "d", text: "Analyze the results" },
        ],
      },
    },
  ],

  science: [
    {
      slug: "water-cycle-stages",
      title: "Arrange the main stages of the water cycle.",
      explanation: "Water evaporates, condenses into clouds, falls as precipitation, and collects in bodies of water.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Evaporation" },
          { id: "b", text: "Condensation" },
          { id: "c", text: "Precipitation" },
          { id: "d", text: "Collection" },
        ],
      },
    },
    {
      slug: "mitosis-stages",
      title: "Arrange the stages of mitosis in the correct order.",
      explanation: "Mitosis proceeds through prophase, metaphase, anaphase, and telophase.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Prophase" },
          { id: "b", text: "Metaphase" },
          { id: "c", text: "Anaphase" },
          { id: "d", text: "Telophase" },
        ],
      },
    },
  ],

  technology: [
    {
      slug: "computer-startup-process",
      title: "Arrange these computer startup stages in order.",
      explanation: "A computer begins with power-on, performs hardware checks, loads the operating system, and then presents the login screen.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Power on the computer" },
          { id: "b", text: "Run hardware checks" },
          { id: "c", text: "Load the operating system" },
          { id: "d", text: "Display the login screen" },
        ],
      },
    },
    {
      slug: "web-request-lifecycle",
      title: "Arrange a simplified web request lifecycle.",
      explanation: "A browser resolves the domain, establishes a connection, sends an HTTP request, and receives a response from the server.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Resolve the domain name" },
          { id: "b", text: "Establish a connection" },
          { id: "c", text: "Send an HTTP request" },
          { id: "d", text: "Receive the server response" },
        ],
      },
    },
  ],

  mathematics: [
    {
      slug: "basic-arithmetic-order",
      title: "Arrange these numbers from smallest to largest.",
      explanation: "Comparing their values gives 3, 8, 15, and 22 in ascending order.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "3" },
          { id: "b", text: "8" },
          { id: "c", text: "15" },
          { id: "d", text: "22" },
        ],
      },
    },
    {
      slug: "order-of-operations",
      title: "Arrange these operations according to the order of operations.",
      explanation: "Parentheses are evaluated first, followed by exponents, multiplication and division, then addition and subtraction. This question uses one operation from each level.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Parentheses" },
          { id: "b", text: "Exponents" },
          { id: "c", text: "Multiplication" },
          { id: "d", text: "Addition" },
        ],
      },
    },
  ],

  history: [
    {
      slug: "ancient-egyptian-periods",
      title: "Arrange these periods of ancient Egyptian history chronologically.",
      explanation: "The Old Kingdom preceded the Middle Kingdom, which was followed by the New Kingdom and then the Late Period.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Old Kingdom" },
          { id: "b", text: "Middle Kingdom" },
          { id: "c", text: "New Kingdom" },
          { id: "d", text: "Late Period" },
        ],
      },
    },
    {
      slug: "french-revolution-events",
      title: "Arrange these events of the French Revolution chronologically.",
      explanation: "The Storming of the Bastille occurred in 1789, followed by the monarchy's abolition in 1792, the execution of Louis XVI in 1793, and the rise of Napoleon's rule in 1799.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Storming of the Bastille (1789)" },
          { id: "b", text: "Abolition of the monarchy (1792)" },
          { id: "c", text: "Execution of Louis XVI (1793)" },
          { id: "d", text: "Napoleon's coup of 18 Brumaire (1799)" },
        ],
      },
    },
  ],

  geography: [
    {
      slug: "earth-layers",
      title: "Arrange Earth's main layers from the outside to the center.",
      explanation: "Earth's main layers are the crust, mantle, outer core, and inner core.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Crust" },
          { id: "b", text: "Mantle" },
          { id: "c", text: "Outer core" },
          { id: "d", text: "Inner core" },
        ],
      },
    },
    {
      slug: "atmosphere-layers",
      title: "Arrange the atmospheric layers from Earth's surface upward.",
      explanation: "The atmosphere is commonly divided into the troposphere, stratosphere, mesosphere, thermosphere, and exosphere. This question includes the first four.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Troposphere" },
          { id: "b", text: "Stratosphere" },
          { id: "c", text: "Mesosphere" },
          { id: "d", text: "Thermosphere" },
        ],
      },
    },
  ],

  language: [
    {
      slug: "english-sentence-structure",
      title: "Arrange these words to form a correct sentence.",
      explanation: "A basic English sentence commonly follows subject, verb, object structure: She reads interesting books.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "She" },
          { id: "b", text: "reads" },
          { id: "c", text: "interesting" },
          { id: "d", text: "books." },
        ],
      },
    },
    {
      slug: "english-writing-process",
      title: "Arrange the main stages of the writing process.",
      explanation: "Writing typically begins with planning, followed by drafting, revising the content, and proofreading the final version.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Planning" },
          { id: "b", text: "Drafting" },
          { id: "c", text: "Revising" },
          { id: "d", text: "Proofreading" },
        ],
      },
    },
  ],

  literature: [
    {
      slug: "story-structure",
      title: "Arrange these common stages of a story.",
      explanation: "A simplified story structure introduces the setting, develops the conflict, reaches a climax, and concludes with a resolution.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Introduction" },
          { id: "b", text: "Rising action" },
          { id: "c", text: "Climax" },
          { id: "d", text: "Resolution" },
        ],
      },
    },
    {
      slug: "shakespeare-life-timeline",
      title: "Arrange these events in William Shakespeare's life chronologically.",
      explanation: "Shakespeare was born in 1564, married Anne Hathaway in 1582, wrote many of his major plays during the following decades, and died in 1616.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Born in Stratford-upon-Avon (1564)" },
          { id: "b", text: "Married Anne Hathaway (1582)" },
          { id: "c", text: "Wrote major plays during his career" },
          { id: "d", text: "Died in Stratford-upon-Avon (1616)" },
        ],
      },
    },
  ],

  arts: [
    {
      slug: "drawing-process",
      title: "Arrange these basic stages of creating a drawing.",
      explanation: "A simple drawing process starts with sketching, develops the shapes and details, adds shading, and finishes with final adjustments.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Make a rough sketch" },
          { id: "b", text: "Develop shapes and details" },
          { id: "c", text: "Add shading" },
          { id: "d", text: "Make final adjustments" },
        ],
      },
    },
    {
      slug: "art-history-periods",
      title: "Arrange these European art movements chronologically.",
      explanation: "The Renaissance preceded the Baroque period, followed by Neoclassicism and then Impressionism.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Renaissance" },
          { id: "b", text: "Baroque" },
          { id: "c", text: "Neoclassicism" },
          { id: "d", text: "Impressionism" },
        ],
      },
    },
  ],

  music: [
    {
      slug: "musical-performance",
      title: "Arrange these stages of preparing for a musical performance.",
      explanation: "A performer typically selects the music, practices it, rehearses the complete performance, and then performs before an audience.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Select the music" },
          { id: "b", text: "Practice individual sections" },
          { id: "c", text: "Rehearse the complete piece" },
          { id: "d", text: "Perform before an audience" },
        ],
      },
    },
    {
      slug: "musical-periods",
      title: "Arrange these Western classical music periods chronologically.",
      explanation: "The Baroque period preceded the Classical period, followed by the Romantic and then the Modern period.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Baroque" },
          { id: "b", text: "Classical" },
          { id: "c", text: "Romantic" },
          { id: "d", text: "Modern" },
        ],
      },
    },
  ],

  "movies-tv": [
    {
      slug: "movie-production-process",
      title: "Arrange the main stages of movie production.",
      explanation: "A film generally moves from pre-production planning to filming, post-production editing, and distribution.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Pre-production" },
          { id: "b", text: "Production" },
          { id: "c", text: "Post-production" },
          { id: "d", text: "Distribution" },
        ],
      },
    },
    {
      slug: "film-history-milestones",
      title: "Arrange these milestones in film history chronologically.",
      explanation: "Early motion pictures appeared in the late nineteenth century, followed by feature-length silent films, the introduction of synchronized sound, and the widespread adoption of color filmmaking.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Early motion pictures (late 1800s)" },
          { id: "b", text: "Feature-length silent films" },
          { id: "c", text: "Synchronized sound films (late 1920s)" },
          { id: "d", text: "Widespread color filmmaking" },
        ],
      },
    },
  ],

  games: [
    {
      slug: "game-development-workflow",
      title: "Arrange these basic stages of game development.",
      explanation: "A simplified game development workflow begins with planning, moves to development, continues through testing, and ends with release.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Plan the game" },
          { id: "b", text: "Develop the game" },
          { id: "c", text: "Test and debug" },
          { id: "d", text: "Release the game" },
        ],
      },
    },
    {
      slug: "game-engine-rendering",
      title: "Arrange these simplified stages of a game rendering pipeline.",
      explanation: "A simplified rendering pipeline processes scene data, transforms geometry, rasterizes primitives, and produces the final image through pixel shading and output operations.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Process scene and object data" },
          { id: "b", text: "Transform geometry" },
          { id: "c", text: "Rasterize primitives" },
          { id: "d", text: "Shade pixels and produce the image" },
        ],
      },
    },
  ],

  sports: [
    {
      slug: "football-match-events",
      title: "Arrange these stages of a standard football match.",
      explanation: "A standard football match begins with the first half, followed by half-time, the second half, and the final whistle.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "First half" },
          { id: "b", text: "Half-time" },
          { id: "c", text: "Second half" },
          { id: "d", text: "Final whistle" },
        ],
      },
    },
    {
      slug: "olympic-games-history",
      title: "Arrange these modern Olympic Games milestones chronologically.",
      explanation: "The first modern Summer Olympics took place in Athens in 1896, followed by the first Winter Olympics in 1924, the first televised Summer Games in 1936, and the first Paralympic Games in 1960.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "First modern Summer Olympics (1896)" },
          { id: "b", text: "First Winter Olympics (1924)" },
          { id: "c", text: "Berlin Summer Olympics broadcast on television (1936)" },
          { id: "d", text: "First Paralympic Games (1960)" },
        ],
      },
    },
  ],

  business: [
    {
      slug: "business-planning-process",
      title: "Arrange these basic stages of starting a business.",
      explanation: "A business idea is researched, developed into a business plan, funded, and then launched.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Identify a business idea" },
          { id: "b", text: "Research the market and create a plan" },
          { id: "c", text: "Secure funding" },
          { id: "d", text: "Launch the business" },
        ],
      },
    },
    {
      slug: "product-development-lifecycle",
      title: "Arrange these stages of a typical product development lifecycle.",
      explanation: "Product development commonly begins with identifying a need, moves into design and prototyping, continues with testing, and leads to production and launch.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Identify customer needs" },
          { id: "b", text: "Design and build a prototype" },
          { id: "c", text: "Test and refine the product" },
          { id: "d", text: "Begin production and launch" },
        ],
      },
    },
  ],

  economics: [
    {
      slug: "economic-circular-flow",
      title: "Arrange these simplified stages of the circular flow of income.",
      explanation: "Households provide factors of production to firms, firms pay income to households, households purchase goods and services, and firms receive revenue.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Households provide factors of production" },
          { id: "b", text: "Firms pay income to households" },
          { id: "c", text: "Households purchase goods and services" },
          { id: "d", text: "Firms receive revenue" },
        ],
      },
    },
    {
      slug: "monetary-policy-transmission",
      title: "Arrange a simplified monetary policy transmission process following an interest rate increase.",
      explanation: "Higher policy interest rates generally increase borrowing costs, which can reduce borrowing and spending, moderate aggregate demand, and eventually ease inflationary pressure. Actual effects vary and occur with delays.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Central bank raises policy interest rates" },
          { id: "b", text: "Borrowing costs generally increase" },
          { id: "c", text: "Borrowing and spending may decrease" },
          { id: "d", text: "Inflationary pressure may ease over time" },
        ],
      },
    },
  ],

  programming: [
    {
      slug: "programming-execution-process",
      title: "Arrange these simplified stages of running a program.",
      explanation: "A program is written, translated or interpreted as needed, executed, and then produces output.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Write the source code" },
          { id: "b", text: "Compile or interpret the code" },
          { id: "c", text: "Execute the program" },
          { id: "d", text: "Produce the output" },
        ],
      },
    },
    {
      slug: "software-development-lifecycle",
      title: "Arrange these common stages of the software development lifecycle.",
      explanation: "A typical software development lifecycle includes requirements analysis, design, implementation, and testing. Deployment and maintenance follow in later stages.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Requirements analysis" },
          { id: "b", text: "System design" },
          { id: "c", text: "Implementation" },
          { id: "d", text: "Testing" },
        ],
      },
    },
  ],

  health: [
    {
      slug: "digestive-system-process",
      title: "Arrange the path food follows through the digestive system.",
      explanation: "Food passes from the mouth through the esophagus and stomach before entering the small intestine.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Mouth" },
          { id: "b", text: "Esophagus" },
          { id: "c", text: "Stomach" },
          { id: "d", text: "Small intestine" },
        ],
      },
    },
    {
      slug: "blood-circulation-path",
      title: "Arrange the path of blood through the right side of the heart and lungs.",
      explanation: "Deoxygenated blood enters the right atrium, moves to the right ventricle, travels through the pulmonary arteries to the lungs, and returns oxygenated through the pulmonary veins.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Right atrium" },
          { id: "b", text: "Right ventricle" },
          { id: "c", text: "Pulmonary arteries" },
          { id: "d", text: "Lungs" },
        ],
      },
    },
  ],

  food: [
    {
      slug: "bread-making-process",
      title: "Arrange these basic stages of making yeast bread.",
      explanation: "Bread making involves mixing ingredients, kneading the dough, allowing it to rise, and baking it.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Mix the ingredients" },
          { id: "b", text: "Knead the dough" },
          { id: "c", text: "Allow the dough to rise" },
          { id: "d", text: "Bake the bread" },
        ],
      },
    },
    {
      slug: "coffee-production-process",
      title: "Arrange these stages of coffee production.",
      explanation: "Coffee production generally involves harvesting ripe cherries, processing and drying the beans, roasting them, and finally grinding them for brewing.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Harvest coffee cherries" },
          { id: "b", text: "Process and dry the beans" },
          { id: "c", text: "Roast the beans" },
          { id: "d", text: "Grind the roasted beans" },
        ],
      },
    },
  ],

  nature: [
    {
      slug: "plant-growth-stages",
      title: "Arrange the main stages of a flowering plant's life cycle.",
      explanation: "A flowering plant typically begins as a seed, germinates, grows into a mature plant, and produces flowers and seeds.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Seed" },
          { id: "b", text: "Germination" },
          { id: "c", text: "Mature plant" },
          { id: "d", text: "Flowering and seed production" },
        ],
      },
    },
    {
      slug: "ecological-succession",
      title: "Arrange these stages of primary ecological succession.",
      explanation: "Primary succession can begin with bare rock, followed by pioneer organisms, the development of soil and vegetation, and eventually a more complex ecological community.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Bare rock" },
          { id: "b", text: "Pioneer species colonize the area" },
          { id: "c", text: "Soil develops and vegetation increases" },
          { id: "d", text: "A more complex community develops" },
        ],
      },
    },
  ],

  psychology: [
    {
      slug: "memory-process",
      title: "Arrange these simplified stages of memory processing.",
      explanation: "Information is encoded, stored, and later retrieved when needed.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Encoding" },
          { id: "b", text: "Storage" },
          { id: "c", text: "Retrieval" },
          { id: "d", text: "Use the recalled information" },
        ],
      },
    },
    {
      slug: "classical-conditioning-process",
      title: "Arrange these stages of a simplified classical conditioning example.",
      explanation: "Before conditioning, food naturally produces salivation. A neutral stimulus is paired with food, and eventually that stimulus alone can produce a conditioned response.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Food naturally produces salivation" },
          { id: "b", text: "A neutral stimulus is introduced" },
          { id: "c", text: "The neutral stimulus is repeatedly paired with food" },
          { id: "d", text: "The stimulus alone produces a conditioned response" },
        ],
      },
    },
  ],

  philosophy: [
    {
      slug: "ethical-decision-process",
      title: "Arrange these simplified stages of ethical decision-making.",
      explanation: "Ethical decision-making involves identifying the issue, considering relevant principles, evaluating possible actions, and making a decision.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Identify the ethical issue" },
          { id: "b", text: "Consider relevant principles" },
          { id: "c", text: "Evaluate possible actions" },
          { id: "d", text: "Make a decision" },
        ],
      },
    },
    {
      slug: "platos-allegory-of-the-cave",
      title: "Arrange these stages of understanding in Plato's Allegory of the Cave.",
      explanation: "The prisoners initially see shadows, encounter the objects producing them, leave the cave and see the outside world, and eventually understand the sun's role in the visible world.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Observe shadows on the cave wall" },
          { id: "b", text: "Discover the objects casting the shadows" },
          { id: "c", text: "Leave the cave and see the outside world" },
          { id: "d", text: "Understand the sun's role in the visible world" },
        ],
      },
    },
  ],

  religion: [
    {
      slug: "hajj-ritual-order",
      title: "Arrange these major stages of Hajj in their general chronological order.",
      explanation: "Pilgrims travel to Mina, gather at Arafat, spend the night at Muzdalifah, and return to Mina for the stoning ritual. Hajj includes additional rites and variations in practice.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Travel to Mina" },
          { id: "b", text: "Stand at Arafat" },
          { id: "c", text: "Spend the night at Muzdalifah" },
          { id: "d", text: "Return to Mina for the stoning ritual" },
        ],
      },
    },
    {
      slug: "early-islamic-history",
      title: "Arrange these major events in early Islamic history chronologically.",
      explanation: "The first Quranic revelation began in 610 CE, the migration to Medina occurred in 622 CE, the conquest of Mecca took place in 630 CE, and the Prophet Muhammad died in 632 CE.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "First Quranic revelation (610 CE)" },
          { id: "b", text: "Migration to Medina (622 CE)" },
          { id: "c", text: "Conquest of Mecca (630 CE)" },
          { id: "d", text: "Death of Prophet Muhammad (632 CE)" },
        ],
      },
    },
  ],

  travel: [
    {
      slug: "airport-departure-process",
      title: "Arrange these common stages of an international airport departure.",
      explanation: "Passengers generally check in, complete security screening, proceed to their departure gate, and board the aircraft.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Check in" },
          { id: "b", text: "Pass through security" },
          { id: "c", text: "Go to the departure gate" },
          { id: "d", text: "Board the aircraft" },
        ],
      },
    },
    {
      slug: "travel-planning-process",
      title: "Arrange these stages of planning an international trip.",
      explanation: "A typical trip plan begins by selecting a destination, checking entry requirements, arranging transportation and accommodation, and preparing for departure.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Choose a destination" },
          { id: "b", text: "Check entry requirements" },
          { id: "c", text: "Arrange transportation and accommodation" },
          { id: "d", text: "Prepare for departure" },
        ],
      },
    },
  ],

  culture: [
    {
      slug: "traditional-event-planning",
      title: "Arrange these basic stages of organizing a cultural festival.",
      explanation: "Organizing a festival starts with planning, followed by preparation, hosting the event, and reviewing its outcome.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Plan the festival" },
          { id: "b", text: "Prepare the venue and activities" },
          { id: "c", text: "Host the festival" },
          { id: "d", text: "Review the event" },
        ],
      },
    },
    {
      slug: "archaeological-excavation",
      title: "Arrange these simplified stages of an archaeological excavation.",
      explanation: "Archaeologists survey a site, carefully excavate and document finds, analyze recovered materials, and interpret the evidence.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Survey the archaeological site" },
          { id: "b", text: "Excavate and document findings" },
          { id: "c", text: "Analyze recovered materials" },
          { id: "d", text: "Interpret the evidence" },
        ],
      },
    },
  ],

  education: [
    {
      slug: "study-session-process",
      title: "Arrange these stages of an effective study session.",
      explanation: "A study session can begin with setting a goal, reviewing material, practicing what was learned, and evaluating progress.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Set a study goal" },
          { id: "b", text: "Review the material" },
          { id: "c", text: "Practice with exercises" },
          { id: "d", text: "Evaluate your progress" },
        ],
      },
    },
    {
      slug: "research-paper-process",
      title: "Arrange these stages of preparing an academic research paper.",
      explanation: "Research papers commonly progress from selecting a research question to reviewing literature, collecting and analyzing evidence, and presenting conclusions.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Define the research question" },
          { id: "b", text: "Review relevant literature" },
          { id: "c", text: "Collect and analyze evidence" },
          { id: "d", text: "Present findings and conclusions" },
        ],
      },
    },
  ],

  "current-events": [
    {
      slug: "international-agreement-process",
      title: "Arrange these simplified stages of creating an international agreement.",
      explanation: "Countries identify shared issues, negotiate terms, adopt or sign an agreement, and complete the required ratification procedures where applicable.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Identify a shared issue" },
          { id: "b", text: "Negotiate the terms" },
          { id: "c", text: "Adopt or sign the agreement" },
          { id: "d", text: "Complete required ratification procedures" },
        ],
      },
    },
    {
      slug: "united-nations-resolution-process",
      title: "Arrange these simplified stages of adopting a UN General Assembly resolution.",
      explanation: "A resolution proposal is introduced, discussed and negotiated, put to a vote when required, and then adopted if it receives the necessary support.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Introduce a draft resolution" },
          { id: "b", text: "Discuss and negotiate the draft" },
          { id: "c", text: "Hold a vote when required" },
          { id: "d", text: "Adopt the resolution if approved" },
        ],
      },
    },
  ],

  other: [
    {
      slug: "problem-solving-process",
      title: "Arrange these basic stages of solving a problem.",
      explanation: "Effective problem-solving begins by identifying the problem, exploring possible solutions, choosing an approach, and evaluating the result.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Identify the problem" },
          { id: "b", text: "Explore possible solutions" },
          { id: "c", text: "Choose and apply a solution" },
          { id: "d", text: "Evaluate the result" },
        ],
      },
    },
    {
      slug: "project-management-lifecycle",
      title: "Arrange the five project management process groups, with the final two represented here as one combined stage.",
      explanation: "Project management commonly progresses through initiation, planning, execution, monitoring and controlling, and closing. This question combines monitoring and controlling with execution-related work to fit four items.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "ORDERING",
      content: {
        options: [
          { id: "a", text: "Initiation" },
          { id: "b", text: "Planning" },
          { id: "c", text: "Execution, monitoring and controlling" },
          { id: "d", text: "Closing" },
        ],
      },
    },
  ],
} ;