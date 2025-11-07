import Image from "next/image";

export default function ProductExplanation() {
  return (
    <section className="section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="heading animate-fade-in-up">
            Here&apos;s How It Works
          </h2>
          <p className="subheading lg:text-2xl max-w-3xl mx-auto animate-fade-in-up-delay">
            The first marketplace where Sharps only get paid when their picks win. Funds are held in escrow until results are verified.
          </p>
        </div>

        {/* Product Screenshot Placeholder */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20 animate-fade-in-scale">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-primary/20 shadow-xl sm:shadow-2xl">
            <div className="aspect-video bg-linear-to-br from-background via-primary/5 to-background p-6 sm:p-8 lg:p-12">
              <div className="h-full flex items-center justify-center">
                <Image
                  src="/images/dashboard-example.png"
                  alt="Screenshot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          {/* Floating stats */}
          <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-card border-2 border-border rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg sm:shadow-xl animate-stagger-1">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Escrow Protection
                </div>
              </div>
              <div className="bg-card border-2 border-border rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg sm:shadow-xl animate-stagger-2">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  Win-Tied
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Payouts Only
                </div>
              </div>
              <div className="bg-card border-2 border-border rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg sm:shadow-xl animate-stagger-3">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  Instant
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Refunds on Loss
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three-column explanation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mt-16 sm:mt-20 lg:mt-24">
          <div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-3 sm:mb-4">
              01
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
              Sharps Post Picks
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Expert bettors create profiles and post live picks with sport, odds, description, and price per stake. Public analytics track their performance.
            </p>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-3 sm:mb-4">
              02
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
              You Stake on Picks
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Browse top-performing Sharps by sport, ROI, and win rate. Choose a pick and lock in your stake. Funds are held in escrow until results are verified.
            </p>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-3 sm:mb-4">
              03
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
              Win = Pay. Lose = Refund
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Game ends. Results posted. If WIN → Sharp gets paid (minus 10% fee). If LOSS → your funds are instantly returned to your balance. You never pay for losing advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
