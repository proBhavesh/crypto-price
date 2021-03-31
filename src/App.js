import React, { useState } from "react";
// import '../node_modules/bulma/css/bulma.min.css';
import Sidebar from "./Components/Sidebar";
import MainUi from "./Components/MainUi";
import "./app.css";
function App() {
	return (
		<>
			<div className="app-div">
			<Sidebar/>
			<MainUi/>
			</div>
		</>
	);
}

export default App;
