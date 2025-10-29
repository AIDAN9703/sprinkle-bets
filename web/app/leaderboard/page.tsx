"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Trophy,
  TrendingUp,
  TrendingDown,
  Minus,
  Shield,
  BarChart3,
  Target,
  Crown,
  Medal,
  Award,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { mockLeaderboard, type LeaderboardEntry } from "@/lib/mock-data";

export default function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState<"monthly" | "allTime">("monthly");

  const topThree = mockLeaderboard.slice(0, 3);
  const restOfLeaderboard = mockLeaderboard.slice(3);

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-primary/5 dark:bg-primary/10">
        <div
          className="absolute top-10 right-20 w-96 h-96 hero-orb hero-orb-lime"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-10 left-20 w-80 h-80 hero-orb hero-orb-black"
          style={{ animationDelay: "3s" }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 dark:bg-primary/20 text-primary border-primary/30 px-4 py-2">
              <Trophy className="h-4 w-4 mr-2" />
              Top Performers
            </Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-foreground">
              Capper <span className="text-primary">Leaderboard</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              See who's crushing it this month. Rankings based on verified performance,
              ROI, and CLV.
            </p>
          </div>

          {/* Timeframe Toggle */}
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setTimeframe("monthly")}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                timeframe === "monthly"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-card/80 border border-border"
              }`}
            >
              This Month
            </button>
            <button
              onClick={() => setTimeframe("allTime")}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${
                timeframe === "allTime"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-card/80 border border-border"
              }`}
            >
              All Time
            </button>
          </div>
        </div>
      </section>

      {/* Top 3 Podium */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
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
              <LeaderboardRow key={entry.capper.id} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Explanation */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            How Rankings Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 bg-primary/10 dark:bg-primary/20 rounded-2xl mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">ROI Weight: 50%</h3>
              <p className="text-muted-foreground">
                Return on Investment is the primary ranking factor. Higher ROI = higher rank.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-accent/10 dark:bg-accent/20 rounded-2xl mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">CLV Weight: 30%</h3>
              <p className="text-muted-foreground">
                Closing Line Value shows true skill. Beating the closing line consistently matters.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 bg-primary/10 dark:bg-primary/20 rounded-2xl mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Volume Weight: 20%</h3>
              <p className="text-muted-foreground">
                Minimum 30 bets required. More verified bets = more reliable data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PodiumCard({ entry, position }: { entry: LeaderboardEntry; position: number }) {
  const { capper, monthlyStats } = entry;

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
  };

  const config = positionConfig[position as keyof typeof positionConfig];
  const Icon = config.icon;

  return (
    <Card
      className={`bg-card border-2 ${config.borderColor} shadow-xl ${config.shadowColor} hover:shadow-2xl transition-all duration-300`}
    >
      <CardContent className="pt-6 text-center">
        {/* Position Badge */}
        <div className={`inline-flex p-4 ${config.bgColor} rounded-full mb-4`}>
          <Icon className={`h-12 w-12 ${config.color}`} />
        </div>

        <Badge className={`mb-4 ${config.bgColor} ${config.color} ${config.borderColor}`}>
          {config.label}
        </Badge>

        {/* Capper Info */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Image
              src={capper.avatar}
              alt={capper.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            {capper.verified && (
              <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1.5">
                <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
              </div>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-1 text-foreground">{capper.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{capper.username}</p>

        {/* Type Badge */}
        <Badge
          className={
            capper.type === "quant"
              ? "bg-accent/20 text-accent border-accent/30 mb-4"
              : "bg-primary/20 text-primary border-primary/30 mb-4"
          }
        >
          {capper.type === "quant" ? (
            <BarChart3 className="h-3 w-3 mr-1" />
          ) : (
            <Target className="h-3 w-3 mr-1" />
          )}
          {capper.type === "quant" ? "Quant" : "Prover"}
        </Badge>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className={`${config.bgColor} rounded-lg p-3`}>
            <p className="text-xs text-muted-foreground mb-1">Monthly ROI</p>
            <p className={`text-xl font-bold ${config.color}`}>
              +{monthlyStats.roi.toFixed(1)}%
            </p>
          </div>
          <div className={`${config.bgColor} rounded-lg p-3`}>
            <p className="text-xs text-muted-foreground mb-1">Win Rate</p>
            <p className="text-xl font-bold text-foreground">
              {monthlyStats.winRate.toFixed(1)}%
            </p>
          </div>
        </div>

        <div className="text-sm text-muted-foreground mb-4">
          {monthlyStats.bets} bets • +{monthlyStats.unitProfit.toFixed(1)} units
        </div>

        <Button className="w-full btn-lime font-bold">View Profile</Button>
      </CardContent>
    </Card>
  );
}

function LeaderboardRow({ entry }: { entry: LeaderboardEntry }) {
  const { rank, previousRank, capper, monthlyStats } = entry;

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
                {isUp && (
                  <>
                    <TrendingUp className="h-3 w-3 text-accent" />
                    <span className="text-accent">+{rankChange}</span>
                  </>
                )}
                {isDown && (
                  <>
                    <TrendingDown className="h-3 w-3 text-destructive" />
                    <span className="text-destructive">{rankChange}</span>
                  </>
                )}
                {isStable && (
                  <>
                    <Minus className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">0</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Capper Info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="relative shrink-0">
              <Image
                src={capper.avatar}
                alt={capper.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              {capper.verified && (
                <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-0.5">
                  <CheckCircle2 className="h-3 w-3 text-primary-foreground" />
                </div>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-foreground truncate">{capper.name}</h3>
                <Badge
                  variant="outline"
                  className={
                    capper.type === "quant"
                      ? "bg-accent/10 text-accent border-accent/30 text-xs"
                      : "bg-primary/10 text-primary border-primary/30 text-xs"
                  }
                >
                  {capper.type === "quant" ? "Quant" : "Prover"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground truncate">{capper.username}</p>
            </div>
          </div>

          {/* Stats - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">ROI</p>
              <p className="text-lg font-bold text-primary">
                +{monthlyStats.roi.toFixed(1)}%
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Win Rate</p>
              <p className="text-lg font-bold text-foreground">
                {monthlyStats.winRate.toFixed(1)}%
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Units</p>
              <p className="text-lg font-bold text-accent">
                +{monthlyStats.unitProfit.toFixed(1)}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Bets</p>
              <p className="text-lg font-bold text-foreground">{monthlyStats.bets}</p>
            </div>
          </div>

          {/* CTA */}
          <Button variant="outline" className="hidden lg:flex font-bold">
            View Profile
          </Button>
        </div>

        {/* Mobile Stats */}
        <div className="md:hidden mt-4 pt-4 border-t border-border">
          <div className="grid grid-cols-4 gap-2 text-center">
            <div>
              <p className="text-xs text-muted-foreground mb-1">ROI</p>
              <p className="text-sm font-bold text-primary">
                +{monthlyStats.roi.toFixed(1)}%
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Win Rate</p>
              <p className="text-sm font-bold text-foreground">
                {monthlyStats.winRate.toFixed(1)}%
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Units</p>
              <p className="text-sm font-bold text-accent">
                +{monthlyStats.unitProfit.toFixed(1)}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Bets</p>
              <p className="text-sm font-bold text-foreground">{monthlyStats.bets}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

