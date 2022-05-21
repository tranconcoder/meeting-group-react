import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./styles/reset.scss";
import "./styles/fonts.scss";

import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path="auth" element={<AuthPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
