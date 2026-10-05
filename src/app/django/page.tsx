import { BugbashBrief } from "@/components/bugbash-brief";
import { DoExpect } from "@/components/expect";
import { GuideShell } from "@/components/guide-shell";
import { Shot } from "@/components/shot";
import { Step } from "@/components/step";
import { ADMIN_URL, PREP_EVENT, PREP_FORM, PREP_ROOM } from "@/lib/links";

const toc = [
  { id: "regras", label: "Como entrar" },
  { id: "login", label: "1. Entrar" },
  { id: "mapa", label: "2. O que tem aqui" },
  { id: "usuario", label: "3. Criar o seu acesso" },
  { id: "home", label: "4. Página inicial" },
  { id: "info", label: "5. Dados de contato" },
  { id: "rede", label: "6. Cadastrar uma pessoa" },
  { id: "eventos", label: "7. Cadastrar um evento" },
  { id: "salas", label: "8. Cadastrar uma sala" },
  { id: "formulario", label: "9. Formulário de contato" },
  { id: "contato", label: "10. Mensagens recebidas" },
  { id: "logout", label: "11. Sair" },
];

export default function DjangoPage() {
  return (
    <GuideShell
      kicker="Passo 1"
      title="Cadastre a sua coisa"
      intro="Este é o lugar onde você cria as informações que o site mostra. Entre, crie um acesso com o seu nome e cadastre pelo menos uma coisa: uma pessoa, um evento ou uma sala. Não apague o que outra pessoa já criou."
      toc={toc}
    >
      <BugbashBrief variant="short" />
      <section id="regras" className="mt-10 space-y-4">
        <h2 className="font-display text-3xl text-primary">Como entrar</h2>
        <p>
          O painel é uma página separada do site, só para quem vai cadastrar.
          O site que as pessoas visitam mostra o que for salvo aqui. Crie o
          seu acesso e pelo menos um cadastro com o seu primeiro nome no
          título. Quem já fez isso pode ir para o{" "}
          <a className="font-medium text-primary underline" href="/site">
            roteiro do site
          </a>{" "}
          e conferir se apareceu.
        </p>
        <div className="overflow-x-auto rounded-xl bg-white text-sm ring-1 ring-foreground/10">
          <table className="w-full text-left">
            <thead className="bg-muted/70 text-xs tracking-wide uppercase">
              <tr>
                <th className="px-3 py-2">O que é</th>
                <th className="px-3 py-2">Escreva assim</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-3 py-2">Link do painel</td>
                <td className="px-3 py-2">
                  <a
                    className="text-primary underline"
                    href={ADMIN_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {ADMIN_URL}
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

      <Step guide="django" id="login" n="1" title="Entrar no painel">
        <p>
          Abra o link da tabela acima. Vai aparecer uma tela pedindo usuário e
          senha, igual a um login de e-mail.
        </p>
        <DoExpect
          doItems={[
            "Abra o link do painel no Chrome ou no Firefox.",
            "No campo Usuário, digite admin.",
            "No campo Senha, digite banana.",
            "Clique no botão azul Acessar.",
          ]}
          expectItems={[
            "A tela pede só duas coisas: Usuário e Senha.",
            "Depois de entrar, abre uma lista de assuntos: pessoas, eventos, salas e outros.",
            "Se a senha estiver errada, a página avisa e continua na mesma tela.",
          ]}
        />
        <Shot
          src="/shots/django/login.png"
          alt="Tela de entrada com os campos Usuário e Senha e o botão Acessar"
          caption="Tela de entrada. O botão azul Acessar fica no centro."
        />
      </Step>

      <Step guide="django" id="mapa" n="2" title="Entender o que tem neste painel">
        <p>
          Esta primeira tela é o mapa. Cada linha é um tipo de cadastro.{" "}
          <strong>Adicionar</strong> abre um formulário em branco.{" "}
          <strong>Modificar</strong> abre a lista do que já foi criado. A coluna
          da esquerda leva de um assunto para outro.
        </p>
        <Shot
          src="/shots/django/dashboard.png"
          alt="Primeira tela do painel, com a lista de assuntos"
          caption="Primeira tela. Use a coluna da esquerda para mudar de assunto."
        />
        <div className="overflow-x-auto rounded-xl bg-white text-sm ring-1 ring-foreground/10">
          <table className="w-full text-left">
            <thead className="bg-muted/70 text-xs tracking-wide uppercase">
              <tr>
                <th className="px-3 py-2">Nome na tela</th>
                <th className="px-3 py-2">O que isso muda no site</th>
              </tr>
            </thead>
            <tbody className="[&_tr]:border-t">
              <tr>
                <td className="px-3 py-2 font-medium">Autenticação</td>
                <td className="px-3 py-2">Quem pode entrar neste painel.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Seções da landing page</td>
                <td className="px-3 py-2">
                  Os textos e as bolhas da primeira página do site. O nome na tela é este.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Conteúdo da Home</td>
                <td className="px-3 py-2">
                  Um formulário antigo. Para mudar a primeira página, use as seções acima.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Informações gerais do Prontera</td>
                <td className="px-3 py-2">
                  E-mail, telefone e endereço da página Fale conosco.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Pessoas</td>
                <td className="px-3 py-2">Os cartões da página Rede Prontera.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Eventos</td>
                <td className="px-3 py-2">O calendário e a página de cada evento.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Salas</td>
                <td className="px-3 py-2">Os cartões das salas, com preço e extras.</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Formulários</td>
                <td className="px-3 py-2">
                  O formulário da página Fale conosco. Sem ele, a página não mostra os campos.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Mensagens de contato</td>
                <td className="px-3 py-2">As mensagens que as pessoas enviaram pelo site.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Step>

      <Step guide="django" id="usuario" n="3" title="Criar o seu acesso">
        <p>
          O usuário admin é compartilhado. Crie um acesso com o seu nome para a
          gente saber quem cadastrou o quê. Esse acesso serve só para entrar
          neste painel. O site público não pede login.
        </p>
        <DoExpect
          doItems={[
            "Procure Autenticação e autorização, depois Usuários, e clique em Adicionar.",
            "No usuário, use o seu nome sem espaço. Exemplo: ana.teste.",
            "Crie uma senha, repita no campo de confirmação e clique em SALVAR.",
            "Na tela seguinte, marque Equipe e Superusuário. Essas duas caixas deixam você cadastrar coisas também.",
            "Clique em SALVAR de novo.",
          ]}
          expectItems={[
            "O nome de usuário aceita letras, números e os sinais @ . + - _.",
            "A senha precisa ter pelo menos 8 caracteres e não pode ser uma palavra óbvia, como 12345678.",
            "Depois de salvar, o seu nome aparece na lista de usuários.",
          ]}
        />
        <Shot
          src="/shots/django/add-user.png"
          alt="Formulário para adicionar um usuário, com nome, senha e confirmação"
          caption="Primeira tela de um usuário novo. Depois de salvar, aparecem as permissões."
        />
        <Shot
          src="/shots/django/list-user.png"
          alt="Lista de pessoas que podem entrar no painel"
          caption="Lista de quem já pode entrar no painel."
          tall
        />
      </Step>

      <Step guide="django" id="home" n="4" title="Mudar um texto da página inicial">
        <p>
          A primeira página do site é feita de blocos: o texto grande do começo
          e as bolhas ao redor (Sobre, Perguntas e outras). Cada bloco é uma
          linha em <strong>Seções da landing page</strong>. Esse é o nome que
          aparece na tela.
        </p>
        <Shot
          src="/shots/django/list-landing.png"
          alt="Lista dos blocos da página inicial"
          caption="Cada linha é um pedaço da primeira página. A coluna Ativa decide se ele aparece no site."
        />
        <DoExpect
          doItems={[
            "Clique na linha do início da página. Na lista ela pode aparecer com o nome hero.",
            "Mude só uma frase curta: o título ou o texto do botão. Coloque seu primeiro nome nessa frase, para reconhecer depois.",
            "Se existir um botão, o texto do botão e o destino precisam estar os dois preenchidos. Destino pode ser #sobre, que desce até a parte Sobre.",
            "Desmarque Ativa em um bloco de teste, salve e atualize o site. A bolha deve sumir. Depois marque Ativa de novo e salve.",
            "Só clique em Adicionar se quiser criar um bloco novo.",
          ]}
          expectItems={[
            "A primeira página do site muda depois que você atualiza. Às vezes leva alguns segundos.",
            "Um bloco desmarcado some, e o resto da página continua no lugar.",
            "Os tipos de bloco são: começo da página, texto, visão geral, destaque, perguntas e links.",
          ]}
        />
        <Shot
          src="/shots/django/edit-landing.png"
          alt="Formulário do bloco de início da página"
          caption="Edição do bloco de início: textos, botões, ordem e a caixinha Ativa."
          tall
        />
        <Shot
          src="/shots/django/add-homecontent.png"
          alt="Formulário antigo da página inicial"
          caption="Este outro formulário é antigo. O caminho de hoje é a lista de seções."
          tall
        />
      </Step>

      <Step guide="django" id="info" n="5" title="Preencher e-mail, telefone e endereço">
        <p>
          A página Fale conosco tem um cartão com os dados do espaço. Se esta
          lista estiver vazia, o site ainda mostra um texto provisório no lugar
          desses dados.
        </p>
        <Shot
          src="/shots/django/list-pronterainfo.png"
          alt="Lista vazia das informações gerais"
          caption="Se estiver em zero, clique em Adicionar informações gerais do Prontera."
        />
        <DoExpect
          doItems={[
            "Clique em Adicionar.",
            "Preencha o nome do espaço, o e-mail, o telefone e o endereço.",
            "Deixe a caixinha Ativo marcada e clique em SALVAR.",
            "Abra a página Fale conosco do site e veja se o cartão da esquerda mudou.",
          ]}
          expectItems={[
            "O texto provisório some.",
            "E-mail e telefone são os mesmos que você digitou.",
          ]}
        />
        <Shot
          src="/shots/django/add-pronterainfo.png"
          alt="Formulário de nome, endereço, e-mail, telefone e Instagram"
          caption="Preencha contato e endereço. Deixe Ativo marcado."
          tall
        />
      </Step>

      <Step guide="django" id="rede" n="6" title="Cadastrar pessoas da Rede">
        <p>
          A Rede é a página de pessoas do site. Em{" "}
          <strong>Pessoas → Pessoas</strong>, clique em Adicionar pessoa. A
          caixinha <strong>Pública</strong> decide se ela aparece para todo
          mundo. Crie três pessoas, para ver três situações. Use o seu primeiro
          nome na primeira. Não apague pessoas que já estejam na lista.
        </p>
        <Shot
          src="/shots/django/list-person.png"
          alt="Lista de pessoas, com nome e a coluna Pública"
          caption="Lista de pessoas. Do lado direito dá para filtrar por pública, destaque, papel, área e vínculo."
        />
        <p className="font-semibold">As três pessoas</p>
        <DoExpect
          doItems={[
            "Pessoa completa: nome com o seu primeiro nome, por exemplo Ana Teste. No campo Slug, escreva o mesmo nome sem espaço e em minúsculas, como ana-teste. O slug é o pedacinho do link.",
            "Escreva uma frase curta de apresentação. Envie uma foto quadrada. Em papel, área e vínculo, escolha pelo menos uma opção em cada.",
            "No campo de redes sociais, cole o texto do quadro escuro abaixo, sem mudar aspas nem chaves. Ele diz que a pessoa tem um Instagram.",
            "Marque Pública e salve.",
            "Crie uma segunda pessoa, pública, sem foto. Pode chamar de Sem Foto e usar o slug bugbash-sem-foto.",
            "Crie uma terceira, com o nome Oculta e o slug bugbash-oculta, e deixe Pública desmarcada.",
          ]}
          expectItems={[
            "A pessoa pública aparece na página Rede e abre quando você clica em Ver perfil.",
            "A pessoa sem foto mostra as iniciais dentro de um círculo, em vez de uma imagem quebrada.",
            "A pessoa oculta não aparece na lista nem na busca. Se alguém abrir o link dela, o site diz que a pessoa não foi encontrada.",
          ]}
        />
        <pre className="overflow-x-auto rounded-xl bg-[#1e2937] p-3 text-xs text-white">{`[{"url":"https://instagram.com/prontera","platform":"Instagram"}]`}</pre>
        <Shot
          src="/shots/django/add-person.png"
          alt="Formulário completo para adicionar uma pessoa"
          caption="O formulário tem nome, texto, classificação e a caixinha Pública."
          tall
        />
        <Shot
          src="/shots/django/edit-person.png"
          alt="Exemplo de uma pessoa já preenchida, com foto e Instagram"
          caption="Exemplo de uma pessoa preenchida. A foto e o Instagram ficam neste mesmo formulário."
          tall
        />
        <p>
          Papel, área e vínculo são listas separadas. Só crie uma opção nova se
          a que você precisa não existir. As opções de hoje já aparecem nos
          filtros da Rede.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <Shot src="/shots/django/list-roles.png" alt="Lista de papéis" caption="Papéis" />
          <Shot src="/shots/django/list-expertise.png" alt="Lista de áreas" caption="Áreas de atuação" />
          <Shot src="/shots/django/list-connections.png" alt="Lista de vínculos" caption="Vínculos com o Prontera" />
        </div>
      </Step>

      <Step guide="django" id="eventos" n="7" title="Cadastrar um evento">
        <p>
          Crie o evento <strong>{PREP_EVENT.title}</strong>. Ele começa em{" "}
          {PREP_EVENT.start} e termina em {PREP_EVENT.end}, para aparecer no
          calendário de setembro e de outubro. No campo Slug, escreva{" "}
          <code>{PREP_EVENT.slug}</code>. Não apague eventos que já existam.
        </p>
        <Shot
          src="/shots/django/list-event.png"
          alt="Lista de eventos"
          caption="Lista de eventos. Um evento pode estar como rascunho, publicado ou arquivado."
        />
        <DoExpect
          doItems={[
            "Clique em Adicionar evento.",
            "Título: BUGBASH Workshop. Slug: bugbash-workshop. Tipo: Evento promocional. Formato: Presencial.",
            "Deixe primeiro como Rascunho, salve e olhe a página de eventos do site. Ele ainda não deve aparecer.",
            "Volte e mude para Publicado.",
            "Início: 30/09/2026 às 10:00. Término: 02/10/2026 às 18:00.",
            "O resumo é a frase curta do cartão. A descrição é o texto longo da página do evento.",
            "Salve. Se a página de eventos do site disser que não conseguiu carregar, anote no formulário. O evento está publicado, mas a página não mostrou.",
          ]}
          expectItems={[
            "Rascunho não entra no calendário.",
            "Publicado aparece nos dias entre o início e o fim.",
            "A página do evento mostra título, tipo, formato e datas.",
            "Se você não criou atividades, a página diz que ainda não há atividade publicada.",
          ]}
        />
        <Shot
          src="/shots/django/add-event.png"
          alt="Formulário para adicionar um evento"
          caption="Título, publicação, datas e texto do evento."
          tall
        />
        <Shot
          src="/shots/django/add-activity.png"
          alt="Formulário de uma atividade dentro do evento"
          caption="Uma atividade é um horário dentro do evento. Dá para criar no fim do formulário do evento."
          tall
        />
      </Step>

      <Step guide="django" id="salas" n="8" title="Cadastrar uma sala">
        <p>
          Já existe uma sala chamada <strong>sala 1</strong>. Não mude o preço
          nem a capacidade dela. Crie uma sala nova ao lado, com o seu teste.
        </p>
        <DoExpect
          doItems={[
            "Abra Salas e olhe a sala 1. Não altere valor nem capacidade.",
            `Clique em Adicionar e crie ${PREP_ROOM.title}. No identificador, escreva ${PREP_ROOM.id}. Esse identificador vira o final do link.`,
            "Preencha tipo, descrição, valor da hora, capacidade e horário. Marque Pública e salve.",
            "Abra a sala de novo. Agora aparecem os extras. Em Adicionais, crie um chamado Cadeiras. Em Pacotes, crie um chamado Day use.",
            "Salve e abra a página de salas do site. A sala nova precisa aparecer junto da sala 1.",
          ]}
          expectItems={[
            "O cartão mostra título, descrição, capacidade, valor e horário.",
            "Sem foto, o site escreve “Imagem em breve”.",
            "Cadeiras e Day use abrem quando a pessoa clica em Adicionais e Pacotes.",
          ]}
        />
        <Shot
          src="/shots/django/edit-room.png"
          alt="Edição de uma sala com o extra Cadeiras e o pacote Day use"
          caption="Exemplo de sala publicada, com um extra e um pacote."
          tall
        />
        <Shot
          src="/shots/django/add-room.png"
          alt="Formulário em branco para adicionar uma sala"
          caption="Formulário em branco. O identificador vira o final do link da sala."
          tall
        />
      </Step>

      <Step guide="django" id="formulario" n="9" title="Ligar o formulário Fale conosco">
        <p>
          A página Fale conosco só mostra os campos Nome, E-mail e Mensagem se
          existir um formulário com o slug <code>{PREP_FORM.slug}</code> e a
          caixinha Publicado marcada. Se o site disser que não conseguiu
          carregar o formulário, este passo ainda não foi feito.
        </p>
        <DoExpect
          doItems={[
            "Em Formulários, clique em Adicionar.",
            "Nome interno: BUGBASH Fale Conosco. Slug: fale-conosco. Tipo: Contato.",
            "Marque Publicado.",
            "Título que o visitante vê: Fale Conosco. Texto do botão: Enviar mensagem. Mensagem de sucesso: Mensagem enviada com sucesso.",
            "No campo Campos, apague o que estiver lá e cole o texto do quadro escuro, sem mudar aspas nem chaves.",
            "Salve e abra a página Fale conosco. Os três campos precisam aparecer.",
          ]}
          expectItems={[
            "A página deixa de dizer que o formulário não foi encontrado.",
            "Enviar vazio pede o nome, o e-mail e a mensagem.",
            "Uma mensagem enviada de verdade aparece no passo seguinte.",
          ]}
        />
        <pre className="overflow-x-auto rounded-xl bg-[#1e2937] p-3 text-xs text-white">{`[
  {"name":"name","label":"Nome","type":"text","required":true},
  {"name":"email","label":"E-mail","type":"email","required":true},
  {"name":"message","label":"Mensagem","type":"textarea","required":true}
]`}</pre>
      </Step>

      <Step guide="django" id="contato" n="10" title="Ver as mensagens que chegaram">
        <p>
          Quando alguém envia o Fale conosco, a mensagem cai nesta lista. Não
          existe botão de adicionar aqui: a mensagem nasce no site.
        </p>
        <DoExpect
          doItems={[
            "No site, abra Fale conosco e envie uma mensagem de teste.",
            "Volte a este painel, em Mensagens de contato.",
            "Abra a mensagem nova e confira nome, e-mail e texto.",
          ]}
          expectItems={[
            "A mensagem aparece na lista depois do envio.",
            "Nome, e-mail e texto são os mesmos que você escreveu no site.",
          ]}
        />
        <Shot
          src="/shots/django/list-contact.png"
          alt="Lista de mensagens recebidas pelo Fale conosco"
          caption="Caixa de entrada do Fale conosco."
        />
      </Step>

      <Step guide="django" id="logout" n="11" title="Sair">
        <DoExpect
          doItems={[
            "No canto superior direito, clique em ENCERRAR SESSÃO.",
            "Tente abrir o painel de novo.",
          ]}
          expectItems={[
            "Aparece a tela de sessão encerrada, com um link para entrar outra vez.",
            "Sem entrar de novo, o painel volta a pedir usuário e senha.",
          ]}
        />
        <Shot
          src="/shots/django/logout.png"
          alt="Tela dizendo que a sessão foi encerrada"
          caption="Você saiu do painel."
        />
      </Step>
    </GuideShell>
  );
}
