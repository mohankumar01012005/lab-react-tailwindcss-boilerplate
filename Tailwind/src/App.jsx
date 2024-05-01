import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Alert from './components/Alert'
import Card from './components/Card'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='m-16 p-16 pb-24'>
      <Button />
      <Alert />
      <Card />
      </div>
      <Footer />
    </div>
  )
}

export default App