import Image from "next/image";
import HomePage from "@/app/core/pages/HomePage";
import FeatureSection from "@/app/core/pages/FeaturesSection";
import AboutSection from "@/app/core/pages/AboutSection";
import DemoPage from "@/app/core/pages/DemoPage";

export default function Home() {
  return (
      <>
        <HomePage />
          <AboutSection />
        <FeatureSection/>
          <DemoPage/>
      </>

  );
}
