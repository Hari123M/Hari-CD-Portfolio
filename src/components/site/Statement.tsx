import { Label } from "./OsWindow";

const cols = [
  {
    label: "Not copy decks",
    body: "Most content work starts at the string. Mine starts at the structure — who needs what, where, and what the product actually knows — then writes the string last.",
  },
  {
    label: "Words as a system",
    body: "Content design systems, IA and review engines that let 34 teams and several AI agents make the same call on the same sentence.",
  },
];

const small = [
  { label: "Decisions, not strings", body: "Every case shows the call I made and why." },
  { label: "Humans in the loop", body: "AI drafts and checks. People decide." },
  { label: "Measured", body: "Deflection, search, adoption, sign-ups." },
];

export function Statement() {
  return (
    <section className="bg-accent px-5 pb-28 pt-20 text-accent-foreground sm:px-8">
      <div className="crop px-2 py-10">
        <h2 className="display mx-auto max-w-[13ch] text-center text-[clamp(3rem,9.5vw,9rem)]">
          Words Are Product Infrastructure
        </h2>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-12">
        {cols.map((c) => (
          <div key={c.label} className="border-l border-accent-foreground pl-3 md:col-span-4">
            <Label>{c.label}</Label>
            <p className="mt-10 text-[1.35rem] font-medium leading-[1.25] tracking-tight">{c.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
        {small.map((s) => (
          <div key={s.label} className="border-l border-accent-foreground pl-3">
            <Label className="text-[10px]">{s.label}</Label>
            <p className="mt-6 text-lg font-medium leading-tight">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="crop mt-28 px-2 py-8">
        <p className="display text-[clamp(3rem,10vw,10rem)]">
          563 Articles.
          <br />
          177+ Features.
        </p>
        <p className="mt-4 font-mono text-[11px] font-medium">
          *One help center, 34 scrum teams, 12 functional areas, 6 intent-based hubs.{" "}
          <a href="#work" className="underline">
            (See how)
          </a>
        </p>
      </div>
    </section>
  );
}
