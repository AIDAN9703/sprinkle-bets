import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, AlertCircle } from "lucide-react";

export default function ForCreators() {
  return (
    <section className="relative section overflow-hidden">
      {/* Fixed parallax background */}
      <div
        className="absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: 'url("/images/stock-basketball.png")',
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-linear-to-r from-background/50 via-background/30 to-background/50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Left: The Pitch */}
          <div className="animate-fade-in-left">
            <h2 className="heading leading-tight">
              If you can win, we'll{" "}
              <span className="text-primary">pay you</span> for it.
            </h2>
            <p className="subheading mb-8 sm:mb-12 leading-relaxed">
              Prove your edge. Build a following. Get paid. We handle
              verification, subscribers, and payments—you focus on winning bets.
            </p>

            {/* The Deal */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <div className="border-l-4 border-primary pl-4 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                  $5,000
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  Monthly bonus for #1 ranked capper
                </div>
              </div>
              <div className="border-l-4 border-primary pl-4 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                  85%
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  Revenue share—you keep most of what you earn
                </div>
              </div>
              <div className="border-l-4 border-primary pl-4 sm:pl-6">
                <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                  $10K+
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  Top 10 leaderboard split every month
                </div>
              </div>
            </div>

            <Link href="/register?type=capper">
              <Button size="lg" className="cta-primary w-full sm:w-auto">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>

          {/* Right: Interactive Capper Journey */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-12 flex flex-col justify-center pt-4 sm:pt-6 animate-fade-in-right">
            {/* Step 1 */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="text-xl sm:text-2xl font-bold text-primary">
                1.
              </div>
              <div className="flex-1">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">
                  Apply & Verify
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Submit your track record. We verify every bet with timestamped
                  odds and closing line data.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="text-xl sm:text-2xl font-bold text-primary">
                2.
              </div>
              <div className="flex-1">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">
                  Build Your Following
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Start with a small subscriber base. Prove consistency. Grow
                  organically through performance.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="text-xl sm:text-2xl font-bold text-primary">
                3.
              </div>
              <div className="flex-1">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">
                  Scale & Optimize
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Premium placement, higher revenue shares, exclusive bonuses.
                  We reward excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
