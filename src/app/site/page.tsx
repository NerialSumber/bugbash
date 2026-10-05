import { BugbashBrief } from "@/components/bugbash-brief";
import { Callout } from "@/components/callout";
import { DoExpect } from "@/components/expect";
import { GuideShell } from "@/components/guide-shell";
import { Shot } from "@/components/shot";
import { Step } from "@/components/step";
import { buttonVariants } from "@/components/ui/button";
import {
  ADMIN_URL,
  PREP_EVENT,
  PREP_FORM,
  PREP_PEOPLE,
  PREP_ROOM,
  REPORT_FORM_URL,
  SITE_URL,
} from "@/lib/links";

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

export default function SitePage() {
  return (
    <GuideShell
      kicker="Passo 2"
      title="Veja se apareceu no site"
      intro="Abra o site como se fosse uma visita. Procure a coisa que você cadastrou. Marque o quadradinho quando terminar cada parte. Se a tela ficar diferente do que este roteiro descreve, anote no formulário."
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
            <strong>Vale anotar:</strong> página em branco, texto cortado,
            botão que não abre nada, busca que não filtra, foto que não
            carrega, página que não desce até a parte certa, formulário que
            aceita tudo vazio, ou uma tela cheia de texto de erro.
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
          Cadastre a sua coisa no{" "}
          <a className="text-primary underline" href="/django">
            painel
          </a>{" "}
          antes de seguir. Use seu primeiro nome no título. Depois volte ao{" "}
          <a className="text-primary underline" href={SITE_URL}>
            site
          </a>{" "}
          e procure esse nome.
        </p>
        <p>
          A tabela lista exemplos que podem já estar no ar. Alguns prints
          antigos ainda mostram a Juliana. Procure primeiro o que você
          cadastrou. Se os exemplos estiverem na lista, vale olhar também.
        </p>
        <div className="overflow-x-auto rounded-xl bg-white text-sm ring-1 ring-foreground/10">
          <table className="w-full text-left">
            <thead className="bg-muted/70 text-xs tracking-wide uppercase">
              <tr>
                <th className="px-3 py-2">O que foi cadastrado</th>
                <th className="px-3 py-2">Onde olhar no site</th>
              </tr>
            </thead>
            <tbody className="[&_td]:px-3 [&_td]:py-2 [&_tr]:border-t">
              {PREP_PEOPLE.map((person) => (
                <tr key={person.slug}>
                  <td>
                    {person.name}
                    <div className="text-xs text-muted-foreground">
                      Página Rede, no final do link: /redeprontera/{person.slug}
                    </div>
                  </td>
                  <td>{person.note}</td>
                </tr>
              ))}
              <tr>
                <td>
                  {PREP_EVENT.title}
                  <div className="text-xs text-muted-foreground">
                    Página Eventos, de {PREP_EVENT.start} a {PREP_EVENT.end}
                  </div>
                </td>
                <td>Precisa estar publicado para aparecer no calendário.</td>
              </tr>
              <tr>
                <td>
                  {PREP_ROOM.title}
                  <div className="text-xs text-muted-foreground">Página Salas</div>
                </td>
                <td>Aparece para todo mundo, com um extra e um pacote.</td>
              </tr>
              <tr>
                <td>Formulário Fale conosco</td>
                <td>
                  Publicado com o nome interno {PREP_FORM.slug}. Sem ele, a
                  página de contato não mostra os campos.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Callout tone="warn" title="Se a lista da Rede estiver vazia">
          O seu cadastro ainda não chegou no site. Volte ao{" "}
          <a className="font-medium underline" href="/django">
            painel
          </a>{" "}
          e crie uma pessoa com o seu nome. O link do painel é {ADMIN_URL}.
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
          ]}
        />
      </Step>

      <Step guide="site" id="home" n="2" title="Olhar a página inicial">
        <p>
          A primeira página tem um texto grande no começo e bolhas ao redor.
          Cada bolha leva a uma parte da mesma página: Sobre, Perguntas e
          outras.
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
            "Cada bolha desce até a parte correspondente.",
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
        <Callout tone="warn" title="Se alguém esconder uma parte no painel">
          Atualize a página inicial. A bolha e o texto dessa parte devem sumir,
          sem deixar um buraco estranho. No fim do teste, volte a marcar essa
          parte como ativa.
        </Callout>
      </Step>

      <Step guide="site" id="rede" n="3" title="Procurar pessoas na Rede">
        <p>
          Abra Rede Prontera. A página mostra cartões de pessoas, uma busca e
          filtros de papel, área e vínculo.
        </p>
        <Shot
          src="/shots/site/rede-lista.png"
          alt="Lista da Rede, com busca, filtros e cartões"
          caption="Busca, Papel, Área de atuação e Vínculo. Cada cartão tem Ver perfil."
        />

        <p className="font-semibold">Lista, busca e filtros</p>
        <DoExpect
          doItems={[
            "Procure a pessoa que você cadastrou com o seu nome. A pessoa marcada como escondida não pode aparecer.",
            "Na busca, digite o começo desse nome. Depois apague.",
            "Busque uma palavra que não existe, como zzzz-nao-existe.",
            "Abra Papel e escolha uma opção. Faça o mesmo em Área e em Vínculo.",
            "Junte busca e filtro, e depois limpe tudo.",
          ]}
          expectItems={[
            "A pessoa pública aparece. A escondida não aparece.",
            "Uma busca sem resultado mostra a frase “Nenhuma pessoa encontrada…”, e não uma tela branca.",
            "O filtro esconde quem não combina com a opção escolhida.",
            "Os selos de área, papel e vínculo aparecem nos cartões certos.",
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
            "No cartão da pessoa que você criou, clique em Ver perfil.",
            "Confira nome, frase de apresentação, papel, área e vínculo.",
            "Clique no ícone do Instagram.",
            "Copie o link da página e cole numa aba nova.",
          ]}
          expectItems={[
            "Abre o perfil, com um link para voltar à Rede.",
            "A foto aparece. Se no lugar da foto surgir um texto estranho, anote.",
            "O ícone abre o Instagram do Prontera.",
            "O link copiado abre o mesmo perfil de novo.",
          ]}
        />
        <Shot
          src="/shots/site/perfil-juliana.png"
          alt="Exemplo de perfil com foto e Instagram"
          caption="Exemplo de perfil com foto. O seu deve mostrar o nome que você cadastrou."
        />

        <p className="font-semibold">Perfil sem foto</p>
        <DoExpect
          doItems={["Abra a pessoa que foi cadastrada sem foto."]}
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

        <p className="font-semibold">Pessoa que não existe ou está escondida</p>
        <DoExpect
          doItems={[
            "No fim do link da Rede, troque o nome por nao-existe.",
            "Abra também o link da pessoa que ficou com Pública desmarcada.",
          ]}
          expectItems={[
            "Aparece “Pessoa não encontrada” e a frase de que o perfil não existe ou não está público.",
            "O link Ver todas as pessoas volta para a lista.",
            "Não aparece uma tela cheia de texto de erro.",
          ]}
        />
        <Shot
          src="/shots/site/perfil-inexistente.png"
          alt="Aviso de pessoa não encontrada"
          caption="O que aparece quando o perfil não existe ou está escondido."
        />
      </Step>

      <Step guide="site" id="eventos" n="4" title="Olhar os eventos">
        <p>
          Abra a página Eventos. O evento de exemplo é{" "}
          <strong>{PREP_EVENT.title}</strong>, de {PREP_EVENT.start} até{" "}
          {PREP_EVENT.end}.
        </p>
        <Shot
          src="/shots/site/eventos-calendario.png"
          alt="Calendário de eventos"
          caption="Visão de calendário. Um evento de vários dias se repete nesses dias."
        />
        <DoExpect
          doItems={[
            "Abra Eventos e espere carregar.",
            "Se aparecer “Não foi possível carregar os eventos”, pare e anote no formulário. O evento foi publicado, mas a página não conseguiu mostrar.",
            "Se o calendário abrir, olhe setembro e outubro nas setas e clique num dia com o workshop.",
            "Mude para a visão de lista e busque BUGBASH.",
            "Anote o link que abre quando você clica no evento.",
            "Também tente o final /eventos/bugbash-workshop e um final que não existe, /eventos/nao-existe.",
          ]}
          expectItems={[
            "Calendário e lista mostram o workshop entre 30/09 e 02/10.",
            "Se a página não carregar, anote o link da página de eventos, o que você fez e que esperava ver o workshop.",
            "Clicar no evento abre a página dele, com título e datas.",
            "Um evento que não existe mostra “Evento não encontrado” e um link para voltar.",
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
          caption="Evento que não existe ou que ainda não foi publicado."
        />
      </Step>

      <Step guide="site" id="salas" n="5" title="Olhar as salas">
        <p>
          A página Salas mostra cartões. Já existe a <strong>sala 1</strong>. O
          teste acrescenta <strong>{PREP_ROOM.title}</strong>. O site hoje não
          tem uma página separada para cada sala: só a lista.
        </p>
        <Shot
          src="/shots/site/salas.png"
          alt="Lista de salas, com capacidade, valor e botão Reservar"
          caption="Cada sala mostra capacidade, valor da hora, horário e o botão Reservar."
        />
        <DoExpect
          doItems={[
            "Confira a sala 1 e a sala do teste: título, descrição, capacidade, valor e horário.",
            "Na sala do teste, clique em Adicionais e em Pacotes.",
            "Clique em Reservar em cada sala. Veja se abre um formulário, o contato, o WhatsApp, ou se não acontece nada.",
            "Cole um final de link que não existe, /salas/nao-existe. Faça o mesmo com /salas/sala-1.",
          ]}
          expectItems={[
            "Sem foto, aparece “Imagem em breve”, sem imagem quebrada.",
            "A sala do teste mostra o extra e o pacote criados no painel.",
            "A sala 1 pode não ter extras. Isso é o cadastro atual.",
            "Reservar precisa fazer alguma coisa visível. Se só mudar a cor do texto, anote.",
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

      <Step guide="site" id="contato" n="6" title="Enviar uma mensagem">
        <p>
          A página se chama Fale conosco. À esquerda ficam os dados do espaço.
          À direita, o formulário. Se aparecer “Não foi possível carregar o
          formulário”, volte ao passo do formulário no{" "}
          <a className="text-primary underline" href="/django">
            painel
          </a>
          .
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
            "Preencha nome, um e-mail válido e uma mensagem curta. Envie.",
            "Veja se o cartão da esquerda mostra o e-mail e o telefone cadastrados no painel.",
          ]}
          expectItems={[
            "Vazio: os três campos ficam vermelhos e pedem nome, e-mail e mensagem.",
            "Um e-mail sem @ não passa.",
            "Envio certo: aparece “Mensagem enviada com sucesso”.",
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
          desse começo. Exemplo: {SITE_URL}/redeprontera. Este teste acha
          páginas que o menu não mostra.
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
                <td className="font-mono text-xs">/redeprontera/bugbash-pessoa-completa</td>
                <td>Perfil da pessoa completa, se ela foi cadastrada</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/redeprontera/bugbash-sem-foto</td>
                <td>Perfil sem foto, só com as iniciais</td>
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
                <td>
                  Calendário com o workshop. Se disser que não conseguiu
                  carregar, anote
                </td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/eventos/bugbash-workshop</td>
                <td>A página do workshop. Se disser que não encontrou, anote</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/eventos/nao-existe</td>
                <td>Evento não encontrado</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/salas</td>
                <td>sala 1 e a sala do teste</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">/salas/sala-1</td>
                <td>Hoje mostra página não encontrada. Anote se isso te atrapalhou</td>
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
          Abra o mesmo site no celular. Passe pelas páginas principais e veja
          se dá para ler e clicar sem a tela sair para o lado.
        </p>
        <DoExpect
          doItems={[
            "Na página inicial, as bolhas cabem na tela? Dá para clicar numa sem acertar a vizinha?",
            "Na Rede, a busca e os cartões ficam um embaixo do outro?",
            "Em Eventos, o calendário cabe na largura do celular?",
            "Em Salas, dá para ver Reservar, Adicionais e Pacotes?",
            "No Fale conosco, o botão Enviar aparece inteiro?",
          ]}
          expectItems={[
            "A página não pede para rolar para o lado.",
            "O menu pode quebrar em duas linhas, mas os cinco links continuam clicáveis.",
            "O texto das bolhas não fica cortado.",
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
