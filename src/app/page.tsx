import Link from "next/link";
import { BugbashBrief } from "@/components/bugbash-brief";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ADMIN_URL, REPORT_FORM_URL, SITE_ALIAS_URL, SITE_URL } from "@/lib/links";

const VIDEOS = [
  {
    src: "/videos/docs-home.mp4",
    title: "Onde estão os roteiros",
    caption: "Onde ficam os roteiros e os links do painel e do site.",
  },
  {
    src: "/videos/preparo-admin.mp4",
    title: "Como cadastrar no painel",
    caption: "Como entrar no painel e cadastrar uma pessoa, um evento e uma sala.",
  },
  {
    src: "/videos/caminho-comum.mp4",
    title: "Caminho comum no site",
    caption: "Home, perfil da pessoa completa, sala com Cadeiras e Day use, mensagem enviada.",
  },
  {
    src: "/videos/simulacao-bug-eventos.mp4",
    title: "Simulação: reportar o bug de Eventos",
    caption:
      "A lista não carrega. O registro vai no formulário, com o link da página, o que foi feito, o esperado e o que aconteceu.",
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
        Um teste em grupo para ver se dá para se cadastrar, colocar uma
        informação na plataforma e encontrar essa informação no site.
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
            <Badge variant="secondary">1 · cadastre a sua coisa</Badge>
            <CardTitle className="font-display text-3xl text-primary">
              Painel de cadastro
            </CardTitle>
            <CardDescription>
              Entrar, criar o seu acesso e cadastrar uma pessoa, um evento ou
              uma sala com o seu nome.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Link href="/django" className={buttonVariants()}>
              Abrir passo a passo do cadastro
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
            <Badge variant="secondary">2 · veja se apareceu</Badge>
            <CardTitle className="font-display text-3xl text-primary">
              Site Prontera
            </CardTitle>
            <CardDescription>
              Onde procurar o que você cadastrou: início, rede, eventos, salas
              e contato. O que clicar e o que deveria aparecer.
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
          Quatro gravações curtas: onde estão os roteiros, como cadastrar no
          painel, o caminho comum no site e como registrar um problema.
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
                prontera-staging.vercel.app
              </a>
              <span className="mt-1 block text-xs text-muted-foreground">
                {SITE_ALIAS_URL} abre este mesmo endereço.
              </span>
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
                prontera-staging.up.railway.app/admin
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
