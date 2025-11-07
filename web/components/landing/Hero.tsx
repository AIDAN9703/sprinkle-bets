import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Shield,
  TrendingUp,
  CheckCircle2,
  Zap,
  BarChart3,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative section pt-20 sm:pt-32 pb-20 sm:pb-32 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      <div className="section-container relative z-10">
        <div className="text-left sm:text-center max-w-5xl mx-auto">
          <h1 
            className="leading-tight tracking-tight mb-6 sm:mb-8 text-foreground"
            style={{
              fontFamily: "var(--font-bebas-neue), system-ui, sans-serif",
              fontSize: "clamp(3rem, 8vw, 8rem)",
              lineHeight: "0.9",
              letterSpacing: "0.02em",
            }}
          >
            Only Winners Get Paid.
            <br />
            <span className="text-primary animate-fade-in-up-delay">
              Bet on Sharps. Not on Hype.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2 font-bold">
            Pay2Win is the world's first performance-based sports betting
            creator marketplace — Sharps only earn when their picks win.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 sm:mb-20 animate-fade-in-up-delay-3">
            <Link href="/register">
              <Button size="lg" className="cta-primary w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button
                size="lg"
                variant="outline"
                className="cta-secondary w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8"
              >
                Browse Sharps
              </Button>
            </Link>
          </div>

          {/* Horizontal Ticker */}
          <div className="relative overflow-hidden py-4 animate-fade-in-up-delay-4">
            <div className="flex animate-scroll whitespace-nowrap">
              <div className="flex gap-6 sm:gap-12 px-6 text-xs sm:text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Win-Tied Payouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Escrow Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-primary" />
                  <span>Funds Returned on Loss</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span>Performance-Based Earnings</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  <span>Transparent Win Rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Instant Pick Delivery</span>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Win-Tied Payouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Escrow Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-primary" />
                  <span>Funds Returned on Loss</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span>Performance-Based Earnings</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  <span>Transparent Win Rates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Instant Pick Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
