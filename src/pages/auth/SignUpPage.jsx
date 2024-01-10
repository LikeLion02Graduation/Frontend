import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignUp } from "../../redux/signupSlice";

//components
import TopBar from "../../components/_common/TopBar";
import { Wrapper } from "../../components/_common/CommonExport";
import { GetDuplicate } from "../../api/user";

const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //아이디/비밀번호 입력
  const [formData, setFormData] = useState({
    userid: "",
    password: "",
    confirmPassword: "",
  });

  const [isDuplicate, setIsDuplicate] = useState(true);

  const handleDuplicate = async () => {
    if (formData.userid.trim() === "") {
      alert("아이디를 입력해주세요.");
    } else {
      const response = await GetDuplicate(formData.userid);
      setIsDuplicate(response.duplicate);
      if (response.duplicate) alert("이미 사용 중인 아이디입니다.");
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });

    if (event.target.name === "userid") setIsDuplicate(true);
  };

  //아이디/비밀번호 조건 검사 후 페이지 이동 함수
  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.userid.trim() === "") {
      alert("아이디를 입력해주세요.");
    } else if (isDuplicate) {
      alert("아이디 중복확인을 완료해주세요.");
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
          <div>
            <input
              type="text"
              placeholder="아이디를 입력하세요.."
              name="userid"
              value={formData.userid}
              onChange={handleInputChange}
              autoComplete="off"
              style={{
                width: window.innerWidth <= 393 ? "calc(100vw - 112px)" : "281px",
                color: isDuplicate ? "var(--black1)" : "#277DFF",
                fontWeight: isDuplicate ? "400" : "700",
              }}
            />
            <div
              style={{ cursor: "pointer", color: isDuplicate ? "var(--black1)" : "#277DFF" }}
              onClick={handleDuplicate}
            >
              중복확인
            </div>
          </div>
        </Container>
        <Container style={{ marginTop: "73px" }}>
          <span>사용하실 비밀번호를 입력해주세요.</span>
          <div>
            <input
              type="password"
              placeholder="비밀번호 입력"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <input
              type="password"
              placeholder="비밀번호 재입력"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </div>
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

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 61px;
    flex-shrink: 0;
    border-top: 1.5px solid var(--black1);
    border-bottom: 1.5px solid var(--black1);
    background: var(--gray);

    input {
      width: 393px;
      padding-left: 28px;
      box-sizing: border-box;
      background: var(--gray);
      flex-shrink: 0;

      color: var(--black3);
      font-family: "Hack Regular";
      font-size: 14px;
      line-height: 145%; /* 20.3px */
      letter-spacing: 1.4px;

      &::placeholder {
        opacity: 0.4;
      }

      @media (max-width: 393px) {
        width: 100vw;
      }
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 112px;
      border: none;
      border-left: 1.5px solid var(--black1);
      border-right: 1.5px solid var(--black1);

      color: var(--black1);
      font-weight: 700;
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
