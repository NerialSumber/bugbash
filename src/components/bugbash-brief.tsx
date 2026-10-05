import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { REPORT_FORM_URL, SITE_URL } from "@/lib/links";

const WANT_TO_KNOW = [
  "O cadastro foi fácil de achar e de preencher?",
  "A coisa que você cadastrou apareceu no site, com o seu nome?",
  "Depois de mudar um texto, o site atualizou?",
  "Nome, foto, data e texto apareceram completos?",
  "No celular, o site abriu pelo WhatsApp sem a tela sair para o lado?",
  "Alguma página ficou em branco, cortada ou com um botão que não abre?",
];

export function BugbashBrief({ variant = "full" }: { variant?: "full" | "short" }) {
  if (variant === "short") {
    return (
      <section className="mt-8 rounded-2xl bg-white p-5 ring-1 ring-foreground/10">
        <h2 className="font-display text-2xl text-primary">O que é este teste</h2>
        <p className="mt-2 text-[15px] leading-relaxed">
          Um bug bash é um teste em grupo. Cada pessoa cria o próprio acesso,
          entra com ele e cadastra a própria pessoa, o próprio evento e a
          própria sala. O título leva o seu nome, nunca um texto igual ao das
          outras. Depois muda uma palavra, atualiza o site e confere. No
          celular, o link abre pelo WhatsApp.
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
            Ver se uma pessoa consegue criar o próprio acesso, entrar com ele,
            cadastrar pessoa, evento e sala com o próprio nome, e encontrar
            tudo isso no site, do jeito que preencheu.
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
            No{" "}
            <Link href="/django" className="font-medium text-primary underline">
              roteiro de cadastro
            </Link>
            , entre com o usuário compartilhado só para criar o seu acesso.
            Saia e entre de novo com o seu usuário e a sua senha.
          </li>
          <li>
            Ainda com o seu acesso, crie três pessoas, um evento e uma sala.
            O exemplo do roteiro usa Ana: Ana Teste, Workshop da Ana, Sala da
            Ana. Troque Ana pelo seu primeiro nome. Slug sem acento, como
            ana-teste e ana-workshop. Se já existir, use ana-workshop-2.
          </li>
          <li>
            Não edite a página inicial, a sala 1 nem o formulário de contato se
            eles já existirem. Esses cadastros são um só para o site inteiro.
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
            e procure o seu nome na Rede, em Eventos e em Salas. Mude uma
            palavra de cada um no painel, atualize e veja se o texto novo
            apareceu. O{" "}
            <Link href="/site" className="font-medium text-primary underline">
              roteiro do site
            </Link>{" "}
            mostra o caminho. No celular, abra o link pelo WhatsApp.
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
