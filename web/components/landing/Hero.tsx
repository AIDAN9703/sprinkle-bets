"use client";

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
import SpaceBackground from "./SpaceBackground";
import ProductExample from "./ProductExample";

export default function Hero() {
  return (
    <section className="relative section pb-32 sm:pb-40 overflow-hidden min-h-screen flex items-center">
      {/* Space Background */}
      <SpaceBackground />

      {/* Content */}
      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left max-w-2xl">
            <h1
              className="leading-tight tracking-tight mb-4 sm:mb-6 text-foreground"
              style={{
                fontFamily: "var(--font-bebas-neue), system-ui, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                lineHeight: "0.95",
                letterSpacing: "0.02em",
              }}
            >
              Performance <span className="text-primary">Pays</span> Here.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
              The world&apos;s first performance-based sports betting
              marketplace where expert bettors only earn when their picks win.
              Aligned incentives. Transparent results. Real accountability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12">
              <Link href="/register">
                <Button
                  size="lg"
                  className="cta-primary w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8"
                >
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
            <div className="relative overflow-hidden py-4">
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

          {/* Right Column - Product Example */}
          <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
            <ProductExample />
          </div>
        </div>
      </div>
    </section>
  );
}
