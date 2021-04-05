import React, { useContext, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import EachCard from "./EachCard";
import EachCard2 from "./EachCard2";
import { coinIdContext } from "./Sidebar";

const MainUi = ({ coinIdA }) => {
	console.log(`MainUi.js ${coinIdA}`);

	const id = "bitcoin";

	return (
		<>
			<div className="main-ui">
				<SearchBar />
				<EachCard2 coinId={coinIdA} />
			</div>
		</>
	);
};

export default MainUi;
