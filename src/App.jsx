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
          <Route element={<PagePlaceholder/>} path='page' />
        </Route>
      </Routes>
  )
}

export default App
