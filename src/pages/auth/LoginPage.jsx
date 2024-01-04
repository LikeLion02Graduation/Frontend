import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { initSignUp } from "../../redux/signupSlice";

//images
import kakaologo from "../../assets/images/kakao-logo.svg";

//api
import { PostLogin, KAKAO_AUTH_URL } from "../../api/user";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //아이디/비밀번호 입력
  const [formData, setFormData] = useState({
    userid: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  //로그인 함수
  const login = (event) => {
    event.preventDefault();

    if (formData.userid.trim() === "") {
      alert("아이디를 입력해주세요.");
    } else if (formData.password.trim() === "") {
      alert("비밀번호를 입력해주세요.");
    } else {
      try {
        PostLogin(formData.userid, formData.password);
        alert("로그인에 성공했습니다!");
        navigate("/");
      } catch (error) {
        console.error("로그인 실패 ", error);
      }
    }
  };

  //회원가입 하러 가기
  const signup = () => {
    dispatch(initSignUp());
    navigate("/auth/signup");
  };

  const loginWithKakao = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Wrapper>
      <Main>
        nae chin man <br />
        MAP
      </Main>
      <Container>
        <input
          type="text"
          placeholder="아이디를 입력하세요.."
          name="userid"
          value={formData.userid}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="비밀번호를 입력하세요.."
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </Container>
      <LongBtn onClick={login} style={{ background: "var(--white)", color: "var(--black1)" }}>
        Login
      </LongBtn>
      <OR>OR</OR>
      <LongBtn onClick={signup}>회원 가입</LongBtn>
      <Kakao src={kakaologo} alt="kakao login" onClick={loginWithKakao} />
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  overflow-x: hidden;
  background: var(--white);
  font-family: "Hack Regular";
`;

const Main = styled.div`
  padding-top: 10vh;
  padding-bottom: 7vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 28vh;
  max-height: 244px;
  border-bottom: 1.5px solid var(--black1);
  background-color: var(--yellow);
  z-index: 1;

  color: var(--black1);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 18px;
  font-weight: 400;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-shrink: 0;

  input {
    width: 110%;
    height: 61px;
    border-bottom: 1.5px solid var(--black1);
    background: var(--gray);

    color: var(--black3);
    text-align: center;
    font-family: "Hack Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 145%; /* 20.3px */
    letter-spacing: 1.4px;

    &::placeholder {
      opacity: 0.4;
    }
  }

  input:nth-child(2) {
    border-top: 1.5px solid var(--black1);
    margin-top: 9vh;
    margin-bottom: 11vh;
    transform: rotate(-15deg);

    @media (min-width: 820px) {
      transform: rotate(-13deg);
    }

    @media (min-width: 1025px) {
      transform: rotate(-10deg);
    }

    @media (min-height: 1052px) {
      margin-top: 16vh;
      margin-bottom: 16vh;
    }
  }
`;

const LongBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 445px;
  height: 55px;
  flex-shrink: 0;
  border: 1.5px solid var(--black1);
  box-sizing: border-box;
  background-color: var(--black1);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);

  color: var(--white);
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.75px;
`;

const OR = styled.div`
  margin: 4vh auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Kakao = styled.img`
  margin-top: 4vh;
  width: 57px;
  height: 57px;
  flex-shrink: 0;
  border-radius: 50%;
`;
