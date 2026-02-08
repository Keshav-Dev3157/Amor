export interface DayContent {
  id: string;
  title: string;
  theme: string;
  date: string; // ISO format or YYYY-MM-DD
  path: string;
  emoji: string;
  color: string;
  previewMessage: string;
}

export const VALENTINE_DAYS: DayContent[] = [
  {
    id: 'rose-day',
    title: 'Rose Day',
    theme: 'First Love, Beginning',
    date: '2026-02-07',
    path: '/days/rose-day',
    emoji: '🌹',
    color: '#FF1744',
    previewMessage: "I'm sorry I missed this, but let's start our journey here..."
  },
  {
    id: 'propose-day',
    title: 'Propose Day',
    theme: 'Commitment',
    date: '2026-02-08',
    path: '/days/propose-day',
    emoji: '💍',
    color: '#C51162',
    previewMessage: "A promise of forever, starting today."
  },
  {
    id: 'chocolate-day',
    title: 'Chocolate Day',
    theme: 'Sweetness',
    date: '2026-02-09',
    path: '/days/chocolate-day',
    emoji: '🍫',
    color: '#5D4037',
    previewMessage: "You're sweeter than any treat in the world."
  },
  {
    id: 'teddy-day',
    title: 'Teddy Day',
    theme: 'Comfort',
    date: '2026-02-10',
    path: '/days/teddy-day',
    emoji: '🧸',
    color: '#8D6E63',
    previewMessage: "A virtual hug in the form of a soft bear."
  },
  {
    id: 'promise-day',
    title: 'Promise Day',
    theme: 'Trust',
    date: '2026-02-11',
    path: '/days/promise-day',
    emoji: '🤝',
    color: '#1976D2',
    previewMessage: "Building our future, one promise at a time."
  },
  {
    id: 'hug-day',
    title: 'Hug Day',
    theme: 'Warmth',
    date: '2026-02-12',
    path: '/days/hug-day',
    emoji: '🫂',
    color: '#FF6F00',
    previewMessage: "Missing your warmth, sending all my love."
  },
  {
    id: 'kiss-day',
    title: 'Kiss Day',
    theme: 'Romance',
    date: '2026-02-13',
    path: '/days/kiss-day',
    emoji: '💋',
    color: '#D50000',
    previewMessage: "Until I can kiss you again in person."
  }
];
