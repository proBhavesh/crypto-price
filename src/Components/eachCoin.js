import { eachCoinId } from "./Api";
const DOMAIN = "sandbox576b5f7c7db54119a02081290b22ed52.mailgun.org";
const mailgun = require("mailgun-js")({
	apiKey: "92edc405d00216edd1f994a06ae21a7c-a0cfb957-684602a2",
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
