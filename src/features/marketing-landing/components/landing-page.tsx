import Link from "next/link";

const highlights = [
  {
    title: "Adaptive Study Sessions",
    description:
      "Choose your method, start a focused sprint, and log results in a timeline built for deliberate practice.",
  },
  {
    title: "Spaced Review Radar",
    description:
      "Surface what to revisit next with Ebbinghaus-inspired intervals so difficult topics never go cold.",
  },
  {
    title: "XP, Streaks, and Badges",
    description:
      "Earn momentum through measurable progress loops that reward consistency over cramming.",
  },
];

const stats = [
  { value: "4.6x", label: "Average weekly review consistency" },
  { value: "92%", label: "Students report clearer revision focus" },
  { value: "18m", label: "Typical focused session length" },
];

const animationDelays = ["", "motion-safe:delay-75", "motion-safe:delay-150"];

export function LandingPage() {
  return (
    <main className="relative overflow-hidden px-6 pb-20 pt-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <header className="flex items-center justify-between">
          <div className="inline-flex items-center gap-3 reveal-up">
            <span className="h-8 w-8 rounded-lg bg-[color:var(--sun)]" />
            <span className="font-[var(--font-heading)] text-lg font-semibold tracking-tight">
              AcademiQuest
            </span>
          </div>

          <nav className="reveal-up hidden items-center gap-6 text-sm font-medium sm:flex">
            <a href="#features" className="opacity-80 transition hover:opacity-100">
              Features
            </a>
            <a href="#impact" className="opacity-80 transition hover:opacity-100">
              Impact
            </a>
            <Link
              href="/login"
              className="rounded-full border border-black/10 bg-[color:var(--surface)] px-4 py-2 transition hover:-translate-y-0.5"
            >
              Sign in
            </Link>
          </nav>
        </header>

        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-7">
            <p className="reveal-up inline-flex rounded-full border border-black/10 bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
              Learning Engine for serious students
            </p>

            <h1 className="reveal-up-delay max-w-2xl font-[var(--font-heading)] text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Turn every study block into measurable progress.
            </h1>

            <p className="reveal-up-delay-2 max-w-xl text-base leading-relaxed text-black/75 sm:text-lg">
              AcademiQuest combines focused sessions, spaced repetition, and gamified feedback into
              one workflow designed to improve retention without burnout.
            </p>

            <div className="reveal-up-delay-2 flex flex-wrap gap-3">
              <Link
                href="/register"
                className="rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Start your quest
              </Link>
              <a
                href="#features"
                className="rounded-full border border-black/20 bg-white/70 px-6 py-3 text-sm font-semibold transition hover:bg-white"
              >
                Explore features
              </a>
            </div>
          </div>

          <div className="reveal-up-delay relative rounded-3xl border border-black/10 bg-white/70 p-5 shadow-[0_20px_45px_rgba(14,27,42,0.12)] backdrop-blur">
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-2xl bg-[color:var(--coral)]/20" />
            <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-[color:var(--mint)]/20" />

            <div className="relative space-y-4">
              <div className="rounded-2xl bg-[color:var(--ink)] p-5 text-white">
                <p className="text-xs uppercase tracking-[0.14em] text-white/70">Today</p>
                <p className="mt-2 text-2xl font-bold">2 sessions completed</p>
                <p className="mt-2 text-sm text-white/80">+120 XP and 1 badge unlocked</p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-white p-3">
                    <p className="font-[var(--font-heading)] text-xl font-bold">{stat.value}</p>
                    <p className="mt-1 text-xs leading-snug text-black/65">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <article
              key={item.title}
              className={`reveal-up rounded-2xl border border-black/10 bg-[color:var(--surface)] p-6 ${animationDelays[index] ?? ""}`}
            >
              <h2 className="font-[var(--font-heading)] text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-black/70">{item.description}</p>
            </article>
          ))}
        </section>

        <section
          id="impact"
          className="rounded-3xl border border-black/10 bg-gradient-to-r from-white/75 to-white/50 p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/65">Impact</p>
          <h3 className="mt-2 max-w-2xl font-[var(--font-heading)] text-3xl font-bold leading-tight">
            Replace chaotic revision with a clear loop: study, review, level up.
          </h3>
        </section>
      </div>
    </main>
  );
}
