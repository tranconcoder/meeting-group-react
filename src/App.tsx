import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/reset.scss';
import './styles/fonts.scss';

import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import NotifyPage from './pages/NotifyPage/NotifyPage';

import AOS from 'aos';
import './styles/aos/aos.css';

function App() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="auth" element={<AuthPage />} />
				<Route path="notify" element={<NotifyPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
