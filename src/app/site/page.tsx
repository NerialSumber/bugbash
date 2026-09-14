import { Callout } from "@/components/callout";
import { DoExpect } from "@/components/expect";
import { GuideShell } from "@/components/guide-shell";
import { Shot } from "@/components/shot";
import { Step } from "@/components/step";
import { buttonVariants } from "@/components/ui/button";
import { REPORT_FORM_URL } from "@/lib/links";

const toc = [
  { id: "regras", label: "Regras do Bug Bash" },
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
      intro="Teste como visitante. Abra o site, siga os passos na ordem e marque o quadradinho quando terminar. Se algo sair diferente do “o que deve acontecer”, registre no formulário de bugs."
      toc={toc}
    >
      <section id="regras" className="mt-10 space-y-4">
        <h2 className="font-display text-3xl text-primary">Regras rápidas</h2>
        <ul className="list-disc space-y-1.5 pl-5 text-[15px]">
          <li>
            Site:{" "}
            <a
              className="text-primary underline"
              href="https://prontera-eight.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              https://prontera-eight.vercel.app
            </a>
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
            "Abra https://prontera-eight.vercel.app e espere o Carregando landing page… sumir.",
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
            "Confira se os cards carregam (hoje há dezenas de nomes: Agnaldo, Bianca, Juliana…).",
            "No campo Buscar, digite Juliana. Depois limpe.",
            "Busque um termo absurdo: zzzz-nao-existe.",
            "Abra Papel e escolha Sócio. Depois Área de atuação = Tecnologia. Depois um vínculo.",
            "Combine busca + filtro e depois limpe tudo.",
          ]}
          expectItems={[
            "Juliana aparece no resultado.",
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
            "No card da Juliana Negreiros, clique em Ver perfil.",
            "Confira nome, headline, papéis, áreas, vínculos.",
            "Clique no ícone do Instagram.",
            "Copie a URL: deve ser /redeprontera/juliana-negreiros. Cole em uma aba nova.",
          ]}
          expectItems={[
            "Abre o perfil, com Voltar para Rede Prontera.",
            "Foto (ou placeholder). Se aparecer o texto cru Foto de Juliana Negreiros no lugar da imagem, é bug.",
            "Ícone do Instagram abre o perfil https://instagram.com/juu_negreiros (de preferência em nova aba).",
            "A URL com slug reabre o mesmo perfil.",
          ]}
        />
        <Shot
          src="/shots/site/perfil-juliana.png"
          alt="Perfil de Juliana Negreiros"
          caption="Perfil com headline, Instagram, papéis Sócio/Equipe, áreas e vínculos."
        />

        <p className="font-semibold">3.3 Perfil sem foto</p>
        <DoExpect
          doItems={[
            "Abra /redeprontera/agnaldo (ou outro card só com iniciais).",
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
            "Se alguém criou uma pessoa BUGBASH Oculta no Django, cole o slug dela aqui também.",
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
          URL: <code>/eventos</code>. Há duas visões: Calendário e Lista. O
          evento atual de homologação é <strong>teste cafe</strong> (14–18/set).
        </p>
        <Shot
          src="/shots/site/eventos-calendario.png"
          alt="Calendário de eventos de setembro de 2026"
          caption="Visão Calendário. O mesmo evento se repete nos dias do intervalo, com selo EVENTO PROMOCIONAL."
        />
        <DoExpect
          doItems={[
            "Abra /eventos. Confira o mês (setas &lt; &gt;).",
            "Clique em um dia com teste cafe.",
            "Alterne para Lista.",
            "Na lista, use Buscar (Título ou descrição…), o mini calendário de dias, Tipo e Modalidade.",
            "Clique no card teste cafe.",
            "Cole /eventos/1 na barra (detalhe por id).",
            "Cole /eventos/teste-cafe (detalhe por slug).",
            "Cole /eventos/nao-existe.",
          ]}
          expectItems={[
            "Calendário e Lista mostram o mesmo evento.",
            "O detalhe por id (/eventos/1) abre título, tipo, formato, datas e o texto Nenhuma atividade publicada ainda.",
            "Confira se o slug /eventos/teste-cafe também abre o evento. Se aparecer Evento não encontrado, anote — o calendário e o slug deveriam bater.",
            "Evento inexistente: Evento não encontrado + Voltar para eventos. Sem tela branca.",
          ]}
        />
        <Shot
          src="/shots/site/eventos-lista.png"
          alt="Visão em lista dos eventos com filtros laterais"
          caption="Visão Lista: busca, dias do mês, tipo e modalidade."
        />
        <Shot
          src="/shots/site/evento-detalhe.png"
          alt="Página de detalhe do evento teste cafe"
          caption="Detalhe em /eventos/1. Sem capa: Imagem em breve. Sem atividades cadastradas."
        />
        <Shot
          src="/shots/site/evento-inexistente.png"
          alt="Evento não encontrado"
          caption="Estado de evento inexistente ou não publicado."
        />
      </Step>

      <Step guide="site" id="salas" n="5" title="Salas">
        <p>
          URL: <code>/salas</code>. Dois cards: Sala 1 e Sala 2. Não há página
          interna da sala — o 404 em <code>/salas/sala-1</code> é o
          comportamento atual (confirme se isso é aceitável ou bug de produto).
        </p>
        <Shot
          src="/shots/site/salas.png"
          alt="Lista de salas com capacidade, valor e botão Reservar"
          caption="Sala 1 (10 pessoas, R$ 50/hora, 08:00–20:00) e Sala 2 (5 pessoas, R$ 60/hora, 08:00–12:00)."
        />
        <DoExpect
          doItems={[
            "Confira título, descrição, capacidade, valor e horário de cada card.",
            "Clique em Adicionais e Pacotes na Sala 1 e na Sala 2.",
            "Clique em Reservar em cada sala. Veja se abre formulário, âncora, WhatsApp, Contato ou nada.",
            "Abra /salas/nao-existe e /salas/sala-1.",
          ]}
          expectItems={[
            "Sem foto: Imagem em breve…, sem ícone quebrado.",
            "Sala 1 expõe adicional Cadeiras e pacote Day use.",
            "Sala 2 expõe Projetor e pacote Mensal.",
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
          à esquerda (ainda provisório se o Django não tiver Informações
          gerais) e formulário à direita.
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
                <td className="font-mono text-xs">/redeprontera/juliana-negreiros</td>
                <td>Perfil da Juliana</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/redeprontera/agnaldo</td>
                <td>Perfil sem foto (iniciais)</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/redeprontera/nao-existe</td>
                <td>Pessoa não encontrada</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/eventos</td>
                <td>Calendário / lista</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/eventos/1</td>
                <td>Detalhe do teste cafe</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/eventos/teste-cafe</td>
                <td>Detalhe ou Evento não encontrado — anote o que acontecer</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/eventos/nao-existe</td>
                <td>Evento não encontrado</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/salas</td>
                <td>Dois cards de sala</td>
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
              "Navegação (menu / rodapé / URL)",
              "Home / hashes / bolhas / CTAs",
              "Rede — lista, busca, filtros",
              "Rede — perfil, Instagram, sem foto, 404",
              "Eventos — calendário, lista, detalhe, slug",
              "Salas — cards, adicionais, Reservar",
              "Contato — validação e envio",
              "Rotas / 404",
              "Mobile",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-0.5 inline-block size-4 rounded border" />
                {item} — ok / bugs: _______________________________
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
