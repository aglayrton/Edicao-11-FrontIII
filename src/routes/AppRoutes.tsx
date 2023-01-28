import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../page/Login';
import LoginMui from '../page/Login/LoginMui';
import Signup from '../page/Signup';
import { GlobalStyled } from '../theme/GlobalStyled';

function AppRoutes() {
	return (
		<>
			<GlobalStyled />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<LoginMui />} />
					<Route path="*" element={<h1>Not Found</h1>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
export default AppRoutes;
