import React from 'react';
import { Col } from 'antd';

const GridCards = ({ movieId, image, movieName, landingPage, characterName }) => {
	if (landingPage) {
		return (
			<Col lg={6} md={8} xs={24}>
				<div style={{ position: 'relative' }}>
					<a href={`/Movie-App/movie/${movieId}`}>
						<img src={image} alt={movieName} style={{ width: '100%', height: '320px' }} />
					</a>
				</div>
			</Col>
		);
	} else {
		return (
			<Col lg={6} md={8} xs={24}>
				<div style={{ position: 'relative' }}>
					<img
						src={image === null ? 'https://via.placeholder.com/320?text=No+Image' : image}
						alt={characterName}
						style={{ width: '100%', height: '320px' }}
					/>
				</div>
			</Col>
		);
	}
};

export default GridCards;
