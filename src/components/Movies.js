import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";

function Movies() {
  const movies = useSelector(selectMovies);

  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`detail/${movie.id}`}>
                <img src={movie.cardImg} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  margin: 36px 0;
  h4 {
    margin: 18px 0;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 680px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition-duration: 600ms;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition-duration: 600ms;

  &:hover {
    transform: scale(1.06);
    border: 3px solid #fff;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
