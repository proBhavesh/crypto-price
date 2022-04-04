import React, { useContext, useEffect, useState } from "react";
// import SearchBar from "./SearchBar";
import Card from "./Card";
import { coinIdContext } from "./Sidebar";

const UI = ({ coinIdA }) => {
	
	return (
		<>
			<div className="main-ui">
				{/*<SearchBar />*/}
				<Card coinId={coinIdA} />
			</div>
		</>
	);
};

export default UI;
