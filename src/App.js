import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import UI from "./Components/UI";
import "./app.css";

function App() {
	const [mainId, setMainId] = useState("bitcoin");
	console.log(`App.js ${mainId}`);

	return (
		<>
			<div className="app-div">
				<Sidebar onClick={(value) => setMainId(value)} />
				<UI coinIdA={mainId} />
			</div>
		</>
	);
}

export default App;
