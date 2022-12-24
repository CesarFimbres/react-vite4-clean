import React from 'react'
import './orderedList.css';


export const OrderedList =({ itemsList }) => {
  return (
		<ol className='ordered_list'>
			{itemsList.map((item) => (
				<li key={item}>{item}</li>
			))}
		</ol>
	);
}
