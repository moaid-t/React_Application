import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Inside>
        <Logos src="images/cta-logo-one.svg" />
        <Signup href="#">Get all there</Signup>
        <Description>
          The largest media and entertainment companies in the world. The
          company was founded on October 16, 1923, by brothers Walt and Roy
          Disney in the form of an animation studio.
        </Description>
        <Studios src="images/cta-logo-two.png" />
      </Inside>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    background-repeat: no-repeat;
    background-image: url("images/login-background.jpg");
    background-size: cover;
    background-position: top;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    /* transform: scale(0.92); */
  }
`;

const Inside = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  width: 70%;
  padding: 80px 40px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Logos = styled.img`
  /* width: 90%; */
`;

const Signup = styled.a`
  width: 100%;
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  padding: 15px;
  background-color: rgb(50, 166, 219);
  font-size: 1.1rem;
  text-align: center;
  border-radius: 4px;
  letter-spacing: 1px;
  &:hover {
    background-color: rgb(185, 185, 220);
  }

  @media (max-width: 768px) {
    margin: 5px 0 0 0;
    padding: 11px;
    font-size: 13px;
  }
`;

const Description = styled.p`
  margin-top: 15px;
  font-size: 11;
  letter-spacing: 1px;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    margin-top: 6px;
  }
`;

const Studios = styled.img`
  width: 90%;
`;
