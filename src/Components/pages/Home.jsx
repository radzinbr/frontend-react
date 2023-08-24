import React from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Princ from '../layout/Princ'

function home() {
    return (
    <>
        <Header />
        <div class="main">
            <Sidebar />
            <Princ />
        </div>
    </>
    )
}

export default home