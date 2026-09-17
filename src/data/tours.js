import destinations from './destinations';

const tours = [
  {
    name: 'Tour Name 1',
    destinations: [destinations[0], destinations[1], destinations[2]],
    days: '5 days',
    description:
      'Experience a carefully planned journey through several memorable destinations, with time to explore local highlights, enjoy the scenery, and make the most of every day of the trip.',
    price: '$000',
    link: '/',
  },
  {
    name: 'Tour Name 2',
    destinations: [destinations[1], destinations[2], destinations[3]],
    days: '7 days',
    description:
      'Discover a varied travel route filled with cultural sights, relaxing moments, and opportunities to experience each destination at a comfortable pace with everything organized in one tour.',
    price: '$000',
    link: '/',
  },
  {
    name: 'Tour Name 3',
    destinations: [destinations[2], destinations[3], destinations[4]],
    days: '4 days',
    description:
      'Travel across a collection of beautiful destinations and enjoy a balanced itinerary that combines exploration, unforgettable views, and enough time to create lasting memories.',
    price: '$000',
    link: '/',
  },
  {
    name: 'Tour Name 4',
    destinations: [destinations[4], destinations[0], destinations[1]],
    days: '6 days',
    description:
      'Set out on an enjoyable multi-destination adventure designed for travelers who want to see more, experience something new, and return home with stories worth sharing.',
    price: '$000',
    link: '/',
  },
];

export default tours;
