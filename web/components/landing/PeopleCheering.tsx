import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PeopleCheering() {
  return (
    <section className="section">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden order-2 lg:order-1 animate-fade-in-right">
            <Image
              src="/images/people-cheering.png"
              alt="People celebrating wins"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 animate-fade-in-left">
            <h2 className="heading">
              Join Bettors Who Demand{" "}
              <span className="text-primary">Proof</span>
            </h2>
            <p className="subheading mb-6 sm:mb-8 leading-relaxed">
              Tired of fake cappers with photoshopped records? So were we.
              That&apos;s why every pick on our platform comes from someone
              who&apos;s proven they can beat the books.
            </p>
            <Link href="/marketplace">
              <Button size="lg" className="cta-primary w-full sm:w-auto">
                Browse Cappers
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
