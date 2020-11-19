import React,{useContext} from "react"
import { BookContext } from "../contexts/BookContext"

const Navbar =()=>{
    const {books } =useContext(BookContext)
    return (
        <div className="navbar">
            <h1>my reading list</h1>
            <p>corrently you have {books.length} books</p>
        </div>
    )
}

export default Navbar