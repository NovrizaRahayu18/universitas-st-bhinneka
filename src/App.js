import './App.css';
import { Fragment } from 'react'
import Home from './components/Home' 
import Fakultas from './components/Fakultas'
import Kontak from './components/Kontak';
import Profil from './components/Profil'
import UnderConst from './components/UnderConst'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/fakultas' element={<Fakultas />} />
        <Route path='/Kontak' element={<Kontak />} />
        <Route path='/404' element={<UnderConst />} />
      </Routes>
    </Fragment>
  )
}

export default App;
