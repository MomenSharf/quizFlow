export const TYPE_ANSWER_QUESTIONS = {
  "general-knowledge": [
    {
      slug: "largest-ocean",
      title: "Name the Largest Ocean",
      explanation: "The Pacific Ocean is the largest and deepest ocean on Earth.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["Pacific", "Pacific Ocean"],
        placeholder: "Enter the ocean name",
      },
    },
    {
      slug: "speed-of-light",
      title: "Name the Speed of Light",
      explanation: "The speed of light in a vacuum is approximately 299,792 kilometers per second.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["299792 km/s", "299,792 km/s", "300000 km/s", "300,000 km/s", "299792 kilometers per second"],
        placeholder: "Enter the approximate speed",
      },
    },
  ],

  science: [
    {
      slug: "chemical-symbol-of-oxygen",
      title: "Enter the Chemical Symbol for Oxygen",
      explanation: "The chemical symbol for oxygen is O.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["O"],
        placeholder: "Enter the chemical symbol",
      },
    },
    {
      slug: "newtons-second-law",
      title: "Name Newton's Second Law",
      explanation: "Newton's second law states that the net force on an object equals its mass multiplied by its acceleration, commonly written as F = ma.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["F=ma", "F = ma", "force equals mass times acceleration", "force is mass times acceleration"],
        placeholder: "Enter the formula or principle",
      },
    },
  ],

  technology: [
    {
      slug: "computer-brain",
      title: "Name the Main Processing Component",
      explanation: "The Central Processing Unit (CPU) executes instructions and performs calculations in a computer.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["CPU", "Central Processing Unit"],
        placeholder: "Enter the component name",
      },
    },
    {
      slug: "binary-number-system",
      title: "Name the Number System Used by Computers",
      explanation: "The binary number system uses only two digits: 0 and 1.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["binary", "binary system", "base 2", "binary number system"],
        placeholder: "Enter the number system",
      },
    },
  ],

  mathematics: [
    {
      slug: "square-root-of-144",
      title: "Calculate the Square Root of 144",
      explanation: "The square root of 144 is 12 because 12 multiplied by 12 equals 144.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["12", "twelve"],
        placeholder: "Enter your answer",
      },
    },
    {
      slug: "derivative-of-x-squared",
      title: "Find the Derivative of x²",
      explanation: "Using the power rule, the derivative of x² is 2x.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["2x", "2*x"],
        placeholder: "Enter the derivative",
      },
    },
  ],

  history: [
    {
      slug: "ancient-egyptian-ruler",
      title: "Name the Ancient Egyptian Ruler",
      explanation: "Tutankhamun was an ancient Egyptian pharaoh whose tomb was discovered largely intact in 1922.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["Tutankhamun", "Tutankhamen", "King Tut"],
        placeholder: "Enter the pharaoh's name",
      },
    },
    {
      slug: "fall-of-constantinople",
      title: "Enter the Year Constantinople Fell",
      explanation: "Constantinople fell to the Ottoman Empire in 1453, marking a major turning point in European and Mediterranean history.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["1453"],
        placeholder: "Enter the year",
      },
    },
  ],

  geography: [
    {
      slug: "capital-of-japan",
      title: "Name the Capital of Japan",
      explanation: "Tokyo is the capital of Japan and one of the world's largest metropolitan areas.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["Tokyo"],
        placeholder: "Enter the capital city",
      },
    },
    {
      slug: "highest-mountain-in-africa",
      title: "Name Africa's Highest Mountain",
      explanation: "Mount Kilimanjaro in Tanzania is Africa's highest mountain, reaching approximately 5,895 meters above sea level.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["Mount Kilimanjaro", "Kilimanjaro"],
        placeholder: "Enter the mountain name",
      },
    },
  ],

  language: [
    {
      slug: "plural-of-child",
      title: "Enter the Plural Form of Child",
      explanation: "The plural form of child is children. It is an irregular plural rather than a word formed by simply adding -s.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["children"],
        placeholder: "Enter the plural form",
      },
    },
    {
      slug: "figure-of-speech",
      title: "Name the Figure of Speech",
      explanation: "A comparison using the words 'like' or 'as' is called a simile.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["simile"],
        placeholder: "Enter the literary term",
      },
    },
  ],

  literature: [
    {
      slug: "author-of-hamlet",
      title: "Name the Author of Hamlet",
      explanation: "William Shakespeare wrote the tragedy Hamlet, one of the most influential works in English literature.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["William Shakespeare", "Shakespeare"],
        placeholder: "Enter the author's name",
      },
    },
    {
      slug: "author-of-the-divine-comedy",
      title: "Name the Author of The Divine Comedy",
      explanation: "Dante Alighieri wrote The Divine Comedy, an influential Italian narrative poem from the Middle Ages.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["Dante Alighieri", "Dante"],
        placeholder: "Enter the author's name",
      },
    },
  ],

  arts: [
    {
      slug: "artist-of-mona-lisa",
      title: "Name the Artist Behind the Mona Lisa",
      explanation: "Leonardo da Vinci painted the Mona Lisa during the Italian Renaissance.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["Leonardo da Vinci", "Leonardo"],
        placeholder: "Enter the artist's name",
      },
    },
    {
      slug: "art-movement-of-monet",
      title: "Name Claude Monet's Art Movement",
      explanation: "Claude Monet was a leading figure in Impressionism, an art movement known for its emphasis on light, color, and momentary impressions.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["Impressionism", "Impressionist movement"],
        placeholder: "Enter the art movement",
      },
    },
  ],

  music: [
    {
      slug: "number-of-strings-on-standard-guitar",
      title: "How Many Strings Does a Standard Guitar Have?",
      explanation: "A standard guitar usually has six strings.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["6", "six"],
        placeholder: "Enter the number",
      },
    },
    {
      slug: "composer-of-four-seasons",
      title: "Name the Composer of The Four Seasons",
      explanation: "Antonio Vivaldi composed The Four Seasons, a famous set of four violin concertos.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["Antonio Vivaldi", "Vivaldi"],
        placeholder: "Enter the composer's name",
      },
    },
  ],

  "movies-tv": [
    {
      slug: "director-of-titanic",
      title: "Name the Director of Titanic",
      explanation: "James Cameron directed the 1997 film Titanic.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["James Cameron", "Cameron"],
        placeholder: "Enter the director's name",
      },
    },
    {
      slug: "first-best-picture-winner",
      title: "Name the First Best Picture Winner",
      explanation: "Wings won the first Academy Award for Outstanding Picture at the 1929 ceremony, an award later known as Best Picture.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["Wings"],
        placeholder: "Enter the film title",
      },
    },
  ],

  games: [
    {
      slug: "creator-of-minecraft",
      title: "Who Created Minecraft?",
      explanation: "Minecraft was originally created by Markus Persson, also known as Notch, and later developed by Mojang.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["Markus Persson", "Notch"],
        placeholder: "Enter the creator's name",
      },
    },
    {
      slug: "chess-board-squares",
      title: "How Many Squares Are on a Chessboard?",
      explanation: "A standard chessboard has 64 squares arranged in eight rows and eight columns.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["64", "sixty-four", "sixty four"],
        placeholder: "Enter the number",
      },
    },
  ],

  sports: [
    {
      slug: "basketball-players",
      title: "How Many Players from One Team Are on a Basketball Court?",
      explanation: "Each basketball team has five players on the court at a time in standard five-on-five basketball.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["5", "five"],
        placeholder: "Enter the number",
      },
    },
    {
      slug: "marathon-distance",
      title: "Enter the Official Marathon Distance",
      explanation: "The official marathon distance is 42.195 kilometers, or 26 miles and 385 yards.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["42.195 km", "42.195 kilometers", "42.195"],
        placeholder: "Enter the distance in kilometers",
      },
    },
  ],

  business: [
    {
      slug: "business-plan",
      title: "Name the Document That Outlines a Business Strategy",
      explanation: "A business plan describes a business's goals, strategies, operations, and financial expectations.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["business plan"],
        placeholder: "Enter the document name",
      },
    },
    {
      slug: "customer-acquisition-cost",
      title: "Name the Customer Acquisition Metric",
      explanation: "Customer Acquisition Cost (CAC) measures the average cost of acquiring a new customer.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["CAC", "Customer Acquisition Cost"],
        placeholder: "Enter the metric",
      },
    },
  ],

  economics: [
    {
      slug: "currency-of-japan",
      title: "Name the Currency of Japan",
      explanation: "The Japanese yen is the official currency of Japan.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["yen", "Japanese yen"],
        placeholder: "Enter the currency",
      },
    },
    {
      slug: "economic-opportunity-cost",
      title: "Name the Cost of a Forgone Alternative",
      explanation: "Opportunity cost is the value of the next-best alternative given up when making a decision.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["opportunity cost"],
        placeholder: "Enter the economic term",
      },
    },
  ],

  programming: [
    {
      slug: "html-purpose",
      title: "Name the Language Used to Structure Web Pages",
      explanation: "HTML stands for HyperText Markup Language and is used to structure content on web pages.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["HTML", "HyperText Markup Language", "Hypertext Markup Language"],
        placeholder: "Enter the language name",
      },
    },
    {
      slug: "javascript-array-method",
      title: "Name the JavaScript Method That Creates a New Array",
      explanation: "The map() method creates a new array by applying a callback function to each element of the original array.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["map", "map()", "Array.map"],
        placeholder: "Enter the method name",
      },
    },
  ],

  health: [
    {
      slug: "normal-human-body-temperature",
      title: "Enter the Common Reference Body Temperature",
      explanation: "Approximately 37°C is a commonly taught reference for normal human body temperature, although individual readings vary.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["37°C", "37 C", "37 degrees Celsius", "37"],
        placeholder: "Enter the temperature",
      },
    },
    {
      slug: "vitamin-produced-by-sunlight",
      title: "Name the Vitamin the Body Can Produce with Sunlight",
      explanation: "The skin can produce vitamin D when exposed to ultraviolet B radiation from sunlight.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["Vitamin D", "D"],
        placeholder: "Enter the vitamin",
      },
    },
  ],

  food: [
    {
      slug: "main-ingredient-of-guacamole",
      title: "Name the Main Ingredient in Guacamole",
      explanation: "Avocado is the main ingredient in traditional guacamole.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["avocado"],
        placeholder: "Enter the ingredient",
      },
    },
    {
      slug: "japanese-fermented-soybean-paste",
      title: "Name the Japanese Fermented Soybean Paste",
      explanation: "Miso is a traditional Japanese seasoning paste made by fermenting soybeans, often with salt and koji.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["miso", "miso paste"],
        placeholder: "Enter the food name",
      },
    },
  ],

  nature: [
    {
      slug: "fastest-land-animal",
      title: "Name the Fastest Land Animal",
      explanation: "The cheetah is the fastest land animal, capable of reaching very high speeds over short distances.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["cheetah"],
        placeholder: "Enter the animal",
      },
    },
    {
      slug: "largest-living-animal",
      title: "Name the Largest Living Animal",
      explanation: "The blue whale is the largest living animal known to have existed.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["blue whale"],
        placeholder: "Enter the animal",
      },
    },
  ],

  psychology: [
    {
      slug: "fight-or-flight-hormone",
      title: "Name a Hormone Released During the Fight-or-Flight Response",
      explanation: "Adrenaline, also called epinephrine, helps prepare the body for rapid action during a stress response.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["adrenaline", "epinephrine"],
        placeholder: "Enter the hormone",
      },
    },
    {
      slug: "cognitive-dissonance",
      title: "Name the Theory of Conflicting Beliefs and Actions",
      explanation: "Cognitive dissonance describes the mental discomfort that can arise when a person's beliefs, attitudes, or actions conflict.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["cognitive dissonance"],
        placeholder: "Enter the psychological term",
      },
    },
  ],

  philosophy: [
    {
      slug: "philosopher-of-the-republic",
      title: "Name the Philosopher Who Wrote The Republic",
      explanation: "Plato wrote The Republic, a philosophical work exploring justice, society, and the ideal state.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["Plato"],
        placeholder: "Enter the philosopher's name",
      },
    },
    {
      slug: "categorical-imperative",
      title: "Name Kant's Central Moral Principle",
      explanation: "Immanuel Kant's categorical imperative is a central principle in his moral philosophy.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["categorical imperative"],
        placeholder: "Enter the philosophical concept",
      },
    },
  ],

  religion: [
    {
      slug: "holy-city-of-islam",
      title: "Name the Holiest City in Islam",
      explanation: "Makkah, also known as Mecca, is the holiest city in Islam and the destination of the Hajj pilgrimage.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["Makkah", "Mecca"],
        placeholder: "Enter the city name",
      },
    },
    {
      slug: "islamic-calendar-month",
      title: "Name the First Month of the Islamic Calendar",
      explanation: "Muharram is the first month of the Islamic lunar calendar.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["Muharram", "Muharram al-Haram"],
        placeholder: "Enter the month name",
      },
    },
  ],

  travel: [
    {
      slug: "capital-of-australia",
      title: "Name the Capital of Australia",
      explanation: "Canberra is the capital city of Australia, rather than Sydney or Melbourne.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["Canberra"],
        placeholder: "Enter the capital city",
      },
    },
    {
      slug: "international-airport-code",
      title: "Enter the Airport Code for Cairo International Airport",
      explanation: "Cairo International Airport uses the IATA airport code CAI.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["CAI"],
        placeholder: "Enter the three-letter code",
      },
    },
  ],

  culture: [
    {
      slug: "japanese-traditional-clothing",
      title: "Name the Traditional Japanese Garment",
      explanation: "The kimono is a traditional Japanese garment known for its distinctive T-shaped design and wrapped front.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["kimono"],
        placeholder: "Enter the garment name",
      },
    },
    {
      slug: "traditional-spanish-dance",
      title: "Name the Traditional Spanish Dance",
      explanation: "Flamenco is a Spanish art form associated especially with Andalusia, combining music, singing, dance, and guitar.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["flamenco"],
        placeholder: "Enter the dance name",
      },
    },
  ],

  education: [
    {
      slug: "scientific-method-first-step",
      title: "Name the First Step of the Scientific Method",
      explanation: "Scientific investigations commonly begin by making an observation or identifying a question to investigate.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["observation", "asking a question", "identify a question"],
        placeholder: "Enter the step",
      },
    },
    {
      slug: "academic-source-citation",
      title: "Name the List of Sources at the End of a Research Paper",
      explanation: "A bibliography lists the sources consulted or cited in a research project.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["bibliography", "references", "reference list", "works cited"],
        placeholder: "Enter the academic term",
      },
    },
  ],

  "current-events": [
    {
      slug: "un-headquarters",
      title: "Name the City Hosting the UN Headquarters",
      explanation: "The United Nations headquarters is located in New York City, United States.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["New York City", "New York"],
        placeholder: "Enter the city",
      },
    },
    {
      slug: "sustainable-development-goals",
      title: "How Many Sustainable Development Goals Did the UN Adopt?",
      explanation: "The United Nations adopted 17 Sustainable Development Goals as part of the 2030 Agenda for Sustainable Development.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["17", "seventeen"],
        placeholder: "Enter the number",
      },
    },
  ],

  other: [
    {
      slug: "number-of-days-in-a-leap-year",
      title: "How Many Days Are in a Leap Year?",
      explanation: "A leap year has 366 days because February has 29 days instead of 28.",
      difficulty: "BEGINNER",
      points: 10,
      timeLimitSeconds: 30,
      type: "TYPE_ANSWER",
      content: {
        answers: ["366", "three hundred sixty-six", "three hundred and sixty-six"],
        placeholder: "Enter the number",
      },
    },
    {
      slug: "project-management-critical-path",
      title: "Name the Project Scheduling Method That Identifies the Longest Dependency Path",
      explanation: "The Critical Path Method (CPM) identifies the longest sequence of dependent activities that determines the minimum project completion time.",
      difficulty: "ADVANCED",
      points: 20,
      timeLimitSeconds: 45,
      type: "TYPE_ANSWER",
      content: {
        answers: ["Critical Path Method", "CPM"],
        placeholder: "Enter the project management method",
      },
    },
  ],
} ;