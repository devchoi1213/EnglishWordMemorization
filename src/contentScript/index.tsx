import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css';
import ContentScript from "./contentScript";



function init() {
	const rootDiv = document.createElement('div');
	rootDiv.id = 'voca-mastery';
	document.body.appendChild(rootDiv);
	const root = createRoot(rootDiv)
	root.render(
		<React.StrictMode>
			<ContentScript />
		</React.StrictMode>
	);
}

init();