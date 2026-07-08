// Replace business name, logo path, phone, WhatsApp number, and Instagram link here.
// Put the real logo in public/logo.png, or change `logo` below to the final file name.
export const brand = {
  name: 'Lazy Bartender',
  logo: '/logo.png',
  fallbackLogoText: 'Lazy Bartender',
  phone: '+961 XX XXX XXX',
  whatsappNumber: '961XXXXXXXX',
  instagramUrl: 'https://instagram.com/lazybartender',
  location: 'Lebanon',
  whatsappMessage:
    'Hello, I want to order cocktails. Can you send me the available menu and prices?',
};

export const navLinks = [
  ['Home', 'home'],
  ['Cocktails', 'cocktails'],
  ['Services', 'services'],
  ['About', 'about'],
  ['Contact', 'contact'],
];

export const cocktails = [
  {
    name: 'Mojito',
    desc: 'Fresh mint, lime, crushed ice, and bright rum energy.',
    flavor: 'Minty / Citrus / Refreshing',
    ingredients: ['White rum', 'Fresh mint', 'Lime', 'Soda', 'Crushed ice'],
    size: 'Ready-to-drink bottle or cup',
    garnish: 'Mint bouquet and lime wheel',
    image: '/cocktails/mojito.svg',
    accent: 'from-lime to-ice',
  },
  {
    name: 'Margarita',
    desc: 'A crisp tequila classic with lime, salt, and a party-ready edge.',
    flavor: 'Tangy / Salty / Bold',
    ingredients: ['Tequila', 'Triple sec', 'Fresh lime', 'Salt rim'],
    size: 'Ready-to-drink bottle or cup',
    garnish: 'Salt rim and lime wedge',
    image: '/cocktails/margarita.svg',
    accent: 'from-citrus to-lime',
  },
  {
    name: 'Daiquiri',
    desc: 'Smooth rum, citrus, and fruit notes balanced for easy sipping.',
    flavor: 'Fruity / Citrus / Smooth',
    ingredients: ['White rum', 'Fresh lime', 'Fruit syrup', 'Ice'],
    size: 'Ready-to-drink bottle or cup',
    garnish: 'Seasonal fruit slice',
    image: '/cocktails/daiquiri.svg',
    accent: 'from-berry to-citrus',
  },
  {
    name: 'Pina Colada',
    desc: 'Creamy tropical pineapple and coconut for beach-party moods.',
    flavor: 'Tropical / Creamy / Sweet',
    ingredients: ['Rum', 'Pineapple', 'Coconut cream', 'Ice'],
    size: 'Ready-to-drink bottle or cup',
    garnish: 'Pineapple and cherry',
    image: '/cocktails/pina-colada.svg',
    accent: 'from-gold to-citrus',
  },
  {
    name: 'Blue Lagoon',
    desc: 'Electric blue citrus refreshment with a clean, icy finish.',
    flavor: 'Icy / Citrus / Vibrant',
    ingredients: ['Vodka', 'Blue curacao', 'Lemon citrus', 'Soda', 'Ice'],
    size: 'Ready-to-drink bottle or cup',
    garnish: 'Orange slice and cherry',
    image: '/cocktails/blue-lagoon.svg',
    accent: 'from-ice to-purple',
  },
  {
    name: 'Gin Basil',
    desc: 'A fresh herbal favorite with basil aroma and citrus lift.',
    flavor: 'Herbal / Fresh / Elegant',
    ingredients: ['Gin', 'Fresh basil', 'Lemon', 'Sugar syrup', 'Ice'],
    size: 'Ready-to-drink bottle or cup',
    garnish: 'Basil leaf and lemon peel',
    image: '/cocktails/gin-basil.svg',
    accent: 'from-lime to-emerald-400',
  },
  {
    name: 'Whiskey Sour',
    desc: 'A polished classic with whiskey warmth and silky citrus balance.',
    flavor: 'Warm / Citrus / Refined',
    ingredients: ['Whiskey', 'Fresh lemon', 'Sugar syrup', 'Foam option'],
    size: 'Ready-to-drink bottle or cup',
    garnish: 'Orange peel and cherry',
    image: '/cocktails/whiskey-sour.svg',
    accent: 'from-gold to-amber-700',
  },
  {
    name: 'Signature Cocktails',
    desc: 'House recipes and custom flavors prepared fresh for your order.',
    flavor: 'Custom / Premium / Memorable',
    ingredients: ['Custom spirit base', 'Fresh fruit', 'House syrups', 'Premium garnish'],
    size: 'Bottle, cup, or batch based on order',
    garnish: 'Matched to your chosen flavor',
    image: '/cocktails/signature.svg',
    accent: 'from-berry to-purple',
  },
];

export const services = [
  ['Online cocktail orders', 'Choose from the menu and place your order directly through WhatsApp.'],
  ['Ready-to-drink cocktails', 'Freshly prepared alcoholic cocktails packaged for pickup or delivery.'],
  ['Custom flavor requests', 'Adjust sweetness, fruit notes, garnish, and alcohol preference when available.'],
  ['Bottle and batch options', 'Order individual cocktails or larger ready-made quantities for your own plans.'],
  ['Fresh garnish and ingredients', 'Citrus, mint, fruit, syrups, and ice-forward recipes prepared with care.'],
  ['Fast WhatsApp confirmation', 'Ask for availability, prices, quantities, and delivery details before ordering.'],
  ['Lebanon pickup or delivery', 'Easy online ordering with service details confirmed based on your location.'],
];
