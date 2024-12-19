import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Image } from 'react-bootstrap';
import CastList from './CastList';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      setMovie(response.data);
    };

    const fetchMovieCast = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      setCast(response.data.cast);
    };

    fetchMovieDetail();
    fetchMovieCast();
  }, [id]);

  return (
    <Container
      fluid
      className="p-3 bg-black text-white"
      style={{ minHeight: '100vh' }} // Ensure full-height background
    >
      <Row className="align-items-start">
        <Col xs={12} md={4} className="mb-3">
          {movie.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              fluid
              className="rounded shadow-sm"
            />
          ) : (
            <p>No poster available</p>
          )}
        </Col>
        <Col xs={12} md={8}>
          <h2 className="mb-3">{movie.title || 'Movie Title'}</h2>
          <p className="text-muted">Rating: {movie.vote_average || 'N/A'}</p>
          <p>{movie.overview || 'No description available.'}</p>
          <p>Release Date: {movie.release_date || 'N/A'}</p>
          <h3 className="mt-4">Cast</h3>
          <CastList cast={cast} />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;
