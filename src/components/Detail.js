import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        } else {
          // Redirect to home page
        }
      });
  }, []);
  console.log(movie);
  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} />
          </Background>
          <Logo>
            <img src={movie.titleImg} />
          </Logo>
          <Buttons>
            <Play>
              <img src="/images/play-icon-black.png" />
              <span>PLAY</span>
            </Play>
            <Trailer>
              <img src="/images/play-icon-white.png" />
              <span>Trailer</span>
            </Trailer>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupButton>
              <img src="/images/group-icon.png" />
            </GroupButton>
          </Buttons>
          <Info>
            <p>{movie.subTitle}</p>
          </Info>
          <Story>
            <p>{movie.description}</p>
          </Story>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 45px calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.6;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Logo = styled.div`
  padding-left: 30px;
  max-width: 300px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Buttons = styled.div`
  padding: 25px 30px;
  max-width: 400px;
  /* border: 1px solid white; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Play = styled.button`
  cursor: pointer;
  padding: 13px 27px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(249, 249, 249);
  border: 1.4px solid white;
  font-size: 14px;
  span {
    letter-spacing: 1.4px;
  }
  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const Trailer = styled.button`
  cursor: pointer;
  padding: 13px 27px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  /* margin: 0 15px; */
  border: 1.4px solid white;
  font-size: 14px;
  span {
    letter-spacing: 1.4px;
  }
  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: rgb(148, 148, 148);
  }
`;

const AddButton = styled.button`
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border: 1.4px solid white;
  span {
    font-size: 25px;
    padding-bottom: 3px;
  }
`;

const GroupButton = styled.button`
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.4px solid white;
  background-color: rgba(0, 0, 0, 50);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  padding: 0px 30px;
  p {
    max-width: 400px;
    display: flex;
    align-items: center;
    font-size: 12px;
  }
`;

const Story = styled.div`
  padding: 10px 30px;
  /* border: 2px solid white; */
  max-width: 650px;

  p {
    font-size: 16px;
    line-height: 1.4;
  }
`;
