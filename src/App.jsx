import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//new stuff
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Layout } from './components/layout/Layout';
import { HomePlaceholder } from './components/placeholders/HomePlaceholder';
import { PagePlaceholder } from './components/placeholders/PagePlaceholder';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Login } from './components/login/Login';
import { Account } from './components/account/Account';
import { Summary } from './components/account/Summary';
import { Bought } from './components/account/Bought';
import { Sold } from './components/account/Sold';
import { Watched } from './components/account/Watched';
import { AddAsset } from './components/account/AddAsset';
import { Principles } from './components/account/Principles';
import { AssetBought } from './components/account/AssetBought';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router';

function App() {
  //const [count, setCount] = useState(0)

  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route element={<Home/>} path='/' />
          <Route element={<About />} path='about' />
          <Route element={<Login/>} path='login'/>
          <Route element={<Account/>} path='account/:user'>
            <Route path='overview'>
            {/*<Route element={<Summary/>} path='summary'/>*/}
              <Route element={<Bought/>} path='bought'/>
              <Route element={<Sold/>} path='sold'/>
              <Route element={<Watched/>} path='watched'/>
              <Route element={<AddAsset/>} path='add-asset' />
              <Route element={<Principles/>} path='principles'/>
            </Route>
            <Route element={<AssetBought/>} path='asset/:assetID' />
          </Route>
          <Route element={<PagePlaceholder/>} path='page' />
        </Route>
      </Routes>
  )
}

export default App
