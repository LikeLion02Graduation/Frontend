import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import TopBar from "../../components/_common/TopBar";
import { Wrapper } from "../../components/_common/CommonExport";
import HotMapBox from "../../components/payment/HotMapBox";

import goback from "../../assets/images/go-back.svg";
import gofront from "../../assets/images/go-front.svg";
import monkey_1 from "../../assets/images/monkey-1.png"; //임시이미지

const HotMapPage = () => {
  const [BackBtnActive, setBackBtnActive] = useState(true);
  const [FrontBtnActive, setFrontBtnActive] = useState(false);

  const handleBackBtnClick = () => {
    setBackBtnActive(true);
    setFrontBtnActive(false);
  };

  const handleFrontBtnClick = () => {
    setFrontBtnActive(true);
    setBackBtnActive(false);
  };

  const mapPlace = useSelector((state) => state.mapmaking.place);

  // 임시 목데이터
  const HotMapData = [
    {
      id: 1,
      img: monkey_1,
      user: "허파게티",
      name: "부산맛집추천받음",
      recom_num: 20,
      hashtag: "카페 #맛집 #자연",
    },
    {
      id: 2,
      img: monkey_1,
      user: "허파게티",
      name: "부산에 가자2",
      recom_num: 20,
      hashtag: "카페 #맛집",
    },
    {
      id: 3,
      img: monkey_1,
      user: "핑핑이",
      name: "힐링하러 갑니다 부산에서의 행복...",
      recom_num: 20,
      hashtag: "카페 #산책 #자연",
    },
    {
      id: 4,
      img: monkey_1,
      user: "빵친자",
      name: "빵순이 부산에 가다",
      recom_num: 20,
      hashtag: "카페 맛집 자연",
    },
    {
      id: 5,
      img: monkey_1,
      user: "빵친자",
      name: "빵순이 부산에 가다",
      recom_num: 20,
      hashtag: "카페 맛집 자연",
    },
    {
      id: 6,
      img: monkey_1,
      user: "빵친자",
      name: "빵순이 부산에 가다",
      recom_num: 20,
      hashtag: "카페 맛집 자연",
    },
  ];

  return (
    <>
      <TopBar navBtnOn={true} titleText="추천 콘텐츠" />
      <Wrapper>
        <WhiteBox>
          {/*<span>🔔 요즘 인기있는 {mapPlace} 지도</span>*/}
          <span>🔔 요즘 인기있는 부산 지도</span>
        </WhiteBox>
        <Filters>
          <BackBtn onClick={handleBackBtnClick} active={BackBtnActive}>
            <img src={goback} />
            <p>이전 거 볼래요</p>
          </BackBtn>
          <FrontBtn onClick={handleFrontBtnClick} active={FrontBtnActive}>
            <p>다른 거 볼래요</p>
            <img src={gofront} />
          </FrontBtn>
        </Filters>
        <HotMapBox children={HotMapData} />
      </Wrapper>
    </>
  );
};

export default HotMapPage;

const WhiteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 61px;
  flex-shrink: 0;

  span {
    color: var(--Black2);
    text-align: center;
    font-family: "Apple SD Gothic Neo";
    font-size: 14px;
    font-weight: 600;
    line-height: 145%; /* 20.3px */
    letter-spacing: 1.4px;
  }
`;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--black2);
  text-align: center;
  font-family: "Apple SD Gothic Neo";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: 1.4px;
`;

const FilterStyle = styled.div`
  cursor: pointer;
  background-color: ${(props) => (props.active ? "var(--yellow)" : "none")};
  width: 100%;
  height: 61px;
  gap: 11px;
`;

const BackBtn = styled(FilterStyle)`
  border: 1.5px solid var(--black2);
  border-left: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 48px;
`;
const FrontBtn = styled(FilterStyle)`
  border: 1.5px solid var(--black2);
  border-left: none;
  border-right: none;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 47px;
`;
