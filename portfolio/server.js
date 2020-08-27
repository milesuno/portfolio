const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
	res.send("WOrk Pleeease");
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

if (process.env.NODE_ENV === "production") {
	// Serve any static files
	app.use(express.static(path.join(__dirname, "client/build")));

	// Handle React routing, return all requests to React app
	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

app.listen(port, () => console.log(`Listening on port ${port}`));
