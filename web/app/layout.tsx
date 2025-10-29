import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import RevealOnScroll from "@/components/RevealOnScroll";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sprinkle Bets - Verified Sports Betting Picks",
  description:
    "The only sports betting marketplace with 100% verified cappers. Trust the edge with proven performance and validated algorithms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // set theme before paint to avoid flash
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  try {
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = saved ? saved === 'dark' : prefersDark;
    if (isDark) { document.documentElement.classList.add('dark'); }
  } catch (e) {}
})();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Attach scroll-reveal observer */}
        <RevealOnScroll />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
