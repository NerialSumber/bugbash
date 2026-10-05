import { BugbashBrief } from "@/components/bugbash-brief";
import { Callout } from "@/components/callout";
import { DoExpect } from "@/components/expect";
import { GuideShell } from "@/components/guide-shell";
import { Shot } from "@/components/shot";
import { Step } from "@/components/step";
import { buttonVariants } from "@/components/ui/button";
import { ADMIN_URL, NAME_EXAMPLE, REPORT_FORM_URL, SITE_URL } from "@/lib/links";

const toc = [
  { id: "regras", label: "Antes de começar" },
  { id: "antes", label: "O que procurar" },
  { id: "nav", label: "1. Menu e rodapé" },
  { id: "home", label: "2. Página inicial" },
  { id: "rede", label: "3. Rede de pessoas" },
  { id: "eventos", label: "4. Eventos" },
  { id: "salas", label: "5. Salas" },
  { id: "contato", label: "6. Fale conosco" },
  { id: "rotas", label: "7. Links para colar" },
  { id: "mobile", label: "8. No celular" },
];

const yours = [
  {
    what: `Pessoa com foto, exemplo ${NAME_EXAMPLE.person}`,
    where: `/redeprontera/${NAME_EXAMPLE.personSlug}`,
    note: "Cartão, foto, frase e selos. Troque ana pelo seu nome.",
  },
  {
    what: `Pessoa sem foto, exemplo ${NAME_EXAMPLE.plain}`,
    where: `/redeprontera/${NAME_EXAMPLE.plainSlug}`,
    note: "O círculo mostra as iniciais, sem imagem quebrada.",
  },
  {
    what: `Pessoa escondida, exemplo ${NAME_EXAMPLE.hidden}`,
    where: `/redeprontera/${NAME_EXAMPLE.hiddenSlug}`,
    note: "Não entra na lista. O link direto diz que não encontrou.",
  },
  {
    what: `Evento, exemplo ${NAME_EXAMPLE.event}`,
    where: `/eventos/${NAME_EXAMPLE.eventSlug}`,
    note: "Calendário do mês de hoje, com as datas que você escolheu.",
  },
  {
    what: `Sala, exemplo ${NAME_EXAMPLE.room}`,
    where: "/salas",
    note: "Cartão na lista, com o adicional e o pacote do seu nome.",
  },
] as const;

export default function SitePage() {
  return (
    <GuideShell
      kicker="Passo 2"
      title="Veja se o seu cadastro apareceu"
      intro="Abra o site como visita. Procure a pessoa, o evento e a sala que você criou com o seu nome. Atualize a página depois de mudar uma palavra no painel. Marque o quadradinho quando terminar cada parte. Se a tela ficar diferente do que este roteiro descreve, anote no formulário."
      toc={toc}
    >
      <BugbashBrief variant="short" />
      <section id="regras" className="mt-10 space-y-4">
        <h2 className="font-display text-3xl text-primary">Antes de começar</h2>
        <ul className="list-disc space-y-1.5 pl-5 text-[15px]">
          <li>
            O site para visitar é{" "}
            <a
              className="text-primary underline"
              href={SITE_URL}
              target="_blank"
              rel="noreferrer"
            >
              {SITE_URL}
            </a>
            .
          </li>
          <li>
            Os cadastros nascem no{" "}
            <a className="text-primary underline" href="/django">
              painel
            </a>
            , com o seu usuário, não com um título igual para todo mundo.
          </li>
          <li>
            No celular, abra o mesmo link pelo WhatsApp, no telefone que você
            usa no dia a dia.
          </li>
          <li>
            <strong>Vale anotar:</strong> página em branco, texto cortado,
            botão que não abre nada, busca que não filtra, foto que não
            carrega, data que não aparece, página que não desce até a parte
            certa, formulário que aceita tudo vazio, ou uma tela cheia de
            texto de erro.
          </li>
          <li>
            <strong>Pode deixar quieto:</strong> texto de teste que já estava
            no site, como “teste cafe”, e gosto pessoal, como “eu mudaria a
            cor”.
          </li>
        </ul>
        <Callout title="Como anotar um problema">
          <p>
            Cada problema vai no formulário. Escreva um título curto, o link da
            página, o que você fez, o que esperava ver, o que aconteceu e um
            print.
          </p>
          <a
            href={REPORT_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className={`${buttonVariants()} mt-3`}
          >
            Abrir formulário
          </a>
        </Callout>
        <Callout title="O menu se repete em todas as páginas">
          Início, Rede Prontera, Eventos, Salas e Contato ficam no topo e de
          novo no final da página. A página em que você está fica sublinhada
          em rosa.
        </Callout>
      </section>

      <section id="antes" className="mt-10 space-y-4">
        <h2 className="font-display text-3xl text-primary">O que procurar</h2>
        <p>
          A tabela usa Ana como exemplo. Troque pelo slug que você escreveu.
          Atualize a página se o nome não aparecer de primeira.
        </p>
        <Callout title="O teste principal">
          Achar no site a pessoa com foto, a pessoa sem foto, o evento e a
          sala com o seu nome. A pessoa escondida não pode aparecer. Depois de
          mudar uma palavra no painel, o site mostra o texto novo. Nome, foto,
          data e frase precisam estar completos.
        </Callout>
        <p>
          Alguns prints antigos ainda mostram a Juliana. Procure primeiro o
          que você cadastrou.
        </p>
        <div className="overflow-x-auto rounded-xl bg-white text-sm ring-1 ring-foreground/10">
          <table className="w-full text-left">
            <thead className="bg-muted/70 text-xs tracking-wide uppercase">
              <tr>
                <th className="px-3 py-2">O que você criou</th>
                <th className="px-3 py-2">Onde olhar</th>
              </tr>
            </thead>
            <tbody className="[&_td]:px-3 [&_td]:py-2 [&_tr]:border-t">
              {yours.map((row) => (
                <tr key={row.where + row.what}>
                  <td>
                    {row.what}
                    <div className="font-mono text-xs text-muted-foreground">{row.where}</div>
                  </td>
                  <td>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout tone="warn" title="Se o seu nome não aparecer">
          O cadastro ainda não chegou no site, ficou como rascunho, ou a
          caixinha Pública está desmarcada. Volte ao{" "}
          <a className="font-medium underline" href="/django">
            painel
          </a>{" "}
          com o seu usuário. O link do painel é {ADMIN_URL}. Não procure um
          cadastro chamado bugbash: cada pessoa usa o próprio nome.
        </Callout>
      </section>

      <Step guide="site" id="nav" n="1" title="Passar pelo menu e pelo rodapé">
        <p>
          O menu é o caminho normal. Também vale colar o link direto, para ver
          se a página abre sem precisar clicar.
        </p>
        <DoExpect
          doItems={[
            "Clique em cada item do menu do topo: Início, Rede Prontera, Eventos, Salas e Contato.",
            "Desça até o final da página e clique nos mesmos nomes de novo.",
            "Na barra de endereço, cole um por um os finais /redeprontera, /eventos, /salas e /contato, depois do link do site.",
            "Atualize cada página.",
          ]}
          expectItems={[
            "Cada clique abre a página certa, sem a mensagem Página não encontrada.",
            "O item da página atual fica destacado.",
            "Colar o link funciona igual ao clique.",
            "O topo e o final da página levam aos mesmos lugares.",
            "Nenhuma dessas páginas fica em branco nem pede para rolar para o lado.",
          ]}
        />
      </Step>

      <Step guide="site" id="home" n="2" title="Olhar a página inicial">
        <p>
          A primeira página tem um texto grande no começo e bolhas ao redor.
          Ela é compartilhada: não espere ver o seu nome aqui. O seu nome está
          na Rede, em Eventos e em Salas.
        </p>
        <Shot
          src="/shots/site/home-hero.png"
          alt="Página inicial do Espaço Prontera, com o texto grande e as bolhas"
          caption="Começo da página: título Espaço Prontera, texto e bolhas como Sobre, Rede, Eventos e Perguntas."
        />
        <DoExpect
          doItems={[
            `Abra ${SITE_URL} e espere a frase “Carregando…” sumir.`,
            "Veja se o título, o texto e as bolhas apareceram.",
            "Clique nas bolhas: Sobre, Propósito, Como funciona, Juno, Rede, Eventos, Comunidade, Possibilidades, Próximos passos e Perguntas.",
            "Na parte Sobre, clique nos botões, como Entender a proposta e Ver salas.",
            "No fim do link, acrescente #faq e aperte Enter. Faça o mesmo com #sobre.",
            "Teste um final que não existe, #nao-existe.",
            "Role a página até o final. Nenhuma parte deve ficar em branco.",
          ]}
          expectItems={[
            "Cada bolha desce até a parte correspondente. O texto da bolha não fica cortado.",
            "Perguntas abre as perguntas frequentes.",
            "#faq desce até as perguntas. #sobre desce até “O que é o Prontera?”.",
            "Um final que não existe não trava o site.",
            "Os botões levam a uma parte da página ou a outra página, e não a uma tela de erro.",
          ]}
        />
        <Shot
          src="/shots/site/home-sobre.png"
          alt="Parte Sobre da página inicial"
          caption="Depois de clicar na bolha Sobre: o título “O que é o Prontera?” e três botões."
        />
        <Shot
          src="/shots/site/home-faq.png"
          alt="Parte de perguntas frequentes"
          caption="Perguntas frequentes. Se #faq não chegar aqui, anote no formulário."
        />
        <Callout tone="warn" title="Não desmarque blocos da página inicial">
          Outras pessoas estão olhando a mesma tela. Se uma bolha já estiver
          faltando, anote. Não desligue um bloco no painel no meio do teste.
        </Callout>
      </Step>

      <Step guide="site" id="rede" n="3" title="Procurar as suas pessoas na Rede">
        <p>
          Abra Rede Prontera. Procure as três pessoas que você criou. A com
          foto e a sem foto aparecem. A escondida não.
        </p>
        <Shot
          src="/shots/site/rede-lista.png"
          alt="Lista da Rede, com busca, filtros e cartões"
          caption="Busca, Papel, Área de atuação e Vínculo. Cada cartão tem Ver perfil."
        />

        <p className="font-semibold">Lista, busca e filtros</p>
        <DoExpect
          doItems={[
            "Procure a pessoa pública com o seu nome. A escondida não pode aparecer na lista.",
            "Na busca, digite o começo desse nome. Depois apague.",
            "Busque uma palavra que não existe, como zzzz-nao-existe.",
            "Abra Papel e escolha a opção que você marcou no cadastro. Faça o mesmo em Área e em Vínculo.",
            "Junte busca e filtro, e depois limpe tudo.",
            "Se você mudou a frase de apresentação no painel, atualize esta página e confira o texto novo.",
          ]}
          expectItems={[
            "A pessoa pública com foto aparece. A sem foto também. A escondida não.",
            "Uma busca sem resultado mostra a frase “Nenhuma pessoa encontrada…”, e não uma tela branca.",
            "O filtro esconde quem não combina com a opção escolhida.",
            "Os selos de área, papel e vínculo aparecem no cartão da pessoa em que você os marcou.",
            "A frase editada no painel é a que aparece no cartão ou no perfil.",
          ]}
        />
        <Shot
          src="/shots/site/rede-busca-vazia.png"
          alt="Rede sem resultados na busca"
          caption="Quando a busca não acha ninguém, aparece este aviso. Não pode ser uma tela branca."
        />

        <p className="font-semibold">Perfil com foto</p>
        <DoExpect
          doItems={[
            "No cartão da pessoa com foto que você criou, clique em Ver perfil.",
            "Confira nome, foto, frase de apresentação, papel, área e vínculo.",
            "Se tiver ícone do Instagram, clique nele.",
            "Copie o link da página e cole numa aba nova.",
          ]}
          expectItems={[
            "Abre o perfil, com um link para voltar à Rede.",
            "A foto é a que você enviou. Se no lugar da foto surgir um texto estranho ou uma imagem quebrada, anote.",
            "O ícone, se você colou o campo de redes, abre o Instagram.",
            "O link copiado abre o mesmo perfil de novo.",
          ]}
        />
        <Shot
          src="/shots/site/perfil-juliana.png"
          alt="Exemplo de perfil com foto e Instagram"
          caption="Exemplo de perfil com foto. O seu deve mostrar o nome e a foto que você cadastrou."
        />

        <p className="font-semibold">Perfil sem foto</p>
        <DoExpect
          doItems={[
            "Abra o perfil da pessoa sem foto que você criou, a do slug sem-foto.",
          ]}
          expectItems={[
            "O círculo mostra as iniciais do nome, sem uma imagem quebrada.",
            "A página continua inteira mesmo sem texto longo ou redes sociais.",
          ]}
        />
        <Shot
          src="/shots/site/perfil-sem-foto.png"
          alt="Perfil só com as iniciais no lugar da foto"
          caption="Pessoa sem foto. O círculo usa as iniciais do nome."
        />

        <p className="font-semibold">Pessoa escondida ou que não existe</p>
        <DoExpect
          doItems={[
            `Cole o link da pessoa escondida: /redeprontera/${NAME_EXAMPLE.hiddenSlug}, trocando ana pelo seu nome.`,
            "No fim do link da Rede, troque o nome por nao-existe.",
          ]}
          expectItems={[
            "Os dois dizem “Pessoa não encontrada” e que o perfil não existe ou não está público.",
            "O link Ver todas as pessoas volta para a lista.",
            "Não aparece uma tela cheia de texto de erro, nem o cadastro escondido.",
          ]}
        />
        <Shot
          src="/shots/site/perfil-inexistente.png"
          alt="Aviso de pessoa não encontrada"
          caption="O que aparece quando o perfil não existe ou está escondido."
        />
      </Step>

      <Step guide="site" id="eventos" n="4" title="Olhar o seu evento">
        <p>
          Abra a página Eventos. Procure o evento com o seu nome, no mês de
          hoje. As datas são as que você preencheu no painel, de hoje até dois
          dias à frente. Não procure um workshop com o mesmo título para todo
          mundo.
        </p>
        <Shot
          src="/shots/site/eventos-calendario.png"
          alt="Calendário de eventos"
          caption="Visão de calendário. Um evento de vários dias se repete nesses dias."
        />
        <DoExpect
          doItems={[
            "Abra Eventos e espere carregar.",
            "Se aparecer “Não foi possível carregar os eventos”, pare e anote no formulário.",
            "Olhe o mês de hoje. Clique num dia entre o início e o fim do seu evento.",
            "Mude para a visão de lista. Na busca, digite o seu primeiro nome.",
            "Abra o filtro de tipo e escolha a opção que você marcou. Faça o mesmo no filtro de presencial ou online. Depois limpe.",
            "Clique no seu evento. Veja título, datas, texto e a atividade com o seu nome.",
            "Se você mudou o resumo no painel, atualize e confira o texto novo.",
            "Cole /eventos/nao-existe. Depois cole /eventos/ e o slug do seu evento.",
          ]}
          expectItems={[
            "O seu evento publicado aparece no calendário e na lista, com o seu nome.",
            "Os dias mostram a data que você cadastrou, não uma data vazia ou de outro mês.",
            "Os filtros escondem o que não combina com a opção escolhida, e não deixam a página em branco.",
            "Clicar no evento abre a página dele, com título, datas, texto e a atividade.",
            "A capa, se você enviou, aparece. Sem capa, o texto é Imagem em breve.",
            "Um evento que não existe mostra “Evento não encontrado” e um link para voltar.",
            "O link com o slug do seu evento abre a mesma página do clique no calendário. Se um abrir e o outro não, anote os dois.",
          ]}
        />
        <Shot
          src="/shots/site/eventos-lista.png"
          alt="Eventos em lista, com filtros do lado"
          caption="Visão em lista: busca, dias do mês, tipo e se é presencial ou online."
        />
        <Shot
          src="/shots/site/evento-detalhe.png"
          alt="Página de um evento"
          caption="Página do evento. Sem capa, o site mostra “Imagem em breve”."
        />
        <Shot
          src="/shots/site/evento-slug-nao-encontrado.png"
          alt="Aviso de evento não encontrado ao abrir pelo nome do link"
          caption="Se o link com o nome do evento cair nesta tela, e o clique no calendário abrir o evento, anote os dois."
        />
        <Shot
          src="/shots/site/evento-inexistente.png"
          alt="Aviso de evento não encontrado"
          caption="Evento que não existe ou que ainda está em rascunho."
        />
      </Step>

      <Step guide="site" id="salas" n="5" title="Olhar a sua sala">
        <p>
          A página Salas mostra cartões. A sala 1 já estava lá: olhe, não
          precisa ser a sua. A sua é a sala com o seu nome, o adicional e o
          pacote que você criou. O site hoje não tem uma página separada para
          cada sala: o teste é na lista.
        </p>
        <Shot
          src="/shots/site/salas.png"
          alt="Lista de salas, com capacidade, valor e botão Reservar"
          caption="Cada sala mostra capacidade, valor da hora, horário e o botão Reservar."
        />
        <DoExpect
          doItems={[
            "Ache o cartão com o seu nome. Confira título, descrição, capacidade, valor e horário.",
            "Se você mudou a descrição no painel, atualize e confira o texto novo.",
            "Na sua sala, clique em Adicionais e em Pacotes. Os nomes precisam ser os que você criou.",
            "Clique em Reservar.",
            "Cole /salas/nao-existe. Faça o mesmo com /salas/ e o identificador da sua sala.",
          ]}
          expectItems={[
            "A foto, se você enviou, aparece. Sem foto, o texto é Imagem em breve, sem imagem quebrada.",
            "A sua sala mostra o extra e o pacote com o seu nome. A sala 1 pode não ter os mesmos extras.",
            "Reservar abre um próximo passo: uma conversa no WhatsApp, a página Fale conosco ou um formulário na própria página. Se não abrir nada, ou só a palavra mudar de cor, anote.",
            "Um link de sala que não existe mostra Página não encontrada, com um botão para voltar ao início.",
          ]}
        />
        <Shot
          src="/shots/site/salas-addons.png"
          alt="Sala com adicionais e pacotes abertos"
          caption="Adicionais e Pacotes abertos. O botão Reservar fica à direita."
        />
        <Shot
          src="/shots/site/sala-404.png"
          alt="Página não encontrada"
          caption="O que aparece hoje quando o link de uma sala não existe."
        />
      </Step>

      <Step guide="site" id="contato" n="6" title="Enviar a sua mensagem">
        <p>
          A página se chama Fale conosco. À esquerda ficam os dados do espaço.
          À direita, o formulário. Se aparecer “Não foi possível carregar o
          formulário”, volte ao passo do formulário no{" "}
          <a className="text-primary underline" href="/django">
            painel
          </a>
          . A mensagem leva o seu primeiro nome. Depois de enviar certo, abra{" "}
          <a className="text-primary underline" href="/django#contato">
            Mensagens recebidas
          </a>{" "}
          e procure esse nome.
        </p>
        <Shot
          src="/shots/site/contato.png"
          alt="Página Fale conosco, com dados do espaço e formulário"
          caption="Campos Nome, E-mail e Mensagem. Botão Enviar mensagem."
        />
        <DoExpect
          doItems={[
            "Clique em Enviar mensagem com os três campos vazios.",
            "Preencha só o nome e envie de novo.",
            "No e-mail, escreva abc e envie.",
            "Preencha nome, um e-mail válido e uma mensagem curta com o seu primeiro nome. Envie.",
            "Veja se o cartão da esquerda mostra e-mail e telefone, e se o texto está inteiro.",
            "Abra o painel, em Mensagens de contato, e procure a mensagem com o seu nome.",
          ]}
          expectItems={[
            "Vazio: os três campos ficam vermelhos e pedem nome, e-mail e mensagem.",
            "Um e-mail sem @ não passa.",
            "Envio certo: aparece “Mensagem enviada com sucesso”.",
            "A mesma mensagem aparece no painel, com o texto que você escreveu.",
            "Se a internet falhar, aparece um pedido para tentar de novo.",
            "O menu continua igual ao das outras páginas.",
          ]}
        />
        <Shot
          src="/shots/site/contato-validacao.png"
          alt="Formulário de contato com avisos em vermelho"
          caption="O que acontece ao enviar vazio. Os três campos pedem para ser preenchidos."
        />
      </Step>

      <Step guide="site" id="rotas" n="7" title="Colar estes links">
        <p>
          O começo do link é {SITE_URL}. Cole cada final da tabela depois
          desse começo. Onde aparecer ana, troque pelo seu nome em minúsculas,
          sem acento. Exemplo: {SITE_URL}/redeprontera/{NAME_EXAMPLE.personSlug}.
        </p>
        <div className="overflow-x-auto rounded-xl bg-white text-sm ring-1 ring-foreground/10">
          <table className="w-full text-left">
            <thead className="bg-muted/70 text-xs tracking-wide uppercase">
              <tr>
                <th className="px-3 py-2">Final do link</th>
                <th className="px-3 py-2">O que você deve ver</th>
              </tr>
            </thead>
            <tbody className="[&_td]:px-3 [&_td]:py-2 [&_tr]:border-t">
              <tr>
                <td className="font-mono text-xs">/</td>
                <td>Página inicial, com o texto grande e as bolhas</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/#faq</td>
                <td>A página desce até as perguntas frequentes</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/#sobre</td>
                <td>A página desce até “O que é o Prontera?”</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/redeprontera</td>
                <td>Lista de pessoas, busca e filtros</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/redeprontera/{NAME_EXAMPLE.personSlug}</td>
                <td>O perfil com foto que você criou</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/redeprontera/{NAME_EXAMPLE.plainSlug}</td>
                <td>O perfil sem foto, só com as iniciais</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/redeprontera/{NAME_EXAMPLE.hiddenSlug}</td>
                <td>Pessoa não encontrada</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/redeprontera/nao-existe</td>
                <td>Pessoa não encontrada</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/eventos</td>
                <td>
                  Calendário do mês de hoje. Procure o seu evento. Se disser que
                  não conseguiu carregar, anote
                </td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/eventos/{NAME_EXAMPLE.eventSlug}</td>
                <td>A página do evento que você criou</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/eventos/nao-existe</td>
                <td>Evento não encontrado</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/salas</td>
                <td>A lista, com a sala 1 e a sala do seu nome</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/salas/{NAME_EXAMPLE.roomSlug}</td>
                <td>
                  Hoje a sala não tem página própria. Se cair em página não
                  encontrada, anote só se algum botão da lista tiver prometido
                  abrir esse link
                </td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/contato</td>
                <td>Fale conosco</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/pagina-que-nao-existe</td>
                <td>Página não encontrada, com botão para voltar</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Shot
          src="/shots/site/404.png"
          alt="Página não encontrada"
          caption="Página não encontrada. O menu de cima e o de baixo continuam no lugar."
        />
      </Step>

      <Step guide="site" id="mobile" n="8" title="Repetir no celular">
        <p>
          Abra o mesmo site no celular, pelo link do WhatsApp, no telefone
          que você usa no dia a dia. Safari no iPhone e a janela que abre
          dentro do WhatsApp também valem. O que você cadastrou no computador
          precisa aparecer aqui também.
        </p>
        <DoExpect
          doItems={[
            "No WhatsApp, toque no link do site. A página inicial abre sem pedir um aplicativo especial?",
            "Na página inicial, as bolhas cabem na tela? Dá para clicar numa sem acertar a vizinha?",
            "Na Rede, a busca e os cartões ficam um embaixo do outro? A pessoa com foto e a sem foto aparecem, com foto ou iniciais?",
            "Em Eventos, o calendário cabe na largura do celular? O seu evento abre, com a data que você cadastrou?",
            "Em Salas, a sua sala mostra Adicionais, Pacotes e Reservar? Reservar abre WhatsApp, Fale conosco ou um formulário?",
            "No Fale conosco, o botão Enviar aparece inteiro? Dá para enviar uma mensagem com o seu nome?",
          ]}
          expectItems={[
            "A página não pede para rolar para o lado.",
            "O menu pode quebrar em duas linhas, mas os cinco links continuam clicáveis.",
            "O texto das bolhas, dos cartões e dos botões não fica cortado.",
            "Nome, foto, data e frase que você cadastrou aparecem iguais ao computador.",
            "Um botão que não abre nada no celular também vale anotar, mesmo que no computador tenha aberto.",
          ]}
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          <Shot src="/shots/mobile/home.png" alt="Página inicial no celular" caption="Início" />
          <Shot src="/shots/mobile/rede.png" alt="Rede no celular" caption="Rede" />
          <Shot src="/shots/mobile/eventos.png" alt="Eventos no celular" caption="Eventos" />
          <Shot src="/shots/mobile/salas.png" alt="Salas no celular" caption="Salas" />
          <Shot src="/shots/mobile/contato.png" alt="Contato no celular" caption="Contato" />
        </div>
      </Step>
    </GuideShell>
  );
}
