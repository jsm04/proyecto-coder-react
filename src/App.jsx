import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<header>
					<NavBar />
				</header>
				<main className="app-main">
					<Routes>
						<Route path="/" element={<ItemListContainer containerTitle="Catalogo" />} />
						<Route path="/categoria/:categoriaId" element={<ItemListContainer containerTitle />} />
						<Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
