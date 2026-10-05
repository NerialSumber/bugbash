export const REPORT_FORM_URL =
  "https://fork-captain-7f2.notion.site/3d6dbf5638b480d9a0caf58af2e64a3f?pvs=105";

/** Site que o visitante testa. prontera-eight.vercel.app redireciona para cá. */
export const SITE_URL = "https://prontera-staging.vercel.app";

export const SITE_ALIAS_URL = "https://prontera-eight.vercel.app";

/** Admin que alimenta o site acima. Não usar o admin de production. */
export const ADMIN_URL = "https://prontera-staging.up.railway.app/admin/";

/**
 * Troque Ana pelo seu primeiro nome.
 * Título pode ter acento. Slug e identificador não: minúsculas, hífen, sem espaço.
 * João vira joao. Se a tela disser que já existe, acrescente -2.
 */
export const NAME_EXAMPLE = {
  first: "Ana",
  user: "ana.teste",
  person: "Ana Teste",
  personSlug: "ana-teste",
  plain: "Ana Sem Foto",
  plainSlug: "ana-sem-foto",
  hidden: "Ana Oculta",
  hiddenSlug: "ana-oculta",
  event: "Workshop da Ana",
  eventSlug: "ana-workshop",
  activity: "Conversa da Ana",
  room: "Sala da Ana",
  roomSlug: "ana-sala",
  addon: "Cadeiras da Ana",
  pack: "Day use da Ana",
} as const;

/** Um formulário só para o site inteiro. Não crie outro se os campos já aparecerem. */
export const PREP_FORM = {
  name: "Fale Conosco",
  slug: "fale-conosco",
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** Início hoje, término dois dias à frente, para o evento cair no calendário aberto. */
export function eventWindow(now = new Date()) {
  const end = new Date(now);
  end.setDate(end.getDate() + 2);
  const stamp = (d: Date, time: string) =>
    `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${time}`;
  return {
    start: stamp(now, "10:00"),
    end: stamp(end, "18:00"),
  };
}
