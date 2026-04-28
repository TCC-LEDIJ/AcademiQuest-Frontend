import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AcademiQuest",
  description: "Gamified study sessions and spaced review for better retention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
