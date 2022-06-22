import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/aos/aos.css';

import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AOS from 'aos';
import QRPreview from './components/QRPreview/QRPreview';
import RouteList from './components/RouteList/RouteList';

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<QRPreview />
			<RouteList />
		</BrowserRouter>
	);
}

export default App;
