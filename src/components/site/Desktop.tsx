import { evidence } from "@/lib/portfolio";
import { OsWindow } from "./OsWindow";

export function Desktop() {
  return (
    <section aria-label="Impact at a glance" className="halftone border-y-2 border-foreground px-3 py-3 sm:px-5 sm:py-5">
      <div className="relative border border-foreground/60 p-4 sm:p-8">
        <span className="os-title absolute left-0 top-0">HM.OS 13</span>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          {/* Evidence window */}
          <OsWindow title="impact.log — before → after" className="self-start lg:col-span-7" bodyClassName="p-0 bg-background">
            <div className="divide-y divide-foreground/80">
              {evidence.map((e, i) => (
                <div key={e.label} className="grid grid-cols-[1fr_auto] items-center gap-x-4 px-4 py-3">
                  <span className="pixel w-fit bg-foreground px-1.5 text-[1.15rem] text-background">{e.label}</span>
                  <span className="pixel text-[1.3rem]">
                    {e.from}% → <strong className="font-normal text-signal">{e.to}%</strong>
                  </span>
                  <div className="relative col-span-2 mt-2 h-3 border border-foreground">
                    <div className="absolute inset-y-0 left-0 bg-window-deep" style={{ width: `${e.from}%` }} />
                    <div
                      className="bar-grow absolute inset-y-0 left-0 bg-foreground"
                      style={{ width: `${e.to}%`, animationDelay: `${i * 120}ms`, clipPath: `inset(0 0 0 ${(e.from / e.to) * 100}%)` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="pixel border-t border-foreground bg-window px-4 py-1.5 text-[1.05rem]">
              Selected measured outcomes from shipped work
            </p>
          </OsWindow>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="flex flex-wrap items-start gap-6">
                <OsWindow title="KNOWLEDGE BASE" className="w-52">
                  <p className="display text-6xl">563</p>
                  <p className="pixel mt-1 text-[1.1rem]">articles audited for AI readiness</p>
                </OsWindow>
                <OsWindow title="RETIRED" className="w-44">
                  <p className="display text-6xl">93</p>
                  <p className="pixel mt-1 text-[1.1rem]">stale articles removed</p>
                </OsWindow>
            </div>
            <div className="flex flex-wrap gap-6 sm:pl-10">
              <OsWindow title="TEAMS" className="w-40">
                <p className="display text-6xl">34</p>
                <p className="pixel mt-1 text-[1.1rem]">scrum teams mapped</p>
              </OsWindow>
              <OsWindow title="ADOBE" className="w-44">
                <p className="display text-6xl">+21%</p>
                <p className="pixel mt-1 text-[1.1rem]">Premiere Pro trial sign-ups</p>
              </OsWindow>
            </div>
            <OsWindow title="RULES.SYS" className="max-w-sm">
              <p className="pixel text-[1.2rem] leading-tight">
                328 deterministic rules in code. Judgment stays with people. 83% bulk review efficiency.
              </p>
            </OsWindow>
          </div>
        </div>

        <div className="mt-8 flex items-end justify-between gap-4">
          <OsWindow title="Hari Mahendra" className="max-w-[260px]">
            <p className="pixel text-[1.1rem] leading-tight">
              Portfolio v2.0 · Built in Delhi-NCR. Some visuals redacted to protect customer data.
            </p>
          </OsWindow>
        </div>
      </div>
    </section>
  );
}
