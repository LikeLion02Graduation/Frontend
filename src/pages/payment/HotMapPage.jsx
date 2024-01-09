import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import TopBar from "../../components/_common/TopBar";
import { Wrapper } from "../../components/_common/CommonExport";
import HotMapBox from "../../components/payment/HotMapBox";

import goback from "../../assets/images/go-back.svg";
import gofront from "../../assets/images/go-front.svg";
//import { GetHotMapList } from "../../api/recom";

const HotMapPage = () => {
  const { location } = useParams();
  const [page, setPage] = useState(1);
  const [BackBtnActive, setBackBtnActive] = useState(true);
  const [FrontBtnActive, setFrontBtnActive] = useState(false);

  const handleBackBtnClick = () => {
    setBackBtnActive(true);
    setFrontBtnActive(false);
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleFrontBtnClick = () => {
    setFrontBtnActive(true);
    setBackBtnActive(false);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText="Contents" />
      <Wrapper>
        <WhiteBox>
          <span>🔔 요즘 인기있는 {location} 지도</span>
        </WhiteBox>
        <Filters>
          <BackBtn onClick={handleBackBtnClick} $active={BackBtnActive}>
            <img src={goback} alt="goback" />
            <p>이전 거 볼래요</p>
          </BackBtn>
          <FrontBtn onClick={handleFrontBtnClick} $active={FrontBtnActive}>
            <p>다른 거 볼래요</p>
            <img src={gofront} alt="gofront" />
          </FrontBtn>
        </Filters>
        <HotMapBox location={location} page={page} />
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
    font-family: Apple SD Gothic Neo;
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
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: 1.4px;
`;

const FilterStyle = styled.div`
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "var(--yellow)" : "none")};
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
