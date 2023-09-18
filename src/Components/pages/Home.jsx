import React from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Content from '../layout/Content'

function Home() {
    return (
        <>
            <Header />
            <div className="main">
                <Sidebar />
                <Content>
                    <h1>Home</h1>
                </Content>
            </div>
        </>
    )
}

export default Home