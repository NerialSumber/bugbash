import { Callout } from "@/components/callout";
import { DoExpect } from "@/components/expect";
import { GuideShell } from "@/components/guide-shell";
import { Shot } from "@/components/shot";
import { Step } from "@/components/step";

const toc = [
  { id: "regras", label: "Para quem é este doc" },
  { id: "login", label: "1. Login" },
  { id: "mapa", label: "2. Mapa do admin" },
  { id: "usuario", label: "3. Criar usuário" },
  { id: "home", label: "4. Home / landing" },
  { id: "info", label: "5. Informações gerais" },
  { id: "rede", label: "6. Pessoas da Rede" },
  { id: "eventos", label: "7. Eventos" },
  { id: "salas", label: "8. Salas" },
  { id: "parceiros", label: "9. Parceiros" },
  { id: "contato", label: "10. Mensagens de contato" },
  { id: "logout", label: "11. Encerrar sessão" },
];

export default function DjangoPage() {
  return (
    <GuideShell
      kicker="Documento 1"
      title="Roteiro do Django"
      intro="Use este manual para entrar no admin, entender cada bloco e preparar os dados que o site mostra. Não apague conteúdo existente sem combinarem antes — crie itens novos com o prefixo BUGBASH-."
      toc={toc}
    >
      <section id="regras" className="mt-10 space-y-4">
        <h2 className="font-display text-3xl text-primary">Para quem é este doc</h2>
        <p>
          É o guia de <strong>preparação</strong>. O site público lê tudo daqui.
          Quem for só testar a navegação pode pular para o roteiro do site.
        </p>
        <Callout tone="warn" title="Ambiente compartilhado">
          Este admin está em produção/homologação compartilhada. Não desmarque
          “Pública” / “Ativa” em massa. Se precisar de um caso de “não
          público”, use um cadastro criado agora, com o prefixo BUGBASH-.
        </Callout>
        <div className="overflow-x-auto rounded-xl bg-white text-sm ring-1 ring-foreground/10">
          <table className="w-full text-left">
            <thead className="bg-muted/70 text-xs tracking-wide uppercase">
              <tr>
                <th className="px-3 py-2">Campo</th>
                <th className="px-3 py-2">Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-3 py-2">URL</td>
                <td className="px-3 py-2">
                  <a
                    className="text-primary underline"
                    href="https://prontera-production.up.railway.app/admin/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://prontera-production.up.railway.app/admin/
                  </a>
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">Usuário</td>
                <td className="px-3 py-2 font-mono">admin</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">Senha</td>
                <td className="px-3 py-2 font-mono">banana</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Step guide="django" id="login" n="1" title="Entrar no admin">
        <DoExpect
          doItems={[
            "Abra a URL do admin no Chrome ou Firefox.",
            "No campo Usuário, digite admin.",
            "No campo Senha, digite banana.",
            "Clique no botão azul Acessar.",
          ]}
          expectItems={[
            "A tela chama Administração do Django.",
            "Há dois campos: Usuário e Senha.",
            "Depois do login, você cai no painel Administração do Site.",
            "Senha errada mostra erro e permanece no login.",
          ]}
        />
        <Shot
          src="/shots/django/login.png"
          alt="Tela de login do Django com campos Usuário, Senha e botão Acessar"
          caption="Tela de login. Botão Acessar no centro."
        />
      </Step>

      <Step guide="django" id="mapa" n="2" title="Ler o mapa do admin">
        <p>
          Depois do login você vê os grupos abaixo. Cada linha tem{" "}
          <strong>+ Adicionar</strong> (form em branco) e{" "}
          <strong>Modificar</strong> (lista do que já existe).
        </p>
        <Shot
          src="/shots/django/dashboard.png"
          alt="Painel inicial do Django com todos os apps e modelos"
          caption="Painel inicial. Use a coluna da esquerda para ir de um módulo a outro."
        />
        <div className="overflow-x-auto rounded-xl bg-white text-sm ring-1 ring-foreground/10">
          <table className="w-full text-left">
            <thead className="bg-muted/70 text-xs tracking-wide uppercase">
              <tr>
                <th className="px-3 py-2">Grupo</th>
                <th className="px-3 py-2">O que controla no site</th>
              </tr>
            </thead>
            <tbody className="[&_tr]:border-t">
              <tr>
                <td className="px-3 py-2 font-medium">Autenticação</td>
                <td className="px-3 py-2">Usuários e grupos que entram neste admin.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Seções da landing page</td>
                <td className="px-3 py-2">
                  É o que a Home do site realmente mostra (bolhas, textos, FAQ, CTAs).
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Conteúdo da Home</td>
                <td className="px-3 py-2">
                  Formulário antigo de hero. Prefira editar as seções da landing.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Informações gerais do Prontera</td>
                <td className="px-3 py-2">
                  E-mail, telefone e endereço da página Contato. Hoje a lista está vazia.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Pessoas</td>
                <td className="px-3 py-2">Cards e perfis da Rede Prontera.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Eventos</td>
                <td className="px-3 py-2">Calendário, lista e página do evento.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Salas</td>
                <td className="px-3 py-2">Cards de Sala 1 / Sala 2, adicionais e pacotes.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Parceiros</td>
                <td className="px-3 py-2">Cadastro de parceiros (ainda pouco usado no site).</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Mensagens de contato</td>
                <td className="px-3 py-2">Caixa de entrada do formulário Fale Conosco.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Step>

      <Step guide="django" id="usuario" n="3" title="Criar um usuário de teste">
        <DoExpect
          doItems={[
            "No grupo Autenticação e autorização, clique em Usuários → Adicionar.",
            "Preencha Usuário (ex.: bugbash.teste), Senha e Confirmação de senha.",
            "Clique em SALVAR. Na tela seguinte, marque Equipe e Superusuário se essa pessoa também for editar o admin.",
            "Salve de novo.",
          ]}
          expectItems={[
            "O Django aceita só letras, números e @/./+/-/_ no usuário.",
            "A senha precisa ter 8+ caracteres e não pode ser óbvia.",
            "Depois de salvar, o usuário aparece em /admin/auth/user/.",
            "Esse login serve para o admin, não para o site público.",
          ]}
        />
        <Shot
          src="/shots/django/add-user.png"
          alt="Formulário Adicionar usuário com usuário, senha e confirmação"
          caption="Primeira tela de Adicionar usuário. Depois do salvar, abrem as permissões."
        />
        <Shot
          src="/shots/django/list-user.png"
          alt="Lista de usuários do Django"
          caption="Lista de quem já pode entrar no admin."
          tall
        />
      </Step>

      <Step guide="django" id="home" n="4" title="Editar a Home (seções da landing)">
        <p>
          Clique em <strong>Seções da landing page</strong>. Cada linha vira uma
          bolha na Home e uma âncora na URL (<code>#hero</code>,{" "}
          <code>#faq</code>, <code>#sobre</code>…).
        </p>
        <Shot
          src="/shots/django/list-landing.png"
          alt="Lista das 11 seções da landing page com ordem, âncora, tipo e flag Ativa"
          caption="11 seções ativas. A coluna Ativa controla se a seção aparece no site. Há um botão Salvar no fim da lista para mudar a ordem."
        />
        <DoExpect
          doItems={[
            "Clique na âncora hero para abrir a seção Início.",
            "Mude um texto pequeno (eyebrow, título ou CTA) com prefixo BUGBASH- se for testar conteúdo.",
            "Confira CTA — rótulo + CTA — URL ou âncora (ex.: #sobre). Os dois precisam estar preenchidos para o botão aparecer.",
            "Desmarque Ativa só em uma seção de teste, salve, e recarregue o site. Depois reative.",
            "Use Adicionar seção da landing page só se quiser uma seção extra.",
          ]}
          expectItems={[
            "A Home do site muda depois de um refresh (às vezes leva alguns segundos).",
            "Seção inativa some, e o layout não deveria quebrar.",
            "Âncora da chave (faq, sobre, hero) continua funcionando em URLs com #.",
            "Tipos possíveis: Hero, Texto, Visão geral, Destaque (callout), FAQ, Links.",
          ]}
        />
        <Shot
          src="/shots/django/edit-landing.png"
          alt="Formulário de edição da seção hero da landing"
          caption="Edição da seção 1. Início (hero): chave, tipo, textos, dois CTAs, ordem e flag Ativa."
          tall
        />
        <Callout title="Conteúdo da Home vs seções">
          Existe também Conteúdo da Home (hero antigo). A Home publicada hoje
          lê as <strong>Seções da landing page</strong>. Use aquele outro form
          só se quiser conferir se ainda tem efeito.
        </Callout>
        <Shot
          src="/shots/django/add-homecontent.png"
          alt="Formulário Conteúdo da Home com hero, introdução e CTAs"
          caption="Conteúdo da Home — formulário paralelo. Não é o caminho principal."
          tall
        />
      </Step>

      <Step guide="django" id="info" n="5" title="Preencher informações gerais (Contato)">
        <p>
          A lista está vazia. Por isso a página Contato ainda mostra “Dados
          provisórios para layout”.
        </p>
        <Shot
          src="/shots/django/list-pronterainfo.png"
          alt="Lista vazia de Informações gerais do Prontera"
          caption="0 registros. Clique em Adicionar informações gerais do Prontera."
        />
        <DoExpect
          doItems={[
            "Clique em Adicionar.",
            "Preencha Nome, e-mail de contato, telefone e endereço.",
            "Deixe Ativo marcado e clique em SALVAR.",
            "Abra o site em /contato e veja se o card Informações mudou.",
          ]}
          expectItems={[
            "O card da esquerda na página Contato deixa de mostrar o texto provisório.",
            "E-mail e telefone iguais aos que você digitou.",
          ]}
        />
        <Shot
          src="/shots/django/add-pronterainfo.png"
          alt="Formulário Informações gerais com nome, descrições, endereço, e-mail, telefone e Instagram"
          caption="Campos de contato e localização. Marque Ativo."
          tall
        />
      </Step>

      <Step guide="django" id="rede" n="6" title="Criar e editar pessoas da Rede">
        <p>
          Em <strong>Pessoas → Pessoas</strong> estão os 17 cadastros atuais.
          A coluna <strong>Pública</strong> decide se a pessoa aparece na Rede.
        </p>
        <Shot
          src="/shots/django/list-person.png"
          alt="Lista de pessoas com nome, slug, pública e destaque"
          caption="Lista de pessoas. Filtros à direita: Pública, Destaque, Papéis, Áreas, Vínculos."
        />
        <p className="font-semibold">Para criar uma pessoa de teste</p>
        <DoExpect
          doItems={[
            "Clique em Adicionar pessoa.",
            "Nome: BUGBASH Pessoa Completa. Slug pode ficar em branco (o Django gera).",
            "Headline: uma linha de apresentação.",
            "Foto: envie um PNG/JPG quadrado.",
            "Redes sociais: cole o JSON de exemplo abaixo.",
            "Em Classificação, escolha pelo menos 1 papel, 1 área e 1 vínculo.",
            "Marque Pública. Salve.",
            "Crie uma segunda pessoa BUGBASH Sem Foto, pública, sem imagem.",
            "Crie uma terceira BUGBASH Oculta e deixe Pública desmarcada.",
          ]}
          expectItems={[
            "A pessoa pública aparece em /redeprontera e em /redeprontera/slug.",
            "A pessoa sem foto mostra iniciais no círculo (ex.: AG), não um ícone quebrado.",
            "A pessoa oculta não sai na lista nem na busca. A URL direta deve dizer Pessoa não encontrada.",
          ]}
        />
        <pre className="overflow-x-auto rounded-xl bg-[#1e2937] p-3 text-xs text-white">{`[{"url":"https://instagram.com/prontera","platform":"Instagram"}]`}</pre>
        <Shot
          src="/shots/django/add-person.png"
          alt="Formulário completo de Adicionar Pessoa"
          caption="Blocos: Identificação, Conteúdo, Classificação, Publicação (Pública / Destaque / Ordem)."
          tall
        />
        <Shot
          src="/shots/django/edit-person.png"
          alt="Edição da pessoa Juliana Negreiros com foto e Instagram"
          caption="Exemplo real: Juliana Negreiros — foto, headline, Instagram, papéis Sócio e Equipe, flag Pública."
          tall
        />
        <p>
          Papéis, áreas e vínculos são listas à parte. Só adicione item novo
          se faltar uma opção; as listas atuais já alimentam os filtros da Rede.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <Shot src="/shots/django/list-roles.png" alt="Lista de papéis" caption="Papéis / relações" />
          <Shot src="/shots/django/list-expertise.png" alt="Lista de áreas" caption="Áreas de atuação" />
          <Shot src="/shots/django/list-connections.png" alt="Lista de vínculos" caption="Vínculos com o Prontera" />
        </div>
      </Step>

      <Step guide="django" id="eventos" n="7" title="Criar e publicar um evento">
        <p>
          Já existe o evento <strong>teste cafe</strong>, tipo Evento promocional,
          formato Presencial, status Publicado / Planejado, de 14 a 18 de setembro.
        </p>
        <Shot
          src="/shots/django/list-event.png"
          alt="Lista de eventos com filtros de tipo, formato e status"
          caption="Lista de eventos. Status de publicação: Rascunho, Publicado, Arquivado."
        />
        <DoExpect
          doItems={[
            "Clique em Adicionar evento.",
            "Título: BUGBASH Workshop. Tipo de evento e Formato são obrigatórios para ficar redondo no site.",
            "Status de publicação: comece em Rascunho, salve, olhe o site (não deve aparecer). Depois mude para Publicado.",
            "Preencha Início e Término (data + hora). O admin avisa o fuso de −3h.",
            "Resumo aparece no card. Descrição (Markdown) aparece na página do evento.",
            "Opcional: + Adicionar trilha / atividade no fim do form.",
            "SALVAR e conferir no site em /eventos (calendário e Lista) e em /eventos/1 (hoje o detalhe usa o id, não o slug).",
          ]}
          expectItems={[
            "Rascunho não entra no calendário.",
            "Publicado aparece nos dias do intervalo.",
            "A página de detalhe abre com título, tipo, formato e datas.",
            "Sem atividades, o detalhe mostra Nenhuma atividade publicada ainda.",
          ]}
        />
        <Shot
          src="/shots/django/add-event.png"
          alt="Formulário Adicionar Evento"
          caption="Informações básicas, publicação, datas, conteúdo, trilhas e atividades."
          tall
        />
        <Shot
          src="/shots/django/add-activity.png"
          alt="Formulário de atividade de evento"
          caption="Atividades ficam ligadas a um evento. Dá para criar pela tela de Eventos ou por Atividades no menu."
          tall
        />
      </Step>

      <Step guide="django" id="salas" n="8" title="Criar ou editar uma sala">
        <p>
          Há duas salas públicas: Sala 1 (multiuso, R$ 50/h) e Sala 2 (reunião,
          R$ 60/h). Cada uma tem adicionais e pacotes no fim do form.
        </p>
        <DoExpect
          doItems={[
            "Abra Salas → clique em Sala 1 para ver um cadastro completo.",
            "Para testar, crie BUGBASH Sala Teste: título, identificador (ex.: bugbash-sala), tipo, descrição, valor hora, capacidade, horários.",
            "Marque Pública. Sem isso a sala não entra em /salas.",
            "Em Adicionais da sala e Pacotes da sala, clique em + Adicionar outro e preencha título + identificador.",
            "Salve e abra /salas no site. Clique em Adicionais e Pacotes.",
          ]}
          expectItems={[
            "Card com título, descrição, capacidade, valor e disponibilidade.",
            "Sem imagem: o site mostra Imagem em breve…",
            "Adicionais e pacotes expandem no card. Não existe hoje página /salas/sala-1 (isso é 404).",
          ]}
        />
        <Shot
          src="/shots/django/edit-room.png"
          alt="Edição da Sala 1 com adicionais Cadeiras e pacote Day use"
          caption="Sala 1: identificador sala-1, tipo Multiuso, Pública marcada, adicional Cadeiras e pacote Day use."
          tall
        />
        <Shot
          src="/shots/django/add-room.png"
          alt="Formulário Adicionar Sala"
          caption="Form em branco. Identificador vira o id público (ex.: sala-1)."
          tall
        />
      </Step>

      <Step guide="django" id="parceiros" n="9" title="Parceiros (opcional)">
        <p>
          Use se quiser um cadastro extra. Não é o foco do Bug Bash — a Rede
          cobre pessoas. Só confirme que Adicionar parceiro salva sem erro.
        </p>
        <Shot
          src="/shots/django/add-partner.png"
          alt="Formulário Adicionar parceiro"
          caption="Cadastro de parceiro. Categorias ficam em Categorias de parceiros."
          tall
        />
      </Step>

      <Step guide="django" id="contato" n="10" title="Ver mensagens do formulário">
        <DoExpect
          doItems={[
            "No site, envie uma mensagem de teste em /contato (veja o outro roteiro).",
            "Volte aqui em Mensagens de contato.",
            "Abra a mensagem nova e confira nome, e-mail e texto.",
          ]}
          expectItems={[
            "A mensagem aparece na lista depois do envio com sucesso.",
            "Não há botão Adicionar — o visitante é quem cria pelo site.",
          ]}
        />
        <Shot
          src="/shots/django/list-contact.png"
          alt="Lista de mensagens de contato no Django"
          caption="Caixa de entrada do Fale Conosco."
        />
      </Step>

      <Step guide="django" id="logout" n="11" title="Encerrar sessão">
        <DoExpect
          doItems={[
            "No canto superior direito, clique em ENCERRAR SESSÃO.",
            "Tente abrir /admin/ de novo.",
          ]}
          expectItems={[
            "Tela Sessão encerrada, com link Acessar novamente.",
            "Sem login, /admin/ volta para a tela de Usuário / Senha.",
          ]}
        />
        <Shot
          src="/shots/django/logout.png"
          alt="Tela Sessão encerrada do Django"
          caption="Logout concluído."
        />
        <Callout tone="ok" title="Pronto para o site">
          Com Home ativa, pelo menos 1 pessoa pública, 1 evento publicado e 1
          sala pública, o grupo pode seguir o roteiro do site.
        </Callout>
      </Step>
    </GuideShell>
  );
}
