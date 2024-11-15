# Sorteio do "Amigo Oculto" no WhatsApp

Este projeto foi criado para facilitar o sorteio do "Amigo Oculto" no grupo de WhatsApp da minha família. Algumas decisões de código foram feitas rapidamente, com foco no uso temporário, então há partes que podem ser melhoradas.

## Instruções

1. **Instale as dependências**  
   Rode o comando abaixo na raiz do projeto:  
   ```bash
   npm install
   ```

2. **Inicie o bot**  
   Inicie o bot com o seguinte comando:  
   ```bash
   node main.js
   ```

3. **Conecte o WhatsApp**  
   Escaneie o QR Code que será exibido para conectar o número do WhatsApp que será usado para o sorteio.  
   **Atenção**: este número não participará do sorteio; ele será apenas o "administrador" do processo.

4. **Adicione o bot ao grupo**  
   Adicione o número conectado ao grupo onde o sorteio será realizado.

5. **Inicie o sorteio**  
   Envie a mensagem abaixo no grupo para começar o sorteio:  
   ```
   \sortear
   ```

6. **Remova o bot após o sorteio**  
   Quando o sorteio terminar, remova o bot do grupo para evitar que outros membros enviem o comando novamente.

---

**Nota**: Este projeto é temporário e serve apenas para uso em pequenos grupos. Sinta-se à vontade para adaptá-lo conforme necessário.
