import React, { useState } from "react";
// import '../node_modules/bulma/css/bulma.min.css';
import Sidebar from "./Components/Sidebar";
import MainUi from "./Components/MainUi";
import "./app.css";
import dogeData from "./Components/eachCoin.js";

function App() {
	dogeData();
	const [mainId, setMainId] = useState("bitcoin");
	console.log(`App.js ${mainId}`);

	return (
		<>
			<div className="app-div">
				<Sidebar onClick={(value) => setMainId(value)} />
				<MainUi coinIdA={mainId} />
			</div>
		</>
	);
}

export default App;
