"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Users, Shield, Lock, Star, Filter } from "lucide-react";
import { mockCommunities, sportOptions, type Community } from "@/lib/mock-data";

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

  return (
    <main className="min-h-screen relative">
      <section className="relative section pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="section-container max-w-7xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Marketplace
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Browse top-performing Sharps by sport, ROI, and win rate. Stake on
              picks — funds are held in escrow until results are verified.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-semibold text-foreground">
                Filters
              </span>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  placeholder="Search communities..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <select
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                value={selectedSport}
                onChange={(e) => setSelectedSport(e.target.value)}
              >
                {sportOptions.map((sport) => (
                  <option key={sport} value={sport}>
                    {sport}
                  </option>
                ))}
              </select>
              <select
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                value={accessType}
                onChange={(e) => setAccessType(e.target.value)}
              >
                <option value="All">All Access</option>
                <option value="Public">Public</option>
                <option value="Private">Invite Only</option>
              </select>
              <label className="flex items-center gap-2 cursor-pointer select-none text-sm">
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

          {/* Featured Communities */}
          {featured.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Star className="h-5 w-5 text-primary fill-primary" />
                <h2 className="text-2xl font-bold text-foreground">
                  Featured Communities
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.map((community) => (
                  <CommunityCard key={community.id} community={community} />
                ))}
              </div>
            </div>
          )}

          {/* All Communities */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                {showFeaturedOnly ? "All Featured" : "All Communities"}
              </h2>
              <span className="text-sm text-muted-foreground">
                {filtered.length}{" "}
                {filtered.length === 1 ? "community" : "communities"}
              </span>
            </div>
            {filtered.length === 0 ? (
              <div className="p-12 rounded-xl border border-border bg-card/30 text-center">
                <p className="text-lg text-muted-foreground">
                  No communities found matching your criteria. Try adjusting
                  your filters.
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
        </div>
      </section>
    </main>
  );
}

function CommunityCard({ community }: { community: Community }) {
  return (
    <Link
      href={`/marketplace/${community.id}`}
      className="block p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all group"
    >
      <div className="flex items-start gap-4 mb-4">
        <Image
          src={community.avatar}
          alt={community.name}
          width={56}
          height={56}
          className="rounded-lg object-cover aspect-square border border-border shrink-0"
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
