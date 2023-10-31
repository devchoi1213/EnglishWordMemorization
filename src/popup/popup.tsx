import React, {useEffect} from "react";
import '../assets/tailwind.css'
// import './popup.css'

const handleInput = (e) => {
	const name = e.target[0].value;
	console.log(name);
	chrome.storage.local.set({ name }).then(() => {
		console.log(`Name is set to ${ name }`)
	})
}

const Popup = () => {
	useEffect(() => {
		chrome.storage.local.get(["name"]).then((result) => {
			console.log("Value currently is " + result.value);
		})
	})
	
	return (
		<div className="h-screen">
			<form className="flex justify-center items-center py-44">
				<input type="text" name="name" className="bg-gray ring-black px-4 py-4" placeholder="Enter a Word" />
				<button className="py-4 px-3 bg-indigo-500 text-white m-2" >Submit</button>
			</form>
		</div>
	)
};

export default Popup;