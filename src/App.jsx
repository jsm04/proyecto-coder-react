import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';
import CartProvider from './context/CartContext';
import Footer from './components/Footer';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<header>
					<CartProvider>
						<NavBar />
					</CartProvider>
				</header>
				<main className="app-main">
					<CartProvider>
						<Routes>
							<Route
								path="/"
								element={<ItemListContainer containerTitle="Catalogo" />}
							/>
							<Route
								path="/categoria/:categoriaId"
								element={<ItemListContainer />}
							/>
							<Route
								path="/detalles/:detalleId"
								element={<ItemDetailContainer containerTitle="Detalle" />}
							/>
							<Route path="/cart" element={<CartContainer />} />
						</Routes>
					</CartProvider>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
