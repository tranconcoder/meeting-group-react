import './styles/aos/aos.css';
import './styles/fonts.scss';
import './styles/reset.scss';

import AOS from 'aos';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import QRPreview from './components/QRPreview';
import RouteList from './components/RouteList';
import ToastMessage from './components/Common/ToastMessage/ToastMessage';

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<QRPreview />

			<ToastMessage />

			<RouteList />
		</BrowserRouter>
	);
}

export default App;
