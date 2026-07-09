# Coverage CSS Extractor

Esta ferramenta extrai o CSS crítico de um arquivo JSON de cobertura (Coverage) exportado pelo Google Chrome DevTools.

## Como usar

1.  Abra o **Google Chrome**.
2.  Abra o **DevTools** (F12 ou Ctrl+Shift+I).
3.  Abra a aba **Coverage** (se não estiver visível, pressione `Ctrl+Shift+P` e digite "Coverage").
4.  Clique no botão de recarregar para iniciar a captura da cobertura.
5.  Navegue pela página conforme necessário.
6.  Clique no ícone de exportar (seta para baixo) para salvar o arquivo JSON.
7.  Acesse esta ferramenta via GitHub Pages.
8.  Selecione o arquivo JSON exportado e clique em **Import**.
9.  Clique em **Convert** para extrair apenas o CSS que foi efetivamente utilizado.

## GitHub Pages

Este projeto está pronto para ser servido via GitHub Pages. Basta habilitar a funcionalidade nas configurações do repositório, apontando para a branch principal e o arquivo `index.html`.
