"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Users, Shield, Lock, Crown, Medal, Award, Star } from "lucide-react";
import { mockCommunities, type Community } from "@/lib/mock-data";

type RankedCommunity = {
  rank: number;
  previousRank: number;
  community: Community;
  score: number;
};

export default function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState<"monthly" | "allTime">("monthly");

  // Simple derived score: verified capper strength (70%) + normalized member size (30%)
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
    <main className="min-h-screen pt-16">
      {/* Header */}
      <section className="section">
        <div className="section-container max-w-5xl">
          <div className="text-center mb-6">
            <h1 className="heading">Top Communities</h1>
            <p className="subheading">
              Ranked by verified capper strength and community size.
            </p>
          </div>
          {/* Timeframe Toggle (placeholder for future real data) */}
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setTimeframe("monthly")}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                timeframe === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-card/80 border border-border"
              }`}
            >
              This Month
            </button>
            <button
              onClick={() => setTimeframe("allTime")}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                timeframe === "allTime"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-card/80 border border-border"
              }`}
            >
              All Time
            </button>
          </div>
        </div>
      </section>

      {/* Top 3 Podium */}
      <section className="section">
        <div className="section-container max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* 2nd Place */}
            {topThree[1] && (
              <div className="md:order-1 md:mt-12">
                <PodiumCard entry={topThree[1]} position={2} />
              </div>
            )}

            {/* 1st Place */}
            {topThree[0] && (
              <div className="md:order-2">
                <PodiumCard entry={topThree[0]} position={1} />
              </div>
            )}

            {/* 3rd Place */}
            {topThree[2] && (
              <div className="md:order-3 md:mt-12">
                <PodiumCard entry={topThree[2]} position={3} />
              </div>
            )}
          </div>

          {/* Rest of Leaderboard */}
          <div className="space-y-4">
            {restOfLeaderboard.map((entry) => (
              <LeaderboardRow key={entry.community.id} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      {/* How Rankings Work */}
      <section className="section bg-card/50">
        <div className="section-container max-w-5xl">
          <h2 className="heading text-center mb-8">How Rankings Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 bg-primary/10 dark:bg-primary/20 rounded-2xl mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Verified Weight: 70%
              </h3>
              <p className="text-muted-foreground">
                More verified cappers → higher rank.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-primary/10 dark:bg-primary/20 rounded-2xl mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Size Weight: 30%
              </h3>
              <p className="text-muted-foreground">
                Member count adds signal (lightly normalized).
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-primary/10 dark:bg-primary/20 rounded-2xl mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Curation
              </h3>
              <p className="text-muted-foreground">
                Featured communities are vetted by staff.
              </p>
            </div>
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

  const positionConfig = {
    1: {
      icon: Crown,
      color: "text-primary",
      bgColor: "bg-primary/10 dark:bg-primary/20",
      borderColor: "border-primary/30",
      shadowColor: "shadow-primary/20",
      label: "Champion",
    },
    2: {
      icon: Medal,
      color: "text-accent",
      bgColor: "bg-accent/10 dark:bg-accent/20",
      borderColor: "border-accent/30",
      shadowColor: "shadow-accent/20",
      label: "Runner Up",
    },
    3: {
      icon: Award,
      color: "text-muted-foreground",
      bgColor: "bg-muted/50",
      borderColor: "border-border",
      shadowColor: "shadow-muted/20",
      label: "Third Place",
    },
  } as const;

  const config = positionConfig[position as keyof typeof positionConfig];
  const Icon = config.icon;

  return (
    <Card
      className={`bg-card border-2 ${config.borderColor} shadow-xl ${config.shadowColor} hover:shadow-2xl transition-all duration-300`}
    >
      <CardContent className="pt-6 text-center">
        <div className={`inline-flex p-4 ${config.bgColor} rounded-full mb-4`}>
          <Icon className={`h-12 w-12 ${config.color}`} />
        </div>
        <Badge
          className={`mb-4 ${config.bgColor} ${config.color} ${config.borderColor}`}
        >
          {config.label}
        </Badge>
        <div className="flex justify-center mb-4">
          <Image
            src={community.avatar}
            alt={community.name}
            width={80}
            height={80}
            className="rounded-2xl object-cover aspect-square border border-border"
          />
        </div>
        <h3 className="text-2xl font-bold mb-1 text-foreground">
          {community.name}
        </h3>
        <div className="text-sm text-muted-foreground mb-2 flex items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1">
            <Users className="h-3 w-3" /> {community.memberCount} members
          </span>
          <span className="inline-flex items-center gap-1">
            <Shield className="h-3 w-3" /> {community.verifiedCapperCount}{" "}
            verified
          </span>
          {community.isPrivate && <Lock className="h-3 w-3" />}
        </div>
      </CardContent>
    </Card>
  );
}

function LeaderboardRow({ entry }: { entry: RankedCommunity }) {
  const { rank, previousRank, community } = entry;
  const rankChange = previousRank - rank;
  const isUp = rankChange > 0;
  const isDown = rankChange < 0;
  const isStable = rankChange === 0;

  return (
    <Card className="bg-card hover:shadow-lg transition-all duration-300 border border-border">
      <CardContent className="py-4">
        <div className="flex items-center gap-4">
          {/* Rank */}
          <div className="flex items-center gap-3 min-w-[80px]">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">#{rank}</div>
              <div className="flex items-center justify-center gap-1 text-xs">
                {isUp && <span className="text-accent">+{rankChange}</span>}
                {isDown && (
                  <span className="text-destructive">{rankChange}</span>
                )}
                {isStable && <span className="text-muted-foreground">0</span>}
              </div>
            </div>
          </div>

          {/* Community Info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Image
              src={community.avatar}
              alt={community.name}
              width={48}
              height={48}
              className="rounded-2xl object-cover aspect-square border border-border"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-foreground truncate">
                  {community.name}
                </h3>
                {community.isPrivate && (
                  <Lock className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {community.description}
              </p>
            </div>
          </div>

          {/* Stats - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Members</p>
              <p className="text-lg font-bold text-foreground">
                {community.memberCount}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Verified</p>
              <p className="text-lg font-bold text-primary">
                {community.verifiedCapperCount}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Access</p>
              <p className="text-lg font-bold text-foreground">
                {community.isPrivate ? "Invite" : "Public"}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="md:hidden mt-4 pt-4 border-t border-border">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Members</p>
              <p className="text-sm font-bold text-foreground">
                {community.memberCount}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Verified</p>
              <p className="text-sm font-bold text-primary">
                {community.verifiedCapperCount}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Access</p>
              <p className="text-sm font-bold text-foreground">
                {community.isPrivate ? "Invite" : "Public"}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
