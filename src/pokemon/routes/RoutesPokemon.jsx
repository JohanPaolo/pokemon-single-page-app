import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { PokedexPage, SearchIdPage, SearchNamePage, SearchTypePage } from "../pages"
import { Navbar } from "../../ui"

export const RoutesPokemon = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
            <Routes>
                <Route path="pokedex" element={<PokedexPage/>} ></Route>

                <Route path="searchId" element={<SearchIdPage/>} ></Route>
                <Route path="searchName" element={<SearchNamePage/>} ></Route>
                <Route path="searchType" element={<SearchTypePage/>} ></Route>

                <Route path="/" element={<Navigate to="/pokedex"/>} />
            </Routes>
        </div>
    </>
  )
}
