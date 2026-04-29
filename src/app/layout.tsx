import type { Metadata } from "next";
import { playfair } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "AcademiQuest",
  description: "Gamified study sessions and spaced review for better retention.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  );
}