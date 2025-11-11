"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading mb-4 sm:mb-6">
            Ready to Bet on <span className="text-primary">Performance</span>?
          </h2>
          <p className="subheading mb-8 sm:mb-10 max-w-2xl mx-auto">
            Join the first marketplace where Sharps only earn when their picks
            win. No hype. No upfront payments for losing advice. Just verified
            results and aligned incentives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-lg px-8 py-6"
              >
                Browse Sharps
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
