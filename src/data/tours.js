import destinations from './destinations';

const tours = [
  {
    name: 'Tour Name 1',
    slug: 'tour-name-1',
    destinations: [destinations[0], destinations[1], destinations[2]],
    itinerary: [
      { day: 'Day 1', activity: 'Leave from meeting point' },
      { day: 'Day 1', destination: destinations[0] },
      { day: 'Day 2', activity: 'Having lunch' },
      { day: 'Day 3', destination: destinations[1] },
    ],
    days: '5 days',
    description:
      'Experience a carefully planned journey through several memorable destinations, with time to explore local highlights, enjoy the scenery, and make the most of every day of the trip.',
    price: '$000',
    link: '/tours/tour-name-1',
  },
  {
    name: 'Tour Name 2',
    slug: 'tour-name-2',
    destinations: [destinations[1], destinations[2], destinations[3]],
    itinerary: [
      { day: 'Day 1', activity: 'Leave from meeting point' },
      { day: 'Day 1', destination: destinations[1] },
      { day: 'Day 2', activity: 'Having lunch' },
      { day: 'Day 3', destination: destinations[2] },
    ],
    days: '7 days',
    description:
      'Discover a varied travel route filled with cultural sights, relaxing moments, and opportunities to experience each destination at a comfortable pace with everything organized in one tour.',
    price: '$000',
    link: '/tours/tour-name-2',
  },
  {
    name: 'Tour Name 3',
    slug: 'tour-name-3',
    destinations: [destinations[2], destinations[3], destinations[4]],
    itinerary: [
      { day: 'Day 1', activity: 'Leave from meeting point' },
      { day: 'Day 1', destination: destinations[2] },
      { day: 'Day 2', activity: 'Having lunch' },
      { day: 'Day 3', destination: destinations[3] },
    ],
    days: '4 days',
    description:
      'Travel across a collection of beautiful destinations and enjoy a balanced itinerary that combines exploration, unforgettable views, and enough time to create lasting memories.',
    price: '$000',
    link: '/tours/tour-name-3',
  },
  {
    name: 'Tour Name 4',
    slug: 'tour-name-4',
    destinations: [destinations[4], destinations[0], destinations[1]],
    itinerary: [
      { day: 'Day 1', activity: 'Leave from meeting point' },
      { day: 'Day 1', destination: destinations[4] },
      { day: 'Day 2', activity: 'Having lunch' },
      { day: 'Day 3', destination: destinations[0] },
    ],
    days: '6 days',
    description:
      'Set out on an enjoyable multi-destination adventure designed for travelers who want to see more, experience something new, and return home with stories worth sharing.',
    price: '$000',
    link: '/tours/tour-name-4',
  },
];

export default tours;
