<h1 align="center"> 
	🚧  React Select 🚀 Em construção...  🚧
</h1>

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

Criando aplicativo React - PARTE 1

1º - Criar pasta public e o Index.html dentro dela com uma Div com id Root

2º - Instalando o react e o React Dom | react react-dom

3º - Iniciando o aplicativo react :

import React from 'react'
import ReactDOM from 'react-dom'

```bash
yarn add antd
```

ReactDOM.render(

<h1 id="title">Olá Mundo!</h1>,
document.getElementById('root')
);

4º - Gerando o Bundle com webPakc

4.1 - npm i webpack webpack-cli --save-dev
4.2 - Criar na raiz do projeto: .webpack.config.js
4.2.1 -

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle[hash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  mode: "development",
  devServer: {
    port: 3000,
  },
};
```

                --npx webpack

                4.2.2 - Criando Loaders

5º - Criando um servidor local de desenvolvimento

npm i -D webpack-dev-server

Criando aplicativo React - PARTE 2

### Fundamentos do react

Criando o primeiro componente :

//Functional Components
function

```javascript
import React from "react";

const App = () => {
  return (
    <div>
      <h1>Component App</h1>
    </div>
  );
};

export default App;
```

//Props

Componentes em react usam props (propreties) para se comunicar entre si. Todo componente Pai pode passar informações para seus filhos passando props para eles. 

```javascript
      <div>
        <Post
          likes={20}
          title="Primeiro Artigo"
          subtitle="Subtitle do primeiro"
          paragraph="Lorem Ipsum is simply dummy text of the printing."
        />
      </div>
```

No exemplo acima, o componente "Post" recebe as "props" como se fossem atributos HTML, esses valores (propriedades) passados pelo componente pai, pode ser acessado no component filho da seguinte forma: 

```javascript
const Post = ({ title, subtitle, paragraph, likes }) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>{paragraph}</p>
      Likes: {likes / 2}
      <hr/>
    </>
  );
};
```

Desestruturando o objeto no argumento da função, podemos utilizar a sintexe do JSX para rederizar os valores.

//Renderizando listas

Para renderizar components em listas utilizandos o método Map do javascript.

```javascript
{posts.map((post)=>(
        <>
        <Post
        key={post.title}
        likes={post.likes}
        title={post.title}
        subtitle={post.subtitle}
        paragraph={post.paragraph}
        />
        </>
      ))}
```
