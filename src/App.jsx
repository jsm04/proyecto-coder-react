import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

const App = () => {
	return (
		<div className="app">
			<header>
				<NavBar />
			</header>
			<main className="app-main">
				<ItemListContainer SearchTitle="Resultado de la busqueda" />
			</main>
			<Footer />
		</div>
	);
};

export default App;
