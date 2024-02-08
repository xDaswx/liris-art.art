
<div style="display:flex;justify-content:center"><img src="https://github.com/xDaswx/liris-art.art/blob/backend/liris.jpg?raw=true" style="border-radius:30px" height=25 >
<a style="margin-left:5px" href="https://liris-art.art/">Liris-art</a>
<br> </div>

## Liris-Art 

Este projeto é um portfólio para a Liris, isso exibe seus desenhos, vídeos e covers em um único lugar. 
O site inclui uma página inicial onde são apresentados os destaques do portfólio como artes pixel art em um canvas e locais específicos para visualizar os desenhos e vídeos.

## Tecnologias Utilizadas

- **Frontend**:
  - Nginx foi utilizado para servir os arquivos estáticos do frontend configurado no host.
  - Canvas foi empregado para renderizar os desenhos pixel art de forma interativa.
  - Integração com o Google Cloud para exibir vídeos hospedados no YouTube.
  - JavaScript foi utilizado para criar interatividade e dinamismo nas páginas.

- **Backend**:
  - Node.js com Express foi utilizado para desenvolver o servidor backend.
  - MySQL foi o banco de dados escolhido para armazenar e gerenciar os dados do site.
  - API endpoints: `/drawings` para acessar os desenhos e `/ping` para testar a conexão com o servidor.

- **phpMyAdmin**:
  - Interface phpMyAdmin para gerenciar o banco de dados MySQL.

## Configuração e Execução Local

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/xDaswx/liris-art.art.git
   cd liris-art
   ```

2. **Verificar index.html na web**:

4. **Executar o Backend**:
    ps => defina as variáveis de ambiente necessárias para conectar ao banco de dados MySQL e outras configurações específicas
    e algumas alterações são necessárias.
   ```bash
   git clone -b backend https://github.com/xDaswx/liris-art.art.git
   cd api
   npm i
   npm run start
   ```

## Endpoints da API (https://api.liris-art.art)

- **Desenhos**:
  - `GET /drawings`: Retorna todos os desenhos da cliente.

- **Ping**:
  - `GET /ping`: Retorna um status "pong" para verificar a disponibilidade do servidor.

## Acesso

- **Homepage**: [https://liris-art.art/](https://liris-art.art/)
- **Desenhos**: [https://api.liris-art.art/drawings](https://api.liris-art.art/drawings)
- **Pong**: [https://api.liris-art.art/ping](https://api.liris-art.art/ping)

---