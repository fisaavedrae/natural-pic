import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from './components/pages/HomePage';
import Favoritos from './components/pages/Favoritos';
import { MyContext } from './components/context/MyContext';
import { Routes, Route } from 'react-router-dom';
import ReadAPI from './components/ReadAPI';



function App() {

  const [fotos, setFotos] = useState([])

  console.log(fotos)
  return (
    <>
      <MyContext.Provider value={{ fotos, setFotos }}>
        <ReadAPI />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/favoritos' element={<Favoritos />} />
        </Routes>
      </MyContext.Provider>
    </>
  )
}

export default App
