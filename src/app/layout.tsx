import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  description: "Streamline your business operations with DevoSuite's powerful, subscription-based ERP solution. Built for modern enterprises demanding efficiency, scalability, and reliability.",
  authors: [{ name: "Devolution PH" }],
  keywords: ["ERP, Enterprise Resource Planning, Business Management, Subscription Software, DevoSuite"],
  openGraph: {
    title: "DevoSuite - Enterprise Solutions Made Simple",
    description: "Transform your business operations with our comprehensive ERP solution. Join thousands of companies streamlining their processes with DevoSuite.",
    type: "website",
  }
};

{/* <meta property="og:title" content="DevoSuite - Enterprise Solutions Made Simple" />
<meta property="og:description" content="Transform your business operations with our comprehensive ERP solution. Join thousands of companies streamlining their processes with DevoSuite." />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@devosuite" />
<meta name="twitter:title" content="DevoSuite - Enterprise Solutions Made Simple" />
<meta name="twitter:description" content="Powerful ERP solution for modern enterprises. Start your free trial today." />
<meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" /> */}

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
        {children}
      </body>
    </html>
  );
}
