import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MyName from './components/MyName'
import SeuNome from './components/SeuNome'
import Saudacao from './components/Saudacao'

function App() {
  const [nome, setNome] = useState();

  return (
    <div className='App'>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  )
}

export default App
