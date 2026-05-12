import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Product SEO Grader – Grade Your Store SEO Instantly",
  description: "Analyze your Shopify product pages for SEO issues, missing alt text, poor titles, and get one-click fixes. Built for store owners with 50+ products."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7157902e-a611-4154-aa9d-d432d0e367de"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
