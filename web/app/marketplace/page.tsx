"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Search,
  Users,
  Shield,
  Lock,
  Star,
  Filter,
  TrendingUp,
  ArrowRight,
  Zap,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { mockCommunities, sportOptions, type Community } from "@/lib/mock-data";
import SpaceBackground from "@/components/landing/SpaceBackground";

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [selectedSport, setSelectedSport] = useState("All Sports");
  const [accessType, setAccessType] = useState("All");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filtered = mockCommunities.filter((community) => {
    const matchesSearch =
      community.name.toLowerCase().includes(search.toLowerCase()) ||
      community.description.toLowerCase().includes(search.toLowerCase());
    const matchesSport =
      selectedSport === "All Sports" ||
      community.sports.includes(selectedSport);
    const matchesAccess =
      accessType === "All" ||
      (accessType === "Public" && !community.isPrivate) ||
      (accessType === "Private" && community.isPrivate);
    const matchesFeatured = showFeaturedOnly ? community.featured : true;
    return matchesSearch && matchesSport && matchesAccess && matchesFeatured;
  });

  const featured = filtered.filter((c) => c.featured);
  const nonFeatured = filtered.filter((c) => !c.featured);

  // Calculate stats
  const totalMembers = mockCommunities.reduce(
    (sum, c) => sum + c.memberCount,
    0
  );
  const totalSharps = mockCommunities.reduce(
    (sum, c) => sum + c.verifiedCapperCount,
    0
  );
  const totalPicks = 12473; // Mock stat

  return (
    <main className="min-h-screen relative">
      <SpaceBackground />

      {/* Hero Section */}
      <section className="relative section pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="section-container max-w-7xl">
          <div className="text-center mb-12">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4"
              style={{
                fontFamily: "var(--font-bebas-neue), system-ui, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: "0.95",
              }}
            >
              Win More <span className="text-primary">Together</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Find the right Sharp for you. Browse verified winners and join
              communities where performance pays.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
                  {totalPicks.toLocaleString()}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Picks Unlocked
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
                  {totalMembers.toLocaleString()}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Active Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1">
                  {totalSharps}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Verified Sharps
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-base"
                placeholder="Search communities, Sharps, or sports..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {sportOptions.slice(1, 6).map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedSport === sport
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-card/80 border border-border"
                }`}
              >
                {sport}
              </button>
            ))}
            <button
              onClick={() => setSelectedSport("All Sports")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                selectedSport === "All Sports"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-card/80 border border-border"
              }`}
            >
              All Sports
            </button>
          </div>
        </div>
      </section>

      {/* Featured Winners Section */}
      {featured.length > 0 && (
        <section className="relative section py-12 sm:py-16 bg-card/30">
          <div className="section-container max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Verified Winners
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Top-performing communities with proven track records
                  </p>
                </div>
              </div>
              <Link href="/leaderboard">
                <Button variant="outline" size="sm" className="hidden sm:flex">
                  View Leaderboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((community, index) => (
                <FeaturedCard
                  key={community.id}
                  community={community}
                  rank={index + 1}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Communities Section */}
      <section className="relative section py-12 sm:py-16">
        <div className="section-container max-w-7xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {showFeaturedOnly ? "All Featured" : "All Communities"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {filtered.length}{" "}
                {filtered.length === 1 ? "community" : "communities"} found
              </p>
            </div>

            {/* Advanced Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <select
                className="px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                value={accessType}
                onChange={(e) => setAccessType(e.target.value)}
              >
                <option value="All">All Access</option>
                <option value="Public">Public</option>
                <option value="Private">Invite Only</option>
              </select>
              <label className="flex items-center gap-2 cursor-pointer select-none text-sm px-4 py-2 rounded-lg border border-border bg-background hover:bg-card/50 transition-colors">
                <input
                  type="checkbox"
                  checked={showFeaturedOnly}
                  onChange={() => setShowFeaturedOnly((v) => !v)}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-foreground">Featured only</span>
              </label>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="p-12 rounded-xl border border-border bg-card/30 text-center">
              <p className="text-lg text-muted-foreground">
                No communities found matching your criteria. Try adjusting your
                filters.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nonFeatured.map((community) => (
                <CommunityCard key={community.id} community={community} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Create Your Own CTA */}
      <section className="relative section py-16 sm:py-20 bg-primary/5 border-y border-primary/20">
        <div className="section-container max-w-4xl text-center">
          <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Create Your Own Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start sharing picks and build your following. Only get paid when
            your picks win — aligned incentives, transparent results.
          </p>
          <Link href="/register?type=sharp">
            <Button size="lg" className="cta-primary text-lg px-8 py-6">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

function FeaturedCard({
  community,
  rank,
}: {
  community: Community;
  rank: number;
}) {
  return (
    <Link
      href={`/marketplace/${community.id}`}
      className="group block p-6 rounded-xl border-2 border-primary/30 bg-gradient-to-br from-card to-card/50 hover:border-primary/60 hover:shadow-xl transition-all"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <Image
            src={community.avatar}
            alt={community.name}
            width={64}
            height={64}
            className="rounded-xl object-cover aspect-square border-2 border-primary/20"
          />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
            {rank}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-lg text-foreground truncate group-hover:text-primary transition-colors">
              {community.name}
            </h3>
            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
            <Star className="h-4 w-4 text-primary fill-primary shrink-0" />
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" /> {community.memberCount}
            </span>
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3" /> {community.verifiedCapperCount}{" "}
              Sharps
            </span>
            {community.isPrivate && (
              <span className="flex items-center gap-1">
                <Lock className="h-3 w-3" /> Private
              </span>
            )}
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {community.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {community.sports.slice(0, 3).map((sport) => (
          <span
            key={sport}
            className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-semibold border border-primary/20"
          >
            {sport}
          </span>
        ))}
        {community.sports.length > 3 && (
          <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
            +{community.sports.length - 3}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="text-xs font-semibold text-primary">View Details</span>
        <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

function CommunityCard({ community }: { community: Community }) {
  return (
    <Link
      href={`/marketplace/${community.id}`}
      className="group block p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 hover:shadow-lg transition-all"
    >
      <div className="flex items-start gap-4 mb-4">
        <Image
          src={community.avatar}
          alt={community.name}
          width={56}
          height={56}
          className="rounded-lg object-cover aspect-square border border-border shrink-0 group-hover:border-primary/30 transition-colors"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-lg text-foreground truncate group-hover:text-primary transition-colors">
              {community.name}
            </h3>
            {community.isPrivate && (
              <Lock className="h-4 w-4 text-muted-foreground shrink-0" />
            )}
            {community.featured && (
              <Star className="h-4 w-4 text-primary fill-primary shrink-0" />
            )}
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" /> {community.memberCount}
            </span>
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3" /> {community.verifiedCapperCount}
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {community.sports.slice(0, 3).map((sport) => (
              <span
                key={sport}
                className="px-2 py-0.5 text-xs rounded border border-border bg-background/50 text-muted-foreground"
              >
                {sport}
              </span>
            ))}
            {community.sports.length > 3 && (
              <span className="px-2 py-0.5 text-xs rounded border border-border bg-background/50 text-muted-foreground">
                +{community.sports.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {community.description}
      </p>
    </Link>
  );
}
