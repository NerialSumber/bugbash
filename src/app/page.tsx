import Link from "next/link";
import { BugbashBrief } from "@/components/bugbash-brief";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ADMIN_URL, REPORT_FORM_URL, SITE_URL } from "@/lib/links";

const VIDEOS = [
  {
    src: "/videos/docs-home.mp4",
    title: "Onde estão os roteiros",
    caption: "Onde ficam os roteiros e os links do painel e do site.",
  },
  {
    src: "/videos/preparo-admin.mp4",
    title: "Como cadastrar no painel",
    caption: "Para devs e para a organização: cadastrar pessoa, evento e sala com o próprio nome.",
  },
  {
    src: "/videos/caminho-comum.mp4",
    title: "Caminho comum no site",
    caption: "O vídeo mostra um exemplo. No teste, procure o seu nome na rede, na sala e na mensagem.",
  },
  {
    src: "/videos/simulacao-bug-eventos.mp4",
    title: "Simulação: reportar o bug de Eventos",
    caption:
      "Exemplo antigo de como preencher o formulário. A lista de eventos hoje precisa carregar. Se não carregar, anote.",
  },
] as const;

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">
        Espaço Prontera
      </p>
      <h1 className="font-display mt-2 max-w-3xl text-4xl text-primary sm:text-5xl">
        Bug bash do site
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Um teste em grupo do site. O painel Django fica com devs e com a
        organização. O cadastro interno ainda não existe.
      </p>

      <BugbashBrief />

      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href="/pdfs/bugbash-completo.pdf"
          download="Bug-Bash-Prontera-Completo.pdf"
          className={buttonVariants({ size: "lg" })}
        >
          Baixar PDF completo
        </a>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <Badge variant="secondary">Só devs e organização</Badge>
            <CardTitle className="font-display text-3xl text-primary">
              Painel Django
            </CardTitle>
            <CardDescription>
              Quem já é dev ou da organização cadastra pessoa, evento e sala
              com o próprio nome. Não é o cadastro do visitante.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Link href="/django" className={buttonVariants()}>
              Abrir o painel
            </Link>
            <a
              href="/pdfs/django.pdf"
              download="Roteiro-Django-Bug-Bash.pdf"
              className={buttonVariants({ variant: "outline" })}
            >
              Cadastro
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Badge variant="secondary">Todo mundo</Badge>
            <CardTitle className="font-display text-3xl text-primary">
              Site Prontera
            </CardTitle>
            <CardDescription>
              Onde procurar o seu nome: rede, eventos, salas e contato. O que
              clicar e o que deveria aparecer.
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

      <section className="mt-12 space-y-3">
        <h2 className="font-display text-3xl text-primary">Achou algo estranho?</h2>
        <p className="max-w-2xl text-[15px] leading-relaxed">
          Anote no formulário: um título curto, o link da página, o que você
          fez, o que esperava ver, o que aconteceu e um print.
        </p>
        <a
          href={REPORT_FORM_URL}
          className={buttonVariants()}
          target="_blank"
          rel="noreferrer"
        >
          Abrir formulário
        </a>
      </section>

      <section className="no-print mt-10 space-y-4">
        <h2 className="font-display text-3xl text-primary">Vídeos</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Três caminhos e um exemplo de como registrar um problema. A lista de
          eventos precisa carregar; o vídeo antigo mostra a falha que já foi
          corrigida.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {VIDEOS.map((video) => (
            <figure
              key={video.src}
              className="overflow-hidden rounded-2xl bg-white ring-1 ring-foreground/10"
            >
              <video
                className="aspect-video w-full bg-black"
                controls
                preload="metadata"
                src={video.src}
              />
              <figcaption className="space-y-1 px-4 py-3">
                <p className="font-medium text-primary">{video.title}</p>
                <p className="text-sm text-muted-foreground">{video.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-white p-5 ring-1 ring-foreground/10">
        <h2 className="font-display text-2xl text-primary">PDF único</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Capa, roteiro de cadastro e roteiro do site, num arquivo só (46 páginas).
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
              Cadastro
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
                href={SITE_URL}
                target="_blank"
                rel="noreferrer"
              >
                staging.espacoprontera.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Painel de cadastro</dt>
            <dd>
              <a
                className="text-primary underline"
                href={ADMIN_URL}
                target="_blank"
                rel="noreferrer"
              >
                api-staging.espacoprontera.com/admin
              </a>
              <span className="mt-1 block text-xs text-muted-foreground">
                Use este painel. O outro ambiente não mostra as coisas neste site.
              </span>
            </dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
