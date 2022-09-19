import React, { Suspense, useContext, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './styles/index.scss'

import { useTheme } from './providers/ThemeProvider'
import { AboutPage } from '../pages/AboutPage'
import { MainPage } from '../pages/MainPage'
import { classNames } from '../shared/lib/classNames/classNames'

const App = () => {

  const { theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme ?? ''])}>
      <button onClick={toggleTheme}>THEME</button>
      <Link to={'/'}>Main Page</Link>
      <Link to={'/about'}>About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />}/>
          <Route path={'/'} element={<MainPage />}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;
