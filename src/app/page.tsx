import HeroSection from "@/components/HeroSection";
import SiteHeader from "@/components/SiteHeader";
import HeroBackground from "@/components/ui/HeroBackground";

export default function Home() {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center font-sans">
      <HeroBackground />
      <SiteHeader />
      <HeroSection />
    </main>
  );
}
