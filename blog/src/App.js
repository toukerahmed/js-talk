import { Header, Sidebar, Blogs } from './Components';

import './App.css';

const App = () => {

	return (
		<>
			<Header title="Blog Header" />
			<div className="container-full-width">
				<Sidebar />
				<Blogs/>
			</div>
		</>
	);
};

export default App;
