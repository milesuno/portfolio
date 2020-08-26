const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.send(console.log("WOrk Pleeease"));
});

app.post("/contact/mail", (req, res) => {
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: "milesoluku@gmail.com",
			pass: process.env.KEY,
		},
	});

	transporter.sendMail(
		{
			from: req.body.email,
			to: "milesoluku@gmail.com",
			subject: req.body.subject,
			text: req.body.text,
		}
		// (err, info) => {
		// 	console.log(info.envelope);
		// 	console.log(info.messageId);
		// 	console.error(err);
		// }
        );

        
	res.json(req.body);
});

app.listen(PORT, () => console.log("Listening to PORT 5000"));
