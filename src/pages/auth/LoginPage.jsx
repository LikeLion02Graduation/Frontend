import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import kakaologo from "../../assets/images/kakao-logo.svg";

const LoginPage = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/");
  };

  const signup = () => {
    navigate("/auth/signup");
  };

  return (
    <Wrapper>
      <Main>
        nae chin man <br />
        MAP
      </Main>
      <Container>
        <input type="text" placeholder="아이디를 입력하세요.." />
        <input
          type="text"
          placeholder="비밀번호를 입력하세요.."
          style={{ marginTop: "70px", marginBottom: "80px", transform: "rotate(-15deg)" }}
        />
      </Container>
      <LongBtn onClick={login}>Login</LongBtn>
      <OR>OR</OR>
      <LongBtn onClick={signup}>회원 가입</LongBtn>
      <Kakao src={kakaologo} alt="kakao login" />
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: var(--white);
  font-family: "Hack Regular";
`;

const Main = styled.div`
  padding-top: 122px;
  padding-bottom: 80px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  background-color: var(--yellow);

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
  overflow: hidden;

  input {
    width: 110%;
    height: 61px;
    flex-shrink: 0;
    overflow-x: hidden;
    border: 1.5px solid var(--black1);
    background: var(--gray);

    color: var(--black3);
    text-align: center;
    font-family: "Hack Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 145%; /* 20.3px */
    letter-spacing: 1.4px;
  }
`;

const LongBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 55px;
  flex-shrink: 0;
  background-color: var(--black1);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);

  color: var(--white);
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.75px;
`;

const OR = styled.div`
  margin: 36px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Kakao = styled.img`
  margin-top: 36px;
  width: 57px;
  height: 57px;
  flex-shrink: 0;
  border-radius: 50%;
`;
