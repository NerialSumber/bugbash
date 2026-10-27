import { BugbashBrief } from "@/components/bugbash-brief";
import { Callout } from "@/components/callout";
import { Actions, Frame, Lines } from "@/components/glance";
import { GuideShell } from "@/components/guide-shell";
import { Step } from "@/components/step";
import { ADMIN_URL, eventWindow, NAME_EXAMPLE, PREP_FORM } from "@/lib/links";

const toc = [
  { id: "regras", label: "O caminho" },
  { id: "login", label: "1. Entrar" },
  { id: "mapa", label: "2. O que tem aqui" },
  { id: "usuario", label: "3. Não criar usuário" },
  { id: "home", label: "4. Página inicial" },
  { id: "info", label: "5. Dados de contato" },
  { id: "rede", label: "6. Suas pessoas" },
  { id: "eventos", label: "7. Seu evento" },
  { id: "salas", label: "8. Sua sala" },
  { id: "formulario", label: "9. Formulário" },
  { id: "contato", label: "10. Sua mensagem" },
];

export default function DjangoPage() {
  const dates = eventWindow();

  return (
    <GuideShell
      kicker="Só devs e organização"
      title="Cadastro no painel"
      intro="Este roteiro não é para quem visita o site. Devs e a organização entram com o acesso que já existe e cadastram pessoa, evento e sala com o próprio nome. Não criem um usuário novo: o cadastro interno ainda não existe e será feito depois."
      toc={toc}
    >
      <BugbashBrief variant="short" />
      <section id="regras" className="mt-10 space-y-4">
        <h2 className="font-display text-3xl text-primary">O caminho</h2>
        <Lines
          items={[
            "O painel cria o que o site mostra.",
            "Use o acesso da tabela, o que a organização já tem.",
            "O exemplo usa Ana. Troque pelo seu primeiro nome.",
            "Título pode ter acento: João Teste.",
            "Slug ou identificador não tem acento nem espaço: joao-teste.",
            "Se a tela disser que já existe, coloque -2 no fim.",
          ]}
        />
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
              <tr>
                <td>Link do painel</td>
                <td colSpan={2}>
                  <a className="text-primary underline" href={ADMIN_URL} target="_blank" rel="noreferrer">
                    {ADMIN_URL}
                  </a>
                  <span className="mt-1 block">Cada dev entra com o próprio usuário e a própria senha.</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Callout tone="warn" title="Não crie de novo o que já é um só">
          <Lines
            items={[
              "Página inicial, dados de contato, Fale conosco e as salas que já estão na lista servem para todo mundo.",
              "Se já existirem, pule.",
              "Não coloque o seu nome em cima do texto de outra pessoa.",
            ]}
          />
        </Callout>
      </section>

      <Step guide="django" id="login" n="1" title="Entrar no painel">
        <Lines
          items={[
            "Abra o link da tabela acima.",
            "Entre com o seu próprio usuário e a sua própria senha.",
            "Não crie outro usuário neste teste.",
          ]}
        />
        <Frame
          src="/shots/django/login.png"
          alt="Tela de entrada com Usuário, Senha e o botão Acessar"
          label="Tela de entrada. O botão azul Acessar fica no centro."
          doItems={[
            "Abra o link do painel. Pode ser no computador ou no celular.",
            "No campo Usuário, digite o seu usuário.",
            "No campo Senha, digite a sua senha.",
            "Antes de acertar, digite uma senha errada e clique em Acessar. Depois entre com a sua senha.",
          ]}
          seeItems={[
            "A tela pede só duas coisas: Usuário e Senha.",
            "Senha errada: a página avisa e continua na mesma tela.",
            "Depois de entrar certo, abre uma lista de assuntos: pessoas, eventos, salas e outros.",
          ]}
        />
      </Step>

      <Step guide="django" id="mapa" n="2" title="Entender o que tem neste painel">
        <Lines
          items={[
            "Esta primeira tela é o mapa.",
            "Adicionar abre um formulário em branco.",
            "Modificar abre a lista do que já foi criado.",
            "A coluna da esquerda muda de assunto.",
          ]}
        />
        <Frame
          src="/shots/django/dashboard.png"
          alt="Primeira tela do painel"
          label="Primeira tela. Use a coluna da esquerda para mudar de assunto."
          doItems={[
            "Olhe Autenticação: é quem pode entrar neste painel. Não adicione usuário.",
            "Olhe Seções da landing page: textos da primeira página. Não edite no teste em grupo.",
            "Pessoas, Eventos e Salas são o que aparece na Rede, no calendário e nas salas.",
            "Formulários e Envios de contato são o Fale conosco e o que chegou por ele.",
          ]}
          seeItems={[
            "Adicionar abre um formulário em branco. Modificar abre a lista do que já foi criado.",
            "Conteúdo da Home é um formulário antigo. O caminho da primeira página é a lista de seções.",
            "Informações gerais do Prontera é um cadastro só: e-mail, telefone e endereço.",
          ]}
        />
      </Step>

      <Step guide="django" id="usuario" n="3" title="Não criar usuário novo">
        <Lines
          items={[
            "O site público não pede login.",
            "O cadastro interno ainda não existe e será feito depois.",
            "Não abra Usuários para adicionar alguém neste teste.",
          ]}
        />
        <Actions
          doItems={[
            "Se você não é dev nem da organização, saia deste roteiro e abra o roteiro do site.",
            "Se você é, continue com o usuário da tabela. Não clique em Adicionar usuário.",
            "Siga para pessoa, evento e sala. O seu nome vai no título desses cadastros, não num usuário novo.",
          ]}
          seeItems={[
            "O painel continua no acesso que você já usou para entrar.",
            "Nenhuma conta nova aparece na lista de usuários por causa deste teste.",
          ]}
        />
      </Step>

      <Step guide="django" id="home" n="4" title="Não mexer na página inicial">
        <Lines
          items={[
            "A primeira página é um texto só, compartilhado.",
            "Se cada pessoa escrever na mesma frase, uma apaga a outra.",
            "Neste teste, ninguém edita esse bloco.",
          ]}
        />
        <Frame
          src="/shots/django/list-landing.png"
          alt="Lista dos blocos da página inicial"
          label="Cada linha é um pedaço da primeira página. Não abra para editar."
          doItems={[
            "Abra Seções da landing page só para olhar a lista.",
            "Não clique em Adicionar. Não desmarque Ativa.",
          ]}
          seeItems={[
            "A lista abre e mostra os blocos que já existem.",
            "O teste de mudar uma palavra fica na sua pessoa, no seu evento e na sua sala, não aqui.",
          ]}
        />
        <Frame
          src="/shots/django/edit-landing.png"
          alt="Formulário do bloco de início"
          label="Edição do bloco de início. No teste em grupo, não salve esta tela."
          doItems={[
            "Se a lista abrir um formulário, não mude a frase e não clique em Salvar.",
            "Volte para a lista sem gravar.",
          ]}
          seeItems={[
            "A frase da primeira página continua igual à que já estava.",
            "Ninguém perde o texto porque outra pessoa salvou por cima.",
          ]}
        />
        <Frame
          src="/shots/django/add-homecontent.png"
          alt="Formulário antigo da página inicial"
          label="Formulário antigo. O caminho de hoje é a lista de seções."
          doItems={[
            "Ignore Conteúdo da Home. Esse formulário é antigo.",
            "Não preencha e não salve esta tela.",
          ]}
          seeItems={[
            "O caminho da primeira página é a lista de seções, não este formulário.",
          ]}
        />
        <Callout title="Só se você estiver sozinho nesta tela">
          <Lines
            items={[
              "No teste em grupo, pule isto.",
              "Sozinho, pode acrescentar o seu primeiro nome no fim de uma frase, sem apagar o resto.",
              "Salve, confira no site e depois apague só o seu nome.",
            ]}
          />
        </Callout>
      </Step>

      <Step guide="django" id="info" n="5" title="Dados de contato, se a lista estiver vazia">
        <Lines
          items={[
            "O cartão do Fale conosco usa um cadastro só.",
            "Se a lista já tiver uma linha, pule.",
            "Não crie uma segunda e não troque o e-mail de outra pessoa.",
          ]}
        />
        <Frame
          src="/shots/django/list-pronterainfo.png"
          alt="Lista das informações gerais"
          label="Se já existir uma linha, não crie outra. Se estiver em zero, uma pessoa clica em Adicionar."
          doItems={[
            "Abra Informações gerais do Prontera.",
            "Se a lista já tiver um cadastro, vá para o próximo passo. Não crie uma segunda linha.",
            "Se estiver vazia, e ninguém mais estiver preenchendo, clique em Adicionar.",
          ]}
          seeItems={[
            "Ou aparece uma linha só, ou a lista está em zero.",
            "Não existe um cadastro por pessoa neste assunto.",
          ]}
        />
        <Frame
          src="/shots/django/add-pronterainfo.png"
          alt="Formulário de contato do espaço"
          label="Preencha contato e endereço. Deixe Ativo marcado."
          doItems={[
            "Preencha o nome do espaço, o e-mail, o telefone e o endereço.",
            "Deixe Ativo marcado e clique em SALVAR.",
            "Abra o Fale conosco do site e veja se o cartão da esquerda mudou.",
          ]}
          seeItems={[
            "O texto provisório some.",
            "E-mail e telefone são os mesmos que foram digitados.",
          ]}
        />
      </Step>

      <Step guide="django" id="rede" n="6" title="Cadastrar as suas três pessoas">
        <Lines
          items={[
            "Em Pessoas, clique em Adicionar pessoa.",
            "Crie as três, com o seu nome.",
            "A caixinha Pública decide se o site mostra a pessoa.",
            "Não apague pessoas que já estejam na lista.",
          ]}
        />
        <Frame
          src="/shots/django/list-person.png"
          alt="Lista de pessoas"
          label="Lista de pessoas. Não edite a linha de outra pessoa."
          doItems={[
            "Abra Pessoas e olhe a lista. Não abra nem apague a linha de outra pessoa.",
            "Clique em Adicionar pessoa para criar a sua.",
          ]}
          seeItems={[
            "A lista mostra quem já foi cadastrado.",
            "As pessoas de outras pessoas continuam na lista depois que você salvar a sua.",
          ]}
        />
        <Frame
          src="/shots/django/add-person.png"
          alt="Formulário para adicionar uma pessoa"
          label="O formulário tem nome, tópicos, o botão da pessoa e a caixinha Pública."
          doItems={[
            `Nome: o seu primeiro nome e a palavra Teste. Exemplo: ${NAME_EXAMPLE.person}.`,
            `Slug: o mesmo nome em minúsculas, sem acento e com hífen. Exemplo: ${NAME_EXAMPLE.personSlug}. Se já existir, use ana-teste-2.`,
            "Envie uma foto. Sem a foto, este cadastro não testa o que precisamos.",
            "Em O que faz, adicione tópicos com rótulo e ordem. Exemplo: Mentoria na ordem 1, Oficina na ordem 2. Não use um parágrafo no lugar da lista.",
            "No botão da pessoa, preencha rótulo e link juntos. Exemplo: rótulo Site e link https://example.com. Só um dos dois não salva. Os dois vazios também valem.",
            "Em papel, área e vínculo, escolha pelo menos uma opção em cada. Não crie opção nova se a lista já tiver a que você precisa.",
            "Se o campo de redes pedir um código e o salvamento der erro, anote e salve de novo sem esse campo.",
            "Marque Pública e salve.",
          ]}
          seeItems={[
            "O cartão com o seu nome aparece na Rede e abre em Ver perfil.",
            "A foto é a que você enviou, sem imagem quebrada e sem um texto no lugar da imagem.",
            "O card O que faz mostra os tópicos na ordem, não um parágrafo. O botão usa o rótulo que você escreveu e abre o link.",
          ]}
        />
        <Frame
          src="/shots/django/edit-person.png"
          alt="Pessoa preenchida"
          label="A foto, os tópicos e o botão ficam neste mesmo formulário. A sua pessoa usa o seu nome."
          doItems={[
            "Volte nesta pessoa, mude o rótulo de um tópico, salve e atualize o perfil de novo.",
            `Crie outra pessoa sem foto: ${NAME_EXAMPLE.plain}, slug ${NAME_EXAMPLE.plainSlug}, Pública marcada.`,
            `Crie a terceira escondida: ${NAME_EXAMPLE.hidden}, slug ${NAME_EXAMPLE.hiddenSlug}, Pública desmarcada.`,
          ]}
          seeItems={[
            "Depois da edição, o site mostra o rótulo novo. Se continuar o antigo, atualize de novo. Se ainda assim não mudar, anote.",
            "A pessoa sem foto aparece na lista. No lugar da foto, o círculo mostra as iniciais, sem imagem quebrada.",
            "A escondida não aparece na lista nem na busca. O link direto diz que a pessoa não foi encontrada.",
          ]}
        />
      </Step>

      <Step guide="django" id="eventos" n="7" title="Cadastrar o seu evento">
        <Lines
          items={[
            "Crie o seu evento, não o de outra pessoa.",
            <>
              Título com o seu nome, por exemplo {NAME_EXAMPLE.event}. Slug{" "}
              {NAME_EXAMPLE.eventSlug}.
            </>,
            <>
              Datas de hoje para a frente: {dates.start} até {dates.end}.
            </>,
            "Se o dia de hoje for outro, use hoje e dois dias depois.",
            "Não use uma data que já passou.",
            "Não apague eventos que já existam.",
          ]}
        />
        <Frame
          src="/shots/django/list-event.png"
          alt="Lista de eventos"
          label="Um evento pode estar como rascunho, publicado ou arquivado."
          doItems={[
            "Abra Eventos e olhe a lista. Não apague eventos que já existam.",
            "Clique em Adicionar evento.",
          ]}
          seeItems={[
            "Cada linha mostra se o evento está como rascunho, publicado ou arquivado.",
            "O evento de outra pessoa continua na lista.",
          ]}
        />
        <Frame
          src="/shots/django/add-event.png"
          alt="Formulário de evento"
          label="Título, publicação, datas e texto. Use o seu nome, não um título compartilhado."
          doItems={[
            `Título com o seu nome. Exemplo: ${NAME_EXAMPLE.event}. Slug: ${NAME_EXAMPLE.eventSlug}. Se já existir, use ana-workshop-2. Tipo: Evento promocional. Formato: Presencial.`,
            "Deixe primeiro como Rascunho, salve e olhe a página de eventos do site.",
            "Volte e mude para Publicado.",
            `Início: ${dates.start}. Término: ${dates.end}. Se hoje não for essa data, troque pelo dia de hoje e dois dias depois, no mesmo horário.`,
            "O resumo é a frase curta. A descrição é o texto longo. Os dois levam o seu nome.",
            "Se existir campo de capa ou imagem, envie uma foto. Se não existir, a página pode dizer Imagem em breve.",
            "Salve. Abra Eventos no site, no mês de hoje, e procure o seu título. Depois mude uma palavra do resumo, salve e atualize o site.",
          ]}
          seeItems={[
            "Rascunho não entra no calendário nem na lista.",
            "Publicado aparece nos dias entre o início e o fim, com o seu nome no título.",
            "A capa, se você enviou, aparece. Sem capa, o texto é Imagem em breve, sem imagem quebrada.",
            "Depois de editar o resumo, o site mostra o texto novo.",
          ]}
        />
        <Frame
          src="/shots/django/add-activity.png"
          alt="Atividade do evento"
          label="Uma atividade é um horário dentro do evento. O nome dela também é o seu."
          doItems={[
            `No fim do formulário do evento, se existir Adicionar atividade, crie uma com o seu nome, por exemplo ${NAME_EXAMPLE.activity}, no mesmo dia.`,
            "Salve e abra a página do evento no site.",
          ]}
          seeItems={[
            "A página do evento mostra título, tipo, formato, datas e a atividade.",
            "O nome da atividade é o seu, não um nome compartilhado.",
          ]}
        />
      </Step>

      <Step guide="django" id="salas" n="8" title="Cadastrar a sua sala">
        <Lines
          items={[
            "Já existem salas na lista, como Consultório 1 e Consultório 2.",
            "Não mude o preço, a capacidade, o título nem os extras de nenhuma delas.",
            <>
              Crie uma sala nova com o seu nome, por exemplo {NAME_EXAMPLE.room}.
            </>,
            <>No identificador, escreva {NAME_EXAMPLE.roomSlug}.</>,
          ]}
        />
        <Frame
          src="/shots/django/add-room.png"
          alt="Formulário de sala nova"
          label="O identificador vira o final do link da sala."
          doItems={[
            "Abra Salas e olhe as que já existem, como Consultório 1. Não salve nenhuma mudança nelas.",
            `Clique em Adicionar. Título: ${NAME_EXAMPLE.room}. Identificador: ${NAME_EXAMPLE.roomSlug}. Se já existir, use ana-sala-2.`,
            "Preencha tipo, descrição com o seu nome, valor da hora, capacidade e horário. Marque Pública.",
            "Se existir campo de foto, envie uma. Salve.",
            "Abra a página de salas do site e procure o seu nome.",
          ]}
          seeItems={[
            "O cartão mostra o seu título, descrição, capacidade, valor e horário, junto das salas que já existiam.",
            "A foto, se você enviou, aparece. Sem foto, o site escreve Imagem em breve, sem imagem quebrada.",
            "Consultório 1 e as outras salas antigas continuam com os dados que já tinham.",
          ]}
        />
        <Frame
          src="/shots/django/edit-room.png"
          alt="Sala com adicional e pacote"
          label="A sua sala leva o seu nome no título, no adicional e no pacote."
          doItems={[
            `Abra a sua sala de novo. Em Adicionais, crie ${NAME_EXAMPLE.addon}. Em Pacotes, crie ${NAME_EXAMPLE.pack}. Não use o adicional de outra pessoa.`,
            "Mude uma palavra da descrição, salve e atualize a página de salas.",
          ]}
          seeItems={[
            "Os extras com o seu nome abrem em Adicionais e Pacotes.",
            "Depois de editar a descrição, o site mostra o texto novo.",
          ]}
        />
      </Step>

      <Step guide="django" id="formulario" n="9" title="Formulário, só se os campos não existirem">
        <Lines
          items={[
            "Abra o Fale conosco do site.",
            "Se Nome, E-mail e Mensagem já aparecerem, pule.",
            <>O site usa um formulário só, com o slug {PREP_FORM.slug}.</>,
            "Não crie um segundo com o seu nome.",
          ]}
        />
        <Actions
          doItems={[
            "Se o site já mostra os três campos, vá para o próximo passo.",
            "Se o site disser que não conseguiu carregar o formulário, e ninguém mais estiver criando, em Formulários clique em Adicionar.",
            `Nome interno: ${PREP_FORM.name}. Slug: ${PREP_FORM.slug}. Tipo: Contato.`,
            "Marque Publicado.",
            "Título que o visitante vê: Fale Conosco. Texto do botão: Enviar. Mensagem de sucesso: Mensagem enviada com sucesso.",
            "No campo Campos, apague o que estiver lá e cole o quadro abaixo, sem mudar nada.",
            "Salve e abra de novo a página Fale conosco. Os três campos precisam aparecer.",
          ]}
          seeItems={[
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

      <Step guide="django" id="contato" n="10" title="Enviar a sua mensagem e achar ela aqui">
        <Lines
          items={[
            "Cada pessoa envia a própria mensagem.",
            "O texto leva o seu primeiro nome, para não misturar com a de outra pessoa.",
            "Não existe botão de adicionar: a mensagem nasce no site.",
          ]}
        />
        <Frame
          src="/shots/django/list-contact.png"
          alt="Lista de mensagens do Fale conosco"
          label="Caixa de entrada do Fale conosco. Procure a mensagem com o seu nome."
          doItems={[
            "No site, abra Fale conosco.",
            "Envie vazio. Depois preencha só o nome. Depois, no e-mail, escreva abc e envie.",
            "Aí preencha nome, um e-mail com @ e uma mensagem curta com o seu primeiro nome. Envie.",
            "Volte a este painel, em Envios de contato, ainda com o acesso da organização.",
            "Abra a mensagem com o seu nome e confira nome, e-mail e texto.",
          ]}
          seeItems={[
            "Vazio: os três campos pedem para ser preenchidos.",
            "E-mail sem @ não passa.",
            "Envio certo: o site diz que a mensagem foi enviada.",
            "A mesma mensagem aparece nesta lista, com o texto que você escreveu.",
          ]}
        />
      </Step>
    </GuideShell>
  );
}
