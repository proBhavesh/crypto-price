import React, {useContext, useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import EachCard from "./EachCard";
import EachCard2 from "./EachCard2";
import {coinIdContext} from "./Sidebar";




const MainUi = () => {
	
	// const [id, setId] = useState(useContext(coinIdContext))
	 
	 const id = useContext(coinIdContext);
	 useEffect(() => {
	 	console.log(id);

	 }, [id]);
	 	
			
	return (
		<>
			<div className="main-ui">
				<SearchBar />
				<EachCard2 coinId={id} />
			</div>
		</>
	);
};

export default MainUi;
