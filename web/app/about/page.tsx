import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Shield,
  Target,
  Users,
  TrendingUp,
  BarChart3,
  Lightbulb,
  Heart,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "About Us - Sprinkle Bets",
  description:
    "Learn about Sprinkle Bets' mission to bring trust and transparency to the sports betting content industry.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16 bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100">
        {/* Animated Background Orbs */}
        <div
          className="absolute top-20 left-10 w-96 h-96 hero-orb hero-orb-purple"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-80 h-80 hero-orb hero-orb-purple"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-72 h-72 hero-orb hero-orb-purple"
          style={{ animationDelay: "6s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 glass-purple text-primary border-primary/30 px-6 py-2 text-sm font-bold shadow-lg shadow-purple-500/20">
              <Shield className="h-4 w-4 mr-2" />
              Our Mission
            </Badge>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
              Bringing{" "}
              <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 bg-clip-text text-transparent">
                Trust
              </span>{" "}
              to Sports Betting Content
            </h1>
            <p className="text-2xl text-gray-700 font-medium">
              We're on a mission to eliminate fraud in the sports betting
              content industry and build a marketplace where skill is the only
              currency.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-destructive/10 text-destructive border-destructive/20">
                The Problem
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                A $100 Billion Industry Built on Broken Trust
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                The sports betting market is massive and growing rapidly. But
                the content creator economy that has emerged around it is
                fundamentally flawed.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Platforms like Dub Club and Winible have created marketplaces
                where{" "}
                <span className="font-semibold text-foreground">
                  anyone can sell picks
                </span>
                —no verification, no accountability, no proof of skill. Just
                self-reported records and social media hype.
              </p>
              <p className="text-lg text-muted-foreground">
                Bettors are forced to choose between convenience (following
                someone else's picks) and trust (knowing those picks have real
                value). Until now, they couldn't have both.
              </p>
            </div>
            <Card className="bg-destructive/5 border-destructive/20">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-destructive/20 rounded-lg">
                      <svg
                        className="h-6 w-6 text-destructive"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Zero Quality Control</h3>
                      <p className="text-sm text-muted-foreground">
                        Platforms accept anyone, turning marketplaces into "scam
                        lotteries."
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-destructive/20 rounded-lg">
                      <svg
                        className="h-6 w-6 text-destructive"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">
                        Fabricated Track Records
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Self-reported stats are easily
                        manipulated—cherry-picking wins, hiding losses.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-destructive/20 rounded-lg">
                      <svg
                        className="h-6 w-6 text-destructive"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Bettors Lose Twice</h3>
                      <p className="text-sm text-muted-foreground">
                        Pay for subscriptions to bad picks, then lose on the
                        bets themselves.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 hero-orb hero-orb-purple opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 glass-purple text-accent border-accent/30 px-6 py-2 text-sm font-bold shadow-lg shadow-green-500/20">
              Our Solution
            </Badge>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              The Dual-Verification Framework
            </h2>
            <p className="text-2xl text-gray-600 font-medium max-w-3xl mx-auto">
              We built the infrastructure to make verification not just
              possible, but mandatory. Every capper on our platform has passed
              one of two rigorous tests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-12">
            <Card className="glass-card border-2 border-purple-300/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 glass-purple rounded-2xl shadow-lg shadow-purple-500/20">
                    <TrendingUp className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Path 1: The Provers
                  </h3>
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Traditional handicappers who track every pick through our
                  fraud-proof system.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span>
                      Real-time odds verification (like Betstamp, but
                      integrated)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span>
                      Must demonstrate positive ROI over 500+ verified bets
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span>
                      Must beat Closing Line Value (CLV)—the gold standard for
                      skill
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span>
                      Time-stamped, immutable records prevent all manipulation
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card border-2 border-green-300/60 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 glass-purple rounded-2xl shadow-lg shadow-green-500/20">
                    <BarChart3 className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Path 2: The Quants
                  </h3>
                </div>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Algorithmic bettors whose models are independently backtested
                  by our platform.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>
                      Algorithms tested on years of historical odds and game
                      data
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>
                      Model methodology disclosed (inputs, approach, backtests)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>
                      Full performance history made public (including drawdowns)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>
                      Standardized environment ensures fair, honest assessment
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              <span className="font-bold text-gray-900">
                If a capper can't prove their skill through one of these paths,
                they don't get on the platform. Period.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-2xl text-gray-600 font-medium">
              The principles that guide everything we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center group">
              <div className="inline-flex p-6 glass-purple rounded-3xl mb-6 shadow-xl shadow-purple-500/20 group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-300 glow-hover">
                <Shield className="h-14 w-14 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Trust First
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Verification isn't optional. It's the foundation of our entire
                platform.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex p-6 glass-purple rounded-3xl mb-6 shadow-xl shadow-green-500/20 group-hover:shadow-2xl group-hover:shadow-green-500/30 transition-all duration-300 glow-hover">
                <Target className="h-14 w-14 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Transparency
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Full performance histories, including losses. No cherry-picking
                allowed.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex p-6 glass-purple rounded-3xl mb-6 shadow-xl shadow-purple-500/20 group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-300 glow-hover">
                <Lightbulb className="h-14 w-14 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Education
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We teach users about CLV, ROI, and bankroll management—not hype.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex p-6 glass-purple rounded-3xl mb-6 shadow-xl shadow-green-500/20 group-hover:shadow-2xl group-hover:shadow-green-500/30 transition-all duration-300 glow-hover">
                <Heart className="h-14 w-14 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Responsibility
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Built-in responsible gaming tools to protect our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900">
        {/* Animated Background Orbs */}
        <div
          className="absolute top-10 left-20 w-80 h-80 hero-orb hero-orb-white"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 hero-orb hero-orb-white"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-white leading-tight">
            Join the Movement
          </h2>
          <p className="text-2xl text-purple-100 mb-12 font-medium">
            Whether you're a bettor seeking real value or a skilled capper ready
            to prove it, Sprinkle Bets is where you belong.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="text-xl px-12 py-8 bg-white text-purple-700 hover:bg-purple-50 font-bold shadow-2xl shadow-black/20 hover:shadow-black/30 transition-all duration-300"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-8 border-3 border-white text-white hover:bg-white/10 font-bold backdrop-blur-sm shadow-xl"
              >
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
