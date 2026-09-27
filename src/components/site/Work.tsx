import { useState } from "react";
import { cases, chapters, type CaseStudy } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import { Label, OsWindow } from "./OsWindow";

type Filter = "ALL" | CaseStudy["chapter"];

function CaseDetail({ c }: { c: CaseStudy }) {
  const [shot, setShot] = useState(0);
  const active = c.shots[shot];
  return (
    <OsWindow title={`${c.file} — ${c.company}`} bodyClassName="bg-background p-0" className="rise" key={c.id}>
      <div className="space-y-8 p-5 sm:p-8">
        <div>
          <Label className="text-signal">{chapters.find((x) => x.key === c.chapter)?.label}</Label>
          <h3 className="display mt-3 text-[clamp(2rem,4vw,3.4rem)] leading-[0.92]">{c.title}</h3>
          <p className="mt-5 max-w-[60ch] text-lg leading-snug text-muted-foreground">{c.hook}</p>
        </div>

        {/* outcome strip */}
        <div className="grid grid-cols-2 border-2 border-foreground sm:grid-cols-3">
          {c.outcome.map((o) => (
            <div key={o.label} className="border-foreground p-4 [&:not(:last-child)]:border-r">
              <p className="display text-4xl sm:text-5xl">{o.value}</p>
              <p className="pixel mt-1 text-[1.1rem] leading-tight">{o.label}</p>
            </div>
          ))}
        </div>
        {c.outcomeNote && <p className="-mt-5 font-mono text-[11px] text-muted-foreground">{c.outcomeNote}</p>}

        {active && (
          <figure>
            <div className="border-2 border-foreground bg-window">
              <img src={active.src} alt={active.alt} loading="lazy" className="max-h-[520px] w-full object-contain" />
            </div>
            <figcaption className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-[11px] text-muted-foreground">{active.alt}</span>
              {c.shots.length > 1 && (
                <span className="flex gap-1">
                  {c.shots.map((s, i) => (
                    <button
                      key={s.src}
                      onClick={() => setShot(i)}
                      aria-label={`Show image ${i + 1}`}
                      className={cn(
                        "pixel size-7 border border-foreground text-[1rem]",
                        i === shot ? "bg-foreground text-background" : "bg-background hover:bg-accent",
                      )}
                    >
                      {i + 1}
                    </button>
                  ))}
                </span>
              )}
            </figcaption>
          </figure>
        )}

        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <Label>What I decided</Label>
            <ol className="mt-4 space-y-3">
              {c.moves.map((m, i) => (
                <li key={m} className="grid grid-cols-[2rem_1fr] gap-2 text-[1.05rem] leading-snug">
                  <span className="pixel text-[1.2rem] text-signal">{String(i + 1).padStart(2, "0")}</span>
                  <span>{m}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-5 md:col-span-2">
            <div className="border-l-2 border-foreground pl-3">
              <Label>Role</Label>
              <p className="mt-1 text-[1.05rem] font-medium leading-snug">{c.role}</p>
            </div>
            {c.facts.map((f) => (
              <div key={f.k} className="border-l-2 border-foreground pl-3">
                <Label>{f.k}</Label>
                <p className="mt-1 text-[1.05rem] leading-snug">{f.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-foreground p-5 text-background sm:p-7">
          <p className="pixel text-[1.15rem] text-accent">&gt; where_human_judgment_mattered</p>
          <p className="mt-3 text-xl font-medium leading-snug tracking-tight">{c.judgment}</p>
        </div>
      </div>
    </OsWindow>
  );
}

export function Work() {
  const [filter, setFilter] = useState<Filter>("ALL");
  const list = filter === "ALL" ? cases : cases.filter((c) => c.chapter === filter);
  const [openId, setOpenId] = useState(cases[0]!.id);
  const open = cases.find((c) => c.id === openId) ?? cases[0]!;

  const pick = (f: Filter) => {
    setFilter(f);
    const first = f === "ALL" ? cases[0]! : cases.find((c) => c.chapter === f);
    if (first) setOpenId(first.id);
  };

  return (
    <section id="work" className="scroll-mt-10 px-4 py-24 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="display text-[clamp(3rem,8vw,7.5rem)]">
          Case Files
          <span className="align-top font-mono text-base font-medium tracking-normal"> ({cases.length})</span>
        </h2>
        <p className="max-w-sm text-lg leading-snug text-muted-foreground">
          Pick a file. Each one shows the problem, the calls I made, the proof, and where human judgment beat
          the shortcut.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-1.5" role="tablist" aria-label="Filter case studies">
        {(["ALL", ...chapters.map((c) => c.key)] as Filter[]).map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => pick(f)}
            className={cn(
              "border-2 border-foreground px-3 py-1 text-[15px] font-medium transition-colors",
              filter === f ? "bg-foreground text-background" : "bg-background hover:bg-accent",
            )}
          >
            {f === "ALL" ? "All files" : chapters.find((c) => c.key === f)?.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-12">
        <OsWindow title="C:/PORTFOLIO/FILES" className="lg:sticky lg:top-12 lg:col-span-4" bodyClassName="p-0 bg-background">
          <ul>
            {list.map((c) => {
              const on = c.id === open.id;
              return (
                <li key={c.id} className="border-b border-foreground/80 last:border-b-0">
                  <button
                    onClick={() => {
                      setOpenId(c.id);
                      if (window.innerWidth < 1024) document.getElementById("case-detail")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={cn(
                      "grid w-full grid-cols-[1fr_auto] gap-x-3 px-4 py-3 text-left transition-colors",
                      on ? "bg-accent" : "hover:bg-muted",
                    )}
                  >
                    <span className="pixel text-[1.15rem]">
                      {on ? "▶ " : ""}
                      {c.file}
                    </span>
                    <span className="font-mono text-[10px] uppercase text-muted-foreground">{c.company.split(" ")[0]}</span>
                    <span className="col-span-2 mt-0.5 text-[15px] font-medium leading-snug">{c.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </OsWindow>

        <div id="case-detail" className="scroll-mt-12 lg:col-span-8">
          <CaseDetail c={open} />
        </div>
      </div>
    </section>
  );
}
