# Chá de Casa Nova - Julia & Kaique 🏠❤️

Bem-vindo ao repositório do site do Chá de Casa Nova! Este projeto é um convite digital interativo, com lista de presentes, confirmação de presença (RSVP) e integração real com Google Sheets.

## ✨ Funcionalidades

- **Home**: Design elegante com contagem regressiva e música de fundo.
- **Detalhes**: Informações sobre data, hora e local (com links diretos para Waze e Google Maps).
- **Lista de Presentes**: Link externo para a lista de presentes e botão para copiar link.
- **RSVP (Confirmação)**: 
    - Formulário dinâmico para adicionar acompanhantes.
    - **Contador em Tempo Real**: Mostra quantos convidados já confirmaram (integrado com Google Sheets).
    - Banner e tela de sucesso personalizados.
- **Fale Conosco**: Botão direto para WhatsApp e mapa de localização.
- **PWA (Progressive Web App)**: Pode ser instalado no celular como um aplicativo.
- **Responsividade**: Layout adaptado para celular, tablet e desktop.

## 🛠️ Tecnologias

- **Frontend**: React, TypeScript, Vite
- **Estilização**: Tailwind CSS
- **Ícones**: Google Material Symbols
- **Backend/Dados**: Google Sheets + Google Apps Script
- **PWA**: vite-plugin-pwa

## 🚀 Como Rodar o Projeto

1.  **Instale as dependências**:
    ```bash
    npm install
    ```

2.  **Rode o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```
    O site estará disponível em `http://localhost:3000`.

3.  **Build para Produção**:
    ```bash
    npm run build
    ```

## 📊 Integração com Google Sheets (RSVP)

Para que o formulário de RSVP e o contador funcionem, você precisa configurar o **Google Apps Script**.

1.  Crie uma nova planilha no Google Sheets.
2.  Vá em **Extensões** > **Apps Script**.
3.  Cole o seguinte código no editor:

    ```javascript
    // POST: Recebe os dados do formulário
    function doPost(e) {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      var data = JSON.parse(e.postData.contents);
      
      sheet.appendRow([
        new Date(),               // Data
        data.name,                // Nome
        data.phone,               // Telefone
        data.total_guests,        // Total Pessoas (Importante para o contador)
        data.guests,              // Nomes dos Acompanhantes
        data.notes                // Observações
      ]);
      
      return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // GET: Retorna o total de confirmados
    function doGet(e) {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      var data = sheet.getDataRange().getValues();
      var totalGuests = 0;
      
      // Assume que a coluna D (índice 3) tem o número total de convidados
      // Começa do 1 para pular o cabeçalho
      for (var i = 1; i < data.length; i++) {
        var row = data[i];
        var guests = parseInt(row[3]) || 0; 
        totalGuests += guests;
      }
      
      return ContentService.createTextOutput(JSON.stringify({ 'count': totalGuests }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    ```

4.  Clique em **Implantar** > **Nova implantação**.
5.  Selecione tipo **App da Web**.
6.  Configure:
    - **Executar como**: "Eu" (Me)
    - **Quem tem acesso**: "Qualquer pessoa" (Anyone)
7.  Deploy e copie a **URL**.
8.  No arquivo `pages/RSVP.tsx`, atualize a constante `GOOGLE_SCRIPT_URL` com a URL gerada.

## 📱 PWA

O projeto está configurado como PWA. Isso significa que ao acessar pelo celular, o navegador oferecerá a opção "Adicionar à Tela Inicial", instalando o site como um app com ícone personalizado.

---
Feito com ❤️ para Julia & Kaique.
