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

2- Segundo dia (Backend node.js)

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

3- Terceiro Dia (react.js)

Componente: é uma função que retorna html 

JSX: javascript com html dentro 

Propriedades: atributos (ou o proprio conteudo no nem de "childeren") é passado para o componente para tornar a função dinâmica

Estado e imutabilidade: as variáveis são definidas em uma constante com useState e nesta constante vai uma array com o nome desta constante e com a função que irá alterar o valor desta constante, nenhum estado pode ser alterado diretamente sem passar por esta função ex: "const [ counter, setCounter ] = useState(0);"

Download de pacote de icones para o React: npm install react-icons
Rotas feitas com o pacote: npm install react-router-dom
Conexão com o banco de dados feita pelo axios: npm install axios
Meu ID de acesso é ab7e2ae1.


4- Quarto Dia 

Não há muito o que descrever, pois react.js e react-native são muito similares, a maior diferença é o fato de não podermos usar o css (apenas na forma de js) e outras peculiaridades relativas ao fato de estarmos trabalhando em uma tela de celular.

	
	
