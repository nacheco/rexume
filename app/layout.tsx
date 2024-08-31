import type { Metadata } from "next";
import { Poppins, Gilda_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Rexume - Create Professional Resumes in Minutes",
  description: "Build a standout resume with our free, easy-to-use platform. Craft your professional story and land your dream job with Resumate.",
  keywords: "resume builder, professional resume, free resume template, job application, career tools",
  openGraph: {
    title: "Rexume - Create Professional Resumes in Minutes",
    description: "Build a standout resume with our free, easy-to-use platform. Craft your professional story and land your dream job with Resumate.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rexume - Professional Resume Builder",
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
      </body>
    </html>
  );
}
