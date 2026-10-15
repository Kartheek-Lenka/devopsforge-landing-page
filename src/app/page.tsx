import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageView } from "@/components/page-view";
import { Hero } from "@/components/sections/hero";
import { Problem, Scenario, Workflow } from "@/components/sections/story";
import { Demo, Explore, Resources } from "@/components/sections/explore";
import { Audience, Faq, FinalCta } from "@/components/sections/convert";

export default function Home() {
  return (
    <>
      <PageView />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-lime focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-night"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Problem />
        <Workflow />
        <Explore />
        <Resources />
        <Scenario />
        <Demo />
        <Audience />
        <FinalCta />
        <Faq />
      </main>

      <Footer />
    </>
  );
}
