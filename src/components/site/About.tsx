import { CONTACT, portraitUrl, timeline } from "@/lib/portfolio";
import { Label, OsWindow } from "./OsWindow";

const team = [
  "Leads a working group of 3 writers.",
  "Trains 12 product designers in biweekly sessions on copy fundamentals and Vernacular.",
  "Partners with 4 UX engineers on content implementation and internal AI tools.",
  "Mentors 2 UX researchers on interview feedback sessions and friction-discovery forms.",
  "Designed the hiring assessment for technical writers.",
  "Led a team of 14 writers and editors at Naukri.com.",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-10 px-4 py-24 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <OsWindow title="hari.jpg" className="max-w-sm" bodyClassName="p-2">
            <img
              src={portraitUrl}
              alt="Portrait of Hari Mahendra"
              className="aspect-square w-full border border-foreground object-cover grayscale"
              loading="lazy"
            />
          </OsWindow>
        </div>
        <div className="lg:col-span-8">
          <Label className="text-signal">About</Label>
          <h2 className="display mt-4 text-[clamp(3rem,8vw,7rem)]">Hari Mahendra</h2>
          <p className="mt-8 max-w-[58ch] text-xl leading-snug">
            I started in newsrooms and health-tech, writing for millions of readers, and moved into product content as
            the work shifted from articles to interfaces. At Info Edge I led 14 writers and editors for Naukri.com. At
            Adobe I worked on help at portfolio scale. At Simpplr I lead content design, information architecture,
            AI agent voice, help, and the systems behind them as a senior individual contributor.
          </p>
          <p className="mt-4 text-muted-foreground">
            Master's in mass communication, AJKMCRC, Jamia Millia Islamia University.
          </p>

          <div className="mt-12 border-t-2 border-foreground">
            {timeline.map((t) => (
              <div
                key={t.org}
                className="grid grid-cols-1 gap-1 border-b border-foreground py-4 sm:grid-cols-[1fr_auto] sm:gap-6"
              >
                <p className="text-lg">
                  <strong className="font-semibold">{t.org}</strong>
                  <span className="text-muted-foreground"> — {t.role}</span>
                </p>
                <p className="pixel text-[1.25rem]">{t.years}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Label>Multiplying the team</Label>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {team.map((t) => (
                <li key={t} className="border-l-2 border-signal pl-3 leading-snug">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const hasAny = CONTACT.email || CONTACT.linkedin;
  return (
    <section id="contact" className="boot-sky px-4 py-28 text-background sm:px-8">
      <p className="text-center font-mono text-[11px] uppercase tracking-wide text-accent">Contact</p>
      <h2 className="display mx-auto mt-6 max-w-[14ch] text-center text-[clamp(3rem,9vw,8.5rem)]">
        Let's Make Your Product Say The Right Thing
      </h2>
      <div className="mt-14 flex flex-wrap justify-center gap-3">
        {CONTACT.email && (
          <a
            href={`mailto:${CONTACT.email}`}
            className="bg-accent px-5 py-3 text-lg font-semibold text-accent-foreground transition-colors hover:bg-background hover:text-foreground"
          >
            Email me
          </a>
        )}
        {CONTACT.linkedin && (
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border-2 border-background px-5 py-3 text-lg font-semibold transition-colors hover:bg-background hover:text-foreground"
          >
            LinkedIn
          </a>
        )}
        {!hasAny && (
          <p className="pixel text-center text-2xl text-accent">Content design leadership · Delhi-NCR, India</p>
        )}
      </div>
      <div className="mx-auto mt-24 flex max-w-5xl flex-wrap items-center justify-between gap-4 border-t border-background/30 pt-6 font-mono text-[11px]">
        <span>© 2026 Hari Mahendra</span>
        <span>Some visuals redacted or recreated to protect customer and company data.</span>
        <a href="#top" className="underline">Back to top</a>
      </div>
    </section>
  );
}
