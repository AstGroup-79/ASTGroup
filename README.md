# AST Group — Loja Online

Projeto de loja online responsiva para publicação gratuita no Render.

## Estrutura

- `server.js` — servidor Node/Express
- `package.json` — dependências e comando de inicialização
- `public/index.html` — página principal
- `public/style.css` — estilos
- `public/script.js` — carrinho e interações
- `render.yaml` — configuração opcional do Render

## Publicar no GitHub

1. Crie um repositório chamado `astgroup`.
2. Envie todos os arquivos deste pacote para o repositório.
3. No Render, crie um novo Web Service.
4. Conecte o repositório `astgroup`.
5. Build Command: `npm install`
6. Start Command: `npm start`
7. O Render fornecerá um endereço `.onrender.com`.

## Observação

O endereço exato `astgroup.onrender.com` depende da disponibilidade do subdomínio no Render. Caso esteja disponível, selecione esse nome nas configurações do serviço.

## Pagamentos

O projeto está preparado para receber uma futura integração de pagamento. Chaves secretas nunca devem ser colocadas no HTML ou JavaScript público; devem ser configuradas como variáveis de ambiente no Render.
