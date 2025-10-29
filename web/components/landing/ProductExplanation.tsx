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
            A marketplace where skilled sports bettors sell their picks—but only
            after proving they can actually win.
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
                  Verified Bets Required
                </div>
              </div>
              <div className="bg-card border-2 border-border rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg sm:shadow-xl animate-stagger-2">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Fraud-Proof Records
                </div>
              </div>
              <div className="bg-card border-2 border-border rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg sm:shadow-xl animate-stagger-3">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                  Real-Time
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Pick Delivery
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
              Cappers Apply
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Anyone can apply, but only those who prove 500+ bets with positive
              ROI and CLV get approved. No fake records allowed.
            </p>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-3 sm:mb-4">
              02
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
              You Subscribe
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Browse verified cappers, check their full history, and subscribe
              to the ones that match your betting style.
            </p>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-3 sm:mb-4">
              03
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
              Get Picks Instantly
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Picks hit your phone the second they&apos;re posted. No delays, no
              missed opportunities, no excuses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
