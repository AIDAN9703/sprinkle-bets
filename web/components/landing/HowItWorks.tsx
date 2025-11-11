"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendingUp, Users, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="section-container">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading mb-4 sm:mb-6">
            How <span className="text-primary">Pay2Win</span> Works
          </h2>
          <p className="subheading max-w-3xl mx-auto">
            The only platform where Sharps only earn when their picks win.
            Aligned incentives. Transparent results. Real accountability.
          </p>
        </div>

        {/* Two Column Layout - Fans vs Sharps */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Fans/Bettors Side */}
          <div className="bg-card/60 backdrop-blur-sm rounded-lg border border-primary/20 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">For Fans</h3>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Load Funds</h4>
                  <p className="text-sm text-muted-foreground">
                    Add money to your Pay2Win account via Stripe or crypto.
                    Funds are secure and ready to stake.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Join Communities
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Browse verified Sharps and join their communities. Most are
                    free, some offer paid subscriptions for exclusive access.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    View Locked Picks
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    See blurred picks in your feed with minimal details (game,
                    odds). See the unlock fee to reveal the pick.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Unlock & Win or Refund
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Pay unlock fee to reveal pick. Funds move to escrow. If WIN
                    → Sharp gets paid. If LOSS → your funds return instantly.
                  </p>
                </div>
              </div>
            </div>
            <Link href="/marketplace" className="mt-6 inline-block">
              <Button variant="outline" className="w-full sm:w-auto">
                Browse Sharps
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Sharps/Creators Side */}
          <div className="bg-card/60 backdrop-blur-sm rounded-lg border border-primary/20 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">For Sharps</h3>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Create Community
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Set up your verified account and create a community. Most
                    Sharps keep communities free, charging per pick unlock
                    instead.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Post Locked Picks
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Post picks as blurred/locked to your community. Set unlock
                    price (e.g., $10). Minimal details visible (game, odds).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Followers Unlock
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Users pay to unlock and see your pick. Funds lock in escrow.
                    Watch your total unlocked amount grow.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">
                    Earn on Wins
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    If WIN → collect all unlock fees (minus 10% platform fee).
                    If LOSS → funds return to users. Performance pays.
                  </p>
                </div>
              </div>
            </div>
            <Link href="/register?type=sharp" className="mt-6 inline-block">
              <Button className="w-full sm:w-auto">
                Become a Sharp
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
