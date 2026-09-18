import destinations from './destinations';

const tours = [
  {
    name: 'Fairy Meadows, Hunza & Skardu Expedition',
    slug: 'fairy-meadows-hunza-skardu-expedition',
    destinations: [destinations[3], destinations[1], destinations[2]],
    itinerary: [
      { day: 'Day 1', time: '2:00pm', activity: 'Leave from designated pickup location to', destination: destinations[3] },
      { day: 'Day 1', time: '6:15pm', activity: 'Reach Hotel' },
      { day: 'Day 1', time: '7:00pm', activity: 'Have dinner' },
      { day: 'Day 2', time: '9:00am', activity: 'Explore', destination: destinations[1] },
      { day: 'Day 3', time: '10:00am', activity: 'Visit', destination: destinations[2] },
    ],
    days: '8 days',
    description:
      'Travel the legendary Karakoram Highway to Fairy Meadows, the lush base camp beneath Nanga Parbat, then continue north into the orchards and mountain lakes of Hunza Valley before finishing among the dramatic high-altitude landscapes of Skardu.',
    price: 'PKR 89,000',
    link: '/tours/fairy-meadows-hunza-skardu-expedition',
  },
  {
    name: 'Neelum, Kaghan & Naran Valley Getaway',
    slug: 'neelum-kaghan-naran-getaway',
    destinations: [destinations[0], destinations[6], destinations[5]],
    itinerary: [
      { day: 'Day 1', time: '2:00pm', activity: 'Leave from designated pickup location to', destination: destinations[0] },
      { day: 'Day 1', time: '6:15pm', activity: 'Reach Hotel' },
      { day: 'Day 1', time: '7:00pm', activity: 'Have dinner' },
      { day: 'Day 2', time: '9:00am', activity: 'Explore', destination: destinations[6] },
      { day: 'Day 3', time: '10:00am', activity: 'Visit', destination: destinations[5] },
    ],
    days: '6 days',
    description:
      'Combine the pine forests and turquoise rivers of Neelum Valley with the alpine meadows of Kaghan Valley and the iconic Saif-ul-Malook Lake near Naran, for a classic northern getaway packed with waterfalls, lakes, and mountain views.',
    price: 'PKR 52,500',
    link: '/tours/neelum-kaghan-naran-getaway',
  },
  {
    name: 'Swat, Kumrat & Chitral Explorer',
    slug: 'swat-kumrat-chitral-explorer',
    destinations: [destinations[7], destinations[4], destinations[8]],
    itinerary: [
      { day: 'Day 1', time: '2:00pm', activity: 'Leave from designated pickup location to', destination: destinations[7] },
      { day: 'Day 1', time: '6:15pm', activity: 'Reach Hotel' },
      { day: 'Day 1', time: '7:00pm', activity: 'Have dinner' },
      { day: 'Day 2', time: '9:00am', activity: 'Explore', destination: destinations[4] },
      { day: 'Day 3', time: '10:00am', activity: 'Visit', destination: destinations[8] },
    ],
    days: '8 days',
    description:
      'Travel from the green slopes of Swat Valley through the untouched forests of Kumrat Valley to the remote Kalash villages and dramatic peaks of Chitral, crossing the Lowari Pass on one of Pakistan\'s most scenic overland routes.',
    price: 'PKR 68,000',
    link: '/tours/swat-kumrat-chitral-explorer',
  },
  {
    name: 'Grand Northern Pakistan Odyssey',
    slug: 'grand-northern-pakistan-odyssey',
    destinations: [destinations[5], destinations[3], destinations[1]],
    itinerary: [
      { day: 'Day 1', time: '2:00pm', activity: 'Leave from designated pickup location to', destination: destinations[5] },
      { day: 'Day 1', time: '6:15pm', activity: 'Reach Hotel' },
      { day: 'Day 1', time: '7:00pm', activity: 'Have dinner' },
      { day: 'Day 2', time: '9:00am', activity: 'Explore', destination: destinations[3] },
      { day: 'Day 3', time: '10:00am', activity: 'Visit', destination: destinations[1] },
    ],
    days: '10 days',
    description:
      "A comprehensive overland journey from the meadows of Naran, over the legendary Babusar Pass, to Fairy Meadows beneath Nanga Parbat and on to the orchards of Hunza Valley \u2014 the ultimate introduction to Pakistan's northern areas.",
    price: 'PKR 115,000',
    link: '/tours/grand-northern-pakistan-odyssey',
  },
];

export default tours;