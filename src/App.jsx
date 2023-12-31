import React from 'react'
import Home from './Components/pages/home'
import Contatos from './Components/pages/Contatos'
import Page404 from './Components/pages/Page404'
import Us from './Components/pages/Us'

import { Routes,Route } from 'react-router-dom'

import "./App.css"

const App = () => {
  return (
      <Routes>
          <Route path='/' element ={<Home />} />
          <Route path='/contatos' element ={<Contatos />} />
          <Route path='/About us' element ={<Us />} />
          <Route path='*' element ={<Page404 />} />
      </Routes>
  )
}

export default App
