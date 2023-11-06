import React from "react";
import AddableCategoryTable from "./AddableCategoryTable";

function CategoryContainer({ isSideBarOpened, categories, curCategory, handleCategoryClick }) {
	return (
		<>
			<div className={`voca-mastery-app-category-container ${isSideBarOpened ? '' : 'sidebar-hidden'}`}>
				<h1>Sidebar</h1>
				<AddableCategoryTable categories={categories} curCategory={curCategory} handleCategoryClick={handleCategoryClick}/>
			</div>
		</>
	)
}

export default CategoryContainer;