import React from "react";

function VocaRow({ english, meaning }) {
	
	return (
		<div className={'flex w-full h-10 justify-between items-center'}>
			<p>{english}</p>
			<p>{meaning}</p>
		</div>
	)
}

export default VocaRow;