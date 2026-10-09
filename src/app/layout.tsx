import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "EdgeMind AI | Privacy-Preserving On-Device Document Assistant",
  description:
    "100% on-device intelligent document assistant powered by fine-tuned SLMs and local Hybrid RAG. Zero cloud dependency, zero data egress, enterprise-grade air-gapped security.",
  keywords: [
    "On-device AI",
    "Local RAG",
    "EdgeMind AI",
    "Privacy AI",
    "llama.cpp Android",
    "Offline Document Assistant",
    "Zero-Trust AI",
    "GGUF INT4",
  ],
  authors: [{ name: "EdgeMind AI Team - Group P13" }],
  openGraph: {
    title: "EdgeMind AI | On-Device Intelligent Document Assistant",
    description: "Sovereign AI. Zero Cloud. Zero Data Leaks.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-grid-cyber antialiased">
        {children}
      </body>
    </html>
  );
}
