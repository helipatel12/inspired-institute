import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inspired Institute | JEE, NEET & Science Coaching",
  description:
    "Expert coaching for Class 6–12, JEE, NEET, Olympiad & NTSE in Vadodara. Concept clarity, personal mentorship, and proven results.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}