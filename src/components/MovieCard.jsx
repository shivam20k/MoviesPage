import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MovieCard.css'; // Import CSS file

const MovieCard = ({ movie }) => (
  <Container>
    <Row>
      <Col className="d-flex align-items-center justify-content-center ">
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="movie-card">
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              style={{ width: "16rem" }}
            />
           <h5 className="mt-2 text-center text-lg font-bold text-white">{movie.title}</h5>
<p className="text-center text-sm font-bold text-white">Rating: {movie.vote_average}</p>

          </div>
        </Link>
      </Col>
    </Row>
  </Container>
);

export default MovieCard;
