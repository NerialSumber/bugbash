import { Callout } from "@/components/callout";
import { DoExpect } from "@/components/expect";
import { GuideShell } from "@/components/guide-shell";
import { Shot } from "@/components/shot";
import { Step } from "@/components/step";
import { buttonVariants } from "@/components/ui/button";
import { CheckItem } from "@/components/check-item";
import {
  ADMIN_URL,
  PREP_EVENT,
  PREP_FORM,
  PREP_PEOPLE,
  PREP_ROOM,
  REPORT_FORM_URL,
  SITE_ALIAS_URL,
  SITE_URL,
} from "@/lib/links";

const toc = [
  { id: "regras", label: "Regras do Bug Bash" },
  { id: "antes", label: "0. Antes de testar" },
  { id: "nav", label: "1. Menu, rodapé e URLs" },
  { id: "home", label: "2. Home / landing" },
  { id: "rede", label: "3. Rede Prontera" },
  { id: "eventos", label: "4. Eventos" },
  { id: "salas", label: "5. Salas" },
  { id: "contato", label: "6. Contato" },
  { id: "rotas", label: "7. Rotas e 404" },
  { id: "mobile", label: "8. Celular" },
  { id: "folha", label: "Folha de resposta" },
];

export default function SitePage() {
  return (
    <GuideShell
      kicker="Documento 2"
      title="Roteiro do site Prontera"
      intro="Teste como visitante, depois que o passo anterior no Django tiver criado os cadastros BUGBASH-. Siga os passos na ordem e marque o quadradinho quando terminar. Se algo sair diferente do “o que deve acontecer”, registre no formulário de bugs."
      toc={toc}
    >
      <section id="regras" className="mt-10 space-y-4">
        <h2 className="font-display text-3xl text-primary">Regras rápidas</h2>
        <ul className="list-disc space-y-1.5 pl-5 text-[15px]">
          <li>
            Site:{" "}
            <a
              className="text-primary underline"
              href={SITE_URL}
              target="_blank"
              rel="noreferrer"
            >
              {SITE_URL}
            </a>
            . O endereço {SITE_ALIAS_URL} redireciona para este.
          </li>
          <li>
            <strong>É bug:</strong> tela em branco, layout estourado, botão que
            não leva a lugar nenhum, 404 inesperado, busca que não filtra, foto
            quebrada, hash <code>#faq</code> que não rola, formulário que
            aceita vazio, stack trace.
          </li>
          <li>
            <strong>Não é bug:</strong> conteúdo de homologação feio de
            propósito (“teste cafe”), “eu não gostei da cor”.
          </li>
        </ul>
        <Callout title="Como reportar">
          <p>
            Cada bug vai no formulário do Notion. Leve título curto, URL, o que
            você fez, o que esperava, o que aconteceu e um print.
          </p>
          <a
            href={REPORT_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className={`${buttonVariants()} mt-3`}
          >
            Abrir formulário de bugs
          </a>
        </Callout>
        <Callout title="Menu de todas as páginas">
          Início · Rede Prontera · Eventos · Salas · Contato — no topo e no
          rodapé. A página ativa fica sublinhada em rosa.
        </Callout>
      </section>

      <section id="antes" className="mt-10 space-y-4">
        <h2 className="font-display text-3xl text-primary">
          Antes de testar o site
        </h2>
        <p>
          O bug bash do site não começa nesta página. Primeiro alguém segue o{" "}
          <a className="text-primary underline" href="/django">
            roteiro Django
          </a>{" "}
          em{" "}
          <a className="text-primary underline" href={ADMIN_URL}>
            {ADMIN_URL}
          </a>{" "}
          e deixa estes cadastros no ar. Os prints mais abaixo ainda mostram
          Juliana, “teste cafe” e duas salas de um ambiente anterior. No site
          de hoje esses nomes não existem. Procure os nomes desta tabela.
        </p>
        <div className="overflow-x-auto rounded-xl bg-white text-sm ring-1 ring-foreground/10">
          <table className="w-full text-left">
            <thead className="bg-muted/70 text-xs tracking-wide uppercase">
              <tr>
                <th className="px-3 py-2">Cadastro</th>
                <th className="px-3 py-2">Onde conferir</th>
              </tr>
            </thead>
            <tbody className="[&_td]:px-3 [&_td]:py-2 [&_tr]:border-t">
              {PREP_PEOPLE.map((person) => (
                <tr key={person.slug}>
                  <td>
                    {person.name}
                    <div className="font-mono text-xs text-muted-foreground">
                      /redeprontera/{person.slug}
                    </div>
                  </td>
                  <td>{person.note}</td>
                </tr>
              ))}
              <tr>
                <td>
                  {PREP_EVENT.title}
                  <div className="font-mono text-xs text-muted-foreground">
                    /eventos e /eventos/{PREP_EVENT.slug}
                  </div>
                </td>
                <td>
                  Publicado, de {PREP_EVENT.start} a {PREP_EVENT.end}.
                </td>
              </tr>
              <tr>
                <td>
                  {PREP_ROOM.title}
                  <div className="font-mono text-xs text-muted-foreground">
                    /salas · id {PREP_ROOM.id}
                  </div>
                </td>
                <td>Pública, com um adicional e um pacote.</td>
              </tr>
              <tr>
                <td>
                  Formulário {PREP_FORM.slug}
                </td>
                <td>Publicado. Sem ele, /contato não mostra os campos.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Callout tone="warn" title="Se a lista da Rede estiver vazia">
          O preparo não rodou neste ambiente. Volte ao roteiro Django. Não
          teste em cima da sala 1 antiga nem invente conteúdo no meio do site.
        </Callout>
      </section>

      <Step guide="site" id="nav" n="1" title="Navegação: menu, rodapé e URL direta">
        <DoExpect
          doItems={[
            "Clique em cada item do menu do topo: Início, Rede Prontera, Eventos, Salas, Contato.",
            "Repita pelos links do rodapé.",
            "Cole na barra de endereço, uma a uma: /  /redeprontera  /eventos  /salas  /contato",
            "Dê refresh em cada uma.",
          ]}
          expectItems={[
            "Cada clique abre a página certa, sem 404.",
            "O item atual fica destacado (sublinhado).",
            "Colar a URL funciona igual ao clique — o menu não pode ser o único caminho.",
            "Rodapé e topo levam aos mesmos destinos.",
          ]}
        />
      </Step>

      <Step guide="site" id="home" n="2" title="Home / landing page">
        <p>
          A Home mistura o texto central (hero) com bolhas ao redor. Cada bolha
          é uma seção cadastrada no Django (Sobre, Propósito, FAQ, etc.).
        </p>
        <Shot
          src="/shots/site/home-hero.png"
          alt="Home do Espaço Prontera com hero e bolhas de seções"
          caption="Hero: eyebrow, título Espaço Prontera, texto e bolhas (Sobre, Juno, Rede, Eventos, Perguntas…)."
        />
        <DoExpect
          doItems={[
            `Abra ${SITE_URL} e espere o Carregando landing page… sumir.`,
            "Confira se o hero renderiza: título, subtítulo e texto.",
            "Clique nas bolhas: Sobre, Propósito, Como funciona, Juno, Rede, Eventos, Comunidade, Possibilidades, Próximos passos, Perguntas.",
            "Clique nos botões da seção Sobre (Entender a proposta, Ver salas e usos, Início).",
            "Cole na barra: …vercel.app/#faq  e …vercel.app/#sobre  e …vercel.app/#hero",
            "Cole uma âncora que não existe: …vercel.app/#nao-existe",
            "Role a página inteira até o rodapé. Nenhuma seção deve ficar em branco.",
          ]}
          expectItems={[
            "Cada bolha rola até a seção correspondente.",
            "Perguntas abre o bloco Perguntas frequentes, com as 6 perguntas.",
            "URL com #faq e #sobre também rola até o bloco certo (não fica só no topo).",
            "Âncora inexistente não trava o site.",
            "Botões de CTA levam à âncora ou página indicada, não a 404.",
          ]}
        />
        <Shot
          src="/shots/site/home-sobre.png"
          alt="Seção Sobre o espaço na landing"
          caption="Depois de clicar na bolha Sobre: título O que é o Prontera? e três botões."
        />
        <Shot
          src="/shots/site/home-faq.png"
          alt="Seção Perguntas frequentes"
          caption="FAQ. Se #faq não chegar aqui, registre bug."
        />
        <Callout tone="warn" title="Se alguém desativar uma seção no Django">
          Recarregue a Home: a bolha e o bloco devem sumir sem buraco estranho
          no layout. Não deixe a seção desativada no fim do teste.
        </Callout>
      </Step>

      <Step guide="site" id="rede" n="3" title="Rede Prontera">
        <p>
          URL: <code>/redeprontera</code>. Título da aba: Pessoas | Espaço
          Prontera. Cards de gente da comunidade, com busca e filtros.
        </p>
        <Shot
          src="/shots/site/rede-lista.png"
          alt="Lista da Rede Prontera com busca, filtros e cards"
          caption="Busca, Papel, Área de atuação, Vínculo com o Prontera. Cards com iniciais, badges e Ver perfil."
        />

        <p className="font-semibold">3.1 Lista, busca e filtros</p>
        <DoExpect
          doItems={[
            "Confira se os cards das pessoas BUGBASH- carregam. BUGBASH Oculta não pode aparecer.",
            "No campo Buscar, digite BUGBASH Pessoa. Depois limpe.",
            "Busque um termo absurdo: zzzz-nao-existe.",
            "Abra Papel e escolha Sócio. Depois Área de atuação = Tecnologia. Depois um vínculo.",
            "Combine busca + filtro e depois limpe tudo.",
          ]}
          expectItems={[
            "BUGBASH Pessoa Completa aparece no resultado. BUGBASH Oculta não aparece.",
            "Busca vazia mostra: Nenhuma pessoa encontrada com os filtros atuais…",
            "Filtros realmente escondem quem não combina.",
            "Badges de Áreas de atuação e os selos (parceiro / outro) aparecem nos cards certos.",
          ]}
        />
        <Shot
          src="/shots/site/rede-busca-vazia.png"
          alt="Rede sem resultados para busca inexistente"
          caption="Estado vazio da busca. Não pode ser uma tela branca."
        />

        <p className="font-semibold">3.2 Perfil completo (com foto e rede social)</p>
        <DoExpect
          doItems={[
            "No card da BUGBASH Pessoa Completa, clique em Ver perfil.",
            "Confira nome, headline, papéis, áreas, vínculos.",
            "Clique no ícone da rede social cadastrada no Django.",
            "Copie a URL: deve ser /redeprontera/bugbash-pessoa-completa. Cole em uma aba nova.",
          ]}
          expectItems={[
            "Abre o perfil, com Voltar para Rede Prontera.",
            "Foto (ou placeholder). Se aparecer o texto cru da foto no lugar da imagem, é bug.",
            "O ícone abre https://instagram.com/prontera (de preferência em nova aba).",
            "A URL com slug reabre o mesmo perfil.",
          ]}
        />
        <Shot
          src="/shots/site/perfil-juliana.png"
          alt="Exemplo antigo de perfil com foto e Instagram"
          caption="Print antigo (Juliana, ambiente anterior). No bash de hoje o perfil equivalente é BUGBASH Pessoa Completa."
        />

        <p className="font-semibold">3.3 Perfil sem foto</p>
        <DoExpect
          doItems={[
            "Abra /redeprontera/bugbash-sem-foto.",
          ]}
          expectItems={[
            "Círculo com as iniciais (AG), sem ícone quebrado.",
            "Página não estoura mesmo sem bio, papéis ou redes.",
          ]}
        />
        <Shot
          src="/shots/site/perfil-sem-foto.png"
          alt="Perfil do Agnaldo só com iniciais"
          caption="Pessoa pública sem foto, sem badges. Placeholder AG."
        />

        <p className="font-semibold">3.4 Perfil inexistente ou não público</p>
        <DoExpect
          doItems={[
            "Abra /redeprontera/nao-existe",
            "Abra /redeprontera/bugbash-oculta.",
          ]}
          expectItems={[
            "Cartão Pessoa não encontrada — Este perfil não existe ou não está público.",
            "Link Ver todas as pessoas volta para a lista.",
            "Sem stack trace, sem página 404 genérica (aqui o site usa essa mensagem específica).",
          ]}
        />
        <Shot
          src="/shots/site/perfil-inexistente.png"
          alt="Mensagem Pessoa não encontrada"
          caption="URL de perfil que não existe."
        />
      </Step>

      <Step guide="site" id="eventos" n="4" title="Eventos">
        <p>
          URL: <code>/eventos</code>. O preparo publicou{" "}
          <strong>{PREP_EVENT.title}</strong> ({PREP_EVENT.start} a {PREP_EVENT.end}).
          A API devolve esse evento, mas a página hoje não consegue montar o
          calendário.
        </p>
        <Shot
          src="/shots/site/eventos-calendario.png"
          alt="Calendário de eventos de setembro de 2026"
          caption="Visão Calendário. O mesmo evento se repete nos dias do intervalo, com selo EVENTO PROMOCIONAL."
        />
        <DoExpect
          doItems={[
            "Abra /eventos e espere o carregamento.",
            "Se aparecer Não foi possível carregar os eventos, pare aqui e reporte. Esse é o bug da simulação: o workshop existe no admin e na API, e a página não lista.",
            "Se o calendário carregar, confira setembro e outubro (setas < >) e clique num dia com BUGBASH Workshop.",
            "Alterne para Lista e busque BUGBASH.",
            "Anote a URL numérica que o clique abre (ex.: /eventos/1).",
            "Cole /eventos/bugbash-workshop e /eventos/nao-existe.",
          ]}
          expectItems={[
            "Calendário e Lista mostram o BUGBASH Workshop nos dias 30/09 a 02/10.",
            "Hoje a tela fica em Não foi possível carregar os eventos. Reporte com a URL /eventos, o que fez (abrir a página depois do preparo) e o que esperava (ver o workshop).",
            "Se um dia a lista carregar: a URL numérica abre o detalhe, e /eventos/bugbash-workshop também deveria abrir. Se o slug mostrar Evento não encontrado, reporte esse segundo bug.",
            "Evento inexistente, quando a página carrega: Evento não encontrado + Voltar para eventos.",
          ]}
        />
        <Shot
          src="/shots/site/eventos-lista.png"
          alt="Visão em lista dos eventos com filtros laterais"
          caption="Visão Lista: busca, dias do mês, tipo e modalidade."
        />
        <Shot
          src="/shots/site/evento-detalhe.png"
          alt="Exemplo de página de detalhe de evento"
          caption="Print antigo do detalhe pelo número. No bash de hoje o evento é BUGBASH Workshop. Sem capa: Imagem em breve."
        />
        <Shot
          src="/shots/site/evento-slug-nao-encontrado.png"
          alt="Evento não encontrado ao abrir pelo slug"
          caption="Abrir o evento pelo slug cai nesta tela. O mesmo evento, pelo número, abre. Reporte esse caso."
        />
        <Shot
          src="/shots/site/evento-inexistente.png"
          alt="Evento não encontrado"
          caption="Estado de evento inexistente ou não publicado. A mensagem é a mesma do slug."
        />
      </Step>

      <Step guide="site" id="salas" n="5" title="Salas">
        <p>
          URL: <code>/salas</code>. Já existe o card <strong>sala 1</strong> (15
          pessoas, R$ 30/hora, 08:00–20:00, sem adicionais). O preparo acrescenta{" "}
          <strong>{PREP_ROOM.title}</strong>. Não há página interna da sala — o
          404 em <code>/salas/sala-1</code> e em <code>/salas/{PREP_ROOM.id}</code>{" "}
          é o comportamento atual (confirme se isso é aceitável ou bug de produto).
        </p>
        <Shot
          src="/shots/site/salas.png"
          alt="Lista de salas com capacidade, valor e botão Reservar"
          caption="Sala 1 (10 pessoas, R$ 50/hora, 08:00–20:00) e Sala 2 (5 pessoas, R$ 60/hora, 08:00–12:00)."
        />
        <DoExpect
          doItems={[
            "Confira sala 1 e BUGBASH Sala Teste: título, descrição, capacidade, valor e horário.",
            "Em BUGBASH Sala Teste, clique em Adicionais e Pacotes.",
            "Clique em Reservar em cada sala. Veja se abre formulário, âncora, WhatsApp, Contato ou nada.",
            "Abra /salas/nao-existe, /salas/sala-1 e /salas/bugbash-sala.",
          ]}
          expectItems={[
            "Sem foto: Imagem em breve…, sem ícone quebrado.",
            "BUGBASH Sala Teste expõe o adicional e o pacote criados no Django.",
            "sala 1 não tem adicionais. Isso é o dado atual, não um bug.",
            "Reservar precisa fazer alguma coisa visível. Se só sublinhar o texto, anote.",
            "URL de sala inexistente: 404 amigável Página não encontrada, com botão Voltar para a página inicial.",
          ]}
        />
        <Shot
          src="/shots/site/salas-addons.png"
          alt="Sala 1 com adicionais e pacotes abertos"
          caption="Adicionais e Pacotes expandidos. Reservar à direita."
        />
        <Shot
          src="/shots/site/sala-404.png"
          alt="Página 404 do site"
          caption="404 usada hoje para URLs de sala que não existem."
        />
      </Step>

      <Step guide="site" id="contato" n="6" title="Contato">
        <p>
          URL: <code>/contato</code>. Título Fale Conosco. Card de informações
          à esquerda (ainda provisório enquanto Informações gerais estiver
          vazio) e, à direita, o formulário publicado com slug{" "}
          <code>{PREP_FORM.slug}</code>. Se aparecer “Não foi possível carregar
          o formulário”, o passo 9 do Django não foi feito.
        </p>
        <Shot
          src="/shots/site/contato.png"
          alt="Página Fale Conosco com informações e formulário"
          caption="Campos: Nome, E-mail, Mensagem. Botão Enviar mensagem."
        />
        <DoExpect
          doItems={[
            "Clique em Enviar mensagem com os três campos vazios.",
            "Preencha só o nome e envie de novo.",
            "Coloque um e-mail inválido (abc) e envie.",
            "Preencha Nome, e-mail válido e uma mensagem curta. Envie de verdade só se combinarem no grupo (cai no admin).",
            "Confira se o card Informações reflete o cadastro do Django.",
          ]}
          expectItems={[
            "Vazio: bordas vermelhas e textos Informe seu nome / Informe seu e-mail / Escreva sua mensagem.",
            "E-mail inválido não passa.",
            "Envio ok: Mensagem enviada com sucesso. (não um erro genérico)",
            "Falha de rede: Não foi possível enviar. Tente novamente.",
            "Menu e rodapé continuam iguais às outras páginas.",
          ]}
        />
        <Shot
          src="/shots/site/contato-validacao.png"
          alt="Formulário de contato com erros de validação"
          caption="Validação ao enviar vazio. Os três campos reclamam."
        />
      </Step>

      <Step guide="site" id="rotas" n="7" title="Tabela de rotas (cole cada URL)">
        <p>
          Não clique só no menu. Cole cada endereço. É o teste que mais acha
          404 escondido.
        </p>
        <div className="overflow-x-auto rounded-xl bg-white text-sm ring-1 ring-foreground/10">
          <table className="w-full text-left">
            <thead className="bg-muted/70 text-xs tracking-wide uppercase">
              <tr>
                <th className="px-3 py-2">URL</th>
                <th className="px-3 py-2">Esperado</th>
              </tr>
            </thead>
            <tbody className="[&_td]:px-3 [&_td]:py-2 [&_tr]:border-t">
              <tr>
                <td className="font-mono text-xs">/</td>
                <td>Home com hero e bolhas</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/#faq</td>
                <td>Rola até Perguntas frequentes</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/#sobre</td>
                <td>Rola até O que é o Prontera?</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/redeprontera</td>
                <td>Lista de pessoas + filtros</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/redeprontera/bugbash-pessoa-completa</td>
                <td>Perfil da pessoa completa</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/redeprontera/bugbash-sem-foto</td>
                <td>Perfil sem foto (iniciais)</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/redeprontera/bugbash-oculta</td>
                <td>Pessoa não encontrada</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/redeprontera/nao-existe</td>
                <td>Pessoa não encontrada</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/eventos</td>
                <td>Calendário com o workshop. Hoje: Não foi possível carregar os eventos — reporte</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/eventos/&lt;id&gt;</td>
                <td>Detalhe do BUGBASH Workshop (o número que o clique abre)</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/eventos/bugbash-workshop</td>
                <td>Deveria abrir o workshop. Hoje: Evento não encontrado — reporte</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/eventos/nao-existe</td>
                <td>Evento não encontrado</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/salas</td>
                <td>sala 1 e BUGBASH Sala Teste</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/salas/sala-1</td>
                <td>Hoje: 404. Confirme se deveria existir detalhe</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/contato</td>
                <td>Fale Conosco</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/pagina-que-nao-existe</td>
                <td>404 Página não encontrada + botão Voltar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Shot
          src="/shots/site/404.png"
          alt="Página 404 Página não encontrada"
          caption="404 padrão do site. Header e footer continuam no lugar."
        />
      </Step>

      <Step guide="site" id="mobile" n="8" title="Passada no celular">
        <p>
          F12 → modo celular (390×844) ou o próprio telefone. Gaste uns 5
          minutos em cada tela crítica.
        </p>
        <DoExpect
          doItems={[
            "Home: as bolhas cabem na tela? Dá para clicar sem errar a vizinha?",
            "Rede: filtros e cards empilham? A busca continua usável?",
            "Eventos: calendário não estoura para o lado?",
            "Salas: botão Reservar e Adicionais não ficam escondidos?",
            "Contato: o formulário não corta o botão Enviar?",
          ]}
          expectItems={[
            "Nada de scroll horizontal indesejado.",
            "Menu do topo quebra em duas linhas, mas os 5 links continuam clicáveis.",
            "Textos não encavalam nas bolhas (veja Possibilidades cortado no print).",
          ]}
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          <Shot src="/shots/mobile/home.png" alt="Home no celular" caption="Home" />
          <Shot src="/shots/mobile/rede.png" alt="Rede no celular" caption="Rede" />
          <Shot src="/shots/mobile/eventos.png" alt="Eventos no celular" caption="Eventos" />
          <Shot src="/shots/mobile/salas.png" alt="Salas no celular" caption="Salas" />
          <Shot src="/shots/mobile/contato.png" alt="Contato no celular" caption="Contato" />
        </div>
      </Step>

      <section id="folha" className="print-break space-y-4 py-8">
        <h2 className="font-display text-3xl text-primary">Folha de resposta</h2>
        <p className="text-sm text-muted-foreground">
          Use esta lista só para acompanhar o que já testou. Os bugs em si
          entram no formulário — um registro sem URL não dá para reproduzir.
        </p>
        <a
          href={REPORT_FORM_URL}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Reportar bug no formulário
        </a>
        <div className="rounded-2xl bg-white p-5 text-sm ring-1 ring-foreground/10">
          <p>Tester: __________________ Navegador: __________________ Data: ________</p>
          <ul className="mt-4 space-y-2">
            {[
              ["site:nav", "Navegação (menu / rodapé / URL)"],
              ["site:home", "Home / hashes / bolhas / CTAs"],
              ["site:rede", "Rede — lista, busca, perfil, sem foto, oculta"],
              ["site:eventos", "Eventos — calendário, lista, detalhe, slug"],
              ["site:salas", "Salas — cards, adicionais, Reservar"],
              ["site:contato", "Contato — validação e envio"],
              ["site:rotas", "Rotas / 404"],
              ["site:mobile", "Mobile"],
            ].map(([key, label]) => (
              <li key={key} className="flex gap-2">
                <CheckItem storageKey={key} />
                <span>
                  {label} — ok / bugs: _______________________________
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-semibold">Bugs encontrados</p>
          <p className="mt-1 text-muted-foreground">
            Não escreva o bug só aqui. Abra o{" "}
            <a
              href={REPORT_FORM_URL}
              className="font-medium text-primary underline"
              target="_blank"
              rel="noreferrer"
            >
              formulário de report
            </a>{" "}
            e envie um registro por problema.
          </p>
        </div>
      </section>
    </GuideShell>
  );
}
