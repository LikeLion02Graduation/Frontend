import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import TopBar from "../../components/_common/TopBar";
import {
  WhiteBox,
  MainWebBox,
  NextBtnWhite,
  Line2,
  Wrapper,
} from "../../components/_common/CommonExport";
import { MapTitleText } from "../../components/mymap/MapTitleText";

const SharePage = () => {
  const mapName = useSelector((state) => state.mapmaking.name);
  const mapTheme = useSelector((state) => state.mapmaking.hashtag);
  const mapContent = useSelector((state) => state.mapmaking.content);

  return (
    <Wrapper>
      <TopBar navBtnOn={true} titleText="Making" />
      <WhiteBox text={"Q. 스토리 공유로 더 많은 추천을 받아보는 건 어때요"} />
      <Line2 />
      <MainWebBox>
        <TitleContainer>
          <MapTitleText />
          <MapName>{mapName}</MapName>
        </TitleContainer>
        <TagContainer>{mapTheme}</TagContainer>
        <Description>
          <div>{mapContent}</div>
        </Description>
      </MainWebBox>
      <NextBtnWhite text={"Share to Instagram"} number={"96px"} />
      <NextBtnWhite where={"/"} text={"Skip"} number={"28px"} />
    </Wrapper>
  );
};

export default SharePage;

const TitleContainer = styled.div`
  margin-top: 43px;
  margin-bottom: 21px;
  padding-left: 25px;
  padding-right: 21px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const MapName = styled.div`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1.5px;
`;

const TagContainer = styled.div`
  padding-left: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  gap: 38px;
  background: var(--yellow);
  border-top: 1.5px solid var(--black1);
  border-bottom: 1.5px solid var(--black1);

  color: var(--black2);
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 500;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
`;

const Description = styled.div`
  margin-top: 29px;
  margin-bottom: 47px;
  padding-left: 25px;
  box-sizing: border-box;

  font-size: 15px;
  font-weight: 400;
  line-height: 20px; /* 133.333% */
  letter-spacing: 0.75px;
`;
