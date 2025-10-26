import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
const JostFont = Jost({
  weight: "400",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={JostFont.className} lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
