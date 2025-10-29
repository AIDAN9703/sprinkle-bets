import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
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
  Zap,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "How It Works - Sprinkle Bets",
  description:
    "Learn how to find verified cappers, subscribe to picks, and start winning with Sprinkle Bets.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Animated Background Orbs */}
        <div
          className="absolute top-20 left-10 w-96 h-96 hero-orb hero-orb-lime"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-80 h-80 hero-orb hero-orb-black"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-72 h-72 hero-orb hero-orb-lime"
          style={{ animationDelay: "6s" }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 bg-primary/10 dark:bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm font-bold">
              <Shield className="h-4 w-4 mr-2" />
              Simple & Transparent
            </Badge>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight text-foreground">
              How{" "}
              <span className="text-primary">
                Sprinkle Bets
              </span>{" "}
              Works
            </h1>
            <p className="text-2xl text-muted-foreground font-medium">
              Finding verified sports betting experts has never been easier.
              Here's your complete guide.
            </p>
          </div>
        </div>
      </section>

      {/* For Bettors Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 px-6 py-2 text-sm font-bold">
              For Bettors
            </Badge>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-foreground">
              Start Following Verified Experts in 4 Steps
            </h2>
            <p className="text-2xl text-muted-foreground font-medium">
              Get access to proven picks in minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Step 1 */}
            <Card className="relative bg-card hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-2 border-primary/20">
              <div className="absolute -top-5 left-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg glow-lime">
                  1
                </div>
              </div>
              <CardContent className="pt-10 pb-8">
                <div className="inline-flex p-4 bg-primary/10 dark:bg-primary/20 rounded-2xl mb-6">
                  <UserPlus className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Create Account
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Sign up free in seconds. No credit card required to browse.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="relative bg-card hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 border-2 border-accent/20">
              <div className="absolute -top-5 left-6">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                  2
                </div>
              </div>
              <CardContent className="pt-10 pb-8">
                <div className="inline-flex p-4 bg-accent/10 dark:bg-accent/20 rounded-2xl mb-6">
                  <Search className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Find Your Capper
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Browse verified cappers, filter by sport, ROI, or strategy.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="relative bg-card hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-2 border-primary/20">
              <div className="absolute -top-5 left-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg glow-lime">
                  3
                </div>
              </div>
              <CardContent className="pt-10 pb-8">
                <div className="inline-flex p-4 bg-primary/10 dark:bg-primary/20 rounded-2xl mb-6">
                  <CreditCard className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Subscribe
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Choose a plan (weekly, monthly, annual). Cancel anytime.
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="relative bg-card hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 border-2 border-accent/20">
              <div className="absolute -top-5 left-6">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                  4
                </div>
              </div>
              <CardContent className="pt-10 pb-8">
                <div className="inline-flex p-4 bg-accent/10 dark:bg-accent/20 rounded-2xl mb-6">
                  <Bell className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Get Picks
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Instant notifications via app, SMS, Discord, or Telegram.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Link href="/register">
              <Button
                size="lg"
                className="text-xl px-12 py-8 btn-lime font-bold"
              >
                Start Free Trial
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Section - Guy Looking at Phone */}
      <section className="py-24 px-4 bg-primary/5 dark:bg-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                Real-Time Delivery
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Get Picks <span className="text-primary">Instantly</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Never miss a winning opportunity. Receive picks the moment they're posted, 
                directly to your phone or preferred platform.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-lg">
                    Push notifications for time-sensitive bets
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-lg">
                    Multi-channel delivery (SMS, Discord, Telegram)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-lg">
                    Mobile-optimized for betting on the go
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/images/guy-looking-at-phone.png"
                alt="Getting picks on mobile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extrabold mb-6 text-foreground">
              What You Get with Every Subscription
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="inline-flex p-6 bg-primary/10 dark:bg-primary/20 rounded-3xl mb-6 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/20">
                <Shield className="h-14 w-14 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Verified Performance
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Every pick comes from a capper with a proven, fraud-proof track
                record.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex p-6 bg-accent/10 dark:bg-accent/20 rounded-3xl mb-6 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-accent/20">
                <Target className="h-14 w-14 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Real-Time Delivery
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Get picks instantly—before lines move—via your preferred
                channel.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex p-6 bg-primary/10 dark:bg-primary/20 rounded-3xl mb-6 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary/20">
                <BarChart3 className="h-14 w-14 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Full Transparency
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                See complete performance history, including ROI, CLV, and all
                past picks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Cappers Section */}
      <section className="py-24 px-4 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-primary/10 dark:bg-primary/20 text-primary border-primary/30 px-6 py-2 text-sm font-bold">
              For Cappers
            </Badge>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-foreground">
              Monetize Your Skill with Verification
            </h2>
            <p className="text-2xl text-muted-foreground font-medium max-w-3xl mx-auto">
              If you can prove your edge, you can earn on our platform. Here's
              how to get verified.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Path 1: Provers */}
            <Card className="bg-card border-2 border-primary/20 relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="pt-10 pb-10 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-primary/10 dark:bg-primary/20 rounded-2xl">
                    <TrendingUp className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">
                    Path 1: Become a Prover
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg mb-8">
                  For handicappers with a real track record.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Apply & Connect</p>
                      <p className="text-sm text-muted-foreground">
                        Submit your application and link your sportsbook account
                        (optional) or use our manual pick logger.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Build Your Record</p>
                      <p className="text-sm text-muted-foreground">
                        Log picks with real-time odds verification. We track
                        everything automatically.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Meet the Standard</p>
                      <p className="text-sm text-muted-foreground">
                        Show positive ROI and positive CLV over 500+ verified
                        bets.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Get Verified & Earn</p>
                      <p className="text-sm text-muted-foreground">
                        Once verified, set your subscription prices and start
                        building your following.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/register?type=capper">
                  <Button className="w-full btn-lime text-white font-bold text-lg py-6">
                    Apply as a Prover
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Path 2: Quants */}
            <Card className="bg-card border-2 border-accent/20 relative overflow-hidden group hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="pt-10 pb-10 relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-accent/10 dark:bg-accent/20 rounded-2xl">
                    <BarChart3 className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">
                    Path 2: Become a Quant
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg mb-8">
                  For algorithm builders with backtested models.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Submit Your Model</p>
                      <p className="text-sm text-muted-foreground">
                        Upload your algorithm code or logic to our secure
                        backtesting environment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Disclose Methodology</p>
                      <p className="text-sm text-muted-foreground">
                        Share your model's inputs and approach (proprietary
                        weighting stays private).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Pass Our Backtest</p>
                      <p className="text-sm text-muted-foreground">
                        We test your algorithm against years of historical odds
                        data.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Launch & Monetize</p>
                      <p className="text-sm text-muted-foreground">
                        Full backtest results go public. Your model generates
                        picks automatically.
                      </p>
                    </div>
                  </div>
                </div>

                <Link href="/register?type=capper">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6">
                    Apply as a Quant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card max-w-4xl mx-auto mt-16 border-2 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 dark:bg-primary/20 rounded-2xl">
                  <FileCheck className="h-10 w-10 text-primary shrink-0" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    What Cappers Earn
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                    You set your own subscription prices (weekly, monthly,
                    annual tiers). Sprinkle Bets takes a 15-20% platform fee.
                    The rest is yours.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    <span className="font-bold text-foreground">Example:</span> If
                    you charge $99/month and have 100 subscribers, you earn{" "}
                    <span className="font-bold text-accent text-xl">
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
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-6 text-foreground">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-2 border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <h3 className="font-bold text-2xl mb-4 text-foreground">
                  What makes Sprinkle Bets different from Dub Club or Winible?
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We're the only platform with{" "}
                  <span className="font-bold text-primary">
                    mandatory verification
                  </span>
                  . Dub Club and Winible let anyone sell picks. We require proof
                  of skill—either a verified track record or a backtested
                  algorithm. No exceptions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <h3 className="font-bold text-2xl mb-4 text-foreground">
                  What is Closing Line Value (CLV) and why does it matter?
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  CLV measures whether you're getting better odds than the
                  "closing line"—the final odds before a game starts.
                  Consistently beating the closing line is the strongest
                  indicator of long-term betting skill. It's the metric sharps
                  care about most.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <h3 className="font-bold text-2xl mb-4 text-foreground">
                  Can cappers fake their records?
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  No. Every pick is time-stamped and locked into our database
                  with verified odds from real sportsbooks. Picks can't be
                  edited or deleted after submission. It's mathematically
                  impossible to cheat the system.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <h3 className="font-bold text-2xl mb-4 text-foreground">
                  Do I need to share my full algorithm if I'm a Quant?
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  No. You disclose your model's{" "}
                  <span className="font-bold text-primary">inputs</span>{" "}
                  (e.g., "team efficiency, weather data") and{" "}
                  <span className="font-bold text-primary">methodology</span>{" "}
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
      <section className="relative py-32 px-4 overflow-hidden bg-primary/5 dark:bg-primary/10">
        {/* Animated Background Orbs */}
        <div
          className="absolute top-10 left-20 w-80 h-80 hero-orb hero-orb-lime"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 hero-orb hero-orb-black"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-foreground leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-2xl text-muted-foreground mb-12 font-medium">
            Join thousands of bettors and cappers who trust verification over
            hype.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/register">
              <Button
                size="lg"
                className="text-xl px-12 py-8 btn-lime font-bold"
              >
                Sign Up Free
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button
                size="lg"
                variant="outline"
                className="text-xl px-12 py-8 font-bold"
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
