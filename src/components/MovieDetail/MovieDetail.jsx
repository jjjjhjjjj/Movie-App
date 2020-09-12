import React, { useState } from 'react';
import { useEffect } from 'react';
import GridCards from '../commons/GridCards';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../config';
import MainImage from '../LandingPage/Section/MainImage';
import MovieInfo from './sections/MovieInfo';
import { Row } from 'antd';

const MovieDetail = props => {
	let movieId = props.match.params.movieId;
	const [movie, setMovie] = useState();
	const [casts, setCasts] = useState();
	const [actorToggle, setActorToggle] = useState(false);

	useEffect(() => {
		const endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
		const endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
		fetch(endpointInfo)
			.then(response => response.json())
			.then(response => {
				setMovie(response);
			});

		fetch(endpointCrew)
			.then(response => response.json())
			.then(response => {
				console.log(response.cast);
				setCasts(response.cast);
			});
	}, []);

	const toggleActorView = () => {
		setActorToggle(!actorToggle);
	};

	return (
		<div>
			{/* Header */}
			{movie && (
				<MainImage
					image={`${IMAGE_BASE_URL}original${movie.backdrop_path}`}
					title={movie.original_title}
					text={movie.overview}
				/>
			)}
			{/* Body   */}
			<div style={{ width: '85%', margin: '1rem auto' }}>
				{/* Movie Info */}
				{movie && <MovieInfo movie={movie} />}
				<br />

				<div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
					<button type="button" onClick={toggleActorView}>
						Toggle Actor View
					</button>
				</div>

				{/* Actors Grid  */}
				{actorToggle && (
					<Row gutter={[16, 16]}>
						{casts &&
							casts.map((cast, index) => (
								<React.Fragment key={index}>
									<GridCards
										image={cast.profile_path && `${IMAGE_BASE_URL}w500${cast.profile_path}`}
										characterName={cast.name}
									/>
								</React.Fragment>
							))}
					</Row>
				)}
			</div>
		</div>
	);
};

export default MovieDetail;
