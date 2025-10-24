import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
const UbuntuFont = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={UbuntuFont.className} lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
