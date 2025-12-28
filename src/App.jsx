import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigator from './view/Navigator'
import Content from './view/Content'
import BottomNavigator from './view/BottomNavigator'

function App() {

  return (
    <div className='container flex flex-col h-screen'>
      <Navigator />
      <Content />
      <BottomNavigator />
    </div>
  )
}

export default App
