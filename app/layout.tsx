import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import { icons } from "lucide-react";

export const metadata: Metadata = {
  title: "Inspired Institute | JEE, NEET & Science Coaching – Vadodara",
  description:
    "Expert coaching for Class 6–12, JEE, NEET, Olympiad & NTSE in Vadodara. Concept clarity, personal mentorship, and proven results.",
  icons: {icon: "/favicon.png"},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}