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
              Only Pay When{" "}
              <span className="text-primary">You Win</span>
            </h2>
            <p className="subheading mb-6 sm:mb-8 leading-relaxed">
              No more paying upfront for losing advice. Stake on a Sharp&apos;s pick — funds are held in escrow. If they win, they get paid. If they lose, your money is returned instantly.
            </p>
            <Link href="/marketplace">
              <Button size="lg" className="cta-primary w-full sm:w-auto">
                Browse Sharps
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
