import React from "react";
import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav(props){
    return(
        <div>
            <SearchBar onSearch={props.onSearch}/>
            <Link to="/about"> <h3>About</h3></Link>
            <Link to="/home"> <h3>Home</h3></Link>
        </div>
    )
}