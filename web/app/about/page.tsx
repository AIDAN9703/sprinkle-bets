import {
  Shield,
  Target,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Users
} from "lucide-react";

export const metadata = {
  title: "About Us - Sprinkle Bets",
  description:
    "Learn about Sprinkle Bets' mission to bring trust and transparency to the sports betting content industry.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="section">
        <div className="section-container max-w-4xl text-center">
          <h1 className="heading">Our Mission</h1>
          <p className="subheading mt-4">
            To build the most trusted marketplace for sports betting content by
            demanding <span className="text-primary">verifiable proof</span> of
            skill.
          </p>
        </div>
      </div>

      <div className="section-container max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="border border-border rounded-xl p-8">
            <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              Trust First
            </h3>
            <p className="text-muted-foreground">
              Verification is mandatory. No exceptions.
            </p>
          </div>
          <div className="border border-border rounded-xl p-8">
            <Target className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              Transparent by Default
            </h3>
            <p className="text-muted-foreground">
              We publish real histories, including losses.
            </p>
          </div>
          <div className="border border-border rounded-xl p-8">
            <Users className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">
              User Safety
            </h3>
            <p className="text-muted-foreground">
              Responsible gaming is built-in, not an afterthought.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-container max-w-4xl text-center">
          <h2 className="heading">How Verification Works</h2>
          <p className="subheading mt-4">
            If a creator can’t pass one of these paths, they can’t sell on the
            platform.
          </p>
        </div>
      </div>

      <div className="section-container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-border rounded-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Path 1: Provers
              </h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <span>500+ graded bets with positive ROI</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <span>Positive Closing Line Value (CLV)</span>
              </li>
            </ul>
          </div>
          <div className="border border-border rounded-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <BarChart3 className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">
                Path 2: Quants
              </h3>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <span>Standardized backtests on historical data</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                <span>Transparent methodology and inputs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}