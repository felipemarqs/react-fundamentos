# react-fundamentos
Repositório criado para o 5º módulo do curso Jstack


Configurando o babel 

-- Dev Dependencies
  "@babel/cli": "^7.21.0",
    "@babel/core": "^7.21.0",
    "@babel/preset-env": "^7.20.2",
    "@babel/preset-react": "^7.18.6"

npx babel -d build : Gera o código transpilado

====================

Criando aplicativo React

1º - Criar pasta public e o Index.html dentro dela com uma Div com id Root

2º - Instalando o react e o React Dom | react react-dom

3º - Iniciando o aplicativo react :

import React from 'react'
import ReactDOM  from 'react-dom'

ReactDOM.render(
    <h1 id="title">Olá Mundo!</h1>,
    document.getElementById('root')
);

4º -  Gerando o Bundle com webPakc

  4.1 - npm i webpack webpack-cli --save-dev
  4.2 - Criar na raiz do projeto: .webpack.config.js 
        4.2.1 - const path = require('path')

                module.exports = {
                    entry: path.resolve(__dirname, 'src' , 'index.js'),
                    output: {
                        path: path.resolve(__dirname, 'build'),
                        filename: 'bundle.js'
                    },
                };

                --npx webpack