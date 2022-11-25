import React from "react";
import MainBlock from "./MainBlock/MainBlock";
import "./App.css";

function App() {
	//Write an app that will allow user to search among the course lessons

	// The app should contain a field where user can enter some text
	// When a user leaves the field, the search call should be performed (see code snippet)
	// The result should be shown upon the field as a lesson card
	// All errors should be handled

	// Code snippet:
	// fetch('https://react-course-api.azurewebsites.net/lesson/SEARCH_KEYWORD').then(x=>x.json)
	// where

	// SEARCH_KEYWORD  is the search text from a user

	return (
		<div className="App">
			<MainBlock />
		</div>
	);
}

export default App;
