import React, { useState, useEffect, useContext } from "react";
import "../css/sidebar.css";
import { IconContext } from "react-icons";
import { FiTrendingUp, FiHome, FiBox, FiChevronRight } from "react-icons/fi";
import { Sling as Hamburger } from "hamburger-react";
import logo from "../assets/logo.jpeg";
import { markRes, eachCoinId } from "./Api.js";
import EachCard2 from "./EachCard2";

// creating context
export const coinIdContext = React.createContext("bitcoin");

const Sidebar = () => {
	// definig id
	let id = useContext(coinIdContext);

	const [state, setState] = useState([]);

	const [classes, setClasses] = useState("hide");

	useEffect(() => {
		const arr = markRes();
		arr.then((data) => {
			setState(data);
			// console.log(data);
		});
	}, []);

	// function to render components

	const getName = (event) => {
		const coinId = event.target.innerHTML;
		// console.log(coinId);
		id = coinId;
		console.log(id);

	};

	return (
		<>
			{/*Providing Context*/}
			<coinIdContext.Provider value={getName}>
				<IconContext.Provider
					value={{ color: "#a9b7d0", size: "1.6rem" }}
				>
					<section className="side-section">
						<div className="side-div">
							{/*Sidebar head*/}

							<div className="side-head">
								<div className="logo">
									<img src={logo} alt="img" />
								</div>
								<div className="toggler">
									<Hamburger />
								</div>
							</div>

							{/*Sidebar navigation*/}
							<nav className="side-nav">
								<ul>
									<li className="nav-item1">Navigation</li>
									<li className="nav-item2">
										<span className="span-logo">
											<FiHome />
										</span>
										<span className="span-name">
											Dashboard
										</span>
									</li>
									<li className="nav-item1">
										Cryptocurrencies
									</li>
									<li
										className="nav-item2 "
										onClick={() => {
											if (classes == "hide") {
												setClasses("add-line");
											} else if (classes == "add-line") {
												setClasses("hide");
											}
										}}
									>
										<span className="span-logo">
											<FiBox />
										</span>
										<div>List of Coins</div>
										<span className="arrow">
											<FiChevronRight />
										</span>
									</li>
									<li className={classes}>
										<div>
											{state.map((data) => (
												<div className="coin-names ">
													<div className="coin-name">
														{data.name}

														<div onClick={getName}>
															{data.id}
														</div>
													</div>
													<hr />
												</div>
											))}
										</div>
									</li>
								</ul>
							</nav>
						</div>
					</section>
				</IconContext.Provider>
			</coinIdContext.Provider>
		</>
	);
};

export default Sidebar;
