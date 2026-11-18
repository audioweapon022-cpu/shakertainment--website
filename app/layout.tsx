import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SHAKERTAINMENT | One Mind. Multiple Dimensions.",
  description: "Music, film, photography, fashion and culture by SHAKERTAINMENT.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
