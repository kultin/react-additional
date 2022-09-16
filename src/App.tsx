import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { Counter } from './components/Counter'
import './index.scss'
import AboutPage from './pages/AboutPage/AboutPage'
import { AboutPagelazy } from './pages/AboutPage/AboutPage.lazy'
import MainPage from './pages/MainPage/MainPage'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'

const App = () => {
  return (
    <div className='app'>
      <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPagelazy />}/>
          <Route path={'/'} element={<MainPageLazy />}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;
