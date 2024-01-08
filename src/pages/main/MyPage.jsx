import React, { useState } from "react";
import styled from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { Wrapper, WhiteBox, Line2 } from "../../components/_common/CommonExport";
import LoginInfo from "../../components/main/LoginInfo";
import NoticeBox from "../../components/main/NoticeBox";

const MyPage = () => {
  const [MyBtnActive, setMyBtnActive] = useState(true);
  const [NoticeBtnActive, setNoticeBtnActive] = useState(false);

  const handleMyBtnClick = () => {
    setMyBtnActive(true);
    setNoticeBtnActive(false);
  };

  const handleNoticeBtnClick = () => {
    setNoticeBtnActive(true);
    setMyBtnActive(false);
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText="My Page" />
      <Wrapper>
        <Filters>
          <MyBtn onClick={handleMyBtnClick} $active={MyBtnActive}>
            <span>My</span>
          </MyBtn>
          <NoticeBtn onClick={handleNoticeBtnClick} $active={NoticeBtnActive}>
            <span>Notify</span>
          </NoticeBtn>
        </Filters>
        <WhiteBox text={MyBtnActive ? "현재 로그인 정보" : "🔔️ 누군가가 내 지도에 추천을 남겼나봐요. . ."} />
        <Line2 />
        <Content>
          {MyBtnActive && <LoginInfo />}
          {NoticeBtnActive && <NoticeBox />}
        </Content>
      </Wrapper>
    </>
  );
};

export default MyPage;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 61px;
  color: var(--black2);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 5px;
`;

const FilterStyle = styled.div`
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "var(--yellow)" : "none")};
  width: 100%;
  height: 61px;
`;

const MyBtn = styled(FilterStyle)`
  border: 1.5px solid var(--black2);
  border-left: none;
  display: flex;
  justify-content: flex-end;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 61px;

    @media (min-width: 393px) {
      width: 197px;
    }
  }
`;

const NoticeBtn = styled(FilterStyle)`
  border: 1.5px solid var(--black2);
  border-left: none;
  border-right: none;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 61px;

    @media (min-width: 393px) {
      width: 196px;
    }
  }
`;

const Content = styled.div`
  width: 100%;
`;
