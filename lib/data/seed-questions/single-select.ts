
export const SINGLE_SELECT_QUESTIONS = {
  "general-knowledge": [
    {
      title: "Which planet is known as the Red Planet?",
      explanation: "Mars is called the Red Planet because iron minerals on its surface have oxidized, giving it a reddish appearance.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Venus" },
          { id: "b", text: "Mars" },
          { id: "c", text: "Jupiter" },
          { id: "d", text: "Mercury" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "What is the largest ocean on Earth?",
      explanation: "The Pacific Ocean is the largest ocean, covering more area than all Earth's land combined.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Atlantic Ocean" },
          { id: "b", text: "Indian Ocean" },
          { id: "c", text: "Pacific Ocean" },
          { id: "d", text: "Arctic Ocean" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which element has the chemical symbol Au?",
      explanation: "Au comes from the Latin word aurum, meaning gold.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "Silver" },
          { id: "b", text: "Aluminum" },
          { id: "c", text: "Argon" },
          { id: "d", text: "Gold" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which is the smallest independent country by area?",
      explanation: "Vatican City is the world's smallest sovereign state, located entirely within Rome, Italy.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Vatican City" },
          { id: "b", text: "Monaco" },
          { id: "c", text: "San Marino" },
          { id: "d", text: "Liechtenstein" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  science: [
    {
      title: "What is the basic unit of life?",
      explanation: "The cell is the smallest structural and functional unit capable of carrying out the processes of life.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Atom" },
          { id: "b", text: "Cell" },
          { id: "c", text: "Molecule" },
          { id: "d", text: "Tissue" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which gas do plants absorb during photosynthesis?",
      explanation: "Plants absorb carbon dioxide and use light energy to produce sugars and release oxygen.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Oxygen" },
          { id: "b", text: "Nitrogen" },
          { id: "c", text: "Carbon dioxide" },
          { id: "d", text: "Hydrogen" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which subatomic particle has a negative electric charge?",
      explanation: "Electrons carry a negative electric charge and are found in regions surrounding an atom's nucleus.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "Proton" },
          { id: "b", text: "Neutron" },
          { id: "c", text: "Positron" },
          { id: "d", text: "Electron" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "What is the approximate speed of light in a vacuum?",
      explanation: "Light travels at approximately 299,792 kilometers per second in a vacuum.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "300,000 km/s" },
          { id: "b", text: "150,000 km/s" },
          { id: "c", text: "30,000 km/s" },
          { id: "d", text: "500,000 km/s" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  technology: [
    {
      title: "What does CPU stand for?",
      explanation: "CPU stands for Central Processing Unit, the main processor responsible for executing computer instructions.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Computer Processing Utility" },
          { id: "b", text: "Central Processing Unit" },
          { id: "c", text: "Central Program Utility" },
          { id: "d", text: "Computer Power Unit" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which language is primarily used to structure web pages?",
      explanation: "HTML defines the structure and content of web pages using elements and markup.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Python" },
          { id: "b", text: "SQL" },
          { id: "c", text: "HTML" },
          { id: "d", text: "C++" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which protocol is commonly used to securely transfer web pages?",
      explanation: "HTTPS uses HTTP with TLS encryption to protect communication between browsers and web servers.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "FTP" },
          { id: "b", text: "SMTP" },
          { id: "c", text: "Telnet" },
          { id: "d", text: "HTTPS" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "What does RAM primarily provide to a computer?",
      explanation: "Random Access Memory temporarily stores data and instructions that the processor needs while programs are running.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Temporary working memory" },
          { id: "b", text: "Permanent file storage" },
          { id: "c", text: "Internet connectivity" },
          { id: "d", text: "Graphics processing" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  mathematics: [
    {
      title: "What is 15% of 200?",
      explanation: "Convert 15% to 0.15 and multiply it by 200 to get 30.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "20" },
          { id: "b", text: "30" },
          { id: "c", text: "35" },
          { id: "d", text: "40" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "What is the square root of 144?",
      explanation: "12 multiplied by itself equals 144, so the principal square root is 12.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "10" },
          { id: "b", text: "11" },
          { id: "c", text: "12" },
          { id: "d", text: "14" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "What is the derivative of x²?",
      explanation: "Using the power rule, the derivative of x raised to a power n is n multiplied by x raised to n minus 1. Therefore, the derivative is 2x.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "x" },
          { id: "b", text: "x³" },
          { id: "c", text: "2" },
          { id: "d", text: "2x" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "What is the sum of the interior angles of a hexagon?",
      explanation: "The interior angle sum of an n-sided polygon is (n - 2) × 180°. For a hexagon, this equals 720°.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "720°" },
          { id: "b", text: "540°" },
          { id: "c", text: "900°" },
          { id: "d", text: "360°" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  history: [
    {
      title: "Which ancient civilization built the pyramids of Giza?",
      explanation: "The ancient Egyptians constructed the pyramids of Giza during the Old Kingdom period.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Romans" },
          { id: "b", text: "Ancient Egyptians" },
          { id: "c", text: "Greeks" },
          { id: "d", text: "Persians" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "In which year did World War II end?",
      explanation: "World War II ended in 1945, following the surrender of Germany and Japan.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "1939" },
          { id: "b", text: "1942" },
          { id: "c", text: "1945" },
          { id: "d", text: "1950" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which treaty formally ended the state of war between Germany and the Allied Powers after World War I?",
      explanation: "The Treaty of Versailles was signed in 1919 and established peace terms between Germany and the Allied Powers.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "Treaty of Paris" },
          { id: "b", text: "Treaty of Utrecht" },
          { id: "c", text: "Treaty of Vienna" },
          { id: "d", text: "Treaty of Versailles" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which empire was ruled by Suleiman the Magnificent?",
      explanation: "Suleiman I ruled the Ottoman Empire from 1520 to 1566, during a period of major territorial and cultural expansion.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Ottoman Empire" },
          { id: "b", text: "Mughal Empire" },
          { id: "c", text: "Roman Empire" },
          { id: "d", text: "Mongol Empire" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  geography: [
    {
      title: "What is the capital of Japan?",
      explanation: "Tokyo is Japan's capital and its largest metropolitan area.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Kyoto" },
          { id: "b", text: "Osaka" },
          { id: "c", text: "Tokyo" },
          { id: "d", text: "Hiroshima" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which continent is the Sahara Desert located in?",
      explanation: "The Sahara Desert stretches across much of North Africa.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Asia" },
          { id: "b", text: "Africa" },
          { id: "c", text: "Australia" },
          { id: "d", text: "South America" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which mountain range traditionally marks part of the boundary between Europe and Asia?",
      explanation: "The Ural Mountains are commonly used as part of the geographical boundary between Europe and Asia.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "Alps" },
          { id: "b", text: "Andes" },
          { id: "c", text: "Himalayas" },
          { id: "d", text: "Ural Mountains" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which country contains the region of Transylvania?",
      explanation: "Transylvania is a historical region located in central Romania.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Romania" },
          { id: "b", text: "Bulgaria" },
          { id: "c", text: "Hungary" },
          { id: "d", text: "Serbia" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  language: [
    {
      title: "Which word is a synonym of 'happy'?",
      explanation: "Glad means feeling pleasure or happiness and is a common synonym of happy.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Angry" },
          { id: "b", text: "Glad" },
          { id: "c", text: "Tired" },
          { id: "d", text: "Nervous" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which sentence uses the present perfect tense?",
      explanation: "The present perfect uses have or has followed by the past participle. 'She has finished' follows this structure.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "She finishes her work." },
          { id: "b", text: "She finished her work." },
          { id: "c", text: "She has finished her work." },
          { id: "d", text: "She will finish her work." },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which literary device gives human qualities to non-human things?",
      explanation: "Personification attributes human characteristics, emotions, or actions to animals, objects, or abstract ideas.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "Hyperbole" },
          { id: "b", text: "Metaphor" },
          { id: "c", text: "Alliteration" },
          { id: "d", text: "Personification" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which word is an example of a subordinating conjunction?",
      explanation: "'Although' introduces a dependent clause and expresses contrast, making it a subordinating conjunction.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Although" },
          { id: "b", text: "And" },
          { id: "c", text: "Or" },
          { id: "d", text: "But" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  literature: [
    {
      title: "Who wrote Romeo and Juliet?",
      explanation: "William Shakespeare wrote Romeo and Juliet, one of his most famous tragedies.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Charles Dickens" },
          { id: "b", text: "William Shakespeare" },
          { id: "c", text: "Jane Austen" },
          { id: "d", text: "Mark Twain" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Who wrote the novel Pride and Prejudice?",
      explanation: "Jane Austen published Pride and Prejudice in 1813, exploring social class, marriage, and personal judgment.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Emily Brontë" },
          { id: "b", text: "Mary Shelley" },
          { id: "c", text: "Jane Austen" },
          { id: "d", text: "Virginia Woolf" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which novel begins with the character Gregor Samsa waking up transformed into an insect-like creature?",
      explanation: "Franz Kafka's The Metamorphosis tells the story of Gregor Samsa and his sudden transformation.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "The Trial" },
          { id: "b", text: "The Stranger" },
          { id: "c", text: "Crime and Punishment" },
          { id: "d", text: "The Metamorphosis" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which literary movement is most closely associated with stream-of-consciousness writing?",
      explanation: "Modernist writers frequently used stream of consciousness to represent the continuous flow of thoughts and perceptions.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Modernism" },
          { id: "b", text: "Neoclassicism" },
          { id: "c", text: "Romanticism" },
          { id: "d", text: "Realism" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  arts: [
    {
      title: "Which artist painted the Mona Lisa?",
      explanation: "Leonardo da Vinci painted the Mona Lisa during the Italian Renaissance.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Vincent van Gogh" },
          { id: "b", text: "Leonardo da Vinci" },
          { id: "c", text: "Pablo Picasso" },
          { id: "d", text: "Claude Monet" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which art technique involves creating images from small colored pieces of material?",
      explanation: "Mosaic art uses small pieces of materials such as stone, glass, or ceramic arranged into patterns and images.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Fresco" },
          { id: "b", text: "Engraving" },
          { id: "c", text: "Mosaic" },
          { id: "d", text: "Sculpture" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which art movement is associated with Salvador Dalí?",
      explanation: "Salvador Dalí was a leading figure of Surrealism, known for dreamlike and imaginative imagery.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "Impressionism" },
          { id: "b", text: "Cubism" },
          { id: "c", text: "Realism" },
          { id: "d", text: "Surrealism" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Who developed the technique known as chiaroscuro in Renaissance painting?",
      explanation: "Chiaroscuro was developed and refined by multiple Renaissance artists. Leonardo da Vinci was particularly influential in its use to create depth through light and shadow.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Leonardo da Vinci" },
          { id: "b", text: "Andy Warhol" },
          { id: "c", text: "Jackson Pollock" },
          { id: "d", text: "Henri Matisse" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  music: [
    {
      title: "How many keys does a standard modern piano have?",
      explanation: "A standard full-size piano has 88 keys: 52 white keys and 36 black keys.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "61" },
          { id: "b", text: "88" },
          { id: "c", text: "76" },
          { id: "d", text: "100" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which instrument belongs to the woodwind family?",
      explanation: "The clarinet is a woodwind instrument that produces sound through a single reed.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Trumpet" },
          { id: "b", text: "Violin" },
          { id: "c", text: "Clarinet" },
          { id: "d", text: "Trombone" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "What is the relative minor key of C major?",
      explanation: "A minor is the relative minor of C major because both keys share the same key signature and notes.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "E minor" },
          { id: "b", text: "D minor" },
          { id: "c", text: "G minor" },
          { id: "d", text: "A minor" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which composer wrote the Four Seasons?",
      explanation: "Antonio Vivaldi composed The Four Seasons, a group of four violin concertos published in 1725.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Antonio Vivaldi" },
          { id: "b", text: "Johann Sebastian Bach" },
          { id: "c", text: "Wolfgang Amadeus Mozart" },
          { id: "d", text: "Ludwig van Beethoven" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  "movies-tv": [
    {
      title: "Which film features the fictional character Jack Sparrow?",
      explanation: "Captain Jack Sparrow is the central character of the Pirates of the Caribbean film series.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "The Lord of the Rings" },
          { id: "b", text: "Pirates of the Caribbean" },
          { id: "c", text: "Harry Potter" },
          { id: "d", text: "Jurassic Park" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which television series takes place primarily in the fictional town of Hawkins, Indiana?",
      explanation: "Stranger Things is set primarily in Hawkins, a fictional town in Indiana.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Breaking Bad" },
          { id: "b", text: "The Walking Dead" },
          { id: "c", text: "Stranger Things" },
          { id: "d", text: "Friends" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which film won the Academy Award for Best Picture at the 2020 ceremony?",
      explanation: "Parasite, directed by Bong Joon-ho, won Best Picture at the 92nd Academy Awards in 2020.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "1917" },
          { id: "b", text: "Joker" },
          { id: "c", text: "Once Upon a Time in Hollywood" },
          { id: "d", text: "Parasite" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Who directed the film Inception?",
      explanation: "Christopher Nolan wrote and directed Inception, released in 2010.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Christopher Nolan" },
          { id: "b", text: "Steven Spielberg" },
          { id: "c", text: "James Cameron" },
          { id: "d", text: "Ridley Scott" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  games: [
    {
      title: "Which company created the Super Mario video game series?",
      explanation: "Nintendo introduced Mario in its games and developed the famous Super Mario franchise.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Sony" },
          { id: "b", text: "Nintendo" },
          { id: "c", text: "Microsoft" },
          { id: "d", text: "Sega" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which game features the fictional world of Azeroth?",
      explanation: "World of Warcraft is an online role-playing game set in the fantasy world of Azeroth.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Minecraft" },
          { id: "b", text: "The Elder Scrolls" },
          { id: "c", text: "World of Warcraft" },
          { id: "d", text: "Final Fantasy" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which game engine was originally developed by Epic Games?",
      explanation: "Unreal Engine was created by Epic Games and is widely used for developing video games and interactive experiences.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "Unity" },
          { id: "b", text: "Godot" },
          { id: "c", text: "Source" },
          { id: "d", text: "Unreal Engine" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which company developed the original Dark Souls?",
      explanation: "FromSoftware developed Dark Souls, which was originally released in 2011.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "FromSoftware" },
          { id: "b", text: "Capcom" },
          { id: "c", text: "Konami" },
          { id: "d", text: "Square Enix" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  sports: [
    {
      title: "How many players does a football team have on the field during normal play?",
      explanation: "Each association football team normally fields 11 players, including the goalkeeper.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "9" },
          { id: "b", text: "10" },
          { id: "c", text: "11" },
          { id: "d", text: "12" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which sport uses the terms love, deuce, and advantage?",
      explanation: "These terms are used in tennis scoring to describe points and tied game situations.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Cricket" },
          { id: "b", text: "Tennis" },
          { id: "c", text: "Rugby" },
          { id: "d", text: "Volleyball" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which country hosted the first modern Olympic Games in 1896?",
      explanation: "The first modern Olympic Games took place in Athens, Greece, in 1896.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "France" },
          { id: "b", text: "Italy" },
          { id: "c", text: "United Kingdom" },
          { id: "d", text: "Greece" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "What is the maximum standard break in snooker without a free ball?",
      explanation: "A maximum standard snooker break is 147 points, achieved by potting all 15 reds with 15 blacks, followed by the six colors.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "147" },
          { id: "b", text: "155" },
          { id: "c", text: "120" },
          { id: "d", text: "180" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  business: [
    {
      title: "What does CEO stand for?",
      explanation: "CEO stands for Chief Executive Officer, the senior executive responsible for leading an organization.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Chief Economic Officer" },
          { id: "b", text: "Chief Executive Officer" },
          { id: "c", text: "Corporate Executive Organizer" },
          { id: "d", text: "Central Executive Operator" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "What is a business plan primarily used for?",
      explanation: "A business plan describes a company's objectives, strategies, market, operations, and financial expectations.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Recording employee attendance" },
          { id: "b", text: "Calculating daily taxes only" },
          { id: "c", text: "Defining business goals and strategies" },
          { id: "d", text: "Managing personal expenses" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "What does SWOT analysis evaluate?",
      explanation: "SWOT stands for Strengths, Weaknesses, Opportunities, and Threats. It evaluates internal and external business factors.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "Sales, Wages, Operations, Taxes" },
          { id: "b", text: "Strategy, Work, Objectives, Targets" },
          { id: "c", text: "Systems, Workflows, Output, Technology" },
          { id: "d", text: "Strengths, Weaknesses, Opportunities, Threats" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "What is the term for the point at which total revenue equals total costs?",
      explanation: "The break-even point occurs when revenue exactly covers fixed and variable costs, resulting in neither profit nor loss.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Break-even point" },
          { id: "b", text: "Profit margin" },
          { id: "c", text: "Market equilibrium" },
          { id: "d", text: "Return on investment" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  economics: [
    {
      title: "What happens to demand when the price of a normal good decreases, assuming other factors remain constant?",
      explanation: "According to the law of demand, a lower price generally leads to a higher quantity demanded, all else being equal.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Demand always disappears" },
          { id: "b", text: "Quantity demanded generally increases" },
          { id: "c", text: "Quantity demanded always decreases" },
          { id: "d", text: "Supply becomes zero" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "What is inflation?",
      explanation: "Inflation is a sustained increase in the general price level of goods and services over time.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "A decrease in population" },
          { id: "b", text: "An increase in production only" },
          { id: "c", text: "A general rise in prices" },
          { id: "d", text: "A reduction in government spending" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "What is the opportunity cost of a decision?",
      explanation: "Opportunity cost is the value of the next-best alternative that is given up when making a choice.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "The total money already spent" },
          { id: "b", text: "The market price of a product" },
          { id: "c", text: "The total amount of available resources" },
          { id: "d", text: "The value of the next-best alternative forgone" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which economic concept describes a situation where one additional unit of consumption provides less additional satisfaction?",
      explanation: "The law of diminishing marginal utility states that marginal satisfaction tends to decrease as consumption of additional units increases.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Diminishing marginal utility" },
          { id: "b", text: "Comparative advantage" },
          { id: "c", text: "Price elasticity" },
          { id: "d", text: "Economies of scale" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  programming: [
    {
      title: "Which data type is commonly used to store whole numbers?",
      explanation: "An integer type stores whole numbers without fractional parts in many programming languages.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "String" },
          { id: "b", text: "Integer" },
          { id: "c", text: "Boolean" },
          { id: "d", text: "Array" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "What is the purpose of a loop in programming?",
      explanation: "Loops allow a block of code to execute repeatedly while a condition holds or for a specified number of iterations.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "To permanently delete variables" },
          { id: "b", text: "To define a database" },
          { id: "c", text: "To repeat a block of instructions" },
          { id: "d", text: "To change the programming language" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "What is the average time complexity of searching for an element in a hash table?",
      explanation: "A well-designed hash table provides average-case constant-time lookup, although collisions can affect performance.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "O(n)" },
          { id: "b", text: "O(log n)" },
          { id: "c", text: "O(n²)" },
          { id: "d", text: "O(1)" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which principle allows a class to provide a specific implementation of a method defined in its parent class?",
      explanation: "Method overriding allows a subclass to provide its own implementation of an inherited method.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Method overriding" },
          { id: "b", text: "Encapsulation" },
          { id: "c", text: "Method overloading" },
          { id: "d", text: "Abstraction" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  health: [
    {
      title: "Which organ pumps blood throughout the human body?",
      explanation: "The heart is a muscular organ that pumps blood through the circulatory system.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Liver" },
          { id: "b", text: "Lungs" },
          { id: "c", text: "Heart" },
          { id: "d", text: "Kidneys" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which vitamin is primarily produced by the skin through exposure to sunlight?",
      explanation: "The skin produces vitamin D when exposed to ultraviolet B radiation from sunlight.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Vitamin A" },
          { id: "b", text: "Vitamin D" },
          { id: "c", text: "Vitamin C" },
          { id: "d", text: "Vitamin B12" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which part of the brain is primarily responsible for coordinating balance and voluntary movement?",
      explanation: "The cerebellum plays an important role in coordinating movement, posture, and balance.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "Hypothalamus" },
          { id: "b", text: "Medulla" },
          { id: "c", text: "Hippocampus" },
          { id: "d", text: "Cerebellum" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which type of white blood cell produces antibodies?",
      explanation: "B lymphocytes can differentiate into plasma cells that produce antibodies as part of the adaptive immune response.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "B lymphocytes" },
          { id: "b", text: "Red blood cells" },
          { id: "c", text: "Platelets" },
          { id: "d", text: "Neutrophils" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  food: [
    {
      title: "Which ingredient is traditionally used to make guacamole?",
      explanation: "Avocado is the main ingredient in traditional guacamole, a dish originating in Mexico.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Potato" },
          { id: "b", text: "Avocado" },
          { id: "c", text: "Cucumber" },
          { id: "d", text: "Pumpkin" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which country is traditionally associated with sushi?",
      explanation: "Sushi developed in Japan and is now an internationally recognized part of Japanese cuisine.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Thailand" },
          { id: "b", text: "China" },
          { id: "c", text: "Japan" },
          { id: "d", text: "Vietnam" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which chemical compound gives chili peppers their characteristic heat?",
      explanation: "Capsaicin activates heat-sensitive receptors in the body, producing the sensation of spiciness.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "Citric acid" },
          { id: "b", text: "Piperine" },
          { id: "c", text: "Menthol" },
          { id: "d", text: "Capsaicin" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which French cooking technique involves cooking food slowly in liquid at a low temperature?",
      explanation: "Braising combines dry and moist cooking methods, typically beginning with browning before slow cooking in liquid.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Braising" },
          { id: "b", text: "Sautéing" },
          { id: "c", text: "Blanching" },
          { id: "d", text: "Grilling" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  nature: [
    {
      title: "Which is the largest land animal?",
      explanation: "The African elephant is the largest living land animal by size and weight.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Giraffe" },
          { id: "b", text: "African elephant" },
          { id: "c", text: "Hippopotamus" },
          { id: "d", text: "Rhinoceros" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "What is the process by which caterpillars transform into butterflies called?",
      explanation: "Metamorphosis is the biological process through which an organism undergoes major changes in form during development.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Pollination" },
          { id: "b", text: "Germination" },
          { id: "c", text: "Metamorphosis" },
          { id: "d", text: "Photosynthesis" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which biome is characterized by permanently frozen subsoil called permafrost?",
      explanation: "The tundra biome is characterized by low temperatures, limited vegetation, and permafrost beneath much of its surface.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "Savanna" },
          { id: "b", text: "Tropical rainforest" },
          { id: "c", text: "Temperate grassland" },
          { id: "d", text: "Tundra" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "What is the term for a species that has a disproportionately large effect on its ecosystem relative to its abundance?",
      explanation: "A keystone species has a major ecological influence, and its removal can significantly alter an ecosystem.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Keystone species" },
          { id: "b", text: "Invasive species" },
          { id: "c", text: "Endemic species" },
          { id: "d", text: "Indicator species" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  psychology: [
    {
      title: "Which psychologist is widely associated with the theory of classical conditioning?",
      explanation: "Ivan Pavlov demonstrated classical conditioning through experiments showing how animals learn associations between stimuli.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Sigmund Freud" },
          { id: "b", text: "Ivan Pavlov" },
          { id: "c", text: "Jean Piaget" },
          { id: "d", text: "Carl Rogers" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which term describes the process of storing and retrieving information?",
      explanation: "Memory involves encoding, storing, and retrieving information over time.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Perception" },
          { id: "b", text: "Motivation" },
          { id: "c", text: "Memory" },
          { id: "d", text: "Attention" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which psychologist proposed the hierarchy of needs?",
      explanation: "Abraham Maslow proposed a hierarchy of human needs, ranging from basic physiological needs to self-actualization.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "B. F. Skinner" },
          { id: "b", text: "Albert Bandura" },
          { id: "c", text: "Erik Erikson" },
          { id: "d", text: "Abraham Maslow" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "What is cognitive dissonance?",
      explanation: "Cognitive dissonance is psychological discomfort resulting from conflicting beliefs, attitudes, or behaviors.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Discomfort caused by conflicting beliefs or actions" },
          { id: "b", text: "The inability to form memories" },
          { id: "c", text: "A form of classical conditioning" },
          { id: "d", text: "A method of measuring intelligence" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  philosophy: [
    {
      title: "Who is traditionally considered the teacher of Plato?",
      explanation: "Socrates was the teacher of Plato and is one of the foundational figures of Western philosophy.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Aristotle" },
          { id: "b", text: "Socrates" },
          { id: "c", text: "Pythagoras" },
          { id: "d", text: "Epicurus" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which branch of philosophy studies the nature of knowledge?",
      explanation: "Epistemology examines knowledge, its sources, its limits, and how beliefs can be justified.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Ethics" },
          { id: "b", text: "Aesthetics" },
          { id: "c", text: "Epistemology" },
          { id: "d", text: "Logic" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which philosopher wrote Critique of Pure Reason?",
      explanation: "Immanuel Kant published Critique of Pure Reason in 1781, examining the limits and foundations of human knowledge.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "John Locke" },
          { id: "b", text: "David Hume" },
          { id: "c", text: "Friedrich Nietzsche" },
          { id: "d", text: "Immanuel Kant" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which ethical theory evaluates actions primarily according to their consequences?",
      explanation: "Consequentialism judges the moral status of actions based on their outcomes. Utilitarianism is one influential form.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Consequentialism" },
          { id: "b", text: "Deontology" },
          { id: "c", text: "Virtue ethics" },
          { id: "d", text: "Existentialism" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  religion: [
    {
      title: "What is the holy book of Islam?",
      explanation: "The Quran is the central religious text of Islam, regarded by Muslims as the revelation of God to Prophet Muhammad.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Torah" },
          { id: "b", text: "Quran" },
          { id: "c", text: "Bible" },
          { id: "d", text: "Vedas" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which religion originated in ancient India and teaches the Four Noble Truths?",
      explanation: "The Four Noble Truths are fundamental teachings of Buddhism, traditionally associated with Siddhartha Gautama.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Judaism" },
          { id: "b", text: "Christianity" },
          { id: "c", text: "Buddhism" },
          { id: "d", text: "Zoroastrianism" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "What is the term for the Islamic practice of giving a prescribed portion of wealth to eligible recipients?",
      explanation: "Zakat is an obligatory form of charitable giving and one of the Five Pillars of Islam.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "Hajj" },
          { id: "b", text: "Sawm" },
          { id: "c", text: "Shahada" },
          { id: "d", text: "Zakat" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which ancient Indian text is a major foundational scripture of Hindu philosophy?",
      explanation: "The Upanishads are a collection of philosophical and spiritual texts that form an important part of Hindu religious literature.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "The Upanishads" },
          { id: "b", text: "The Analects" },
          { id: "c", text: "The Epic of Gilgamesh" },
          { id: "d", text: "The Talmud" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  travel: [
    {
      title: "Which city is famous for the Eiffel Tower?",
      explanation: "The Eiffel Tower is one of the most recognizable landmarks in Paris, France.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "London" },
          { id: "b", text: "Paris" },
          { id: "c", text: "Rome" },
          { id: "d", text: "Madrid" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which country is home to the ancient city of Petra?",
      explanation: "Petra is an archaeological city in Jordan, famous for its rock-cut architecture and historical significance.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Egypt" },
          { id: "b", text: "Greece" },
          { id: "c", text: "Jordan" },
          { id: "d", text: "Turkey" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which strait separates Spain from Morocco?",
      explanation: "The Strait of Gibraltar connects the Atlantic Ocean with the Mediterranean Sea and separates southern Spain from northern Morocco.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "Bosporus" },
          { id: "b", text: "Bering Strait" },
          { id: "c", text: "Strait of Malacca" },
          { id: "d", text: "Strait of Gibraltar" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which city is located at the confluence of the Blue Nile and White Nile?",
      explanation: "Khartoum, the capital of Sudan, is situated where the Blue Nile and White Nile meet.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Khartoum" },
          { id: "b", text: "Cairo" },
          { id: "c", text: "Addis Ababa" },
          { id: "d", text: "Juba" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  culture: [
    {
      title: "Which country is traditionally associated with the festival of Holi?",
      explanation: "Holi is a Hindu spring festival widely celebrated in India and other parts of South Asia.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Japan" },
          { id: "b", text: "India" },
          { id: "c", text: "Brazil" },
          { id: "d", text: "Norway" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which language is most widely associated with traditional flamenco music?",
      explanation: "Flamenco developed in Andalusia, Spain, where Spanish is the primary language used in its traditional songs.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Portuguese" },
          { id: "b", text: "Italian" },
          { id: "c", text: "Spanish" },
          { id: "d", text: "French" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which cultural concept from Japan emphasizes finding beauty in imperfection and impermanence?",
      explanation: "Wabi-sabi is a Japanese aesthetic philosophy that appreciates imperfection, simplicity, and the passage of time.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "Ikigai" },
          { id: "b", text: "Kaizen" },
          { id: "c", text: "Bushido" },
          { id: "d", text: "Wabi-sabi" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which ancient civilization developed the cuneiform writing system?",
      explanation: "The Sumerians of ancient Mesopotamia developed one of the earliest known writing systems, cuneiform.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Sumerians" },
          { id: "b", text: "Romans" },
          { id: "c", text: "Phoenicians" },
          { id: "d", text: "Aztecs" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  education: [
    {
      title: "Which study technique involves reviewing information at increasing intervals?",
      explanation: "Spaced repetition schedules reviews over progressively longer intervals to support long-term retention.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Massed practice" },
          { id: "b", text: "Spaced repetition" },
          { id: "c", text: "Passive reading" },
          { id: "d", text: "Random guessing" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "What is the primary purpose of formative assessment?",
      explanation: "Formative assessment provides feedback during the learning process so teachers and students can identify progress and areas needing improvement.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Assigning final grades only" },
          { id: "b", text: "Ranking schools nationally" },
          { id: "c", text: "Monitoring learning and providing feedback" },
          { id: "d", text: "Replacing all classroom instruction" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which educational theorist is associated with the concept of the Zone of Proximal Development?",
      explanation: "Lev Vygotsky introduced the Zone of Proximal Development to describe tasks learners can accomplish with guidance but not yet independently.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "John Dewey" },
          { id: "b", text: "Jean Piaget" },
          { id: "c", text: "Jerome Bruner" },
          { id: "d", text: "Lev Vygotsky" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which instructional design framework includes the stages Analysis, Design, Development, Implementation, and Evaluation?",
      explanation: "The ADDIE model is a systematic instructional design framework consisting of five stages: Analysis, Design, Development, Implementation, and Evaluation.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "ADDIE" },
          { id: "b", text: "Bloom's Taxonomy" },
          { id: "c", text: "Kirkpatrick Model" },
          { id: "d", text: "SAMR" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  "current-events": [
    {
      title: "Which international organization is primarily responsible for promoting global public health?",
      explanation: "The World Health Organization coordinates international public health efforts and supports countries in addressing health challenges.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "World Trade Organization" },
          { id: "b", text: "World Health Organization" },
          { id: "c", text: "International Monetary Fund" },
          { id: "d", text: "World Bank" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "What does the abbreviation COP commonly refer to in international climate negotiations?",
      explanation: "COP stands for Conference of the Parties, the meeting of parties to an international convention such as the UN climate convention.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Council of Presidents" },
          { id: "b", text: "Committee of Parliament" },
          { id: "c", text: "Conference of the Parties" },
          { id: "d", text: "Commission of Policies" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "Which agreement is the main international treaty addressing climate change?",
      explanation: "The Paris Agreement, adopted in 2015 under the UN Framework Convention on Climate Change, aims to limit global temperature rise.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "Kyoto Protocol only" },
          { id: "b", text: "Montreal Protocol" },
          { id: "c", text: "Geneva Convention" },
          { id: "d", text: "Paris Agreement" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which institution is responsible for maintaining international peace and security within the United Nations system?",
      explanation: "The UN Security Council has primary responsibility for maintaining international peace and security under the UN Charter.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "UN Security Council" },
          { id: "b", text: "UNESCO" },
          { id: "c", text: "International Court of Justice" },
          { id: "d", text: "World Health Organization" },
        ],
        correctOptionId: "a",
      },
    },
  ],

  other: [
    {
      title: "What is the main ingredient in traditional glass?",
      explanation: "Silica, commonly obtained from sand, is the primary ingredient in most ordinary glass.",
      points: 1,
      timeLimitSeconds: 30,
      order: 1,
      content: {
        options: [
          { id: "a", text: "Clay" },
          { id: "b", text: "Silica" },
          { id: "c", text: "Iron" },
          { id: "d", text: "Carbon" },
        ],
        correctOptionId: "b",
      },
    },
    {
      title: "Which animal is famous for its ability to change skin color using specialized cells?",
      explanation: "Chameleons use specialized skin cells called chromatophores and other reflective cells to produce color changes.",
      points: 1,
      timeLimitSeconds: 30,
      order: 2,
      content: {
        options: [
          { id: "a", text: "Penguin" },
          { id: "b", text: "Kangaroo" },
          { id: "c", text: "Chameleon" },
          { id: "d", text: "Dolphin" },
        ],
        correctOptionId: "c",
      },
    },
    {
      title: "What is the name of the scientific instrument used to measure atmospheric pressure?",
      explanation: "A barometer measures atmospheric pressure and is commonly used in weather forecasting.",
      points: 2,
      timeLimitSeconds: 45,
      order: 3,
      content: {
        options: [
          { id: "a", text: "Thermometer" },
          { id: "b", text: "Hygrometer" },
          { id: "c", text: "Anemometer" },
          { id: "d", text: "Barometer" },
        ],
        correctOptionId: "d",
      },
    },
    {
      title: "Which mathematical constant represents the ratio of a circle's circumference to its diameter?",
      explanation: "Pi (π) is the mathematical constant approximately equal to 3.14159, representing the circumference-to-diameter ratio of every circle.",
      points: 2,
      timeLimitSeconds: 45,
      order: 4,
      content: {
        options: [
          { id: "a", text: "Pi" },
          { id: "b", text: "Euler's number" },
          { id: "c", text: "The golden ratio" },
          { id: "d", text: "Square root of two" },
        ],
        correctOptionId: "a",
      },
    },
  ],
} ;
