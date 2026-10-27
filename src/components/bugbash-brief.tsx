import Link from "next/link";
import { AudienceNotice } from "@/components/audience-notice";
import { buttonVariants } from "@/components/ui/button";
import { REPORT_FORM_URL, SITE_URL } from "@/lib/links";

const WANT_TO_KNOW = [
  "Calendário e lista de eventos carregam o mês?",
  "No perfil, foto, tópicos de “O que faz” e o botão da pessoa aparecem como foram preenchidos?",
  "Depois de mudar um texto no painel, o site atualizou?",
  "No celular, o site abriu pelo WhatsApp sem a tela sair para o lado?",
  "Alguma página ficou em branco, cortada ou com um botão que não abre?",
];

export function BugbashBrief({ variant = "full" }: { variant?: "full" | "short" }) {
  if (variant === "short") {
    return (
      <section className="mt-6 space-y-3">
        <AudienceNotice />
        <p className="text-sm">
          <Link href="/" className="font-medium text-primary underline">
            Ver o caminho
          </Link>
        </p>
      </section>
    );
  }

  return (
    <section className="mt-8 space-y-4">
      <AudienceNotice />
      <div className="rounded-2xl bg-white p-5 ring-1 ring-foreground/10">
        <h2 className="font-display text-2xl text-primary">O que cada pessoa faz</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
          {WANT_TO_KNOW.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed">
          <li>
            Visitante: abra o{" "}
            <a
              href={SITE_URL}
              className="font-medium text-primary underline"
              target="_blank"
              rel="noreferrer"
            >
              site
            </a>{" "}
            e siga o{" "}
            <Link href="/site" className="font-medium text-primary underline">
              roteiro do site
            </Link>
            . Não entre no Django.
          </li>
          <li>
            Dev ou organização: o{" "}
            <Link href="/django" className="font-medium text-primary underline">
              roteiro do painel
            </Link>{" "}
            cria pessoa, evento e sala com o seu nome. Não crie um usuário novo.
          </li>
          <li>No celular, abra o mesmo link pelo WhatsApp.</li>
          <li>
            Se algo sair diferente, registre no{" "}
            <a
              href={REPORT_FORM_URL}
              className="font-medium text-primary underline"
              target="_blank"
              rel="noreferrer"
            >
              formulário
            </a>
            : o que fez, o que esperava, o que aconteceu e um print.
          </li>
        </ol>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/site" className={buttonVariants()}>
            Começar pelo site
          </Link>
          <Link href="/django" className={buttonVariants({ variant: "outline" })}>
            Painel, só devs e organização
          </Link>
        </div>
      </div>
    </section>
  );
}
