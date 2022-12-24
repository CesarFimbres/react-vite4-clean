import { useState } from 'react';
import { InputText } from './assets/components/InputText';
import { OrderedList } from './assets/components/OrderedList';

import './App.css';

const App = () => {
	const [itemsList, setItemsList] = useState(['uno', 'dos']);

	const handleAddItem = (value) => {
		if (itemsList.includes(value)) return;
		setItemsList([...itemsList, value]);
	};

	return (
		<>
			<h1>App</h1>
			<p>vite4, yarn, react, javascript</p>

			<div className='container'>
				<InputText handleNewItem={handleAddItem} />

				<OrderedList itemsList={itemsList} />
			</div>
		</>
	);
};

export default App;
