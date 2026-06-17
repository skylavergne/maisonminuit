import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maison Minuit",
  description:
    "A visual design and communication studio for brands and companies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}