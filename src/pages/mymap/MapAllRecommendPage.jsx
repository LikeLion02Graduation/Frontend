import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { Line1, NextBtnBlack, Wrapper } from "../../components/_common/CommonExport";

import RecommendBox from "../../components/recommend/RecommendBox";

const MapAllRecommendPage = () => {
  return (
    <>
      <TopBar navBtnOn={true} titleText="recommend" />
      <Wrapper>
        <TitleContainer>
          <div style={{ alignItems: "center" }}>
            <Title>부산에 가자</Title>
            <ListTitle>recommend (6)</ListTitle>
          </div>
          <div>
            <MapProfile />
            <SubTitle>부산에 가자</SubTitle>
          </div>
        </TitleContainer>
        <TagContainer></TagContainer>

        {/* 페이지네이션 필요 */}
        <ListContainer>
          <Line1 />
          <RecommendBox />
        </ListContainer>

        <NextBtnBlack where={-1} text={"back"} number={"28px"} />
      </Wrapper>
    </>
  );
};

export default MapAllRecommendPage;

const TitleContainer = styled.div`
  margin: 44px 22px 28px 31px;
  display: flex;
  flex-direction: row;
  gap: 15px;

  div {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.div`
  width: 168px;
  flex-shrink: 0;

  font-feature-settings: "clig" off, "liga" off;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 5px;
`;

const ListTitle = styled.div`
  margin-top: 17px;
  margin-bottom: 46px;
  width: 168px;
  height: 27px;
  flex-shrink: 0;

  font-feature-settings: "clig" off, "liga" off;
  font-size: 23px;
  font-weight: 400;
  letter-spacing: 5px;
`;

const MapProfile = styled.div`
  width: 156.787px;
  height: 156.787px;
  flex-shrink: 0;
  border: 1.527px solid #000;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

const SubTitle = styled.div`
  margin-top: 21.21px;
  color: var(--black2);
  font-family: Apple SD Gothic Neo;
  font-size: 14.253px;
  font-weight: 600;
  letter-spacing: 1.425px;
`;

const TagContainer = styled.div`
  margin-left: 29px;
  display: flex;
  flex-direction: column;
  gap: 12.5px;

  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
`;

const ListContainer = styled.div`
  margin: 12px 22px 0 21px;
  display: flex;
  flex-direction: column;
  /* height: auto; */
  overflow: scroll;
`;
