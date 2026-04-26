import type { Metadata } from "next";
import { LandingPage } from "@/features/marketing-landing";

export function generateMetadata(): Metadata {
  return {
    title: "AcademiQuest | Study Better, Remember Longer",
    description:
      "Plan focused sessions, track streaks, and schedule Ebbinghaus-powered reviews in one gamified dashboard.",
  };
}

export default function MarketingHomePage() {
  return <LandingPage />;
}
