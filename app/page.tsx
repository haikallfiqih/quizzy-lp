"use client";

import Achievement from "@/components/sections/achievement";
import Challenge from "@/components/sections/challenge";
import Community from "@/components/sections/community";
import Demo from "@/components/sections/demo";
import Feature from "@/components/sections/feature";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import MobileApp from "@/components/sections/mobile-app";
import PremiumFeature from "@/components/sections/premium-feature";
import Pricing from "@/components/sections/pricing";
import Roadmap from "@/components/sections/roadmap";
import Testimoni from "@/components/sections/testimoni";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Daily Challenges Section */}
      <Challenge />
      {/* Achievements Section */}
      <Achievement />
      {/* Pricing Section */}
      <Pricing />
      {/* Interactive Demo Section */}
      <Demo />
      {/* Features Showcase Section */}
      <Feature />
      {/* Social Proof Section */}
      <Testimoni />
      {/* Study Path Section */}
      <Roadmap />
      {/* Mobile App Section */}
      <MobileApp />
      {/* Premium Features Section */}
      <PremiumFeature />
      {/* Community Section */}
      <Community />
      {/* Footer */}
      <Footer />
    </div>
  );
}
