import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const ProfileUpload = () => {
  const navigate = useNavigate();

  const signup = () => {
    navigate("/auth/login");
  };

  return (
    <>
      <Profile>
        클릭해서 <br />
        프로필 사진 수정
      </Profile>
      <Container>
        <span>사용할 닉네임을 입력하세요.</span>
        <input type="text" placeholder="닉네임 입력" />
      </Container>
      <LongBtn onClick={signup}>가입 완료</LongBtn>
    </>
  );
};

export default ProfileUpload;

const Container = styled.div`
  margin-top: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  span {
    margin-bottom: 14px;
    width: 337px;

    color: var(--black1);
    font-family: "Hack Regular";
    font-size: 14px;
    font-weight: 400;

    @media (max-width: 393px) {
      width: calc(100% - 62px);
    }
  }

  input {
    width: 100%;
    height: 61px;
    flex-shrink: 0;
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

const Profile = styled.div`
  margin-top: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 135px;
  height: 135px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid var(--black1);
  background: var(--gray);

  color: var(--black1);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 12px;
  font-weight: 400;
`;

const LongBtn = styled.div`
  margin-top: 179px;
  margin-bottom: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 445.855px;
  height: 55px;
  flex-shrink: 0;
  background-color: var(--black1);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);

  color: var(--white);
  font-family: "Hack Regular";
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.75px;

  @media (min-height: 718px) {
    position: fixed;
    bottom: 28px;
  }
`;
