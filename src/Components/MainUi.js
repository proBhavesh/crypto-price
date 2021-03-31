import React from "react";
import SearchBar from "./SearchBar";
import EachCard from "./EachCard";
import EachCard2 from "./EachCard2";
const MainUi = () => {
	return (
		<>
			<div className="main-ui">
				<SearchBar />
				<EachCard2 coinId="bitcoin" />
			</div>
		</>
	);
};

export default MainUi;
