const BASE_URL = "https://api.coingecko.com/api/v3";

export const markRes = async () =>{
	const url = BASE_URL+"/coins/markets?vs_currency=usd";
	const res = await fetch(url);
	 return await res.json();
};

export const cardInfo = async () =>{
	const url = BASE_URL+"/coins/markets?vs_currency=usd";
	const res = await fetch(url);
	const result_json =  await res.json();
	return await [result_json];
};

// export const getAvailCoins = async () =>{
// 	const url = BASE_URL+"/search/trending";
// 	const res = await fetch(url);
// 	 return await res.json();
// };

// export const getAvailCoins = async () =>{
// 	const url = BASE_URL+"/search/trending";
// 	const res = await fetch(url);
// 	 return await res.json();
// };

// export const getAvailCoins = async () =>{
// 	const url = BASE_URL+"/search/trending";
// 	const res = await fetch(url);
// 	 return await res.json();
// };