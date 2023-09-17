import React, { useState } from 'react';
import { InputText } from './components/InputText';
import { OrderedList } from './components/OrderedList';

import './App.css';

const App = () => {

	console.log('Hello from bun runner!')

	const [itemsList, setItemsList] = useState(['uno', 'dos']);

	const handleAddItem = (value) => {
		if (itemsList.includes(value)) return;
		setItemsList([...itemsList, value]);
	};

	return (
		<>
			<h1>App</h1>
			<p>vite4, bun, react, javascript</p>

			<div className='container'>
				<InputText handleNewItem={handleAddItem} />

				<OrderedList itemsList={itemsList} />
			</div>
		</>
	);
};

export default App;
