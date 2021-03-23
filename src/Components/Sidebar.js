import React, { useState, useEffect } from "react";

import "./sidebar.css";
import { markRes } from "./Api";

const Sidebar = (props) => {
	// seeting effect hook

	const [state, setState] = useState([]);
	// setting useEffect hook

	useEffect(() => {
		const arr = markRes();
		arr.then((data) => {
			setState(data);
		});
	}, []);

	// returning the values

	return (
		<section className="side-bar sidebar-sec tile is-2 is-flex is-flex-direction-column is-parent ">
			<div className="is-child">
				<div className="button is-info is-size-4 coin-btn mt-2 ml-1">
					Coins
				</div>
				<hr />
				<div>
					{state.map((data) => (
						<div className="">
							<h1 className="button has-background-success m-1 p-1 coin-btn mr-3 has-text-grey-dark">
								{data.name}
							</h1>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Sidebar;
