const BASE_URL = "https://api.coingecko.com/api/v3";


export const status = async ()=>{
	const url = BASE_URL + "/ping";
	const res = await fetch(url);
	return await res.json();
}

export const markRes = async () =>{
	const url = BASE_URL+"/coins/markets?vs_currency=usd&per_page=250";
	const res = await fetch(url);
	 return await res.json();
};

export const cardInfo = async () =>{
	const url = BASE_URL+"/coins/markets?vs_currency=usd";
	const res = await fetch(url);
	const result_json =  await res.json();
	return await ([result_json]);
};

export const eachCoinId = async (coinId) =>{
	const url = BASE_URL+`/coins/${coinId}`;
	const res = await fetch(url);
	 return await res.json();
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