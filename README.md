# Roteiros de Bug Bash — Espaço Prontera

Dois manuais passo a passo, com prints reais das telas:

- **Admin Django** — login, mapa do painel e como criar/editar Home, pessoas, eventos e salas
- **Site Prontera** — o que clicar no site público e o que deveria acontecer

Vídeos em `public/videos/`: capa dos roteiros, preparo no admin, caminho comum no site e a simulação de report do bug de Eventos.

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
| Site | https://prontera-staging.vercel.app (`prontera-eight.vercel.app` redireciona para cá) |
| Admin Django | https://prontera-staging.up.railway.app/admin/ |

O admin de production não alimenta esse site. O roteiro Django é o passo anterior ao teste.

Credenciais do admin estão no roteiro Django (são as combinadas para o Bug Bash).

Os prints em `public/shots` foram tirados dessas URLs. Se o site mudar, atualize as imagens.

## Stack

Next.js, TypeScript, Tailwind e shadcn/ui.
