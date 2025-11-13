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
    <section className="relative section pb-16 sm:pb-24 md:pb-32 lg:pb-40 overflow-hidden min-h-[85vh] sm:min-h-screen flex items-center">
      {/* Space Background */}
      <SpaceBackground />

      {/* Content */}
      <div className="section-container relative z-10 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left max-w-2xl w-full order-1 lg:order-1">
            <h1
              className="leading-tight tracking-tight mb-4 sm:mb-5 md:mb-6 text-foreground"
              style={{
                fontFamily: "var(--font-bebas-neue), system-ui, sans-serif",
                fontSize: "clamp(2.25rem, 8vw, 5.5rem)",
                lineHeight: "0.95",
                letterSpacing: "0.02em",
              }}
            >
              Performance <span className="text-primary">Pays</span> Here.
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-xl">
              The world&apos;s first performance-based sports betting
              marketplace where expert bettors only earn when their picks win.
              Aligned incentives. Transparent results. Real accountability.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
              <Link href="/register" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="cta-primary w-full sm:w-auto text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 h-auto border border-transparent"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </Button>
              </Link>
              <Link href="/marketplace" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="cta-secondary w-full sm:w-auto text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-8 h-auto"
                >
                  Browse Sharps
                </Button>
              </Link>
            </div>

            {/* Horizontal Ticker - Mobile Optimized */}
            <div className="relative overflow-hidden py-3 sm:py-4">
              <div className="flex animate-scroll whitespace-nowrap">
                <div className="flex gap-4 sm:gap-6 md:gap-12 px-4 sm:px-6 text-[10px] sm:text-xs md:text-sm font-medium text-muted-foreground">
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                    <span className="whitespace-nowrap">Win-Tied Payouts</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                    <span className="whitespace-nowrap">Escrow Protection</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                    <span className="whitespace-nowrap">Funds Returned</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                    <span className="whitespace-nowrap">Performance-Based</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                    <span className="whitespace-nowrap">Transparent Rates</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                    <span className="whitespace-nowrap">Instant Delivery</span>
                  </div>
                  {/* Duplicate for seamless loop */}
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                    <span className="whitespace-nowrap">Win-Tied Payouts</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                    <span className="whitespace-nowrap">Escrow Protection</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                    <span className="whitespace-nowrap">Funds Returned</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                    <span className="whitespace-nowrap">Performance-Based</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                    <span className="whitespace-nowrap">Transparent Rates</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                    <span className="whitespace-nowrap">Instant Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Example */}
          <div className="relative w-full order-2 lg:order-2 flex items-center justify-center lg:h-[600px]">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md">
              <ProductExample />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
