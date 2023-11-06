import React from "react";
import VocaRow from "./VocaRow";

function VocaTable({vocas}) {
	
	return (
		<>
			<ul className={'list-none'}>
				{vocas.map(voca =>
					<li className={'cursor-pointer'} key={voca.id}>
						<VocaRow
							english={voca.english}
							meaning={voca.meaning}/>
					</li>
				)}
			</ul>
		</>
	)
}

export default VocaTable;