import React, { useState } from 'react'
import { Container } from './styles'

const Sidebar = () => {

    const [listItems, setListItems] = useState([
        { id: '1', item: 'Home' },
        { id: '2', item: 'Page2' },
        { id: '3', item: 'Page3' },
        { id: '4', item: 'Page40' },]
    )


    return (
        <Container>
            <div>
                <ul>
                    {listItems.map((item) => (
                        <li key={item.id}>{item.item}</li>
                    ))}
                </ul>
            </div>
        </Container>
    )
}

export default Sidebar