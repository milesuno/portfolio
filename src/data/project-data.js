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

import baImg01 from "./projects/ba/ba-1.png";
import baImg02 from "./projects/ba/ba-2.png";
import baImg03 from "./projects/ba/ba-3.png";

import vfImg01 from "./projects/vf/vf-1.png";
import vfImg02 from "./projects/vf/vf-2.png";
import vfImg03 from "./projects/vf/vf-3.png";

import hmuImg01 from "./projects/hmu/hmu-1.png";
import hmuImg02 from "./projects/hmu/hmu-2.png";
import hmuImg03 from "./projects/hmu/hmu-3.png";
import hmuImg04 from "./projects/hmu/hmu-4.png";

import bhmImg01 from "./projects/bhm/bhm-1.png";
import bhmImg02 from "./projects/bhm/bhm-2.png";
import bhmImg03 from "./projects/bhm/bhm-3.png";

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

import drumkitImg00 from "./projects/keyboard-drumkit.png";

import citysearcherimg00 from "./projects/city-seacher.png";

import paintImg00 from "./projects/paint-app.png";

import todobotImg00 from "./projects/todo-bot.png";

import speechtotextImg00 from "./projects/speech-detection.png";

import geolocationImg00 from "./projects/geolocation-app.png";

import texttospeechImg00 from "./projects/text-to-speech.png";

import examplehomesImg00 from "./projects/example-homes/example-homes.png";
import examplehomesImg01 from "./projects/example-homes/example-homes-2.png";
import examplehomesImg02 from "./projects/example-homes/example-homes-3.png";

const projects = [
  {
    key: 1,
    id: "p1",
    type: "app",
    name: "HitMeUp (HMU)",
    img: [hmuImg01, hmuImg02, hmuImg03, hmuImg04],
    desc: "HitMeUp (HMU) is a Social/Dating Platform. User's create profiles and negotiate terms for a value trade of any skill, service or Item they are offering.",
    short_desc: "Social/Dating Platform",
    role: "Creative Director, UX Designer, Project Management.",
    tech: "NextJS, Tailwind, MongoDB, OAuth, Stripe",
    challenge: "Cross Platform compatiability",
    solution:
      "Added requried IOS events for effective cross platform capabilities",
    source: {
      url: "https://hitmeup.live",
      github: "",
      trello: "",
    },
  },
  {
    key: 2,
    id: "p2",
    type: "app",
    name: "Business Health Metrics",
    img: [bhmImg01, bhmImg02, bhmImg03],
    desc: "Business Health Metrics is a Web Analytics Development Platform. User's can utilise available tools to help develop their Web Analytics. They can also book for Analytics services.",
    short_desc: "Web Analytics Development Platform",
    role: "Creative Director, UX Designer, Project Management.",
    tech: "React, CSS, JavaScript, MongoDB, AI Agent.",
    challenge: "Integrating AI Systems into the platform",
    solution: "Finding practical use case for Agentic Systems: Articles",
    source: {
      url: "https://businesshealthmetrics.com",
      github: "",
      trello: "",
    },
  },
  {
    key: 3,
    id: "p3",
    type: "app",
    name: "Ventures Foundry",
    img: [vfImg01, vfImg02, vfImg03],
    desc: "Ventures Foundry is a Web Development and Branding Platform.  User's can utilise available tools to help develop their Web Apps. They can also book for Web Development services.",
    short_desc: "Web Development and Branding Platform",
    role: "Creative Director, UX Designer, Project Management.",
    tech: "HTML, CSS, JavaScript, PHP, SQL.",
    challenge: "Syncing up schedules with remote team mates.",
    solution:
      "Practiced agile principles to maximise the effectiveness of collabrative work.",
    source: {
      url: "https://venturesfoundry.com",
      github: "",
      trello: "",
    },
  },
  {
    key: 4,
    id: "p4",
    type: "app",
    name: "BarterAnything",
    img: [baImg01, baImg02, baImg03],
    desc: "BarterAnything is a Cashless Ecommerce Platform. User's create profiles and negotiate terms for a value trade of any skill, service or Item they are offering.",
    short_desc: "Ecommerce Trading Platform",
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
    key: 5,
    id: "p5",
    type: "analytics",
    name: "HitMeUp (HMU)",
    img: [hmuImg01, hmuImg02, hmuImg03, hmuImg04],
    desc: "HitMeUp (HMU) was set up with a complete Analytics suite - allowing: Click Traffic, Product Analytics, User Journey Analysis",
    short_desc: "Social/Dating Platform",
    role: "Head Analytics Architect",
    tech: "GTM, GA4, PostHog, HotJar",
    challenge: "",
    solution: "",
    source: {
      url: "https://hitmeup.live/",
      github: "",
      trello: "",
    },
  },
  {
    key: 6,
    id: "p6",
    type: "analytics",
    name: "Business Health Metrics",
    img: [bhmImg01, bhmImg02, bhmImg03],
    desc: "Business Health Metrics was set up with a complete Analytics suite - allowing: Click Traffic, Product Analytics, User Journey Analysis",
    short_desc: "Ecommerce Trading Platform",
    role: "Head Analytics Architect",
    tech: "GTM, GA4, PostHog, HotJar",
    challenge: "",
    solution: "",
    source: {
      url: "https://barteranything.com/",
      github: "",
      trello: "",
    },
  },
  {
    key: 7,
    id: "p7",
    type: "analytics",
    name: "Ventures Foundry",
    img: [vfImg01, vfImg02, vfImg03],
    desc: "Venture Foundry was set up with a complete Analytics suite - allowing: Click Traffic, Product Analytics, User Journey Analysis",
    short_desc: "Web Development and Branding Platform",
    role: "Head Analytics Architect",
    tech: "GTM, GA4, PostHog, HotJar",
    challenge: "",
    solution: "",
    source: {
      url: "https://barteranything.com/",
      github: "",
      trello: "",
    },
  },
  {
    key: 8,
    id: "p8",
    type: "analytics",
    name: "BarterAnything",
    img: [baImg01, baImg02, baImg03],
    desc: "BarterAnything is a Cashless Ecommerce Platform. User's create profiles and negotiate terms for a value trade of any skill, service or Item they are offering.",
    short_desc: "Ecommerce Trading Platform",
    role: "Head Analytics Architect",
    tech: "GTM, GA4, PostHog, HotJar",
    challenge: "",
    solution: "",
    source: {
      url: "https://barteranything.com/",
      github: "",
      trello: "",
    },
  },
  {
    key: 10,
    id: "p10",
    type: "demo",
    name: "CYF Glossary",
    img: [
      cyfglossaryImg01,
      cyfglossaryImg02,
      cyfglossaryImg03,
      cyfglossaryImg04,
      cyfglossaryImg05,
      cyfglossaryImg06,
      cyfglossaryImg07,
      cyfglossaryImg00,
    ],
    desc: "My team and I, we responsible for delivering a glossary for technology-based technical terms.We were a team of 4 with a deadline of 24 days. I was the Project Manager and Front-End developer for the project. We successfully completed a working product on time and demonstrated its functionality to stakeholders.",
    short_desc: "Web Development Glossary",
    role: "UX/UI designer, Prototyping, Front-end Development, Project Management.",
    tech: "HTML, CSS, JavaScript, React, NodeJS, Express, MongoDB.",
    challenge: "Getting team to collaborate for product demoing.",
    solution:
      "Encouraging inexperienced developers with practice, feedback and advice.",
    source: {
      url: "https://cyf-glossary-app.netlify.com/",
      github: "https://tinyurl.com/yxoq9vxm",
      trello: "https://trello.com/b/9OxYYRjg",
    },
  },
  {
    key: 14,
    id: "p14",
    type: "demo",
    name: "Example Homes",
    img: [examplehomesImg00, examplehomesImg01, examplehomesImg02],
    desc: "Example Homes is an dynamic frontend prototype for a fictional furniture company.",
    short_desc: "Demo Ecommerce Platform",
    role: "UX Designer, FrontEnd Developer.",
    tech: "HTML, CSS, JavaScript",
    challenge: "",
    solution: "",
    source: {
      url: "https://example-homes.netlify.app/",
      github: "https://github.com/milesuno/comfy-house-js",
      trello: "",
    },
  },
  {
    key: 13,
    id: "p13",
    type: "demo",
    name: "Text to Speech Synthesis",
    img: [texttospeechImg00],
    desc: "Text to Speech allows users to select a variety of voices to speak the text they have submitted.",
    short_desc: "Text to Speech App",
    role: "UX Designer, FrontEnd Developer.",
    tech: "HTML, CSS, JavaScript, React",
    challenge: "",
    solution: "",
    source: {
      url: "https://text-to-speech-react.netlify.app/",
      github: "https://github.com/milesuno/text-to-speech-synth-react",
      trello: "",
    },
  },
  {
    key: 7,
    id: "p7",
    type: "demo",
    name: "Drum Kit",
    img: [drumkitImg00],
    desc: "Drumkit allows users to play various drumkit sounds on there keyboard, mouse or touch. Users can record there creations and play them back on demand.",
    short_desc: "Drum Kit App",
    role: "UX Designer, FrontEnd Developer.",
    tech: "HTML, CSS, JavaScript, React",
    challenge: "",
    solution: "",
    source: {
      url: "https://keyboard-drumkit.netlify.com/",
      github: "https://github.com/milesuno/keyboard-drumkit",
      trello: "",
    },
  },
  {
    key: 9,
    id: "p9",
    type: "demo",
    name: "Paint App",
    img: [paintImg00],
    desc: "Paint App allows users to paint on a HTML canvas. Users can pick the stroke style, size and colour.",
    short_desc: "Painting App",
    role: "UX Designer, FrontEnd Developer.",
    tech: "HTML, CSS, JavaScript, React",
    challenge: "",
    solution: "",
    source: {
      url: "https://paint-react.netlify.app",
      github: "https://github.com/milesuno/paint-react",
      trello: "",
    },
  },
  {
    key: 10,
    id: "p10",
    type: "demo",
    name: "To Do Bot",
    img: [todobotImg00],
    desc: "To do bot is an app that allows users to add and delete items to a list.",
    short_desc: "To Do List App",
    role: "UX Designer, FrontEnd Developer.",
    tech: "HTML, CSS, JavaScript, React",
    challenge: "",
    solution: "",
    source: {
      url: "https://todobot.netlify.app",
      github: "https://github.com/milesuno/to-do-app-react",
      trello: "",
    },
  },
  {
    key: 11,
    id: "p11",
    type: "demo",
    name: "Speech Detection",
    img: [speechtotextImg00],
    desc: "Speech Detection uses the users microphone to capture their speech and display it on the page.",
    short_desc: "Speech to Text App",
    role: "UX Designer, FrontEnd Developer.",
    tech: "HTML, CSS, JavaScript, React",
    challenge: "",
    solution: "",
    source: {
      url: "https://speech-to-text-react.netlify.app/",
      github: "https://github.com/milesuno/speech-to-text-react",
      trello: "",
    },
  },
  {
    key: 12,
    id: "p12",
    type: "demo",
    name: "Geolocation App",
    img: [geolocationImg00],
    desc: "Geolocation allows users to get realtime coordinates on their orientation and travel speed.",
    short_desc: "Geolocation App",
    role: "UX Designer, FrontEnd Developer.",
    tech: "HTML, CSS, JavaScript, React",
    challenge: "",
    solution: "",
    source: {
      url: "https://geolocation-react.netlify.app",
      github: "https://github.com/milesuno/geolocation-react",
      trello: "",
    },
  },
  {
    key: 3,
    id: "p3",
    type: "demo",
    name: "See Your Future",
    img: [
      seeyourfutureImg00,
      seeyourfutureImg01,
      seeyourfutureImg02,
      seeyourfutureImg03,
    ],
    desc: "My team and I entered a competition hosted by Capgemini. Our object was to deliver a platform to connect inexperienced developers with companies, helping them to find out more about the industry and job roles. I was the Project Manager and Front-End developer for the project. We were a team of 8 and had a 30-day deadline. We successfully delivered a working product meeting the deadline and won ‘Best Engineered’ and ‘Most Innovative’ awards - 2 of 3 awards available. I was voted by my peers to receive the ‘Hero Helper’ award, due to my contributions.",
    short_desc: "Demo Campaign Page",
    role: "UX/UI Designer, Front-end Developer, Project Management.",
    tech: "HTML, CSS, JavaScript, React",
    challenge: "Making sure team developer work to a high standard.",
    solution:
      "Applying Agile practices for product delivery and utilising unit testing and acceptance testing.",
    source: {
      url: "https://stoic-euclid-1582e1.netlify.com/",
      github: "https://tinyurl.com/y2d5357d",
      trello: "",
    },
  },
  {
    key: 8,
    id: "p8",
    type: "demo",
    name: "City Searcher",
    img: [citysearcherimg00],
    desc: "City Search allow users to search for Cities and States in america.",
    short_desc: "City and State Search App: USA",
    role: "UX Designer, FrontEnd Developer.",
    tech: "HTML, CSS, JavaScript, React",
    challenge: "",
    solution: "",
    source: {
      url: "https://city-searcher.netlify.app",
      github: "https://github.com/milesuno/type-ahead-city-seacher",
      trello: "",
    },
  },
  {
    key: 4,
    id: "p4",
    type: "demo",
    name: "Weather App",
    img: [weatherappImg00],
    desc: "The Weather App fetchs live data from the Openweathermap api. It displays the current weather as well as the weather over a 24 hour window.",
    short_desc: "Weather App",
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
    type: "demo",
    name: "Hotel React",
    img: [hotelreactImg00],
    desc: "Hotel React is a product landing page that allows users to: Link off to tourist locations, search for bookings based on name or room ID, Add orders a basket and submit their order.",
    short_desc: "Demo Hotel Booking App",
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
    type: "demo",
    name: "TV Show Info",
    img: [tvshowImg00],
    desc: "TV Show Info is a page that allows users to: Filter shows (Fetchs from Maze API), Jump to Episode in list.",
    short_desc: "Demo TV Show Search App",
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
];

export default projects;
