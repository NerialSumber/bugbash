import { BugbashBrief } from "@/components/bugbash-brief";
import { Callout } from "@/components/callout";
import { DoExpect } from "@/components/expect";
import { GuideShell } from "@/components/guide-shell";
import { Shot } from "@/components/shot";
import { Step } from "@/components/step";
import { ADMIN_URL, eventWindow, NAME_EXAMPLE, PREP_FORM } from "@/lib/links";

const toc = [
  { id: "regras", label: "O caminho" },
  { id: "login", label: "1. Entrar" },
  { id: "mapa", label: "2. O que tem aqui" },
  { id: "usuario", label: "3. Criar o seu acesso" },
  { id: "trocar", label: "4. Entrar com o seu acesso" },
  { id: "home", label: "5. Página inicial" },
  { id: "info", label: "6. Dados de contato" },
  { id: "rede", label: "7. Suas pessoas" },
  { id: "eventos", label: "8. Seu evento" },
  { id: "salas", label: "9. Sua sala" },
  { id: "formulario", label: "10. Formulário" },
  { id: "contato", label: "11. Sua mensagem" },
];

export default function DjangoPage() {
  const dates = eventWindow();

  return (
    <GuideShell
      kicker="Passo 1"
      title="Cadastre o que é seu"
      intro="Entre, crie um acesso com o seu nome e saia do usuário compartilhado. Com o seu acesso, cadastre as suas pessoas, o seu evento e a sua sala. O título leva o seu primeiro nome. Não use um texto igual ao de outra pessoa e não apague o que ela já criou."
      toc={toc}
    >
      <BugbashBrief variant="short" />
      <section id="regras" className="mt-10 space-y-4">
        <h2 className="font-display text-3xl text-primary">O caminho</h2>
        <p>
          O painel cria o que o site mostra. O usuário admin serve só para o
          passo 3. Do passo 4 em diante, use o seu usuário. Quando terminar,
          abra o{" "}
          <a className="font-medium text-primary underline" href="/site">
            roteiro do site
          </a>{" "}
          e procure o seu nome.
        </p>
        <Callout title="Cada pessoa cria o seu">
          O exemplo abaixo usa Ana. Troque pelo seu primeiro nome. Título pode
          ter acento: João Teste. O campo Slug ou Identificador não tem acento
          nem espaço: joao-teste. Se a tela disser que já existe, coloque -2
          no fim.
        </Callout>
        <div className="overflow-x-auto rounded-xl bg-white text-sm ring-1 ring-foreground/10">
          <table className="w-full text-left">
            <thead className="bg-muted/70 text-xs tracking-wide uppercase">
              <tr>
                <th className="px-3 py-2">O que criar</th>
                <th className="px-3 py-2">Título, se você se chama Ana</th>
                <th className="px-3 py-2">Slug ou identificador</th>
              </tr>
            </thead>
            <tbody className="[&_td]:px-3 [&_td]:py-2 [&_tr]:border-t">
              <tr>
                <td>Seu acesso</td>
                <td className="font-mono">{NAME_EXAMPLE.user}</td>
                <td>Não tem slug. Anote a senha que você criar.</td>
              </tr>
              <tr>
                <td>Pessoa com foto</td>
                <td>{NAME_EXAMPLE.person}</td>
                <td className="font-mono">{NAME_EXAMPLE.personSlug}</td>
              </tr>
              <tr>
                <td>Pessoa sem foto</td>
                <td>{NAME_EXAMPLE.plain}</td>
                <td className="font-mono">{NAME_EXAMPLE.plainSlug}</td>
              </tr>
              <tr>
                <td>Pessoa escondida</td>
                <td>{NAME_EXAMPLE.hidden}</td>
                <td className="font-mono">{NAME_EXAMPLE.hiddenSlug}</td>
              </tr>
              <tr>
                <td>Evento</td>
                <td>{NAME_EXAMPLE.event}</td>
                <td className="font-mono">{NAME_EXAMPLE.eventSlug}</td>
              </tr>
              <tr>
                <td>Sala</td>
                <td>{NAME_EXAMPLE.room}</td>
                <td className="font-mono">{NAME_EXAMPLE.roomSlug}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Callout tone="warn" title="Não crie de novo o que já é um só">
          Página inicial, dados de contato do espaço, formulário Fale conosco
          e a sala 1 servem para todo mundo. Se já existirem, pule. Não
          coloque o seu nome em cima do texto de outra pessoa.
        </Callout>
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
                <td className="px-3 py-2">Usuário para criar o seu acesso</td>
                <td className="px-3 py-2 font-mono">admin</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2">Senha desse usuário</td>
                <td className="px-3 py-2 font-mono">banana</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Step guide="django" id="login" n="1" title="Entrar no painel">
        <p>
          Abra o link da tabela acima. Esta entrada com admin vale só até você
          criar o seu acesso.
        </p>
        <DoExpect
          doItems={[
            "Abra o link do painel. Pode ser no computador ou no celular.",
            "No campo Usuário, digite admin.",
            "No campo Senha, digite banana.",
            "Antes de acertar, digite uma senha errada e clique em Acessar. Depois entre com banana.",
          ]}
          expectItems={[
            "A tela pede só duas coisas: Usuário e Senha.",
            "Senha errada: a página avisa e continua na mesma tela.",
            "Depois de entrar certo, abre uma lista de assuntos: pessoas, eventos, salas e outros.",
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
          Esta primeira tela é o mapa. <strong>Adicionar</strong> abre um
          formulário em branco. <strong>Modificar</strong> abre a lista do que
          já foi criado. A coluna da esquerda muda de assunto.
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
                  Textos e bolhas da primeira página. Não edite no meio do teste em grupo.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Conteúdo da Home</td>
                <td className="px-3 py-2">
                  Formulário antigo. Para a primeira página, o caminho é a lista de seções.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Informações gerais do Prontera</td>
                <td className="px-3 py-2">
                  E-mail, telefone e endereço do Fale conosco. Um cadastro só.
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
                  O formulário do Fale conosco. Sem ele, a página não mostra os campos.
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
          O usuário admin é compartilhado. Crie o seu para a gente saber quem
          cadastrou o quê. O site público não pede login. Anote a senha: o
          próximo passo usa ela.
        </p>
        <DoExpect
          doItems={[
            "Procure Autenticação e autorização, depois Usuários, e clique em Adicionar.",
            `No usuário, use o seu nome sem espaço. Exemplo: ${NAME_EXAMPLE.user}. Se já existir, use ana.teste2, trocando ana pelo seu nome.`,
            "Crie uma senha com pelo menos 8 caracteres, repita no campo de confirmação e clique em SALVAR. Não use 12345678.",
            "Na tela seguinte, marque Equipe e Superusuário. Sem as duas caixas, o seu acesso não consegue cadastrar.",
            "Clique em SALVAR de novo e confira se o seu nome está na lista.",
          ]}
          expectItems={[
            "O nome de usuário aceita letras, números e os sinais @ . + - _.",
            "Uma senha curta ou óbvia não passa, e a tela diz o motivo.",
            "Depois de salvar, o seu nome aparece na lista de usuários, com Equipe marcado.",
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

      <Step guide="django" id="trocar" n="4" title="Sair e entrar com o seu acesso">
        <p>
          Os próximos cadastros precisam nascer do seu usuário. Se você
          continuar em admin, o teste não descobre se o acesso novo funciona.
        </p>
        <DoExpect
          doItems={[
            "No canto superior direito, clique em ENCERRAR SESSÃO.",
            "Abra o painel de novo. A tela deve pedir usuário e senha.",
            "Entre com o usuário e a senha que você acabou de criar, não com admin.",
            "Abra Pessoas e veja se existe o botão Adicionar.",
          ]}
          expectItems={[
            "Sair mostra a tela de sessão encerrada, com um link para entrar outra vez.",
            "O seu usuário entra no mesmo mapa de assuntos.",
            "Se a senha nova não entrar, ou se Adicionar não aparecer, anote no formulário e pare. Não volte para admin para “terminar o teste”.",
          ]}
        />
        <Shot
          src="/shots/django/logout.png"
          alt="Tela dizendo que a sessão foi encerrada"
          caption="Você saiu do painel. Entre de novo com o seu usuário."
        />
      </Step>

      <Step guide="django" id="home" n="5" title="Não mexer na página inicial">
        <p>
          A primeira página é um texto só, compartilhado. Se cada pessoa
          escrever o próprio nome na mesma frase, uma apaga a outra. Neste
          teste, ninguém edita esse bloco.
        </p>
        <Shot
          src="/shots/django/list-landing.png"
          alt="Lista dos blocos da página inicial"
          caption="Cada linha é um pedaço da primeira página. Não abra para editar."
        />
        <DoExpect
          doItems={[
            "Abra Seções da landing page só para olhar a lista.",
            "Não clique em Adicionar. Não desmarque Ativa. Não salve nenhuma frase.",
            "Ignore Conteúdo da Home. Esse formulário é antigo.",
          ]}
          expectItems={[
            "A lista abre e mostra os blocos que já existem.",
            "O teste de mudar uma palavra fica na sua pessoa, no seu evento e na sua sala, não aqui.",
          ]}
        />
        <Callout title="Só se você estiver sozinho nesta tela">
          Se mais ninguém estiver no teste, pode acrescentar o seu primeiro
          nome no fim de uma frase, sem apagar o resto. Salve, confira no
          site e depois apague só o seu nome, para devolver a frase. No teste
          em grupo, pule isto.
        </Callout>
        <Shot
          src="/shots/django/edit-landing.png"
          alt="Formulário do bloco de início da página"
          caption="Edição do bloco de início. No teste em grupo, não salve esta tela."
          tall
        />
        <Shot
          src="/shots/django/add-homecontent.png"
          alt="Formulário antigo da página inicial"
          caption="Formulário antigo. O caminho de hoje é a lista de seções, e ela não entra neste teste."
          tall
        />
      </Step>

      <Step guide="django" id="info" n="6" title="Dados de contato, se a lista estiver vazia">
        <p>
          O cartão do Fale conosco usa um cadastro só. Se a lista já tiver uma
          linha, pule. Não crie uma segunda e não troque o e-mail que outra
          pessoa preencheu.
        </p>
        <Shot
          src="/shots/django/list-pronterainfo.png"
          alt="Lista das informações gerais"
          caption="Se já existir uma linha, não crie outra. Se estiver em zero, uma pessoa clica em Adicionar."
        />
        <DoExpect
          doItems={[
            "Se a lista já tiver um cadastro, vá para o próximo passo.",
            "Se estiver vazia, e ninguém mais estiver preenchendo, clique em Adicionar.",
            "Preencha o nome do espaço, o e-mail, o telefone e o endereço.",
            "Deixe Ativo marcado e clique em SALVAR.",
            "Abra o Fale conosco do site e veja se o cartão da esquerda mudou.",
          ]}
          expectItems={[
            "O texto provisório some.",
            "E-mail e telefone são os mesmos que foram digitados.",
          ]}
        />
        <Shot
          src="/shots/django/add-pronterainfo.png"
          alt="Formulário de nome, endereço, e-mail, telefone e Instagram"
          caption="Preencha contato e endereço. Deixe Ativo marcado."
          tall
        />
      </Step>

      <Step guide="django" id="rede" n="7" title="Cadastrar as suas três pessoas">
        <p>
          Em <strong>Pessoas → Pessoas</strong>, clique em Adicionar pessoa.
          Crie as três, com o seu nome. A caixinha <strong>Pública</strong>{" "}
          decide se o site mostra a pessoa. Não apague pessoas que já estejam
          na lista.
        </p>
        <Shot
          src="/shots/django/list-person.png"
          alt="Lista de pessoas, com nome e a coluna Pública"
          caption="Lista de pessoas. Não edite a linha de outra pessoa."
        />
        <p className="font-semibold">1. Com foto, pública</p>
        <DoExpect
          doItems={[
            `Nome: o seu primeiro nome e a palavra Teste. Exemplo: ${NAME_EXAMPLE.person}.`,
            `Slug: o mesmo nome em minúsculas, sem acento e com hífen. Exemplo: ${NAME_EXAMPLE.personSlug}. Se já existir, use ana-teste-2.`,
            "Escreva uma frase curta de apresentação. Envie uma foto. Sem a foto, este cadastro não testa o que precisamos.",
            "Em papel, área e vínculo, escolha pelo menos uma opção em cada. Não crie opção nova se a lista já tiver a que você precisa.",
            "No campo de redes, se ele parecer um código, cole o quadro cinza abaixo. Se pular, a pessoa ainda aparece, só sem o ícone.",
            "Marque Pública e salve.",
            "Abra a Rede no site, atualize e procure o seu nome. A foto precisa aparecer.",
            "Volte nesta pessoa, mude uma palavra da apresentação, salve e atualize a Rede de novo.",
          ]}
          expectItems={[
            "O cartão com o seu nome aparece na lista e abre em Ver perfil.",
            "A foto é a que você enviou, sem imagem quebrada e sem um texto no lugar da imagem.",
            "A frase nova, depois da edição, é a que aparece no site. Se continuar a antiga, atualize de novo. Se ainda assim não mudar, anote.",
          ]}
        />
        <p className="text-sm text-muted-foreground">
          Cole isto só no campo de redes, se quiser o ícone do Instagram:
        </p>
        <pre className="overflow-x-auto rounded-xl bg-[#1e2937] p-3 text-xs text-white">{`[{"url":"https://instagram.com/prontera","platform":"Instagram"}]`}</pre>
        <p className="font-semibold">2. Sem foto, pública</p>
        <DoExpect
          doItems={[
            `Crie outra pessoa. Nome: ${NAME_EXAMPLE.plain}, trocando Ana pelo seu nome. Slug: ${NAME_EXAMPLE.plainSlug}.`,
            "Não envie foto. Marque Pública. Pode deixar papel, área e redes em branco.",
            "Salve e abra o perfil no site.",
          ]}
          expectItems={[
            "O cartão aparece na lista.",
            "No lugar da foto, o círculo mostra as iniciais do nome, sem imagem quebrada.",
          ]}
        />
        <p className="font-semibold">3. Escondida</p>
        <DoExpect
          doItems={[
            `Crie a terceira. Nome: ${NAME_EXAMPLE.hidden}. Slug: ${NAME_EXAMPLE.hiddenSlug}.`,
            "Deixe Pública desmarcada e salve.",
            "Na Rede do site, busque esse nome. Depois cole o link /redeprontera/ e o slug dela.",
          ]}
          expectItems={[
            "Ela não aparece na lista nem na busca.",
            "O link direto diz que a pessoa não foi encontrada. Não mostra o perfil escondido.",
          ]}
        />
        <Shot
          src="/shots/django/add-person.png"
          alt="Formulário completo para adicionar uma pessoa"
          caption="O formulário tem nome, texto, classificação e a caixinha Pública."
          tall
        />
        <Shot
          src="/shots/django/edit-person.png"
          alt="Exemplo de uma pessoa já preenchida, com foto e Instagram"
          caption="A foto e o Instagram ficam neste mesmo formulário. A sua pessoa usa o seu nome."
          tall
        />
        <div className="grid gap-3 sm:grid-cols-3">
          <Shot src="/shots/django/list-roles.png" alt="Lista de papéis" caption="Papéis" />
          <Shot src="/shots/django/list-expertise.png" alt="Lista de áreas" caption="Áreas de atuação" />
          <Shot src="/shots/django/list-connections.png" alt="Lista de vínculos" caption="Vínculos com o Prontera" />
        </div>
      </Step>

      <Step guide="django" id="eventos" n="8" title="Cadastrar o seu evento">
        <p>
          Crie o seu evento, não o de outra pessoa. Título com o seu nome, por
          exemplo {NAME_EXAMPLE.event}. Slug {NAME_EXAMPLE.eventSlug}. Use as
          datas de hoje para a frente, {dates.start} até {dates.end}, para
          ele aparecer no mês que o calendário abre. Se o dia de hoje for
          outro, use o dia de hoje e dois dias depois. Não use uma data que
          já passou. Não apague eventos que já existam.
        </p>
        <Shot
          src="/shots/django/list-event.png"
          alt="Lista de eventos"
          caption="Lista de eventos. Um evento pode estar como rascunho, publicado ou arquivado."
        />
        <DoExpect
          doItems={[
            "Clique em Adicionar evento.",
            `Título com o seu nome. Exemplo: ${NAME_EXAMPLE.event}. Slug: ${NAME_EXAMPLE.eventSlug}. Se já existir, use ana-workshop-2. Tipo: Evento promocional. Formato: Presencial.`,
            "Deixe primeiro como Rascunho, salve e olhe a página de eventos do site. O seu evento ainda não deve aparecer.",
            "Volte e mude para Publicado.",
            `Início: ${dates.start}. Término: ${dates.end}. Se hoje não for essa data, troque pelo dia de hoje e dois dias depois, no mesmo horário.`,
            "O resumo é a frase curta. A descrição é o texto longo. Os dois levam o seu nome.",
            "Se existir campo de capa ou imagem, envie uma foto. Se não existir, a página pode dizer Imagem em breve.",
            `No fim do formulário, se existir Adicionar atividade, crie uma com o seu nome, por exemplo ${NAME_EXAMPLE.activity}, no mesmo dia.`,
            "Salve. Abra Eventos no site, no mês de hoje, e procure o seu título. Depois mude uma palavra do resumo, salve e atualize o site.",
          ]}
          expectItems={[
            "Rascunho não entra no calendário nem na lista.",
            "Publicado aparece nos dias entre o início e o fim, com o seu nome no título.",
            "A página do evento mostra título, tipo, formato, datas e a atividade, se você criou.",
            "A capa, se você enviou, aparece. Sem capa, o texto é Imagem em breve, sem imagem quebrada.",
            "Depois de editar o resumo, o site mostra o texto novo.",
          ]}
        />
        <Shot
          src="/shots/django/add-event.png"
          alt="Formulário para adicionar um evento"
          caption="Título, publicação, datas e texto do evento. Use o seu nome, não um título compartilhado."
          tall
        />
        <Shot
          src="/shots/django/add-activity.png"
          alt="Formulário de uma atividade dentro do evento"
          caption="Uma atividade é um horário dentro do evento. O nome dela também é o seu."
          tall
        />
      </Step>

      <Step guide="django" id="salas" n="9" title="Cadastrar a sua sala">
        <p>
          Já existe uma sala chamada <strong>sala 1</strong>. Não mude o
          preço, a capacidade, o título nem os extras dela. Crie uma sala nova
          com o seu nome, por exemplo {NAME_EXAMPLE.room}. No identificador,
          escreva {NAME_EXAMPLE.roomSlug}.
        </p>
        <DoExpect
          doItems={[
            "Abra Salas e olhe a sala 1. Não salve nenhuma mudança nela.",
            `Clique em Adicionar. Título: ${NAME_EXAMPLE.room}. Identificador: ${NAME_EXAMPLE.roomSlug}. Se já existir, use ana-sala-2.`,
            "Preencha tipo, descrição com o seu nome, valor da hora, capacidade e horário. Marque Pública.",
            "Se existir campo de foto, envie uma. Salve.",
            `Abra a sala de novo. Em Adicionais, crie ${NAME_EXAMPLE.addon}. Em Pacotes, crie ${NAME_EXAMPLE.pack}. Não use o adicional de outra pessoa.`,
            "Salve, abra a página de salas do site e procure o seu nome. Depois mude uma palavra da descrição, salve e atualize o site.",
          ]}
          expectItems={[
            "O cartão mostra o seu título, descrição, capacidade, valor e horário, junto da sala 1.",
            "A foto, se você enviou, aparece. Sem foto, o site escreve Imagem em breve, sem imagem quebrada.",
            "Os extras com o seu nome abrem em Adicionais e Pacotes.",
            "Depois de editar a descrição, o site mostra o texto novo.",
            "A sala 1 continua com os dados que já tinha.",
          ]}
        />
        <Shot
          src="/shots/django/edit-room.png"
          alt="Edição de uma sala com um extra e um pacote"
          caption="A sua sala leva o seu nome no título, no adicional e no pacote."
          tall
        />
        <Shot
          src="/shots/django/add-room.png"
          alt="Formulário em branco para adicionar uma sala"
          caption="Formulário em branco. O identificador vira o final do link da sala."
          tall
        />
      </Step>

      <Step guide="django" id="formulario" n="10" title="Formulário, só se os campos não existirem">
        <p>
          Abra o Fale conosco do site. Se os campos Nome, E-mail e Mensagem já
          aparecerem, pule. O site usa um formulário só, com o slug{" "}
          {PREP_FORM.slug}. Não crie um segundo com o seu nome.
        </p>
        <DoExpect
          doItems={[
            "Se o site já mostra os três campos, vá para o próximo passo.",
            "Se o site disser que não conseguiu carregar o formulário, e ninguém mais estiver criando, em Formulários clique em Adicionar.",
            `Nome interno: ${PREP_FORM.name}. Slug: ${PREP_FORM.slug}. Tipo: Contato.`,
            "Marque Publicado.",
            "Título que o visitante vê: Fale Conosco. Texto do botão: Enviar mensagem. Mensagem de sucesso: Mensagem enviada com sucesso.",
            "No campo Campos, apague o que estiver lá e cole o quadro cinza abaixo, sem mudar nada.",
            "Salve e abra de novo a página Fale conosco. Os três campos precisam aparecer.",
          ]}
          expectItems={[
            "A página deixa de dizer que o formulário não foi encontrado.",
            "Enviar vazio pede o nome, o e-mail e a mensagem.",
          ]}
        />
        <pre className="overflow-x-auto rounded-xl bg-[#1e2937] p-3 text-xs text-white">{`[
  {"name":"name","label":"Nome","type":"text","required":true},
  {"name":"email","label":"E-mail","type":"email","required":true},
  {"name":"message","label":"Mensagem","type":"textarea","required":true}
]`}</pre>
      </Step>

      <Step guide="django" id="contato" n="11" title="Enviar a sua mensagem e achar ela aqui">
        <p>
          Cada pessoa envia a própria mensagem. O texto leva o seu primeiro
          nome, para não misturar com a mensagem de outra pessoa. Não existe
          botão de adicionar nesta lista: a mensagem nasce no site.
        </p>
        <DoExpect
          doItems={[
            "No site, abra Fale conosco.",
            "Envie vazio. Depois preencha só o nome. Depois, no e-mail, escreva abc e envie.",
            "Aí preencha nome, um e-mail com @ e uma mensagem curta com o seu primeiro nome. Envie.",
            "Volte a este painel, em Mensagens de contato, ainda com o seu usuário.",
            "Abra a mensagem com o seu nome e confira nome, e-mail e texto.",
          ]}
          expectItems={[
            "Vazio: os três campos pedem para ser preenchidos.",
            "E-mail sem @ não passa.",
            "Envio certo: o site diz que a mensagem foi enviada.",
            "A mesma mensagem aparece nesta lista, com o texto que você escreveu.",
          ]}
        />
        <Shot
          src="/shots/django/list-contact.png"
          alt="Lista de mensagens recebidas pelo Fale conosco"
          caption="Caixa de entrada do Fale conosco. Procure a mensagem com o seu nome."
        />
      </Step>
    </GuideShell>
  );
}
