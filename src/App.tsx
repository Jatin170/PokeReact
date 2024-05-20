import React from 'react';
import './App.css';
import Collection from './Collection';
import { Route, Routes } from 'react-router-dom';
import PokeInfo from './PokeInfo';
function App() {
  return (
    // <div className="App">
    //   <Collection/>
    // </div>
   
    <Routes>
      <Route path='/' element={<Collection/>}/>
      <Route path='/info/:id' element={<PokeInfo/>}/>
    </Routes>
  );
}

export default App;
