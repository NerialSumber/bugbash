import { Callout } from "@/components/callout";
import { Lines } from "@/components/glance";

export function AudienceNotice() {
  return (
    <Callout tone="warn" title="Quem usa o Django">
      <Lines
        items={[
          "O painel Django é só para devs e para a organização.",
          "Quem participa como visitante não entra nele.",
          "O cadastro interno ainda não existe. Ele será criado depois.",
          "Este teste não inclui criar esse cadastro.",
        ]}
      />
    </Callout>
  );
}
