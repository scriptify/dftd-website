// Festival data - all content centralized here
export const FESTIVAL = {
  name: 'Dancing For The Dogs',
  shortName: 'DFTD',
  tagline: 'Dance for a cause. Every beat saves a life.',
  date: new Date('2026-06-13T16:00:00+02:00'),
  endDate: new Date('2026-06-14T06:00:00+02:00'),
  year: 2026,
  location: {
    venue: 'Safari Beach',
    area: 'Velika Plaza',
    city: 'Ulcinj',
    country: 'Montenegro',
    mapUrl: 'https://maps.app.goo.gl/f2C1rZFdEjEw2veH9?g_st=ac',
    coordinates: { lat: 41.9267, lng: 19.2134 },
  },
  times: {
    doors: '16:00',
    mainStageEnd: '04:00',
    secondStageEnd: '06:00',
    duration: '14 hours',
  },
  stages: [
    {
      name: 'Main Stage',
      genre: 'Techno',
      location: 'Beach',
      hours: '16:00 – 04:00',
      djCount: 6,
      setLength: '2 hours',
    },
    {
      name: 'Second Stage',
      genre: 'Disco → House / Tech-House / Melodic',
      location: 'Club Area',
      hours: '16:00 – 06:00',
      djCount: 7,
      setLength: '2 hours',
    },
  ],
  lineup: [
    // Placeholder DJs - to be announced gradually
    { name: 'TBA', stage: 'Main Stage', time: '16:00 – 18:00', announced: false },
    { name: 'TBA', stage: 'Main Stage', time: '18:00 – 20:00', announced: false },
    { name: 'TBA', stage: 'Main Stage', time: '20:00 – 22:00', announced: false },
    { name: 'TBA', stage: 'Main Stage', time: '22:00 – 00:00', announced: false },
    { name: 'TBA', stage: 'Main Stage', time: '00:00 – 02:00', announced: false },
    { name: 'TBA', stage: 'Main Stage', time: '02:00 – 04:00', announced: false },
    { name: 'TBA', stage: 'Second Stage', time: '16:00 – 18:00', announced: false },
    { name: 'TBA', stage: 'Second Stage', time: '18:00 – 20:00', announced: false },
    { name: 'TBA', stage: 'Second Stage', time: '20:00 – 22:00', announced: false },
    { name: 'TBA', stage: 'Second Stage', time: '22:00 – 00:00', announced: false },
    { name: 'TBA', stage: 'Second Stage', time: '00:00 – 02:00', announced: false },
    { name: 'TBA', stage: 'Second Stage', time: '02:00 – 04:00', announced: false },
    { name: 'TBA', stage: 'Second Stage', time: '04:00 – 06:00', announced: false },
  ],
  social: {
    instagram: 'https://www.instagram.com/dftd_26/',
    facebook: 'https://www.facebook.com/profile.php?id=61580712515392',
    email: 'info@dancingforthedogs.me',
    website: 'https://dancingforthedogs.me',
  },
  cause: {
    title: 'SOS Street Dog Project',
    description: 'Founded in the USA in 2017 by Barbara and Andrew Katz. The Montenegro chapter was established in 2021, spaying/neutering, vaccinating, and treating approximately 300 dogs per year.',
    previousRaised: '5,500',
    currency: 'EUR',
  },
  partners: {
    danceForShelters: {
      name: 'Dance For Shelters',
      org: 'THE LOFT BELGIUM VZW',
      founders: 'Marek & Monika',
      description: 'A Belgium-based non-profit founded by DJs Marek and Monika, organizing charity music events for animal shelters across Europe.',
      website: 'https://www.danceforshelters.com/',
      instagram: 'https://www.instagram.com/dance_for_shelters/',
      facebook: 'https://www.facebook.com/profile.php?id=61564007346790&locale=pl_PL',
      email: 'danceforshelters@gmail.com',
    },
    euProject: {
      name: 'Čuvaj da te čuva',
      description: 'EU-funded animal rights campaign that DFTD is officially part of.',
      website: 'https://www.evropskakuca.me/cuvaj-da-te-cuva/',
    },
  },
  raffle: {
    description: 'Every ticket includes a chance to win amazing prizes in our charity raffle!',
    prizes: ['Electric Scooters', 'And more prizes from local sponsors'],
  },
};

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/lineup', label: 'Lineup' },
  { href: '/tickets', label: 'Tickets' },
  { href: '/info', label: 'Info' },
  { href: '/cause', label: 'The Cause' },
  { href: '/contact', label: 'Contact' },
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
  { src: '/images/event/beach-venue.jpg', alt: 'Dogs on Velika Plaza beach, Ulcinj' },
];
