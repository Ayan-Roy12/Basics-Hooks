import './App.css'
import React, { useState } from 'react'
import UseState from './components/useState'
import UsedEffect from './components/UseEffect'
import UseContext from './components/useContext'


export const ToggleTheme = React.createContext()

function App() {

  const[state, setState] = useState(false)

  const handleToggle = ()=>{
    setState(state=>!state)
  }
  

  return (
    <>
      <UseState/>
      <UsedEffect/>

      <ToggleTheme.Provider value={state}>
        <button onClick={handleToggle}>Toggle</button>
      <UseContext/>
      </ToggleTheme.Provider>

      
    </>
  )
}

export default App