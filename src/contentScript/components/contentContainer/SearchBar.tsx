import React from "react";
import { useState } from 'react';
const SearchImg = chrome.runtime.getURL('images/search.png');

function SearchBar() {
	const [isChecked, setIsChecked] = useState(false);
	
	return (
		<>
			<div className={'w-full h-7 flex items-center gap-1.5'}>
				<input className={'h-full box-border flex-grow'} type={'text'}/>
				<img className={'w-7 h-auto box-border	'} src={SearchImg} alt={"Search Image"}/>
			</div>
			
			<div>
				<input type={"checkbox"} checked={isChecked} onChange={e => {
					setIsChecked(e.target.checked)
				}}>bookmark</input>
				
				<label htmlFor="cars">--select--</label>
				<select name="cars" id="cars" form="carform">
					<option value="volvo" >Volvo</option>
					<option value="saab">Saab</option>
					<option value="opel">Opel</option>
					<option value="audi">Audi</option>
				</select>
			</div>
		</>
	)
}

export default SearchBar;