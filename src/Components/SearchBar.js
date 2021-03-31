import React from "react";
import { FiSearch } from "react-icons/fi";
import "../css/searchbar.css";

const SearchBar = ()=>{
	return(
		<>
		<div className="input-group">
            <input className="search-input"type="text" name="" placeholder="Search..." />
        </div>
		</>
		)
}

export default SearchBar;