import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Zap } from "lucide-react";

export default function RealTimePicks() {
  return (
    <section className="section">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-left">
            <h2 className="heading">
              Get Picks <span className="text-primary">The Second</span> They
              Drop
            </h2>
            <p className="subheading mb-6 sm:mb-6 leading-relaxed">
              Never miss a winning opportunity. Our platform delivers picks
              instantly to your phone, Discord, Telegram, or SMS the moment
              they're posted.
            </p>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li className="flex items-start gap-3">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-base sm:text-lg">
                  Push notifications for time-sensitive bets
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-base sm:text-lg">
                  Multi-channel delivery (SMS, Discord, Telegram)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-base sm:text-lg">
                  Mobile-optimized for betting on the go
                </span>
              </li>
            </ul>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="cta-secondary w-full sm:w-auto"
              >
                Learn More
              </Button>
            </Link>
          </div>
          <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden order-1 lg:order-2 animate-fade-in-scale">
            <Image
              src="/images/guy-looking-at-phone.png"
              alt="Getting picks on mobile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
