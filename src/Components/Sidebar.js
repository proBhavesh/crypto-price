import React, { useState, useEffect, useContext } from "react";
import "../css/sidebar.css";
import { IconContext } from "react-icons";
import { FiHome, FiBox, FiChevronRight } from "react-icons/fi";
import { Sling as Hamburger } from "hamburger-react";
import { getCoins } from "./Api.js";

const Sidebar = (props) => {
	const [coins, setCoins] = useState([]);
	const [classes, setClasses] = useState("hide");

	useEffect(() => {
		const arr = getCoins();
		arr.then((data) => {
			setCoins(data);
		});
	}, []);

	return (
		<>
			<IconContext.Provider value={{ color: "#a9b7d0", size: "1.6rem" }}>
				<section className="side-section">
					<div className="side-div">
						{/*Sidebar head*/}
						<div className="side-head">
							<div className="logo">
								<h1 className="logo">Tracker</h1>
							</div>
							{/*<div className="toggler">
								<Hamburger />
							</div>*/}
						</div>
						{/*Sidebar navigation*/}
						<nav className="side-nav">
							<ul>
								<li className="nav-item1">Navigation</li>
								<li className="nav-item2">
									<span className="span-logo">
										<FiHome />
									</span>
									<span className="span-name">Dashboard</span>
								</li>
								<li className="nav-item1">Cryptocurrencies</li>
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
										{coins.map((coin) => (
											<div className="coin-names ">
												<div className="coin-name">
													{coin.name}

													<div
														onClick={(event) =>
															props.onClick(
																event.target
																	.innerHTML
															)
														}
													>
														{coin.id}
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
		</>
	);
};

export default Sidebar;
