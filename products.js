/* products.js — KidsZen Toys product catalogue (Updated with all products) */

const products = [
  // Existing products remain unchanged for compatibility
  {
    id: "velcro-kit",
    name: "Velcro Activity Kit",
    tag: null,
    ageGroup: "0-2",
    age: "2+ years",
    price: "₹350",
    tagline: "Pull and place preschool learning",
    players: null,
    description: "Joyful, hands-on learning with a pull and place activity designed for preschoolers. Colourful laminated sheets and easy-to-hold Velcro pieces make learning exciting and mess-free while building fine motor skills, concentration and sorting ability.",
    highlights: [
      "Improves fine motor skills",
      "Boosts concentration and focus",
      "Enhances sorting and matching skills",
      "Encourages vocabulary building",
      "Supports early cognitive development",
      "Keeps kids away from screens"
    ],
    skills: ["Colours", "Shapes", "Animals", "Fruits and vegetables", "Matching and sorting"],
    inTheBox: [
      "5 reusable activity sheets",
      "30 easy-to-hold Velcro pieces",
      "Durable laminated sheets for long-lasting use"
    ],
    howToPlay: [
      "Choose an activity sheet",
      "Pick the correct Velcro pieces",
      "Match and stick them in the right place"
    ],
    perfectFor: ["Home learning", "Travel", "Classrooms", "Activity time"],
    images: [
      "assets/products/velcro-activity-kit/main.png",
      "assets/products/velcro-activity-kit/lifestyle1.png",
      "assets/products/velcro-activity-kit/how-to-play.png",
      "assets/products/velcro-activity-kit/what-inside.png",
      "assets/products/velcro-activity-kit/main2.jpeg",
      "assets/products/velcro-activity-kit/lifestyle2.png",
      "assets/products/velcro-activity-kit/lifestyle3.png",
      "assets/products/velcro-activity-kit/lifestyle4.png"
    ],
    image: "assets/products/velcro-activity-kit/main.png",
    amazon: "https://www.amazon.in/dp/B0BWTXMR3J",
    verified: true,
    site: "https://www.kidszentoys.com/product-page/velcro-activity-kit"
  },
  {
    id: "animals",
    name: "Know More About Animals",
    tag: null,
    ageGroup: "0-2",
    age: "2+ years",
    price: "₹250",
    tagline: "Draw, observe and learn about animals",
    players: "2 players",
    description: "Make learning about animals fun, creative and engaging. This activity game encourages kids to draw, observe and learn about animals while enjoying playful moments. Includes reusable activity sheets and interactive exercises that promote learning through play.",
    highlights: [
      "Encourages creativity and imagination",
      "Helps kids learn about different animals",
      "Improves fine motor skills and hand-eye coordination",
      "Boosts social skills through two-player interaction",
      "Reusable, mess-free and screen-free",
      "Keeps kids engaged during travel or free time"
    ],
    skills: ["Animal recognition", "Drawing and creativity", "Focus and concentration", "Social interaction"],
    inTheBox: [
      "Reusable animal-based activity sheets",
      "Drawing and fun learning tasks",
      "Sketch pens",
      "Easy-to-carry format"
    ],
    howToPlay: null,
    perfectFor: ["Long car rides", "Flights and holidays", "Restaurants", "Quiet playtime at home"],
    images: [
      "assets/products/know-more-about-animals/main1.png",
      "assets/products/know-more-about-animals/lifestyle-1.png",
      "assets/products/know-more-about-animals/how-to-play.png",
      "assets/products/know-more-about-animals/what-inside.png",
      "assets/products/know-more-about-animals/mkain-2.png",
      "assets/products/know-more-about-animals/main5.png",
      "assets/products/know-more-about-animals/lifestyle-2.png",
      "assets/products/know-more-about-animals/lifestyle-3.png"
    ],
    image: "assets/products/know-more-about-animals/main1.png",
    amazon: "https://www.amazon.in/dp/B0C9NJH6M2",
    verified: true,
    site: "https://www.kidszentoys.com/product-page/know-more-about-animals"
  },
  {
    id: "emotion-game",
    name: "The Emotion Game",
    tag: null,
    ageGroup: "2-5",
    age: "3+ years",
    price: "₹350",
    tagline: "Learn 36 emotions through play",
    players: "2 players",
    description: "An interactive educational board game that helps children explore and understand 36 different human emotions. Montessori-inspired and STEM-based, kids create expressive faces using Velcro facial pieces and colour dice.",
    highlights: [
      "Encourages expressive communication",
      "Builds confidence in identifying emotions",
      "Hands-on, screen-free learning",
      "Montessori-inspired and STEM-based",
      "Child-safe and durable materials"
    ],
    skills: ["Emotional intelligence", "Facial recognition", "Social-emotional development", "Fine motor skills", "Logical thinking"],
    inTheBox: [
      "1 game board",
      "2 face cards (boy and girl)",
      "36 Velcro facial pieces",
      "2 colour dice"
    ],
    howToPlay: [
      "Roll the 2 colour dice together",
      "Match the colour combination on the game board",
      "Pick the correct eyes, nose or mouth Velcro piece",
      "Stick it on the boy or girl face card",
      "Create different emotions and expressions"
    ],
    perfectFor: ["Home learning", "Preschool activities", "Classrooms", "Therapy sessions"],
    images: [
      "assets/products/emotion-game/main1.png",
      "assets/products/emotion-game/lifestyle-2.png",
      "assets/products/emotion-game/how-to-play.png",
      "assets/products/emotion-game/what-inside.png",
      "assets/products/emotion-game/main5.png",
      "assets/products/emotion-game/main6.png",
      "assets/products/emotion-game/lifestyle-3.png"
    ],
    image: "assets/products/emotion-game/main1.png",
    amazon: "https://www.amazon.in/dp/B0CBBRMPNT",
    verified: true,
    site: "https://www.kidszentoys.com/product-page/the-emotion-game"
  },
  {
    id: "happy-tooth",
    name: "Happy Tooth & Sad Tooth",
    tag: null,
    ageGroup: "2-5",
    age: "3+ years",
    price: "₹350",
    tagline: "Velcro activity on healthy eating habits",
    players: "1 player",
    description: "Make learning about healthy eating fun and interactive. Children find out which foods keep their teeth happy and which make them sad, all through hands-on Velcro play. An important health lesson turned into a joyful experience.",
    highlights: [
      "Teaches difference between healthy and unhealthy foods",
      "Builds importance of dental care",
      "Encourages smart food choices from an early age",
      "Learning through play, with no screens"
    ],
    skills: ["Fine motor skills", "Hand-eye coordination", "Logical thinking", "Imagination", "Independent play"],
    inTheBox: [
      "1 colourful Happy Tooth & Sad Tooth board",
      "20 reusable Velcro food cards",
      "Clear carry bag for storage and travel"
    ],
    howToPlay: [
      "Pick a food card",
      "Decide if it is healthy or unhealthy",
      "Stick it on the correct tooth"
    ],
    perfectFor: ["Preschoolers", "Early learners", "Homeschooling", "Activity time at home"],
    images: [
      "assets/products/happy-tooth-sad-tooth/main1.png",
      "assets/products/happy-tooth-sad-tooth/final-lifestyle-1.png",
      "assets/products/happy-tooth-sad-tooth/how-to-play.png",
      "assets/products/happy-tooth-sad-tooth/what-inside.png",
      "assets/products/happy-tooth-sad-tooth/main-8.png",
      "assets/products/happy-tooth-sad-tooth/final-lifestyle-2.png",
      "assets/products/happy-tooth-sad-tooth/final-lifestyle-3.png",
      "assets/products/happy-tooth-sad-tooth/final-lifestyle-4.png"
    ],
    image: "assets/products/happy-tooth-sad-tooth/main1.png",
    amazon: "https://www.amazon.in/dp/B0DJ948HWJ",
    verified: true,
    site: "https://www.kidszentoys.com/product-page/happy-tooth-sad-tooth"
  },
  {
    id: "pattern-games",
    name: "Pattern Game",
    tag: null,
    ageGroup: "2-5",
    age: "3+ years",
    price: "₹150",
    tagline: "Copy the pattern, think logically, stay focused",
    players: "1 player",
    description: "This activity game helps children copy patterns, think logically and improve focus, all while having loads of fun. Simple, engaging and screen-free, it suits home play, travel time or quiet activity sessions.",
    highlights: [
      "Boosts logical thinking",
      "Improves hand-eye coordination",
      "Enhances pattern recognition",
      "Builds concentration and focus",
      "Encourages creativity and imagination"
    ],
    skills: ["Pattern recognition", "Logical thinking", "Hand-eye coordination", "Concentration"],
    inTheBox: [
      "1 laminated big board card (reusable)",
      "20 small pattern cards",
      "Easy-to-carry storage pouch"
    ],
    howToPlay: ["Pick a card", "Copy the pattern on the board", "Erase and play again"],
    perfectFor: ["Home learning", "Travel activities", "Return gifts", "Screen-free playtime"],
    images: [
      "assets/products/pattern-game/main1.png",
      "assets/products/pattern-game/lifestyle1.png",
      "assets/products/pattern-game/how-to-play.png",
      "assets/products/pattern-game/what-inside.png",
      "assets/products/pattern-game/main-2.png",
      "assets/products/pattern-game/main3.png",
      "assets/products/pattern-game/lifestyle2.png",
      "assets/products/pattern-game/lifestyle3.png"
    ],
    image: "assets/products/pattern-game/main1.png",
    amazon: "https://www.amazon.in/stores/KidszenToys/page/4A644D32-AA14-42C2-908E-B74A1CC33BCE",
    verified: false,
    site: "https://www.kidszentoys.com/product-page/pattern-games"
  },
  {
    id: "travel-kit",
    name: "Travel Activity Kit",
    tag: null,
    ageGroup: "2-5",
    age: "3+ years",
    price: "₹250",
    tagline: "Fun, learning and screen-free play on the go",
    players: "2 players",
    description: "Make every journey fun and stress-free. Reusable activity sheets and drawing activities let kids draw, observe, match and solve again and again, without screens or mess. Lightweight and easy to carry.",
    highlights: [
      "Keeps kids entertained on car rides, flights and vacations",
      "Promotes learning through fun activities",
      "Encourages creativity and imagination",
      "Improves fine motor skills and hand-eye coordination",
      "Reusable, wipe-and-play-again sheets",
      "Lightweight and easy to carry"
    ],
    skills: ["Observation skills", "Logical thinking", "Drawing and creativity", "Focus", "Social interaction"],
    inTheBox: [
      "Reusable activity sheets",
      "Drawing and observation games",
      "Sketch pens",
      "Interactive travel-based exercises"
    ],
    howToPlay: null,
    perfectFor: ["Car rides", "Flights", "Restaurants", "Holidays and waiting times"],
    images: [
      "assets/products/travel-activity-kit/main.png",
      "assets/products/travel-activity-kit/lifestyle-1.png",
      "assets/products/travel-activity-kit/how-to-play.png",
      "assets/products/travel-activity-kit/what-inside-copy.png",
      "assets/products/travel-activity-kit/lifestyle-2.png",
      "assets/products/travel-activity-kit/lifestyle-3.png",
      "assets/products/travel-activity-kit/lifestyle-4.png"
    ],
    image: "assets/products/travel-activity-kit/main.png",
    amazon: "https://www.amazon.in/dp/B0D6R135VF",
    verified: true,
    site: "https://www.kidszentoys.com/product-page/travel-activity-kit"
  },
  {
    id: "jain-tirthankara",
    name: "Jain Tirthankaras & Symbols",
    tag: null,
    ageGroup: "5-10",
    age: "5+ years",
    price: "₹250",
    tagline: "Learn all 24 Tirthankaras and their symbols",
    players: "2 players",
    description: "A first-of-its-kind educational toy for the Jain community, helping children and families learn about all 24 Jain Tirthankaras and their symbols. This Velcro-based activity game makes spiritual learning joyful, memorable and meaningful.",
    highlights: [
      "Builds cultural and spiritual awareness",
      "Improves memory and concentration",
      "Enhances fine motor skills",
      "Boosts imagination and logical thinking",
      "Encourages family learning time",
      "Reduces screen time with meaningful play"
    ],
    skills: ["Memory", "Cultural awareness", "Matching", "Fine motor skills"],
    inTheBox: [
      "4 laminated activity sheets",
      "Images of all 24 Jain Tirthankaras",
      "24 Velcro symbol pieces",
      "Reusable, wipe-clean design"
    ],
    howToPlay: [
      "Introduce your child to the names of the 24 Tirthankaras",
      "Share short stories about their lives and teachings",
      "Explain the significance of their symbols",
      "Match each Tirthankara with the correct symbol using Velcro pieces"
    ],
    perfectFor: ["Cultural education", "Family bonding", "Jain families", "Gifting"],
    images: [
      "assets/products/jain-tirthankaras/main-1.png",
      "assets/products/jain-tirthankaras/lifestyle1.png",
      "assets/products/jain-tirthankaras/how-to-play.png",
      "assets/products/jain-tirthankaras/what-inside.png",
      "assets/products/jain-tirthankaras/benefits.png",
      "assets/products/jain-tirthankaras/main3-what-inside.png",
      "assets/products/jain-tirthankaras/lifestyle-2.png",
      "assets/products/jain-tirthankaras/lifestyle-3.png"
    ],
    image: "assets/products/jain-tirthankaras/main-1.png",
    amazon: "https://www.amazon.in/dp/B0CQ7W412V",
    verified: true,
    site: "https://www.kidszentoys.com/product-page/jain-tirthankara-their-symbols"
  },
  {
    id: "crazy-samosa",
    name: "Crazy Samosa",
    tag: null,
    ageGroup: "5-10",
    age: "5+ years",
    price: "₹400",
    tagline: "Cricket adventure board game",
    players: "2 players",
    description: "A cricket-themed board game for little cricket lovers. It combines the thrill of cricket with the joy of board games. Simple to understand and fast-paced, it keeps children engaged from start to finish.",
    highlights: [
      "Improves social interaction",
      "Builds turn-taking habits",
      "Enhances fine motor skills",
      "Boosts imagination",
      "Encourages strategic thinking",
      "Promotes screen-free play"
    ],
    skills: ["Strategic thinking", "Turn-taking", "Counting", "Social interaction"],
    inTheBox: ["Colourful game board", "Dice", "Player tokens", "Fun cricket-based action spaces"],
    howToPlay: [
      "Take turns rolling the dice",
      "Move forward based on your roll",
      "Land on a Crazy Samosa space and follow the instruction",
      "Hit a Six, score Four Runs, get Out or move backward",
      "First player to cross the finish line wins"
    ],
    perfectFor: ["Birthday gifts", "Return gifts", "Family game time", "Cricket-loving kids"],
    images: [
      "assets/products/crazy-samosa/main1.png",
      "assets/products/crazy-samosa/lifestyle.png",
      "assets/products/crazy-samosa/how-to-play.png",
      "assets/products/crazy-samosa/what-inside.jpeg",
      "assets/products/crazy-samosa/overview.png",
      "assets/products/crazy-samosa/complete-opean-view.png",
      "assets/products/crazy-samosa/back-view.png",
      "assets/products/crazy-samosa/a.png"
    ],
    image: "assets/products/crazy-samosa/main1.png",
    amazon: "https://www.amazon.in/dp/B0DMP557XX",
    verified: true,
    site: "https://www.kidszentoys.com/product-page/crazy-samosa"
  },
  {
    id: "ramayana-quiz",
    name: "Ramayana Quiz Board Game",
    tag: "Bestseller",
    ageGroup: "5-10",
    age: "5+ years",
    price: "₹550",
    tagline: "Learn Indian culture through play",
    players: "2 players",
    description: "Introduce your child to the timeless epic of Ramayana in a fun, interactive way. Through quiz questions, instruction cards and interactive gameplay, kids explore the story of Lord Rama in a simple, age-appropriate format.",
    highlights: [
      "40+ engaging quiz questions",
      "Simple, easy-to-understand format",
      "Encourages cultural learning",
      "Improves memory and knowledge retention",
      "Boosts imagination and curiosity",
      "Enhances social interaction",
      "Perfect for family bonding time"
    ],
    skills: ["General knowledge", "Cultural awareness", "Logical thinking", "Focus", "Social skills"],
    inTheBox: [
      "Illustrated game board",
      "Question cards",
      "Instruction cards",
      "Answer key",
      "Dice",
      "Game tokens (Vanarsena pawns)"
    ],
    howToPlay: null,
    perfectFor: ["Family game nights", "Festivals", "Return gifts", "Screen-free playtime"],
    images: [
      "assets/products/ramayana-quiz/main.png",
      "assets/products/ramayana-quiz/lifestyle.png",
      "assets/products/ramayana-quiz/how-to-play.jpg",
      "assets/products/ramayana-quiz/what-inside.png",
      "assets/products/ramayana-quiz/overview-of-game.png",
      "assets/products/ramayana-quiz/lifestyle-image.png",
      "assets/products/ramayana-quiz/lifestyle-2.png",
      "assets/products/ramayana-quiz/lifestyle-3.png"
    ],
    image: "assets/products/ramayana-quiz/main.png",
    amazon: "https://www.amazon.in/stores/KidszenToys/page/4A644D32-AA14-42C2-908E-B74A1CC33BCE",
    verified: false,
    site: "https://www.kidszentoys.com/product-page/ramayana-quiz-for-kids-best-board-game-to-know-indian-culture-for-kids-8"
  },
  {
    id: "draw-emotion",
    name: "Draw Your Emotions",
    tag: null,
    ageGroup: "2-5",
    age: "3+ years",
    price: "₹400",
    tagline: "Draw funny faces and explore feelings",
    players: "2 players",
    description: "Let your child explore emotions in the most creative way. Kids draw funny faces and express different human emotions using dice and face cards. Every round is full of laughter, creativity and learning.",
    highlights: [
      "Boosts imagination and creativity",
      "Helps children understand and express emotions",
      "Improves fine motor skills and hand-eye coordination",
      "Encourages social interaction and turn-taking",
      "Screen-free, engaging playtime"
    ],
    skills: ["Emotional awareness", "Drawing", "Fine motor skills", "Turn-taking"],
    inTheBox: ["1 Emotion Drawing Board", "12 reusable face cards", "2 dice", "Colour markers"],
    howToPlay: ["Roll the dice", "Follow the board", "Draw the emotion face"],
    perfectFor: ["Home play", "Gifting", "Preschoolers and early learners"],
    images: [
      "assets/products/draw-your-emotions/main1.png",
      "assets/products/draw-your-emotions/lifestyle.png",
      "assets/products/draw-your-emotions/how-to-play.png",
      "assets/products/draw-your-emotions/what-inside.png",
      "assets/products/draw-your-emotions/overview.png",
      "assets/products/draw-your-emotions/close-up.png",
      "assets/products/draw-your-emotions/a.png",
      "assets/products/draw-your-emotions/lifestyle-2.jpeg"
    ],
    image: "assets/products/draw-your-emotions/main1.png",
    amazon: "https://www.amazon.in/stores/KidszenToys/page/4A644D32-AA14-42C2-908E-B74A1CC33BCE",
    verified: false,
    site: "https://www.kidszentoys.com/"
  },
  {
    id: "ring-it-right",
    name: "Ring It Right",
    tag: null,
    ageGroup: "2-5",
    age: "2-6 years",
    price: "₹150",
    tagline: "Finger pattern game for logical thinking",
    players: "1 or more players",
    description: "An engaging finger pattern game for young kids. Children copy the given colour pattern on their fingers using soft rings. Simple, fun and highly effective for early brain development.",
    highlights: [
      "Boosts logical thinking skills",
      "Improves hand-eye coordination",
      "Develops fine motor skills",
      "Enhances concentration and focus",
      "Lightweight and travel-friendly"
    ],
    skills: ["Logical thinking", "Fine motor skills", "Colour matching", "Focus"],
    inTheBox: ["Pattern cards", "Soft colour rings", "Carry pouch"],
    howToPlay: [
      "Pick a pattern card",
      "Observe the coloured rings shown on the fingers",
      "Copy the same pattern on your own fingers"
    ],
    perfectFor: ["Home", "Travel", "Classrooms", "Playdates", "Birthday return gifts"],
    images: [
      "assets/products/ring-it-right/main1.png",
      "assets/products/ring-it-right/lifestyle-2.png",
      "assets/products/ring-it-right/how-to-play.png",
      "assets/products/ring-it-right/what-inside.png",
      "assets/products/ring-it-right/main2.png",
      "assets/products/ring-it-right/lifestyle-3.png",
      "assets/products/ring-it-right/lifestyle-4.png"
    ],
    image: "assets/products/ring-it-right/main1.png",
    amazon: "https://www.amazon.in/stores/KidszenToys/page/4A644D32-AA14-42C2-908E-B74A1CC33BCE",
    verified: false,
    site: "https://www.kidszentoys.com/shop-for-5-10-years"
  },
  {
    id: "garbage-collector",
    name: "Garbage Collector Learning Kit",
    tag: null,
    ageGroup: "2-5",
    age: "3+ years",
    price: "₹350",
    tagline: "Wet and dry waste sorting activity",
    players: null,
    description: "Teach your child an important life skill. This Velcro activity game helps children identify, sort and separate wet and dry waste correctly. It makes environmental education simple, practical and enjoyable.",
    highlights: [
      "Builds eco-friendly habits early",
      "Promotes hands-on, screen-free learning",
      "Child-safe and non-toxic material",
      "Made in India"
    ],
    skills: ["Observation skills", "Logical thinking", "Fine motor skills", "Environmental awareness"],
    inTheBox: [
      "24 x 30 inch big laminated chart",
      "20+ garbage item cards",
      "Reusable carry bag",
      "Instructions guide"
    ],
    howToPlay: [
      "Spread the big chart on the wall or floor",
      "Identify the waste item",
      "Stick it on the correct dustbin — Wet or Dry"
    ],
    perfectFor: ["Schools", "Home learning", "Environmental education", "Activity sessions"],
    images: [
      "assets/products/garbage-collector/main1.png",
      "assets/products/garbage-collector/lifestyle-img-1.png",
      "assets/products/garbage-collector/main-2.png",
      "assets/products/garbage-collector/main3.png",
      "assets/products/garbage-collector/lifestyle-img-2.png",
      "assets/products/garbage-collector/lifestyle-img-3.png",
      "assets/products/garbage-collector/lifestyle-img-4.png"
    ],
    image: "assets/products/garbage-collector/main1.png",
    amazon: "https://www.amazon.in/stores/KidszenToys/page/4A644D32-AA14-42C2-908E-B74A1CC33BCE",
    verified: false,
    site: "https://www.kidszentoys.com/"
  },
  // ==================== NEW PRODUCTS ====================
  {
    id: "fridge-magnet-vehicle",
    name: "Make Your Own Fridge Magnet - Vehicle Edition",
    tag: null,
    ageGroup: "2-5",
    age: "3+ years",
    price: "₹350",
    tagline: "Paint your favourite vehicles and turn them into colourful fridge magnets",
    players: "1 player",
    description: "Make creativity fun with the KidsZen Toys Vehicle Fridge Magnet Kit! Let your little artists paint their favourite vehicles and turn them into colourful fridge magnets. Magnets are already attached, so no extra fixing is required.",
    highlights: [
      "Fun DIY vehicle painting activity",
      "Encourages creativity and imagination",
      "Magnets already attached – just paint and play!",
      "Includes 6 vibrant colours",
      "Perfect for parent-child bonding",
      "Screen-free creative fun"
    ],
    skills: ["Creativity", "Fine Motor Skills", "Hand-Eye Coordination", "Colour Recognition", "Artistic Expression"],
    inTheBox: ["2 Vehicle Figurines (Car & Bus)", "6 Vibrant Non-Toxic Colours", "1 Paint Brush", "1 Instruction Guide", "1 Hanging Ribbon"],
    howToPlay: null,
    perfectFor: ["Vehicle lovers", "Parent-child bonding", "Birthday gifts", "Creative play", "Screen-free activities"],
    images: [
      "assets/products/fridge-magnet-vehicle/main.jpg",
      "assets/products/fridge-magnet-vehicle/image2.jpg",
      "assets/products/fridge-magnet-vehicle/image3.jpg",
      "assets/products/fridge-magnet-vehicle/image4.jpg",
      "assets/products/fridge-magnet-vehicle/image5.jpg",
      "assets/products/fridge-magnet-vehicle/image6.jpg"
    ],
    image: "assets/products/fridge-magnet-vehicle/main.jpg",
    amazon: "https://www.amazon.in/stores/KidszenToys/page/4A644D32-AA14-42C2-908E-B74A1CC33BCE",
    verified: true,
    site: null
  },
  {
    id: "fridge-magnet-kpop",
    name: "Make Your Own Fridge Magnet - K-Pop Dolls Edition",
    tag: null,
    ageGroup: "5-10",
    age: "8+ years",
    price: "₹350",
    tagline: "Paint, personalise and create your very own cute doll magnets",
    players: "1 player",
    description: "Calling all little K-Pop lovers! Let your creativity shine with our adorable K-Pop Dolls DIY Fridge Magnet Kit. Paint, personalise and create your very own cute doll magnets.",
    highlights: [
      "Fun and exciting DIY painting activity",
      "Perfect for K-Pop and doll lovers",
      "Encourages creativity and self-expression",
      "Screen-free activities",
      "Makes unique handmade fridge decorations"
    ],
    skills: ["Creativity", "Fine Motor Skills", "Hand-Eye Coordination", "Imagination", "Colour Recognition"],
    inTheBox: ["3 Doll Plaster Moulds", "6 Vibrant Paint Colours", "1 Paint Brush", "3 Magnets"],
    howToPlay: null,
    perfectFor: ["K-Pop fans", "Creative kids", "DIY lovers", "Birthday gifts", "Return gifts"],
    images: [
      "assets/products/fridge-magnet-kpop/main.jpg",
      "assets/products/fridge-magnet-kpop/image2.jpg",
      "assets/products/fridge-magnet-kpop/image3.jpg",
      "assets/products/fridge-magnet-kpop/image4.jpg",
      "assets/products/fridge-magnet-kpop/image5.jpg"
    ],
    image: "assets/products/fridge-magnet-kpop/main.jpg",
    amazon: "https://www.amazon.in/stores/KidszenToys/page/4A644D32-AA14-42C2-908E-B74A1CC33BCE",
    verified: true,
    site: null
  },
  {
    id: "fridge-magnet-princess",
    name: "Make Your Own Fridge Magnet - Princess Edition",
    tag: null,
    ageGroup: "2-5",
    age: "3+ years",
    price: "₹350",
    tagline: "Let your little princess step into a magical world of colours",
    players: "1 player",
    description: "Let your little princess step into a magical world of colours and creativity! Paint two adorable princess characters and proudly display their beautiful handmade creations on the fridge.",
    highlights: [
      "Create two beautiful princess fridge magnets",
      "Fun and engaging painting activity",
      "Encourages creativity and self-expression",
      "Screen-free fun",
      "Makes lovely personalised handmade decoration"
    ],
    skills: ["Creativity", "Fine Motor Skills", "Focus and Concentration", "Confidence", "Imagination"],
    inTheBox: ["2 Princess Character Moulds", "6 Bright Acrylic Paint Colours", "1 Paint Brush", "2 Strong Magnets", "Instructions"],
    howToPlay: null,
    perfectFor: ["Little princesses", "Birthday gifts", "Return gifts", "Creative surprise", "Screen-free activities"],
    images: [
      "assets/products/fridge-magnet-princess/main.jpg",
      "assets/products/fridge-magnet-princess/image2.jpg",
      "assets/products/fridge-magnet-princess/image3.jpg",
      "assets/products/fridge-magnet-princess/image4.jpg",
      "assets/products/fridge-magnet-princess/image5.jpg",
      "assets/products/fridge-magnet-princess/image6.jpg",
      "assets/products/fridge-magnet-princess/image7.jpg"
    ],
    image: "assets/products/fridge-magnet-princess/main.jpg",
    amazon: "https://www.amazon.in/stores/KidszenToys/page/4A644D32-AA14-42C2-908E-B74A1CC33BCE",
    verified: true,
    site: null
  },
  {
    id: "fridge-magnet-unicorn",
    name: "Make Your Own Fridge Magnet - Unicorn Edition",
    tag: null,
    ageGroup: "2-5",
    age: "3+ years",
    price: "₹350",
    tagline: "Enter a magical world of colours and creativity with unicorns",
    players: "1 player",
    description: "Let your little artist enter a magical world of colours and creativity! Paint magical unicorn designs and proudly display them on the fridge.",
    highlights: [
      "Fun and engaging DIY painting activity",
      "Encourages creativity and imagination",
      "Keeps kids away from screens",
      "Makes adorable handmade fridge decorations",
      "Perfect gift for unicorn lovers!"
    ],
    skills: ["Creativity", "Fine Motor Skills", "Imagination", "Colour Recognition", "Hand-Eye Coordination"],
    inTheBox: ["4 Beautiful Plaster Magnets", "6 Vibrant Paint Colours", "1 Paint Brush", "2 Magnet Strips", "1 Easy Guide"],
    howToPlay: null,
    perfectFor: ["Unicorn lovers", "Creative play", "Birthday gifts", "Party favors", "Screen-free activities"],
    images: [
      "assets/products/fridge-magnet-unicorn/main.jpg",
      "assets/products/fridge-magnet-unicorn/image2.jpg",
      "assets/products/fridge-magnet-unicorn/image3.jpg",
      "assets/products/fridge-magnet-unicorn/image4.jpg",
      "assets/products/fridge-magnet-unicorn/image5.jpg",
      "assets/products/fridge-magnet-unicorn/image6.jpg",
      "assets/products/fridge-magnet-unicorn/image7.jpg"
    ],
    image: "assets/products/fridge-magnet-unicorn/main.jpg",
    amazon: "https://www.amazon.in/stores/KidszenToys/page/4A644D32-AA14-42C2-908E-B74A1CC33BCE",
    verified: true,
    site: null
  },
  {
    id: "fridge-magnet-animal",
    name: "Make Your Own Fridge Magnet - Animal Edition",
    tag: null,
    ageGroup: "2-5",
    age: "3+ years",
    price: "₹350",
    tagline: "Let little explorers bring their favourite animals to life",
    players: "1 player",
    description: "Let your little explorers bring their favourite animals to life! Paint adorable animal magnets and proudly display their colourful creations on the fridge.",
    highlights: [
      "Fun-filled animal painting activity",
      "Encourages creativity and imagination",
      "Screen-free play",
      "Creates adorable handmade fridge magnets",
      "Perfect for animal lovers!"
    ],
    skills: ["Creativity", "Fine Motor Skills", "Hand-Eye Coordination", "Imagination", "Colour Recognition"],
    inTheBox: ["2 Ready-to-Paint Plaster Animal Magnets", "6 Vibrant Acrylic Paint Colours", "1 Paint Brush"],
    howToPlay: null,
    perfectFor: ["Animal lovers", "Birthday gifts", "Return gifts", "Creative activity", "Screen-free play"],
    images: [
      "assets/products/fridge-magnet-animal/main.jpg",
      "assets/products/fridge-magnet-animal/image2.jpg",
      "assets/products/fridge-magnet-animal/image3.jpg",
      "assets/products/fridge-magnet-animal/image4.jpg",
      "assets/products/fridge-magnet-animal/image5.jpg",
      "assets/products/fridge-magnet-animal/image6.jpg",
      "assets/products/fridge-magnet-animal/image7.jpg"
    ],
    image: "assets/products/fridge-magnet-animal/main.jpg",
    amazon: "https://www.amazon.in/stores/KidszenToys/page/4A644D32-AA14-42C2-908E-B74A1CC33BCE",
    verified: true,
    site: null
  },
  {
    id: "diwali-activity-kit",
    name: "DIY Diwali Kit",
    tag: "Festival",
    ageGroup: "5-10",
    age: "5+ years",
    price: "₹350",
    tagline: "Make this Diwali extra special with creativity and festive fun",
    players: "1+ players",
    description: "Make this Diwali extra special with creativity, colours and festive fun! Let your little ones celebrate the festival of lights by painting diyas, designing rangoli and decorating Diwali cards.",
    highlights: [
      "Fun and creative Diwali activity for kids",
      "Paint and decorate your own diyas",
      "Encourages festive creativity and traditional learning",
      "Perfect for screen-free family bonding",
      "Makes Diwali celebrations meaningful"
    ],
    skills: ["Creativity", "Fine Motor Skills", "Hand-Eye Coordination", "Focus", "Artistic Expression", "Cultural Awareness"],
    inTheBox: ["6 Clay Diyas", "1 Happy Diwali Colouring Card", "1 Sticker Sheet", "2 MDF Rangoli Pieces", "1 Gem Sticker Strip", "1 Decorative Sticker", "6 Rangoli Colours", "1 Paint Brush"],
    howToPlay: null,
    perfectFor: ["Diwali celebrations", "Cultural learning", "Family bonding", "Festival gifts", "Traditional activities"],
    images: [
      "assets/products/diwali-activity-kit/a9179d_87336dcf85b943b187b83ae4da252f67~mv2.avif",
      "assets/products/diwali-activity-kit/a9179d_18fd5136fe564a458804c5e495333a7a~mv2.avif",
      "assets/products/diwali-activity-kit/a9179d_5a1bc1f6d4ef4bff992214730dc9293e~mv2.avif",
      "assets/products/diwali-activity-kit/a9179d_34de10415cfb44668180749ea574d8dd~mv2.avif"
    ],
    image: "assets/products/diwali-activity-kit/a9179d_87336dcf85b943b187b83ae4da252f67~mv2.avif",
    amazon: "https://www.amazon.in/stores/KidszenToys/page/4A644D32-AA14-42C2-908E-B74A1CC33BCE",
    verified: true,
    site: null
  },
  {
    id: "christmas-activity-kit",
    name: "Christmas Activity Kit",
    tag: "Festival",
    ageGroup: "5-10",
    age: "5+ years",
    price: "₹300",
    tagline: "Make this Christmas extra magical with creativity",
    players: "1+ players",
    description: "Make this Christmas extra magical with creativity, colours and festive fun! Let your little ones enjoy Christmas through painting, decorating, colouring and exciting activities.",
    highlights: [
      "Multiple creative activities in one kit",
      "Paint and personalise Christmas decorations",
      "Encourages creativity and imagination",
      "Screen-free fun",
      "Wonderful way to celebrate Christmas together"
    ],
    skills: ["Creativity", "Fine Motor Skills", "Focus", "Hand-Eye Coordination", "Problem-Solving", "Artistic Expression"],
    inTheBox: [
      "1 MDF Keychain",
      "1 MDF Christmas Fridge Magnet",
      "1 Christmas Colouring Sheet",
      "1 Christmas Greeting Card",
      "1 Colour Puzzle",
      "1 Santa Cap",
      "1 Rangila Colour Set (6 Shades)",
      "Colourful Stickers"
    ],
    howToPlay: null,
    perfectFor: ["Christmas celebrations", "Holiday activities", "Family bonding", "Gift giving", "Festive surprises"],
    images: [
      "assets/products/christmas-activity-kit/main.jpg",
      "assets/products/christmas-activity-kit/image2.jpg",
      "assets/products/christmas-activity-kit/image3.jpg",
      "assets/products/christmas-activity-kit/image4.jpg",
      "assets/products/christmas-activity-kit/image5.jpg",
      "assets/products/christmas-activity-kit/image6.jpg",
      "assets/products/christmas-activity-kit/image7.jpg"
    ],
    image: "assets/products/christmas-activity-kit/main.jpg",
    amazon: "https://www.amazon.in/stores/KidszenToys/page/4A644D32-AA14-42C2-908E-B74A1CC33BCE",
    verified: true,
    site: null
  }
];

/* Combo packs from kidszentoys.com — shown under the full product list */
const combos = [
  {
    id: "combo-board-games-gift",
    name: "3 Board Games & 1 Free Gift",
    tag: "Combo",
    ageGroup: "5-10",
    age: "5+ years",
    price: "₹1,050",
    tagline: "Crazy Samosa, The Emotion Game, Draw Your Emotions, plus a free Pattern Game",
    players: "2 players",
    description: "A fun and educational combo of three games that build emotional awareness, creativity and strategic thinking, with a free Pattern Game activity kit. Includes Crazy Samosa, The Emotion Game and Draw Your Emotions. A two-player set for ages 5 and up, suited to playtime, learning or gifting.",
    highlights: [
      "Crazy Samosa — a fast-paced cricket board game with strategy and laughter",
      "The Emotion Game — identify and express a range of emotions",
      "Draw Your Emotions — draw and colour feelings on guided sheets",
      "Free Pattern Game activity kit included",
      "Encourages self-expression, emotional awareness and family play",
      "Two-player games for ages 5+"
    ],
    skills: ["Emotional awareness", "Creativity", "Strategic thinking", "Fine motor skills", "Family bonding"],
    inTheBox: [
      "Crazy Samosa board game (board, cards, dice and tokens)",
      "The Emotion Game (face cards, activity sheets and prompts)",
      "Draw Your Emotions kit (dry-erase sheets, markers and spinner)",
      "Free Pattern Game activity kit"
    ],
    howToPlay: null,
    perfectFor: ["Family game nights", "Birthday gifts", "Return gifts", "Screen-free play"],
    images: [
      "assets/combos/3boardgames/board-games-plus-gift.jpg",
      "assets/combos/3boardgames/a9179d_628ea22faad142618ba4e745f2190352~mv2.avif",
      "assets/combos/3boardgames/a9179d_80118f9165014b2c8281aedd03bd11d2~mv2.avif",
      "assets/combos/3boardgames/a9179d_8920ce2dd2874f558c0b379e3294ccde~mv2.avif"
    ],
    image: "assets/combos/3boardgames/board-games-plus-gift.jpg",
    amazon: "https://www.amazon.in/stores/KidszenToys/page/4A644D32-AA14-42C2-908E-B74A1CC33BCE",
    verified: false,
    site: "https://www.kidszentoys.com/product-page/3-board-game-1-free-gift-crazy-samosa-the-emotion-game-draw-you-emotion"
  },
  {
    id: "combo-samosa-emotion",
    name: "Crazy Samosa & The Emotion Game",
    tag: "Combo",
    ageGroup: "5-10",
    age: "5+ years",
    price: "₹700",
    tagline: "Set of 2 board games for two players",
    players: "2 players",
    description: "Two games in one pack. Crazy Samosa brings a cricket match to the table with strategy, surprises and laughter. The Emotion Game helps children recognise feelings through matching, expressions and interactive play.",
    highlights: [
      "Crazy Samosa — cricket-themed board game for family nights",
      "Includes game board, playing cards, dice and tokens",
      "The Emotion Game — match expressions and build emotional intelligence",
      "Two-player games, ages 5 and up",
      "Suited to birthdays, return gifts and classroom play"
    ],
    skills: ["Strategic thinking", "Decision-making", "Emotional intelligence", "Social interaction"],
    inTheBox: [
      "1 Crazy Samosa board game set (board, cards, dice, tokens)",
      "1 Emotion Game set (emotion cards, activity sheets and prompts)"
    ],
    howToPlay: null,
    perfectFor: ["Family game nights", "Birthday gifts", "Return gifts", "Classroom play"],
    images: [
      "assets/combos/crazysamosa&emotiongame/samosa-emotion.jpg",
      "assets/combos/crazysamosa&emotiongame/a9179d_32aa51c0892c4457a6588a41cfd0fd1c~mv2.avif",
      "assets/combos/crazysamosa&emotiongame/a9179d_6ab59e12816b47ee8155472ba4cd89ff~mv2.avif",
      "assets/combos/crazysamosa&emotiongame/a9179d_70668664d6ff468d9b71d47e1526ef23~mv2.avif"
    ],
    image: "assets/combos/crazysamosa&emotiongame/samosa-emotion.jpg",
    amazon: "https://www.amazon.in/stores/KidszenToys/page/4A644D32-AA14-42C2-908E-B74A1CC33BCE",
    verified: false,
    site: "https://www.kidszentoys.com/product-page/set-of-2-board-game-crazy-samosa-the-emotion-game-two-players-game-age-5"
  },
  {
    id: "combo-activity-pack-3",
    name: "Activity Kit Pack of 3",
    tag: "Combo",
    ageGroup: "2-5",
    age: "2–5 years",
    price: "₹700",
    tagline: "Velcro Activity Kit, Know More About Animals and Travel Activity Kit",
    players: null,
    description: "A learning combo for ages 2 to 5: a travel activity book, an animal Velcro game, and pull-and-place matching. Reusable sheets, Velcro stickers and a sketch pen set for hands-on play at home or on the go. A birthday gift for ages 2, 3, 4 and 5.",
    highlights: [
      "Travel Activity Kit — 11 reusable sheets, stickers and sketch pens",
      "Know More About Animals — habitats, sounds and matching for ages 2–4",
      "Velcro Activity Kit — fruits, colours, shapes, vegetables and animals",
      "Builds creativity, problem-solving and fine motor skills",
      "Travel-friendly and mess-free"
    ],
    skills: ["Fine motor skills", "Matching and sorting", "Animal recognition", "Creativity", "Focus"],
    inTheBox: [
      "Travel Activity Kit: 11 wipe-clean sheets and 1 sketch pen set",
      "Velcro Activity Kit: 5 laminated sheets and 30 Velcro stickers",
      "Know More About Animals: 5 laminated animal sheets and 30 Velcro stickers"
    ],
    howToPlay: null,
    perfectFor: ["Birthday gifts", "Return gifts", "Travel", "Preschool and kindergarten"],
    images: [
      "assets/combos/packof3/activity-pack-3.jpg",
      "assets/combos/packof3/a9179d_0a8f15b0f22e4839b492c6f4ad819967~mv2.avif",
      "assets/combos/packof3/a9179d_af55e5cb687f4851aa9bba800c1f8931~mv2.avif",
      "assets/combos/packof3/a9179d_f390cc4639c24fbd85cca3d47b7ae45d~mv2.avif",
      "assets/combos/packof3/a9179d_fed27fda5b8c47f1b8f8d7581a4397c6~mv2.avif"
    ],
    image: "assets/combos/packof3/activity-pack-3.jpg",
    amazon: "https://www.amazon.in/stores/KidszenToys/page/4A644D32-AA14-42C2-908E-B74A1CC33BCE",
    verified: true,
    site: "https://www.kidszentoys.com/product-page/kidszen-toys-activity-kit-pack-of-3-fun-learning-games-for-kids-5-8-years"
  },
  {
    id: "combo-velcro-animals",
    name: "Velcro Kit & Animals Pack of 2",
    tag: "Combo",
    ageGroup: "0-2",
    age: "2–4 years",
    price: "₹450",
    tagline: "Velcro Activity Kit and Know More About Animals",
    players: null,
    description: "A 2-in-1 set for toddlers and preschoolers. Know More About Animals introduces animal names, habitats and sounds. The Velcro Activity Kit is a hands-on match-and-stick game for fine motor skills, hand-eye coordination and early logic. A gift for ages 2, 3 and 4.",
    highlights: [
      "Know More About Animals — names, habitats and sounds",
      "Velcro matching — stick and match pictures by hand",
      "Supports vocabulary, memory and independent learning",
      "Screen-free play for ages 2 to 4",
      "Thoughtful birthday or everyday gift"
    ],
    skills: ["Vocabulary", "Memory", "Fine motor skills", "Hand-eye coordination", "Logical thinking"],
    inTheBox: [
      "Know More About Animals activity set",
      "Velcro Activity Kit with laminated sheets and Velcro pieces"
    ],
    howToPlay: null,
    perfectFor: ["Gifts for ages 2, 3 and 4", "Home learning", "Screen-free play", "Return gifts"],
    images: [
      "assets/combos/velcoknowanimals/velcro-animals-pack-2.jpg",
      "assets/combos/velcoknowanimals/a9179d_3666da231d344709a3d544bc53e1e810~mv2.avif",
      "assets/combos/velcoknowanimals/a9179d_7e8c5b75175a48a3bde7fe1cfba805a7~mv2.avif",
      "assets/combos/velcoknowanimals/a9179d_dbda5ce5e6d7434ba86a7e8d48a14c7a~mv2.avif"
    ],
    image: "assets/combos/velcoknowanimals/velcro-animals-pack-2.jpg",
    amazon: "https://www.amazon.in/dp/B0DB8HWH26",
    verified: false,
    site: "https://www.kidszentoys.com/product-page/kidszen-know-more-about-animal-velcro-activity-kit-combo-pack-set-of-2"
  }
];
