/* Curadoria editorial Rafael Rein. Links para terceiros são identificados em cada material. */
(function(){if(!document.querySelector('script[data-rr-mobile]')){const s=document.createElement('script');s.src='mobile-nav.js';s.dataset.rrMobile='1';document.head.appendChild(s)}})();
(function(){if(!document.querySelector('script[data-rr-analytics]')){const s=document.createElement('script');s.src='analytics.js';s.defer=true;s.dataset.rrAnalytics='1';document.head.appendChild(s)}})();
window.RR_MATERIAIS = [
  {
    id:"diagnostico-processos",category:"Prompts",label:"Prompt completo + roteiro",level:"Gestores",title:"Descubra onde sua empresa perde tempo",description:"Diagnóstico de gargalos em cinco fases, antes de comprar ferramentas ou automatizar.",origin:"Roteiro editorial Rafael Rein",duration:"20–40 min de diagnóstico inicial",
    why:"O atraso que aparece na última etapa muitas vezes nasce bem antes: entrada incompleta, validação duplicada, fila sem dono ou exceções sem regra. O objetivo é investigar o caminho inteiro e priorizar correções com base em fatos.",
    uses:["Investigar um processo administrativo que vive atrasando.","Separar retrabalho causado por dados ruins de falta de capacidade.","Planejar um piloto pequeno antes de investir em automação."],
    steps:["Descreva um processo específico e o resultado que ele deveria entregar.","Responda às perguntas de descoberta com dados conhecidos; use 'não medido' para o que faltar.","Valide o mapa atual com pelo menos uma pessoa que executa a rotina.","Priorize correções reversíveis e estabeleça indicadores antes do piloto."],
    prompt:`Atue como consultor de operações e gestão de projetos. Investigue um único processo, sem sugerir IA antes de identificar as causas. Comece com até cinco perguntas de descoberta, uma por vez, sobre gatilho, responsáveis, etapas, aprovações, volume, esperas, retrabalho, exceções e sistemas.

Contexto: [setor, processo, dor, volume, ferramentas, prazo atual, resultado desejado].

Depois das respostas, entregue em ordem:
1. Tabela AS-IS: etapa, entrada, saída, responsável, ferramenta, tempo ativo, espera, falhas e fonte.
2. Até cinco gargalos, separando FATO, HIPÓTESE e DADO A COLETAR.
3. Investigação de causa raiz dos dois principais gargalos, com perguntas de validação.
4. Oportunidades A) sem tecnologia nova, B) padronização, C) automação após estabilização.
5. Matriz impacto x esforço com riscos, dependências e justificativa.
6. Fluxo TO-BE e plano de 30/60/90 dias com dono por função e critério de aceite.
7. Três a cinco indicadores: definição, fórmula, fonte e como levantar a linha de base.
8. Piloto reversível de 2 a 4 semanas, com critérios de sucesso e de interrupção.

Não invente números, custos ou economias. Não confunda sintoma e causa. Aponte lacunas e riscos de dados pessoais; peça validação humana para decisões críticas. Ao final, pergunte qual das três prioridades quero detalhar em tarefas semanais.`,
    warning:"Use dados anonimizados. O resultado é um diagnóstico preliminar; confirme processos, custos e riscos com quem opera a rotina."
  },
  {
    id:"decisao-negocio",category:"Prompts",label:"Prompt + matriz",level:"Empresários",title:"Uma decisão difícil, sem achismo",description:"Compare alternativas com critérios, cenários, riscos e um teste reversível.",origin:"Roteiro editorial Rafael Rein",duration:"15–30 min",
    why:"Decisões ruins nem sempre vêm de falta de inteligência; muitas vezes vêm de premissas invisíveis e de não reconhecer o que ainda não sabemos.",
    uses:["Escolher entre duas prioridades de investimento.","Decidir contratar, terceirizar ou automatizar.","Avaliar um novo produto antes de comprometer capital."],
    steps:["Defina a decisão e até quatro opções mutuamente comparáveis.","Preencha restrições, prazo, orçamento e o que seria sucesso.","Analise a tabela e conteste a recomendação mais forte.","Faça primeiro o menor experimento que reduza uma incerteza relevante."],
    prompt:`Seja meu comitê crítico de decisão. Decisão: [descreva]. Opções: [liste]. Limites: [prazo, caixa, equipe]. Objetivo: [resultado mensurável].
Primeiro faça perguntas sobre fatos, premissas e dados ausentes. Em seguida construa uma tabela comparando: impacto, custo, esforço, risco, dependências, reversibilidade e evidência disponível. Apresente cenário otimista, base e adverso SEM inventar percentuais; marque o que precisa ser estimado.
Faça um pre-mortem: como cada opção poderia fracassar? Traga o argumento mais forte CONTRA sua recomendação. Proponha um experimento barato e reversível, com critério de parada. Finalize com uma recomendação condicional: 'eu escolheria X se Y for confirmado; caso contrário, Z'.`,
    warning:"Não substitui análise financeira, jurídica ou técnica quando a decisão envolver essas áreas."
  },
  {
    id:"ata-plano",category:"Prompts",label:"Prompt + modelo",level:"Equipes",title:"Sua reunião acabou. E agora?",description:"Transforme anotações em decisões, pendências e ações com donos verificáveis.",origin:"Roteiro editorial Rafael Rein",duration:"5–15 min",
    why:"O valor de uma reunião está no que muda depois dela. O material separa compromisso confirmado de interpretação e deixa explícitos os pontos sem responsável.",
    uses:["Reunião de implantação com cliente.","Alinhamento semanal de projeto.","Comitê de produto ou operação."],
    steps:["Cole apenas anotações autorizadas e remova dados sensíveis.","Peça separação de decisões, ações e dúvidas.","Valide nomes, prazos e compromissos antes de distribuir a ata.","Revisite pendências na reunião seguinte."],
    prompt:`A partir das anotações a seguir, crie uma ata operacional. Não invente nomes, prazos ou decisões. Classifique cada informação como: DECISÃO CONFIRMADA, AÇÃO, PENDÊNCIA, RISCO ou HIPÓTESE.
Produza: (1) resumo em 100 palavras; (2) tabela de ações com responsável, prazo, dependência e estado; (3) decisões e justificativas quando registradas; (4) pontos que precisam de confirmação; (5) mensagem curta de acompanhamento. Se responsável ou prazo não constar, escreva 'a definir'. Identifique ambiguidades e pergunte antes de consolidar.
Anotações: [cole aqui].`,
    warning:"Obtenha consentimento e respeite as regras da organização antes de usar gravações ou transcrições."
  },
  {
    id:"mapear",category:"Skills",label:"Skill de Rafael",level:"Gestão",title:"Método MAPEAR: investigue antes de automatizar",description:"Uma sequência estruturada para entender a dor, auditar o processo e validar a causa.",origin:"Skill pessoal de Rafael Rein",duration:"Uso por etapas",
    why:"A skill organiza uma conversa para que a IA não pule do problema percebido para uma solução vistosa, mas mal fundamentada.",
    uses:["Diagnóstico de processos comerciais e administrativos.","Redesenho de uma rotina antes de digitalizar.","Organização de hipóteses e evidências para um piloto."],
    steps:["Abra a skill no ChatGPT, se ela estiver disponível para sua conta.","Defina uma dor empresarial concreta e o processo envolvido.","Responda às perguntas e valide cada causa proposta com dados da operação.","Só depois selecione ações, automações e métricas."],
    warning:"O acesso à skill pode depender de permissões da plataforma. Não é um software de gestão pronto.",
    links:[{label:"Abrir skill no ChatGPT",url:"https://chatgpt.com/skills?skill_id=6ae945b34300819187ae9a98054be3cb"}]
  },
  {
    id:"motivacoes-compra",category:"Skills",label:"Skill de Rafael",level:"Marketing",title:"Por que o cliente realmente compra?",description:"Mapeie motivações, objeções, esforço percebido e hipóteses para teste.",origin:"Skill pessoal de Rafael Rein",duration:"30–60 min de análise",
    why:"A frase que parece bonita pode falhar por não responder à dúvida real do público. A análise ajuda a formular perguntas e mensagens a testar, sem presumir emoções de indivíduos.",
    uses:["Revisar uma landing page que não converte.","Planejar ganchos para Instagram.","Comparar benefícios e fricções de uma oferta."],
    steps:["Defina uma persona e uma experiência por vez.","Cole a oferta e as evidências disponíveis, sem dados pessoais.","Identifique benefícios, barreiras e promessas sem prova.","Crie versões de mensagem e teste com pessoas reais."],
    warning:"Hipóteses sobre motivação precisam de entrevistas e experimentos; não são laudos psicológicos.",
    links:[{label:"Abrir skill no ChatGPT",url:"https://chatgpt.com/skills?skill_id=6ae94992dc508191be3704cbdb2f9a03"}]
  },
  {
    id:"novos-produtos",category:"Skills",label:"Skill de Rafael",level:"Startups",title:"Da ideia ao MVP sem construir no escuro",description:"Validação de problema, escopo mínimo, riscos e critérios para avançar.",origin:"Skill pessoal de Rafael Rein",duration:"Sessão de descoberta",
    why:"Construir funcionalidades sem validar o problema aumenta custo, prazo e retrabalho. O material ajuda a tratar uma ideia como hipótese.",
    uses:["Planejar um produto de IA com escopo enxuto.","Testar demanda antes de desenvolver.","Definir o que fica fora do MVP."],
    steps:["Descreva quem sofre o problema e como resolve hoje.","Busque evidências e alternativas existentes.","Defina o teste mais simples que prove valor.","Estabeleça métricas e critérios de continuar, mudar ou parar."],
    warning:"Previsões de mercado e financeira precisam de dados atuais e validação independente.",
    links:[{label:"Abrir skill no ChatGPT",url:"https://chatgpt.com/skills?skill_id=6ae945ec73e481919611f083553a72ab"}]
  },
  {
    id:"agentes-sdk",category:"Repositórios",label:"Guia + GitHub + ZIP",level:"Desenvolvedores",title:"Agentes de IA que usam ferramentas",description:"OpenAI Agents SDK: conceitos, exemplo de Python, documentação e código-fonte.",origin:"OpenAI · GitHub / curadoria Rafael Rein",duration:"10 min de leitura",
    why:"O repositório reúne componentes para criar agentes, executar ferramentas, delegar tarefas, registrar fluxos e aplicar verificações. Não é um aplicativo pronto.",
    uses:["Prototipar um agente com uma ferramenta controlada.","Experimentar delegação entre agentes especializados.","Estudar monitoramento e validação de execuções."],
    steps:["Leia primeiro o guia em português preparado nesta Central.","Confira a documentação e os requisitos atuais.","Baixe o ZIP ou clone o repositório oficial.","Teste com dados fictícios e limite permissões antes de conectar sistemas."],
    warning:"Pode exigir Python, chave de API e custos de execução. Verifique licença e documentação no GitHub.",
    links:[{label:"Ler guia completo em português",url:"agentes-ia.html"},{label:"GitHub oficial",url:"https://github.com/openai/openai-agents-python"},{label:"Baixar código ZIP",url:"https://github.com/openai/openai-agents-python/archive/refs/heads/main.zip"},{label:"Documentação",url:"https://openai.github.io/openai-agents-python/"}]
  },
  {
    id:"mcp-servidores",category:"Repositórios",label:"Guia + GitHub + ZIP",level:"Técnico",title:"Como dar ferramentas a um agente com MCP",description:"Modelos de servidores que conectam agentes a dados e aplicações.",origin:"Model Context Protocol · GitHub",duration:"15 min de leitura",
    why:"O Model Context Protocol padroniza formas de disponibilizar ferramentas e recursos para clientes de IA. Os servidores de referência ajudam a estudar possibilidades.",
    uses:["Entender a separação entre agente e ferramenta.","Prototipar acesso controlado a uma fonte de dados.","Avaliar conectores antes de implantá-los."],
    steps:["Identifique qual dado ou ação precisa disponibilizar.","Leia as instruções e requisitos do servidor de referência.","Teste primeiro em ambiente isolado e sem credenciais de produção.","Revise permissões, registros e o que a ferramenta pode alterar."],
    warning:"Alguns servidores são exemplos educacionais, não soluções prontas para produção; nunca publique segredos.",
    links:[{label:"GitHub oficial",url:"https://github.com/modelcontextprotocol/servers"},{label:"Baixar ZIP",url:"https://github.com/modelcontextprotocol/servers/archive/refs/heads/main.zip"}]
  },
  {
    id:"claude-code",category:"Repositórios",label:"Guia + GitHub",level:"Desenvolvedores",title:"Claude Code: IA na rotina de programação",description:"Uma ferramenta de programação assistida para navegar em projetos e executar tarefas.",origin:"Anthropic · GitHub",duration:"10 min de leitura",
    why:"Agentes de programação podem acelerar tarefas repetitivas, mas precisam de escopo, revisão e testes. O repositório oficial é o ponto de partida para requisitos e instalação.",
    uses:["Explorar uma base de código existente.","Planejar alterações pequenas e verificáveis.","Testar automações de desenvolvimento com revisão."],
    steps:["Leia os requisitos e a documentação oficial.","Prepare um projeto de teste e controle de versão.","Peça uma alteração limitada, com critérios de aceite.","Revise diferenças e execute testes antes de integrar."],
    warning:"Revise comandos, permissões, custos e alterações antes de executar em projetos importantes.",
    links:[{label:"GitHub oficial",url:"https://github.com/anthropics/claude-code"}]
  },
  {
    id:"skills-codex",category:"Repositórios",label:"Catálogo + GitHub",level:"IA aplicada",title:"Skills para repetir bons processos no Codex",description:"Instruções reutilizáveis para tarefas específicas, com exemplos oficiais.",origin:"OpenAI · GitHub",duration:"10–20 min",
    why:"Uma skill organiza instruções e recursos de uma tarefa recorrente, ajudando a manter consistência quando o contexto muda.",
    uses:["Padronizar revisão de código ou documentos.","Criar instruções para uma rotina da empresa.","Estudar estrutura e exemplos de skills."],
    steps:["Escolha uma rotina estreita e repetível.","Leia uma skill oficial para entender estrutura e limites.","Adapte instruções e critérios de qualidade sem expor dados sensíveis.","Teste com casos reais e casos extremos antes de compartilhar."],
    warning:"Skills são instruções, não garantias de qualidade. Revise permissões e arquivos antes de instalar.",
    links:[{label:"Catálogo oficial no GitHub",url:"https://github.com/openai/skills"},{label:"Baixar ZIP",url:"https://github.com/openai/skills/archive/refs/heads/main.zip"}]
  },
  {
    id:"skills-anthropic",category:"Repositórios",label:"Catálogo + GitHub",level:"IA aplicada",title:"Como estruturar skills para o Claude",description:"Exemplos de skills e materiais reutilizáveis no ecossistema Anthropic.",origin:"Anthropic · GitHub",duration:"10–20 min",
    why:"Além do prompt isolado, uma skill pode reunir passos, exemplos e critérios para executar um trabalho de forma consistente.",
    uses:["Entender a organização de instruções reutilizáveis.","Adaptar uma rotina de escrita ou análise.","Comparar abordagens para Codex e Claude."],
    steps:["Abra o repositório e identifique as skills relevantes.","Leia documentação, arquivos auxiliares e restrições.","Instale somente o que compreender e testar.","Mantenha controle sobre scripts executáveis e dados acessados."],
    warning:"Não execute código de skills desconhecidas sem revisão. A disponibilidade depende do ambiente.",
    links:[{label:"GitHub oficial",url:"https://github.com/anthropics/skills"},{label:"Baixar ZIP",url:"https://github.com/anthropics/skills/archive/refs/heads/main.zip"}]
  },
  {
    id:"projetos-checklist",category:"Gestão",label:"Checklist prático",level:"Gestores",title:"Antes de começar um projeto, responda isto",description:"Escopo, patrocinador, riscos, métricas e aprovação de mudanças numa lista utilizável.",origin:"Roteiro editorial Rafael Rein",duration:"15 min",
    why:"Projetos começam a derrapar quando não se combinou o que significa terminar bem, quem aprova e o que fica fora.",
    uses:["Reunião de kickoff.","Proposta de projeto interno.","Revisão de iniciativas de IA."],
    steps:["Defina o problema e o resultado mensurável.","Nomeie patrocinador e responsável pela entrega.","Registre escopo, exclusões, dependências, custo e prazo.","Combine marcos, ritos de decisão e fluxo de mudanças."],
    prompt:`CHECKLIST DE ABERTURA DE PROJETO
[ ] Problema e objetivo de negócio documentados
[ ] Resultado e indicador de sucesso definidos
[ ] Patrocinador e responsável pela entrega nomeados
[ ] Entregáveis e o que está FORA do escopo registrados
[ ] Premissas e restrições acordadas
[ ] Datas, dependências e recursos identificados
[ ] Orçamento e margem de incerteza explicitados
[ ] Top 5 riscos com donos e respostas
[ ] Quem aprova mudanças de escopo definido
[ ] Primeiro marco de valor verificável combinado
[ ] Comunicação, frequência e formato do status acordados
[ ] Critério de aceite e encerramento registrado`,
    warning:"Adapte a governança ao porte, risco e contexto do projeto."
  },
  {
    id:"agentes-oportunidade",category:"IA aplicada",label:"Roteiro de avaliação",level:"Empresas",title:"Qual tarefa merece um agente de IA?",description:"Um filtro para descobrir onde um agente ajudaria e onde seria risco desnecessário.",origin:"Roteiro editorial Rafael Rein",duration:"20 min",
    why:"O maior potencial não está em usar IA em tudo, mas em escolher tarefas frequentes, verificáveis, com consequências de erro controladas.",
    uses:["Triar ideias de automação.","Preparar um backlog de IA.","Definir supervisão e limites."],
    steps:["Liste tarefas com frequência, duração e entrada/saída definidas.","Avalie qualidade dos dados e custo de falha.","Separe sugestão, preparação e execução de ações.","Comece com piloto medido e aprovação humana."],
    prompt:`Avalie esta tarefa para uso de um agente de IA: [descreva]. Faça perguntas sobre volume, variabilidade, regras, sistemas, dados sensíveis, custo de erro e revisão humana. Entregue uma tabela: oportunidade | pré-requisito | risco | controle | indicador | decisão (testar/agendar/descartar). Sugira a versão mais simples sem autonomia primeiro. Não invente economia ou taxa de acerto.`,
    warning:"Não conceda acesso de escrita a sistemas críticos antes de testar, auditar e definir aprovações."
  },
  {
    id:"metricas-ia",category:"IA aplicada",label:"Planilha conceitual",level:"Gestão",title:"Como saber se o projeto de IA funcionou?",description:"Indicadores de tempo, qualidade, adoção, custo e segurança para testar antes e depois.",origin:"Roteiro editorial Rafael Rein",duration:"15 min",
    why:"Uma boa demonstração impressiona; um projeto útil precisa melhorar um resultado medido com custo e risco aceitáveis.",
    uses:["Acompanhar piloto de automação.","Comparar processo manual e assistido.","Revisar retorno de iniciativas internas."],
    steps:["Estabeleça a linha de base antes do teste.","Defina definição, fórmula, fonte e frequência de cada métrica.","Registre também retrabalho, erros e intervenções humanas.","Revise resultados e decida ampliar, corrigir ou parar."],
    prompt:`Monte um painel de avaliação para este piloto de IA: [descrição]. Inclua cinco dimensões: eficiência, qualidade, custo total, adoção e segurança. Para cada métrica defina: fórmula, fonte, responsável, periodicidade, linha de base, meta a validar e limites de alerta. Separe dados observados de estimativas. Proponha um critério de go/no-go ao fim de quatro semanas.`,
    warning:"Horas economizadas não são automaticamente economia financeira; considere custos de revisão e manutenção."
  },
  {
    id:"priorizacao",category:"Estratégia",label:"Matriz prática",level:"Liderança",title:"O que fazer primeiro quando tudo é urgente?",description:"Critérios para escolher entre iniciativas sem reduzir tudo a uma nota arbitrária.",origin:"Roteiro editorial Rafael Rein",duration:"15 min",
    why:"A prioridade precisa combinar impacto, urgência, esforço, risco e confiança nas evidências — não apenas quem pediu mais alto.",
    uses:["Organizar backlog de produto.","Decidir melhorias operacionais.","Escolher testes de crescimento."],
    steps:["Liste iniciativas com resultados desejados.","Defina critérios e pesos antes de pontuar.","Registre incerteza e dependências de cada opção.","Separe 'fazer agora', 'testar', 'planejar' e 'adiar'."],
    prompt:`Ajude a priorizar estas iniciativas: [lista]. Pergunte por impacto, urgência, custo de não fazer, esforço, risco, dependências e evidências. Construa matriz comparativa com notas justificadas, sem fingir precisão. Identifique escolhas que mudariam com dados novos. Proponha uma sequência de execução e três experimentos de redução de incerteza.`,
    warning:"Pontuações apoiam decisões, mas não substituem julgamento e responsabilidade da liderança."
  },
  {
    id:"proposta-beneficios",category:"Prompts",label:"Prompt empresarial",level:"Comercial",title:"Propostas comerciais sem informação inventada",description:"Estruture uma proposta a partir de regras, valores e condições efetivamente fornecidos.",origin:"Roteiro editorial Rafael Rein",duration:"10–20 min",
    why:"O risco de uma proposta assistida por IA é preencher lacunas com informações convincentes, porém falsas. O processo precisa conservar a origem de cada dado.",
    uses:["Preparar primeira versão de uma proposta.","Conferir condições e campos ausentes.","Padronizar benefícios e ressalvas."],
    steps:["Forneça tabela oficial de preços e regras vigentes.","Separe dados do cliente, cobertura, carências e coparticipações.","Gere minuta com origem de cada informação e perguntas abertas.","Revise condições comerciais e jurídicas antes do envio."],
    prompt:`Atue como assistente de propostas comerciais. Use exclusivamente as informações abaixo: [produto], [público], [quantidades], [preços], [condições], [validade], [coberturas], [exclusões], [coparticipações]. Gere resumo executivo, escopo, investimento, condições, ressalvas, próximos passos e checklist de conferência. Se faltar dado, use [PENDENTE], nunca invente. Confira cálculos e mostre memória de cálculo quando houver valores. Não prometa o que não constar das condições fornecidas.`,
    warning:"Revise preços, redes, coberturas, legislação e validade em fontes oficiais antes de enviar."
  }
];
