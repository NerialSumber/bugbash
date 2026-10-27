# Roteiros de Bug Bash — Espaço Prontera

A página inicial avisa que o Django é só para devs e para a organização, e que o cadastro interno ainda não existe: ele será criado depois. Quem visita segue o roteiro do site. Devs e a organização usam o painel para cadastrar pessoa, evento e sala com o próprio nome, sem criar usuário novo.

Dois manuais passo a passo, com prints reais das telas:

- **Painel Django** — só devs e organização: login, pessoas (tópicos e botão), eventos e salas
- **Site Prontera** — o que clicar no site público e o que deveria acontecer, inclusive calendário e lista de eventos carregando

Vídeos em `public/videos/`: capa dos roteiros, preparo no admin, caminho comum no site e um exemplo antigo de como reportar um problema. A falha da lista de eventos não é mais o resultado esperado.

PDFs em `public/pdfs/`:

- `bugbash-completo.pdf` — capa + Django + site (arquivo único)
- `inicio.pdf`, `django.pdf`, `site-prontera.pdf` — as três partes separadas

## Como rodar localmente

```bash
npm install
npm run dev
```

Abre em [http://127.0.0.1:43127](http://127.0.0.1:43127).

## Publicar

O projeto é um app Next.js. Na pasta do repositório:

```bash
npx vercel --yes
```

Ou conecte o repositório no [Vercel](https://vercel.com/new).

## Ambientes testados nestes roteiros

| O quê | URL |
| --- | --- |
| Site | https://staging.espacoprontera.com |
| Admin Django | https://api-staging.espacoprontera.com/admin/ |

O admin de production não alimenta esse site. O roteiro Django é o passo anterior ao teste.

Cada dev entra no painel com o próprio usuário. O roteiro não publica uma senha.

Os prints em `public/shots` foram tirados dessas URLs. Se o site mudar, atualize as imagens.

## Stack

Next.js, TypeScript, Tailwind e shadcn/ui.
