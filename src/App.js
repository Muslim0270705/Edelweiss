import './styles/style.scss'

import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home";
import Constructor from './pages/Constructor/Constructor';
import Layout from "./Layout/Layout";
import NotFound from './pages/NotFound/NotFound';
import Inexpensive from './pages/Inexpensive/Inexpensive';
import PowerPc from './pages/PowerPc/PowerPc';
import PowerfullPc from './pages/PowerfullPc/PowerfullPc';
import PcAmd from './pages/PcAmd/PcAmd';
import Game from './pages/Game/Game';
import Basket from './pages/Basket/Basket';
import Cart from './pages/Cart/Cart';
import Pc from './pages/Pc/Pc';


function App() {
  return (
      <div className="App">
          <Routes>
              <Route path={'/'} element={<Layout/>}>
                  <Route path={''} element={<Home/>}/>
                  <Route path={'/constructor'} element={<Constructor/>}/>
                  <Route path={'/nedorogie-pc'} element={<Inexpensive/>}/>
                  <Route path={'/power-pc'} element={<PowerPc/>}/>
                  <Route path={'/powerfull-pc'} element={<PowerfullPc/>}/>
                  <Route path={'/pc-amd'} element={<PcAmd/>}/>
                  <Route path={'/cart'} element={<Cart/>}/>
                  <Route path={'/game'} element={<Game/>}/>
                  <Route path={'/cart'} element={<Basket/>}/>
                  <Route path={'*'} element={<NotFound/>}/>
                  <Route path={'/pc/:id'} element={<Pc/>}/>
              </Route>
          </Routes>
      </div>
  );
}

export default App;
