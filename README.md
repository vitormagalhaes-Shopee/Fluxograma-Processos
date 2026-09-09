# Mapa interativo do fluxo operacional

Arquivos estáticos para publicar diretamente no GitHub Pages:

- `index.html` — estrutura da página e do painel de detalhes.
- `style.css` — aparência, responsividade, cards, conexões e animações.
- `script.js` — dados do fluxo, busca, zoom, arraste, seleção e execução automática.

## Como publicar

1. Crie ou abra um repositório no GitHub.
2. Coloque os três arquivos na mesma pasta, preferencialmente na raiz do repositório.
3. Faça o commit.
4. Em **Settings > Pages**, escolha a branch e a pasta publicadora.
5. Abra a URL gerada pelo GitHub Pages.

Não é necessário instalar nada nem configurar backend.

## Como atualizar o processo

Edite apenas o início do `script.js`:

- `processos`: conteúdo de cada etapa.
- `conexoes`: relação entre etapas e textos dos ramos.
- `ordemExecucao`: ordem percorrida pelo botão **Executar fluxo**.

Os campos que não estavam preenchidos na planilha foram deixados vazios e aparecem no painel como “Não informado na planilha”.

## Estrutura identificada na planilha

O fluxo foi organizado nos seguintes grupos:

1. Entrada: chegada da carreta, doca, segurança e conferência da TO.
2. Processamento: descarregamento, bipagem, Gaylords, tipo de pacote, avaria/origem e etiquetagem.
3. Sorting: separação por letras e alocação em gaiola.
4. Expedição: solicitação de rota, conferência no aplicativo, bipagem e tratamento de ocorrências.
5. Inventário: pacotes avariados ou encaminhados para tratamento.