import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abebe Fentaw | IT & Software Professional",
  description:
    "Portfolio of Abebe Fentaw, Computer Science Graduate and IT & Software Professional.",
  keywords: [
    "Abebe Fentaw",
    "Computer Science",
    "IT Support",
    "System Administrator",
    "Software Developer",
    "Full-Stack Developer",
    "Web Developer"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
