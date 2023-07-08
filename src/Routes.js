import { Routes,Route } from "react-router-dom";


import React from 'react'

const AppRoutes = () => {
  return (
    <Routes>
       <Route exact path='/' element={<Home/>} />
    </Routes>
  )
}

export default AppRoutes