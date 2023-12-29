import React, { useState } from "react";
import styled from "styled-components";

import TopBar from "../../components/_common/TopBar";
import {
  Wrapper,
  WhiteBox,
  Line2,
} from "../../components/_common/CommonExport";
import NoticeBox from "../../components/main/NoticeBox";
import monkey_1 from "../../assets/images/monkey-1.png"; //임시이미지

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

  // 임시 목데이터
  const HotMapData = [
    {
      id: 1,
      type: "recommendation",
      img: monkey_1,
      user: "허파게티",
      name: "부산맛집추천받음",
      time: "23.11.19 03:06",
    },
    {
      id: 2,
      type: "recommendation",
      img: monkey_1,
      user: "홍길동",
      name: "세종에서 뭐하지",
      time: "23.11.19 03:06",
    },
    {
      id: 3,
      img: monkey_1,
      user: "핑핑이",
      name: "",
      time: "23.11.19 03:06",
    },
    {
      id: 4,
      type: "recommendation",
      img: monkey_1,
      user: "징징이",
      name: "아니근데진짜",
      time: "23.11.19 03:06",
    },
  ];

  return (
    <>
      <TopBar navBtnOn={true} titleText="My Page" />
      <Wrapper>
        <Filters>
          <MyBtn onClick={handleMyBtnClick} active={MyBtnActive}>
            My
          </MyBtn>
          <NoticeBtn onClick={handleNoticeBtnClick} active={NoticeBtnActive}>
            Notify
          </NoticeBtn>
        </Filters>
        <WhiteBox
          text={
            MyBtnActive
              ? "현재 로그인 정보"
              : "🔔️ 누군가가 내 지도에 추천을 남겼나봐요. . ."
          }
        />
        <Line2 />
        <Content>
          {MyBtnActive && <div>무슨 내용이 들어가야 할까욤</div>}
          {NoticeBtnActive && <NoticeBox children={HotMapData} />}
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
  color: var(--black2);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 5px;
`;

const FilterStyle = styled.div`
  cursor: pointer;
  background-color: ${(props) => (props.active ? "var(--yellow)" : "none")};
  width: 100%;
  height: 61px;
  gap: 11px;
`;

const MyBtn = styled(FilterStyle)`
  border: 1.5px solid var(--black2);
  border-left: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 48px;
`;
const NoticeBtn = styled(FilterStyle)`
  border: 1.5px solid var(--black2);
  border-left: none;
  border-right: none;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 47px;
`;

const Content = styled.div`
  width: 100%;
`;
