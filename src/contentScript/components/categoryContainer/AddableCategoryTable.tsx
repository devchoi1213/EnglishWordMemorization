import React from "react";
import CategoryTable from "./CategoryTable";
const AddCategoryImg = chrome.runtime.getURL('images/add-category.png');

function AddableCategoryTable({ categories, curCategory, handleCategoryClick }) {
	return (
		<div className={'w-11/12 m-auto'}>
			<div className={'flex flex-row-reverse'}>
				<img className={'w-6 h-auto cursor-pointer'} src={AddCategoryImg} alt={'Add Category Image'} />
			</div>
			<CategoryTable
				categories={categories}
				curCategory={curCategory}
				handleCategoryClick={handleCategoryClick}
			/>
		</div>
	)
}

export default AddableCategoryTable;