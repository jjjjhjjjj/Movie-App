import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Switch>
				<Route path="/" exact component={LandingPage} />
				<Route path="/movie/:movieId" component={MovieDetail} />
			</Switch>
		</>
	);
}

export default App;
