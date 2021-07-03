import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider } from "../firebase";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
        console.log(userPhoto);
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LogInContainer>
          <LogIn onClick={signIn}>LogIn</LogIn>
        </LogInContainer>
      ) : (
        <>
          <NavMenu>
            <Link to={`/`}>
              <img src="/images/home-icon.svg" />
              <span>Home</span>
            </Link>
            <a href="#">
              <img src="/images/search-icon.svg" />
              <span>Search</span>
            </a>
            <a href="#">
              <img src="/images/watchlist-icon.svg" />
              <span>WatchList</span>
            </a>
            <a href="#">
              <img src="/images/original-icon.svg" />
              <span>Original</span>
            </a>
            <a href="#">
              <img src="/images/movie-icon.svg" />
              <span>Movie</span>
            </a>
            <a href="#">
              <img src="/images/series-icon.svg" />
              <span>Series</span>
            </a>
          </NavMenu>

          <LogOutCon>
            <ProfileImg onClick={signOut} src={userPhoto} />
            <LogOut>Sign Out</LogOut>
          </LogOutCon>
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  background: black;
  display: flex;
  align-items: center;
  overflow: hidden;
  @media (max-width: 680px) {
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  height: 85px;
  width: 85px;
  margin-left: 30px;
  max-height: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 25px;
  padding-top: 5px;

  @media (max-width: 680px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    margin: 9px 11px 0 11px;

    img {
      height: 20px;
    }
    span {
      letter-spacing: 1.67px;
      font-size: 16px;
      position: relative;
      &:after {
        content: "";
        background-color: #fff;
        height: 2px;
        position: absolute;
        left: -1px;
        right: -1px;
        bottom: -6px;
        transform: scalex(0);
        /* transform: left center; */
        opacity: 0;
        transition: all 270ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scalex(1);
        opacity: 1;
      }
    }
  }
`;

const ProfileImg = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  /* margin-right: 50px; */

  @media (max-width: 680px) {
    height: 40px;
    width: 40px;
  }
`;

const LogIn = styled.button`
  border: 1px solid white;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px 15px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    border-color: transparent;
    color: #000;
  }
`;

const LogInContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 20px;
`;

const LogOut = styled.small`
  border: 0.5px solid white;
  border-radius: 3px;
  padding: 4px 0;
  background-color: rgb(31, 29, 29);
  width: 80px;
  text-align: center;
  position: fixed;
  letter-spacing: 1.5px;
  top: 66px;
  right: 55px;
  opacity: 0;

  @media (max-width: 680px) {
    top: 60px;
    right: 50px;
  }
`;

const LogOutCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 50px;
  position: relative;
  cursor: pointer;
  &:hover {
    ${LogOut} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
