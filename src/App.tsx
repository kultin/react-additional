import React, { Suspense, useContext, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './styles/index.scss'
import { AboutPagelazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import { Theme, ThemeContext } from './theme/themeContext'
import { useTheme } from './theme/useTheme'


const App = () => {

  const { theme, toggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>THEME</button>
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
