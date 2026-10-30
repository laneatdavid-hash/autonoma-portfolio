window.PROJECTS = [
  {
    "id": "portage",
    "name": "Portage",
    "job": "Busca de vagas e preparação de candidatura",
    "description": "Aplicativo com fontes de vagas, acompanhamento e rascunhos.",
    "limit": "Snapshot de showcase existente; não é instalação completa nem validação do produto público.",
    "demo": "jobs",
    "url": "https://autonomadigital.com/portage/",
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "mirante",
    "name": "Mirante",
    "job": "Pesquisa pessoal com referências",
    "description": "Captura e arquivo de conteúdo, transcrição e perguntas com referência temporal.",
    "limit": "Fonte privada não copiada. Exemplo didático de busca; não executa o Mirante nem serviços de IA.",
    "demo": "retrieval",
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "guardrails",
    "name": "Agent OS e guardrails",
    "job": "Revisão e continuidade entre agentes",
    "description": "Regras, briefing e verificações antes de mudanças sensíveis.",
    "limit": "Showcase anterior parcial com dependências ausentes. O exemplo de hash não instala hooks nem garante segurança.",
    "demo": "approval",
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "ops",
    "name": "Robôs de operações",
    "job": "Tarefas periódicas verificáveis",
    "description": "Triagem, rascunhos, relatórios, acompanhamento de resultado e organização de abas.",
    "limit": "Sem caixas de entrada, históricos ou automações externas. O exemplo valida resultado fictício.",
    "demo": "watcher",
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "assistentes",
    "name": "Assistentes de sites",
    "job": "Informações do negócio com passagem humana",
    "description": "Respostas com conteúdo aprovado e fluxo de encaminhamento.",
    "limit": "Nenhuma persona ou configuração de cliente exportada. Sem modelo conectado nesta amostra.",
    "demo": "retrieval",
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "publisher",
    "name": "Publicação com aprovação",
    "job": "Aprovação ligada à peça exata",
    "description": "Desenho de fila e verificação de alteração no arquivo aprovado.",
    "limit": "Exemplo isolado; não publica. Espelhamento entre plataformas não certificado neste pacote.",
    "demo": "approval",
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "financas",
    "name": "Contas e Dízimos",
    "job": "Importação e reconciliação local",
    "description": "Pipelines financeiros locais e interface desktop.",
    "limit": "Sem dados bancários ou código privado. A amostra de CSV é didática; não é o parser de extratos original.",
    "demo": "ledger",
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "cartoes",
    "name": "Cartões",
    "job": "Organização de faturas",
    "description": "Fluxo separado de Contas e Dízimos para categorização e conferência.",
    "limit": "Dados exclusivamente inventados. Não apresenta integração bancária ou suporte a qualquer fatura.",
    "demo": "ledger",
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "unhurry",
    "name": "Unhurry Home",
    "job": "Organização da casa",
    "description": "Plataforma com listas, calendário e componentes de rotina.",
    "limit": "Página pública conferida por conteúdo; login, estado persistido e módulos não testados aqui.",
    "demo": null,
    "url": "https://home.unhurryyourself.com",
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "meals",
    "name": "Meals e Shopping",
    "job": "Refeições e lista de compras",
    "description": "Componentes de organização de refeições e compras.",
    "limit": "Inventariados dentro de Unhurry; não contados como produtos separados prontos.",
    "demo": null,
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "calendar",
    "name": "Calendar e rotinas",
    "job": "Agenda doméstica",
    "description": "Componentes de calendário e rotinas.",
    "limit": "Nenhuma agenda real ou automação agendada exportada.",
    "demo": null,
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "money",
    "name": "Money",
    "job": "Organização de dinheiro no Home",
    "description": "Componente financeiro doméstico da plataforma.",
    "limit": "Código e registros pessoais não exportados; distinção preservada em relação aos apps desktop.",
    "demo": null,
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "health",
    "name": "Health",
    "job": "Organização de informações de saúde",
    "description": "Componente privado de organização de documentos e registros.",
    "limit": "Sem prontuários, valores, nomes ou documentos clínicos; nenhuma promessa de diagnóstico ou criptografia ponta a ponta.",
    "demo": null,
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "childview",
    "name": "Child view e utilitários",
    "job": "Interface por contexto familiar",
    "description": "Componentes auxiliares da plataforma doméstica.",
    "limit": "Nenhum perfil, PIN ou informação de criança incluído.",
    "demo": null,
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "culto",
    "name": "Culto em Família",
    "job": "Rotina de estudo em família",
    "description": "Interface de estudo e conteúdo organizado.",
    "limit": "Página pública conferida; uso familiar e progresso não exportados.",
    "demo": null,
    "url": "https://autonomadigital.com/culto/",
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "estudo",
    "name": "Estudo Pessoal / CAMINHO",
    "job": "Estudo individual",
    "description": "Frontend de leitura e estudo, separado do backend de busca.",
    "limit": "Página pública conferida; não inclui biblioteca completa nem progresso pessoal.",
    "demo": null,
    "url": "https://autonomadigital.com/estudo-pessoal/",
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "rag",
    "name": "Scripture RAG",
    "job": "Busca com fontes identificadas",
    "description": "Arquitetura de recuperação por fonte e respostas com referência.",
    "limit": "Showcase existente é parcial e não contém ingest principal. Amostra usa textos fictícios, não versículos fabricados.",
    "demo": "retrieval",
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "escola",
    "name": "Escola no Lar",
    "job": "Apoio à rotina de aprendizagem",
    "description": "Aplicativo bilíngue com atividades e organização.",
    "limit": "Não é currículo completo. Sem nomes, fotos ou portfólio de crianças.",
    "demo": null,
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "vault",
    "name": "Arquivo local de documentos",
    "job": "Busca em acervo pessoal",
    "description": "Protótipo de ingestão e pesquisa local.",
    "limit": "Somente descrição; nenhum arquivo pessoal, diagnóstico ou sistema privado exportado.",
    "demo": "retrieval",
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "sitelink",
    "name": "SiteLink",
    "job": "Comunicação de equipe",
    "description": "Aplicativo para comunicação e organização de trabalho.",
    "limit": "Sem equipes, telefones ou links autenticados. Adoção real não afirmada.",
    "demo": null,
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "herdr",
    "name": "Controller e relay",
    "job": "Controle remoto de tarefas",
    "description": "Contribuição de interface e ponte em torno de engine upstream.",
    "limit": "Engine Herdr não é invenção da Autonoma. Código upstream, sessões, comandos e credenciais não copiados.",
    "demo": null,
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "painel",
    "name": "Painel de Projetos e Agenda",
    "job": "Visão coordenada do trabalho",
    "description": "Interface para projetos, tarefas e organização.",
    "limit": "Nenhuma decisão, contato ou agenda real incluída.",
    "demo": null,
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "achei",
    "name": "Achei!",
    "job": "Diretório de negócios",
    "description": "Projeto de diretório e descoberta de negócios.",
    "limit": "Export da versão ativa ainda não validado; sem lista de empresas, leads ou promessa de audiência.",
    "demo": null,
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "minicrm",
    "name": "Mini-CRM",
    "job": "Contatos e acompanhamento em um navegador",
    "description": "Kanban local com notas, busca e exportaçãoCSV.",
    "limit": "Cópia real sanitizada: três contatos fictícios, telemetria retirada, armazenamento isolado. Sem sincronização entre equipes.",
    "demo": "mini-crm",
    "url": null,
    "status": "Cópia local sanitizada"
  },
  {
    "id": "ytstudy",
    "name": "yt2study / EstudosYouTube",
    "job": "Conteúdo em material de estudo",
    "description": "Pipeline de transcrição e organização com referências.",
    "limit": "Sem históricos pessoais ou transcrições de terceiros; amostra de recuperação é apenas didática.",
    "demo": "retrieval",
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "websites",
    "name": "Websites e experiências visuais",
    "job": "Presença digital e demonstrações",
    "description": "Trabalho de sites, interação e páginas explicativas.",
    "limit": "Nenhum site, marca, fotografia ou código de cliente copiado. O portfólio de efeitos em vídeo continua pendente.",
    "demo": null,
    "url": "https://autonomadigital.com/work",
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "conteudo",
    "name": "Guias e produção de conteúdo",
    "job": "Materiais digitais e ferramentas de produção",
    "description": "Guias e processos de conteúdo das marcas próprias.",
    "limit": "Nenhum master, voz, família ou produto pago exportado; inventário não equivale a aplicativo operacional.",
    "demo": null,
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  },
  {
    "id": "sprint",
    "name": "Sprint de automação",
    "job": "Pedido → registro → aviso → rascunho",
    "description": "Nova oferta de fluxo delimitado com revisão humana.",
    "limit": "Pacote em desenvolvimento pelo executor. Não copiar sua implementação em curso nem afirmar integraçãoGoogle pronta.",
    "demo": "intake",
    "url": null,
    "status": "Caso documentado; produto não certificado aqui"
  }
];
