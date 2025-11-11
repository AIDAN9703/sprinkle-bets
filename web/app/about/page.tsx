export const metadata = {
  title: "About — Pay2Win",
  description:
    "The first performance-based sports betting marketplace where Sharps only get paid when their picks win.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen relative">
      <section className="relative section pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="section-container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-left">
            About Pay<span className="text-primary">2</span>Win
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 leading-relaxed">
            <p className="text-lg">
              Pay2Win is the world&apos;s first performance-based sports betting
              marketplace, built on a simple principle: expert bettors should
              only earn when their picks actually win.
            </p>

            <p>
              The sports betting influencer economy has long been broken. Most
              &quot;Sharps&quot; profit by selling picks regardless of outcomes,
              leaving followers to pay for losing advice with no recourse.
              There&apos;s no accountability, no verified performance system,
              and the space is saturated with scammers and fabricated track
              records. Betting communities have been built on talk, not trust.
            </p>

            <p>
              We set out to change that. Pay2Win introduces win-tied payouts:
              when fans stake money behind a Sharp&apos;s pick, those funds are
              held in escrow until results are verified. If the pick wins, the
              Sharp gets paid from the escrowed funds. If it loses, funds are
              instantly returned to users&apos; accounts. This makes Pay2Win the
              first platform where winning literally pays — for both sides.
            </p>

            <p>
              For fans and bettors, this means you only pay when picks win. No
              more scams or losses from fake Sharps. You get verified
              performance with transparent win rates and records, plus a
              community where you can support your favorite Sharps and share
              wins.
            </p>

            <p>
              For Sharps and creators, this means earning real money from real
              wins. Your income is performance-based and scales with your
              success. You build credibility through public leaderboards and
              stats that track your record, and each win boosts your exposure on
              the platform feed.
            </p>

            <p>
              Our mission is to create a transparent, merit-driven sports
              betting ecosystem that rewards accuracy, not hype. We give
              everyday fans access to proven picks and give experts a way to
              earn based purely on performance. It&apos;s the natural evolution
              of the sports betting creator economy — the first marketplace
              where success is measurable, verified, and rewarded instantly.
            </p>

            <p className="text-foreground font-semibold">
              Pay2Win = Trust + Incentive Alignment + Transparency.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
