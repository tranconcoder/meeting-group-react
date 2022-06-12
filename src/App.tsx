import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/reset.scss';
import './styles/fonts.scss';

import AOS from 'aos';
import './styles/aos/aos.css';
import RouteList from './components/RouteList/RouteList';

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<RouteList />
		</BrowserRouter>
	);
}

export default App;
