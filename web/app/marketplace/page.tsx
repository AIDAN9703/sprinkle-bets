import Image from "next/image";
import Link from "next/link";
import { Users, Shield } from "lucide-react";
import { mockCommunities, sportOptions, type Community } from "@/lib/mock-data";
import MarketplaceFilters from "@/app/marketplace/MarketplaceFilters";

interface PageProps {
  searchParams: {
    search?: string;
    sport?: string;
    sort?: string;
    minCLV?: string;
    minWinRate?: string;
    minMembers?: string;
  };
}

export default function MarketplacePage({ searchParams }: PageProps) {
  const search = searchParams.search || "";
  const selectedSport = searchParams.sport || "All Sports";
  const sortBy = searchParams.sort || "featured";
  const minCLV = searchParams.minCLV || "0";
  const minWinRate = searchParams.minWinRate || "0";
  const minMembers = searchParams.minMembers || "0";

  // Filter and sort communities
  const filtered = mockCommunities
    .filter((community) => {
      const matchesSearch =
        community.name.toLowerCase().includes(search.toLowerCase()) ||
        community.description.toLowerCase().includes(search.toLowerCase());
      const matchesSport =
        selectedSport === "All Sports" ||
        community.sports.includes(selectedSport);
      const matchesCLV =
        !community.avgStats || community.avgStats.avgCLV >= parseFloat(minCLV);
      const matchesWinRate =
        !community.avgStats ||
        community.avgStats.avgWinRate >= parseFloat(minWinRate);
      const matchesMembers = community.memberCount >= parseInt(minMembers);

      return (
        matchesSearch &&
        matchesSport &&
        matchesCLV &&
        matchesWinRate &&
        matchesMembers
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "featured":
          return b.featured ? 1 : -1;
        case "clv":
          return (b.avgStats?.avgCLV || 0) - (a.avgStats?.avgCLV || 0);
        case "winrate":
          return (b.avgStats?.avgWinRate || 0) - (a.avgStats?.avgWinRate || 0);
        case "roi":
          return (b.avgStats?.avgROI || 0) - (a.avgStats?.avgROI || 0);
        case "members":
          return b.memberCount - a.memberCount;
        case "sharps":
          return b.verifiedCapperCount - a.verifiedCapperCount;
        default:
          return 0;
      }
    });

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filters */}
        <div className="mb-16">
          <MarketplaceFilters
            sportOptions={sportOptions}
            currentSport={selectedSport}
            currentSearch={search}
            sortBy={sortBy}
            minCLV={minCLV}
            minWinRate={minWinRate}
            minMembers={minMembers}
          />
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground">
            {filtered.length}{" "}
            {filtered.length === 1 ? "community" : "communities"}
          </p>
        </div>

        {/* Community Grid */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">
              No communities found. Try adjusting your filters.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filtered.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function CommunityCard({ community }: { community: Community }) {
  return (
    <Link href={`/marketplace/${community.id}`} className="group block">
      <div className="mb-4">
        <Image
          src={community.avatar}
          alt={community.name}
          width={400}
          height={300}
          className="rounded object-cover aspect-video w-full"
        />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {community.name}
      </h3>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
        {community.description}
      </p>

      {/* Stats Row */}
      {community.avgStats && (
        <div className="flex items-center gap-4 text-sm mb-3">
          <span className="text-foreground font-medium">
            {community.avgStats.avgWinRate.toFixed(1)}%
          </span>
          <span className="text-muted-foreground">
            CLV {community.avgStats.avgCLV.toFixed(1)}%
          </span>
          <span className="text-muted-foreground">
            {community.avgStats.monthlyRecord}
          </span>
        </div>
      )}

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
        <span className="flex items-center gap-1.5">
          <Users className="h-4 w-4" />
          {community.memberCount}
        </span>
        <span className="flex items-center gap-1.5">
          <Shield className="h-4 w-4" />
          {community.verifiedCapperCount}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {community.sports.map((sport) => (
          <span key={sport} className="text-xs text-muted-foreground">
            {sport}
          </span>
        ))}
      </div>
    </Link>
  );
}
