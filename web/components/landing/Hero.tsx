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
    <section className="section pt-16 sm:pt-32">
      <div className="section-container">
        <div className="text-left sm:text-center max-w-4xl mx-auto">
          <h1 className="heading leading-tight tracking-tight">
            Only Winners Get Paid.
            <br />
            <span className="text-primary animate-fade-in-up-delay">
              Bet on Sharps. Not on Hype.
            </span>
          </h1>

          <p className="subheading md:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
            Pay2Win is the world’s first performance-based sports betting
            creator marketplace — Sharps only earn when their picks win.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 animate-fade-in-up-delay-3">
            <Link href="/register">
              <Button size="lg" className="cta-primary w-full sm:w-auto">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button
                size="lg"
                variant="outline"
                className="cta-secondary w-full sm:w-auto"
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
