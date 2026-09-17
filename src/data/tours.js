import destinations from './destinations';

const tours = [
  {
    name: 'Tour Name 1',
    destinations: [destinations[0], destinations[1], destinations[2]],
    days: '5 days',
    description: 'Short description about the tour.',
    price: '$000',
    link: '/',
  },
  {
    name: 'Tour Name 2',
    destinations: [destinations[1], destinations[2], destinations[3]],
    days: '7 days',
    description: 'Short description about the tour.',
    price: '$000',
    link: '/',
  },
  {
    name: 'Tour Name 3',
    destinations: [destinations[2], destinations[3], destinations[4]],
    days: '4 days',
    description: 'Short description about the tour.',
    price: '$000',
    link: '/',
  },
  {
    name: 'Tour Name 4',
    destinations: [destinations[4], destinations[0], destinations[1]],
    days: '6 days',
    description: 'Short description about the tour.',
    price: '$000',
    link: '/',
  },
];

export default tours;
