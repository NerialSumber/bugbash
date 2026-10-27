"use client";

import { CheckItem } from "@/components/check-item";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Step({
  guide,
  id,
  n,
  title,
  children,
}: {
  guide: string;
  id: string;
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b last:border-b-0">
      <div className="flex items-start gap-3">
        <CheckItem storageKey={`${guide}:${id}`} />
        <Accordion className="min-w-0 flex-1">
          <AccordionItem value={id} className="border-0">
            <AccordionTrigger className="py-4 hover:no-underline">
              <span className="text-left">
                <span className="block text-xs font-semibold tracking-widest text-primary uppercase">
                  Passo {n}
                </span>
                <span className="font-display block text-2xl text-primary">
                  {title}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pb-6 text-foreground/90">
                {children}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
