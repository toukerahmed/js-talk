import { useState } from 'react';
import { Header, Sidebar } from './Components';

import './App.css';

const App = () => {
	const [value, setValue] = useState(0);
	const [message, setMessage] = useState('Counting');

	const onClickHandler = (event) => {
		event.preventDefault();
		const _value = value + 1;
		if (_value > 9) {
			setMessage('Max value will be 10');
			setValue(0);
		} else {
			setMessage('Counting');
			setValue(_value);
		}
	};

	return (
		<>
			<Header number={value} title="Blog Header" />
			<div className="container-full-width">
				<Sidebar />
				<div className="container">
					<h3>
						{message} - {value}
					</h3>
					<button onClick={onClickHandler}>Increase Number</button>
				</div>
			</div>
		</>
	);
};

export default App;
