import { BugbashBrief } from "@/components/bugbash-brief";
import { Callout } from "@/components/callout";
import { Actions, Frame, Lines } from "@/components/glance";
import { GuideShell } from "@/components/guide-shell";
import { Step } from "@/components/step";
import { buttonVariants } from "@/components/ui/button";
import { NAME_EXAMPLE, REPORT_FORM_URL, SITE_URL } from "@/lib/links";

const toc = [
  { id: "nav", label: "1. Menu e rodapé" },
  { id: "home", label: "2. Página inicial" },
  { id: "rede", label: "3. Rede de pessoas" },
  { id: "eventos", label: "4. Eventos" },
  { id: "salas", label: "5. Salas" },
  { id: "contato", label: "6. Fale conosco" },
  { id: "rotas", label: "7. Links para colar" },
  { id: "mobile", label: "8. No celular" },
];

const LINKS: { path: string; see: string }[] = [
  { path: "/", see: "Página inicial, com o texto grande e as bolhas" },
  { path: "/#faq", see: "A página desce até as perguntas frequentes" },
  { path: "/#sobre", see: "A página desce até “O que é o Prontera?”" },
  { path: "/redeprontera", see: "Lista de pessoas, busca e filtros" },
  { path: `/redeprontera/${NAME_EXAMPLE.personSlug}`, see: "O perfil com foto que os devs criaram. Se avisaram outro nome, use esse" },
  { path: `/redeprontera/${NAME_EXAMPLE.plainSlug}`, see: "O perfil sem foto que os devs criaram, só com as iniciais" },
  { path: `/redeprontera/${NAME_EXAMPLE.hiddenSlug}`, see: "A pessoa que os devs deixaram escondida: pessoa não encontrada" },
  { path: "/redeprontera/nao-existe", see: "Pessoa não encontrada" },
  { path: "/eventos", see: "Calendário e lista do mês de hoje. Os dois carregam. Procure o evento que os devs publicaram" },
  { path: `/eventos/${NAME_EXAMPLE.eventSlug}`, see: "A página do evento que os devs publicaram" },
  { path: "/eventos/nao-existe", see: "Evento não encontrado" },
  { path: "/salas", see: "A lista, com as salas que já existiam e a sala que os devs criaram" },
  { path: `/salas/${NAME_EXAMPLE.roomSlug}`, see: "Hoje a sala não tem página própria. Anote só se algum botão da lista prometer abrir esse link" },
  { path: "/contato", see: "Fale conosco" },
  { path: "/pagina-que-nao-existe", see: "Página não encontrada, com botão para voltar" },
];

export default function SitePage() {
  return (
    <GuideShell
      kicker="Todo mundo"
      title="Confira o que os devs deixaram"
      intro="Abra o site como visita. Você não entra no Django e não precisa saber o que foi feito lá. Os devs e a organização já criaram as pessoas, o evento e a sala. Este roteiro segue esses exemplos. Se o time avisou outros nomes, use os nomes que eles passaram. Calendário e lista de eventos precisam carregar. Marque o quadradinho quando terminar cada parte. Se a tela ficar diferente do que este roteiro descreve, anote no formulário."
      toc={toc}
    >
      <BugbashBrief variant="short" />
      <p className="mt-4">
        O site para visitar é{" "}
        <a className="font-medium text-primary underline" href={SITE_URL} target="_blank" rel="noreferrer">
          {SITE_URL}
        </a>
        . No celular, abra o mesmo link pelo WhatsApp.
      </p>
      <div className="mt-3">
        <a className={buttonVariants()} href={REPORT_FORM_URL} target="_blank" rel="noreferrer">
          Abrir formulário
        </a>
      </div>
      <Callout title="Os devs já criaram. Você só procura">
        <ul className="grid gap-2 sm:grid-cols-2">
          {(
            [
              ["Com foto", NAME_EXAMPLE.person],
              ["Sem foto", NAME_EXAMPLE.plain],
              ["Escondida", NAME_EXAMPLE.hidden],
              ["Evento", NAME_EXAMPLE.event],
              ["Atividade", NAME_EXAMPLE.activity],
              ["Sala", `${NAME_EXAMPLE.room} · ${NAME_EXAMPLE.addon} · ${NAME_EXAMPLE.pack}`],
            ] as const
          ).map(([label, value]) => (
            <li key={label} className="rounded-lg bg-white/80 px-3 py-2 ring-1 ring-foreground/10">
              <span className="block text-[11px] font-semibold tracking-widest text-primary uppercase">
                {label}
              </span>
              <span className="mt-0.5 block leading-snug">{value}</span>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-xs">Se o time avisou outros nomes, siga esses.</p>
      </Callout>
      <Callout title="O menu se repete em todas as páginas">
        <Lines
          items={[
            "Início, Rede Prontera, Eventos, Salas e Contato ficam no topo.",
            "Os mesmos nomes aparecem de novo no final da página.",
            "A página em que você está fica sublinhada em rosa.",
          ]}
        />
      </Callout>

      <Step guide="site" id="nav" n="1" title="Passar pelo menu e pelo rodapé">
        <Lines
          items={[
            "O menu é o caminho normal.",
            "Também vale colar o link direto, para ver se a página abre sem clicar.",
          ]}
        />
        <Actions
          doItems={[
            "Clique em cada item do menu do topo: Início, Rede Prontera, Eventos, Salas e Contato.",
            "Desça até o final da página e clique nos mesmos nomes de novo.",
            "Na barra de endereço, cole um por um os finais /redeprontera, /eventos, /salas e /contato, depois do link do site.",
            "Atualize cada página.",
          ]}
          seeItems={[
            "Cada clique abre a página certa, sem a mensagem Página não encontrada.",
            "O item da página atual fica destacado.",
            "Colar o link funciona igual ao clique.",
            "O topo e o final da página levam aos mesmos lugares.",
            "Nenhuma dessas páginas fica em branco nem pede para rolar para o lado.",
          ]}
        />
      </Step>

      <Step guide="site" id="home" n="2" title="Olhar a página inicial">
        <Lines
          items={[
            "A primeira página tem um texto grande no começo e bolhas ao redor.",
            "Ela é compartilhada: não espere ver o nome de uma pessoa aqui.",
            "Pessoas, evento e sala que os devs criaram ficam na Rede, em Eventos e em Salas.",
          ]}
        />
        <Frame
          src="/shots/site/home-hero.png"
          alt="Página inicial com o texto grande e as bolhas"
          label="Começo da página: título Espaço Prontera, texto e bolhas."
          doItems={[
            `Abra ${SITE_URL} e espere a frase “Carregando landing page…” sumir.`,
            "Veja se o título, o texto e as bolhas apareceram.",
            "Clique nas bolhas: Sobre, Propósito, Como funciona, Juno, Rede, Eventos, Comunidade, Possibilidades, Próximos passos e Perguntas.",
          ]}
          seeItems={[
            "O texto grande e as bolhas aparecem. O nome de uma pessoa não precisa estar nesta página.",
            "Cada bolha desce até a parte correspondente. O texto da bolha não fica cortado.",
          ]}
        />
        <Frame
          src="/shots/site/home-sobre.png"
          alt="Parte Sobre da página inicial"
          label="Depois de clicar na bolha Sobre: o título “O que é o Prontera?” e três botões."
          doItems={[
            "Clique na bolha Sobre.",
            "Na parte Sobre, clique nos botões, como Entender a proposta e Ver salas.",
            "No fim do link, acrescente #sobre e aperte Enter.",
          ]}
          seeItems={[
            "A página desce até “O que é o Prontera?”.",
            "Os botões levam a uma parte da página ou a outra página, e não a uma tela de erro.",
          ]}
        />
        <Frame
          src="/shots/site/home-faq.png"
          alt="Perguntas frequentes"
          label="Perguntas frequentes. Se #faq não chegar aqui, anote no formulário."
          doItems={[
            "Clique na bolha Perguntas.",
            "No fim do link, acrescente #faq e aperte Enter.",
            "Teste um final que não existe, #nao-existe.",
            "Role a página até o final.",
          ]}
          seeItems={[
            "Perguntas e #faq descem até as perguntas frequentes.",
            "Um final que não existe não trava o site.",
            "Nenhuma parte fica em branco até o final da página.",
          ]}
        />
        <Callout tone="warn" title="Não mexa no painel">
          <Lines
            items={[
              "Quem visita o site não desliga bloco nenhum.",
              "Se uma bolha já estiver faltando, anote no formulário.",
            ]}
          />
        </Callout>
      </Step>

      <Step guide="site" id="rede" n="3" title="Procurar as pessoas que os devs criaram">
        <Lines
          items={[
            "Abra Rede Prontera.",
            "Quem já está na lista é Juliana Negreiros, no link /redeprontera/juliana-negreiros. Não peça para apagar.",
            "As pessoas do teste são as que os devs criarem. A com foto e a sem foto aparecem. A escondida não.",
            <>O exemplo é {NAME_EXAMPLE.first}. Se o time avisou outro nome, use esse.</>,
          ]}
        />
        <Frame
          src="/shots/site/rede-lista.png"
          alt="Lista da Rede"
          label="Busca, Papel, Área de atuação e Vínculo. Cada cartão tem Ver perfil."
          doItems={[
            `Procure a pessoa pública que os devs criaram. No exemplo, ${NAME_EXAMPLE.person}. A escondida, ${NAME_EXAMPLE.hidden}, não pode aparecer na lista.`,
            "Na busca, digite o começo desse nome. Depois apague.",
            "Abra Papel e escolha uma opção que o cartão já mostre. Faça o mesmo em Área e em Vínculo.",
            "Junte busca e filtro, e depois limpe tudo.",
          ]}
          seeItems={[
            "A pessoa com foto que os devs criaram aparece. A sem foto também. A escondida não.",
            "O filtro esconde quem não combina com a opção escolhida.",
            "Os selos de área, papel e vínculo aparecem no cartão em que os devs marcaram.",
          ]}
        />
        <Frame
          src="/shots/site/rede-busca-vazia.png"
          alt="Rede sem resultados"
          label="Quando a busca não acha ninguém, aparece este aviso. Não pode ser uma tela branca."
          doItems={[
            "Na busca, digite uma palavra que não existe, como zzzz-nao-existe.",
            "Apague a busca e confira se a lista volta.",
          ]}
          seeItems={[
            "Uma busca sem resultado mostra “Nenhuma pessoa encontrada com os filtros atuais…”, e não uma tela branca.",
            "Depois de apagar, as pessoas voltam a aparecer.",
          ]}
        />
        <Frame
          src="/shots/site/perfil-juliana.png"
          alt="Perfil com foto"
          label="Perfil de quem já está no site: Juliana Negreiros. Sem foto, o círculo mostra as iniciais."
          doItems={[
            "No cartão da pessoa com foto, clique em Ver perfil.",
            "Confira nome, foto, papel, área e vínculo.",
            "Veja o card O que faz: os tópicos na ordem, cada um com rótulo. Não é um parágrafo.",
            "Clique no botão com o rótulo que os devs escreveram, no alto do perfil e de novo no fim do card, se os tópicos existirem.",
            "Copie o link da página e cole numa aba nova.",
          ]}
          seeItems={[
            "Abre o perfil, com um link para voltar à Rede.",
            "Se aparecer “Não foi possível carregar o perfil”, anote. A lista pode continuar mostrando a pessoa.",
            "A foto é a que os devs enviaram. Sem foto, o círculo usa as iniciais. Imagem quebrada: anote.",
            "O card O que faz lista os tópicos. Sem tópicos, o card não aparece.",
            "O botão abre o link que os devs cadastraram. Não existe um botão escrito só CTA.",
          ]}
        />
        <Frame
          src="/shots/site/perfil-sem-foto.png"
          alt="Perfil sem foto"
          label="Pessoa sem foto. O círculo usa as iniciais do nome."
          doItems={[
            `Abra o perfil sem foto que os devs criaram. No exemplo, o final do link é ${NAME_EXAMPLE.plainSlug}.`,
            "Confira o nome e o círculo no lugar da foto.",
          ]}
          seeItems={[
            "A pessoa aparece na lista e o perfil abre.",
            "O círculo mostra as iniciais, sem imagem quebrada.",
          ]}
        />
        <Frame
          src="/shots/site/perfil-inexistente.png"
          alt="Pessoa não encontrada"
          label="O que aparece quando o perfil não existe ou está escondido."
          doItems={[
            `Cole o link da pessoa escondida que os devs criaram: /redeprontera/${NAME_EXAMPLE.hiddenSlug}. Se avisaram outro nome, use esse.`,
            "Depois troque o final por nao-existe.",
          ]}
          seeItems={[
            "Pessoa escondida ou inexistente: “Pessoa não encontrada”.",
            "O link Ver todas as pessoas volta para a lista.",
          ]}
        />
      </Step>

      <Step guide="site" id="eventos" n="4" title="Olhar o evento que os devs publicaram">
        <Lines
          items={[
            "Abra a página Eventos.",
            "Procure o evento que os devs publicaram, no mês de hoje.",
            <>No exemplo, o título é {NAME_EXAMPLE.event}.</>,
            "As datas vão de hoje até dois dias à frente.",
            "Se o time avisou outro título, use esse.",
            "Não procure um workshop com o mesmo título para cada pessoa.",
          ]}
        />
        <Frame
          src="/shots/site/eventos-calendario.png"
          alt="Calendário de eventos"
          label="Visão de calendário. Um evento de vários dias se repete nesses dias."
          doItems={[
            "Abra Eventos e espere carregar.",
            "Se aparecer “Não foi possível carregar os eventos”, anote. Essa falha já foi corrigida e não deve voltar.",
            `Olhe o mês de hoje. Clique num dia entre o início e o fim do evento que os devs publicaram. No exemplo, ${NAME_EXAMPLE.event}.`,
          ]}
          seeItems={[
            "O calendário carrega. O evento publicado aparece nos dias certos, com o título que os devs deram.",
            "Os dias mostram a data que os devs cadastraram, não uma data vazia ou de outro mês.",
          ]}
        />
        <Frame
          src="/shots/site/eventos-lista.png"
          alt="Eventos em lista"
          label="Visão em lista: busca, dias do mês, tipo e se é presencial ou online."
          doItems={[
            "Ao lado de Calendário, clique em Lista.",
            `Na busca, digite o começo do título do evento. No exemplo, ${NAME_EXAMPLE.first}.`,
            "Abra o filtro de tipo e escolha a opção desse evento. Faça o mesmo no filtro de presencial ou online. Depois limpe.",
          ]}
          seeItems={[
            "A lista carrega e mostra o mesmo evento, ou o aviso de que não há eventos.",
            "Os filtros escondem o que não combina com a opção escolhida, e não deixam a página em branco.",
          ]}
        />
        <Frame
          src="/shots/site/evento-detalhe.png"
          alt="Página de um evento"
          label="Outubro de 2026 pode abrir vazio: Nenhum evento em Outubro, 2026. O evento publicado pelos devs entra nessa lista."
          doItems={[
            "Clique no evento que os devs publicaram.",
            `Veja título, datas, texto e a atividade. No exemplo, a atividade é ${NAME_EXAMPLE.activity}.`,
          ]}
          seeItems={[
            "A página abre com o título, as datas, o texto e a atividade que os devs publicaram. Se o título ou a data estiver vazio, anote.",
            "A capa, se os devs enviaram, aparece. Sem capa, o texto é Imagem em breve.",
            "Se aparecer “Não foi possível carregar o evento”, anote.",
          ]}
        />
        <Frame
          src="/shots/site/evento-slug-nao-encontrado.png"
          alt="Evento não encontrado pelo link"
          label="Se o link com o nome do evento cair nesta tela, e o clique no calendário abrir o evento, anote os dois."
          doItems={[
            `Cole /eventos/${NAME_EXAMPLE.eventSlug}. Se o time avisou outro nome, use esse.`,
            "Compare com a página que abriu pelo clique no calendário.",
          ]}
          seeItems={[
            "O link com o slug abre a mesma página do clique no calendário.",
            "Se um abrir e o outro não, anote os dois.",
          ]}
        />
        <Frame
          src="/shots/site/evento-inexistente.png"
          alt="Evento que não existe"
          label="Evento que não existe ou que ainda está em rascunho."
          doItems={[
            "Cole /eventos/nao-existe.",
          ]}
          seeItems={[
            "Um evento que não existe mostra “Evento não encontrado” e “Este evento não existe ou não está publicado”, com Voltar para eventos.",
            "Um evento que os devs deixaram em rascunho não entra no calendário nem na lista.",
          ]}
        />
      </Step>

      <Step guide="site" id="salas" n="5" title="Olhar a sala que os devs criaram">
        <Lines
          items={[
            "A página Salas mostra cartões.",
            "Consultório 1 e as outras salas já estavam lá. A do teste é a que os devs criaram.",
            <>
              No exemplo, {NAME_EXAMPLE.room}, com {NAME_EXAMPLE.addon} e{" "}
              {NAME_EXAMPLE.pack}.
            </>,
            "Se o time avisou outro nome, use esse.",
            "Não há página separada para cada sala: o teste é na lista.",
          ]}
        />
        <Frame
          src="/shots/site/salas.png"
          alt="Lista de salas"
          label="Cada sala mostra capacidade, valor da hora, horário e o botão Reservar."
          doItems={[
            "Ache o cartão da sala que os devs criaram.",
            "Confira título, descrição, capacidade, valor e horário.",
          ]}
          seeItems={[
            "A sala que os devs criaram aparece junto de Consultório 1 e das outras.",
            "A foto, se os devs enviaram, aparece. Sem foto, o texto é Imagem em breve, sem imagem quebrada.",
          ]}
        />
        <Frame
          src="/shots/site/salas-addons.png"
          alt="Adicionais e pacotes"
          label="Adicionais e Pacotes abertos. O botão Reservar fica à direita."
          doItems={[
            "Na sala que os devs criaram, clique em Adicionais e Pacotes.",
            "Clique em Reservar.",
          ]}
          seeItems={[
            `A sala mostra o extra e o pacote que os devs criaram. No exemplo, ${NAME_EXAMPLE.addon} e ${NAME_EXAMPLE.pack}. Consultório 1 pode não ter os mesmos extras.`,
            "Reservar abre um próximo passo: uma conversa no WhatsApp, a página Fale conosco ou um formulário na própria página. Se não abrir nada, ou só a palavra mudar de cor, anote.",
          ]}
        />
        <Frame
          src="/shots/site/sala-404.png"
          alt="Página não encontrada de sala"
          label="O que aparece hoje quando o link de uma sala não existe."
          doItems={[
            "Cole /salas/nao-existe.",
            `Faça o mesmo com /salas/${NAME_EXAMPLE.roomSlug}. Se avisaram outro identificador, use esse.`,
          ]}
          seeItems={[
            "Um link de sala que não existe mostra Página não encontrada, com um botão para voltar ao início.",
            "Anote só se algum botão da lista prometer abrir a página da sala e esse link falhar.",
          ]}
        />
      </Step>

      <Step guide="site" id="contato" n="6" title="Enviar a sua mensagem">
        <Lines
          items={[
            "A página se chama Fale conosco.",
            "À esquerda, os dados do espaço. À direita, o formulário.",
            "Se aparecer “Não foi possível carregar o formulário”, anote.",
            "Quem visita não abre o painel.",
            "A mensagem leva o seu primeiro nome, para a equipe achar o que você enviou.",
          ]}
        />
        <Frame
          src="/shots/site/contato.png"
          alt="Página Fale conosco"
          label="Campos Nome, E-mail e Mensagem. Botão Enviar."
          doItems={[
            "Veja se o cartão da esquerda mostra e-mail e telefone, e se o texto está inteiro.",
            "Preencha nome, um e-mail válido e uma mensagem curta com o seu primeiro nome. Envie.",
          ]}
          seeItems={[
            "Envio certo: aparece “Mensagem enviada com sucesso”.",
            "Você não precisa abrir o painel para conferir. A equipe olha a mensagem lá.",
            "O menu continua igual ao das outras páginas.",
          ]}
        />
        <Frame
          src="/shots/site/contato-validacao.png"
          alt="Formulário com avisos em vermelho"
          label="O que acontece ao enviar vazio. Os três campos pedem para ser preenchidos."
          doItems={[
            "Clique em Enviar com os três campos vazios.",
            "Preencha só o nome e envie de novo.",
            "No e-mail, escreva abc e envie.",
          ]}
          seeItems={[
            "Vazio: os campos pedem Informe seu nome, Informe seu e-mail e Escreva sua mensagem.",
            "Um e-mail sem @ não passa.",
            "Se a internet falhar, aparece um pedido para tentar de novo.",
          ]}
        />
      </Step>

      <Step guide="site" id="rotas" n="7" title="Colar estes links">
        <Lines
          items={[
            <>O começo do link é {SITE_URL}.</>,
            "Cole cada final depois desse começo.",
            "Onde aparecer ana, é o exemplo que os devs criaram.",
            "Se avisaram outro nome, use esse, em minúsculas e sem acento.",
          ]}
        />
        <Frame
          src="/shots/site/404.png"
          alt="Página não encontrada"
          label="Página não encontrada. O menu de cima e o de baixo continuam no lugar."
          doItems={[
            "Cole um final que não existe, como /pagina-que-nao-existe.",
            "Depois volte e cole cada final da tabela abaixo.",
          ]}
          seeItems={[
            "A página que não existe mostra este aviso, com o menu de cima e o de baixo no lugar.",
            "Cada linha da tabela abre o que está escrito na coluna da direita.",
          ]}
        />
        <div className="overflow-x-auto rounded-xl bg-white text-sm ring-1 ring-foreground/10">
          <table className="w-full text-left">
            <thead className="bg-muted/70 text-xs tracking-wide uppercase">
              <tr>
                <th className="px-3 py-2">Final do link</th>
                <th className="px-3 py-2">O que você deve ver</th>
              </tr>
            </thead>
            <tbody className="[&_td]:px-3 [&_td]:py-2 [&_tr]:border-t">
              {LINKS.map((row) => (
                <tr key={row.path}>
                  <td className="font-mono text-xs">{row.path}</td>
                  <td>{row.see}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Step>

      <Step guide="site" id="mobile" n="8" title="Repetir no celular">
        <Lines
          items={[
            "Abra o mesmo site no celular, pelo link do WhatsApp.",
            "Use o telefone do dia a dia. Safari e a janela do WhatsApp também valem.",
            "Pessoas, evento e sala que os devs deixaram precisam aparecer aqui também.",
          ]}
        />
        <Frame
          src="/shots/mobile/home.png"
          alt="Página inicial no celular"
          label="Início"
          doItems={[
            "No WhatsApp, toque no link do site.",
            "Veja se as bolhas cabem na tela e se dá para tocar numa sem acertar a vizinha.",
          ]}
          seeItems={[
            "A página inicial abre sem pedir um aplicativo especial e sem rolar para o lado.",
            "O menu pode quebrar em duas linhas, mas os cinco links continuam clicáveis.",
            "O texto das bolhas não fica cortado.",
          ]}
        />
        <Frame
          src="/shots/mobile/rede.png"
          alt="Rede no celular"
          label="Rede"
          doItems={[
            "Abra a Rede.",
            "Procure a pessoa com foto e a sem foto que os devs criaram.",
          ]}
          seeItems={[
            "A busca e os cartões ficam um embaixo do outro.",
            "A foto e as iniciais que os devs deixaram aparecem, iguais ao computador.",
          ]}
        />
        <Frame
          src="/shots/mobile/eventos.png"
          alt="Eventos no celular"
          label="Eventos"
          doItems={[
            "Abra Eventos e procure o evento que os devs publicaram.",
            "Toque no evento.",
          ]}
          seeItems={[
            "O calendário cabe na largura do celular.",
            "O evento abre com a data que os devs cadastraram, igual ao computador.",
          ]}
        />
        <Frame
          src="/shots/mobile/salas.png"
          alt="Salas no celular"
          label="Salas"
          doItems={[
            "Abra Salas e ache a sala que os devs criaram.",
            "Toque em Adicionais e Pacotes, e em Reservar.",
          ]}
          seeItems={[
            "Adicionais e Pacotes, e Reservar, aparecem inteiros.",
            "Reservar abre WhatsApp, Fale conosco ou um formulário. Se não abrir nada, anote, mesmo que no computador tenha aberto.",
          ]}
        />
        <Frame
          src="/shots/mobile/contato.png"
          alt="Contato no celular"
          label="Contato"
          doItems={[
            "Abra Fale conosco.",
            "Envie uma mensagem curta com o seu nome.",
          ]}
          seeItems={[
            "O botão Enviar aparece inteiro.",
            "A mensagem é enviada, como no computador.",
          ]}
        />
      </Step>
    </GuideShell>
  );
}
