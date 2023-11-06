import React from "react";
const HamburgerButtonImg = chrome.runtime.getURL('images/hamburger.png');

function Header({ handleHamburgerClick }) {
	
	return (
		<div className={'w-full h-8 flex items-center justify-between'}>
			<img onClick={handleHamburgerClick} className={'w-5 h-auto'} src={HamburgerButtonImg} alt={'Back Button Image'} />
			<p className={'font-bold text-center'}>Voca Mastery</p>
		</div>
	)
}

export default Header;