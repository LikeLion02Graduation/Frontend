import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { initSignUp, setSignUp } from "../../redux/signupSlice";

//components
import TopBar from "../../components/_common/TopBar";
import { Wrapper } from "../../components/_common/CommonExport";

const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //아이디/비밀번호 입력
  const [formData, setFormData] = useState({
    userid: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  //아이디/비밀번호 조건 검사 후 페이지 이동 함수
  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.userid.trim() === "") {
      alert("아이디를 입력해주세요.");
    } else if (formData.password.trim() === "") {
      alert("비밀번호를 입력해주세요.");
    } else if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      dispatch(setSignUp({ user_id: formData.userid, password: formData.password }));
      navigate("/auth/profile");
    }
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText="회원가입" />
      <Wrapper>
        <Container style={{ marginTop: "99px" }}>
          <span>사용하실 아이디를 입력해주세요.</span>
          <input
            type="text"
            placeholder="아이디를 입력하세요.."
            name="userid"
            value={formData.userid}
            onChange={handleInputChange}
            autocomplete="off"
          />
        </Container>
        <Container style={{ marginTop: "73px" }}>
          <span>사용하실 비밀번호를 입력해주세요.</span>
          <input
            type="password"
            placeholder="비밀번호 입력"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="비밀번호 재입력"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            style={{ marginTop: "10px" }}
          />
        </Container>
        <LongBtn onClick={handleSubmit}>다음으로</LongBtn>
      </Wrapper>
    </>
  );
};

export default SignUpPage;

const Container = styled.div`
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
    border-top: 1.5px solid var(--black1);
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
`;

const LongBtn = styled.div`
  margin-top: 92px;
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
