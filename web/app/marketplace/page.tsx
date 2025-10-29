"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Filter,
  TrendingUp,
  TrendingDown,
  Shield,
  Users,
  BarChart3,
  Target,
  Zap,
  CheckCircle2,
  Star,
} from "lucide-react";
import { mockCappers, sportOptions, typeOptions, sortOptions, type Capper } from "@/lib/mock-data";

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState("All Sports");
  const [selectedType, setSelectedType] = useState("All Types");
  const [sortBy, setSortBy] = useState("roi");

  // Filter and sort cappers
  const filteredCappers = mockCappers
    .filter((capper) => {
      const matchesSearch =
        capper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        capper.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        capper.bio.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSport =
        selectedSport === "All Sports" || capper.sport.includes(selectedSport);

      const matchesType =
        selectedType === "All Types" ||
        (selectedType === "Provers" && capper.type === "prover") ||
        (selectedType === "Quants" && capper.type === "quant");

      return matchesSearch && matchesSport && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "roi":
          return b.stats.roi - a.stats.roi;
        case "winRate":
          return b.stats.winRate - a.stats.winRate;
        case "clv":
          return b.stats.clv - a.stats.clv;
        case "subscribers":
          return b.subscribers - a.subscribers;
        case "recent":
          return new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime();
        default:
          return 0;
      }
    });

  const featuredCappers = mockCappers.filter((c) => c.featured);

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
              <Shield className="h-4 w-4 mr-2" />
              All Verified Cappers
            </Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-foreground">
              Find Your <span className="text-primary">Perfect Capper</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Browse verified sports betting experts. Every capper has proven their edge with
              real, fraud-proof data.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-6 shadow-xl border border-border">
              <div className="grid md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search cappers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  />
                </div>

                {/* Sport Filter */}
                <select
                  value={selectedSport}
                  onChange={(e) => setSelectedSport(e.target.value)}
                  className="px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                >
                  {sportOptions.map((sport) => (
                    <option key={sport} value={sport}>
                      {sport}
                    </option>
                  ))}
                </select>

                {/* Type Filter */}
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                >
                  {typeOptions.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="mt-4 flex items-center gap-3 flex-wrap">
                <span className="text-sm text-muted-foreground font-medium">Sort by:</span>
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      sortBy === option.value
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cappers */}
      {featuredCappers.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Featured Cappers</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredCappers.map((capper) => (
                <CapperCard key={capper.id} capper={capper} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Cappers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              All Cappers ({filteredCappers.length})
            </h2>
          </div>

          {filteredCappers.length === 0 ? (
            <Card className="bg-card p-12 text-center">
              <p className="text-xl text-muted-foreground">
                No cappers found matching your criteria. Try adjusting your filters.
              </p>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCappers.map((capper) => (
                <CapperCard key={capper.id} capper={capper} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function CapperCard({ capper, featured = false }: { capper: Capper; featured?: boolean }) {
  return (
    <Card
      className={`bg-card hover:shadow-2xl transition-all duration-300 border-2 ${
        featured
          ? "border-primary/30 shadow-lg shadow-primary/10"
          : "border-border hover:border-primary/20"
      }`}
    >
      <CardContent className="pt-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src={capper.avatar}
                alt={capper.name}
                width={56}
                height={56}
                className="rounded-full"
              />
              {capper.verified && (
                <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                  <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground">{capper.name}</h3>
              <p className="text-sm text-muted-foreground">{capper.username}</p>
            </div>
          </div>
          {featured && (
            <Badge className="bg-primary/20 text-primary border-primary/30">
              <Star className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>

        {/* Type & Sports */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <Badge
            className={
              capper.type === "quant"
                ? "bg-accent/20 text-accent border-accent/30"
                : "bg-primary/20 text-primary border-primary/30"
            }
          >
            {capper.type === "quant" ? (
              <BarChart3 className="h-3 w-3 mr-1" />
            ) : (
              <Target className="h-3 w-3 mr-1" />
            )}
            {capper.type === "quant" ? "Quant" : "Prover"}
          </Badge>
          {capper.sport.slice(0, 2).map((sport) => (
            <Badge key={sport} variant="outline" className="text-xs">
              {sport}
            </Badge>
          ))}
          {capper.sport.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{capper.sport.length - 2}
            </Badge>
          )}
        </div>

        {/* Bio */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{capper.bio}</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-3">
            <p className="text-xs text-muted-foreground mb-1">Win Rate</p>
            <p className="text-lg font-bold text-foreground">{capper.stats.winRate}%</p>
          </div>
          <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-3">
            <p className="text-xs text-muted-foreground mb-1">ROI</p>
            <p className="text-lg font-bold text-primary">+{capper.stats.roi}%</p>
          </div>
          <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-3">
            <p className="text-xs text-muted-foreground mb-1">CLV</p>
            <p className="text-lg font-bold text-accent">+{capper.stats.clv}%</p>
          </div>
          <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-3">
            <p className="text-xs text-muted-foreground mb-1">Streak</p>
            <div className="flex items-center gap-1">
              {capper.stats.streak > 0 ? (
                <TrendingUp className="h-4 w-4 text-accent" />
              ) : (
                <TrendingDown className="h-4 w-4 text-destructive" />
              )}
              <p
                className={`text-lg font-bold ${
                  capper.stats.streak > 0 ? "text-accent" : "text-destructive"
                }`}
              >
                {Math.abs(capper.stats.streak)}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{capper.subscribers} subscribers</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="h-3 w-3" />
            <span>{capper.stats.totalBets} bets</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="border-t border-border pt-4 mb-4">
          <p className="text-xs text-muted-foreground mb-2">Starting at</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">${capper.pricing.weekly}</span>
            <span className="text-sm text-muted-foreground">/week</span>
          </div>
        </div>

        {/* CTA */}
        <Button className="w-full btn-lime font-bold">
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
}

