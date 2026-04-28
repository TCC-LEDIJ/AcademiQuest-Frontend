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

export function LandingPage() {
  return (
    <main>
      <div>
        <header>
          <div>
            <span />
            <span>AcademiQuest</span>
          </div>

          <nav>
            <a href="/login">logar</a>
            <a href="/register">registrar</a>
          </nav>
        </header>
      </div>
    </main>
  );
}
