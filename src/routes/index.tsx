import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Desktop } from "@/components/site/Desktop";
import { Statement } from "@/components/site/Statement";
import { Work } from "@/components/site/Work";
import { StringCheck } from "@/components/site/StringCheck";
import { About, Contact } from "@/components/site/About";

const title = "Hari Mahendra — Principal Content Designer, Enterprise SaaS & AI";
const description =
  "Content design leadership portfolio: information architecture, content design systems, AI agent voice and review engines, with measured outcomes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Header />
      <Hero />
      <Desktop />
      <Statement />
      <Work />
      <StringCheck />
      <About />
      <Contact />
    </main>
  );
}
