import type { Metadata } from "next";
import { Manrope, Schoolbell } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const schoolbell = Schoolbell({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bug Bash Prontera — roteiros de teste",
  description:
    "Roteiros passo a passo, com prints reais, para testar o admin Django e o site do Espaço Prontera.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${schoolbell.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
