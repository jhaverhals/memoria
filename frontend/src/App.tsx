import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import type { Kerkdienst } from './types'

function App() {

  const [kerkdiensten, setKerkdiensten] = useState<Kerkdienst[]>([])

  useEffect(() => {
    const getKerkdiensten = async () => {
      const response = await fetch('http://localhost:8080/api/kerkdienst')
      const data = await response.json()
      setKerkdiensten(data)
    }
    getKerkdiensten()
  }, [])

  return <>{kerkdiensten.length === 0 ? <p>Finding kerkdiensten...</p> : <List kerkdiensten={kerkdiensten} />}</>
}

export default App
