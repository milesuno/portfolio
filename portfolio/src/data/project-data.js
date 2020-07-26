import barteranythingImg00 from "./projects/barteranything/barteranything-logo.jpg";
import barteranythingImg01 from "./projects/barteranything/barteranything.jpg";
import barteranythingImg02 from "./projects/barteranything/barteranything-login.jpg";
import barteranythingImg03 from "./projects/barteranything/barteranything-local-ads.jpg";
import barteranythingImg04 from "./projects/barteranything/barteranything-search.jpg";
import barteranythingImg05 from "./projects/barteranything/barteranything-profile-edit.jpg";
import barteranythingImg06 from "./projects/barteranything/barteranything-mail.jpg";
import barteranythingImg07 from "./projects/barteranything/barteranything-dashboard-barterstore.jpg";
import barteranythingImg08 from "./projects/barteranything/barteranything-dashboard-currentdeals.jpg";
import barteranythingImg09 from "./projects/barteranything/barteranything-dashboard-overview.jpg";
import barteranythingImg10 from "./projects/barteranything/barteranything-dashboard-reviews.jpg";

import cyfglossaryImg00 from "./projects/cyf-glossary/cyf-glossary-logo.jpg";
import cyfglossaryImg01 from "./projects/cyf-glossary/cyf-glossary-landingpage.jpg";
import cyfglossaryImg02 from "./projects/cyf-glossary/cyf-glossary-signup.jpg";
import cyfglossaryImg03 from "./projects/cyf-glossary/cyf-glossary-login.jpg";
import cyfglossaryImg04 from "./projects/cyf-glossary/cyf-glossary-search.jpg";
import cyfglossaryImg05 from "./projects/cyf-glossary/cyf-glossary-term.jpg";
import cyfglossaryImg06 from "./projects/cyf-glossary/cyf-glossary-add-term.jpg";
import cyfglossaryImg07 from "./projects/cyf-glossary/cyf-glossary-saved-term.jpg";

import seeyourfutureImg00 from "./projects/see-your-future/see-your-future.jpg";
import seeyourfutureImg01 from "./projects/see-your-future/see-your-future-opportunites.jpg";
import seeyourfutureImg02 from "./projects/see-your-future/see-your-future-companies.jpg";
import seeyourfutureImg03 from "./projects/see-your-future/see-your-future-faq.jpg";

import hotelreactImg00 from "./projects/hotel-react.jpg";

import tvshowImg00 from "./projects/tv-show-info.jpg";

import weatherappImg00 from "./projects/weather-app.jpg";

const projects = [
	{
		key: 1,
		id: "p1",
		type: "projects",
		name: "BarterAnything",
		img: [
			barteranythingImg00,
			barteranythingImg01,
			barteranythingImg02,
			barteranythingImg03,
			barteranythingImg04,
			barteranythingImg05,
			barteranythingImg06,
			barteranythingImg07,
			barteranythingImg08,
			barteranythingImg09,
			barteranythingImg10,
		],
		desc:
			"BarterAnything is a Cashless Ecommerce Platform. User's create profiles and negotiate terms for a value trade of any skill, service or Item they are offering.",
		role: "Creative Director, UX Designer, Project Management.",
		tech: "HTML, CSS, JavaScript, PHP, SQL.",
		challenge: "Syncing up schedules with remote team mates.",
		solution:
			"Practiced agile principles to maximise the effectiveness of collabrative work.",
		source: {
			url: "https://barteranything.com/",
			github: "",
			trello: "",
		},
	},
	{
		key: 2,
		id: "p2",
		type: "projects",
		name: "CYF Glossary",
		img: [
			cyfglossaryImg00,
			cyfglossaryImg01,
			cyfglossaryImg02,
			cyfglossaryImg03,
			cyfglossaryImg04,
			cyfglossaryImg05,
			cyfglossaryImg06,
			cyfglossaryImg07,
		],
		desc:
			"My team and I, we responsible for delivering a glossary for technology-based technical terms.We were a team of 4 with a deadline of 24 days. I was the Project Manager and Front-End developer for the project. We successfully completed a working product on time and demonstrated its functionality to stakeholders.",
		role:
			"UX/UI designer, Prototyping, Front-end Development, Project Management.",
		tech: "HTML, CSS, JavaScript, React, NodeJS, Express, MongoDB.",
		challenge: "Getting team to collaborate for product demoing.",
		solution:
			"Encouraging inexperienced developers with practice, feedback and advice.",
		source: {
			url: "https://cyf-glossary-app.netlify.com/",
			github: "https://github.com/ahmedahashim/CYF-Glossary",
			trello: "https://trello.com/b/9OxYYRjg",
		},
	},
	{
		key: 3,
		id: "p3",
		type: "projects",
		name: "See Your Future",
		img: [
			seeyourfutureImg00,
			seeyourfutureImg01,
			seeyourfutureImg02,
			seeyourfutureImg03,
		],
		desc:
			"My team and I entered a competition hosted by Capgemini. Our object was to deliver a platform to connect inexperienced developers with companies, helping them to find out more about the industry and job roles. I was the Project Manager and Front-End developer for the project. We were a team of 8 and had a 30-day deadline. We successfully delivered a working product meeting the deadline and won ‘Best Engineered’ and ‘Most Innovative’ awards - 2 of 3 awards available. I was voted by my peers to receive the ‘Hero Helper’ award, due to my contributions.",
		role: "UX/UI Designer, Front-end Developer, Project Management.",
		tech: "HTML, CSS, JavaScript, React",
		challenge: "Making sure team developer work to a high standard.",
		solution:
			"Applying Agile practices for product delivery and utilising unit testing and acceptance testing.",
		source: {
			url: "https://stoic-euclid-1582e1.netlify.com/",
			github: "https://github.com/eddientim/CYF-CAPGEMINI",
			trello: "",
		},
	},
	{
		key: 4,
		id: "p4",
		type: "projects",
		name: "Weather App",
		img: [weatherappImg00],
		desc:
			"The Weather App fetchs live data from the Openweathermap api. It displays the current weather as well as the weather over a 24 hour window.",
		role: "UX Designer, FrontEnd Developer.",
		tech: "HTML, CSS, JavaScript, React",
		challenge: "",
		solution: "",
		source: {
			url: "https://miles-weather-app.netlify.com",
			github: "https://github.com/milesuno/cyf-weather",
			trello: "",
		},
	},
	{
		key: 5,
		id: "p5",
		type: "projects",
		name: "Hotel React",
		img: [hotelreactImg00],
		desc:
			"Hotel React is a product landing page that allows users to: Link off to tourist locations, search for bookings based on name or room ID, Add orders a basket and submit their order.",
		role: "UX Designer, FrontEnd Developer.",
		tech: "HTML, CSS, JavaScript, React, Express, NodeJS",
		challenge: "",
		solution: "",
		source: {
			url: "https://miles-hotel-react.netlify.com/",
			github: "https://github.com/milesuno/cyf-hotel-react",
			trello: "",
		},
	},
	{
		key: 6,
		id: "p6",
		type: "projects",
		name: "TV Show Info",
		img: [tvshowImg00],
		desc:
			"TV Show Info is a page that allows users to: Filter shows (Fetchs from Maze API), Jump to Episode in list.",
		role: "UX Designer, FrontEnd Developer.",
		tech: "HTML, CSS, JavaScript, React",
		challenge: "",
		solution: "",
		source: {
			url: "https://cyf-miles-tv-info.netlify.com/",
			github:
				"https://github.com/milesuno/cyf-react-challenges/tree/master/challenge-tv-show-info",
			trello: "",
		},
	},
	{
		key: 7,
		id: "p7",
		type: "projects",
		name: "Drum Kit",
		img: ["#"],
		desc:
			"TV Show Info is a page that allows users to: Filter shows (Fetchs from Maze API), Jump to Episode in list.",
		role: "UX Designer, FrontEnd Developer.",
		tech: "HTML, CSS, JavaScript, React",
		challenge: "",
		solution: "",
		source: {
			url: "https://keyboard-drumkit.netlify.com/",
			github:
				"https://github.com/milesuno/keyboard-drumkit",
			trello: "",
		}
		
	},
	{
		key: 8,
		id: "p8",
		type: "projects",
		name: "City Searcher",
		img: ["#"],
		desc:
			"TV Show Info is a page that allows users to: Filter shows (Fetchs from Maze API), Jump to Episode in list.",
		role: "UX Designer, FrontEnd Developer.",
		tech: "HTML, CSS, JavaScript, React",
		challenge: "",
		solution: "",
		source: {
			url: "https://city-searcher.netlify.app",
			github:
				"https://github.com/milesuno/type-ahead-city-seacher",
			trello: "",
		}

	},
	{
		key: 9,
		id: "p9",
		type: "projects",
		name: "Paint App",
		img: ["#"],
		desc:
			"TV Show Info is a page that allows users to: Filter shows (Fetchs from Maze API), Jump to Episode in list.",
		role: "UX Designer, FrontEnd Developer.",
		tech: "HTML, CSS, JavaScript, React",
		challenge: "",
		solution: "",
		source: {
			url: "paint-react.netlify.app",
			github:
				"https://github.com/milesuno/paint-react",
			trello: "",
		}

	},
	{
		key: 10,
		id: "p10",
		type: "projects",
		name: "To Do Bot",
		img: ["#"],
		desc:
			"TV Show Info is a page that allows users to: Filter shows (Fetchs from Maze API), Jump to Episode in list.",
		role: "UX Designer, FrontEnd Developer.",
		tech: "HTML, CSS, JavaScript, React",
		challenge: "",
		solution: "",
		source: {
			url: "https://todobot.netlify.app",
			github:
				"https://github.com/milesuno/to-do-app-react",
			trello: "",
		}

	},
	{
		key: 11,
		id: "p11",
		type: "projects",
		name: "Webcam App",
		img: ["#"],
		desc:
			"TV Show Info is a page that allows users to: Filter shows (Fetchs from Maze API), Jump to Episode in list.",
		role: "UX Designer, FrontEnd Developer.",
		tech: "HTML, CSS, JavaScript, React",
		challenge: "",
		solution: "",
		source: {
			url: "https://webcam-fun.netlify.app",
			github:
				"https://github.com/milesuno/webcam-fun-react",
			trello: "",
		}

	},
	{
		key: 12,
		id: "p12",
		type: "projects",
		name: "Speech Detection",
		img: ["#"],
		desc:
			"TV Show Info is a page that allows users to: Filter shows (Fetchs from Maze API), Jump to Episode in list.",
		role: "UX Designer, FrontEnd Developer.",
		tech: "HTML, CSS, JavaScript, React",
		challenge: "",
		solution: "",
		source: {
			url: "https://speech-to-text-react.netlify.app/",
			github:
				"https://github.com/milesuno/speech-to-text-react",
			trello: "",
		}

	},
	{
		key: 13,
		id: "p13",
		type: "projects",
		name: "Geolocation App",
		img: ["#"],
		desc:
			"TV Show Info is a page that allows users to: Filter shows (Fetchs from Maze API), Jump to Episode in list.",
		role: "UX Designer, FrontEnd Developer.",
		tech: "HTML, CSS, JavaScript, React",
		challenge: "",
		solution: "",
		source: {
			url: "https://geolocation-react.netlify.app",
			github:
				"https://github.com/milesuno/geolocation-react",
			trello: "",
		}

	},
	{
		key: 14,
		id: "p14",
		type: "projects",
		name: "Text to Speech Synthesis",
		img: ["#"],
		desc:
			"TV Show Info is a page that allows users to: Filter shows (Fetchs from Maze API), Jump to Episode in list.",
		role: "UX Designer, FrontEnd Developer.",
		tech: "HTML, CSS, JavaScript, React",
		challenge: "",
		solution: "",
		source: {
			url: "https://text-to-speech-react.netlify.app/",
			github:
				"https://github.com/milesuno/text-to-speech-synth-react",
			trello: "",
		}

	},
];

export default projects;
