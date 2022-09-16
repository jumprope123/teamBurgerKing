import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Brand from './pages/Brand';
import Menu from './pages/Menu';
import Shop from './pages/Shop';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Menu />}></Route>
					<Route path="/Menu" element={<Menu />}></Route>
          			<Route path="/Shop" element={<Shop />}></Route>
					<Route path="/Brand" element={<Brand />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
        		<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;