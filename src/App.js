import React from 'react'
import HomePage from './pages/home/HomePage';
import "./App.css"
import CoursesPage from './pages/courses/CoursesPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/courses' element={<CoursesPage />}></Route>
    </Routes>
  )
}

export default App