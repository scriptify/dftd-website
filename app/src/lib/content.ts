// Event data - all content centralized here
export const EVENT = {
  name: 'Dancing For The Dogs',
  shortName: 'DFTD',
  // Part of the "Himbeereis zum Frühstück" party series
  series: 'Himbeereis zum Frühstück',
  edition: 'Teil 4',
  type: 'Halloween Disco Party',
  tagline: 'One night of disco. Every euro for the dogs.',
  // Saturday, October 31, 2026 — Montenegro is on CET (UTC+1) at the end of October
  date: new Date('2026-10-31T20:00:00+01:00'),
  dateLabel: 'Saturday, October 31, 2026',
  year: 2026,
  location: {
    venue: 'Safari Beach',
    area: 'Velika Plaza',
    city: 'Ulcinj',
    country: 'Montenegro',
    mapUrl: 'https://maps.app.goo.gl/f2C1rZFdEjEw2veH9?g_st=ac',
    coordinates: { lat: 41.9267, lng: 19.2134 },
  },
  // What the night is about — kept deliberately simple. It's just a party now.
  highlights: [
    {
      emoji: '🪩',
      title: 'Disco Party',
      desc: 'One DJ, one dancefloor, one good reason. Dance the night away right on the beach.',
    },
    {
      emoji: '🎃',
      title: 'Halloween Costume Contest',
      desc: 'It’s October 31st — come in costume! The best looks win prizes on the night.',
    },
    {
      emoji: '🎟️',
      title: 'Charity Raffle',
      desc: 'Grab a raffle ticket for the chance to win great prizes. 100% of the proceeds go to the dogs.',
    },
  ],
  dj: {
    name: 'DJ Mike',
    photo: '/images/event/dj_mike.jpeg',
    tagline: '47 — and still behind the decks 🔥',
    quote: 'I don’t play what I like — I play what makes YOU lose it.',
    bio: [
      'From his first beat in a small-town disco to tonight: a self-made DJ, raised on turntables, vinyl, and a pure instinct for the crowd. No presets. No playlists. Just vibes.',
      '50 people or 3,000, a wedding or a club — energy is everything, and reading the room is the whole game. When the first guest hits the dancefloor? Goosebumps. Every single time.',
    ],
    roots: ['90s Trance', 'House', 'Techno'],
    loves: ['Club Classics', '80s / 90s / 2000s', 'Eurodance'],
  },
  cause: {
    title: 'SOS Street Dog Project',
    short: '100% of all raffle proceeds go to the SOS Street Dog Project.',
    description:
      'The SOS Street Dog Project was founded in the USA in 2017 by Barbara and Andy Katz after they witnessed the suffering of street dogs while travelling through Albania and Montenegro. The Montenegro chapter was established in 2021. Today, around 300 dogs a year are spayed/neutered, vaccinated, and given the medical care they need — and many go on to find loving homes across the EU.',
    raisedLastTime: '5,500',
    currency: 'EUR',
    stats: [
      { value: '~300', label: 'Dogs helped / year' },
      { value: '2017', label: 'Founded (USA)' },
      { value: '2021', label: 'Montenegro chapter' },
    ],
  },
  social: {
    instagram: 'https://www.instagram.com/dftd_26/',
    facebook: 'https://www.facebook.com/profile.php?id=61580712515392',
    email: 'info@dancingforthedogs.me',
    website: 'https://dancingforthedogs.me',
  },
};

// Single-page navigation — anchors to sections on the home page
export const NAV_LINKS = [
  { href: '#party', label: 'The Party' },
  { href: '#dj', label: 'The DJ' },
  { href: '#cause', label: 'The Cause' },
  { href: '#location', label: 'Location' },
  { href: '#follow', label: 'Follow' },
];

export const DOG_IMAGES = [
  { src: '/images/dogs/IMG-20260325-WA0008.jpg', alt: 'Adopted street dog - happy ending' },
  { src: '/images/dogs/IMG-20260325-WA0010.jpg', alt: 'Happy golden retriever' },
  { src: '/images/dogs/IMG-20260325-WA0011.jpg', alt: 'Rescued dog finding a home' },
  { src: '/images/dogs/IMG-20260325-WA0013.jpg', alt: 'Rescued dog in the mountains' },
  { src: '/images/dogs/IMG-20260325-WA0014.jpg', alt: 'Rescued dog - success story' },
  { src: '/images/dogs/IMG-20260325-WA0015.jpg', alt: 'Street dog in Montenegro' },
  { src: '/images/dogs/IMG-20260325-WA0016.jpg', alt: 'Rescued puppy' },
  { src: '/images/dogs/IMG-20260325-WA0017.jpg', alt: 'Dog rescue success' },
];
