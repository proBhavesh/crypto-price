import React, { useState, useEffect } from "react";
import { markRes, cardInfo, eachCoinId } from "./Api";
import Loader from "react-loader-spinner";
import "../css/eachcard.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { FiArrowUp } from "react-icons/fi";

const EachCard2 = (props) => {
	const [state, setState] = useState();
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);

	console.log(`EachCard2.js : ${props.coinId}`)
	useEffect(() => {
		// making function

		const arr = eachCoinId(props.coinId);
		arr.then((arr) => {
			// console.log(arr);
			return setState(arr);
		});
	}, [props.coinId]);

	// useEffect(() => {
	// 	// making function

	// 	const arr = eachCoinId("bitcoin");
	// 	arr.then((arr) => {
			// console.log(state);
	// 	});
	// }, []);
	if (error) {
		return <div>Error: {error.message}</div>;
	}

	else if (state == undefined) {
		return (
			<React.Fragment>
				<div className="loading-animation">
					<Loader
						type="Circles"
						color="#a9b7d0"
						height={100}
						width={100}
						timeout={30000000} //3 secs
					/>
				</div>
			</React.Fragment>
		);
	} else {
		return (
			<section className="each-card-sec">
				<div className="cards">
					<div className="card">
						<div className="card-body">
							<div className="coin-name">{state.name}</div>
							<div>
								<span className="price-icon">
									<FiArrowUp color="#1DE9B6" size={30} />
								</span>

								<span className="price-no">
									{" "}
									${state.market_data.current_price.usd}
								</span>
							</div>
							<div className="progress-bar">
								{" "}
								<ProgressBar
									completed={
										(100000 - Math.abs(state.market_data.current_price.usd)) / 1000
									}
									bgcolor="#1DCAE0"
									height="7px"
									isLabelVisible={false}
									baseBgColor="#F4F7FA"
									borderRadius="0"
								/>
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card-body">
							<div className="coin-name">24 Hour % Change</div>
							<div>
								<span className="price-icon">
									<FiArrowUp color="#1DE9B6" size={30} />
								</span>

								<span className="price-no">
									{" "}
									{state.market_data.market_cap_change_percentage_24h_in_currency.usd}%
								</span>
							</div>
							<div className="progress-bar">
								{" "}
								<ProgressBar
									completed={

										Math.abs(state.market_data.market_cap_change_percentage_24h_in_currency.usd) *
										10
									}
									bgcolor="#9D8FD4"
									height="7px"
									isLabelVisible={false}
									baseBgColor="#F4F7FA"
									borderRadius="0"
								/>
							</div>
						</div>
					</div>

					<div className="card">
						<div className="card-body">
							<div className="coin-name">
								24 Hour Price Change
							</div>
							<div>
								<span className="price-icon">
									<FiArrowUp color="#1DE9B6" size={30} />
								</span>

								<span className="price-no">
									${state.market_data.price_change_24h_in_currency.usd}
								</span>
							</div>
							<div className="progress-bar">
								{" "}
								<ProgressBar
									completed={Math.abs(state.market_data.price_change_24h_in_currency.usd) / 10}
									bgcolor="#1DE5BB"
									height="7px"
									isLabelVisible={false}
									baseBgColor="#F4F7FA"
									borderRadius="0"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
};

export default EachCard2;
