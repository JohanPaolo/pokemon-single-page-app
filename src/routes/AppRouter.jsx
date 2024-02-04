import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { RoutesPokemon } from '../pokemon/routes/RoutesPokemon'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='login' element={<LoginPage/>} ></Route>
            <Route path='/*' element={<RoutesPokemon/>} ></Route>
        </Routes>
        
    </>
  )
}
