import React, { Suspense, useContext, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './styles/index.scss'

import { useTheme } from './providers/ThemeProvider'
import { classNames } from '../shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'


const App = () => {

  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme ?? ''])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App;
