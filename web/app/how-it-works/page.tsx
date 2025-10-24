import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  UserPlus,
  Search,
  CreditCard,
  Bell,
  TrendingUp,
  FileCheck,
  BarChart3,
  Shield,
  Target,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "How It Works - Sprinkle Bets",
  description:
    "Learn how to find verified cappers, subscribe to picks, and start winning with Sprinkle Bets.",
};

export default function HowItWorksPage() {
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
              Simple & Transparent
            </Badge>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
              How{" "}
              <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 bg-clip-text text-transparent">
                Sprinkle Bets
              </span>{" "}
              Works
            </h1>
            <p className="text-2xl text-gray-700 font-medium">
              Finding verified sports betting experts has never been easier.
              Here's your complete guide.
            </p>
          </div>
        </div>
      </section>

      {/* For Bettors Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 glass-purple text-accent border-accent/30 px-6 py-2 text-sm font-bold shadow-lg shadow-green-500/20">
              For Bettors
            </Badge>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Start Following Verified Experts in 4 Steps
            </h2>
            <p className="text-2xl text-gray-600 font-medium">
              Get access to proven picks in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Step 1 */}
            <Card className="relative glass-card hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border-2 border-purple-200/50">
              <div className="absolute -top-5 left-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-purple-500/30 glow">
                  1
                </div>
              </div>
              <CardContent className="pt-10 pb-8">
                <div className="inline-flex p-4 glass-purple rounded-2xl mb-6 shadow-lg shadow-purple-500/20">
                  <UserPlus className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Create Account
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Sign up free in seconds. No credit card required to browse.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="relative glass-card hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border-2 border-purple-200/50">
              <div className="absolute -top-5 left-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-purple-500/30 glow">
                  2
                </div>
              </div>
              <CardContent className="pt-10 pb-8">
                <div className="inline-flex p-4 glass-purple rounded-2xl mb-6 shadow-lg shadow-green-500/20">
                  <Search className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Find Your Capper
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Browse verified cappers, filter by sport, ROI, or strategy.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="relative glass-card hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border-2 border-purple-200/50">
              <div className="absolute -top-5 left-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-purple-500/30 glow">
                  3
                </div>
              </div>
              <CardContent className="pt-10 pb-8">
                <div className="inline-flex p-4 glass-purple rounded-2xl mb-6 shadow-lg shadow-purple-500/20">
                  <CreditCard className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Subscribe
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Choose a plan (weekly, monthly, annual). Cancel anytime.
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="relative glass-card hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border-2 border-purple-200/50">
              <div className="absolute -top-5 left-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-purple-500/30 glow">
                  4
                </div>
              </div>
              <CardContent className="pt-10 pb-8">
                <div className="inline-flex p-4 glass-purple rounded-2xl mb-6 shadow-lg shadow-green-500/20">
                  <Bell className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Get Picks
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Instant notifications via app, SMS, Discord, or Telegram.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Link href="/register">
              <Button
                size="lg"
                className="text-xl px-12 py-8 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 glow glow-hover font-bold shadow-2xl shadow-purple-500/30"
              >
                Start Free Trial
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 hero-orb hero-orb-purple opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              What You Get with Every Subscription
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="inline-flex p-6 glass-purple rounded-3xl mb-6 shadow-xl shadow-purple-500/20 group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-300 glow-hover">
                <Shield className="h-14 w-14 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Verified Performance
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every pick comes from a capper with a proven, fraud-proof track
                record.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex p-6 glass-purple rounded-3xl mb-6 shadow-xl shadow-green-500/20 group-hover:shadow-2xl group-hover:shadow-green-500/30 transition-all duration-300 glow-hover">
                <Target className="h-14 w-14 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Real-Time Delivery
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Get picks instantly—before lines move—via your preferred
                channel.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex p-6 glass-purple rounded-3xl mb-6 shadow-xl shadow-purple-500/20 group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-300 glow-hover">
                <BarChart3 className="h-14 w-14 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Full Transparency
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                See complete performance history, including ROI, CLV, and all
                past picks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Cappers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 glass-purple text-primary border-primary/30 px-6 py-2 text-sm font-bold shadow-lg shadow-purple-500/20">
              For Cappers
            </Badge>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Monetize Your Skill with Verification
            </h2>
            <p className="text-2xl text-gray-600 font-medium max-w-3xl mx-auto">
              If you can prove your edge, you can earn on our platform. Here's
              how to get verified.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Path 1: Provers */}
            <Card className="glass-card border-2 border-purple-300/60 relative overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="pt-10 pb-10 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 glass-purple rounded-2xl shadow-lg shadow-purple-500/20">
                    <TrendingUp className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Path 1: Become a Prover
                  </h3>
                </div>
                <p className="text-gray-600 text-lg mb-8">
                  For handicappers with a real track record.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">Apply & Connect</p>
                      <p className="text-sm text-muted-foreground">
                        Submit your application and link your sportsbook account
                        (optional) or use our manual pick logger.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">Build Your Record</p>
                      <p className="text-sm text-muted-foreground">
                        Log picks with real-time odds verification. We track
                        everything automatically.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">Meet the Standard</p>
                      <p className="text-sm text-muted-foreground">
                        Show positive ROI and positive CLV over 500+ verified
                        bets.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">Get Verified & Earn</p>
                      <p className="text-sm text-muted-foreground">
                        Once verified, set your subscription prices and start
                        building your following.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/register?type=capper">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold text-lg py-6 glow glow-hover shadow-xl shadow-purple-500/30">
                    Apply as a Prover
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Path 2: Quants */}
            <Card className="glass-card border-2 border-green-300/60 relative overflow-hidden group hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400/20 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="pt-10 pb-10 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 glass-purple rounded-2xl shadow-lg shadow-green-500/20">
                    <BarChart3 className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Path 2: Become a Quant
                  </h3>
                </div>
                <p className="text-gray-600 text-lg mb-8">
                  For algorithm builders with backtested models.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Submit Your Model</p>
                      <p className="text-sm text-muted-foreground">
                        Upload your algorithm code or logic to our secure
                        backtesting environment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Disclose Methodology</p>
                      <p className="text-sm text-muted-foreground">
                        Share your model's inputs and approach (proprietary
                        weighting stays private).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Pass Our Backtest</p>
                      <p className="text-sm text-muted-foreground">
                        We test your algorithm against years of historical odds
                        data.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Launch & Monetize</p>
                      <p className="text-sm text-muted-foreground">
                        Full backtest results go public. Your model generates
                        picks automatically.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/register?type=capper">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg py-6 shadow-xl shadow-green-500/30">
                    Apply as a Quant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card max-w-4xl mx-auto mt-16 border-2 border-purple-200/50 shadow-xl shadow-purple-500/10">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-start gap-6">
                <div className="p-4 glass-purple rounded-2xl shadow-lg shadow-purple-500/20">
                  <FileCheck className="h-10 w-10 text-primary flex-shrink-0" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    What Cappers Earn
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    You set your own subscription prices (weekly, monthly,
                    annual tiers). Sprinkle Bets takes a 15-20% platform fee.
                    The rest is yours.
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    <span className="font-bold text-gray-900">Example:</span> If
                    you charge $99/month and have 100 subscribers, you earn{" "}
                    <span className="font-bold text-green-600 text-xl">
                      $7,920/month
                    </span>{" "}
                    after platform fees.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute bottom-10 left-10 w-72 h-72 hero-orb hero-orb-purple opacity-30"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="glass-card border-2 border-purple-200/40 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <h3 className="font-bold text-2xl mb-4 text-gray-900">
                  What makes Sprinkle Bets different from Dub Club or Winible?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We're the only platform with{" "}
                  <span className="font-bold text-purple-600">
                    mandatory verification
                  </span>
                  . Dub Club and Winible let anyone sell picks. We require proof
                  of skill—either a verified track record or a backtested
                  algorithm. No exceptions.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-2 border-purple-200/40 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <h3 className="font-bold text-2xl mb-4 text-gray-900">
                  What is Closing Line Value (CLV) and why does it matter?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  CLV measures whether you're getting better odds than the
                  "closing line"—the final odds before a game starts.
                  Consistently beating the closing line is the strongest
                  indicator of long-term betting skill. It's the metric sharps
                  care about most.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-2 border-purple-200/40 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <h3 className="font-bold text-2xl mb-4 text-gray-900">
                  Can cappers fake their records?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  No. Every pick is time-stamped and locked into our database
                  with verified odds from real sportsbooks. Picks can't be
                  edited or deleted after submission. It's mathematically
                  impossible to cheat the system.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-2 border-purple-200/40 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <h3 className="font-bold text-2xl mb-4 text-gray-900">
                  Do I need to share my full algorithm if I'm a Quant?
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  No. You disclose your model's{" "}
                  <span className="font-bold text-purple-600">inputs</span>{" "}
                  (e.g., "team efficiency, weather data") and{" "}
                  <span className="font-bold text-purple-600">methodology</span>{" "}
                  (e.g., "logistic regression"), but your proprietary weighting
                  and specific code stay private. Transparency without giving
                  away your edge.
                </p>
              </CardContent>
            </Card>
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
            Ready to Get Started?
          </h2>
          <p className="text-2xl text-purple-100 mb-12 font-medium">
            Join thousands of bettors and cappers who trust verification over
            hype.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="text-xl px-12 py-8 bg-white text-purple-700 hover:bg-purple-50 font-bold shadow-2xl shadow-black/20 hover:shadow-black/30 transition-all duration-300"
              >
                Sign Up Free
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-8 border-3 border-white text-white hover:bg-white/10 font-bold backdrop-blur-sm shadow-xl"
              >
                Browse Cappers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
