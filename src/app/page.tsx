import Hero from "@/components/home/Hero";
import FeatureCards from "@/components/home/FeatureCards";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full">
      <Hero />
      <FeatureCards />
      <CallToAction />
    </main>
  );
}
