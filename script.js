/*
 * MAPA DO FLUXO OPERACIONAL
 * Os dados abaixo foram estruturados a partir da planilha
 * "Fluxograma Operação.xlsx".
 *
 * Para evoluir o mapa:
 * 1. Adicione ou edite objetos em "processos".
 * 2. Conecte os IDs em "conexoes".
 * 3. Ajuste "pos" somente se quiser mudar a posição visual.
 *
 * Campos vazios representam informações que não existiam na planilha.
 */

const processos = [
  {
    id: "carreta-chegou",
    nome: "Carreta chegou no galpão",
    categoria: "Entrada",
    tipo: "etapa",
    descricao: "Ponto inicial do fluxo operacional registrado na planilha.",
    responsavel: "",
    entrada: "",
    processamento: "Carreta chegou no galpão",
    saida: "",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 55, y: 165 },
  },
  {
    id: "conduzir-carreta",
    nome: "Conduzir carreta até a doca",
    categoria: "Entrada",
    tipo: "etapa",
    descricao: "A carreta é conduzida até a doca para iniciar os procedimentos da operação.",
    responsavel: "",
    entrada: "Carreta chegada ao galpão",
    processamento: "Conduzir carreta até a doca",
    saida: "",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 295, y: 165 },
  },
  {
    id: "procedimentos-seguranca",
    nome: "Realizar procedimentos de segurança",
    categoria: "Entrada",
    tipo: "etapa",
    descricao: "Execução dos procedimentos de segurança antes da conferência da carga.",
    responsavel: "",
    entrada: "Carreta na doca",
    processamento: "Realizar procedimentos de segurança",
    saida: "",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 535, y: 165 },
  },
  {
    id: "verificar-to",
    nome: "Verificar TO",
    categoria: "Entrada",
    tipo: "decisao",
    descricao: "Conferência da TO antes de seguir com o descarregamento da carga.",
    responsavel: "",
    entrada: "Carreta e TO",
    processamento: "Verificar TO",
    saida: "TO correta ou TO incorreta",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 775, y: 165 },
  },
  {
    id: "to-correta",
    nome: "TO correta",
    categoria: "Entrada",
    tipo: "decisao",
    descricao: "Caminho indicado na planilha quando a TO está correta.",
    responsavel: "",
    entrada: "Resultado da verificação de TO",
    processamento: "TO correta",
    saida: "Seguir para descarregamento",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 1015, y: 85 },
  },
  {
    id: "descarregar-carga",
    nome: "Seguir para descarregamento da carga",
    categoria: "Entrada",
    tipo: "etapa",
    descricao: "A carga segue para o descarregamento.",
    responsavel: "",
    entrada: "TO correta",
    processamento: "Seguir para descarregamento da carga",
    saida: "",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 1255, y: 85 },
  },
  {
    id: "to-incorreta",
    nome: "TO incorreta",
    categoria: "Entrada",
    tipo: "desvio",
    descricao: "Caminho indicado na planilha quando a TO não está correta.",
    responsavel: "",
    entrada: "Resultado da verificação de TO",
    processamento: "TO incorreta",
    saida: "Solicitar retirada da carreta da doca",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 1015, y: 275 },
  },
  {
    id: "retirar-carreta",
    nome: "Informar retirada da carreta da doca",
    categoria: "Entrada",
    tipo: "desvio",
    descricao: "O motorista deve ser informado para retirar a carreta da doca.",
    responsavel: "",
    entrada: "TO incorreta",
    processamento: "Informar ao motorista para retirar a carreta da doca",
    saida: "",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 1255, y: 275 },
  },
  {
    id: "bipar-tos",
    nome: "Bipar as TOs",
    categoria: "Processamento",
    tipo: "etapa",
    descricao: "Bipagem das TOs após o descarregamento da carga.",
    responsavel: "",
    entrada: "Carga descarregada",
    processamento: "Bipar as TOs",
    saida: "",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 1495, y: 85 },
  },
  {
    id: "segregar-gaylords",
    nome: "Segregar as Gaylords para processamento",
    categoria: "Processamento",
    tipo: "etapa",
    descricao: "As Gaylords são segregadas para o processamento.",
    responsavel: "",
    entrada: "TOs bipadas",
    processamento: "Segregar as Gaylords para o processamento",
    saida: "",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 1735, y: 85 },
  },
  {
    id: "tipo-pacote",
    nome: "Identificar tipo do pacote",
    categoria: "Processamento",
    tipo: "decisao",
    descricao: "A planilha separa o fluxo entre pacote volumoso e pacote normal.",
    responsavel: "",
    entrada: "Gaylords segregadas",
    processamento: "Identificar se o pacote é volumoso ou normal",
    saida: "Pacote volumoso ou pacote normal",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 1975, y: 85 },
  },
  {
    id: "pacote-volumoso",
    nome: "Pacote volumoso",
    categoria: "Processamento",
    tipo: "decisao",
    descricao: "Ramo identificado como SIM na planilha.",
    responsavel: "",
    entrada: "Identificação do tipo do pacote",
    processamento: "Pacote volumoso",
    saida: "Levar à área de pacotes volumosos",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 2215, y: 0 },
  },
  {
    id: "area-volumosos",
    nome: "Levar à área dos pacotes volumosos",
    categoria: "Processamento",
    tipo: "etapa",
    descricao: "Pacotes volumosos são levados até a área correspondente.",
    responsavel: "",
    entrada: "Pacote volumoso",
    processamento: "Levar até a área dos pacotes volumosos",
    saida: "Verificação de avaria e origem",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 2455, y: 0 },
  },
  {
    id: "pacote-normal",
    nome: "Pacote normal",
    categoria: "Processamento",
    tipo: "decisao",
    descricao: "Ramo identificado como NÃO na planilha.",
    responsavel: "",
    entrada: "Identificação do tipo do pacote",
    processamento: "Pacote normal",
    saida: "Levar pacotes para a ilha",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 2215, y: 170 },
  },
  {
    id: "levar-ilha",
    nome: "Levar pacotes para a ilha",
    categoria: "Processamento",
    tipo: "etapa",
    descricao: "Pacotes normais são levados para a ilha.",
    responsavel: "",
    entrada: "Pacote normal",
    processamento: "Levar pacotes para a ilha",
    saida: "Verificação de avaria e origem",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 2455, y: 170 },
  },
  {
    id: "verificar-avaria-origem",
    nome: "Verificação de avaria e origem",
    categoria: "Processamento",
    tipo: "decisao",
    descricao: "Verificação registrada para os ramos de pacote volumoso e pacote normal.",
    responsavel: "",
    entrada: "Pacote na área ou ilha",
    processamento: "Verificação de avaria e origem",
    saida: "Pacote não avariado ou pacote avariado",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "A etapa aparece na planilha associada aos ramos Pacote Volumoso e Pacote Normal.",
    critico: false,
    pos: { x: 2695, y: 85 },
  },
  {
    id: "pacote-nao-avariado",
    nome: "Pacote não avariado",
    categoria: "Processamento",
    tipo: "etapa",
    descricao: "Ramo de pacote não avariado identificado na planilha.",
    responsavel: "",
    entrada: "Resultado da verificação de avaria e origem",
    processamento: "Pacote não avariado",
    saida: "Verificação de etiqueta de hub correto",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "O mesmo caminho aparece repetido na planilha.",
    critico: false,
    pos: { x: 2935, y: 0 },
  },
  {
    id: "etiqueta-hub",
    nome: "Verificação de etiqueta de hub correto",
    categoria: "Processamento",
    tipo: "etapa",
    descricao: "Verificação da etiqueta para confirmar o hub correto.",
    responsavel: "",
    entrada: "Pacote não avariado",
    processamento: "Verificação de etiqueta de hub correto",
    saida: "Recebimento",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "A etapa aparece repetida na planilha em mais de um ponto do fluxo.",
    critico: false,
    pos: { x: 3175, y: 0 },
  },
  {
    id: "recebimento",
    nome: "Recebimento",
    categoria: "Processamento",
    tipo: "etapa",
    descricao: "Etapa de recebimento indicada após a conferência do hub.",
    responsavel: "",
    entrada: "Etiqueta de hub correto",
    processamento: "Recebimento",
    saida: "Etiquetagem",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "A etapa aparece repetida na planilha em mais de um ponto do fluxo.",
    critico: false,
    pos: { x: 3415, y: 0 },
  },
  {
    id: "etiquetagem",
    nome: "Etiquetagem",
    categoria: "Processamento",
    tipo: "etapa",
    descricao: "Etapa de etiquetagem do pacote.",
    responsavel: "",
    entrada: "Pacote recebido",
    processamento: "Etiquetagem",
    saida: "Colar etiqueta conforme a SOP",
    status: "",
    regras: "Colar etiqueta conforme a SOP",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "O grupo aparece explicitamente na planilha.",
    critico: false,
    pos: { x: 3655, y: 0 },
  },
  {
    id: "pacote-avariado",
    nome: "Pacote avariado",
    categoria: "Processamento",
    tipo: "desvio",
    descricao: "Ramo de pacote avariado identificado na planilha.",
    responsavel: "",
    entrada: "Resultado da verificação de avaria e origem",
    processamento: "Pacote avariado",
    saida: "Segregar para o inventário",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 2935, y: 210 },
  },
  {
    id: "segregar-inventario",
    nome: "Segregar para o inventário",
    categoria: "Inventário",
    tipo: "desvio",
    descricao: "Pacotes avariados são segregados para o inventário.",
    responsavel: "",
    entrada: "Pacote avariado",
    processamento: "Segregar para o inventário",
    saida: "",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 3175, y: 210 },
  },
  {
    id: "colar-etiqueta",
    nome: "Colar etiqueta conforme a SOP",
    categoria: "Etiquetagem",
    tipo: "etapa",
    descricao: "Colagem da etiqueta conforme a SOP.",
    responsavel: "",
    entrada: "Pacote na etiquetagem",
    processamento: "Colar etiqueta conforme a SOP",
    saida: "Separar pacote por letras",
    status: "",
    regras: "Conforme a SOP",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 3895, y: 0 },
  },
  {
    id: "separar-letras",
    nome: "Separar pacote por letras",
    categoria: "Etiquetagem",
    tipo: "etapa",
    descricao: "Separação do pacote por letras antes do sorting.",
    responsavel: "",
    entrada: "Pacote etiquetado",
    processamento: "Separar pacote por letras",
    saida: "Sorting",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 4135, y: 0 },
  },
  {
    id: "sorting",
    nome: "Sorting",
    categoria: "Sorting",
    tipo: "etapa",
    descricao: "Grupo operacional de sorting.",
    responsavel: "",
    entrada: "Pacote separado por letras",
    processamento: "Sorting",
    saida: "Colocar pacote na gaiola",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "O grupo aparece explicitamente na planilha.",
    critico: false,
    pos: { x: 4375, y: 0 },
  },
  {
    id: "colocar-gaiola",
    nome: "Colocar pacote na respectiva gaiola",
    categoria: "Sorting",
    tipo: "etapa",
    descricao: "O pacote é colocado na sua respectiva gaiola.",
    responsavel: "",
    entrada: "Pacote em sorting",
    processamento: "Colocar o pacote na sua respectiva gaiola",
    saida: "Expedição",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 4615, y: 0 },
  },
  {
    id: "expedicao",
    nome: "Expedição",
    categoria: "Expedição",
    tipo: "etapa",
    descricao: "Grupo operacional de expedição.",
    responsavel: "",
    entrada: "Pacote na gaiola",
    processamento: "Expedição",
    saida: "Solicitação de rota",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "O grupo aparece explicitamente na planilha.",
    critico: false,
    pos: { x: 4855, y: 0 },
  },
  {
    id: "solicitar-rota",
    nome: "Motorista solicita a rota",
    categoria: "Expedição",
    tipo: "etapa",
    descricao: "O motorista solicita a rota.",
    responsavel: "",
    entrada: "Pacote em expedição",
    processamento: "Motorista solicita a rota",
    saida: "Verificação no aplicativo do motorista",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 5095, y: 0 },
  },
  {
    id: "checar-app",
    nome: "Checar aplicativo do motorista",
    categoria: "Expedição",
    tipo: "etapa",
    descricao: "O auxiliar verifica no aplicativo se existe alguma ocorrência.",
    responsavel: "",
    entrada: "Rota solicitada",
    processamento: "Auxiliar checa o app do motorista para ver se não há ocorrência",
    saida: "Puxar gaiola para a mesa de conferência",
    status: "",
    regras: "",
    sistemas: ["Aplicativo do motorista"],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 5335, y: 0 },
  },
  {
    id: "puxar-gaiola",
    nome: "Puxar gaiola para conferência",
    categoria: "Expedição",
    tipo: "etapa",
    descricao: "O auxiliar puxa a gaiola até a mesa de conferência.",
    responsavel: "",
    entrada: "Gaiola e rota",
    processamento: "Auxiliar puxa a gaiola até a mesa de conferência",
    saida: "Bipagem dos pacotes",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 5575, y: 0 },
  },
  {
    id: "bipagem-cinco",
    nome: "Bipagem de 5 em 5 pacotes",
    categoria: "Expedição",
    tipo: "etapa",
    descricao: "A bipagem começa em grupos de cinco pacotes.",
    responsavel: "",
    entrada: "Pacotes na gaiola",
    processamento: "Começa a bipagem de 5 em 5 pacotes",
    saida: "Pacote validado ou ocorrência",
    status: "",
    regras: "Bipagem de 5 em 5 pacotes",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 5815, y: 0 },
  },
  {
    id: "pacote-ok",
    nome: "Pacote OK e verde na tela",
    categoria: "Expedição",
    tipo: "decisao",
    descricao: "Resultado visual da bipagem registrado na planilha.",
    responsavel: "",
    entrada: "Bipagem do pacote",
    processamento: "Pacote deu OK e verde na tela",
    saida: "Verificar se o pacote está avariado",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 6055, y: 0 },
  },
  {
    id: "verificar-avaria-expedicao",
    nome: "Pacote está avariado?",
    categoria: "Expedição",
    tipo: "decisao",
    descricao: "Ponto de decisão registrado para verificar avaria durante a expedição.",
    responsavel: "",
    entrada: "Pacote OK e verde na tela",
    processamento: "Pacote está avariado?",
    saida: "Sim ou não",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 6295, y: 0 },
  },
  {
    id: "smart-sorting",
    nome: "Separar para o SmartSorting",
    categoria: "Expedição",
    tipo: "desvio",
    descricao: "Encaminhamento identificado na planilha para o SmartSorting.",
    responsavel: "",
    entrada: "Ramo Sim da verificação de avaria",
    processamento: "Separar para o SmartSorting",
    saida: "Gaiola de erros de expedição",
    status: "",
    regras: "",
    sistemas: ["SmartSorting"],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 6535, y: -90 },
  },
  {
    id: "gaiola-erros",
    nome: "Colocar na gaiola de erros de expedição",
    categoria: "Expedição",
    tipo: "desvio",
    descricao: "Encaminhamento para a gaiola de erros de expedição.",
    responsavel: "",
    entrada: "Pacote separado para SmartSorting",
    processamento: "Colocar na gaiola de erros de expedição",
    saida: "Verificação de contagem",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 6775, y: -90 },
  },
  {
    id: "motorista-contou",
    nome: "Motorista contou todos os pacotes",
    categoria: "Expedição",
    tipo: "decisao",
    descricao: "A planilha registra uma decisão sobre a contagem de todos os pacotes.",
    responsavel: "",
    entrada: "Pacote em expedição",
    processamento: "Motorista contou todos os pacotes",
    saida: "Sim ou não",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 7015, y: 0 },
  },
  {
    id: "contagem-correta",
    nome: "Contagem bateu correta?",
    categoria: "Expedição",
    tipo: "decisao",
    descricao: "Verificação da exatidão da contagem.",
    responsavel: "",
    entrada: "Contagem do motorista",
    processamento: "Contagem bateu correta?",
    saida: "Sim ou não",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 7255, y: 0 },
  },
  {
    id: "motorista-subir-rota",
    nome: "Motorista irá subir a rota",
    categoria: "Expedição",
    tipo: "etapa",
    descricao: "Encaminhamento registrado para o motorista subir a rota.",
    responsavel: "",
    entrada: "Contagem correta",
    processamento: "Motorista irá subir a rota",
    saida: "",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 7495, y: -90 },
  },
  {
    id: "recontar-pacotes",
    nome: "Motorista terá que recontar",
    categoria: "Expedição",
    tipo: "desvio",
    descricao: "A planilha indica a necessidade de recontagem pelo motorista.",
    responsavel: "",
    entrada: "Contagem incorreta",
    processamento: "Motorista terá que recontar",
    saida: "Nova conferência",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 7495, y: 90 },
  },
  {
    id: "contou-errado-novamente",
    nome: "Motorista contou errado novamente",
    categoria: "Expedição",
    tipo: "desvio",
    descricao: "A planilha registra a repetição do erro de contagem.",
    responsavel: "",
    entrada: "Nova contagem",
    processamento: "Motorista contou errado novamente",
    saida: "Rebipar a rota",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 7735, y: 90 },
  },
  {
    id: "rebipar-rota",
    nome: "Auxiliar precisará rebipar a rota",
    categoria: "Expedição",
    tipo: "desvio",
    descricao: "O auxiliar precisa rebipar a rota.",
    responsavel: "",
    entrada: "Contagem errada novamente",
    processamento: "Auxiliar precisará rebipar a rota",
    saida: "",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 7975, y: 90 },
  },
  {
    id: "inventario-tratar",
    nome: "Separar para o time de inventário tratar",
    categoria: "Inventário",
    tipo: "desvio",
    descricao: "Pacotes são separados para tratamento pelo time de inventário.",
    responsavel: "",
    entrada: "Ramo não da contagem do motorista",
    processamento: "Separar para o time de inventário tratar",
    saida: "Verificar se o pacote tratado tem rota",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 7255, y: 210 },
  },
  {
    id: "pacote-tem-rota",
    nome: "Pacote tratado tem rota?",
    categoria: "Inventário",
    tipo: "decisao",
    descricao: "Verificação sobre a existência de uma rota para o pacote tratado.",
    responsavel: "",
    entrada: "Pacote tratado pelo inventário",
    processamento: "Pacote tratado tem alguma rota para colocar ele?",
    saida: "Sim ou não",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 7495, y: 210 },
  },
  {
    id: "inventario-com-rota",
    nome: "Inventário",
    categoria: "Inventário",
    tipo: "etapa",
    descricao: "Encaminhamento de inventário para o ramo Sim.",
    responsavel: "",
    entrada: "Pacote tratado com rota",
    processamento: "Inventário",
    saida: "",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 7735, y: 170 },
  },
  {
    id: "inventario-sem-rota",
    nome: "Inventário",
    categoria: "Inventário",
    tipo: "etapa",
    descricao: "Encaminhamento de inventário para o ramo Não.",
    responsavel: "",
    entrada: "Pacote tratado sem rota",
    processamento: "Inventário",
    saida: "",
    status: "",
    regras: "",
    sistemas: [],
    indicadores: [],
    ofensores: [],
    observacoes: "",
    critico: false,
    pos: { x: 7735, y: 260 },
  },
];

const conexoes = [
  ["carreta-chegou", "conduzir-carreta"],
  ["conduzir-carreta", "procedimentos-seguranca"],
  ["procedimentos-seguranca", "verificar-to"],
  ["verificar-to", "to-correta", "TO correta"],
  ["verificar-to", "to-incorreta", "TO incorreta"],
  ["to-correta", "descarregar-carga"],
  ["descarregar-carga", "bipar-tos"],
  ["bipar-tos", "segregar-gaylords"],
  ["segregar-gaylords", "tipo-pacote"],
  ["tipo-pacote", "pacote-volumoso", "SIM"],
  ["tipo-pacote", "pacote-normal", "NÃO"],
  ["pacote-volumoso", "area-volumosos"],
  ["area-volumosos", "verificar-avaria-origem"],
  ["pacote-normal", "levar-ilha"],
  ["levar-ilha", "verificar-avaria-origem"],
  ["verificar-avaria-origem", "pacote-nao-avariado", "Não avariado"],
  ["verificar-avaria-origem", "pacote-avariado", "Avariado"],
  ["pacote-nao-avariado", "etiqueta-hub"],
  ["etiqueta-hub", "recebimento"],
  ["recebimento", "etiquetagem"],
  ["etiquetagem", "colar-etiqueta"],
  ["colar-etiqueta", "separar-letras"],
  ["separar-letras", "sorting"],
  ["sorting", "colocar-gaiola"],
  ["colocar-gaiola", "expedicao"],
  ["expedicao", "solicitar-rota"],
  ["solicitar-rota", "checar-app"],
  ["checar-app", "puxar-gaiola"],
  ["puxar-gaiola", "bipagem-cinco"],
  ["bipagem-cinco", "pacote-ok"],
  ["pacote-ok", "verificar-avaria-expedicao"],
  ["verificar-avaria-expedicao", "smart-sorting", "Sim"],
  ["smart-sorting", "gaiola-erros"],
  ["gaiola-erros", "motorista-contou"],
  ["verificar-avaria-expedicao", "motorista-contou", "Não"],
  ["motorista-contou", "contagem-correta", "Sim"],
  ["motorista-contou", "inventario-tratar", "Não"],
  ["contagem-correta", "motorista-subir-rota", "Sim"],
  ["contagem-correta", "recontar-pacotes", "Não"],
  ["recontar-pacotes", "contou-errado-novamente"],
  ["contou-errado-novamente", "rebipar-rota"],
  ["inventario-tratar", "pacote-tem-rota"],
  ["pacote-tem-rota", "inventario-com-rota", "Sim"],
  ["pacote-tem-rota", "inventario-sem-rota", "Não"],
];

const grupos = [
  { id: "entrada", nome: "Entrada", caption: "Chegada e validação inicial", color: "#20a6bd", x: 28, y: 26, w: 1245, h: 250 },
  { id: "processamento", nome: "Processamento", caption: "Triagem e preparação da carga", color: "#7d8ad6", x: 28, y: 305, w: 2240, h: 245 },
  { id: "sorting", nome: "Sorting", caption: "Classificação e alocação", color: "#40a17b", x: 28, y: 625, w: 820, h: 250 },
  { id: "expedicao", nome: "Expedição", caption: "Conferência, rota e saída", color: "#df9344", x: 840, y: 625, w: 2800, h: 285 },
  { id: "inventario", nome: "Inventário", caption: "Tratamentos e desvios", color: "#d96565", x: 2425, y: 945, w: 600, h: 220 },
];

/*
 * A sequência abaixo é usada pelo botão "Executar fluxo".
 * Ela segue o caminho principal e inclui os desvios em seguida para que
 * o usuário consiga visualizar todos os pontos cadastrados.
 */
const ordemExecucao = [
  "carreta-chegou",
  "conduzir-carreta",
  "procedimentos-seguranca",
  "verificar-to",
  "to-correta",
  "descarregar-carga",
  "bipar-tos",
  "segregar-gaylords",
  "tipo-pacote",
  "pacote-normal",
  "levar-ilha",
  "verificar-avaria-origem",
  "pacote-nao-avariado",
  "etiqueta-hub",
  "recebimento",
  "etiquetagem",
  "colar-etiqueta",
  "separar-letras",
  "sorting",
  "colocar-gaiola",
  "expedicao",
  "solicitar-rota",
  "checar-app",
  "puxar-gaiola",
  "bipagem-cinco",
  "pacote-ok",
  "verificar-avaria-expedicao",
  "motorista-contou",
  "contagem-correta",
  "motorista-subir-rota",
  "recontar-pacotes",
  "contou-errado-novamente",
  "rebipar-rota",
  "inventario-tratar",
  "pacote-tem-rota",
  "inventario-com-rota",
  "inventario-sem-rota",
  "pacote-volumoso",
  "area-volumosos",
  "pacote-avariado",
  "segregar-inventario",
  "to-incorreta",
  "retirar-carreta",
  "smart-sorting",
  "gaiola-erros",
];

const state = {
  selectedId: null,
  searchTerm: "",
  scale: 0.42,
  baseScale: 0.42,
  panX: 0,
  panY: 0,
  isDragging: false,
  dragStartX: 0,
  dragStartY: 0,
  startPanX: 0,
  startPanY: 0,
  runTimer: null,
  runIndex: -1,
  isPaused: false,
};

const processById = new Map(processos.map((processo) => [processo.id, processo]));
const nodeLayer = document.querySelector("#node-layer");
const groupLayer = document.querySelector("#group-layer");
const connectorLayer = document.querySelector("#connector-layer");
const stage = document.querySelector("#flow-stage");
const world = document.querySelector("#stage-world");
const detailsPanel = document.querySelector("#details-panel");
const searchInput = document.querySelector("#search-input");

/*
 * A planilha é naturalmente larga, mas uma faixa única ficaria difícil
 * de ler. Esta camada apenas reorganiza visualmente os mesmos dados em
 * faixas de operação; não altera nomes, textos nem conexões.
 */
const layoutPositions = {
  "carreta-chegou": { x: 40, y: 100 },
  "conduzir-carreta": { x: 260, y: 100 },
  "procedimentos-seguranca": { x: 480, y: 100 },
  "verificar-to": { x: 700, y: 100 },
  "to-correta": { x: 920, y: 40 },
  "descarregar-carga": { x: 1140, y: 40 },
  "to-incorreta": { x: 920, y: 160 },
  "retirar-carreta": { x: 1140, y: 160 },
  "bipar-tos": { x: 40, y: 380 },
  "segregar-gaylords": { x: 260, y: 380 },
  "tipo-pacote": { x: 480, y: 380 },
  "pacote-volumoso": { x: 700, y: 320 },
  "area-volumosos": { x: 920, y: 320 },
  "pacote-normal": { x: 700, y: 440 },
  "levar-ilha": { x: 920, y: 440 },
  "verificar-avaria-origem": { x: 1140, y: 380 },
  "pacote-nao-avariado": { x: 1360, y: 320 },
  "etiqueta-hub": { x: 1580, y: 320 },
  recebimento: { x: 1800, y: 320 },
  etiquetagem: { x: 2020, y: 320 },
  "pacote-avariado": { x: 1360, y: 440 },
  "segregar-inventario": { x: 1580, y: 440 },
  "colar-etiqueta": { x: 40, y: 700 },
  "separar-letras": { x: 260, y: 700 },
  sorting: { x: 480, y: 700 },
  "colocar-gaiola": { x: 700, y: 700 },
  expedicao: { x: 920, y: 640 },
  "solicitar-rota": { x: 1140, y: 640 },
  "checar-app": { x: 1360, y: 640 },
  "puxar-gaiola": { x: 1580, y: 640 },
  "bipagem-cinco": { x: 1800, y: 640 },
  "pacote-ok": { x: 2020, y: 640 },
  "verificar-avaria-expedicao": { x: 2240, y: 640 },
  "smart-sorting": { x: 2460, y: 540 },
  "gaiola-erros": { x: 2680, y: 540 },
  "motorista-contou": { x: 2460, y: 760 },
  "contagem-correta": { x: 2680, y: 760 },
  "motorista-subir-rota": { x: 2900, y: 700 },
  "recontar-pacotes": { x: 2900, y: 820 },
  "contou-errado-novamente": { x: 3120, y: 820 },
  "rebipar-rota": { x: 3340, y: 820 },
  "inventario-tratar": { x: 2460, y: 970 },
  "pacote-tem-rota": { x: 2680, y: 970 },
  "inventario-com-rota": { x: 2900, y: 930 },
  "inventario-sem-rota": { x: 2900, y: 1040 },
};

processos.forEach((processo) => {
  if (layoutPositions[processo.id]) processo.pos = layoutPositions[processo.id];
});

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatNumber(value) {
  return new Intl.NumberFormat("pt-BR").format(value);
}

function getSearchableText(processo) {
  return [
    processo.nome,
    processo.categoria,
    processo.tipo,
    processo.descricao,
    processo.responsavel,
    processo.entrada,
    processo.processamento,
    processo.saida,
    processo.status,
    processo.regras,
    ...(processo.sistemas || []),
    ...(processo.indicadores || []),
    ...(processo.ofensores || []),
    processo.observacoes,
  ]
    .filter(Boolean)
    .join(" ")
    .toLocaleLowerCase("pt-BR");
}

function getSearchMatches() {
  const term = state.searchTerm.trim().toLocaleLowerCase("pt-BR");
  if (!term) return new Set();
  return new Set(processos.filter((processo) => getSearchableText(processo).includes(term)).map((processo) => processo.id));
}

function renderOverview() {
  const indicators = new Set(processos.flatMap((processo) => processo.indicadores || []).filter(Boolean));
  const categories = new Set(processos.map((processo) => processo.categoria).filter(Boolean));
  const critical = processos.filter((processo) => processo.critico === true).length;

  document.querySelector("#metric-total").textContent = formatNumber(processos.length);
  document.querySelector("#metric-critical").textContent = formatNumber(critical);
  document.querySelector("#metric-processes").textContent = formatNumber(categories.size);
  document.querySelector("#metric-indicators").textContent = formatNumber(indicators.size);
  document.querySelector("#metric-updated").textContent = "Não informada";
}

function renderGroups() {
  groupLayer.innerHTML = grupos
    .map(
      (grupo) => `
        <div class="flow-group" style="left:${grupo.x}px;top:${grupo.y}px;width:${grupo.w}px;height:${grupo.h}px;--group-color:${grupo.color}">
          <div class="group-label">${escapeHtml(grupo.nome)}</div>
          <p class="group-caption">${escapeHtml(grupo.caption)}</p>
        </div>
      `,
    )
    .join("");
}

function renderNodes() {
  const matches = getSearchMatches();
  const hasSearch = Boolean(state.searchTerm.trim());

  nodeLayer.innerHTML = processos
    .map((processo, index) => {
      const classes = [
        "node-card",
        processo.tipo === "decisao" ? "is-decision" : "",
        processo.tipo === "desvio" ? "is-alert" : "",
        state.selectedId === processo.id ? "is-selected" : "",
        matches.has(processo.id) ? "is-match" : "",
        hasSearch && !matches.has(processo.id) ? "is-muted" : "",
        processo.id === ordemExecucao[state.runIndex] ? "is-active" : "",
      ]
        .filter(Boolean)
        .join(" ");
      const indexLabel = String(index + 1).padStart(2, "0");
      const summary = processo.saida || processo.descricao || "";

      return `
        <button class="${classes}" data-node-id="${escapeHtml(processo.id)}" style="left:${processo.pos.x}px;top:${processo.pos.y}px" type="button" aria-label="Abrir detalhes: ${escapeHtml(processo.nome)}">
          <span class="node-topline">
            <span class="node-index">${indexLabel}</span>
            <span class="node-kind">${escapeHtml(processo.tipo)}</span>
          </span>
          <h3>${escapeHtml(processo.nome)}</h3>
          <p class="node-summary">${escapeHtml(summary)}</p>
        </button>
      `;
    })
    .join("");

  nodeLayer.querySelectorAll("[data-node-id]").forEach((node) => {
    node.addEventListener("click", () => selectProcess(node.dataset.nodeId));
  });

  const visibleCount = hasSearch ? matches.size : processos.length;
  document.querySelector("#result-count").textContent = hasSearch
    ? `${formatNumber(visibleCount)} ${visibleCount === 1 ? "resultado" : "resultados"} encontrados`
    : "Fluxo completo";
  document.querySelector("#empty-search-state").hidden = !hasSearch || matches.size > 0;
}

function createSvgElement(name, attributes = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function renderConnectors() {
  connectorLayer.innerHTML = `
    <defs>
      <marker id="arrow" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,7 L8,3.5 z" fill="#aabec9"></path>
      </marker>
    </defs>
  `;

  conexoes.forEach(([fromId, toId, label]) => {
    const from = processById.get(fromId);
    const to = processById.get(toId);
    if (!from || !to) return;

    const startX = from.pos.x + 190;
    const startY = from.pos.y + 36;
    const endX = to.pos.x;
    const endY = to.pos.y + 36;
    const distance = Math.max(35, Math.abs(endX - startX) * 0.45);
    const direction = endX >= startX ? 1 : -1;
    const controlX1 = startX + distance * direction;
    const controlX2 = endX - distance * direction;
    const path = createSvgElement("path", {
      class: "connector",
      "data-connection": `${fromId}|${toId}`,
      d: `M ${startX} ${startY} C ${controlX1} ${startY}, ${controlX2} ${endY}, ${endX} ${endY}`,
    });
    connectorLayer.appendChild(path);

    if (label) {
      const text = createSvgElement("text", {
        class: "connector-label",
        x: (startX + endX) / 2,
        y: (startY + endY) / 2 - 8,
        "text-anchor": "middle",
      });
      text.textContent = label;
      connectorLayer.appendChild(text);
    }
  });
  updateConnectorState();
}

function getRelatedIds() {
  if (!state.selectedId) return new Set();
  const related = new Set([state.selectedId]);
  conexoes.forEach(([fromId, toId]) => {
    if (fromId === state.selectedId) related.add(toId);
    if (toId === state.selectedId) related.add(fromId);
  });
  return related;
}

function updateConnectorState() {
  const related = getRelatedIds();
  const matches = getSearchMatches();
  const hasSearch = Boolean(state.searchTerm.trim());
  const activeId = ordemExecucao[state.runIndex];

  connectorLayer.querySelectorAll(".connector").forEach((connector) => {
    const [fromId, toId] = connector.dataset.connection.split("|");
    const isRelated = related.has(fromId) && related.has(toId);
    const isActive = activeId && fromId === activeId;
    const isSearchRelated =
      hasSearch && (matches.has(fromId) || matches.has(toId));

    connector.classList.toggle("is-related", isRelated || isSearchRelated);
    connector.classList.toggle("is-active", Boolean(isActive));
    connector.classList.toggle("is-muted", hasSearch && !isSearchRelated);
  });
}

function renderFlow() {
  renderGroups();
  renderConnectors();
  renderNodes();
  updateWorldTransform();
}

function updateWorldTransform() {
  world.style.transform = `translate(calc(-50% + ${state.panX}px), calc(-50% + ${state.panY}px)) scale(${state.scale})`;
  document.querySelector("#zoom-level").textContent = `${Math.round((state.scale / state.baseScale) * 100)}%`;
}

function selectProcess(id) {
  const processo = processById.get(id);
  if (!processo) return;
  state.selectedId = id;
  renderNodes();
  updateConnectorState();
  renderDetails(processo);
  detailsPanel.classList.add("is-open");
  detailsPanel.setAttribute("aria-hidden", "false");
}

function renderField(label, value) {
  const isList = Array.isArray(value);
  const hasValue = isList ? value.length > 0 : Boolean(value);
  const content = isList
    ? hasValue
      ? `<ul class="detail-list">${value.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
      : `<span class="detail-field-value is-empty">Não informado na planilha</span>`
    : hasValue
      ? `<span class="detail-field-value">${escapeHtml(value)}</span>`
      : `<span class="detail-field-value is-empty">Não informado na planilha</span>`;

  return `
    <div class="detail-field">
      <span class="detail-field-label">${escapeHtml(label)}</span>
      ${content}
    </div>
  `;
}

function renderDetails(processo) {
  const index = processos.findIndex((item) => item.id === processo.id) + 1;
  document.querySelector("#details-category").textContent = processo.categoria.toUpperCase();
  document.querySelector("#details-title").textContent = processo.nome;
  document.querySelector("#details-number").textContent = String(index).padStart(2, "0");
  document.querySelector("#details-type").textContent = processo.tipo;

  const status = document.querySelector("#details-status");
  status.hidden = !processo.status;
  status.textContent = processo.status || "";

  document.querySelector("#details-description").textContent = processo.descricao || "";
  document.querySelector("#detail-grid").innerHTML = [
    ["Objetivo", processo.objetivo],
    ["Descrição do processo", processo.processamento],
    ["Responsável", processo.responsavel],
    ["Entrada", processo.entrada],
    ["Processamento", processo.processamento],
    ["Saída", processo.saida],
    ["Status", processo.status],
    ["Regras", processo.regras],
    ["Sistemas envolvidos", processo.sistemas],
    ["Indicadores relacionados", processo.indicadores],
    ["Possíveis ofensores", processo.ofensores],
    ["Observações", processo.observacoes],
  ]
    // Mantém todos os campos previstos no painel, inclusive os vazios,
    // para facilitar o preenchimento futuro dos dados.
    .map(([label, value]) => renderField(label, value))
    .join("");

  const currentIndex = ordemExecucao.indexOf(processo.id);
  const nextId = ordemExecucao[currentIndex + 1];
  const nextPanel = document.querySelector("#panel-next");
  const nextButton = document.querySelector("#next-step-button");
  nextPanel.hidden = !nextId;
  if (nextId) {
    nextButton.textContent = `Ir para ${processById.get(nextId).nome} →`;
    nextButton.onclick = () => selectProcess(nextId);
  }
}

function closeDetails() {
  detailsPanel.classList.remove("is-open");
  detailsPanel.setAttribute("aria-hidden", "true");
  state.selectedId = null;
  renderNodes();
  updateConnectorState();
}

function setFlowStatus(label, isRunning = false) {
  document.querySelector("#flow-status-label").textContent = label;
  document.querySelector(".flow-status").classList.toggle("is-running", isRunning);
}

function stopFlow(clearActive = true) {
  window.clearTimeout(state.runTimer);
  state.runTimer = null;
  state.isPaused = false;
  if (clearActive) {
    state.runIndex = -1;
    renderNodes();
    updateConnectorState();
  }
}

function scheduleNextStep() {
  window.clearTimeout(state.runTimer);
  state.runTimer = window.setTimeout(() => {
    if (state.isPaused) return;
    if (state.runIndex >= ordemExecucao.length - 1) {
      setFlowStatus("Fluxo concluído", false);
      state.runTimer = null;
      return;
    }
    state.runIndex += 1;
    const currentId = ordemExecucao[state.runIndex];
    renderNodes();
    updateConnectorState();
    setFlowStatus(`Executando: ${processById.get(currentId).nome}`, true);
    scheduleNextStep();
  }, 1900);
}

function startFlow() {
  stopFlow(false);
  state.runIndex = 0;
  state.isPaused = false;
  renderNodes();
  updateConnectorState();
  setFlowStatus(`Executando: ${processById.get(ordemExecucao[0]).nome}`, true);
  scheduleNextStep();
}

function pauseFlow() {
  if (state.runIndex < 0 || !state.runTimer) return;
  state.isPaused = true;
  window.clearTimeout(state.runTimer);
  state.runTimer = null;
  setFlowStatus("Fluxo pausado", false);
}

function resumeFlow() {
  if (state.runIndex < 0 || !state.isPaused) return;
  state.isPaused = false;
  setFlowStatus(`Executando: ${processById.get(ordemExecucao[state.runIndex]).nome}`, true);
  scheduleNextStep();
}

function restartFlow() {
  stopFlow(true);
  setFlowStatus("Fluxo em espera", false);
}

function setZoom(nextScale, focusX = stage.clientWidth / 2, focusY = stage.clientHeight / 2) {
  const min = 0.38;
  const max = 1.18;
  const previousScale = state.scale;
  state.scale = Math.min(max, Math.max(min, nextScale));
  const ratio = state.scale / previousScale;
  state.panX = focusX - (focusX - state.panX) * ratio;
  state.panY = focusY - (focusY - state.panY) * ratio;
  updateWorldTransform();
}

function resetView() {
  state.baseScale = Math.min((stage.clientWidth - 24) / 3600, (stage.clientHeight - 24) / 1200);
  state.scale = state.baseScale;
  state.panX = 0;
  state.panY = 0;
  updateWorldTransform();
}

function bindInteractions() {
  searchInput.addEventListener("input", (event) => {
    state.searchTerm = event.target.value;
    renderNodes();
    updateConnectorState();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== searchInput) {
      event.preventDefault();
      searchInput.focus();
    }
    if (event.key === "Escape") {
      if (detailsPanel.classList.contains("is-open")) closeDetails();
      if (document.querySelector("#help-dialog").open) document.querySelector("#help-dialog").close();
    }
  });

  document.querySelector("#close-panel").addEventListener("click", closeDetails);
  document.querySelector("#panel-backdrop").addEventListener("click", closeDetails);
  document.querySelector("#run-flow-button").addEventListener("click", startFlow);
  document.querySelector("#pause-flow-button").addEventListener("click", pauseFlow);
  document.querySelector("#resume-flow-button").addEventListener("click", resumeFlow);
  document.querySelector("#restart-flow-button").addEventListener("click", restartFlow);
  document.querySelector("#zoom-in").addEventListener("click", () => setZoom(state.scale + 0.1));
  document.querySelector("#zoom-out").addEventListener("click", () => setZoom(state.scale - 0.1));
  document.querySelector("#home-view").addEventListener("click", resetView);

  const helpDialog = document.querySelector("#help-dialog");
  document.querySelector("#help-button").addEventListener("click", () => helpDialog.showModal());
  document.querySelector("#close-help").addEventListener("click", () => helpDialog.close());
  document.querySelector("#help-understood").addEventListener("click", () => helpDialog.close());

  stage.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      const rect = stage.getBoundingClientRect();
      const focusX = event.clientX - rect.left - rect.width / 2;
      const focusY = event.clientY - rect.top - rect.height / 2;
      setZoom(state.scale + (event.deltaY < 0 ? 0.06 : -0.06), focusX, focusY);
    },
    { passive: false },
  );

  stage.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".node-card, .zoom-controls")) return;
    state.isDragging = true;
    state.dragStartX = event.clientX;
    state.dragStartY = event.clientY;
    state.startPanX = state.panX;
    state.startPanY = state.panY;
    stage.setPointerCapture(event.pointerId);
    stage.classList.add("is-dragging");
  });

  stage.addEventListener("pointermove", (event) => {
    if (!state.isDragging) return;
    state.panX = state.startPanX + event.clientX - state.dragStartX;
    state.panY = state.startPanY + event.clientY - state.dragStartY;
    updateWorldTransform();
  });

  const releasePointer = (event) => {
    if (!state.isDragging) return;
    state.isDragging = false;
    stage.classList.remove("is-dragging");
    if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
  };
  stage.addEventListener("pointerup", releasePointer);
  stage.addEventListener("pointercancel", releasePointer);
}

renderOverview();
renderFlow();
resetView();
bindInteractions();