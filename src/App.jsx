import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<header>
				<NavBar />
			</header>
			<main>
				<ItemListContainer greeting="This is ItemListContainer prop" />
			</main>
		</div>
	);
};

export default App;
