import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { REPORT_FORM_URL } from "@/lib/links";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
        Espaço Prontera
      </p>
      <h1 className="font-display mt-2 max-w-3xl text-4xl text-primary sm:text-6xl">
        Roteiros do Bug Bash
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Dois manuais com prints reais das telas. Use o do Django para preparar
        os dados. Use o do site para testar como visitante. Há um PDF único
        com as três páginas, logo abaixo.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <Badge variant="secondary">Doc 1 · quem cria os dados</Badge>
            <CardTitle className="font-display text-3xl text-primary">
              Admin Django
            </CardTitle>
            <CardDescription>
              Login, mapa do admin e passo a passo para criar usuário, seções
              da Home, pessoas da Rede, eventos e salas.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Link href="/django" className={buttonVariants()}>
              Abrir roteiro Django
            </Link>
            <a
              href="/pdfs/django.pdf"
              download="Roteiro-Django-Bug-Bash.pdf"
              className={buttonVariants({ variant: "outline" })}
            >
              Baixar PDF
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Badge variant="secondary">Doc 2 · quem testa o site</Badge>
            <CardTitle className="font-display text-3xl text-primary">
              Site Prontera
            </CardTitle>
            <CardDescription>
              Home, Rede, Eventos, Salas, Contato, URLs, 404 e mobile — com o
              que clicar e o que deveria aparecer.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Link href="/site" className={buttonVariants()}>
              Abrir roteiro do site
            </Link>
            <a
              href="/pdfs/site-prontera.pdf"
              download="Roteiro-Site-Prontera-Bug-Bash.pdf"
              className={buttonVariants({ variant: "outline" })}
            >
              Baixar PDF
            </a>
          </CardContent>
        </Card>
      </div>

      <section className="mt-12 space-y-4">
        <h2 className="font-display text-3xl text-primary">Como usar no dia</h2>
        <ol className="list-decimal space-y-2 pl-5 text-[15px] leading-relaxed">
          <li>
            Uma pessoa (ou dupla) segue o{" "}
            <Link href="/django" className="font-medium text-primary underline">
              roteiro Django
            </Link>{" "}
            e deixa os dados prontos. Prefira criar itens com o prefixo{" "}
            <code className="rounded bg-muted px-1">BUGBASH-</code> em vez de
            apagar o que já existe.
          </li>
          <li>
            O restante do grupo abre o{" "}
            <Link href="/site" className="font-medium text-primary underline">
              roteiro do site
            </Link>{" "}
            e marca os checkboxes conforme testa.
          </li>
          <li>
            Achou um bug? Abra o{" "}
            <a
              href={REPORT_FORM_URL}
              className="font-medium text-primary underline"
              target="_blank"
              rel="noreferrer"
            >
              formulário de report
            </a>{" "}
            e envie título curto, URL, o que fez, o que esperava e um print.
          </li>
        </ol>
      </section>

      <section className="mt-10 rounded-2xl bg-white p-5 ring-1 ring-foreground/10">
        <h2 className="font-display text-2xl text-primary">PDF único</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Capa + roteiro Django + roteiro do site, num arquivo só (42 páginas).
        </p>
        <a
          href="/pdfs/bugbash-completo.pdf"
          download="Bug-Bash-Prontera-Completo.pdf"
          className={`${buttonVariants()} mt-3`}
        >
          Baixar PDF completo
        </a>
        <p className="mt-4 text-xs text-muted-foreground">Separados, se precisar:</p>
        <ul className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <li>
            <a
              href="/pdfs/inicio.pdf"
              download="Bug-Bash-Prontera.pdf"
              className={buttonVariants({ variant: "outline" })}
            >
              Capa
            </a>
          </li>
          <li>
            <a
              href="/pdfs/django.pdf"
              download="Roteiro-Django-Bug-Bash.pdf"
              className={buttonVariants({ variant: "outline" })}
            >
              Django
            </a>
          </li>
          <li>
            <a
              href="/pdfs/site-prontera.pdf"
              download="Roteiro-Site-Prontera-Bug-Bash.pdf"
              className={buttonVariants({ variant: "outline" })}
            >
              Site
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-10 rounded-2xl bg-white p-5 ring-1 ring-foreground/10">
        <h2 className="font-display text-2xl text-primary">Ambientes</h2>
        <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold">Site</dt>
            <dd>
              <a
                className="text-primary underline"
                href="https://prontera-eight.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                prontera-eight.vercel.app
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Admin Django</dt>
            <dd>
              <a
                className="text-primary underline"
                href="https://prontera-production.up.railway.app/admin/"
                target="_blank"
                rel="noreferrer"
              >
                prontera-production.up.railway.app/admin
              </a>
            </dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
