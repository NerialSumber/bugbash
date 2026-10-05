"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Início" },
  { href: "/django", label: "Cadastro" },
  { href: "/site", label: "Ver no site" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="no-print sticky top-0 z-30 border-b bg-card/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link href="/" className="min-w-0 shrink-0">
          <p className="font-display text-xl leading-none text-primary">
            Bug Bash Prontera
          </p>
          <p className="mt-1 text-[11px] tracking-wide text-muted-foreground uppercase">
            Teste em grupo do site
          </p>
        </Link>
        <nav
          aria-label="Documentos"
          className="flex items-center gap-1 overflow-x-auto"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "shrink-0 rounded-md px-2.5 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
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
              className="ml-1 shrink-0"
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
