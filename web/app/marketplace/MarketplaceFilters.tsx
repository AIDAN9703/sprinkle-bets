"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MarketplaceFiltersProps {
  sportOptions: string[];
  currentSport: string;
  currentSearch: string;
  sortBy: string;
  minCLV: string;
  minWinRate: string;
  minMembers: string;
}

export default function MarketplaceFilters({
  sportOptions,
  currentSport,
  currentSearch,
  sortBy,
  minCLV,
  minWinRate,
  minMembers,
}: MarketplaceFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(currentSearch);

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all" && value !== "0") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/marketplace?${params.toString()}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateParam("search", searchValue);
  };

  return (
    <div className="space-y-6">
      {/* Search Bar - Left Aligned */}
      <form onSubmit={handleSearch} className="relative max-w-md">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          className="w-full h-10 pl-10 pr-4 rounded-lg bg-card text-foreground text-sm placeholder:text-muted-foreground border border-border focus:outline-none"
          placeholder="Search communities..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>

      {/* Filters Row - All Same Height */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Sport Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {sportOptions.map((sport) => (
            <button
              key={sport}
              onClick={() =>
                updateParam("sport", sport === "All Sports" ? "all" : sport)
              }
              className={`h-10 px-4 rounded-lg text-sm font-medium transition-colors ${
                currentSport === sport
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-muted border border-border"
              }`}
            >
              {sport}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="hidden sm:block h-10 w-px bg-border" />

        {/* Dropdown Filters - All Same Height */}
        <div className="flex flex-wrap items-center gap-2">
          <Select
            value={sortBy}
            onValueChange={(value) => updateParam("sort", value)}
          >
            <SelectTrigger className="h-10 w-[140px] bg-card border-border">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="clv">Highest CLV</SelectItem>
              <SelectItem value="winrate">Win Rate</SelectItem>
              <SelectItem value="roi">Best ROI</SelectItem>
              <SelectItem value="members">Most Members</SelectItem>
              <SelectItem value="sharps">Most Sharps</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={minCLV}
            onValueChange={(value) => updateParam("minCLV", value)}
          >
            <SelectTrigger className="h-10 w-[120px] bg-card border-border">
              <SelectValue placeholder="Min CLV" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Any CLV</SelectItem>
              <SelectItem value="1">CLV &gt; 1%</SelectItem>
              <SelectItem value="2">CLV &gt; 2%</SelectItem>
              <SelectItem value="3">CLV &gt; 3%</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={minWinRate}
            onValueChange={(value) => updateParam("minWinRate", value)}
          >
            <SelectTrigger className="h-10 w-[130px] bg-card border-border">
              <SelectValue placeholder="Win Rate" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Any Win Rate</SelectItem>
              <SelectItem value="52">52%+</SelectItem>
              <SelectItem value="54">54%+</SelectItem>
              <SelectItem value="56">56%+</SelectItem>
              <SelectItem value="58">58%+</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={minMembers}
            onValueChange={(value) => updateParam("minMembers", value)}
          >
            <SelectTrigger className="h-10 w-[130px] bg-card border-border">
              <SelectValue placeholder="Members" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Any Size</SelectItem>
              <SelectItem value="50">50+ members</SelectItem>
              <SelectItem value="100">100+ members</SelectItem>
              <SelectItem value="200">200+ members</SelectItem>
              <SelectItem value="500">500+ members</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
