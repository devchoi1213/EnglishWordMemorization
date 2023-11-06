import React from "react";

const CategoryImg = chrome.runtime.getURL('images/category.png');

function CategoryRow({category, vocaCount}) {
	
	return (
		<div className={'flex w-full h-10 justify-between items-center'}>
			<div className={'flex items-center'}>
				<img className={'w-6 h-auto mr-2'} src={CategoryImg} alt={'Category Image'}/>
				<p>{category}</p>
			</div>
			<p>{vocaCount}</p>
		</div>
	)
}

export default CategoryRow;