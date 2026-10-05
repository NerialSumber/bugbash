import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { REPORT_FORM_URL, SITE_URL } from "@/lib/links";

const WANT_TO_KNOW = [
  "O cadastro foi fácil de achar e de preencher?",
  "A coisa que você cadastrou apareceu no site?",
  "Nome, foto, data e texto apareceram completos?",
  "Alguma página ficou em branco, cortada ou com um botão que não abre?",
];

export function BugbashBrief({ variant = "full" }: { variant?: "full" | "short" }) {
  if (variant === "short") {
    return (
      <section className="mt-8 rounded-2xl bg-white p-5 ring-1 ring-foreground/10">
        <h2 className="font-display text-2xl text-primary">O que é este teste</h2>
        <p className="mt-2 text-[15px] leading-relaxed">
          Um bug bash é um teste em grupo. Cada pessoa se cadastra no painel,
          cadastra uma coisa com o próprio nome e abre o site para ver se ela
          apareceu. O que queremos saber é se isso foi fácil e se a informação
          saiu certa.
        </p>
        <p className="mt-3 text-sm">
          <Link href="/" className="font-medium text-primary underline">
            Ver o objetivo completo
          </Link>
        </p>
      </section>
    );
  }

  return (
    <section className="mt-8 space-y-4">
      <div className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl bg-white p-5 ring-1 ring-foreground/10">
          <h2 className="font-display text-2xl text-primary">O que é um bug bash</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/90">
            É um teste em grupo. Várias pessoas usam o site ao mesmo tempo,
            como visitantes de verdade, para descobrir o que não funciona.
            Serve para qualquer pessoa, mesmo quem não trabalha com tecnologia.
            Se um botão não abre, uma página fica em branco ou algo que você
            cadastrou não aparece, isso já vale anotar.
          </p>
        </article>
        <article className="rounded-2xl bg-white p-5 ring-1 ring-foreground/10">
          <h2 className="font-display text-2xl text-primary">O objetivo</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground/90">
            Ver se uma pessoa consegue entrar na plataforma, cadastrar uma
            informação e encontrar essa informação no site, do jeito que
            preencheu.
          </p>
        </article>
        <article className="rounded-2xl bg-white p-5 ring-1 ring-foreground/10">
          <h2 className="font-display text-2xl text-primary">O que queremos saber</h2>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
            {WANT_TO_KNOW.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="rounded-2xl bg-white p-5 ring-1 ring-foreground/10">
        <h2 className="font-display text-2xl text-primary">O que cada pessoa faz</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-[15px] leading-relaxed">
          <li>
            Cadastre-se no painel. O passo a passo está no{" "}
            <Link href="/django" className="font-medium text-primary underline">
              roteiro de cadastro
            </Link>
            . Entre com o usuário e a senha que estão lá e crie um acesso com o
            seu nome.
          </li>
          <li>
            Cadastre uma coisa sua: uma pessoa da rede, um evento ou uma sala.
            Coloque seu primeiro nome no título, para a gente saber de quem é.
          </li>
          <li>
            Abra o{" "}
            <a
              href={SITE_URL}
              className="font-medium text-primary underline"
              target="_blank"
              rel="noreferrer"
            >
              site
            </a>{" "}
            e procure o que você acabou de cadastrar. O{" "}
            <Link href="/site" className="font-medium text-primary underline">
              roteiro do site
            </Link>{" "}
            mostra onde olhar.
          </li>
          <li>
            Se não aparecer, ou aparecer diferente do que você preencheu,
            registre no{" "}
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
          <Link href="/django" className={buttonVariants()}>
            Começar pelo cadastro
          </Link>
          <Link href="/site" className={buttonVariants({ variant: "outline" })}>
            Ver como aparece no site
          </Link>
        </div>
      </div>
    </section>
  );
}
