"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Início" },
  { href: "/django", label: "Admin Django" },
  { href: "/site", label: "Site Prontera" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="no-print sticky top-0 z-30 border-b bg-card/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="min-w-0">
          <p className="font-display text-xl leading-none text-primary">
            Bug Bash Prontera
          </p>
          <p className="mt-1 text-[11px] tracking-wide text-muted-foreground uppercase">
            Roteiros de teste
          </p>
        </Link>
        <nav aria-label="Documentos" className="flex flex-wrap items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-primary/15 text-primary underline decoration-accent decoration-2 underline-offset-4"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          {pathname !== "/" ? (
            <Button
              variant="outline"
              size="sm"
              className="ml-1"
              onClick={() => window.print()}
            >
              <Printer data-icon="inline-start" />
              Salvar PDF
            </Button>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
