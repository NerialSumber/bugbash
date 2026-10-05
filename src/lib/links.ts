export const REPORT_FORM_URL =
  "https://fork-captain-7f2.notion.site/3d6dbf5638b480d9a0caf58af2e64a3f?pvs=105";

/** Site que o visitante testa. prontera-eight.vercel.app redireciona para cá. */
export const SITE_URL = "https://prontera-staging.vercel.app";

export const SITE_ALIAS_URL = "https://prontera-eight.vercel.app";

/** Admin que alimenta o site acima. Não usar o admin de production. */
export const ADMIN_URL = "https://prontera-staging.up.railway.app/admin/";

export const PREP_PEOPLE = [
  {
    name: "BUGBASH Pessoa Completa",
    slug: "bugbash-pessoa-completa",
    note: "Aparece para todo mundo, com foto e um Instagram.",
  },
  {
    name: "BUGBASH Sem Foto",
    slug: "bugbash-sem-foto",
    note: "Aparece para todo mundo, sem foto. O cartão mostra as iniciais.",
  },
  {
    name: "BUGBASH Oculta",
    slug: "bugbash-oculta",
    note: "Fica escondida. Não entra na lista.",
  },
] as const;

export const PREP_EVENT = {
  title: "BUGBASH Workshop",
  slug: "bugbash-workshop",
  start: "30/09/2026 10:00",
  end: "02/10/2026 18:00",
};

export const PREP_ROOM = {
  title: "BUGBASH Sala Teste",
  id: "bugbash-sala",
};

export const PREP_FORM = {
  name: "BUGBASH Fale Conosco",
  slug: "fale-conosco",
};
