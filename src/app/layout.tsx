import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bug bash do Espaço Prontera",
  description:
    "O que é o bug bash, o que queremos saber e o passo a passo para cada pessoa se cadastrar, criar algo e ver como aparece no site.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
