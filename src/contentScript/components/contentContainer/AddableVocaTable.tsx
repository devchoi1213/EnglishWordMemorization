import React from "react";
import VocaTable from "./VocaTable";
const AddVocaImg = chrome.runtime.getURL('images/add-voca.png');

function AddableVocaTable({ curCategory, vocas }) {
	
	return (
		<>
			<div className={'flex items-center justify-between mt-5'}>
				<p className={'font-bold text-xl'}> {curCategory.category} </p>
				<img className={'w-6 h-auto cursor-pointer'} src={AddVocaImg} alt={'Add Voca Image'} />
			</div>
			<VocaTable vocas={ vocas } />
		</>
	)
}

export default AddableVocaTable;