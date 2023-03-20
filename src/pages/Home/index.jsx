import React from 'react'

import { Container } from './styles'

const Home = () => {
    return (
        <Container>
            <h2>Introdução</h2>
            <p> Bem-vindo(a) ao meu projeto sobre os fundamentos do React!

            </p>
            <p>
                Esse projeto é uma introdução aos fundamentos do React, onde eu venho apresentar os conceitos básicos,
                incluindo componentes, propriedades, estados, eventos e mais. Também exploraremos as melhores práticas para escrever
                o código React. Se você é novo no React, espero que este projeto seja um proveitoso aprendizado.
            </p>
            <hr />
            <h2>React</h2>
            <p>O que é o React? </p>
            <p>
                React é uma biblioteca Javascript utilizada para a criação de interfaces de usuários.
                Esse projeto aborda sobre a sua "versão" para a criação de SPAs (Single Page Application).
                O React foi criado pelo Facebook e é amplamente utilizado por desenvolvedores em todo o mundo.
            </p>
            <hr />
        </Container>
    )
}

export default Home;