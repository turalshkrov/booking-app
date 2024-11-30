import { Route, Routes } from "react-router-dom";

import "./App.css";
import { MainLayout } from "@/components";
import { Home, Destination, Hotel, Checkout } from "@/pages";

function App() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/destination/:id" element={<Destination />} />
				<Route path="/hotels/:id" element={<Hotel />} />
			</Route>
			<Route path="/checkout" element={<Checkout />} />
			<Route path="*" element={<h1>404</h1>} />
		</Routes>
	);
}

export default App;
