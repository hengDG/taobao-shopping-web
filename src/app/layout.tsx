import type { Metadata } from "next";
import { AppShell } from "../components/app-shell";
import "./globals.css";

import "./globals.css";

const previewImage =
  "https://play-lh.googleusercontent.com/5uVmNR71LD6-LHspJgdI4JGymI3qovFxlVtYHdPbSrJRPiRHyQkIxwYd_1bZqR8u5-5KJs3DE6NKJGMj6xSS";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://taobao-shopping-web.vercel.app"
  ),

  title: "Taobao Shopping Web",

  description:
    "Simple and reusable ecommerce web app for discovering and shopping Taobao products.",

  openGraph: {
    type: "website",
    url: "https://taobao-shopping-web.vercel.app",
    siteName: "Taobao Shopping Web",
    title: "Taobao Shopping Web",
    description:
      "Simple and reusable ecommerce web app for discovering and shopping Taobao products.",
    images: [
      {
        url: previewImage,
        alt: "Taobao Shopping Web",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Taobao Shopping Web",
    description:
      "Simple and reusable ecommerce web app for discovering and shopping Taobao products.",
    images: [previewImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
