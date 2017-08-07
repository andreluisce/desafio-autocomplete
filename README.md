# Introdução

Este teste foi feito usando as tecnologias:
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [SASS](http://sass-lang.com/)
* [ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Babel](https://babeljs.io/) 
* [Webpack](https://webpack.js.org/)

## Frontend
Usando o React foi possível componentizar a aplicação.
Redux foi usado para gerenciar o estado da aplicação de uma maneira intuitiva.
:smiley:

# Como Executar a Aplicação

## Configuração Básica

> Ter o NodeJS instalado.

Acessar o diretório raiz e executar o comando:
```
npm install
```

## Executando a Aplicação Frontend
No mesmo diretório, executar: 

```
npm start
```
A aplicação estará disponível em `http://localhost:8080`

O `npm start` executa a aplicação em modo de desenvolvimento. 
Para fazer o build da aplicação (`modo produção`), faça:
```
npm run production
```

# Extras

## Linting
A ferramenta de lint que usei foi Standard. 
Dentro do diretório `frontend/src` execute: 
```
npm run lint
```
ou
```
standard --parser babel-eslint --verbose
```
__para este ultimo caso é necessário ter `standard` e `babel-eslint` instalados globalmente (`npm install -g`)__
