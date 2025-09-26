import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutWrapper from "./components/LayoutWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevoSuite - Enterprise Solutions Made Simple",
  description:
    "Streamline your business operations with DevoSuite's powerful, subscription-based ERP solution. Built for modern enterprises demanding efficiency, scalability, and reliability.",
  authors: [{ name: "Devolution PH" }],
  keywords: [
    "ERP, Enterprise Resource Planning, Business Management, Subscription Software, DevoSuite",
  ],
  openGraph: {
    title: "DevoSuite - Enterprise Solutions Made Simple",
    description:
      "Transform your business operations with our comprehensive ERP solution. Join thousands of companies streamlining their processes with DevoSuite.",
    type: "website",
    images: [
      "https://ik.imagekit.io/vah26qifw/Devolution%20PH/devosuite/assets/banner_logo_2_a_SPq14g0.png?updatedAt=1758694488288",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
