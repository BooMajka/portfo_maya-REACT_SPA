import React, { useState } from "react";

function Project() {
	const [projects] = useState([
		{
			id:"zero",
			title: "Natours",
			technology: "SASS, CSS, HTML, RWD, HTML, RWD",
			url: "https://xenodochial-bell-d7e5c6.netlify.app",
		},
		{
			id:"one",
			title: "Puckwudgie House",
			technology: "Node.js, Express.js, RESTful API, Handlebars.js, MySQL",
			url: "https://sheltered-coast-08352.herokuapp.com/",
		},
		{
			id:"two",
			title: "DigitalClock_wDate",
			technology: "JavaScript, CSS animation, optional React version",
			url: "https://priceless-banach-921707.netlify.app",
		},
		{
			id:"three",
			title: "Budget_app",
			technology:
				"React.JS Hooks, Context API, useReducer, Browser Local Storage",
			url: "https://zealous-clarke-dfa7ef.netlify.app",
		},
		{
			id:"four",
			title: "Resto_food-website",
			technology: "JavaScript ES6, RWD, Firebase, Swiper.JS",
			url: "https://epic-bose-5f10d8.netlify.app/index.html",
		},
		{
			id:"five",
			title: "Rustico",
			technology: "JavaScript library, CSS, HTML, RWD",
			url: "https://reverent-shockley-4c5e75.netlify.app",
		},
		{
			id:"six",
			title: "WorkDayScheduler_app",
			technology: "jQuery, Moment.JS, HTML, CSS, HTML, CSS",
			url: "https://boomajka.github.io/WorkDayScheduler_app/",
		},
		{
			id:"seven",
			title: "Note-Taker_NodeJS",
			technology: "JavaScript, Express.JS, Heroku, nodemon, uuid",
			url: "https://maya-note-taker.herokuapp.com/notes",
		},
	]);

	return (
		<>
			<div className="header">
				<h3>Portfolio</h3>
			</div>
			<div className="row">
				{projects.map((el, i) => (
					<div className="card" key={i}>
						<div className={el.id}></div>
						<div className="card-body">
							<h5 className="card-title">{el.title}</h5>
							<p className="card-text">
								{el.technology}
							</p>
							<a href={el.url} className="btn btn-primary" target="blank">
								Go somewhere
							</a>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default Project;
