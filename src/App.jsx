import React from 'react'
import './App.css'
import { Navbar, Header, CompaniesLogos, Feature1 } from './components'

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Header />
        <CompaniesLogos />
        <Feature1 />
    </div>
  )
}

export default App