import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css';
import ContentScript from "./contentScript";
import './contentScript.css';

function init() {
	document.body.innerHTML += `"<div id="app"></div>"`
	const appContainer = document.getElementById('app')
	if (!appContainer) {
		throw new Error("Can not find AppContainer");
	}
	document.body.appendChild(appContainer)
	const root = createRoot(appContainer)
	root.render(<ContentScript />);
}

init();