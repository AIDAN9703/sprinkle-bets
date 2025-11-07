"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Lock, Star, Users, Shield } from "lucide-react";
import { mockCommunities, sportOptions, type Community } from "@/lib/mock-data";

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [selectedSport, setSelectedSport] = useState("All Sports");
  const [accessType, setAccessType] = useState("All"); // All, Public, Private
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
    <main className="min-h-screen pt-16">
      {/* Header */}
      <section className="section">
        <div className="section-container max-w-5xl">
          <h1 className="heading">Find Your Community</h1>
          <p className="subheading mb-6">
            Browse top-performing Sharps by sport, ROI, and win rate. Stake on picks — funds are held in escrow until results are verified.
          </p>
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <input
              type="text"
              className="w-full md:w-64 px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Search communities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="w-full md:w-48 px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
              className="w-full md:w-36 px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              value={accessType}
              onChange={(e) => setAccessType(e.target.value)}
            >
              <option value="All">All Access</option>
              <option value="Public">Public</option>
              <option value="Private">Invite Only</option>
            </select>
            <label className="flex items-center gap-2 md:ml-4 cursor-pointer select-none text-xs">
              <input
                type="checkbox"
                checked={showFeaturedOnly}
                onChange={() => setShowFeaturedOnly((v) => !v)}
                className="accent-primary"
              />
              Featured Only
            </label>
          </div>
        </div>
      </section>

      {/* Featured Communities */}
      {featured.length > 0 && (
        <section className="section pt-0">
          <div className="section-container max-w-6xl">
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-6 w-6 text-primary" />
              <h2 className="heading text-3xl md:text-4xl">
                Featured Communities
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((community) => (
                <CommunityCard key={community.id} community={community} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Communities */}
      <section className="section pt-0">
        <div className="section-container max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="heading text-3xl md:text-4xl">
              {showFeaturedOnly ? "All Featured" : "All Communities"} (
              {filtered.length})
            </h2>
          </div>
          {filtered.length === 0 ? (
            <Card className="bg-card p-12 text-center">
              <p className="text-xl text-muted-foreground">
                No communities found matching your criteria. Try adjusting your
                filters.
              </p>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nonFeatured.map((community) => (
                <CommunityCard key={community.id} community={community} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function CommunityCard({ community }: { community: Community }) {
  return (
    <Card className="bg-card hover:shadow-2xl transition-all duration-300 border-2 border-border">
      <CardContent className="pt-6">
        <div className="mb-4 flex items-center gap-3">
          <Image
            src={community.avatar}
            alt={community.name}
            width={56}
            height={56}
            className="rounded-2xl object-cover aspect-square shadow-md border border-border"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <h3 className="font-bold text-lg text-foreground truncate">
                {community.name}
              </h3>
              {community.isPrivate && (
                <Lock className="h-4 w-4 text-muted-foreground" />
              )}
              {community.featured && (
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  Featured
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Users className="h-3 w-3" />
              <span>{community.memberCount} members</span>
              <Shield className="h-3 w-3" />
              <span>{community.verifiedCapperCount} Sharps</span>
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              {community.sports.slice(0, 3).map((s: string) => (
                <Badge
                  key={s}
                  variant="outline"
                  className="text-xs px-2 py-0.5"
                >
                  {s}
                </Badge>
              ))}
              {community.sports.length > 3 && (
                <Badge variant="outline" className="text-xs px-2 py-0.5">
                  +{community.sports.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {community.description}
        </p>
        <Button className="w-full font-bold">
          {community.isPrivate ? "Request Invite" : "Join Community"}
        </Button>
      </CardContent>
    </Card>
  );
}
