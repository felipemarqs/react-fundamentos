import React from 'react'

import Header from '../Header/index.jsx'
import PostList from '../PostList/index.jsx'
import Footer from '../Footer/index.jsx'

const Layout = ({onToggleTheme, theme}) => {
    return (
        <>
            <Header onToggleTheme={onToggleTheme} theme={theme}/>
            <PostList/>
            <Footer onToggleTheme={onToggleTheme} theme={theme}/>
        </>
    )
}

export default Layout;