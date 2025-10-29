import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Shield,
  Target,
  TrendingUp,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "About Us - Sprinkle Bets",
  description:
    "Learn about Sprinkle Bets' mission to bring trust and transparency to the sports betting content industry.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Company Overview (no hero) */}
      <section className="section">
        <div className="section-container max-w-4xl">
          <h1 className="heading">About Sprinkle Bets</h1>
          <p className="subheading mb-6 leading-relaxed">
            We’re building a trustworthy marketplace for sports betting content.
            Our mission is simple: make it easy to follow experts you can
            actually trust by requiring verifiable proof of skill.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Everything we do is anchored in transparency. Creators who sell on
            Sprinkle Bets must pass objective verification—either by
            demonstrating a profitable, verified track record, or by submitting
            a model that passes standardized backtesting.
          </p>
        </div>
      </section>

      {/* How We Verify */}
      <section className="section">
        <div className="section-container">
          <h2 className="heading">How Verification Works</h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-6">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-foreground">Path 1: Provers</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />{" "}
                    Real-time odds verification on every pick
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />{" "}
                    500+ graded bets with positive ROI
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />{" "}
                    Positive Closing Line Value (CLV)
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <h3 className="font-bold text-foreground">Path 2: Quants</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />{" "}
                    Standardized backtests on historical data
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />{" "}
                    Transparent methodology and inputs
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />{" "}
                    Full results published—wins and drawdowns
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            If a creator can’t pass one of these paths, they can’t sell on the
            platform.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="section">
        <div className="section-container">
          <h2 className="heading">Principles We Operate By</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="rounded-xl border p-5">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-foreground">Trust First</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Verification is mandatory, not a marketing claim.
              </p>
            </div>
            <div className="rounded-xl border p-5">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-foreground">
                  Transparent by Default
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                We publish real histories, including losses and cold streaks.
              </p>
            </div>
            <div className="rounded-xl border p-5">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-foreground">User Safety</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Responsible gaming is built-in, not bolted on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company details / Contact */}
      <section className="section">
        <div className="section-container max-w-4xl">
          <h2 className="heading">Company Details</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-4 text-sm text-muted-foreground">
            <div>
              <div className="font-bold text-foreground mb-1">What we are</div>
              <p>
                A marketplace for verified betting expertise. We don’t accept or
                place bets.
              </p>
            </div>
            <div>
              <div className="font-bold text-foreground mb-1">Who we serve</div>
              <p>
                Serious bettors who want convenience without compromising on
                proof of edge.
              </p>
            </div>
            <div>
              <div className="font-bold text-foreground mb-1">
                How to reach us
              </div>
              <p>
                For partnerships and press, contact{" "}
                <Link
                  href="/contact"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  our team
                </Link>
                .
              </p>
            </div>
            <div>
              <div className="font-bold text-foreground mb-1">
                Responsible gaming
              </div>
              <p>
                We provide tools and resources to help users stay in control at
                all times.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
