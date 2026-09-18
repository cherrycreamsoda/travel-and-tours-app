import destinations from './destinations';

const tours = [
  {
    name: 'Tour Name 1',
    slug: 'tour-name-1',
    destinations: [destinations[0], destinations[1], destinations[2]],
    itinerary: [
      { day: 'Day 1', time: '2:00pm', activity: 'Leave from designated pickup location to', destination: destinations[0] },
      { day: 'Day 1', time: '6:15pm', activity: 'Reach Hotel' },
      { day: 'Day 1', time: '7:00pm', activity: 'Have lunch' },
      { day: 'Day 2', time: '9:00am', activity: 'Explore', destination: destinations[1] },
      { day: 'Day 3', time: '10:00am', activity: 'Visit', destination: destinations[2] },
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
      { day: 'Day 1', time: '2:00pm', activity: 'Leave from designated pickup location to', destination: destinations[1] },
      { day: 'Day 1', time: '6:15pm', activity: 'Reach Hotel' },
      { day: 'Day 1', time: '7:00pm', activity: 'Have lunch' },
      { day: 'Day 2', time: '9:00am', activity: 'Explore', destination: destinations[2] },
      { day: 'Day 3', time: '10:00am', activity: 'Visit', destination: destinations[3] },
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
      { day: 'Day 1', time: '2:00pm', activity: 'Leave from designated pickup location to', destination: destinations[2] },
      { day: 'Day 1', time: '6:15pm', activity: 'Reach Hotel' },
      { day: 'Day 1', time: '7:00pm', activity: 'Have lunch' },
      { day: 'Day 2', time: '9:00am', activity: 'Explore', destination: destinations[3] },
      { day: 'Day 3', time: '10:00am', activity: 'Visit', destination: destinations[4] },
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
      { day: 'Day 1', time: '2:00pm', activity: 'Leave from designated pickup location to', destination: destinations[4] },
      { day: 'Day 1', time: '6:15pm', activity: 'Reach Hotel' },
      { day: 'Day 1', time: '7:00pm', activity: 'Have lunch' },
      { day: 'Day 2', time: '9:00am', activity: 'Explore', destination: destinations[0] },
      { day: 'Day 3', time: '10:00am', activity: 'Visit', destination: destinations[1] },
    ],
    days: '6 days',
    description:
      'Set out on an enjoyable multi-destination adventure designed for travelers who want to see more, experience something new, and return home with stories worth sharing.',
    price: '$000',
    link: '/tours/tour-name-4',
  },
];

export default tours;
