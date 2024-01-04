import React, { useState } from "react";
import styled from "styled-components";

const LoginInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [nickname, setNickname] = useState("이시은입니다람쥐");

  const handleEditClick = () => {
    setIsEdit(!isEdit);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  return (
    <Wrapper>
      <Profile>프로필 사진</Profile>
      <Container>
        <Box>
          <Title>
            <TextBox>
              <span>사용중인 아이디</span>
              <div />
            </TextBox>
          </Title>
          <UserId>
            <TextBox>
              <div className="left"> tldms545</div>
              <div />
            </TextBox>
          </UserId>
        </Box>
        <Box>
          <Title>
            <TextBox>
              <span>사용중인 닉네임</span>
              <div />
            </TextBox>
          </Title>
          <UserName>
            <TextBox>
              <div className="left">
                {isEdit ? (
                  <input value={nickname} onChange={handleNicknameChange} />
                ) : (
                  <div>{nickname}</div>
                )}
              </div>
              <div className="right" onClick={handleEditClick}>
                {isEdit ? "완료" : "수정"}
              </div>
            </TextBox>
          </UserName>
        </Box>
        <LogOutBtn>
          <TextBox>
            <div className="left">로그아웃..</div>
            <div className="right">탭</div>
          </TextBox>
        </LogOutBtn>
      </Container>
    </Wrapper>
  );
};

export default LoginInfo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 106px);
  background: var(--white);
`;

const Profile = styled.div`
  margin-top: 42px;
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

const Container = styled.div`
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 0;
  gap: 42px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const UserId = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 61px;
  flex-shrink: 0;
  border: 1.5px solid var(--black1);
  background: var(--gray);
  border-left: none;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`;

const TextBox = styled.div`
  width: 393px;
  padding-left: 28px;
  padding-right: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Hack Regular";
  font-size: 14px;
  font-weight: 400;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;

  span {
    margin-bottom: 14px;
    color: var(--black1);
  }

  .left {
    color: var(--black3);
    display: flex;
    align-items: center;
  }

  input {
    color: var(--black3);
    background: transparent;
    font-family: "Hack Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 145%;
    letter-spacing: 1.4px;
    opacity: 40%;
    padding-top: 3px; //중앙정렬 안 먹어서 임시로...
  }

  .right {
    text-align: right;
    color: var(--black3);
    opacity: 40%;
    cursor: pointer;
  }
`;

const UserName = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 61px;
  flex-shrink: 0;
  border: 1.5px solid var(--black1);
  background: var(--gray);
  border-left: none;
`;

const LogOutBtn = styled.div`
  margin-bottom: 81px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 61px;
  flex-shrink: 0;
  border: 1.5px solid var(--black1);
  background: var(--gray);
`;
