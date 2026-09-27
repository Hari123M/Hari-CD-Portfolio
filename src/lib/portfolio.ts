import rewardHome from "@/assets/pf/62df95646e488864296b8b12c2796073.asset.json";
import rewardAdmin from "@/assets/pf/0a375a8f51ad8db0f2989263ace3e4f6.asset.json";
import helpDefault from "@/assets/pf/4746f47c1f44d12a0db4a277d71dcd53.asset.json";
import helpSearch from "@/assets/pf/e9bac05aede9af5bbce33876b394fbee.asset.json";
import helpSima from "@/assets/pf/e53a5ef923e9f46858f2a9ef9fdb5090.asset.json";
import accordis from "@/assets/pf/c3e9fa925ba8e1ce41b9d7d1f2d39700.asset.json";
import collabMap from "@/assets/pf/675797c98f1e04aae35f585467c2c0b0.asset.json";
import errorMsg from "@/assets/pf/1b9a6e38f85afd5226c95b7a2c9399e9.asset.json";
import persona from "@/assets/pf/86116559256a5e38f0751935afb79e91.asset.json";
import fears from "@/assets/pf/78d3e51dbc18208f677bf4f0f4130642.asset.json";
import trialButton from "@/assets/pf/9ffd0993e95566707ceb31a27995da35.asset.json";
import trialFlow from "@/assets/pf/6633447f29c5c9a92788839c01781327.asset.json";
import helpxOld from "@/assets/pf/3348bc9310a1be48cb8e744962224f0c.asset.json";
import helpxNew from "@/assets/pf/a90731d93e4c0044c01fdaaadcfb9b67.asset.json";
import lybrate from "@/assets/pf/b52d7a11c846ac56b7cae725f48dd7d0.asset.json";
import naukri from "@/assets/pf/47d027b9db06fcb283adcb7f713314f3.asset.json";
import portrait from "@/assets/pf/982fb27a017f2bbdbe1e962d8c56305e.asset.json";

export const portraitUrl = portrait.url;

/** Fill these in to show the contact buttons. Left empty on purpose until provided. */
export const CONTACT = {
  email: "",
  linkedin: "",
};

export type Shot = { src: string; alt: string };

export type CaseStudy = {
  id: string;
  file: string;
  chapter: "IA" | "AI" | "SYSTEM" | "CRAFT";
  company: string;
  title: string;
  hook: string;
  role: string;
  facts: { k: string; v: string }[];
  moves: string[];
  judgment: string;
  outcome: { value: string; label: string }[];
  outcomeNote?: string;
  shots: Shot[];
};

export const chapters = [
  { key: "IA", label: "Information architecture", blurb: "Product flows, an in-app panel, a 563-article help center, and an AI-readiness audit." },
  { key: "AI", label: "AI in the workflow", blurb: "AI-assisted writing, Skill design at scale, and resolving P0 tickets with SIMA." },
  { key: "SYSTEM", label: "Content design system", blurb: "Vernacular, an AI agent's voice, and how rules get made." },
  { key: "CRAFT", label: "Hands-on microcopy", blurb: "Adobe, Lybrate and Naukri: words that moved behavior." },
] as const;

export const cases: CaseStudy[] = [
  {
    id: "help-panel",
    file: "HELP_PANEL.EXE",
    chapter: "IA",
    company: "Simpplr",
    title: "In-app help, shipped after 12 years in the backlog",
    hook: "Users had to leave the product, log in again and search a separate site. I led a native help panel from PRD to production.",
    role: "PRD author, prototype designer, end-to-end lead",
    facts: [
      { k: "Partners", v: "Product leadership, design, engineering, CX leadership" },
      { k: "Backend", v: "DevRev PLuG SDK" },
      { k: "Status", v: "Shipped in 4 phases" },
    ],
    moves: [
      "Wrote the PRD: launcher, search, assistant, ticketing, article rendering and phased rollout.",
      "Designed screen-to-content matching so help appears for the exact screen a user is on.",
      "Scoped the assistant narrow: answer when confident, hand off to a pre-filled ticket when not.",
      "Moved page-to-content mapping to the writing team, so a new mapping never needs a code change.",
    ],
    judgment:
      "The shortcut was a vendor widget bolted on top. I set two constraints: it must feel like Simpplr, and the assistant must know its limits. Both cost more to build — and both are why it gets used.",
    outcome: [
      { value: "0→43%", label: "Ticket deflection, first month" },
      { value: "63→76%", label: "Answer found, no escalation" },
      { value: "41→57%", label: "Release adoption" },
    ],
    outcomeNote: "The in-app help surface did not exist before launch.",
    shots: [
      { src: helpDefault.url, alt: "Help panel default view with search, knowledge base, tutorials and a path to a human" },
      { src: helpSearch.url, alt: "In-panel search with an AI answer grounded in linked articles" },
      { src: helpSima.url, alt: "Ask SIMA assistant view with suggested prompts" },
    ],
  },
  {
    id: "help-center",
    file: "KB_IA.MAP",
    chapter: "IA",
    company: "Simpplr",
    title: "A help center rebuilt for two readers: people and AI agents",
    hook: "563 articles structured around user intent, not engineering org charts — and made retrievable for four AI agents.",
    role: "IA lead, end to end",
    facts: [
      { k: "Scale", v: "563 articles, 500+ audited" },
      { k: "Mapped from", v: "34 scrum teams, 12 areas, 177+ features" },
      { k: "Platform", v: "Zendesk → DevRev migration" },
    ],
    moves: [
      "Defined 6 intent-based hubs: Getting started, Products, Admin and setup, Release notes, Developers, Support.",
      "Gave 8 product areas one repeatable pattern: Overview, Capabilities, Workflows, FAQs.",
      "Set the canonical rule: a shared capability like ABAC gets one home, with interlinks from every product that depends on it.",
      "Kept IA organized by intent, regardless of SKU packaging.",
    ],
    judgment:
      "The support platform suggested reusing its issue taxonomy for articles. I declined: an issue is created after launch, an article alongside the product. Merging them would make both worse.",
    outcome: [
      { value: "63→78%", label: "Search success" },
      { value: "28→37%", label: "Ticket deflection" },
      { value: "1,180→950", label: "Monthly support requests" },
    ],
    shots: [],
  },
  {
    id: "newsletter-audit",
    file: "NEWSLETTER_IA.AUD",
    chapter: "IA",
    company: "Simpplr",
    title: "Newsletter manager: an IA and copy audit across 85 screens",
    hook: "A manual audit against the content design system, scored with a rubric set before scoring, then rewritten and revalidated.",
    role: "Content audit, IA redesign, copy rewrite and validation",
    facts: [
      { k: "Scope", v: "85 screens, 107 copy items audited by hand" },
      { k: "Validation", v: "Open card sorting, tree testing, usability testing" },
    ],
    moves: [
      "Merged two chained dialogs and three competing names into one Access panel.",
      "Replaced a template picker and separate Create modal with one creation stepper.",
      "Reduced 12 concepts with competing labels to one term each.",
      "Scored one string and one defect at a time, with no partial credit.",
    ],
    judgment: "Near-perfect scores are marked as specification complete, not treated as proof of build fidelity. The audit stays honest about what content review can and cannot validate.",
    outcome: [
      { value: "6→94", label: "Content score, out of 100" },
      { value: "29→96", label: "IA score, out of 100" },
      { value: "−19%", label: "Time to find an item" },
    ],
    outcomeNote: "Direct-path rate rose 23% relatively; conversion rose 11% relatively after the IA changes shipped.",
    shots: [],
  },
  {
    id: "reward-store",
    file: "REWARDS_V2.FLW",
    chapter: "IA",
    company: "Simpplr",
    title: "Reward store v2: from gift cards to a full catalog",
    hook: "Location-gated shopping, single-page checkout, order tracking and an admin catalog — structured decision by decision.",
    role: "Content and IA partner to product and design",
    facts: [
      { k: "Flow", v: "Location → Home → Product → Checkout → Tracking" },
      { k: "Admin", v: "Hide or unhide by product, brand or category" },
    ],
    moves: [
      "Co-designed the shipped 9-row home structure with product and design across 4 rounds of iteration.",
      "Held order tracking to 3 states — the partner doesn't pass granular data, and Simpplr shouldn't carry that liability.",
      "Kept delivery copy generic on timing, so no promise outran what the partner can guarantee.",
      "Co-built the category drill-down that admins and employees share.",
    ],
    judgment:
      "Once someone redeems points, the experience turns personal. A delivery promise nobody can guarantee creates the wrong expectation — so the words stay honest about what the system knows.",
    outcome: [
      { value: "+70%", label: "Recognition rewards in UAT" },
      { value: "$157K", label: "Points redeemed in 3-month UAT" },
      { value: "0", label: "Customer setup steps" },
    ],
    outcomeNote: "Sandbox signal from 2 client organizations and 723 employees, not a production benchmark.",
    shots: [
      { src: rewardHome.url, alt: "Reward store home page with hero banners and price-range sections" },
      { src: rewardAdmin.url, alt: "Reward catalog admin categories tab with visibility states" },
    ],
  },
  {
    id: "ai-readiness",
    file: "AI_READY.AUD",
    chapter: "IA",
    company: "Simpplr",
    title: "Auditing 563 articles for AI readiness",
    hook: "A ticket-driven audit prioritized what customers could not resolve, rather than relying on page views to decide what deserved attention.",
    role: "Designed the audit method, the agent, and the IA",
    facts: [
      { k: "Scope", v: "563 articles" },
      { k: "Tool", v: "DevRev Agent Studio" },
      { k: "Output", v: "Prioritization agent, retired-article list, retrieval-friendly IA" },
    ],
    moves: [
      "Separated support tickets by the product area or feature they actually belonged to.",
      "Mapped ticket volume to exact article URLs and the section, removal, or rewrite each needed.",
      "Prioritized by unresolved customer impact rather than page views.",
      "Defined one canonical owner per topic and explicit relationships between products, capabilities, workflows, and troubleshooting.",
    ],
    judgment: "Page views show what people already found. Ticket volume reveals where customers had to ask a human because the content did not answer them, which is the more useful signal for limited rewrite time.",
    outcome: [
      { value: "93", label: "Stale articles retired" },
      { value: "187", label: "Restructured for AI retrieval" },
      { value: "23→41%", label: "SIMA thumbs up" },
    ],
    outcomeNote: "SIMA thumbs down shifted from 18% to 14% on the audited content.",
    shots: [],
  },
  {
    id: "ai-writing",
    file: "UX_WRITER.AI",
    chapter: "AI",
    company: "Simpplr",
    title: "AI-assisted UX writing, with a review gate nothing skips",
    hook: "Product ships monthly. I built tools that give models a writer's context — and a gate that checks every output.",
    role: "Designer and builder of the tools and workflows",
    facts: [
      { k: "Tools", v: "Claude and Claude Skills, Figma, Lovable, Cowork" },
      { k: "Timeline", v: "20 days build, 15 days testing" },
    ],
    moves: [
      "UX writing tool: design system, voice rules and the PRD encoded as Skills, with Figma connected.",
      "Automated bulk review against Vernacular: approved copy ships, flagged copy returns for a human fix.",
      "Enablement workflow: demo videos cut into frames a model can read — content ready a week before UAT.",
      "Review gate: diff test against source, flagged variance review, hands-on product test.",
    ],
    judgment:
      "A model can match a pattern. It can't tell if the product behaves the way the PRD says, or how someone feels at step four of setup. The gate exists for those two gaps. If a PRD says minimal disruption, the copy never says no downtime.",
    outcome: [{ value: "83%", label: "Bulk review efficiency" }],
    outcomeNote: "People chose the Skill over the standalone tool because it remembers earlier work. Context beats features.",
    shots: [],
  },
  {
    id: "accordis",
    file: "ACCORDIS.SYS",
    chapter: "AI",
    company: "Simpplr",
    title: "Two engines, one lifecycle: rules in code, judgment with people",
    hook: "One AI Skill holding 80+ rules skipped checks at scale. I split it: 328 deterministic rules in code, judgment in a Skill.",
    role: "Designed both engines, owns the evals",
    facts: [
      { k: "Accordis", v: "328 deterministic rules" },
      { k: "Vernacular Skill", v: "Generative, CDS-aligned judgment" },
      { k: "Tested at", v: "1, 10, 20, 50, 60 strings per run" },
      { k: "Timeline", v: "45 days, Jul to Aug 2026" },
    ],
    moves: [
      "Built a 60-string golden set, every rule labeled in at least two strings, run 3× at 5 batch sizes.",
      "Moved every one-right-answer rule into code — code doesn't skip a check.",
      "Fixed chunk size to where recall started to drop; every string shows proof of what was checked.",
      "Hardened: fixed sequence, required finding shape, logged fallbacks, one precedence order for conflicts.",
    ],
    judgment:
      "The real call wasn't building two tools — it was deciding what belongs in each. Over-automating judgment or under-automating rules is exactly what broke the first version.",
    outcome: [
      { value: "79→88", label: "Average score, 20-string set" },
      { value: "6 / 12", label: "Blockers / warnings caught" },
    ],
    shots: [{ src: accordis.url, alt: "Accordis bulk review output with summary stats and per-row rule findings" }],
  },
  {
    id: "p0-resolution",
    file: "P0_RESOLVE.AGENT",
    chapter: "AI",
    company: "Simpplr",
    title: "Training SIMA on P0 tickets without rewriting the full inventory",
    hook: "A year of duplicate P0 tickets became one live FAQ and a subscription-aware resolution path, instead of a manual rewrite of hundreds of articles.",
    role: "Designed the workflow and both agents",
    facts: [
      { k: "Timeline", v: "15 days, Jun 2026" },
      { k: "Systems", v: "DevRev Copilot, Rovo, Jira, Confluence, Slack, GitHub, SIMA" },
    ],
    moves: [
      "Reviewed a year of P0 tickets and used an agent to consolidate duplicate reports into the smaller set of underlying questions.",
      "Fed status, fixes, recent discussion, and code-level changes into a live FAQ.",
      "Trained SIMA on that FAQ with guardrails from the DevRev team.",
      "Mapped each new ticket to the customer's organization and subscription before auto-resolution.",
    ],
    judgment: "The inventory was not the real problem. A year of tickets showed a much smaller set of repeated questions, so the right fix was keeping those answers current rather than rewriting everything.",
    outcome: [
      { value: "−41%", label: "P0 tickets within 40 days" },
      { value: "1", label: "Live, continuously updated FAQ" },
    ],
    shots: [],
  },
  {
    id: "vernacular",
    file: "VERNACULAR.DS",
    chapter: "SYSTEM",
    company: "Simpplr",
    title: "Vernacular: one content system for product UI and an AI agent",
    hook: "A toast, an empty state and an agent reply sounded like three companies. I built one system so everyone makes the same call.",
    role: "Author and owner, end to end",
    facts: [
      { k: "Output", v: "HTML reference site, Claude Skill, review tool" },
      { k: "Covers", v: "15 UI components, 9 conversational patterns" },
      { k: "Timeline", v: "45 days, Jul to Aug 2026" },
    ],
    moves: [
      "Foundations: voice pillars, tone spectrum and a register test anyone can run on one string.",
      "15 component guides, each rule with good/bad examples and a badge tracing it to a foundation.",
      "9 conversational patterns for the agent, plus a decision framework for when no rule fits.",
      "Made it the single source for both the review tool and the Skill.",
    ],
    judgment:
      "The system bans em dashes in prose — but a data table still needs a mark for an empty cell. That's a placeholder, not punctuation. Rules need an owner who can tell those apart, and document why.",
    outcome: [
      { value: "83%", label: "Automated review efficiency" },
      { value: "1", label: "Source for people and models" },
    ],
    shots: [],
  },
  {
    id: "agent-voice",
    file: "MAGNUS_VOICE.TXT",
    chapter: "SYSTEM",
    company: "Simpplr",
    title: "Giving an AI-native product a voice",
    hook: "Magnus has no non-AI fallback — the agent is the product. I wrote its voice and behavior guide, then extended it to v1.1.",
    role: "Author of the guide and the v1.1 extension",
    facts: [
      { k: "Output", v: "15-page guide, 5-page daily reference, leadership summary" },
      { k: "Status", v: "v1.1 approved and live" },
    ],
    moves: [
      "Split words into three layers: agent conversation, system copy, documentation.",
      "Added a second character for conversation and help; the flight director keeps system copy.",
      "Every response answers: what does it know, what can it do, what actually happened.",
      "Set an authority ladder — know, suggest, offer, authorize, act, report.",
    ],
    judgment:
      "The model can phrase “Your workflow has been updated” — it doesn't get to decide whether that's true. The product's real state decides truth; content design decides what must never be claimed.",
    outcome: [
      { value: "v1.1", label: "Approved and live in Magnus" },
      { value: "9", label: "Conversational patterns derived" },
    ],
    shots: [],
  },
  {
    id: "adobe",
    file: "HELPNEXT.ADB",
    chapter: "CRAFT",
    company: "Adobe · 2022–2025",
    title: "Adobe HelpNext: single-intent help at portfolio scale",
    hook: "Content strategy for Creative Cloud and enterprise products — plus error copy and a research-led Premiere Pro trial button.",
    role: "Senior Content Strategist",
    facts: [
      { k: "Partners", v: "UX, research, PM, engineering, support, localization" },
      { k: "Tools", v: "AEM, Figma, Miro, Jira, Confluence" },
    ],
    moves: [
      "Single-intent articles: one question each — better search, reuse and AI surfacing.",
      "Rewrote error messages to name shared responsibility and point at what happens next.",
      "Built the trial button from a persona and mapped fears, placed inside real help articles.",
      "Mapped the three click paths so content and engineering stayed in sync.",
    ],
    judgment:
      "A long article that answers five questions ranks for none of them. Splitting by intent gives search a match, teams a reusable answer, and AI a clean section to quote.",
    outcome: [
      { value: "+21%", label: "Trial sign-ups, 3 months" },
      { value: "−28%", label: "Error-related support requests" },
      { value: "+45%", label: "Organic traffic on owned articles" },
    ],
    shots: [
      { src: helpxOld.url, alt: "The older HelpX experience with nested topics and long pages" },
      { src: helpxNew.url, alt: "Redesigned help with contextual navigation and breadcrumbs" },
      { src: errorMsg.url, alt: "Error message before and after" },
      { src: persona.url, alt: "User persona for a freelance content creator" },
      { src: fears.url, alt: "Mapped fears about starting a Premiere Pro trial" },
      { src: trialButton.url, alt: "Trial button inside a Premiere Pro help article" },
      { src: trialFlow.url, alt: "Three click-path scenarios for the trial button" },
      { src: collabMap.url, alt: "Cross-functional collaboration map" },
    ],
  },
  {
    id: "lybrate",
    file: "LOGIN.LYB",
    chapter: "CRAFT",
    company: "Lybrate",
    title: "A healthcare login screen, rewritten for empathy",
    hook: "“Not feeling well?” greeted every visitor — and offered only Log in. Two small changes, a big shift.",
    role: "UX writer",
    facts: [
      { k: "Before", v: "“Not feeling well? Book hassle free doctor appointment.” Log in only." },
      { k: "After", v: "“Feel better faster. See your doctor now.” Log in and Sign up." },
    ],
    moves: [
      "Welcoming instead of symptom-first — no assumption that every visitor is unwell.",
      "Added Sign up beside Log in, so new visitors had an obvious next step.",
      "Shipped with design, engineering and localization.",
    ],
    judgment:
      "The fix wasn't clever copy. It was noticing the screen had quietly excluded everyone who hadn't signed up yet.",
    outcome: [
      { value: "−43%", label: "Login drop-offs" },
      { value: "+37%", label: "New registrations" },
      { value: "+26%", label: "Login completion" },
    ],
    shots: [{ src: lybrate.url, alt: "Lybrate login screen before and after" }],
  },
  {
    id: "naukri",
    file: "RECRUITER.NKR",
    chapter: "CRAFT",
    company: "Naukri · Info Edge",
    title: "Recruiter interest: from a dead end to a clickable action",
    hook: "The notification worked. The screen it opened didn't — tiles weren't clickable and showed almost nothing.",
    role: "Content strategy, led a team of 14",
    facts: [{ k: "Surface", v: "App + email notifications, recruiter action page" }],
    moves: [
      "Named the gap between what the notification promised and what the screen delivered.",
      "Redesigned tiles to carry recruiter details, JD and organization, with a clear reply CTA.",
    ],
    judgment: "A notification's job is to bring someone back with intent. Fixing the destination, not just the alert, closed the loop.",
    outcome: [{ value: "Shipped", label: "Loop closed for both sides" }],
    shots: [{ src: naukri.url, alt: "Naukri recruiter interest notification and redesigned tiles" }],
  },
];

export const evidence = [
  { label: "Help search success", from: 63, to: 78 },
  { label: "Answer found, no escalation", from: 63, to: 76 },
  { label: "Release adoption", from: 41, to: 57 },
  { label: "SIMA thumbs up", from: 23, to: 41 },
];

export const timeline = [
  { org: "Simpplr", role: "Principal UX Content Strategist & Senior Technical Writer", years: "2025 — now" },
  { org: "Adobe", role: "Senior Content Strategist, HelpNext", years: "2022 — 2025" },
  { org: "Info Edge (Naukri.com)", role: "Assistant Manager, Content Strategy", years: "2019 — 2022" },
  { org: "Lybrate, NewsPiQ, Saur Energy, Zee Media", role: "Content and UX writing", years: "2012 — 2019" },
];
