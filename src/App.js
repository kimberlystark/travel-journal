// import React from "react"
import data from "./data"
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"

export default function App(props){
    const locations = data.map(item =>{
    return (
        <Cards 
        key={item.id}
        {...item}
        />
    )
    })
    
    return (
    <>
    <Navbar /> 
    <section className="cards-list">
        {locations}
    </section>
    </>
    )
}