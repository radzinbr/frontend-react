import React from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Content from '../layout/Content'
import CardUser from '../ui/CardUser'

const Users = {
    nome:"samuel",
    email:"indoali@indo.ali",
    Photo:"https://img.ifunny.co/images/3086a9bb83b4939813882c1b65f7ffd247556933a7ad6bf8f155b21e35cc08bc_1.jpg"
}
const Us = () => {
    return (
        <>
            <Header />
            <div className="main">
                <Sidebar />
                <Content>
                    <h1>sobre nos</h1>
                    <div>
                    <CardUser user={Users} />
                    <CardUser user={Users}/>
                    <CardUser user={Users} />
                    <CardUser user={Users} />
                    </div>
                    
                </Content>
                
            </div>
        </>
    )
}

export default Us