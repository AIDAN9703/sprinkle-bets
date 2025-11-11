"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  Shield,
  Crown,
  Medal,
  Award,
  TrendingDown,
} from "lucide-react";
import { mockCommunities, type Community } from "@/lib/mock-data";

type RankedCommunity = {
  rank: number;
  previousRank: number;
  community: Community;
  score: number;
};

export default function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState<"monthly" | "allTime">("monthly");

  const ranked: RankedCommunity[] = mockCommunities
    .map((community, index) => ({
      community,
      score: community.verifiedCapperCount * 7 + community.memberCount * 0.03,
      previousRank: index + 1 + Math.floor(Math.random() * 5) - 2,
      rank: 0,
    }))
    .sort((a, b) => b.score - a.score)
    .map((entry, i) => ({ ...entry, rank: i + 1 }));

  const topThree = ranked.slice(0, 3);
  const restOfLeaderboard = ranked.slice(3);

  return (
    <main className="min-h-screen relative">
      <section className="relative section pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="section-container max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Leaderboard
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Top-performing communities ranked by Sharp performance and win
              rates.
            </p>
          </div>

          {/* Timeframe Toggle */}
          <div className="flex gap-2 mb-12">
            <button
              onClick={() => setTimeframe("monthly")}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                timeframe === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
              }`}
            >
              This Month
            </button>
            <button
              onClick={() => setTimeframe("allTime")}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                timeframe === "allTime"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
              }`}
            >
              All Time
            </button>
          </div>

          {/* Top 3 Podium */}
          {topThree.length > 0 && (
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {topThree[1] && (
                <div className="md:mt-12">
                  <PodiumCard entry={topThree[1]} position={2} />
                </div>
              )}
              {topThree[0] && (
                <div>
                  <PodiumCard entry={topThree[0]} position={1} />
                </div>
              )}
              {topThree[2] && (
                <div className="md:mt-12">
                  <PodiumCard entry={topThree[2]} position={3} />
                </div>
              )}
            </div>
          )}

          {/* Rest of Leaderboard */}
          <div className="space-y-3">
            {restOfLeaderboard.map((entry) => (
              <LeaderboardRow key={entry.community.id} entry={entry} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function PodiumCard({
  entry,
  position,
}: {
  entry: RankedCommunity;
  position: number;
}) {
  const { community } = entry;

  const config = {
    1: {
      icon: Crown,
      label: "Champion",
      border: "border-primary/40",
      bg: "bg-primary/5",
    },
    2: {
      icon: Medal,
      label: "Runner Up",
      border: "border-muted-foreground/40",
      bg: "bg-muted/20",
    },
    3: {
      icon: Award,
      label: "Third Place",
      border: "border-border",
      bg: "bg-card/50",
    },
  }[position];

  const Icon = config?.icon;

  return (
    <div
      className={`p-6 rounded-xl border-2 ${config?.border} ${config?.bg} text-center`}
    >
      <div className="inline-flex p-3 bg-background/50 rounded-full mb-4">
        {Icon && <Icon className="h-8 w-8 text-primary" />}
      </div>
      <div className="text-xs font-semibold text-muted-foreground mb-4">
        {config?.label}
      </div>
      <div className="flex justify-center mb-4">
        <Image
          src={community.avatar}
          alt={community.name}
          width={64}
          height={64}
          className="rounded-xl object-cover aspect-square border border-border"
        />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">
        {community.name}
      </h3>
      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <Users className="h-3 w-3" /> {community.memberCount}
        </span>
        <span className="flex items-center gap-1">
          <Shield className="h-3 w-3" /> {community.verifiedCapperCount}
        </span>
      </div>
    </div>
  );
}

function LeaderboardRow({ entry }: { entry: RankedCommunity }) {
  const { rank, previousRank, community } = entry;
  const rankChange = previousRank - rank;

  return (
    <Link
      href={`/marketplace/${community.id}`}
      className="block p-4 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all group"
    >
      <div className="flex items-center gap-6">
        {/* Rank */}
        <div className="w-12 text-center">
          <div className="text-2xl font-bold text-foreground">#{rank}</div>
          {rankChange !== 0 && (
            <div className="flex items-center justify-center gap-1 text-xs mt-1">
              {rankChange > 0 ? (
                <span className="text-green-600 dark:text-green-500 flex items-center gap-0.5">
                  <TrendingUp className="h-3 w-3" /> {rankChange}
                </span>
              ) : (
                <span className="text-red-600 dark:text-red-500 flex items-center gap-0.5">
                  <TrendingDown className="h-3 w-3" /> {Math.abs(rankChange)}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Community Info */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <Image
            src={community.avatar}
            alt={community.name}
            width={48}
            height={48}
            className="rounded-lg object-cover aspect-square border border-border"
          />
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-foreground truncate group-hover:text-primary transition-colors">
              {community.name}
            </h3>
            <p className="text-sm text-muted-foreground truncate">
              {community.description}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="hidden md:flex items-center gap-8">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Members</p>
            <p className="text-lg font-semibold text-foreground">
              {community.memberCount}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Sharps</p>
            <p className="text-lg font-semibold text-primary">
              {community.verifiedCapperCount}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
