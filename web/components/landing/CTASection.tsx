import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading animate-fade-in-pulse">
          Where Performance Pays
        </h2>
        <p className="subheading animate-fade-in-up-delay mb-6 sm:mb-8">
          Join the first marketplace where Sharps only earn when their picks win. No hype, just results.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up-delay-2">
          <Link href="/register">
            <Button size="lg" className="cta-primary w-full sm:w-auto">
              Get Started Free
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
