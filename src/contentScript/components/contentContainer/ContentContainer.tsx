import React from "react";
import Header from "./Header";
import AddableVocaTable from "./AddableVocaTable";

function ContentContainer({ handleHamburgerClick, curCategory, vocas }) {
	
	return (
		<>
			<div className={'voca-mastery-app-content-container'}>
				<div className={'w-11/12 m-auto'}>
					<Header handleHamburgerClick={handleHamburgerClick}/>
					<AddableVocaTable curCategory={curCategory} vocas={vocas} />
				</div>
			</div>
		</>
	)
}

export default ContentContainer;