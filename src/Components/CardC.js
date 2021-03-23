import React, { useState, useEffect } from "react";
import { markRes, cardInfo } from "./Api";
import "./sidebar.css";
import "bulma/css/bulma.css";

const Card = () => {
	const [state, setState] = useState([]);

	useEffect(() => {
		// making function
		async function a() {
			const arr = cardInfo();
			arr.then((data) => {
				setState(data);
			});
		}
		// awaking function
		a();
	}, []);

	return (
		<section className="card-sec tile is-9 is-parent">
			<div className="cardD">
				<div className="has-background-primary-light is-child card">
					<div className="">
						<div className="a">{state[0][0].name}</div>
						<img src={state[0][0].image} alt="this" />
						<div className="main-info">
							<h1>Market Cap Rank - {state[0][0].market_cap_rank}</h1>
							<h1>Last Updated - {state[0][0].last_updated}</h1>
							<h1>Current Price - {state[0][0].current_price}</h1>
							<h1>All time high - {state[0][0].ath}</h1>
							<h1>All time high Date - {state[0][0].ath_date}</h1>
							<h1>All time low - {state[0][0].atl}</h1>
							<h1>All time low Date - {state[0][0].atl_date}</h1>
							<h1>
								All time low percentage change -
								{state[0][0].atl_change_percentage}
							</h1>
							<h1>Market Cap - {state[0][0].market_cap}</h1>

							<h1>Price Change 24h - {state[0][0].price_change_24h}</h1>
							<h1>Total Supply - {state[0][0].total_supply}</h1>
							<h1>Total Volume - {state[0][0].total_volume}</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Card;
