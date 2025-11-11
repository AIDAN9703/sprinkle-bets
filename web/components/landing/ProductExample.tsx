"use client";

import Image from "next/image";
import {
  Lock,
  Clock,
  Users,
  TrendingUp,
  TrendingDown,
  BadgeCheck,
} from "lucide-react";

// Sample pick data with realistic monthly records
const samplePicks = [
  {
    username: "Marcus_TestUser",
    avatar: "/test-user1.png",
    monthlyRecord: "12-5",
    units: "+8.5",
    isPositive: true,
    sport: "NBA",
    game: "Lakers @ Warriors",
    odds: "-150",
    timeLeft: "2h 15m",
    posted: "2h ago",
    unlocks: 47,
    price: "$10.00",
  },
  {
    username: "Alex_DemoAccount",
    avatar: "/test-user5.png",
    monthlyRecord: "8-3",
    units: "+5.2",
    isPositive: true,
    sport: "NFL",
    game: "Chiefs vs Bills",
    odds: "+125",
    timeLeft: "5h 30m",
    posted: "1h ago",
    unlocks: 89,
    price: "$15.00",
  },
  {
    username: "Sarah_TestProfile",
    avatar: "/test-user3.png",
    monthlyRecord: "10-4",
    units: "+6.8",
    isPositive: true,
    sport: "MLB",
    game: "Yankees @ Red Sox",
    odds: "-110",
    timeLeft: "3h 45m",
    posted: "30m ago",
    unlocks: 23,
    price: "$8.00",
  },
  {
    username: "David_SampleUser",
    avatar: "/test-user4.png",
    monthlyRecord: "7-4",
    units: "+3.1",
    isPositive: true,
    sport: "NBA",
    game: "Celtics @ Heat",
    odds: "-175",
    timeLeft: "1h 20m",
    posted: "45m ago",
    unlocks: 34,
    price: "$12.00",
  },
  {
    username: "Jordan_ExampleUser",
    avatar: "/test-user5.png",
    monthlyRecord: "9-6",
    units: "+2.4",
    isPositive: true,
    sport: "NFL",
    game: "Cowboys vs Eagles",
    odds: "+180",
    timeLeft: "8h 10m",
    posted: "15m ago",
    unlocks: 67,
    price: "$20.00",
  },
  {
    username: "Marcus_TestUser",
    avatar: "/test-user1.png",
    monthlyRecord: "11-7",
    units: "+4.3",
    isPositive: true,
    sport: "NBA",
    game: "Nuggets @ Suns",
    odds: "-120",
    timeLeft: "4h 30m",
    posted: "1h 30m ago",
    unlocks: 52,
    price: "$11.00",
  },
];

function PickCard({ pick }: { pick: (typeof samplePicks)[0] }) {
  return (
    <div className="bg-background rounded-lg sm:rounded-xl shadow-lg overflow-hidden border border-border mb-2 sm:mb-3">
      {/* Header */}
      <div className="p-2.5 sm:p-3 border-b border-border">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-primary/30 shrink-0">
            <Image
              src={pick.avatar}
              alt={pick.username}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1 sm:gap-1.5 mb-0.5">
              <span className="font-bold text-foreground text-[11px] sm:text-xs truncate">
                {pick.username}
              </span>
              <div className="relative shrink-0">
                <div className="relative w-3 h-3 sm:w-3.5 sm:h-3.5">
                  <BadgeCheck
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary fill-primary absolute inset-0"
                    strokeWidth={2.5}
                  />
                  <svg
                    className="absolute inset-0 w-1.5 h-1.5 sm:w-2 sm:h-2 m-auto"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-foreground"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px]">
              <span className="text-muted-foreground font-medium">
                {pick.monthlyRecord} This Month
              </span>
              <span className="text-muted-foreground">•</span>
              <span
                className={`font-bold flex items-center gap-0.5 ${pick.isPositive ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"}`}
              >
                {pick.isPositive ? (
                  <TrendingUp className="h-2 w-2 sm:h-2.5 sm:w-2.5" />
                ) : (
                  <TrendingDown className="h-2 w-2 sm:h-2.5 sm:w-2.5" />
                )}
                {pick.units}u
              </span>
            </div>
          </div>
          <div className="px-1.5 sm:px-2 py-0.5 bg-primary/10 rounded text-[9px] sm:text-[10px] font-bold text-primary shrink-0 border border-primary/20">
            {pick.sport}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Visible Preview Info */}
        <div className="p-2.5 sm:p-3 border-b border-border">
          <div className="flex items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[10px] text-muted-foreground mb-1 sm:mb-1.5">
            <Clock className="h-2 w-2 sm:h-2.5 sm:w-2.5" />
            <span>{pick.posted}</span>
            <span>•</span>
            <div className="flex items-center gap-0.5 sm:gap-1">
              <Users className="h-2 w-2 sm:h-2.5 sm:w-2.5" />
              <span className="font-semibold">{pick.unlocks}</span>
              <span>unlocks</span>
            </div>
          </div>

          <div>
            <div className="text-xs sm:text-sm font-bold text-foreground mb-0.5">
              {pick.game}
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">Odds:</span>
              <span className="font-bold text-primary">{pick.odds}</span>
              <span>•</span>
              <span>
                Starts in{" "}
                <span className="font-semibold text-foreground">
                  {pick.timeLeft}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Blurred Content Area */}
        <div className="relative h-20 sm:h-24 overflow-hidden">
          {/* Content with blur filter applied */}
          <div className="p-2.5 sm:p-3 blur-sm">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="h-2 sm:h-2.5 bg-foreground/80 rounded w-3/4"></div>
              <div className="h-2 sm:h-2.5 bg-foreground/80 rounded w-full"></div>
              <div className="h-2 sm:h-2.5 bg-foreground/80 rounded w-5/6"></div>
              <div className="mt-2 sm:mt-3 p-2 sm:p-2.5 bg-primary/40 rounded-lg border-2 border-primary/60">
                <div className="text-xs sm:text-sm font-bold text-primary mb-1 sm:mb-1.5">
                  {pick.game.split(" ")[0]} ML - Analysis
                </div>
                <div className="text-[10px] sm:text-xs text-foreground/90 space-y-0.5 sm:space-y-1">
                  <div className="h-1 sm:h-1.5 bg-foreground/70 rounded w-full"></div>
                  <div className="h-1 sm:h-1.5 bg-foreground/70 rounded w-4/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Lock overlay - no blur, just semi-transparent background */}
          <div className="absolute inset-0 flex items-center justify-center bg-background/75 dark:bg-background/80">
            <div className="text-center px-2 sm:px-3">
              <Lock className="h-6 w-6 sm:h-8 sm:w-8 text-primary/80 mx-auto mb-1 sm:mb-1.5" />
              <div className="text-[10px] sm:text-xs font-semibold text-foreground/90 mb-0.5">
                Locked Pick
              </div>
              <div className="text-[9px] sm:text-[10px] text-muted-foreground">
                Unlock -{" "}
                <span className="font-bold text-primary">{pick.price}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="px-2.5 sm:px-3 py-1.5 sm:py-2 bg-muted/50 border-t border-border">
          <p className="text-[8px] sm:text-[9px] text-muted-foreground leading-tight">
            Funds will be awarded to{" "}
            <span className="font-semibold text-foreground">
              {pick.username}
            </span>{" "}
            if this wager settles as a win. Voids or losses will unlock funds
            back to your account.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProductExample() {
  // Duplicate picks for seamless loop
  const duplicatedPicks = [...samplePicks, ...samplePicks];

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Feed Container */}
      <div className="bg-background rounded-2xl shadow-2xl overflow-hidden border border-border h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-linear-to-b from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-linear-to-t from-background to-transparent z-20 pointer-events-none" />

        {/* Scrolling Feed */}
        <div className="h-full overflow-hidden">
          <div className="animate-feed-scroll">
            <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
              {duplicatedPicks.map((pick, index) => (
                <PickCard key={index} pick={pick} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Callout Text */}
      <div className="mt-4 sm:mt-6 text-center px-4">
        <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
          <span className="font-semibold text-foreground">
            Never pay for losing advice.
          </span>{" "}
          Unlock picks to see them. If they lose, your money is automatically
          refunded.
        </p>
      </div>
    </div>
  );
}
