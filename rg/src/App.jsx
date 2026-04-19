import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greeting from './componets/Greeting'
import Hooked from './componets/hooked'
import Counter from './componets/Counter'

function App() {

  return (
    <>
     {/* <Greeting name={'Romit Gupta'} course={'Computer Science'} marks={20}/>
     <Greeting name={'Anita Verma'} course={'Information Technology'} marks={92} />
     <Greeting name={'Rohan Gupta'} course={'Electronics'} marks={78} /> */}
     <Greeting/>
     <Counter/>
     <Hooked />
    </>
  )
}

export default App
