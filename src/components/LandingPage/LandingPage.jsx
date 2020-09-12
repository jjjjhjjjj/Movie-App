import React, { useEffect, useState } from 'react';
import GridCards from '../commons/GridCards';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../config';
import MainImage from './Section/MainImage';
import { Row } from 'antd';
import 'antd/dist/antd.css';
import { useCallback } from 'react';

const LandingPage = () => {
	const [movies, setMovies] = useState([]);
	const [mainMovieImg, setMainMovieImg] = useState();
	const [currentPage, setCurrentPage] = useState();

	useEffect(() => {
		const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
		fetchMovies(endpoint);
	}, []);

	const fetchMovies = useCallback(
		endpoint => {
			fetch(endpoint)
				.then(response => response.json())
				.then(response => {
					setMovies([...movies, ...response.results]);
					setCurrentPage(response.page);
					if (response.page === 1) {
						setMainMovieImg(response.results[0]);
					}
				});
		},
		[movies],
	);

	const loadMoreItems = useCallback(() => {
		const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
			currentPage + 1
		}`;
		fetchMovies(endpoint);
	}, [currentPage]);

	return (
		<div style={{ width: '100%', margin: '0' }}>
			{/* Main Image */}
			{mainMovieImg && (
				<MainImage
					image={`${IMAGE_BASE_URL}original${mainMovieImg.backdrop_path}`}
					title={mainMovieImg.original_title}
					text={mainMovieImg.overview}
				/>
			)}

			<div style={{ width: '85%', margin: '1rem auto' }}>
				<h2>Movie by latest</h2>
				<hr />
				{/* Movie Grid cards */}
				<Row gutter={[16, 16]}>
					{movies &&
						movies.map((movie, index) => (
							<React.Fragment key={index}>
								<GridCards
									landingPage
									image={movie.poster_path && `${IMAGE_BASE_URL}w500${movie.poster_path}`}
									movieId={movie.id}
									movieName={movie.original_title}
								/>
							</React.Fragment>
						))}
				</Row>
			</div>

			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<button type="button" onClick={loadMoreItems}>
					Load More
				</button>
			</div>
		</div>
	);
};

export default LandingPage;
