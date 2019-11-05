const devOpsGraph = {
  groups: [
    {
      id: 100,
      label: 'Qualidade do Código',
      color: '#66c2a5',
    },
    {
      id: 200,
      label: 'Configuração como código',
      color: '#fc8d62',
    },
    {
      id: 300,
      label: 'Gestão dos Builds',
      color: '#8da0cb',
    },
    {
      id: 400,
      label: 'Gestão de Testes',
      color: '#e78ac3',
    },
    {
      id: 500,
      label: 'Testes de Carga',
      color: '#a6d854',
    },
    {
      id: 600,
      label: 'Gestão de Configuração',
      color: '#ffd92f',
    },
    {
      id: 700,
      label: 'Gestão de Release',
      color: '#e5c494',
    },
    {
      id: 800,
      label: 'Monitoração de Aplicações',
      color: '#b3b3b3',
    },
  ],
  nodes: [
    {
      id: 1011,
      groupId: 100,
      label: 'QC1A',
      title: 'Qualidade do Código - Inicial',
      details: 'Ausência de padrões de codificação.',
      status: 1,
    },
    {
      id: 1012,
      groupId: 100,
      label: 'QC1B',
      title: 'Qualidade do Código - Inicial',
      details: 'Qualidade depende de cada desenvolvedor.',
      status: 1,
    },
    {
      id: 1021,
      groupId: 100,
      label: 'QC2A',
      title: 'Qualidade do Código - Consciente',
      details: 'Busca pela redução do tempo de ciclo e retrabalhos.',
      status: 1,
    },
    {
      id: 1022,
      groupId: 100,
      label: 'QC2B',
      title: 'Qualidade do Código - Consciente',
      details: 'Ações iniciais em projetos pilotos, com ferramentas de automação.',
      status: 1,
    },
    {
      id: 1023,
      groupId: 100,
      label: 'QC2C',
      title: 'Qualidade do Código - Consciente',
      details: 'Aproximação entre desenvolvimento, qualidade e operações.',
      status: 1,
    },
    {
      id: 1031,
      groupId: 100,
      label: 'QC3A',
      title: 'Qualidade do Código - Gerenciado',
      details: 'Automação da revisão por pares.',
      status: 1,
    },
    {
      id: 1032,
      groupId: 100,
      label: 'QC3B',
      title: 'Qualidade do Código - Gerenciado',
      details: 'Verificação da qualidade ocorre em ambientes dedicados de integração.',
      status: 1,
    },
    {
      id: 1033,
      groupId: 100,
      label: 'QC3C',
      title: 'Qualidade do Código - Gerenciado',
      details: 'Geração de alertas e defeitos realizados por ferramentas.',
      status: 1,
    },
    {
      id: 1041,
      groupId: 100,
      label: 'QC4A',
      title: 'Qualidade do Código - Avançado',
      details: 'Qualidade incorpora atributos de qualidade tais como performance, segurança e usabilidade.',
      status: 0,
    },
    {
      id: 1042,
      groupId: 100,
      label: 'QC4B',
      title: 'Qualidade do Código - Avançado',
      details: 'Verificação da qualidade opera consistentemente em base diária por automações.',
      status: 1,
    },
    {
      id: 1051,
      groupId: 100,
      label: 'QC5A',
      title: 'Qualidade do Código - Melhoria contínua',
      details: 'Verificação da qualidade é disparada no momento dos _commits_.',
      status: 1,
    },
    {
      id: 1052,
      groupId: 100,
      label: 'QC5B',
      title: 'Qualidade do Código - Melhoria contínua',
      details: 'Defeitos e não conformidades são resolvidos em base diária.',
      status: 1,
    },
    {
      id: 1053,
      groupId: 100,
      label: 'QC5C',
      title: 'Qualidade do Código - Melhoria contínua',
      details: '_Dashboards_ de qualidade de código compartilhados publicamente.',
      status: 1,
    },
    {
      id: 2011,
      groupId: 200,
      label: 'CC1A',
      title: 'Configuração como Código - Inicial',
      details: 'Trabalhos de configuração de ambientes, dados de testes, parâmetros e senhas são manuais.',
      status: 1,
    },
    {
      id: 2012,
      groupId: 200,
      label: 'CC1B',
      title: 'Configuração como Código - Inicial',
      details: 'Cultura de _scripts_ ainda não foi estabelecidada.',
      status: 1,
    },
    {
      id: 2021,
      groupId: 200,
      label: 'CC2A',
      title: 'Configuração como Código - Consciente',
      details: '_Scripts_ de automação começam a ser criados.',
      status: 1,
    },
    {
      id: 2022,
      groupId: 200,
      label: 'CC2B',
      title: 'Configuração como Código - Consciente',
      details: 'Compartilhamento de _scripts_ entre times de desenvolvimento, qualidade e operações.',
      status: 1,
    },
    {
      id: 2031,
      groupId: 200,
      label: 'CC3A',
      title: 'Configuração como Código - Gerenciado',
      details: '- _Scripts_ para a maior parte dos trabalhos repetitivos.',
      status: 1,
    },
    {
      id: 2032,
      groupId: 200,
      label: 'CC3B',
      title: 'Configuração como Código - Gerenciado',
      details: 'Repositórios de _scripts_ bem estabelecidos.',
      status: 1,
    },
    {
      id: 2033,
      groupId: 200,
      label: 'CC3C',
      title: 'Configuração como Código - Gerenciado',
      details: 'Intenso compartilhamento de _scripts_ entre times.',
      status: 1,
    },
    {
      id: 2041,
      groupId: 200,
      label: 'CC4A',
      title: 'Configuração como Código - Avançado',
      details: '_Scripts_ para provisionamento de máquinas virtuais começam a ser desenvolvidos.',
      status: 0,
    },
    {
      id: 2042,
      groupId: 200,
      label: 'CC4B',
      title: 'Configuração como Código - Avançado',
      details: 'Infraestrutura como código (IaC) aproxima o trabalho dos times de desenvolvimento e operações.',
      status: 0,
    },
    {
      id: 2051,
      groupId: 200,
      label: 'CC5A',
      title: 'Configuração como Código - Melhoria Contínua',
      details: 'Infraestrutura como código (IaC) é prática comum.',
      status: 0,
    },
    {
      id: 2052,
      groupId: 200,
      label: 'CC5B',
      title: 'Configuração como Código - Melhoria Contínua',
      details: 'Sem fricção no provisionamento e configuração de ambientes.',
      status: 0,
    },
    {
      id: 2053,
      groupId: 200,
      label: 'CC5C',
      title: 'Configuração como Código - Melhoria Contínua',
      details: 'Sinergia entre desenvolvimento e operações.',
      status: 1,
    },
    {
      id: 3011,
      groupId: 300,
      label: 'GB1A',
      title: 'Gestão de Builds - Inicial',
      details: '_Builds_ são montados nas próprias IDEs.',
      status: 1,
    },
    {
      id: 3012,
      groupId: 300,
      label: 'GB1B',
      title: 'Gestão de Builds - Inicial',
      details: 'Automação de _builds_ ainda é precária.',
      status: 1,
    },
    {
      id: 3013,
      groupId: 300,
      label: 'GB1C',
      title: 'Gestão de Builds - Inicial',
      details: 'Uso inicial de ferramentas de linhas de comando de _builds_.',
      status: 1,
    },
    {
      id: 3021,
      groupId: 300,
      label: 'GB2A',
      title: 'Gestão de Builds - Consciente',
      details: '_Builds_ são realizados em ambientes dedicados, com gestão centralizada de dependências e compilação do código fonte.',
      status: 1,
    },
    {
      id: 3022,
      groupId: 300,
      label: 'GB2B',
      title: 'Gestão de Builds - Consciente',
      details: '_Builds_ ocorrem de forma automatizada em base diária.',
      status: 1,
    },
    {
      id: 3031,
      groupId: 300,
      label: 'GB3A',
      title: 'Gestão de Builds - Gerenciado',
      details: '_Builds_ incorporam alguns processos tais como automação de testes, configuração de ambientes, qualidade de código, geração de _tags_ e documentação técnica.',
      status: 1,
    },
    {
      id: 3032,
      groupId: 300,
      label: 'GB3B',
      title: 'Gestão de Builds - Gerenciado',
      details: ' _Builds_ geram defeitos para desenvolvedores e qualidade.',
      status: 1,
    },
    {
      id: 3041,
      groupId: 300,
      label: 'GB4A',
      title: 'Gestão de Builds - Avançado',
      details: '_Builds_ incorporam obrigatoriamente automação de testes, configuração de ambiente, qualidade de código, geração de _tags_ e documentação técnica, entre outros.',
      status: 0,
    },
    {
      id: 3042,
      groupId: 300,
      label: 'GB4B',
      title: 'Gestão de Builds - Avançado',
      details: 'Primeiros experimentos de integração contínua (CI) começam.',
      status: 1,
    },
    {
      id: 3051,
      groupId: 300,
      label: 'GB5A',
      title: 'Gestão de Builds - Melhoria Contínua',
      details: 'Integração contínua (CI) é prática comum.',
      status: 1,
    },
    {
      id: 3052,
      groupId: 300,
      label: 'GB5B',
      title: 'Gestão de Builds - Melhoria Contínua',
      details: 'Defeitos e não conformidades são expostos em base contínua pelos _builds_ e resolvidos em base diária pelos times de desenvolvimento.',
      status: 1,
    },
    {
      id: 4011,
      groupId: 400,
      label: 'GR1A',
      title: 'Gestão de Releases - Inicial',
      details: '- _Builds_ são copiados de forma manual entre ambientes de desenvolvimento, homologação e produção.',
      status: 1,
    },
    {
      id: 4012,
      groupId: 400,
      label: 'GR1B',
      title: 'Gestão de Releases - Inicial',
      details: 'Parâmetros nos ambientes são configurados manualmente.',
      status: 1,
    },
    {
      id: 4021,
      groupId: 400,
      label: 'GR2A',
      title: 'Gestão de Releases - Consciente',
      details: 'Automação das cópias dos _builds_ entre ambientes.',
      status: 1,
    },
    {
      id: 4022,
      groupId: 400,
      label: 'GR2B',
      title: 'Gestão de Releases - Consciente',
      details: 'Parâmetros nos ambientes configurados por _scripts_ automatizados.',
      status: 1,
    },
    {
      id: 4031,
      groupId: 400,
      label: 'GR3A',
      title: 'Gestão de Releases - Gerenciado',
      details: 'Implantação em homologação ocorre sempre que um _build_ é gerando - Implantação Contínua.',
      status: 1,
    },
    {
      id: 4032,
      groupId: 400,
      label: 'GR3B',
      title: 'Gestão de Releases - Gerenciado',
      details: 'Automação dos fluxos de aprovação entre ambientes de desenvolvimento, homologação e produção.',
      status: 1,
    },
    {
      id: 4041,
      groupId: 400,
      label: 'GR4A',
      title: 'Gestão de Releases - Avançado',
      details: 'Provisionamento começa a ocorrer com micro-containeres.',
      status: 0,
    },
    {
      id: 4042,
      groupId: 400,
      label: 'GR4B',
      title: 'Gestão de Releases - Avançado',
      details: 'Implantação automatizada incorpora o provisionamento de ambientes com uso de conteinerização.',
      status: 0,
    },
    {
      id: 4051,
      groupId: 400,
      label: 'GR5A',
      title: 'Gestão de Releases - Melhoria Contínua',
      details: 'Implantação em produção ocorre sempre que um _build_ é gerado no ambiente de homologação - *Entrega Contínua*.',
      status: 1,
    },
    {
      id: 4052,
      groupId: 400,
      label: 'GR5B',
      title: 'Gestão de Releases - Melhoria Contínua',
      details: 'Provisionamento completamente virtualizado.',
      status: 0,
    },
    {
      id: 4053,
      groupId: 400,
      label: 'GR5C',
      title: 'Gestão de Releases - Melhoria Contínua',
      details: 'Automação da implantação incorpora Infraestrutura coom código (IaC).',
      status: 0,
    },
    {
      id: 5011,
      groupId: 500,
      label: 'GT1A',
      title: 'Gestão de Testes - Inicial',
      details: 'Sem cultura de testes.',
      status: 1,
    },
    {
      id: 5012,
      groupId: 500,
      label: 'GT1B',
      title: 'Gestão de Testes - Inicial',
      details: 'Testes são executados de forma exploratória.',
      status: 1,
    },
    {
      id: 5013,
      groupId: 500,
      label: 'GT1C',
      title: 'Gestão de Testes - Inicial',
      details: 'Defeitos se acumulam nas fases finais dos projetos.',
      status: 1,
    },
    {
      id: 5021,
      groupId: 500,
      label: 'GT2A',
      title: 'Gestão de Testes - Consciente',
      details: 'Testes funcionais bem estabelecidos.',
      status: 1,
    },
    {
      id: 5022,
      groupId: 500,
      label: 'GT2B',
      title: 'Gestão de Testes - Consciente',
      details: 'Testes de unidade são introduzidos para regras de negócio complexas.',
      status: 1,
    },
    {
      id: 5023,
      groupId: 500,
      label: 'GT2C',
      title: 'Gestão de Testes - Consciente',
      details: 'Automação de testes começa a ser experimentada em projetos pilotos.',
      status: 1,
    },
    {
      id: 5031,
      groupId: 500,
      label: 'GT3A',
      title: 'Gestão de Testes - Gerenciado',
      details: 'Automação de testes ocorre para testes funcionais e testes de unidade.',
      status: 1,
    },
    {
      id: 5032,
      groupId: 500,
      label: 'GT3B',
      title: 'Gestão de Testes - Gerenciado',
      details: 'Cobertura automatizada do código é monitorada.',
      status: 1,
    },
    {
      id: 5033,
      groupId: 500,
      label: 'GT3C',
      title: 'Gestão de Testes - Gerenciado',
      details: 'Automação de testes é incorporada aos processos de _build_.',
      status: 1,
    },
    {
      id: 5041,
      groupId: 500,
      label: 'GT4A',
      title: 'Gestão de Testes - Avançado',
      details: 'Automação de testes incorpora aspectos não-funcionais como segurança e usabilidade.',
      status: 0,
    },
    {
      id: 5042,
      groupId: 500,
      label: 'GT4B',
      title: 'Gestão de Testes - Avançado',
      details: 'Processos de _build_ possuem suítes de automação de testes robustas e com excelente cobertura de código.',
      status: 1,
    },
    {
      id: 5043,
      groupId: 500,
      label: 'GT4C',
      title: 'Gestão de Testes - Avançado',
      details: 'Exposição e resolução de defeitos ocorre de forma continuada.',
      status: 1,
    },
    {
      id: 5051,
      groupId: 500,
      label: 'GT5A',
      title: 'Gestão de Testes - Melhoria Contínua',
      details: 'Testes de sanidade ocorrem em ambientes de produção.',
      status: 0,
    },
    {
      id: 5052,
      groupId: 500,
      label: 'GT5B',
      title: 'Gestão de Testes - Melhoria Contínua',
      details: 'Práticas de injeção de falhas são experimentadas.',
      status: 0,
    },
    {
      id: 5053,
      groupId: 500,
      label: 'GT5C',
      title: 'Gestão de Testes - Melhoria Contínua',
      details: 'Testes canários são incoporados nas _releases_.',
      status: 0,
    },
    {
      id: 6011,
      groupId: 600,
      label: 'GCF1A',
      title: 'Gestão de Configuração - Inicial',
      details: 'Ausência de configuração de código e ambiente.',
      status: 1,
    },
    {
      id: 6012,
      groupId: 600,
      label: 'GCF1B',
      title: 'Gestão de Configuração - Inicial',
      details: 'Códigos fonte e outros artefatos são armazenados em sistemas de arquivos.',
      status: 1,
    },
    {
      id: 6013,
      groupId: 600,
      label: 'GCF1C',
      title: 'Gestão de Configuração - Inicial',
      details: 'Sem ferramentas de SCM.',
      status: 1,
    },
    {
      id: 6021,
      groupId: 600,
      label: 'GCF2A',
      title: 'Gestão de Configuração - Consciente',
      details: 'Ferramentas de gestão de configuração de código (SCM) implementadas.',
      status: 1,
    },
    {
      id: 6022,
      groupId: 600,
      label: 'GCF2B',
      title: 'Gestão de Configuração - Consciente',
      details: 'Controle automatizado de versionamento de código.',
      status: 1,
    },
    {
      id: 6023,
      groupId: 600,
      label: 'GCF2C',
      title: 'Gestão de Configuração - Consciente',
      details: '_Labels_ começam a ser usados para marcar versões.',
      status: 0,
    },
    {
      id: 6031,
      groupId: 600,
      label: 'GCF3A',
      title: 'Gestão de Configuração - Gerenciado',
      details: 'Gestão da configuração começa a incorporar binários e _scripts_ de automação de tarefas.',
      status: 1,
    },
    {
      id: 6032,
      groupId: 600,
      label: 'GCF3B',
      title: 'Gestão de Configuração - Gerenciado',
      details: 'Políticas de SCM estabelecidas.',
      status: 1,
    },
    {
      id: 6033,
      groupId: 600,
      label: 'GCF3C',
      title: 'Gestão de Configuração - Gerenciado',
      details: 'Automação das políticas de SCM começam a ser experimentadas.',
      status: 1,
    },
    {
      id: 6041,
      groupId: 600,
      label: 'GCF4A',
      title: 'Gestão de Configuração - Avançado',
      details: 'Maior parte dos binários de componentes e bibliotecas fazem parte da gestão de configuração.',
      status: 1,
    },
    {
      id: 6042,
      groupId: 600,
      label: 'GCF4B',
      title: 'Gestão de Configuração - Avançado',
      details: 'Políticas de SCM incorporam barreiras sólidas de qualidade.',
      status: 1,
    },
    {
      id: 6043,
      groupId: 600,
      label: 'GCF4C',
      title: 'Gestão de Configuração - Avançado',
      details: 'Políticas de SCM plenamente automatizadas.',
      status: 0,
    },
    {
      id: 6051,
      groupId: 600,
      label: 'GCF5A',
      title: 'Gestão de Configuração - Melhoria Contínua',
      details: 'Todos os binários de componentes e bibliotecas fazem parte da gestão de configuração.',
      status: 1,
    },
    {
      id: 6052,
      groupId: 600,
      label: 'GCF5B',
      title: 'Gestão de Configuração - Melhoria Contínua',
      details: 'Gestão da configuração incorpora ambientes virtualizados e trata a infraestrutura como código (IaC).',
      status: 0,
    },
    {
      id: 6053,
      groupId: 600,
      label: 'GCF5C',
      title: 'Gestão de Configuração - Melhoria Contínua',
      details: 'Ambientes _self-services_ são estabelecidos.',
      status: 0,
    },
    {
      id: 7011,
      groupId: 700,
      label: 'TC1A',
      title: 'Testes de Carga - Inicial',
      details: 'Testes de carga não são executados pelos times desenvolvimento, qualidade e operações.',
      status: 1,
    },
    {
      id: 7012,
      groupId: 700,
      label: 'TC1B',
      title: 'Testes de Carga - Inicial',
      details: 'Problemas com tempos de resposta e indisponibilidade em produção.',
      status: 1,
    },
    {
      id: 7021,
      groupId: 700,
      label: 'TC2A',
      title: 'Testes de Carga - Consciente',
      details: 'Testes de carga são introduzidos no processo de desenvolvimento.',
      status: 0,
    },
    {
      id: 7022,
      groupId: 700,
      label: 'TC2B',
      title: 'Testes de Carga - Consciente',
      details: 'Automação dos testes de carga começa a ser experimentada.',
      status: 0,
    },
    {
      id: 7031,
      groupId: 700,
      label: 'TC3A',
      title: 'Testes de Carga - Gerenciado',
      details: 'Variações dos testes de carga como testes de performance, estresse e testes de maturidade começam a ser adotadas.',
      status: 0,
    },
    {
      id: 7032,
      groupId: 700,
      label: 'TC3B',
      title: 'Testes de Carga - Gerenciado',
      details: 'Problemas de indisponibilidade reduzidos em produção.',
      status: 0,
    },
    {
      id: 7041,
      groupId: 700,
      label: 'TC4A',
      title: 'Testes de Carga - Avançado',
      details: 'Testes de carga, estresse e maturidade incorporados aos processos de _builds_ e _releases_.',
      status: 0,
    },
    {
      id: 7042,
      groupId: 700,
      label: 'TC4B',
      title: 'Testes de Carga - Avançado',
      details: 'Planejamento de capacidade fornece diretrizes de provisionamento de ambiente em produção.',
      status: 0,
    },
    {
      id: 7051,
      groupId: 700,
      label: 'TC5A',
      title: 'Testes de Carga - Melhoria Contínua',
      details: 'Testes de carga fornecem políticas automatizadas de infraestrutura de código para responder a picos de utilização em ambientes de produção.',
      status: 0,
    },
    {
      id: 7052,
      groupId: 700,
      label: 'TC5B',
      title: 'Testes de Carga - Melhoria Contínua',
      details: 'Problemas de indisponibilidade são raros em produção.',
      status: 0,
    },
    {
      id: 8011,
      groupId: 800,
      label: 'MA1A',
      title: 'Monitoração de Aplicações - Inicial',
      details: 'Aplicações rodam sem supervisão no ambiente de produção.',
      status: 1,
    },
    {
      id: 8021,
      groupId: 800,
      label: 'MA2A',
      title: 'Monitoração de Aplicações - Consciente',
      details: 'Times de operação começam a incorporar ferramentas de monitoração de aplicações.',
      status: 0,
    },
    {
      id: 8022,
      groupId: 800,
      label: 'MA2B',
      title: 'Monitoração de Aplicações - Consciente',
      details: 'Aplicações monitoradas não geram _feedbacks_ acionáveis para times de desenvolvimento.',
      status: 1,
    },
    {
      id: 8031,
      groupId: 800,
      label: 'MA3A',
      title: 'Monitoração de Aplicações - Gerenciado',
      details: 'A monitoração de aplicações em produção opera de forma continuada.',
      status: 0,
    },
    {
      id: 8032,
      groupId: 800,
      label: 'MA3B',
      title: 'Monitoração de Aplicações - Gerenciado',
      details: 'Dados de disponibilidade, carga e performance são regularmente repassados para os times de desenvolvimento.',
      status: 0,
    },
    {
      id: 8041,
      groupId: 800,
      label: 'MA4A',
      title: 'Monitoração de Aplicações - Avançado',
      details: 'A monitoração de aplicações incorpora práticas de telemetria.',
      status: 0,
    },
    {
      id: 8042,
      groupId: 800,
      label: 'MA4B',
      title: 'Monitoração de Aplicações - Avançado',
      details: 'Experimentos com telemetria coletam dados de uso para gerar aprendizados de negócio para os times de desenvolvimento.',
      status: 0,
    },
    {
      id: 8051,
      groupId: 800,
      label: 'MA5A',
      title: 'Monitoração de Aplicações - Melhoria Contínua',
      details: 'Monitoração de uso integra o trabalho dos times de desenvolvimento, qualidade e operações.',
      status: 0,
    },
    {
      id: 8052,
      groupId: 800,
      label: 'MA5',
      title: 'Monitoração de Aplicações - Melhoria Contínua',
      details: 'Novos requisitos de negócio são guiados pelo uso da aplicação em produção.',
      status: 0,
    },
    {
      id: 8053,
      groupId: 800,
      label: 'MA5C',
      title: 'Monitoração de Aplicações - Melhoria Contínua',
      details: '_Feedbacks_ de monitoração plenamente acionáveis para os times',
      status: 0,
    },
  ],
  edges: [
    { id: 1, from: 1011, to: 1012 },
    { id: 2, from: 1012, to: 1021 },
    { id: 3, from: 1012, to: 1022 },
    { id: 4, from: 1021, to: 1023 },
    { id: 5, from: 1022, to: 1023 },
    { id: 6, from: 1021, to: 1031 },
    { id: 7, from: 1023, to: 1032 },
    { id: 8, from: 1032, to: 1033 },
    { id: 9, from: 1032, to: 1041 },
    { id: 10, from: 1032, to: 1042 },
    { id: 11, from: 1042, to: 1051 },
    { id: 12, from: 1042, to: 1052 },
    { id: 13, from: 1051, to: 1053 },
    { id: 14, from: 1052, to: 1053 },
    { id: 15, from: 2011, to: 2021 },
    { id: 16, from: 2012, to: 2021 },
    { id: 17, from: 1023, to: 2022 },
    { id: 18, from: 2021, to: 2022 },
    { id: 19, from: 2021, to: 2031 },
    { id: 20, from: 2022, to: 2032 },
    { id: 21, from: 2022, to: 2033 },
    { id: 22, from: 2031, to: 2041 },
    { id: 23, from: 2041, to: 2042 },
    { id: 24, from: 2022, to: 2042 },
    { id: 25, from: 2042, to: 2051 },
    { id: 26, from: 2051, to: 2052 },
    { id: 27, from: 2033, to: 2053 },
    { id: 28, from: 3011, to: 3013 },
    { id: 29, from: 3012, to: 3013 },
    { id: 30, from: 3013, to: 2021 },
    { id: 31, from: 3013, to: 3021 },
    { id: 32, from: 3021, to: 3022 },
    { id: 33, from: 3021, to: 1042 },
    { id: 34, from: 3022, to: 3031 },
    { id: 35, from: 3031, to: 3032 },
    { id: 36, from: 1042, to: 3031 },
    { id: 37, from: 3031, to: 3041 },
    { id: 38, from: 3041, to: 3042 },
    { id: 39, from: 3042, to: 3051 },
    { id: 40, from: 3041, to: 3052 },
    { id: 41, from: 1042, to: 3052 },
    { id: 42, from: 4011, to: 4021 },
    { id: 43, from: 4012, to: 4022 },
    { id: 44, from: 2021, to: 4021 },
    { id: 45, from: 2021, to: 4022 },
    { id: 46, from: 4021, to: 4031 },
    { id: 47, from: 4022, to: 4031 },
    { id: 48, from: 3021, to: 4031 },
    { id: 49, from: 4031, to: 4032 },
    { id: 50, from: 4021, to: 4041 },
    { id: 51, from: 4022, to: 4041 },
    { id: 52, from: 2041, to: 4041 },
    { id: 53, from: 4041, to: 4042 },
    { id: 54, from: 4032, to: 4051 },
    { id: 55, from: 4042, to: 4052 },
    { id: 56, from: 4051, to: 4053 },
    { id: 57, from: 3051, to: 4053 },
    { id: 58, from: 2051, to: 4053 },
    { id: 59, from: 5013, to: 5011 },
    { id: 60, from: 5011, to: 5012 },
    { id: 61, from: 5012, to: 5021 },
    { id: 62, from: 5021, to: 5022 },
    { id: 63, from: 5022, to: 5023 },
    { id: 64, from: 5023, to: 5031 },
    { id: 65, from: 5031, to: 5032 },
    { id: 66, from: 5032, to: 5033 },
    { id: 67, from: 5031, to: 3031 },
    { id: 68, from: 5031, to: 5041 },
    { id: 69, from: 5032, to: 5042 },
    { id: 70, from: 5033, to: 5042 },
    { id: 71, from: 5042, to: 5043 },
    { id: 72, from: 5043, to: 1053 },
    { id: 73, from: 5043, to: 5051 },
    { id: 74, from: 5051, to: 5052 },
    { id: 75, from: 5051, to: 5053 },
    { id: 76, from: 4042, to: 5053 },
    { id: 77, from: 4053, to: 5052 },
    { id: 78, from: 6011, to: 6012 },
    { id: 79, from: 6011, to: 6013 },
    { id: 80, from: 6013, to: 6021 },
    { id: 81, from: 6021, to: 6022 },
    { id: 82, from: 6022, to: 6023 },
    { id: 83, from: 6023, to: 3031 },
    { id: 84, from: 6022, to: 2032 },
    { id: 85, from: 6021, to: 6031 },
    { id: 86, from: 6022, to: 6032 },
    { id: 87, from: 6032, to: 6033 },
    { id: 89, from: 6031, to: 2032 },
    { id: 90, from: 6033, to: 4032 },
    { id: 91, from: 6031, to: 6041 },
    { id: 92, from: 6032, to: 6042 },
    { id: 93, from: 6033, to: 6043 },
    { id: 94, from: 6043, to: 6042 },
    { id: 95, from: 6043, to: 4032 },
    { id: 96, from: 6041, to: 6051 },
    { id: 97, from: 6043, to: 6052 },
    { id: 98, from: 4053, to: 6052 },
    { id: 99, from: 6052, to: 6053 },
    { id: 100, from: 7011, to: 7021 },
    { id: 101, from: 7012, to: 7021 },
    { id: 102, from: 7021, to: 7022 },
    { id: 103, from: 2021, to: 7022 },
    { id: 104, from: 7021, to: 1041 },
    { id: 105, from: 5031, to: 7022 },
    { id: 106, from: 7021, to: 7031 },
    { id: 107, from: 7012, to: 7032 },
    { id: 108, from: 7031, to: 7041 },
    { id: 109, from: 7041, to: 7042 },
    { id: 110, from: 3041, to: 7041 },
    { id: 111, from: 7042, to: 7051 },
    { id: 112, from: 7032, to: 7052 },
    { id: 113, from: 6052, to: 7051 },
    { id: 114, from: 8011, to: 8021 },
    { id: 115, from: 8022, to: 8021 },
    { id: 116, from: 8022, to: 8031 },
    { id: 117, from: 8031, to: 8032 },
    { id: 118, from: 2022, to: 8032 },
    { id: 119, from: 8031, to: 8041 },
    { id: 120, from: 8041, to: 8042 },
    { id: 121, from: 8032, to: 7041 },
    { id: 122, from: 8032, to: 8051 },
    { id: 123, from: 8042, to: 8052 },
    { id: 124, from: 8042, to: 8053 },
    { id: 125, from: 8021, to: 8031 },
  ],
};

export default devOpsGraph;
