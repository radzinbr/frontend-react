import React, { useEffect } from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import Content from '../layout/Content'
import CardUser from '../ui/CardUser'


const Us = () => {  
    const [users,setUsers] = userState()

useEffect(() => {
    const getUsers =  async() =>
    {
        const response = await fetch('http://localhost:3300/user/list')
        const data = await response.json()
        console.log(data.success)
        console.log(data.user)
        setUsers(data.Users)
    
    }

    getUsers()

},[])



    return (
        <>
            <Header />
            <div className="main">
                <Sidebar />
                <Content>
                    <h1>sobre nos</h1>
                    <div>
                        {Users.map((Users) =>
                            <CardUser key={Users.email} user={Users} />
                        )}
                    
                    </div>

                </Content>

            </div>
        </>
    )
}

export default Us