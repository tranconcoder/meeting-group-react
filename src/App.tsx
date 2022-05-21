import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/reset.scss";
import "./styles/fonts.scss";

import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<div>Home</div>} />
				<Route path="auth" element={<AuthPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
