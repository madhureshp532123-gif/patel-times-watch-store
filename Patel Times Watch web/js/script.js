(function () {
  const STORAGE_KEYS = {
    cart: "Patel Times-cart",
    users: "Patel Times-users",
    currentUser: "Patel Times-current-user",
    orders: "Patel Times-orders",
    reviews: "Patel Times-reviews"
  };

  const products = [
    {
      id: "titan-neo-blue",
      name: "Titan Neo Blue Dial",
      category: "mens",
      tags: ["Titan", "Classic"],
      price: 1895,
      rating: 4.6,
      image: "assets/images/titan1.jpg",

      shortDescription:
        "Classic Titan men's watch with blue dial and stainless steel finish.",

      description:
        "The Titan Neo Blue Dial watch offers a stylish and modern design suitable for daily wear and formal occasions. Built with durable stainless steel and a clear blue dial, this watch delivers reliability and timeless style.",

      specs: {
        Movement: "Quartz",
        Case: "40 mm Stainless Steel",
        Strap: "Stainless Steel Bracelet",
        Glass: "Mineral Glass",
        WaterResistance: "3 ATM",
        Warranty: "2 Years"
      },

      featured: true,
      offerText: "Free gift packaging available for a limited time."
    },
    {
      id: "fossil-grant-chronograph",
      name: "Fossil Grant Chronograph",
      category: "mens",
      tags: ["Fossil", "Chronograph"],
      price: 8995,
      rating: 4.7,
      image: "assets/images/fossil1.jpg",

      shortDescription:
        "Premium Fossil chronograph watch with leather strap and classic dial.",

      description:
        "The Fossil Grant Chronograph combines classic design with modern functionality. Featuring Roman numeral markers and a durable leather strap, this watch is perfect for both casual and formal occasions.",

      specs: {
        Movement: "Quartz Chronograph",
        Case: "44 mm Stainless Steel",
        Strap: "Brown Leather Strap",
        Glass: "Mineral Glass",
        WaterResistance: "5 ATM",
        Warranty: "2 Years"
      },

      featured: true,
      offerText: "Includes free premium watch box."
    },
    {
      id: "casio-edifice-black",
      name: "Casio Edifice Black Dial",
      category: "mens",
      tags: ["Casio", "Edifice"],
      price: 6495,
      rating: 4.6,
      image: "assets/images/casio1.jpg",

      shortDescription:
        "Stylish Casio Edifice watch with black dial and stainless steel build.",

      description:
        "The Casio Edifice Black Dial watch delivers strong performance and elegant styling. Designed with a durable stainless steel case and bold dial, it is perfect for daily wear and professional use.",

      specs: {
        Movement: "Quartz",
        Case: "42 mm Stainless Steel",
        Strap: "Stainless Steel Bracelet",
        Glass: "Mineral Glass",
        WaterResistance: "10 ATM",
        Warranty: "2 Years"
      },

      featured: true,
      offerText: "Special discount available for limited stock."
    },
    {
      id: "realme-smart-watch",
      name: "Realme Smart Watch",
      category: "smart",
      tags: ["Realme", "Smart"],
      price: 2499,
      rating: 4.5,
      image: "assets/images/realme1.jpg",

      shortDescription:
        "Stylish Realme smartwatch with fitness tracking features.",

      description:
        "Realme Smart Watch offers advanced health monitoring, step tracking, and notifications in a sleek modern design.",

      specs: {
        Movement: "Digital",
        Display: "1.4 inch Touch",
        Strap: "Silicone Strap",
        Battery: "Up to 9 days",
        WaterResistance: "IP68",
        Warranty: "1 Year"
      },

      featured: false,
      offerText: "Limited-time smartwatch deal."
    },
    {
      id: "timex-classic-white",
      name: "Timex Classic White Dial",
      category: "mens",
      tags: ["Timex", "Classic"],
      price: 2499,
      rating: 4.5,
      image: "assets/images/timex1.jpg",

      shortDescription:
        "Simple and elegant Timex watch with clean white dial and leather strap.",

      description:
        "The Timex Classic White Dial watch offers timeless styling with a minimal design. Built for everyday comfort, this watch pairs easily with both casual and formal outfits.",

      specs: {
        Movement: "Quartz",
        Case: "40 mm Brass Case",
        Strap: "Leather Strap",
        Glass: "Mineral Glass",
        WaterResistance: "3 ATM",
        Warranty: "1 Year"
      },

      featured: true,
      offerText: "Limited-time festive discount available."
    },
    {
      id: "fastrack-women-pink",
      name: "Fastrack Women Pink Dial",
      category: "womens",
      tags: ["Fastrack", "Women"],
      price: 2795,
      rating: 4.6,
      image: "assets/images/fastrack-women.jpg",

      shortDescription:
        "Stylish Fastrack women's watch with modern pink dial.",

      description:
        "Fastrack Women Pink Dial watch combines trendy styling with everyday durability, making it perfect for casual and formal wear.",

      specs: {
        Movement: "Quartz",
        Case: "32 mm Metal Case",
        Strap: "Stainless Steel Strap",
        Glass: "Mineral Glass",
        WaterResistance: "3 ATM",
        Warranty: "1 Year"
      },

      featured: false,
      offerText: "Special festive discount available."
    },
    {
      id: "fastrack-sports-black",
      name: "Fastrack Sports Black",
      category: "sports",
      tags: ["Fastrack", "Sports"],
      price: 3495,
      rating: 4.7,
      image: "assets/images/fastrack-sport.jpg",

      shortDescription:
        "Durable Fastrack sports watch with bold black styling.",

      description:
        "Fastrack Sports Black watch is designed for active lifestyles with rugged build quality and strong visibility.",

      specs: {
        Movement: "Quartz",
        Case: "44 mm Resin Case",
        Strap: "Rubber Strap",
        Glass: "Mineral Glass",
        WaterResistance: "5 ATM",
        Warranty: "1 Year"
      },

      featured: false,
      offerText: "Limited stock sports edition."
    },
    {
      id: "citizen-premium-steel",
      name: "Citizen Premium Steel",
      category: "luxury",
      tags: ["Citizen", "Premium"],
      price: 12499,
      rating: 4.8,
      image: "assets/images/citizen1.jpg",

      shortDescription:
        "Premium Citizen analog watch with stainless steel body.",

      description:
        "Citizen Premium Steel watch delivers high-quality craftsmanship with elegant design suitable for professional use.",

      specs: {
        Movement: "Quartz",
        Case: "42 mm Stainless Steel",
        Strap: "Steel Bracelet",
        Glass: "Mineral Glass",
        WaterResistance: "5 ATM",
        Warranty: "2 Years"
      },

      featured: true,
      offerText: "Premium customer offer available."
    },
    {
      id: "firebolt-smart",
      name: "Fire-Boltt Ninja Smart Watch",
      category: "smart",
      tags: ["Fire-Boltt", "Smart"],
      price: 1999,
      rating: 4.4,
      image: "assets/images/firebolt1.jpg",

      shortDescription:
        "Affordable Fire-Boltt smartwatch with modern features.",

      description:
        "Fire-Boltt Ninja Smart Watch delivers fitness tracking, call alerts, and stylish design suitable for daily wear.",

      specs: {
        Movement: "Digital",
        Display: "1.3 inch Touch",
        Strap: "Silicone Strap",
        Battery: "Up to 7 days",
        WaterResistance: "IP67",
        Warranty: "1 Year"
      },

      featured: false,
      offerText: "Budget smartwatch offer available."
    },
    {
      id: "titan-gold-premium",
      name: "Titan Gold Premium",
      category: "luxury",
      tags: ["Titan", "Luxury"],
      price: 10495,
      rating: 4.8,
      image: "assets/images/titan-gold.jpg",

      shortDescription:
        "Premium Titan gold-tone analog watch for formal wear.",

      description:
        "Titan Gold Premium watch offers elegant styling with gold-tone finish and refined craftsmanship suitable for professional occasions.",

      specs: {
        Movement: "Quartz",
        Case: "40 mm Stainless Steel",
        Strap: "Gold-tone Bracelet",
        Glass: "Mineral Glass",
        WaterResistance: "3 ATM",
        Warranty: "2 Years"
      },

      featured: true,
      offerText: "Premium festive offer available."
    },

    {
      id: "noise-colorfit-smart",
      name: "Noise ColorFit Smart Watch",
      category: "smart",
      tags: ["Noise", "Smart"],
      price: 1499,
      rating: 4.4,
      image: "assets/images/noise1.jpg",

      shortDescription:
        "Modern Noise smartwatch with health tracking and notifications.",

      description:
        "Noise ColorFit smartwatch offers heart rate monitoring, fitness tracking, and smart notifications in a stylish design.",

      specs: {
        Movement: "Digital",
        Display: "1.4 inch Touch",
        Strap: "Silicone Strap",
        Battery: "Up to 7 days",
        WaterResistance: "IP68",
        Warranty: "1 Year"
      },

      featured: false,
      offerText: "Special online discount available."
    },

    {
      id: "boat-xtend-smart",
      name: "Boat Xtend Smart Watch",
      category: "smart",
      tags: ["Boat", "Smart"],
      price: 1799,
      rating: 4.5,
      image: "assets/images/boat1.jpg",

      shortDescription:
        "Boat Xtend smartwatch with Alexa support and fitness tracking.",

      description:
        "Boat Xtend smartwatch delivers smart notifications, health tracking, and stylish design for daily use.",

      specs: {
        Movement: "Digital",
        Display: "1.69 inch Touch",
        Strap: "Silicone Strap",
        Battery: "Up to 10 days",
        WaterResistance: "IP68",
        Warranty: "1 Year"
      },

      featured: false,
      offerText: "Launch discount available."
    },
    {
  id: "sonata-classic-01",
  name: "Sonata Classic Silver",
  category: "mens",
  tags: ["Sonata", "Classic"],
  price: 1799,
  rating: 4.4,
  image: "assets/images/sonata1.jpg",

  shortDescription:
    "Elegant Sonata silver dial watch for daily wear.",

  description:
    "Sonata Classic Silver features a clean dial and durable stainless steel strap ideal for everyday use.",

  specs: {
    Movement: "Quartz",
    Case: "38 mm",
    Strap: "Stainless Steel",
    Glass: "Mineral Glass",
    WaterResistance: "3 ATM",
    Warranty: "1 Year"
  }
},

{
  id: "titan-edge-02",
  name: "Titan Edge Slim Black",
  category: "luxury",
  tags: ["Titan", "Premium"],
  price: 8495,
  rating: 4.7,
  image: "assets/images/titan-edge.jpg",

  shortDescription:
    "Ultra slim Titan Edge with black premium finish.",

  description:
    "Titan Edge Slim Black offers minimal thickness with a stylish premium metal finish.",

  specs: {
    Movement: "Quartz",
    Case: "40 mm",
    Strap: "Steel",
    Glass: "Sapphire",
    WaterResistance: "5 ATM",
    Warranty: "2 Years"
  }
},

{
  id: "casio-digital-03",
  name: "Casio Digital Sport",
  category: "sports",
  tags: ["Casio", "Digital"],
  price: 2995,
  rating: 4.6,
  image: "assets/images/casio-digital.jpg",

  shortDescription:
    "Durable Casio digital watch with sporty design.",

  description:
    "Casio Digital Sport offers stopwatch, alarm and rugged sporty look.",

  specs: {
    Movement: "Digital",
    Case: "44 mm",
    Strap: "Resin",
    Glass: "Mineral",
    WaterResistance: "10 ATM",
    Warranty: "1 Year"
  }
},

{
  id: "fossil-leather-04",
  name: "Fossil Leather Brown",
  category: "mens",
  tags: ["Fossil", "Leather"],
  price: 7495,
  rating: 4.7,
  image: "assets/images/fossil-leather.jpg",

  shortDescription:
    "Premium Fossil leather strap watch.",

  description:
    "Fossil Leather Brown delivers a timeless style with high-quality leather strap.",

  specs: {
    Movement: "Quartz",
    Case: "42 mm",
    Strap: "Leather",
    Glass: "Mineral",
    WaterResistance: "5 ATM",
    Warranty: "2 Years"
  }
},

{
  id: "fastrack-blue-05",
  name: "Fastrack Blue Dial",
  category: "mens",
  tags: ["Fastrack", "Modern"],
  price: 3295,
  rating: 4.5,
  image: "assets/images/fastrack-blue.jpg",

  shortDescription:
    "Modern Fastrack watch with bold blue dial.",

  description:
    "Fastrack Blue Dial watch features trendy styling perfect for young professionals.",

  specs: {
    Movement: "Quartz",
    Case: "42 mm",
    Strap: "Steel",
    Glass: "Mineral",
    WaterResistance: "3 ATM",
    Warranty: "1 Year"
  }
},

{
  id: "noise-smart-06",
  name: "Noise Smartwatch Fit",
  category: "smart",
  tags: ["Noise", "Smart"],
  price: 2999,
  rating: 4.5,
  image: "assets/images/noise-smart.jpg",

  shortDescription:
    "Smart fitness watch with health tracking.",

  description:
    "Noise Smartwatch Fit provides heart-rate tracking, steps counter and notifications.",

  specs: {
    Movement: "Digital",
    Display: "Touchscreen",
    Strap: "Silicone",
    Battery: "7 Days",
    WaterResistance: "IP68",
    Warranty: "1 Year"
  }
},{
  id: "raga-women-01",
  name: "Titan Raga Women Silver",
  category: "womens",
  tags: ["Titan", "Raga"],
  price: 4595,
  rating: 4.7,
  image: "assets/images/raga-women1.jpg",

  shortDescription:
    "Elegant Titan Raga women's watch with stylish design.",

  description:
    "Titan Raga Women Silver watch offers graceful styling with a premium finish, perfect for formal and casual occasions.",

  specs: {
    Movement: "Quartz",
    Case: "32 mm",
    Strap: "Stainless Steel",
    Glass: "Mineral Glass",
    WaterResistance: "3 ATM",
    Warranty: "2 Years"
  }
},

{
  id: "fastrack-women-02",
  name: "Fastrack Women Pink Dial",
  category: "womens",
  tags: ["Fastrack", "Women"],
  price: 2795,
  rating: 4.6,
  image: "assets/images/fastrack-women-pink.jpg",

  shortDescription:
    "Modern pink dial Fastrack watch for women.",

  description:
    "Fastrack Women Pink Dial watch combines trendy style and durability, ideal for daily wear.",

  specs: {
    Movement: "Quartz",
    Case: "30 mm",
    Strap: "Metal",
    Glass: "Mineral Glass",
    WaterResistance: "3 ATM",
    Warranty: "1 Year"
  }
},

{
  id: "sonata-women-03",
  name: "Sonata Women Gold Classic",
  category: "womens",
  tags: ["Sonata", "Women"],
  price: 1999,
  rating: 4.5,
  image: "assets/images/sonata-women-gold.jpg",

  shortDescription:
    "Classic gold Sonata watch for elegant styling.",

  description:
    "Sonata Women Gold Classic watch features timeless styling with durable build quality.",

  specs: {
    Movement: "Quartz",
    Case: "28 mm",
    Strap: "Gold-tone Metal",
    Glass: "Mineral Glass",
    WaterResistance: "3 ATM",
    Warranty: "1 Year"
  }
},

{
  id: "fossil-women-04",
  name: "Fossil Women Rose Gold",
  category: "womens",
  tags: ["Fossil", "Premium"],
  price: 8495,
  rating: 4.8,
  image: "assets/images/fossil-women-rose.jpg",

  shortDescription:
    "Premium Fossil rose gold women's watch.",

  description:
    "Fossil Women Rose Gold watch offers elegant design and high-quality craftsmanship.",

  specs: {
    Movement: "Quartz",
    Case: "34 mm",
    Strap: "Steel",
    Glass: "Mineral Glass",
    WaterResistance: "5 ATM",
    Warranty: "2 Years"
  }
},

{
  id: "casio-women-05",
  name: "Casio Women Elegant",
  category: "womens",
  tags: ["Casio", "Women"],
  price: 3295,
  rating: 4.6,
  image: "assets/images/casio-women.jpg",

  shortDescription:
    "Elegant Casio women's analog watch.",

  description:
    "Casio Women Elegant watch features a clean dial design with reliable quartz movement.",

  specs: {
    Movement: "Quartz",
    Case: "30 mm",
    Strap: "Steel",
    Glass: "Mineral Glass",
    WaterResistance: "3 ATM",
    Warranty: "1 Year"
  }
},

{
  id: "titan-women-06",
  name: "Titan Women Leather Classic",
  category: "womens",
  tags: ["Titan", "Leather"],
  price: 4995,
  rating: 4.7,
  image: "assets/images/titan-women-leather.jpg",

  shortDescription:
    "Stylish Titan women's leather strap watch.",

  description:
    "Titan Women Leather Classic combines comfort with elegant design for daily use.",

  specs: {
    Movement: "Quartz",
    Case: "32 mm",
    Strap: "Leather",
    Glass: "Mineral Glass",
    WaterResistance: "3 ATM",
    Warranty: "2 Years"
  }
},
{
  id: "citizen-eco-01",
  name: "Citizen Eco-Drive Classic",
  category: "luxury",
  tags: ["Citizen", "Eco-Drive"],
  price: 12499,
  rating: 4.8,
  image: "assets/images/citizen-eco.jpg",

  shortDescription:
    "Premium Citizen Eco-Drive solar powered watch.",

  description:
    "Citizen Eco-Drive Classic features solar charging technology with elegant styling suitable for professionals.",

  specs: {
    Movement: "Eco-Drive",
    Case: "42 mm",
    Strap: "Stainless Steel",
    Glass: "Mineral Glass",
    WaterResistance: "5 ATM",
    Warranty: "2 Years"
  }
},

{
  id: "seiko-premium-02",
  name: "Seiko Premium Silver",
  category: "luxury",
  tags: ["Seiko", "Premium"],
  price: 13995,
  rating: 4.8,
  image: "assets/images/seiko-premium.jpg",

  shortDescription:
    "Premium Seiko analog watch with refined styling.",

  description:
    "Seiko Premium Silver offers reliable Japanese movement with timeless elegance.",

  specs: {
    Movement: "Quartz",
    Case: "41 mm",
    Strap: "Steel",
    Glass: "Hardlex Glass",
    WaterResistance: "5 ATM",
    Warranty: "2 Years"
  }
},

{
  id: "armani-exchange-03",
  name: "Armani Exchange Black Dial",
  category: "luxury",
  tags: ["Armani", "Exchange"],
  price: 15995,
  rating: 4.7,
  image: "assets/images/armani-exchange.jpg",

  shortDescription:
    "Stylish Armani Exchange premium watch.",

  description:
    "Armani Exchange Black Dial watch features luxury styling with a bold modern look.",

  specs: {
    Movement: "Quartz",
    Case: "44 mm",
    Strap: "Steel",
    Glass: "Mineral Glass",
    WaterResistance: "5 ATM",
    Warranty: "2 Years"
  }
},

{
  id: "michael-kors-04",
  name: "Michael Kors Rose Gold",
  category: "luxury",
  tags: ["Michael Kors", "Women"],
  price: 14995,
  rating: 4.8,
  image: "assets/images/michael-kors.jpg",

  shortDescription:
    "Luxury Michael Kors women's watch.",

  description:
    "Michael Kors Rose Gold watch offers premium finishing with elegant rose gold styling.",

  specs: {
    Movement: "Quartz",
    Case: "36 mm",
    Strap: "Steel",
    Glass: "Mineral Glass",
    WaterResistance: "5 ATM",
    Warranty: "2 Years"
  }
},

{
  id: "titan-automatic-05",
  name: "Titan Automatic Premium",
  category: "luxury",
  tags: ["Titan", "Automatic"],
  price: 17995,
  rating: 4.9,
  image: "assets/images/titan-automatic.jpg",

  shortDescription:
    "High-end Titan automatic watch.",

  description:
    "Titan Automatic Premium offers self-winding movement with premium craftsmanship.",

  specs: {
    Movement: "Automatic",
    Case: "42 mm",
    Strap: "Steel",
    Glass: "Mineral Glass",
    WaterResistance: "5 ATM",
    Warranty: "3 Years"
  }
},

{
  id: "fossil-premium-06",
  name: "Fossil Premium Steel",
  category: "luxury",
  tags: ["Fossil", "Premium"],
  price: 12995,
  rating: 4.7,
  image: "assets/images/fossil-premium.jpg",

  shortDescription:
    "Premium Fossil stainless steel watch.",

  description:
    "Fossil Premium Steel watch delivers timeless design with premium build quality.",

  specs: {
    Movement: "Quartz",
    Case: "42 mm",
    Strap: "Steel",
    Glass: "Mineral Glass",
    WaterResistance: "5 ATM",
    Warranty: "2 Years"
  }
},

{
  id: "citizen-weekender-green",
  name: "Citizen Weekender Green Dial",
  category: "mens",
  tags: ["Citizen", "Modern"],
  price: 9295,
  rating: 4.7,
  image: "assets/images/citizen1.jpg",

  shortDescription:
    "Versatile Citizen watch with a sharp green dial and brushed steel finish.",

  description:
    "Citizen Weekender Green Dial blends modern color with everyday versatility, offering a refined steel case, balanced proportions, and a confident dial suited to office wear and weekend styling alike.",

  specs: {
    Movement: "Quartz",
    Case: "41 mm Stainless Steel",
    Strap: "Stainless Steel Bracelet",
    Glass: "Mineral Glass",
    WaterResistance: "5 ATM",
    Warranty: "2 Years"
  },

  featured: true,
  offerText: "Complimentary polishing cloth included with every order."
},

{
  id: "titan-raga-rose-mesh",
  name: "Titan Raga Rose Mesh",
  category: "womens",
  tags: ["Titan", "Raga"],
  price: 5695,
  rating: 4.8,
  image: "assets/images/raga1.jpg",

  shortDescription:
    "Elegant Titan Raga with a rose-tone mesh bracelet and soft champagne dial.",

  description:
    "Titan Raga Rose Mesh is styled for graceful everyday wear, pairing a slim case profile with a warm metallic finish that transitions easily from work to evening occasions.",

  specs: {
    Movement: "Quartz",
    Case: "30 mm Alloy Case",
    Strap: "Rose Gold Mesh Bracelet",
    Glass: "Mineral Glass",
    WaterResistance: "3 ATM",
    Warranty: "2 Years"
  },

  featured: false,
  offerText: "Gift-wrap upgrade available for women's signature pieces."
},

{
  id: "noise-lunar-call-plus",
  name: "Noise Lunar Call Plus",
  category: "smart",
  tags: ["Noise", "Bluetooth Calling"],
  price: 3499,
  rating: 4.6,
  image: "assets/images/noise-smart.jpg",

  shortDescription:
    "Feature-rich Noise smartwatch with Bluetooth calling and wellness tracking.",

  description:
    "Noise Lunar Call Plus combines a large vibrant display, Bluetooth calling, and daily wellness tracking in a polished design made for users who want smart convenience without sacrificing style.",

  specs: {
    Movement: "Digital",
    Display: "1.43 inch AMOLED",
    Strap: "Silicone Strap",
    Battery: "Up to 7 days",
    WaterResistance: "IP68",
    Warranty: "1 Year"
  },

  featured: false,
  offerText: "Smartwatch charger dock included for a limited period."
},

{
  id: "casio-g-shock-urban-grey",
  name: "Casio G-Shock Urban Grey",
  category: "sports",
  tags: ["Casio", "G-Shock"],
  price: 7995,
  rating: 4.8,
  image: "assets/images/casio-digital.jpg",

  shortDescription:
    "Rugged Casio sports watch with shock resistance and a bold grey case.",

  description:
    "Casio G-Shock Urban Grey is built for active routines with a resilient case, dependable digital functions, and strong wrist presence designed for training, travel, and everyday impact resistance.",

  specs: {
    Movement: "Digital",
    Case: "45 mm Resin Case",
    Strap: "Resin Strap",
    Glass: "Mineral Glass",
    WaterResistance: "20 ATM",
    Warranty: "2 Years"
  },

  featured: true,
  offerText: "Bonus rugged storage case available while stocks last."
},

{
  id: "seiko-presage-midnight-blue",
  name: "Seiko Presage Midnight Blue",
  category: "luxury",
  tags: ["Seiko", "Automatic"],
  price: 18995,
  rating: 4.9,
  image: "assets/images/seiko-premium.jpg",

  shortDescription:
    "Premium Seiko automatic with a deep blue dial and dress-watch proportions.",

  description:
    "Seiko Presage Midnight Blue offers elevated finishing, an automatic movement, and a richly textured dial that brings collector appeal to formal wardrobes and special-occasion styling.",

  specs: {
    Movement: "Automatic",
    Case: "40.5 mm Stainless Steel",
    Strap: "Polished Steel Bracelet",
    Glass: "Hardlex Glass",
    WaterResistance: "5 ATM",
    Warranty: "3 Years"
  },

  featured: true,
  offerText: "Premium engraving consultation available for this model."
},

{
  id: "fastrack-active-orange",
  name: "Fastrack Active Orange",
  category: "sports",
  tags: ["Fastrack", "Active"],
  price: 3795,
  rating: 4.5,
  image: "assets/images/fastrack-sport.jpg",

  shortDescription:
    "Sporty Fastrack watch with vivid orange accents and durable outdoor styling.",

  description:
    "Fastrack Active Orange is built for energetic everyday use, featuring a rugged case, quick-read dial detailing, and a comfortable strap tuned for active schedules.",

  specs: {
    Movement: "Quartz",
    Case: "43 mm Resin Case",
    Strap: "Textured Rubber Strap",
    Glass: "Mineral Glass",
    WaterResistance: "5 ATM",
    Warranty: "1 Year"
  },

  featured: false,
  offerText: "Includes an extra sport loop strap on select orders."
},

{
  id: "rolex-submariner-date-126618lb",
  name: "Rolex Submariner Date 126618LB",
  category: "luxury",
  tags: ["Rolex", "Diver", "Swiss"],
  price: 4049995,
  rating: 5.0,
  image: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit%2Cw_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m126618lb-0002",

  shortDescription:
    "Iconic Rolex diver in 18 kt yellow gold with a royal blue dial and Cerachrom bezel.",

  description:
    "The Rolex Submariner Date 126618LB is one of the most recognizable luxury dive watches in the world. Official Rolex details highlight its 41 mm Oyster case, blue Cerachrom bezel insert, Chromalight display, and robust self-winding calibre 3235, making it a collector-grade piece with unmistakable wrist presence.",

  specs: {
    Reference: "126618LB",
    Movement: "Rolex Calibre 3235 Automatic",
    Case: "41 mm Oyster Case in 18 kt Yellow Gold",
    Bezel: "Unidirectional Rotatable Blue Cerachrom Bezel",
    Crystal: "Scratch-resistant Sapphire with Cyclops Lens",
    WaterResistance: "300 metres / 1000 feet",
    PowerReserve: "Approximately 70 hours"
  },

  featured: true,
  offerText: "Collector concierge support included for flagship Rolex inquiries."
},

{
  id: "rolex-daytona-126509",
  name: "Rolex Cosmograph Daytona 126509",
  category: "luxury",
  tags: ["Rolex", "Chronograph", "Swiss"],
  price: 4689995,
  rating: 5.0,
  image: "https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit%2Cw_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m126509-0003",

  shortDescription:
    "Prestige Rolex chronograph in 18 kt white gold with a steel and bright black dial.",

  description:
    "The Cosmograph Daytona 126509 stands at the performance end of the Rolex catalogue. According to the official Rolex model page, it pairs a 40 mm white-gold Oyster case with an engraved tachymetric bezel and the self-winding calibre 4131, giving the watch true motorsport heritage as well as top-tier finishing.",

  specs: {
    Reference: "126509",
    Movement: "Rolex Calibre 4131 Automatic Chronograph",
    Case: "40 mm Oyster Case in 18 kt White Gold",
    Bezel: "Fixed Tachymetric Bezel in 18 kt White Gold",
    Crystal: "Scratch-resistant Sapphire",
    WaterResistance: "100 metres / 330 feet",
    PowerReserve: "Approximately 72 hours"
  },

  featured: true,
  offerText: "Premium insured delivery and white-glove packaging available."
},

{
  id: "rolex-day-date-40-green-ombre",
  name: "Rolex Day-Date 40 Green Ombre",
  category: "luxury",
  tags: ["Rolex", "Day-Date", "Swiss"],
  price: 3984995,
  rating: 4.9,
  image: "https://media.rolex.com/image/upload/q_auto%3Aeco/f_auto/t_v7-grid/c_limit%2Cw_1920/v1/a677b2c664f6/catalogue/2026/upright-bba-with-shadow/m228238-0069",

  shortDescription:
    "Statement Day-Date in yellow gold with a deep green ombre dial and fluted bezel.",

  description:
    "The Rolex Day-Date 40 Green Ombre is pure prestige watchmaking, combining the signature day-and-date display with an 18 kt yellow-gold case and President bracelet. Rolex positions the Day-Date as a watch of achievement, and this green-dial execution carries that identity with especially strong visual character.",

  specs: {
    Reference: "228238-0069",
    Movement: "Rolex Perpetual Automatic",
    Case: "40 mm Oyster Case in 18 kt Yellow Gold",
    Bezel: "Fluted Yellow Gold Bezel",
    Bracelet: "President Bracelet",
    WaterResistance: "100 metres / 330 feet",
    Dial: "Green Ombre"
  },

  featured: true,
  offerText: "Reserved for the pinnacle luxury collection with boutique-style support."
},

{
  id: "tissot-seastar-1000-powermatic-80",
  name: "Tissot Seastar 1000 Powermatic 80",
  category: "luxury",
  tags: ["Tissot", "Swiss", "Diver"],
  price: 72995,
  rating: 4.8,
  image: "assets/images/tissot1.jpg",

  shortDescription:
    "Swiss automatic dive watch with 300 m water resistance and an 80-hour power reserve.",

  description:
    "The Tissot Seastar 1000 Powermatic 80 is a smart premium pick for buyers who want authentic Swiss mechanical value without stepping into ultra-luxury pricing. Tissot lists a 40 mm steel case, screw-down crown and caseback, sapphire crystal, and 300 m water resistance, making it one of the strongest sport-luxury additions for this store.",

  specs: {
    Reference: "T120.807.11.051.00",
    Movement: "Swiss Automatic Powermatic 80",
    Case: "40 mm 316L Stainless Steel",
    Crystal: "Sapphire with Antireflective Coating",
    WaterResistance: "300 metres / 1000 feet",
    Strap: "Stainless Steel Bracelet",
    PowerReserve: "Up to 80 hours"
  },

  featured: false,
  offerText: "A strong value pick in the Swiss diver category."
},

{
  id: "longines-master-blue-l27934926",
  name: "Longines Master Collection Sunray Blue",
  category: "luxury",
  tags: ["Longines", "Automatic", "Swiss"],
  price: 211995,
  rating: 4.8,
  image: "https://api.ecom.longines.com/media/catalog/product/w/a/watch-collection-longines-master-collection-l2-793-4-92-6-a43ccc-hero.png?w=2560",

  shortDescription:
    "Elegant Swiss automatic dress watch with a sunray blue dial and refined bracelet finish.",

  description:
    "The Longines Master Collection Sunray Blue is an understated premium dress watch that adds depth to the catalogue beyond sport-heavy luxury models. Official Longines details describe a 40 mm stainless-steel case, self-winding movement with up to 72 hours of power reserve, sapphire crystal, and a clean blue dial that feels timeless rather than trend-driven.",

  specs: {
    Reference: "L2.793.4.92.6",
    Movement: "Self-winding Mechanical Automatic",
    Case: "40 mm Stainless Steel",
    Crystal: "Scratch-resistant Sapphire",
    WaterResistance: "3 bar",
    Strap: "Stainless Steel Bracelet",
    PowerReserve: "Up to 72 hours"
  },

  featured: true,
  offerText: "Ideal for buyers who want quiet luxury and classic Swiss finishing."
},

{
  id: "titan-octane-slate-chronograph",
  name: "Titan Octane Slate Chronograph",
  category: "mens",
  tags: ["Titan", "Chronograph"],
  price: 7895,
  rating: 4.7,
  image: "assets/images/titan1.jpg",

  shortDescription:
    "Bold Titan chronograph with a slate dial and sport-formal versatility.",

  description:
    "Titan Octane Slate Chronograph brings a stronger masculine profile to the men's collection with multi-function styling, a substantial metal case, and a dial treatment that works equally well for office wear and evenings out.",

  specs: {
    Movement: "Quartz Chronograph",
    Case: "43 mm Stainless Steel",
    Strap: "Stainless Steel Bracelet",
    Glass: "Mineral Glass",
    WaterResistance: "5 ATM",
    Warranty: "2 Years"
  },

  featured: false,
  offerText: "A versatile Titan pick for buyers who want sporty detailing without losing polish."
},

{
  id: "timex-weekender-navy-stripe",
  name: "Timex Weekender Navy Stripe",
  category: "mens",
  tags: ["Timex", "Casual"],
  price: 3295,
  rating: 4.5,
  image: "assets/images/timex1.jpg",

  shortDescription:
    "Relaxed Timex everyday watch with a crisp dial and easy-wear strap styling.",

  description:
    "Timex Weekender Navy Stripe is designed for casual daily use, offering clean legibility, lightweight comfort, and a simple style profile that broadens the men's collection at an approachable price point.",

  specs: {
    Movement: "Quartz",
    Case: "40 mm Brass Case",
    Strap: "Fabric Strap",
    Glass: "Mineral Glass",
    WaterResistance: "3 ATM",
    Warranty: "1 Year"
  },

  featured: false,
  offerText: "A dependable budget-friendly choice for daily rotation."
},

{
  id: "fossil-jacqueline-silver-tone",
  name: "Fossil Jacqueline Silver Tone",
  category: "womens",
  tags: ["Fossil", "Elegant"],
  price: 6995,
  rating: 4.7,
  image: "assets/images/fossil-women-rose.jpg",

  shortDescription:
    "Refined Fossil women's watch with a minimalist silver-tone bracelet finish.",

  description:
    "Fossil Jacqueline Silver Tone adds understated elegance to the women's collection with a slim case, uncluttered dial, and polished bracelet styling suited to workwear and occasion dressing alike.",

  specs: {
    Movement: "Quartz",
    Case: "34 mm Stainless Steel",
    Strap: "Silver-tone Bracelet",
    Glass: "Mineral Glass",
    WaterResistance: "5 ATM",
    Warranty: "2 Years"
  },

  featured: false,
  offerText: "A polished women's signature piece with timeless styling."
},

{
  id: "sonata-poise-rose-petite",
  name: "Sonata Poise Rose Petite",
  category: "womens",
  tags: ["Sonata", "Rose Gold"],
  price: 2595,
  rating: 4.5,
  image: "assets/images/sonata-women-gold.jpg",

  shortDescription:
    "Compact Sonata women's watch with a soft rose-tone dress look.",

  description:
    "Sonata Poise Rose Petite expands the budget-friendly women's range with a lighter dress-watch silhouette, subtle metallic warmth, and reliable everyday wearability.",

  specs: {
    Movement: "Quartz",
    Case: "27 mm Alloy Case",
    Strap: "Rose-tone Metal Bracelet",
    Glass: "Mineral Glass",
    WaterResistance: "3 ATM",
    Warranty: "1 Year"
  },

  featured: false,
  offerText: "A graceful entry-level dress watch with strong gift appeal."
},

{
  id: "boat-wave-electra",
  name: "boAt Wave Electra",
  category: "smart",
  tags: ["boAt", "Bluetooth Calling"],
  price: 2299,
  rating: 4.4,
  image: "assets/images/boat1.jpg",

  shortDescription:
    "Affordable boAt smartwatch with call support and a bright square display.",

  description:
    "boAt Wave Electra strengthens the affordable smart range with Bluetooth calling, activity tracking, and a familiar everyday form factor for first-time smartwatch buyers.",

  specs: {
    Movement: "Digital",
    Display: "1.81 inch Touch Display",
    Strap: "Silicone Strap",
    Battery: "Up to 7 days",
    WaterResistance: "IP68",
    Warranty: "1 Year"
  },

  featured: false,
  offerText: "A practical smart option for value-focused shoppers."
},

{
  id: "fire-boltt-visionary-amoled",
  name: "Fire-Boltt Visionary AMOLED",
  category: "smart",
  tags: ["Fire-Boltt", "AMOLED"],
  price: 3499,
  rating: 4.5,
  image: "assets/images/firebolt1.jpg",

  shortDescription:
    "Feature-rich Fire-Boltt smartwatch with AMOLED display and calling support.",

  description:
    "Fire-Boltt Visionary AMOLED gives the smart category another step-up option with a brighter display, a more premium interface feel, and daily-use convenience features for calls and fitness tracking.",

  specs: {
    Movement: "Digital",
    Display: "1.78 inch AMOLED",
    Strap: "Silicone Strap",
    Battery: "Up to 5 days",
    WaterResistance: "IP68",
    Warranty: "1 Year"
  },

  featured: false,
  offerText: "A stronger premium-budget smartwatch pick with sharper display quality."
},

{
  id: "casio-youth-resin-runner",
  name: "Casio Youth Resin Runner",
  category: "sports",
  tags: ["Casio", "Sport"],
  price: 2595,
  rating: 4.6,
  image: "assets/images/casio-digital.jpg",

  shortDescription:
    "Reliable Casio sports watch with lightweight resin comfort and easy-read digital layout.",

  description:
    "Casio Youth Resin Runner adds an accessible rugged option to the sports range, with a lightweight build, practical digital functions, and strong everyday durability for active use.",

  specs: {
    Movement: "Digital",
    Case: "42 mm Resin Case",
    Strap: "Resin Strap",
    Glass: "Acrylic Glass",
    WaterResistance: "10 ATM",
    Warranty: "1 Year"
  },

  featured: false,
  offerText: "A no-fuss sports essential built around everyday toughness."
},

{
  id: "fastrack-reflex-runner-red",
  name: "Fastrack Reflex Runner Red",
  category: "sports",
  tags: ["Fastrack", "Runner"],
  price: 4195,
  rating: 4.5,
  image: "assets/images/fastrack-sport.jpg",

  shortDescription:
    "Energetic Fastrack sports watch with bold red accents and a rugged casual fit.",

  description:
    "Fastrack Reflex Runner Red gives the sports section another youthful statement watch, blending contrast detailing, durable construction, and a quick-read dial tuned for active routines.",

  specs: {
    Movement: "Quartz",
    Case: "44 mm Resin Case",
    Strap: "Rubber Strap",
    Glass: "Mineral Glass",
    WaterResistance: "5 ATM",
    Warranty: "1 Year"
  },

  featured: false,
  offerText: "Built for active styling with strong visual character."
},

{
  id: "seiko-5-sports-black-automatic",
  name: "Seiko 5 Sports Black Automatic",
  category: "luxury",
  tags: ["Seiko", "Automatic", "Sports"],
  price: 38995,
  rating: 4.8,
  image: "assets/images/seiko-premium.jpg",

  shortDescription:
    "Entry Swiss-alternative luxury pick with automatic movement and strong sport styling.",

  description:
    "Seiko 5 Sports Black Automatic broadens the premium mechanical end of the catalogue with an enthusiast-friendly automatic movement, substantial case design, and an easy transition between daily wear and weekend collection appeal.",

  specs: {
    Movement: "Automatic",
    Case: "42.5 mm Stainless Steel",
    Strap: "Stainless Steel Bracelet",
    Glass: "Hardlex Glass",
    WaterResistance: "10 ATM",
    Warranty: "2 Years"
  },

  featured: true,
  offerText: "A collector-friendly automatic for buyers stepping into premium mechanical watches."
},

{
  id: "citizen-tsuyosa-yellow-dial",
  name: "Citizen Tsuyosa Yellow Dial",
  category: "luxury",
  tags: ["Citizen", "Automatic", "Modern"],
  price: 45995,
  rating: 4.8,
  image: "assets/images/citizen-eco.jpg",

  shortDescription:
    "Modern Citizen automatic with an eye-catching yellow dial and integrated bracelet feel.",

  description:
    "Citizen Tsuyosa Yellow Dial introduces a bolder contemporary luxury option, combining vivid color, automatic movement, and a streamlined bracelet-forward profile that feels fresh alongside the more classic premium models.",

  specs: {
    Movement: "Automatic",
    Case: "40 mm Stainless Steel",
    Strap: "Integrated Steel Bracelet",
    Glass: "Sapphire Crystal",
    WaterResistance: "5 ATM",
    Warranty: "2 Years"
  },

  featured: true,
  offerText: "A distinctive premium choice for shoppers who want modern dial personality."
},
    
  ];

  const testimonials = [
    {
      name: "Aarav S.",
      title: "Collector, Bengaluru",
      quote:
        "Patel Times feels like a showroom experience translated online. The detailing, motion, and product pages all feel premium."
    },
    {
      name: "Rhea M.",
      title: "Creative Director, Mumbai",
      quote:
        "The product finish and presentation sold me immediately. The Celeste Rose looked luxurious even before it arrived."
    },
    {
      name: "Vikram P.",
      title: "Consultant, Delhi",
      quote:
        "I wanted a sharp watch without the usual clutter. Solaris GMT Classic hit the sweet spot between heritage styling and modern polish."
    },
    {
      name: "Naina K.",
      title: "Entrepreneur, Hyderabad",
      quote:
        "The flow from browsing to checkout was smooth, and the design genuinely feels like a premium watch brand rather than a template shop."
    }
  ];

  const offers = [
    {
      id: "luxury-pairing-event",
      tag: "Limited Edit",
      title: "Luxury Pairing Event",
      text: "Select any premium watch and unlock exclusive packaging plus complimentary engraving.",
      category: "luxury",
      accent: "Boutique Access",
      details:
        "This limited edit is built for premium buyers who want the purchase to feel more ceremonial. Choose from the luxury collection and unlock elevated presentation benefits that match the tone of a flagship watch purchase.",
      benefits: [
        "Complimentary engraving consultation on eligible premium models",
        "Luxury gift-box presentation and finishing cloth included",
        "Priority support for high-value orders"
      ],
      ctaLabel: "Browse Luxury Watches"
    },
    {
      id: "sports-collection-savings",
      tag: "Weekend Deal",
      title: "Sports Collection Savings",
      text: "Performance models come with bonus straps and protective cases while stock lasts.",
      category: "sports",
      accent: "Active Picks",
      details:
        "This offer focuses on performance-led watches that buyers often want for regular wear, travel, and active use. It highlights the sports collection with a stronger value story instead of just sending shoppers to the full catalog.",
      benefits: [
        "Bonus strap offer on selected sports watches",
        "Protective case included on qualifying models",
        "Best suited for rugged daily-wear and active designs"
      ],
      ctaLabel: "Browse Sports Watches"
    },
    {
      id: "smart-watch-upgrade-pack",
      tag: "Members First",
      title: "Smart Watch Upgrade Pack",
      text: "Buy a connected Patel Times watch and receive a charger dock and care kit at launch.",
      category: "smart",
      accent: "Connected Upgrade",
      details:
        "This pack is aimed at smartwatch buyers who care about convenience and accessories. Instead of a generic redirect, it now explains what the upgrade pack means and sends visitors directly into the smart watch collection.",
      benefits: [
        "Charging dock included with selected smart watches",
        "Care kit designed for screens and silicone straps",
        "Great for first-time smartwatch buyers"
      ],
      ctaLabel: "Browse Smart Watches"
    }
  ];

  const categoryCards = [
    {
      id: "mens",
      name: "Men's Watches",
      copy: "Architectural cases, chronographs, and versatile formal silhouettes."
    },
    {
      id: "womens",
      name: "Women's Watches",
      copy: "Refined profiles with elegant bracelet design and luminous detailing."
    },
    {
      id: "smart",
      name: "Smart Watches",
      copy: "Connected performance with modern luxury finishing and vibrant displays."
    },
    {
      id: "luxury",
      name: "Luxury Watches",
      copy: "Collector-led craftsmanship, polished metals, and elevated materials."
    },
    {
      id: "sports",
      name: "Sports Watches",
      copy: "High-contrast, resilient timepieces built for movement and endurance."
    }
  ];

  function readJSON(key, fallbackValue) {
    try {
      const rawValue = localStorage.getItem(key);
      return rawValue ? JSON.parse(rawValue) : fallbackValue;
    } catch (error) {
      console.warn("Patel Times storage read failed", error);
      return fallbackValue;
    }
  }

  function writeJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function getReviewStore() {
    return readJSON(STORAGE_KEYS.reviews, {});
  }

  function writeReviewStore(value) {
    writeJSON(STORAGE_KEYS.reviews, value);
  }

  function getSeedReviews(product) {
    const brand = product.tags[0] || "Patel Times";
    
    // Hash the product ID to get deterministic but varied results
    let hash = 0;
    for (let i = 0; i < product.id.length; i++) {
      hash = product.id.charCodeAt(i) + ((hash << 5) - hash);
    }
    hash = Math.abs(hash);

    const firstNames = ["Aarav", "Neha", "Rohan", "Priya", "Vikram", "Anjali", "Karan", "Sneha", "Rahul", "Pooja", "Arjun", "Kavya", "Siddharth", "Tara"];
    const lastNames = ["S.", "P.", "K.", "M.", "R.", "V.", "N.", "T.", "L.", "D."];
    
    const commentsA = [
      brand + " did a great job on the finish and the watch feels reliable for daily wear.",
      "Absolutely love the design. The weight is just right and it feels premium.",
      "Good value for the money. The strap took a few days to break in, but now it's very comfortable.",
      "A solid addition to my collection. " + brand + " rarely disappoints.",
      "Purchased this for a special occasion and it looks stunning on the wrist.",
      "Fast delivery and the packaging was excellent. The watch itself is flawless."
    ];
    
    const commentsB = [
      "The " + product.name + " looks even better in person and the value feels strong for this collection.",
      "I've received multiple compliments already. The dial is very readable and the build quality is top notch.",
      "Exactly what I was looking for. Simple, elegant, and keeps perfect time.",
      "The overall aesthetic is very refined. It pairs well with both casual and formal wear.",
      "Slightly smaller than I expected, but still a beautiful timepiece. Excellent finish.",
      "Very satisfied with my purchase. The detailing on the watch face is impressive."
    ];

    const baseDate = new Date("2026-03-18T10:00:00");
    
    // Pick 2 to 4 reviews
    const numReviews = (hash % 3) + 2; 
    const presets = [];
    
    for(let i = 0; i < numReviews; i++) {
        // Vary the hash slightly for each review
        const currentHash = hash + i * 13;
        
        const name = firstNames[currentHash % firstNames.length] + " " + lastNames[currentHash % lastNames.length];
        const commentList = (i % 2 === 0) ? commentsA : commentsB;
        const comment = commentList[currentHash % commentList.length];
        
        // Base rating around the product's actual rating, but vary it slightly
        let reviewRating = product.rating + ((currentHash % 3) - 1) * 0.5; // +/- 0.5
        // Cap between 3 and 5
        reviewRating = Math.max(3, Math.min(5, reviewRating));
        
        // Round to nearest 0.5 or whole number
        reviewRating = Math.round(reviewRating * 2) / 2;

        presets.push({
            name: name,
            rating: reviewRating,
            comment: comment
        });
    }

    return presets.map(function (review, index) {
      // Spread dates logically
      const daysOffset = (hash % 30) + index * (hash % 5 + 2);
      const reviewDate = new Date(baseDate.getTime() - daysOffset * 86400000);
      return {
        id: product.id + "-seed-" + index,
        name: review.name,
        rating: review.rating,
        comment: review.comment,
        date: reviewDate.toISOString(),
        seeded: true
      };
    });
  }

  function getProductReviews(product) {
    const reviewStore = getReviewStore();
    const storedReviews = Array.isArray(reviewStore[product.id]) ? reviewStore[product.id] : [];

    return storedReviews
      .concat(getSeedReviews(product))
      .filter(function (review) {
        return review && review.comment;
      })
      .map(function (review, index) {
        return {
          id: review.id || product.id + "-review-" + index,
          name: review.name || "Patel Times Customer",
          rating: Math.max(1, Math.min(5, Number(review.rating) || 0)),
          comment: review.comment,
          date: review.date || new Date().toISOString(),
          seeded: Boolean(review.seeded)
        };
      })
      .sort(function (left, right) {
        return new Date(right.date).getTime() - new Date(left.date).getTime();
      });
  }

  function getProductRatingData(product) {
    const reviews = getProductReviews(product);

    if (!reviews.length) {
      return {
        average: product.rating,
        count: 0,
        reviews: []
      };
    }

    const total = reviews.reduce(function (sum, review) {
      return sum + review.rating;
    }, 0);

    return {
      average: total / reviews.length,
      count: reviews.length,
      reviews: reviews
    };
  }

  function formatReviewDate(value) {
    const parsedDate = new Date(value);

    if (Number.isNaN(parsedDate.getTime())) {
      return "Recent review";
    }

    return parsedDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  }

  function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(amount);
  }

  function getCurrentUser() {
    return readJSON(STORAGE_KEYS.currentUser, null);
  }

  function getUsers() {
    return readJSON(STORAGE_KEYS.users, []);
  }

  function setUsers(users) {
    writeJSON(STORAGE_KEYS.users, users);
  }

  function getOrders() {
    return readJSON(STORAGE_KEYS.orders, []);
  }

  function setOrders(orders) {
    writeJSON(STORAGE_KEYS.orders, orders);
  }

  function getCartItems() {
    return readJSON(STORAGE_KEYS.cart, []);
  }

  function setCartItems(cartItems) {
    writeJSON(STORAGE_KEYS.cart, cartItems);
    updateCartBadge();
  }

  function updateCartBadge() {
    const totalItems = getCartItems().reduce(function (sum, item) {
      return sum + item.quantity;
    }, 0);

    document.querySelectorAll("[data-cart-count]").forEach(function (badge) {
      badge.textContent = String(totalItems);
    });
  }

  function getProductById(productId) {
    return products.find(function (product) {
      return product.id === productId;
    });
  }

  function getCategoryName(categoryId) {
    const categoryLookup = {
      mens: "Men's Watches",
      womens: "Women's Watches",
      smart: "Smart Watches",
      luxury: "Luxury Watches",
      sports: "Sports Watches"
    };

    return categoryLookup[categoryId] || "Curated Watches";
  }

  function buildHeader() {
    const headerMount = document.querySelector("#site-header");
    if (!headerMount) {
      return;
    }

    const currentPage = document.body.dataset.page || "home";
    headerMount.innerHTML = [
      '<div class="container">',
      '  <nav class="navbar glass-card" aria-label="Primary navigation">',
      '    <a class="brand-lockup" href="index.html" aria-label="Patel Times home">',
      '      <span class="brand-mark">CL</span>',
      "      <span>",
      "        <strong>Patel Times</strong>",
      "        <span>Watch Store</span>",
      "      </span>",
      "    </a>",
      '    <button class="mobile-nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">',
      "      <span></span>",
      "    </button>",
      '    <div class="nav-links" data-mobile-menu>',
      navLink("index.html", "Home", currentPage === "home"),
      navLink("shop.html", "Shop", currentPage === "shop" || currentPage === "product"),
      navLink("about.html", "About", currentPage === "about"),
      navLink("contact.html", "Contact", currentPage === "contact"),
      navLink("feedback.html", "Feedback", currentPage === "feedback"),
      navLink("register.html", "Register", currentPage === "register"),
      navLink("login.html", "Login", currentPage === "login" || currentPage === "dashboard"),
      navLink("cart.html", "Cart", currentPage === "cart" || currentPage === "checkout"),
      "    </div>",
      '    <div class="nav-actions">',
      '      <a class="btn btn-outline" href="shop.html">Explore Watches</a>',
      '      <a class="cart-pill" href="cart.html" aria-label="Open shopping cart">',
      "        <span>Cart</span>",
      '        <span data-cart-count>0</span>',
      "      </a>",
      "    </div>",
      "  </nav>",
      "</div>"
    ].join("");
  }

  function navLink(href, label, isActive) {
    return '<a href="' + href + '" class="' + (isActive ? "active" : "") + '">' + label + "</a>";
  }

  function buildFooter() {
    const footerMount = document.querySelector("#site-footer");
    if (!footerMount) {
      return;
    }

    footerMount.innerHTML = [
      '<div class="container footer">',
      '  <div class="footer-shell glass-card">',
      '    <div class="footer-banner">',
      '      <div class="footer-banner-copy">',
      "        <strong>Luxury presentation. Easier buying flow.</strong>",
      "        <p>Discover curated watches across budget, smart, sport, formal, and premium categories with a cleaner storefront experience.</p>",
      "      </div>",
      '      <a class="btn btn-primary" href="shop.html">Shop All Watches</a>',
      "    </div>",
      '    <div class="footer-grid">',
      '      <div class="footer-column">',
      "        <strong>Patel Times Watch Store</strong>",
      "        <p>Patel Times blends boutique-style presentation with practical catalog browsing so shoppers can move from discovery to checkout with more confidence.</p>",
      '        <div class="chip-row">',
      '          <span class="chip">Curated Catalog</span>',
      '          <span class="chip">Luxury Styling</span>',
      '          <span class="chip">Faster Comparison</span>',
      "        </div>",
      "      </div>",
      '      <div class="footer-column">',
      "        <strong>Collections</strong>",
      '        <a href="shop.html?category=mens">Men\'s Watches</a>',
      '        <a href="shop.html?category=womens">Women\'s Watches</a>',
      '        <a href="shop.html?category=smart">Smart Watches</a>',
      '        <a href="shop.html?category=luxury">Luxury Watches</a>',
      "      </div>",
      '      <div class="footer-column">',
      "        <strong>Support</strong>",
      '        <a href="about.html">About Patel Times</a>',
      '        <a href="contact.html">Customer Care</a>',
      '        <a href="feedback.html">Store Feedback</a>',
      '        <a href="dashboard.html">Order Dashboard</a>',
      '        <a href="checkout.html">Secure Checkout</a>',
      "      </div>",
      '      <div class="footer-column">',
      "        <strong>Client Services</strong>",
      "        <p>support@pateltimes.com</p>",
      "        <p>+91 98765 43210</p>",
      "        <p>Mon-Sat, 10:00 AM to 8:00 PM</p>",
      "        <p>Luxury Arcade, Sector 9, New Delhi</p>",
      "      </div>",
      "    </div>",
      '    <div class="footer-meta">',
      '      <span>&copy; <span data-current-year></span> Patel Times. Precision in every second.</span>',
      "      <span>Luxury-inspired storefront built with HTML, CSS, JavaScript, and Three.js.</span>",
      "    </div>",
      "  </div>",
      "</div>"
    ].join("");
  }

  function attachShellEvents() {
    const header = document.querySelector(".site-header");
    const toggleButton = document.querySelector(".mobile-nav-toggle");
    const mobileMenu = document.querySelector("[data-mobile-menu]");

    if (toggleButton && mobileMenu) {
      toggleButton.addEventListener("click", function () {
        const isOpen = mobileMenu.classList.toggle("is-open");
        toggleButton.classList.toggle("is-open", isOpen);
        toggleButton.setAttribute("aria-expanded", String(isOpen));
      });
    }

    function updateHeaderState() {
      if (!header) {
        return;
      }

      header.classList.toggle("is-scrolled", window.scrollY > 10);
    }

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState);
  }

  function setCurrentYear() {
    document.querySelectorAll("[data-current-year]").forEach(function (node) {
      node.textContent = String(new Date().getFullYear());
    });
  }

  function showToast(message, tone) {
    const stack = getToastStack();
    const toast = document.createElement("div");
    toast.className = "toast " + (tone || "default");
    toast.textContent = message;
    stack.appendChild(toast);

    window.setTimeout(function () {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(16px)";
      window.setTimeout(function () {
        toast.remove();
      }, 240);
    }, 2800);
  }

  function getToastStack() {
    let stack = document.querySelector(".toast-stack");
    if (!stack) {
      stack = document.createElement("div");
      stack.className = "toast-stack";
      document.body.appendChild(stack);
    }
    return stack;
  }

  function createStars(rating) {
    const fullStars = Math.floor(rating);
    const fraction = rating - fullStars;
    
    let realFullStars = fullStars;
    let hasHalfStar = false;
    
    if (fraction >= 0.8) {
      realFullStars += 1;
    } else if (fraction >= 0.3) {
      hasHalfStar = true;
    }
    
    const emptyStars = 5 - realFullStars - (hasHalfStar ? 1 : 0);

    let html = "&#9733;".repeat(realFullStars);
    if (hasHalfStar) {
      html += "<span style='position:relative;display:inline-block;'>&#9734;<span style='position:absolute;left:0;top:0;width:50%;overflow:hidden;color:inherit;'>&#9733;</span></span>";
    }
    html += "&#9734;".repeat(emptyStars);
    return html;
  }

  function getProductStatus(product) {
    if (product.price > 200000) {
      return "Limited Piece";
    }

    if (product.featured) {
      return "Best Seller";
    }

    return "In Stock";
  }

  function getProductAccent(product) {
    if (product.category === "luxury") {
      return "Concierge";
    }

    if (product.category === "smart") {
      return "Smart Pick";
    }

    if (product.category === "sports") {
      return "Active Wear";
    }

    return "Daily Wear";
  }

  function createProductCard(product, index) {
    const ratingData = getProductRatingData(product);

    return [
      '<article class="product-card glass-card tilt-card" data-reveal style="--delay:' + (index || 0) + ';" data-product-id="' + product.id + '">',
      '  <div class="product-media">',
      '    <img src="' + product.image + '" alt="' + product.name + '" loading="lazy">',
      '    <div class="product-badges">',
      '      <span class="product-badge">' + product.tags[0] + "</span>",
      '      <span class="product-badge product-badge-soft">' + getProductStatus(product) + "</span>",
      "    </div>",
      "  </div>",
      '  <div class="product-copy">',
      '    <div class="product-topline">',
      "      <div>",
      "        <h3>" + product.name + "</h3>",
      "        <p>" + product.tags.join(" &bull; ") + "</p>",
      "      </div>",
      "    </div>",
      "    <p>" + product.shortDescription + "</p>",
      "  </div>",
      '  <div class="product-meta">',
      '    <div class="product-price-stack"><strong>' + formatCurrency(product.price) + '</strong><span class="price-note">' + getProductAccent(product) + "</span></div>",
      '    <div class="product-actions">',
      '      <button class="btn btn-primary" type="button" data-add-to-cart="' + product.id + '">Add to Cart</button>',
      '      <a class="btn btn-ghost" href="product.html?id=' + product.id + '">View Details</a>',
      "    </div>",
      "  </div>",
      "</article>"
    ].join("");
  }

  function buildCategoryCards() {
    const mount = document.querySelector("#category-grid");
    if (!mount) {
      return;
    }

    mount.innerHTML = categoryCards
      .map(function (category, index) {
        return [
          '<a class="category-card glass-card" href="shop.html?category=' + category.id + '" data-reveal style="--delay:' + index + ';">',
          '  <span class="card-index">' + String(index + 1).padStart(2, "0") + "</span>",
          "  <h3>" + category.name + "</h3>",
          "  <p>" + category.copy + "</p>",
          "</a>"
        ].join("");
      })
      .join("");
  }

  function buildFeaturedProducts() {
    const mount = document.querySelector("#featured-products");
    if (!mount) {
      return;
    }

    mount.innerHTML = products
      .filter(function (product) {
        return product.featured;
      })
      .slice(0, 4)
      .map(createProductCard)
      .join("");
  }

  function syncCatalogStats() {
    const productCount = products.length;

    document.querySelectorAll("[data-product-count]").forEach(function (node) {
      node.textContent = String(productCount) + "+";
    });

    document.querySelectorAll("[data-product-count-label]").forEach(function (node) {
      node.textContent = productCount + " curated watches";
    });
  }

  function buildOfferCards() {
    const mount = document.querySelector("#offer-grid");
    if (!mount) {
      return;
    }

    mount.innerHTML = offers
      .map(function (offer, index) {
        return [
          '<article class="offer-card glass-card" data-reveal style="--delay:' + index + ';">',
          '  <span class="offer-badge">' + offer.tag + "</span>",
          "  <h3>" + offer.title + "</h3>",
          "  <p>" + offer.text + "</p>",
          '  <button class="btn btn-outline" type="button" data-offer-trigger="' + offer.id + '">Explore Offer</button>',
          "</article>"
        ].join("");
      })
      .join("");

    buildOfferModal();
    attachOfferEvents();
  }

  function buildOfferModal() {
    if (document.querySelector("#offer-modal")) {
      return;
    }

    const modal = document.createElement("div");
    modal.className = "offer-modal-shell";
    modal.id = "offer-modal";
    modal.setAttribute("aria-hidden", "true");
    modal.innerHTML = [
      '<div class="offer-modal-backdrop" data-offer-close></div>',
      '<div class="offer-modal-panel glass-card" role="dialog" aria-modal="true" aria-labelledby="offer-modal-title">',
      '  <button class="offer-modal-close" type="button" aria-label="Close offer details" data-offer-close>&times;</button>',
      '  <span class="offer-badge" id="offer-modal-tag">Offer</span>',
      '  <h3 id="offer-modal-title">Offer title</h3>',
      '  <p class="offer-modal-accent" id="offer-modal-accent">Offer highlight</p>',
      '  <p class="offer-modal-copy" id="offer-modal-copy">Offer description</p>',
      '  <div class="offer-modal-benefits" id="offer-modal-benefits"></div>',
      '  <div class="offer-modal-actions">',
      '    <a class="btn btn-primary" id="offer-modal-cta" href="shop.html">Open Collection</a>',
      '    <button class="btn btn-ghost" type="button" data-offer-close>Close</button>',
      "  </div>",
      "</div>"
    ].join("");

    document.body.appendChild(modal);
  }

  function attachOfferEvents() {
    document.querySelectorAll("[data-offer-trigger]").forEach(function (button) {
      if (button.dataset.offerReady === "true") {
        return;
      }

      button.dataset.offerReady = "true";
      button.addEventListener("click", function () {
        const offerId = button.getAttribute("data-offer-trigger");
        openOfferModal(offerId);
      });
    });

    const modal = document.querySelector("#offer-modal");
    if (!modal || modal.dataset.modalReady === "true") {
      return;
    }

    modal.dataset.modalReady = "true";
    modal.querySelectorAll("[data-offer-close]").forEach(function (node) {
      node.addEventListener("click", closeOfferModal);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeOfferModal();
      }
    });
  }

  function openOfferModal(offerId) {
    const offer = offers.find(function (item) {
      return item.id === offerId;
    });
    const modal = document.querySelector("#offer-modal");

    if (!offer || !modal) {
      return;
    }

    const tagNode = document.querySelector("#offer-modal-tag");
    const titleNode = document.querySelector("#offer-modal-title");
    const accentNode = document.querySelector("#offer-modal-accent");
    const copyNode = document.querySelector("#offer-modal-copy");
    const benefitsNode = document.querySelector("#offer-modal-benefits");
    const ctaNode = document.querySelector("#offer-modal-cta");

    tagNode.textContent = offer.tag;
    titleNode.textContent = offer.title;
    accentNode.textContent = offer.accent;
    copyNode.textContent = offer.details;
    benefitsNode.innerHTML = offer.benefits
      .map(function (benefit) {
        return '<div class="offer-benefit-item">' + benefit + "</div>";
      })
      .join("");
    ctaNode.textContent = offer.ctaLabel;
    ctaNode.href = "shop.html?category=" + encodeURIComponent(offer.category);

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeOfferModal() {
    const modal = document.querySelector("#offer-modal");
    if (!modal) {
      return;
    }

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function buildTestimonials() {
    const mount = document.querySelector("#testimonial-grid");
    if (!mount) {
      return;
    }

    mount.innerHTML = testimonials
      .map(function (testimonial, index) {
        return [
          '<article class="testimonial-card glass-card" data-reveal style="--delay:' + index + ';">',
          '  <span class="quote-mark">"</span>',
          "  <p>" + testimonial.quote + "</p>",
          '  <div class="testimonial-meta">',
          "    <strong>" + testimonial.name + "</strong>",
          "    <span>" + testimonial.title + "</span>",
          "  </div>",
          "</article>"
        ].join("");
      })
      .join("");
  }

  function buildShopPage() {
    if (document.body.dataset.page !== "shop") {
      return;
    }

    const searchInput = document.querySelector("#search-filter");
    const categorySelect = document.querySelector("#category-filter");
    const priceSelect = document.querySelector("#price-filter");
    const sortSelect = document.querySelector("#sort-filter");
    const clearButton = document.querySelector("#clear-filters");
    const productGrid = document.querySelector("#shop-product-grid");
    const resultsText = document.querySelector("#shop-results");
    const activeFiltersText = document.querySelector("#shop-active-filters");
    const quickPriceButtons = document.querySelectorAll("[data-quick-price]");

    if (!searchInput || !categorySelect || !priceSelect || !sortSelect || !clearButton || !productGrid || !resultsText || !activeFiltersText) {
      return;
    }

    const searchParams = new URLSearchParams(window.location.search);
    const queryCategory = searchParams.get("category");
    if (queryCategory) {
      categorySelect.value = queryCategory;
    }

    function getPriceRangeLabel(priceValue) {
      const priceLabels = {
        all: "all prices",
        "under-5000": "under ₹5,000",
        "5000-10000": "₹5,000 to ₹10,000",
        "10000-50000": "₹10,000 to ₹50,000",
        "50000-200000": "₹50,000 to ₹2,00,000",
        "200000-plus": "above ₹2,00,000"
      };

      return priceLabels[priceValue] || "all prices";
    }

    function syncQuickPriceButtons() {
      quickPriceButtons.forEach(function (button) {
        button.classList.toggle("is-active", button.dataset.quickPrice === priceSelect.value);
      });
    }

    function getFilteredProducts() {
      const searchValue = searchInput.value.trim().toLowerCase();

      return products.filter(function (product) {
        const categoryValue = categorySelect.value;
        const priceValue = priceSelect.value;
        const searchTerms = [
          product.name,
          product.category,
          product.shortDescription,
          product.description
        ]
          .concat(product.tags)
          .join(" ")
          .toLowerCase();

        const categoryMatch = categoryValue === "all" || product.category === categoryValue;
        let priceMatch = true;
        const searchMatch = !searchValue || searchTerms.indexOf(searchValue) !== -1;

        if (priceValue === "under-5000") {
          priceMatch = product.price < 5000;
        } else if (priceValue === "5000-10000") {
          priceMatch = product.price >= 5000 && product.price <= 10000;
        } else if (priceValue === "10000-50000") {
          priceMatch = product.price > 10000 && product.price <= 50000;
        } else if (priceValue === "50000-200000") {
          priceMatch = product.price > 50000 && product.price <= 200000;
        } else if (priceValue === "200000-plus") {
          priceMatch = product.price > 200000;
        }

        return categoryMatch && priceMatch && searchMatch;
      })
      .sort(function (left, right) {
        if (sortSelect.value === "price-low") {
          return left.price - right.price;
        }

        if (sortSelect.value === "price-high") {
          return right.price - left.price;
        }

        if (sortSelect.value === "rating-high") {
          return getProductRatingData(right).average - getProductRatingData(left).average || right.price - left.price;
        }

        if (sortSelect.value === "name-az") {
          return left.name.localeCompare(right.name);
        }

        return Number(right.featured) - Number(left.featured) || getProductRatingData(right).average - getProductRatingData(left).average;
      });
    }

    function getActiveFilterSummary(filteredProducts) {
      const summary = [];

      if (searchInput.value.trim()) {
        summary.push('search "' + searchInput.value.trim() + '"');
      }

      if (categorySelect.value !== "all") {
        summary.push(getCategoryName(categorySelect.value));
      }

      if (priceSelect.value !== "all") {
        summary.push(getPriceRangeLabel(priceSelect.value));
      }

      if (sortSelect.value !== "featured") {
        summary.push("sorted by " + sortSelect.options[sortSelect.selectedIndex].text.toLowerCase());
      }

      if (!summary.length) {
        return "Showing the full collection across every category and budget.";
      }

      return "Filtered by " + summary.join(" • ") + ".";
    }

    function renderProducts() {
      const filteredProducts = getFilteredProducts();
      if (!filteredProducts.length) {
        productGrid.innerHTML = [
          '<div class="empty-state glass-card">',
          "  <h2>No watches match these filters</h2>",
          "  <p>Try widening the price range, switching the category, or searching for another brand.</p>",
          '  <button class="btn btn-primary" type="button" id="empty-reset-filters">Show All Watches</button>',
          "</div>"
        ].join("");
      } else {
        productGrid.innerHTML = filteredProducts
          .map(function (product, index) {
            return createProductCard(product, index);
          })
          .join("");
      }

      resultsText.textContent =
        filteredProducts.length +
        " watches for " +
        (categorySelect.value === "all" ? "all collections" : getCategoryName(categorySelect.value).toLowerCase());
      activeFiltersText.textContent = getActiveFilterSummary(filteredProducts);
      syncQuickPriceButtons();
      initTiltCards(productGrid);
      observeRevealElements(productGrid);

      const emptyResetButton = document.querySelector("#empty-reset-filters");
      if (emptyResetButton) {
        emptyResetButton.addEventListener("click", resetFilters);
      }
    }

    function resetFilters() {
      searchInput.value = "";
      categorySelect.value = "all";
      priceSelect.value = "all";
      sortSelect.value = "featured";
      renderProducts();
    }

    searchInput.addEventListener("input", renderProducts);
    categorySelect.addEventListener("change", renderProducts);
    priceSelect.addEventListener("change", renderProducts);
    sortSelect.addEventListener("change", renderProducts);
    clearButton.addEventListener("click", resetFilters);
    quickPriceButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        priceSelect.value = button.dataset.quickPrice || "all";
        renderProducts();
      });
    });
    renderProducts();
  }

  function buildProductPage() {
    if (document.body.dataset.page !== "product") {
      return;
    }

    const detailMount = document.querySelector("#product-detail");
    const relatedMount = document.querySelector("#related-products");
    const searchParams = new URLSearchParams(window.location.search);
    const productId = searchParams.get("id");
    const product = getProductById(productId);

    if (!detailMount || !relatedMount) {
      return;
    }

    if (!product) {
      detailMount.innerHTML = [
        '<div class="empty-state glass-card">',
        '  <span class="card-index">00</span>',
        "  <h2>Watch not found</h2>",
        "  <p>The selected product is unavailable. Explore the full collection instead.</p>",
        '  <a class="btn btn-primary" href="shop.html">Browse All Watches</a>',
        "</div>"
      ].join("");
      relatedMount.innerHTML = "";
      return;
    }

    const ratingData = getProductRatingData(product);
    const currentUser = getCurrentUser();

    document.title = product.name + " | Patel Times Watch Store";

    detailMount.innerHTML = [
      '<div class="product-layout">',
      '  <div class="product-gallery glass-card" data-reveal>',
      '    <img src="' + product.image + '" alt="' + product.name + '">',
      "  </div>",
      '  <article class="product-info glass-card" data-reveal style="--delay:1;">',
      '    <div class="product-title">',
      '      <span class="eyebrow">' + getCategoryName(product.category) + "</span>",
      "      <h1>" + product.name + "</h1>",
      "    </div>",
      '    <div class="price-stack"><strong>' + formatCurrency(product.price) + "</strong><span>" + product.tags.join(" &bull; ") + "</span></div>",
      "    <p>" + product.description + "</p>",
      '    <div class="chip-row">' +
      product.tags
        .map(function (tag) {
          return '<span class="chip">' + tag + "</span>";
        })
        .join("") +
      "</div>",
      '    <div class="product-actions">',
      '      <button class="btn btn-primary" type="button" data-add-to-cart="' + product.id + '">Add to Cart</button>',
      '      <a class="btn btn-outline" href="cart.html">Go to Cart</a>',
      "    </div>",
      "  </article>",
      "</div>",
      '<div class="grid-2" style="margin-top: 1.5rem;">',
      '  <article class="detail-card glass-card" data-reveal>',
      "    <h3>Description</h3>",
      "    <p>" + product.description + "</p>",
      "    <ul>",
      "      <li>" + product.shortDescription + "</li>",
      "      <li>" + product.offerText + "</li>",
      "      <li>Premium packaging and care guidance included with every order.</li>",
      "    </ul>",
      "  </article>",
      '  <article class="detail-card glass-card" data-reveal style="--delay:1;">',
      "    <h3>Specifications</h3>",
      '    <div class="spec-list">' + createSpecs(product.specs) + "</div>",
      "  </article>",
      "</div>",
      '<div class="review-layout" style="margin-top: 1.5rem;">',
      '  <article class="review-panel glass-card" data-reveal>',
      '    <div class="review-summary-head">',
      "      <div>",
      '        <span class="eyebrow">Customer Reviews</span>',
      "        <h3>What buyers are saying</h3>",
      "      </div>",
      '      <div class="review-score-badge">',
      '        <strong>' + ratingData.average.toFixed(1) + "</strong>",
      '        <span class="stars">' + createStars(ratingData.average) + "</span>",
      '        <small>' + ratingData.count + " reviews</small>",
      "      </div>",
      "    </div>",
      '    <div class="review-list" id="review-list">' + createReviewCards(product) + "</div>",
      "  </article>",
      '  <article class="review-form-card glass-card" data-reveal style="--delay:1;">',
      '    <span class="eyebrow">Write A Review</span>',
      "    <h3>Share your experience</h3>",
      '    <form class="review-form" id="review-form">',
      '      <label><span>Your name</span><input type="text" name="name" maxlength="50" value="' + escapeHTML(currentUser && currentUser.name ? currentUser.name : "") + '" placeholder="Enter your name" required></label>',
      '      <div class="star-rating-group"><span class="star-rating-label">Rating</span><div class="star-picker" id="review-star-picker" role="radiogroup" aria-label="Select a star rating"><button type="button" class="star-btn" data-value="1" aria-label="1 star">&#9733;</button><button type="button" class="star-btn" data-value="2" aria-label="2 stars">&#9733;</button><button type="button" class="star-btn" data-value="3" aria-label="3 stars">&#9733;</button><button type="button" class="star-btn" data-value="4" aria-label="4 stars">&#9733;</button><button type="button" class="star-btn" data-value="5" aria-label="5 stars">&#9733;</button></div><span class="star-rating-hint" id="star-hint">Click a star to rate</span><input type="hidden" name="rating" id="review-rating-input"></div>',
      '      <label><span>Your review</span><textarea name="comment" rows="5" maxlength="300" placeholder="Tell other buyers what stood out about the watch." required></textarea></label>',
      '      <button class="btn btn-primary" type="submit">Submit Review</button>',
      '      <p class="inline-hint">Your rating will update this watch instantly after submission.</p>',
      "    </form>",
      "  </article>",
      "</div>"
    ].join("");

    // Wire up the custom star picker
    const starPicker = document.querySelector("#review-star-picker");
    const ratingInput = document.querySelector("#review-rating-input");
    const starHint = document.querySelector("#star-hint");
    const starLabels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];
    if (starPicker) {
      const starBtns = starPicker.querySelectorAll(".star-btn");
      function highlightStars(value) {
        starBtns.forEach(function(btn) {
          btn.classList.toggle("active", Number(btn.dataset.value) <= value);
        });
      }
      starBtns.forEach(function(btn) {
        btn.addEventListener("mouseover", function() { highlightStars(Number(btn.dataset.value)); });
        btn.addEventListener("mouseleave", function() { highlightStars(Number(ratingInput.value) || 0); });
        btn.addEventListener("click", function() {
          const val = Number(btn.dataset.value);
          ratingInput.value = val;
          highlightStars(val);
          if (starHint) starHint.textContent = val + " star" + (val > 1 ? "s" : "") + " — " + starLabels[val];
        });
      });
    }

    const reviewForm = document.querySelector("#review-form");
    if (reviewForm) {
      reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(reviewForm);
        const name = String(formData.get("name") || "").trim();
        const rating = Number(formData.get("rating"));
        const comment = String(formData.get("comment") || "").trim();

        if (!name || !rating || !comment) {
          showToast("Please complete your name, rating, and review.", "warning");
          return;
        }

        const reviewStore = getReviewStore();
        const productReviews = Array.isArray(reviewStore[product.id]) ? reviewStore[product.id] : [];
        productReviews.unshift({
          id: product.id + "-" + Date.now(),
          name: name,
          rating: rating,
          comment: comment,
          date: new Date().toISOString(),
          seeded: false
        });
        reviewStore[product.id] = productReviews;
        writeReviewStore(reviewStore);
        showToast("Review submitted successfully.", "success");
        buildProductPage();
      });
    }

    relatedMount.innerHTML = products
      .filter(function (item) {
        return item.category === product.category && item.id !== product.id;
      })
      .slice(0, 3)
      .map(function (item, index) {
        return createProductCard(item, index);
      })
      .join("");

    observeRevealElements(detailMount);
    observeRevealElements(relatedMount);
    initTiltCards(relatedMount);
  }

  function createReviewCards(product) {
    const reviews = getProductRatingData(product).reviews;

    if (!reviews.length) {
      return '<div class="empty-state glass-card"><h2>No reviews yet</h2><p>Be the first buyer to share your experience with this watch.</p></div>';
    }

    return reviews
      .map(function (review) {
        return [
          '<article class="review-card">',
          '  <div class="review-card-top">',
          "    <div>",
          "      <strong>" + escapeHTML(review.name) + "</strong>",
          '      <p>' + formatReviewDate(review.date) + (review.seeded ? " &bull; Verified style review" : "") + "</p>",
          "    </div>",
          '    <div class="rating review-rating"><span class="stars">' + createStars(review.rating) + "</span><span>" + review.rating.toFixed(1) + "</span></div>",
          "  </div>",
          "  <p>" + escapeHTML(review.comment) + "</p>",
          "</article>"
        ].join("");
      })
      .join("");
  }

  function createSpecs(specs) {
    return Object.keys(specs)
      .map(function (key) {
        return [
          '<div class="spec-item">',
          "  <span>" + key + "</span>",
          "  <strong>" + specs[key] + "</strong>",
          "</div>"
        ].join("");
      })
      .join("");
  }

  function initContactForm() {
    if (document.body.dataset.page !== "contact") {
      return;
    }

    const form = document.querySelector("#contact-form");
    const messageBox = document.querySelector("#contact-message");
    if (!form || !messageBox) {
      return;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      form.reset();
      messageBox.innerHTML =
        '<div class="inline-message success">Thank you for contacting Patel Times. Our concierge team will respond shortly.</div>';
      showToast("Message sent successfully", "success");
    });
  }

  function initRevealObserver() {
    observeRevealElements(document);
  }

  let revealObserver;

  function observeRevealElements(root) {
    const elements = root.querySelectorAll ? root.querySelectorAll("[data-reveal]") : [];
    if (!elements.length) {
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.16
        }
      );
    }

    elements.forEach(function (element) {
      revealObserver.observe(element);
    });
  }

  function initTiltCards(scope) {
    const cards = (scope || document).querySelectorAll(".tilt-card");
    cards.forEach(function (card) {
      if (card.dataset.tiltReady === "true") {
        return;
      }

      card.dataset.tiltReady = "true";
      card.addEventListener("mousemove", function (event) {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = (0.5 - y / rect.height) * 10;
        card.style.transform = "perspective(1100px) rotateX(" + rotateX.toFixed(2) + "deg) rotateY(" + rotateY.toFixed(2) + "deg) translateY(-6px)";
      });

      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  function initPageReadyState() {
    window.requestAnimationFrame(function () {
      document.body.classList.add("page-ready");
    });
  }

  function initAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (event) {
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#") {
          return;
        }

        const target = document.querySelector(targetId);
        if (!target) {
          return;
        }

        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  }

  function initHomePage() {
    if (document.body.dataset.page !== "home") {
      return;
    }

    buildCategoryCards();
    buildFeaturedProducts();
    buildOfferCards();
    buildTestimonials();
  }

  function bootstrap() {
    buildHeader();
    buildFooter();
    syncCatalogStats();
    attachShellEvents();
    setCurrentYear();
    updateCartBadge();
    initHomePage();
    buildShopPage();
    buildProductPage();
    initContactForm();
    initRevealObserver();
    initTiltCards(document);
    initAnchors();
    initPageReadyState();
  }

  document.addEventListener("DOMContentLoaded", bootstrap);

  window.ChronoLuxStore = {
    STORAGE_KEYS: STORAGE_KEYS,
    products: products,
    readJSON: readJSON,
    writeJSON: writeJSON,
    formatCurrency: formatCurrency,
    getProductById: getProductById,
    getCartItems: getCartItems,
    setCartItems: setCartItems,
    getOrders: getOrders,
    setOrders: setOrders,
    getUsers: getUsers,
    setUsers: setUsers,
    getCurrentUser: getCurrentUser,
    showToast: showToast,
    updateCartBadge: updateCartBadge,
    observeRevealElements: observeRevealElements,
    initTiltCards: initTiltCards,
    getCategoryName: getCategoryName
  };
})();
