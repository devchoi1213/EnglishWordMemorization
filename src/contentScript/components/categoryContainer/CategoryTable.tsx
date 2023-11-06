import React from "react";
import CategoryRow from "./CategoryRow";
function CategoryTable({categories, curCategory, handleCategoryClick}) {
	return (
		<>
			<ul className={'list-none'}>
				{categories.map(category =>
					<li onClick={() => handleCategoryClick(category.id)}
						key={category.id}
						className={`cursor-pointer ${curCategory['id'] === category.id ? 'bg-white' : ''}`} >
						<CategoryRow
							category={category.category}
							vocaCount={category.vocaCount}/>
					</li>
				)}
			</ul>
		</>
	)
}

export default CategoryTable;