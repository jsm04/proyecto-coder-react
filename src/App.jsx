import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<header>
				<NavBar />
			</header>
			<main className="app-main">
				<ItemListContainer SearchTitle="Celulares" />
			</main>
		</div>
	);
};

export default App;
