import { useState } from "react";
import { cn } from "@/lib/utils";
import { Label, OsWindow } from "./OsWindow";

const samples = [
  {
    surface: "Delete dialog · button",
    before: "Yes",
    after: "Delete workflow",
    rule: "P0 · A destructive confirm repeats the exact verb and object. Never a bare “Yes.”",
  },
  {
    surface: "Toast",
    before: "Your Settings Have Been Saved!",
    after: "Settings saved",
    rule: "P0 · No exclamation points in system copy. Sentence case by default.",
  },
  {
    surface: "Empty state · UK-based designer",
    before: "Personalise your colour theme",
    after: "Personalize your color theme",
    rule: "P0 · US English is the standard. Regional spelling is caught in code, every time.",
  },
  {
    surface: "AI agent reply",
    before: "There is no such policy.",
    after: "I didn't find a matching policy.",
    rule: "Judgment · Say what the agent knows, not more. Absence of a result isn't proof of absence.",
  },
  {
    surface: "AI agent · action",
    before: "Done! I paused them.",
    after: "Pausing these will stop their scheduled runs. Continue?",
    rule: "Judgment · Authority ladder: know → offer → authorize → act → report. Ask before destructive acts.",
  },
];

const ladder = [
  { k: "Know", v: "8 workflows failed in the last 24 hours." },
  { k: "Offer", v: "I can pause the 8 workflows." },
  { k: "Authorize", v: "Pausing these will stop their scheduled runs. Continue?" },
  { k: "Report", v: "8 workflows paused." },
];

export function StringCheck() {
  const [i, setI] = useState(0);
  const s = samples[i] ?? samples[0]!;
  return (
    <section id="check" className="scroll-mt-10 bg-accent px-4 py-24 text-accent-foreground sm:px-8">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Label>How the work actually runs</Label>
          <h2 className="display mt-6 text-[clamp(2.8rem,6.5vw,6rem)]">Rules In Code. Judgment With People.</h2>
          <p className="mt-8 max-w-[44ch] text-xl font-medium leading-snug">
            Accordis runs 328 deterministic rules on every string — no model decides whether a check happens. The
            Vernacular Skill handles tone and clarity. Content designers sign off. Try a sample string.
          </p>
        </div>

        <div className="halftone border-2 border-foreground p-4 sm:p-8 lg:col-span-7">
          <OsWindow title="accordis — review" bodyClassName="bg-background p-0">
            <div className="flex flex-wrap gap-px border-b border-foreground bg-foreground">
              {samples.map((x, idx) => (
                <button
                  key={x.surface}
                  onClick={() => setI(idx)}
                  className={cn(
                    "pixel flex-1 whitespace-nowrap px-2 py-1 text-[1.05rem]",
                    idx === i ? "bg-accent text-accent-foreground" : "bg-window hover:bg-background",
                  )}
                >
                  string_{String(idx + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
            <div key={i} className="space-y-4 p-5 font-mono text-[13px] leading-relaxed">
              <p className="text-muted-foreground">$ accordis check --surface "{s.surface}"</p>
              <div className="grid grid-cols-[4.5rem_1fr] gap-x-3 gap-y-2">
                <span className="text-muted-foreground">input</span>
                <span className="line-through decoration-destructive decoration-2">“{s.before}”</span>
                <span className="text-muted-foreground">flag</span>
                <span className="typed">{s.rule}</span>
                <span className="text-muted-foreground">output</span>
                <span className="w-fit bg-accent px-1 font-medium text-accent-foreground">“{s.after}”</span>
              </div>
              <p className="text-muted-foreground">
                ✓ checked · shape valid · logged <span className="caret">▌</span>
              </p>
            </div>
          </OsWindow>
          <p className="mt-3 font-mono text-[10px]">Sample strings illustrating real Accordis and Magnus voice rules.</p>

          <OsWindow title="magnus — authority ladder" className="mt-6 sm:ml-16" bodyClassName="bg-background">
            <ol className="space-y-2">
              {ladder.map((l, idx) => (
                <li key={l.k} className="grid grid-cols-[6.5rem_1fr] items-baseline gap-2">
                  <span className="pixel w-fit bg-foreground px-1.5 text-[1.1rem] text-background">
                    {idx + 1}. {l.k}
                  </span>
                  <span className="text-[15px]">“{l.v}”</span>
                </li>
              ))}
            </ol>
          </OsWindow>
        </div>
      </div>

      <div className="mt-20 grid gap-8 border-t border-accent-foreground pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["01", "Pick the tool for the task", "Prototyping, UI text, research synthesis or review. Keep what makes work better, drop the rest."],
          ["02", "Give models real context", "Skills, glossaries, design system rules and journey context. The screen, the step, the terms."],
          ["03", "Review before anything ships", "Diff tests, flagged review, hands-on testing against the real product."],
          ["04", "Design the feature, not the docs", "Join product and design early, so content shapes how AI features behave."],
        ].map(([n, t, b]) => (
          <div key={n} className="border-l border-accent-foreground pl-3">
            <p className="pixel text-2xl">{n}</p>
            <p className="mt-6 text-xl font-semibold leading-tight tracking-tight">{t}</p>
            <p className="mt-2 leading-snug">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
