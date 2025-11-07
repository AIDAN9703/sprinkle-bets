import {
  Target,
  TrendingUp,
  CheckCircle2,
  Users,
  Zap,
  DollarSign,
  Award,
  ArrowRight,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Pay2Win — Company Overview",
  description:
    "Pay2Win is the first performance-based sports betting creator marketplace where Sharps only get paid when their picks win.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="section pt-16 sm:pt-24">
        <div className="section-container max-w-4xl text-center">
          <h1 className="heading">Company Overview: Pay2Win</h1>
          <p className="subheading mt-4 text-2xl">
            ⚡️ The world&apos;s first performance-based sports betting creator
            marketplace, where expert bettors (&quot;Sharps&quot;) only get paid
            when their picks win — aligning incentives between creators and
            their followers.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="section bg-card/50">
        <div className="section-container max-w-4xl text-center">
          <Target className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="heading text-3xl md:text-4xl mb-4">
            🎯 Mission Statement
          </h2>
          <p className="subheading text-lg">
            To create a transparent, merit-driven sports betting ecosystem that
            rewards accuracy, not hype — giving everyday fans access to proven
            picks and giving experts a way to earn based purely on performance.
          </p>
        </div>
      </div>

      {/* Problem */}
      <div className="section">
        <div className="section-container max-w-4xl">
          <h2 className="heading text-3xl md:text-4xl mb-6">🔍 Problem</h2>
          <p className="subheading mb-4">
            The sports betting influencer economy is broken:
          </p>
          <ul className="space-y-3 text-muted-foreground mb-6">
            <li className="flex gap-3">
              <span className="text-destructive">•</span>
              <span>
                Most &quot;Sharps&quot; profit by selling picks regardless of
                outcomes.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-destructive">•</span>
              <span>Followers lose trust after paying for losing advice.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-destructive">•</span>
              <span>
                There&apos;s no accountability or verified performance system.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-destructive">•</span>
              <span>
                The space is saturated with scammers and fake track records.
              </span>
            </li>
          </ul>
          <p className="text-lg font-semibold text-foreground">
            Result: Betting communities are built on talk, not trust.
          </p>
        </div>
      </div>

      {/* Solution */}
      <div className="section bg-card/50">
        <div className="section-container max-w-4xl">
          <h2 className="heading text-3xl md:text-4xl mb-6">💡 Solution</h2>
          <p className="subheading mb-6">
            Pay2Win introduces win-tied payouts:
          </p>
          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-primary pl-6 py-2">
              <p className="text-lg font-semibold text-foreground mb-2">
                Sharps only earn when their pick actually wins.
              </p>
              <p className="text-muted-foreground">
                Fans stake money behind a Sharp&apos;s pick — but those funds
                are held in escrow until results are verified.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-border rounded-xl p-6 bg-background">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">
                    If the pick wins
                  </h3>
                </div>
                <p className="text-muted-foreground">→ the Sharp gets paid.</p>
              </div>
              <div className="border border-border rounded-xl p-6 bg-background">
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="h-6 w-6 text-destructive" />
                  <h3 className="text-xl font-bold text-foreground">
                    If it loses
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  → funds are instantly returned to users.
                </p>
              </div>
            </div>
          </div>
          <p className="text-lg font-semibold text-primary">
            This makes Pay2Win the first platform where winning literally pays —
            for both sides.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="section">
        <div className="section-container max-w-5xl">
          <h2 className="heading text-3xl md:text-4xl mb-8 text-center">
            🔁 How It Works
          </h2>

          {/* Fan Side */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              Fan / Bettor Side
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">1.</div>
                <h4 className="text-lg font-semibold mb-2">Load Funds</h4>
                <p className="text-muted-foreground">
                  Add money to your Pay2Win account (via Stripe or crypto).
                </p>
              </div>
              <div className="border border-border rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">2.</div>
                <h4 className="text-lg font-semibold mb-2">Browse Sharps</h4>
                <p className="text-muted-foreground">
                  See top-performing Sharps by sport, ROI, and win rate.
                </p>
              </div>
              <div className="border border-border rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">3.</div>
                <h4 className="text-lg font-semibold mb-2">Stake on a Pick</h4>
                <p className="text-muted-foreground">
                  Choose a Sharp&apos;s live pick and lock in the price (e.g.
                  $10).
                </p>
              </div>
              <div className="border border-border rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">4.</div>
                <h4 className="text-lg font-semibold mb-2">
                  Game Ends → Result Posted
                </h4>
                <p className="text-muted-foreground">
                  <span className="text-primary font-semibold">If WIN</span> →
                  your funds go to the Sharp (minus platform fee).
                  <br />
                  <span className="text-destructive font-semibold">
                    If LOSS
                  </span>{" "}
                  → your funds are unlocked back into your balance.
                </p>
              </div>
            </div>
            <p className="mt-4 text-lg font-semibold text-foreground">
              You&apos;re never paying upfront for losing advice again.
            </p>
          </div>

          {/* Sharp Side */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-primary" />
              Sharp / Creator Side
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-border rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">1.</div>
                <h4 className="text-lg font-semibold mb-2">Create a Profile</h4>
                <p className="text-muted-foreground">
                  Verified, public analytics + pick history.
                </p>
              </div>
              <div className="border border-border rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">2.</div>
                <h4 className="text-lg font-semibold mb-2">Post Picks</h4>
                <p className="text-muted-foreground">
                  Choose sport, odds, description, and price per backer (e.g. $5
                  per stake).
                </p>
              </div>
              <div className="border border-border rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">3.</div>
                <h4 className="text-lg font-semibold mb-2">Followers Stake</h4>
                <p className="text-muted-foreground">
                  Funds are locked in escrow as users buy in.
                </p>
              </div>
              <div className="border border-border rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">4.</div>
                <h4 className="text-lg font-semibold mb-2">
                  Game Ends → Results Graded
                </h4>
                <p className="text-muted-foreground">
                  <span className="text-primary font-semibold">If WIN</span> →
                  Sharp collects all stakes (minus 10% Pay2Win fee).
                  <br />
                  <span className="text-destructive font-semibold">
                    If LOSS
                  </span>{" "}
                  → Users&apos; funds return to their accounts.
                </p>
              </div>
            </div>
            <p className="mt-4 text-lg font-semibold text-foreground">
              The more you win, the more you earn — and the more your reputation
              grows.
            </p>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="section bg-card/50">
        <div className="section-container max-w-5xl">
          <h2 className="heading text-3xl md:text-4xl mb-8 text-center">
            🧲 Value Proposition
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                For Fans:
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>
                    Only pay when you win. No more scams or losses from fake
                    Sharps.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>
                    Verified performance. Transparent win rates & records.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>
                    Community competition. Support your favorite Sharps and
                    share wins.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                For Sharps:
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>
                    Earn real money from real wins. Performance-based income.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>
                    Build credibility. Public leaderboards & stats track your
                    record.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>
                    Scale audience. Each win boosts exposure on the platform
                    feed.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Monetization */}
      <div className="section">
        <div className="section-container max-w-4xl">
          <h2 className="heading text-3xl md:text-4xl mb-8 text-center">
            💰 Monetization Model
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-xl p-6">
              <DollarSign className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Performance Fee (10%)
              </h3>
              <p className="text-muted-foreground">
                Platform takes 10% from winning payouts to Sharps.
              </p>
            </div>
            <div className="border border-border rounded-xl p-6">
              <Award className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Premium Verification Tiers
              </h3>
              <p className="text-muted-foreground">
                Verified Sharps can subscribe for boosted placement and
                analytics tools.
              </p>
            </div>
            <div className="border border-border rounded-xl p-6">
              <Zap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Sponsored Events / Leagues
              </h3>
              <p className="text-muted-foreground">
                Brands can sponsor &quot;Win Pools&quot; or challenges between
                Sharps.
              </p>
            </div>
            <div className="border border-border rounded-xl p-6">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Affiliate Sportsbook Links
              </h3>
              <p className="text-muted-foreground">
                Earn commissions via partner sportsbook integrations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Edge */}
      <div className="section bg-card/50">
        <div className="section-container max-w-5xl">
          <h2 className="heading text-3xl md:text-4xl mb-8 text-center">
            📊 Competitive Edge
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-bold text-foreground">
                    Platform
                  </th>
                  <th className="text-left p-4 font-bold text-foreground">
                    How They Monetize
                  </th>
                  <th className="text-left p-4 font-bold text-foreground">
                    Weakness
                  </th>
                  <th className="text-left p-4 font-bold text-primary">
                    Pay2Win Advantage
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold text-foreground">Patreon</td>
                  <td className="p-4 text-muted-foreground">Subscriptions</td>
                  <td className="p-4 text-muted-foreground">
                    Paid regardless of value
                  </td>
                  <td className="p-4 text-primary font-semibold">
                    Only pay on results
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold text-foreground">
                    Pickit / CappersMall
                  </td>
                  <td className="p-4 text-muted-foreground">Pay per pick</td>
                  <td className="p-4 text-muted-foreground">No verification</td>
                  <td className="p-4 text-primary font-semibold">
                    Verified results
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold text-foreground">
                    Betstamp
                  </td>
                  <td className="p-4 text-muted-foreground">Tracking only</td>
                  <td className="p-4 text-muted-foreground">No monetization</td>
                  <td className="p-4 text-primary font-semibold">
                    We merge tracking + monetization
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-foreground">Twitter</td>
                  <td className="p-4 text-muted-foreground">
                    Free / unverified
                  </td>
                  <td className="p-4 text-muted-foreground">
                    No accountability
                  </td>
                  <td className="p-4 text-primary font-semibold">
                    Win-based credibility
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="section">
        <div className="section-container max-w-4xl text-center">
          <h2 className="heading text-3xl md:text-4xl mb-6">🧩 Summary</h2>
          <p className="subheading text-xl mb-8">
            Pay2Win = Trust + Incentive Alignment + Transparency.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            It&apos;s the natural evolution of the sports betting creator
            economy — the first marketplace where success is measurable,
            verified, and rewarded instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="cta-primary">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button size="lg" variant="outline">
                Browse Sharps
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
