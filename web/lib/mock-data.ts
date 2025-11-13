// Mock data for Marketplace and Leaderboard pages
// This will be replaced with real API data in production

export interface Capper {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
  type: "prover" | "quant";
  sport: string[];
  bio: string;
  stats: {
    totalBets: number;
    winRate: number;
    roi: number;
    clv: number; // Closing Line Value percentage
    streak: number; // Current win/loss streak (positive = wins, negative = losses)
    unitProfit: number;
  };
  pricing: {
    weekly: number;
    monthly: number;
    annual: number;
  };
  subscribers: number;
  joinedDate: string;
  lastActive: string;
  featured: boolean;
  badges: string[];
}

export const mockCappers: Capper[] = [
  {
    id: "1",
    name: "Sharp Analytics",
    username: "@sharpanalytics",
    avatar: "/images/vinta.png",
    verified: true,
    type: "quant",
    sport: ["NFL", "NBA", "MLB"],
    bio: "Algorithmic betting model with 3+ years of verified positive CLV. Specializing in player props and totals.",
    stats: {
      totalBets: 1247,
      winRate: 56.8,
      roi: 8.4,
      clv: 2.3,
      streak: 7,
      unitProfit: 104.7,
    },
    pricing: {
      weekly: 49,
      monthly: 149,
      annual: 1299,
    },
    subscribers: 342,
    joinedDate: "2022-03-15",
    lastActive: "2 hours ago",
    featured: true,
    badges: ["Top 10", "Verified Quant", "Positive CLV"],
  },
  {
    id: "2",
    name: "The Line Hunter",
    username: "@linehunter",
    avatar: "/images/vinta.png",
    verified: true,
    type: "prover",
    sport: ["NBA", "NHL"],
    bio: "Professional bettor since 2019. Focus on live betting and line movement exploitation. Transparent record.",
    stats: {
      totalBets: 892,
      winRate: 54.2,
      roi: 6.1,
      clv: 1.8,
      streak: -2,
      unitProfit: 54.4,
    },
    pricing: {
      weekly: 39,
      monthly: 119,
      annual: 999,
    },
    subscribers: 218,
    joinedDate: "2022-07-22",
    lastActive: "1 hour ago",
    featured: true,
    badges: ["Verified Prover", "Live Betting Expert"],
  },
  {
    id: "3",
    name: "PropBet King",
    username: "@propbetking",
    avatar: "/images/vinta.png",
    verified: true,
    type: "prover",
    sport: ["NFL", "NBA"],
    bio: "Player props specialist. 500+ verified bets with consistent positive ROI. Focus on NBA and NFL player performance.",
    stats: {
      totalBets: 634,
      winRate: 58.1,
      roi: 9.7,
      clv: 2.1,
      streak: 12,
      unitProfit: 61.5,
    },
    pricing: {
      weekly: 59,
      monthly: 179,
      annual: 1599,
    },
    subscribers: 456,
    joinedDate: "2023-01-10",
    lastActive: "30 minutes ago",
    featured: true,
    badges: ["Top 5", "Props Expert", "Hot Streak"],
  },
  {
    id: "4",
    name: "Value Finder Pro",
    username: "@valuefinderpro",
    avatar: "/images/vinta.png",
    verified: true,
    type: "quant",
    sport: ["MLB", "NHL", "Soccer"],
    bio: "Statistical model focusing on undervalued lines. Specializes in MLB and NHL totals with proven edge.",
    stats: {
      totalBets: 1089,
      winRate: 53.4,
      roi: 5.2,
      clv: 1.5,
      streak: 4,
      unitProfit: 56.6,
    },
    pricing: {
      weekly: 44,
      monthly: 134,
      annual: 1199,
    },
    subscribers: 187,
    joinedDate: "2022-09-05",
    lastActive: "5 hours ago",
    featured: false,
    badges: ["Verified Quant", "MLB Expert"],
  },
  {
    id: "5",
    name: "The Underdog",
    username: "@theunderdog",
    avatar: "/images/vinta.png",
    verified: true,
    type: "prover",
    sport: ["NFL", "College Football"],
    bio: "Contrarian bettor specializing in underdogs and line value. 700+ verified bets with strong CLV.",
    stats: {
      totalBets: 743,
      winRate: 52.1,
      roi: 4.8,
      clv: 2.7,
      streak: -1,
      unitProfit: 35.7,
    },
    pricing: {
      weekly: 34,
      monthly: 99,
      annual: 849,
    },
    subscribers: 156,
    joinedDate: "2023-03-18",
    lastActive: "1 day ago",
    featured: false,
    badges: ["Verified Prover", "Underdog Specialist"],
  },
  {
    id: "6",
    name: "Totals Master",
    username: "@totalsmaster",
    avatar: "/images/vinta.png",
    verified: true,
    type: "quant",
    sport: ["NBA", "NFL"],
    bio: "Over/Under specialist using weather data, pace metrics, and historical trends. Consistent positive results.",
    stats: {
      totalBets: 956,
      winRate: 55.7,
      roi: 7.3,
      clv: 1.9,
      streak: 8,
      unitProfit: 69.8,
    },
    pricing: {
      weekly: 54,
      monthly: 164,
      annual: 1449,
    },
    subscribers: 289,
    joinedDate: "2022-11-12",
    lastActive: "3 hours ago",
    featured: false,
    badges: ["Verified Quant", "Totals Expert", "Positive CLV"],
  },
  {
    id: "7",
    name: "Spread Surgeon",
    username: "@spreadsurgeon",
    avatar: "/images/vinta.png",
    verified: true,
    type: "prover",
    sport: ["NFL", "College Basketball"],
    bio: "Point spread specialist with surgical precision. Focus on key numbers and line shopping strategies.",
    stats: {
      totalBets: 812,
      winRate: 54.9,
      roi: 6.8,
      clv: 2.0,
      streak: 5,
      unitProfit: 55.2,
    },
    pricing: {
      weekly: 47,
      monthly: 144,
      annual: 1249,
    },
    subscribers: 203,
    joinedDate: "2023-02-08",
    lastActive: "4 hours ago",
    featured: false,
    badges: ["Verified Prover", "Spread Expert"],
  },
  {
    id: "8",
    name: "Parlay Breaker",
    username: "@parlaybreaker",
    avatar: "/images/vinta.png",
    verified: true,
    type: "prover",
    sport: ["NBA", "NFL", "MLB"],
    bio: "Single bet focus with occasional correlated parlays. Proven track record of beating closing lines consistently.",
    stats: {
      totalBets: 567,
      winRate: 57.3,
      roi: 8.9,
      clv: 2.4,
      streak: 9,
      unitProfit: 50.5,
    },
    pricing: {
      weekly: 52,
      monthly: 159,
      annual: 1399,
    },
    subscribers: 267,
    joinedDate: "2023-04-25",
    lastActive: "1 hour ago",
    featured: false,
    badges: ["Verified Prover", "High Win Rate", "Hot Streak"],
  },
];

export interface LeaderboardEntry {
  rank: number;
  previousRank: number;
  capper: Capper;
  monthlyStats: {
    bets: number;
    winRate: number;
    roi: number;
    unitProfit: number;
  };
}

export const mockLeaderboard: LeaderboardEntry[] = mockCappers
  .map((capper, index) => ({
    rank: index + 1,
    previousRank: index + 1 + Math.floor(Math.random() * 5) - 2, // Random previous rank for movement
    capper,
    monthlyStats: {
      bets: Math.floor(Math.random() * 50) + 30,
      winRate: capper.stats.winRate + (Math.random() * 4 - 2), // Slight variation
      roi: capper.stats.roi + (Math.random() * 2 - 1),
      unitProfit: Math.floor(Math.random() * 20) + 10,
    },
  }))
  .sort((a, b) => b.monthlyStats.roi - a.monthlyStats.roi)
  .map((entry, index) => ({
    ...entry,
    rank: index + 1,
  }));

export const sportOptions = [
  "All Sports",
  "NFL",
  "NBA",
  "MLB",
  "NHL",
  "Soccer",
  "College Football",
  "College Basketball",
];

export const typeOptions = ["All Types", "Provers", "Quants"];

export const sortOptions = [
  { value: "roi", label: "Highest ROI" },
  { value: "winRate", label: "Win Rate" },
  { value: "clv", label: "Best CLV" },
  { value: "subscribers", label: "Most Popular" },
  { value: "recent", label: "Recently Active" },
];

// -- Communities for Marketplace --
export interface Community {
  id: string;
  name: string;
  avatar: string; // Logo or cover img
  description: string;
  memberCount: number;
  verifiedCapperCount: number;
  sports: string[];
  isPrivate: boolean;
  featured: boolean;
  // Aggregated stats from all Sharps in community
  avgStats?: {
    avgCLV: number; // Average closing line value
    avgWinRate: number; // Average win rate %
    avgROI: number; // Average return on investment %
    monthlyRecord: string; // e.g. "156-89" combined monthly record
  };
}

export const mockCommunities: Community[] = [
  {
    id: '1',
    name: 'Sharp Side Collective',
    avatar: '/images/people-cheering.png',
    description: 'Model-driven syndicate. Invite-only, CLV-focused discussions.',
    memberCount: 188,
    verifiedCapperCount: 8,
    sports: ['NFL', 'NBA', 'NHL'],
    isPrivate: true,
    featured: true,
    avgStats: {
      avgCLV: 2.8,
      avgWinRate: 58.2,
      avgROI: 9.1,
      monthlyRecord: '89-54',
    },
  },
  {
    id: '2',
    name: 'ValueVerse',
    avatar: '/images/stock-basketball.png',
    description: 'Public community of value bettors, high-volume NBA/NFL daily picks, all records verified.',
    memberCount: 390,
    verifiedCapperCount: 15,
    sports: ['NBA', 'NFL'],
    isPrivate: false,
    featured: true,
    avgStats: {
      avgCLV: 2.1,
      avgWinRate: 56.4,
      avgROI: 7.8,
      monthlyRecord: '234-181',
    },
  },
  {
    id: '3',
    name: 'Prop Shop',
    avatar: '/images/slot-machine.png',
    description: 'All props, all the time. Transparent stats, active Discord integration.',
    memberCount: 142,
    verifiedCapperCount: 4,
    sports: ['NBA', 'NFL', 'MLB'],
    isPrivate: false,
    featured: false,
    avgStats: {
      avgCLV: 1.6,
      avgWinRate: 54.8,
      avgROI: 6.2,
      monthlyRecord: '67-55',
    },
  },
  {
    id: '4',
    name: 'Dog Pound',
    avatar: '/images/guy-winning-bet.png',
    description: 'Seasonal, underdog-only picks, home of sharpest NFL contrarians.',
    memberCount: 84,
    verifiedCapperCount: 2,
    sports: ['NFL'],
    isPrivate: true,
    featured: false,
    avgStats: {
      avgCLV: 3.2,
      avgWinRate: 52.1,
      avgROI: 11.4,
      monthlyRecord: '42-39',
    },
  },
  {
    id: '5',
    name: 'Totals Lab',
    avatar: '/images/hockey-player2.png',
    description: 'Totals enthusiasts of all sports. Algorithm and eye test both welcome.',
    memberCount: 156,
    verifiedCapperCount: 6,
    sports: ['NBA', 'MLB', 'NHL', 'Soccer'],
    isPrivate: false,
    featured: true,
    avgStats: {
      avgCLV: 1.9,
      avgWinRate: 55.7,
      avgROI: 7.1,
      monthlyRecord: '98-78',
    },
  },
  {
    id: '6',
    name: 'College Cash Crew',
    avatar: '/images/people-in-bar.png',
    description: 'Obsessive breakdowns for NCAAF/NCAAB—stats nerds and fans alike.',
    memberCount: 67,
    verifiedCapperCount: 3,
    sports: ['College Football', 'College Basketball'],
    isPrivate: false,
    featured: false,
    avgStats: {
      avgCLV: 1.4,
      avgWinRate: 53.9,
      avgROI: 5.8,
      monthlyRecord: '51-44',
    },
  },
  {
    id: '7',
    name: 'World Football Alliance',
    avatar: '/images/hockey-player.png',
    description: 'Global football chat and picks. Weekly leaderboards for verified soccer quants.',
    memberCount: 512,
    verifiedCapperCount: 10,
    sports: ['Soccer'],
    isPrivate: false,
    featured: false,
    avgStats: {
      avgCLV: 2.3,
      avgWinRate: 57.1,
      avgROI: 8.3,
      monthlyRecord: '156-117',
    },
  },
  {
    id: '8',
    name: 'Proven Parlays',
    avatar: '/images/people-cheering.png',
    description: "Don't get tricked by fake parlay artists. Only proven long-term winners allowed.",
    memberCount: 91,
    verifiedCapperCount: 1,
    sports: ['NBA', 'NFL', 'MLB'],
    isPrivate: true,
    featured: false,
    avgStats: {
      avgCLV: 1.2,
      avgWinRate: 54.2,
      avgROI: 6.4,
      monthlyRecord: '28-24',
    },
  },
];

