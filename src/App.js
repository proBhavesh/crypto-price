import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Card from "./Components/CardC";

function App() {
	return (
		<>
		<Navbar />
			<div className="tile is-ancestor mt-1">
				<Sidebar />
				<Card />
			</div>
		</>
	);
}

export default App;
