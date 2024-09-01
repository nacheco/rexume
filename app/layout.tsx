import type { Metadata } from "next";
import { Poppins, Gilda_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const gildaDisplay = Gilda_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gilda-display",
});

export const metadata: Metadata = {
  title: "Rexume - Free Resume Builder, No Sign-Up Required",
  description: "Create a professional resume in minutes with Rexume. No account needed, 100% free, and instant download.",
  keywords: "resume builder, free resume, no sign-up, instant download, professional resume",
  openGraph: {
    title: "Rexume - Free Resume Builder, No Sign-Up Required",
    description: "Create a professional resume in minutes with Rexume. No account needed, 100% free, and instant download.",
    images: [
      {
        url: "/images/SEO.png",
        width: 1200,
        height: 630,
        alt: "Rexume - Free Resume Builder",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-main ${poppins.variable} ${gildaDisplay.variable}`}>
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
