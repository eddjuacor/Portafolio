import {Header} from './components/header/Header'
import { NavbarMain } from './components/main/NavbarMain'

import { Routes, Route } from 'react-router-dom'

import {Coments} from './components/main/coments/Coments'

function App() {

  return (
    <>
     <Header/>
     <NavbarMain/>

     <Routes>
        <Route element ={<Coments/>} path='/coments'></Route>
     </Routes>
    </>
  )
}

export default App
