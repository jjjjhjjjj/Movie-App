import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			hi
			<Switch>
				<Route path="/movie/:movieId" component={MovieDetail} />
				<Route path="/" exact component={LandingPage} />
			</Switch>
		</>
	);
}

export default App;
