import React from 'react'

import Header from '../Header/index.jsx'
import PostList from '../PostList/index.jsx'
import Footer from '../Footer/index.jsx'

const Layout = () => {
    return (
        <>
            <Header/>
            <PostList/>
            <Footer/>
        </>
    )
}

export default Layout;