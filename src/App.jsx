import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
	return (
		<div className="app">
			<header>
				<NavBar />
			</header>
			<main className="app-main">
				<ItemListContainer SearchTitle="Resultado de la busqueda" />
				<ItemDetailContainer />
			</main>
			<Footer />
		</div>
	);
};

export default App;
