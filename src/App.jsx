import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
const App = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Sidebar />
        
      </div>
    </div>
  )
}

export default App
