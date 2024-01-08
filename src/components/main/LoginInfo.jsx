import React, { useState, useEffect } from "react";
import styled from "styled-components";

//api
import { GetLoginInfo } from "../../api/user";
import { PatchNickname } from "../../api/user";
import { Logout } from "../../api/user";
import { DeleteAccount } from "../../api/user";

const LoginInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [nickname, setNickname] = useState("");
  const [loginData, setLoginData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await GetLoginInfo();
      setLoginData(response.data);
      setNickname(response.data.nickname);
    };

    getData();
  }, [isEdit]);

  const handleEditClick = async () => {
    if (isEdit) {
      try {
        const updatedData = await PatchNickname(nickname);
        setLoginData((prevData) => ({
          ...prevData,
          nickname: updatedData.nickname,
        }));
        setNickname(updatedData.nickname);
      } catch (error) {
        console.error("닉네임 수정에 실패했습니다.", error);
      }
    }
    setIsEdit(!isEdit);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  return (
    <Wrapper>
      {loginData.profile && <Profile src={loginData.profile} alt="profile" />}
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
              <div className="left">{loginData.username}</div>
              <div />
            </TextBox>
          </UserId>
        </Box>
        <Box>
          <Title>
            <TextBox>
              <span>
                사용중인 닉네임{`(`}바로 탭해서 수정할 수 있어요~{`)`}
              </span>
              <div />
            </TextBox>
          </Title>
          <UserName>
            <TextBox>
              <div className="left">
                {isEdit ? (
                  <input value={nickname} onChange={handleNicknameChange} placeholder="" />
                ) : (
                  <div>{loginData.nickname}</div>
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
            <div className="right" onClick={Logout}>
              탭
            </div>
          </TextBox>
        </LogOutBtn>
        <DeleteAccountBtn>
          <TextBox>
            <div className="left">탈퇴</div>
            <div className="right" onClick={DeleteAccount}>
              탭
            </div>
          </TextBox>
        </DeleteAccountBtn>
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

const Profile = styled.img`
  margin-top: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 135px;
  height: 135px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid var(--black1);
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
  display: flex;
  justify-content: center;
  width: 100%;
  height: 61px;
  flex-shrink: 0;
  border: 1.5px solid var(--black1);
  background: var(--gray);
`;

const DeleteAccountBtn = styled.div`
  margin-bottom: 34px;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 61px;
  flex-shrink: 0;
  border: 1.5px solid var(--black1);
  background: var(--gray);
`;
