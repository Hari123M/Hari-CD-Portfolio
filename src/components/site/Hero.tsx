import { OsWindow } from "./OsWindow";

export function Hero() {
  return (
    <section id="top" className="relative">
      {/* boot screen */}
      <div className="boot-sky relative flex min-h-[420px] items-start justify-center px-4 pb-24 pt-20 sm:min-h-[460px]">
        <div className="w-full max-w-[380px] space-y-6">
          <OsWindow title="Sept 2026 • HM.OS News" className="rise">
            <div className="pixel space-y-2 py-1 text-center text-[1.25rem] leading-tight">
              <p>HARI MAHENDRA</p>
              <p>content design leadership portfolio</p>
              <p className="pt-1 text-muted-foreground">enterprise SaaS · AI products</p>
              <a
                href="#work"
                className="mt-2 block bg-foreground py-1.5 text-background transition-colors hover:bg-signal"
              >
                Open the case files
              </a>
            </div>
          </OsWindow>
          <OsWindow title="Currently • Simpplr" className="rise translate-y-6 [animation-delay:150ms] sm:ml-10">
            <p className="pixel py-1 text-center text-[1.2rem] leading-tight">
              Principal UX Content Strategist &amp; Senior Technical Writer
              <span className="caret">_</span>
            </p>
          </OsWindow>
        </div>
      </div>

      {/* headline */}
      <div className="relative px-5 pb-24 pt-20 sm:px-10">
        <p className="mx-auto flex max-w-2xl items-center justify-center gap-2 text-center text-[15px] font-medium sm:text-lg">
          <span>Hari Mahendra</span>
          <span aria-hidden className="hidden flex-1 overflow-hidden whitespace-nowrap tracking-[0.2em] sm:block">
            ........................................
          </span>
          <span>Content design, 13+ years</span>
        </p>
        <h1 className="display mx-auto mt-10 max-w-[14ch] text-center text-[clamp(3.2rem,10.5vw,10rem)]">
          I Design The Words, Structure, And Systems Behind Complex Software
        </h1>
        <p className="mx-auto mt-10 max-w-[46ch] text-center text-lg leading-snug text-muted-foreground sm:text-xl">
          Content designer and UX content strategist with 13+ years across enterprise SaaS, creative tools,
          ad-tech, and health-tech. I make product content clear for people and ready for AI to use.
        </p>
        <div className="mt-14 text-center">
          <a href="#work" className="display link-bar text-[clamp(2.2rem,5vw,4rem)]">
            See The Work
          </a>
        </div>
      </div>
    </section>
  );
}
