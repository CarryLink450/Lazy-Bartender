// Replace business name, logo path, phone, WhatsApp number, and Instagram link here.
// Put the real logo in public/logo.png, or change `logo` below to the final file name.
export const brand = {
  name: 'Lazy Bartender',
  logo: '/logo.png',
  fallbackLogoText: 'Lazy Bartender',
  phone: '+961 78 897 528',
  whatsappNumber: '96178897528',
  instagramUrl:
    'https://www.instagram.com/lazybartender.lb?igsh=MWxvZWd3Nm0xb2xkMw%3D%3D&utm_source=qr',
  location: 'Lebanon',
  whatsappMessage:
    'Hello, I want to order cocktails. Can you send me the available menu and prices?',
};

export const navLinks = [
  ['Home', 'home'],
  ['Cocktails', 'cocktails'],
  ['About', 'about'],
  ['Contact', 'contact'],
];

export const availableSizes = ['500 ml', '750 ml'];

export const cocktails = [
  {
    name: 'Margarita',
    desc: 'Sunshine in a bottle.',
    about:
      'Sunshine in a bottle. Our Margarita brings the bright zing of fresh citrus and the smooth kick of real agave tequila. No squeezing, no measuring. Just crack, pour, and fiesta.',
    flavor: 'Citrus / Agave / Bright',
    ingredients: ['Tequila blanco', 'Tequila gold', 'Cointreau', 'Lemon juice'],
    prices: { '500 ml': '15$', '750 ml': '20$' },
    image: '/cocktails/margarita-bottle-transparent.png',
    productPhoto: true,
    accent: 'from-citrus to-lime',
  },
  {
    name: "Bee's Knees",
    desc: 'Real honey from real bees.',
    about:
      "Real honey from real bees. Mixed with gin and fresh lemon. That's it. Bright, botanical, and just sweet enough to keep you reaching for another sip. Just crack, pour and enjoy.",
    flavor: 'Honey / Citrus / Botanical',
    ingredients: ['Gin', 'Honey syrup', 'Lemon juice'],
    prices: { '500 ml': '13$', '750 ml': '16$' },
    image: '/cocktails/bees-knees-bottle-transparent.png',
    productPhoto: true,
    accent: 'from-gold to-citrus',
  },
  {
    name: 'Basil Smash',
    desc: 'Fresh, zesty and full of life.',
    about:
      "Fresh, zesty and full of life. This one's crisp without being sharp, herbal without being bitter, and refreshing without trying too hard. Just open, pour and unwind.",
    flavor: 'Herbal / Zesty / Fresh',
    ingredients: ['Gin', 'Sugar syrup', 'Lemon juice', 'Basil leaves'],
    prices: { '500 ml': '13$', '750 ml': '16$' },
    image: '/cocktails/basil-smash-bottle-transparent.png',
    productPhoto: true,
    accent: 'from-lime to-emerald-400',
  },
  {
    name: 'Negroni',
    desc: "Some cocktails are sweet. This one's not.",
    about:
      "Some cocktails are sweet. This one's not. Bitter, botanical and built for slow sipping. The Negroni rewards patience with layers that unfold with every sip. Pour and take your time.",
    flavor: 'Bitter / Botanical / Bold',
    ingredients: ['Gin', 'Campari', 'Sweet vermouth'],
    prices: { '500 ml': '14$', '750 ml': '17$' },
    image: '/cocktails/negroni-bottle-transparent.png',
    productPhoto: true,
    accent: 'from-berry to-citrus',
  },
  {
    name: 'Whiskey Sour',
    desc: 'Tart and warm with a smooth finish.',
    about:
      'Tart and warm with a smooth finish. Nothing complicated, just a classic done with a twist.',
    flavor: 'Tart / Warm / Smooth',
    ingredients: ['Rye whiskey', 'Lemon juice', 'Sugar syrup', 'Aromatic bitters'],
    prices: { '500 ml': '16$', '750 ml': '22$' },
    image: '/cocktails/whiskey-sour-bottle-transparent.png',
    productPhoto: true,
    accent: 'from-gold to-amber-700',
  },
  {
    name: 'Carajillo',
    desc: 'Brewed coffee meets reposado tequila and a touch of Spanish sweetness.',
    about:
      'Brewed coffee meets reposado tequila and a touch of Spanish sweetness. Rich, smooth and gone before you know it.',
    flavor: 'Coffee / Rich / Smooth',
    ingredients: ['Tequila reposado', 'Licor 43', 'Coffee concentrate'],
    prices: { '500 ml': 'Ask for price', '750 ml': 'Ask for price' },
    image: '/cocktails/carajillo-bottle-transparent.png',
    productPhoto: true,
    accent: 'from-amber-700 to-gold',
  },
  {
    name: 'Cosmopolitan',
    desc: 'The Cosmo got its reputation for a reason.',
    about:
      'The Cosmo got its reputation for a reason. Ours lives up to it. Bright, refined and finished with a citrus glow.',
    flavor: 'Bright / Refined / Citrus',
    ingredients: ['Vodka', 'Cointreau', 'Cranberry juice', 'Lemon juice'],
    prices: { '500 ml': '12$', '750 ml': '15$' },
    image: '/cocktails/cosmopolitan-bottle-transparent.png',
    productPhoto: true,
    accent: 'from-berry to-purple',
  },
  {
    name: 'Bahamas',
    desc: 'Warm, nutty and banana kissed.',
    about: 'Warm, nutty and banana kissed. A signature that earned its spot.',
    flavor: 'Warm / Nutty / Banana',
    ingredients: ['Rye whiskey', 'Amaretto Disaronno', 'Banana liqueur', 'Lemon juice', 'Demerara syrup'],
    prices: { '500 ml': '15$', '750 ml': '20$' },
    image: '/cocktails/bahamas-bottle-transparent.png',
    productPhoto: true,
    accent: 'from-citrus to-gold',
  },
];
