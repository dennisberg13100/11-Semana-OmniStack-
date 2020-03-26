# 11-Semana-OmniStack-
Decimaprimeira semana OmniStack da Rocketseat

1- Primeiro dia

Criamos as pastas de arquivos backend:
    	- npm init -y
   	- Adicionamos o express para o gerenciamento das rotas
    	- Cadastramos o backend na porta localhost:3333

SPA - Singel Page Aplication:
    	- A página não precisa recarregar totalmente a cada ação 
    	- O backend envia um JSON ao invéz de uma página totalmente desenhada em html, css e js 
    	- Agilidade e facilidade em usar um mesmo backend para web, mobile e api's
	
Criamos a pasta do Frontend:
 	 - npx create-react-app frontend
   	 - npm start para vermos o react rodando na porta localhost:3000

2- Segundo dia

Rotas e Recursos
   	 - por onde nós vamos acessar os dados no basck-end

Métodos HTTP
  	 - GET: buscar uma informação no back-end
  	 - POST: criar uma informaão no back-end
   	 - PUT: alterar uma informação no back-end
   	 - DELET: deletar uma informação no back-end

Tipos de parâmetros 
	- Query Params: parâmetros nomeados enviados pela rota após "?" (filtros, paginação)
	- Route Params: parâmetros utilizados para identificar recursos
	- Request Body:corpo da requisição, utilizado para criar ou alterar recursos

Nodemon -> recurso de desenvolvimento para não ficar conectando e desconectando o servido a cada atualização 
	- npm install nodemon -D (o -D indica que o nodemon é uma dependencia de desenvolvimento
	- adicionar "start": "nodemon index.js" aos scripts em package.json

Tipos de Banco de dados
	- SQL: mySQL, SQLite, postegreSQL, Oracle, Microsoft SQL server (SQL é uma linguagem universal)
	- noSQL: mongoDB, CouchDB... (muito livre e pouco estruturado)

Instalação do Banco de dados 
	- Driver: SELECT * FROM users
	- Query Builder: tabel(´users´).select(´*´).where()

Entidades da aplicação e suas funcionalidades
	- ONG (login, cadastro, logout, contato por e-mail ou whats)
	- incident (cadastrar, deletar, listar por ONG, listar todos)

Para a criação do banco de dados foi utilizado o knex
	- npx knex migrate:make create_(nome da tabela) -> para criar a tabela
	- npx knex migrate:latest -> para executar a tebela
	- Documentation: http://knexjs.org/#Schema-increments

1:17:00

51:21

	
	
