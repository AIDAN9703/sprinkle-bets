import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading animate-fade-in-pulse">
          Stop Losing to Fake Cappers
        </h2>
        <p className="subheading animate-fade-in-up-delay mb-6 sm:mb-8">
          Join thousands of bettors who demand proof. Start following verified
          experts today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up-delay-2">
          <Link href="/register">
            <Button size="lg" className="cta-primary w-full sm:w-auto">
              Get Started Free
            </Button>
          </Link>
          <Link href="/how-it-works">
            <Button
              size="lg"
              variant="outline"
              className="cta-secondary w-full sm:w-auto"
            >
              Learn How It Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
