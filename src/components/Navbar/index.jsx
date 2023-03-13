import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'


const Navbar = ( ) => {
    return (
        <Container>
            <Link to="/">HOME</Link>
            <Link to="/posts">POST</Link>
        </Container>
    )
}

export default Navbar