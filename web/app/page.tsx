import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Shield,
  TrendingUp,
  Users,
  CheckCircle2,
  Zap,
  BarChart3,
  Lock,
  Trophy,
  ArrowRight,
  Sparkles,
  Target,
  LineChart,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-primary/5">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                100% Verified Cappers Only
              </span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Stop Following Fakes.
              <br />
              <span className="text-primary">Trust The Verified Edge.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              The only sports betting marketplace where every pick is backed by{" "}
              <span className="text-gray-900 font-semibold">
                proven performance
              </span>{" "}
              or{" "}
              <span className="text-gray-900 font-semibold">
                validated algorithms
              </span>
              .
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/register">
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all group"
                >
                  Start Winning Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/marketplace">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                >
                  Browse Verified Cappers
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center gap-10 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-400" />
                <span>10,000+ Active Bettors</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span>$5M+ in Verified Profits</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>100% Fraud-Proof</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Sports Betting Content Market is{" "}
              <span className="text-red-600">Broken</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Platforms like Dub Club let anyone sell picks—no verification, no
              accountability. You deserve better.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-2xl bg-red-50 mb-6">
                <svg
                  className="h-10 w-10 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Unverified "Experts"</h3>
              <p className="text-gray-600 leading-relaxed">
                Anyone can claim a winning record. No proof required.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 rounded-2xl bg-red-50 mb-6">
                <svg
                  className="h-10 w-10 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Cherry-Picked Stats</h3>
              <p className="text-gray-600 leading-relaxed">
                Only showing the wins. Hiding the losses. Classic fraud.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 rounded-2xl bg-red-50 mb-6">
                <svg
                  className="h-10 w-10 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Your Money at Risk</h3>
              <p className="text-gray-600 leading-relaxed">
                Following fake cappers costs you real money. That ends now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-accent/5">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                Our Solution
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-primary">Dual-Verification</span>{" "}
              Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Only two types of cappers are allowed on Sprinkle Bets. Both are
              rigorously verified.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Provers */}
            <div className="p-10 rounded-3xl bg-primary/5 hover:bg-primary/10 transition-all">
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-xs">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">The Provers</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Handicappers with a{" "}
                  <span className="font-semibold text-gray-900">
                    verified track record
                  </span>{" "}
                  of profitable betting.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-gray-700">
                      Real-time bet tracking with automated odds verification
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-gray-700">
                      Must show positive ROI over 500+ verified bets
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-gray-700">
                      Positive Closing Line Value (CLV) required
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-gray-700">
                      Immutable, tamper-proof records
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quants */}
            <div className="p-10 rounded-3xl bg-accent/5 hover:bg-accent/10 transition-all">
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-xs">
                    <BarChart3 className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold">The Quants</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Algorithm builders whose models are{" "}
                  <span className="font-semibold text-gray-900">
                    backtested and validated
                  </span>{" "}
                  by our platform.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700">
                      Algorithms backtested on years of historical data
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700">
                      Model methodology transparently disclosed
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700">
                      Full backtest results publicly visible
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700">
                      Zero manipulation, pure math
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for Serious Bettors
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to find real value and track your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex p-4 bg-white rounded-2xl shadow-xs mb-6">
                <Lock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fraud-Proof System</h3>
              <p className="text-gray-600 leading-relaxed">
                Time-stamped picks, automated grading, and KYC verification make
                cheating impossible.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-white rounded-2xl shadow-xs mb-6">
                <LineChart className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real Metrics</h3>
              <p className="text-gray-600 leading-relaxed">
                ROI, CLV, profit curves, and breakdowns by sport. No vanity
                metrics.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-white rounded-2xl shadow-xs mb-6">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Get picks via push, SMS, Discord, or Telegram the moment they're
                posted.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-white rounded-2xl shadow-xs mb-6">
                <Trophy className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Follow The Sharps</h3>
              <p className="text-gray-600 leading-relaxed">
                Public leaderboard ranks cappers by verified ROI and CLV.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-white rounded-2xl shadow-xs mb-6">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Track Your Bets</h3>
              <p className="text-gray-600 leading-relaxed">
                Built-in bet tracker to manage your bankroll and measure your
                own performance.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex p-4 bg-white rounded-2xl shadow-xs mb-6">
                <BarChart3 className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Algo Lab (Coming Soon)</h3>
              <p className="text-gray-600 leading-relaxed">
                Build and backtest your own models with our no-code algorithm
                builder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Losing to Fake Cappers
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of bettors who demand proof. Start following verified
            experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
              >
                Get Started Free
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
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
