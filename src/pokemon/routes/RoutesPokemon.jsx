import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { PokedexPage, PokemonPage, SearchIdPage, SearchNamePage, SearchTypePage } from "../pages"
import { Navbar } from "../../ui"

export const RoutesPokemon = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
            <Routes>
                <Route path="pokedex" element={<PokedexPage/>} />

                <Route path="searchId" element={<SearchIdPage/>} />/
                <Route path="searchName" element={<SearchNamePage/>} />
                <Route path="searchType" element={<SearchTypePage/>} />
                <Route path="pokemon/:id" element={<PokemonPage/>} />

                <Route path="/" element={<Navigate to="/pokedex"/>} />
            </Routes>
        </div>
    </>
  )
}
