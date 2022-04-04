import { eachCoinId } from "./Api";
const DOMAIN = process.env.REACT_APP_DOMAIN_NAME;
const mailgun = require("mailgun-js")({
	apiKey: process.env.REACT_APP_API_KEY,
	domain: DOMAIN,
});

const dogeData = async () => {
	const data = eachCoinId("dogecoin");
	data.then((res) => {
		const price = res.market_data.current_price.inr;
		if (price >= 35) {
			const mailData = {
				from: "probhavsh@gmail.com",
				to: "bhaveshjat9950@gmail.com",
				subject: `${price} - Dogecoin price alert`,
				text: `DogeCoin Price has reached ${price}`,
			};

			mailgun.messages().send(mailData, function (error, body) {
				console.log(body);
			});
		}

		return console.log(price);
	});
};

export default dogeData;
