import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { NextBtnBlack, NextBtnWhite, Wrapper } from "../../components/_common/CommonExport";

import triangle from "../../assets/images/triangle.svg";
// import wtagBack from "../../assets/images/wtag-background.svg";

const MapRecommendPage = () => {
  return (
    <>
      <TopBar navBtnOn={true} titleText="recommend" />
      <Wrapper>
        <TitleContainer>
          <Col>
            <Title>
              <div>여기 안가면 평생 후회할 것입니다.</div>
            </Title>
            <From>From.핑핑이</From>
            <WTag>
              <div>link</div>
              <div>edit</div>
            </WTag>
          </Col>
          <Col>
            <MapProfile />
            <SubTitle>부산에 가자</SubTitle>
          </Col>
        </TitleContainer>

        <ContentContainer>
          {/* 추후 수정 필요 */}
          <UnderlinedContent>
            수변국밥? 이걸먹은뒤로 내인생이바뀌변국밥? 이걸먹은뒤로 내인생이바뀌었틈 꼭거거라 시은아!!!!변국밥?
            이걸먹은뒤로 내인생이바뀌었틈 꼭거거라 시은아!!!!었틈 꼭거거라 시은아!!!!🔥🔥🔥🔥🔥
          </UnderlinedContent>
          <PlaceContainer>
            <PlaceInfo>
              <div className="placename">수변최고돼지국밥</div>
              <div className="roadaddress">부산광역시 광안리 수변로 330번지</div>
            </PlaceInfo>
            <PlaceGoBtn>
              <span>go!</span>
              <img src={triangle} alt="go!" />
            </PlaceGoBtn>
          </PlaceContainer>
        </ContentContainer>

        <NextBtnWhite text="commend" number={"96px"} />
        <NextBtnBlack text="all recommend" number={"28px"} />
      </Wrapper>
    </>
  );
};

export default MapRecommendPage;

const TitleContainer = styled.div`
  margin: 44px 22px 0px 31px;
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 168px;
  flex-shrink: 0;
  overflow: hidden;

  div {
    display: -webkit-box;
    white-space: normal;
    -webkit-line-clamp: 3; /*보여줄 줄의 수를 정함*/
    -webkit-box-orient: vertical; /*box의 배열 방향을 정함*/
    font-feature-settings: "clig" off, "liga" off;
    text-overflow: ellipsis;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 5px;
  }
`;

const From = styled.div`
  margin-top: 5px;
  margin-bottom: 13px;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 5px;
`;

const WTag = styled.div`
  display: flex;
  flex-direction: row;

  div {
    height: 16.59px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 8.967px;
    font-weight: 700;
    letter-spacing: 0.897px;
  }
`;

const MapProfile = styled.div`
  width: 156.787px;
  height: 156.787px;
  flex-shrink: 0;
  border: 1.527px solid var(--black1);
  box-sizing: border-box;
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 512px);
  overflow: scroll;
`;

const UnderlinedContent = styled.div`
  margin-top: 10px;
  width: 340px;
  text-decoration: underline;
  text-underline-offset: 10px;
  white-space: pre-line;
  line-height: 50px;

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
`;

const PlaceContainer = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const PlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  gap: 7.65px;
  border: 1.5px solid var(--yellow);
  padding: 12px 16px 11.35px 16px;
  box-sizing: border-box;

  .placename {
    font-size: 17.053px;
    font-weight: 700;
    letter-spacing: 1.705px;
  }

  .roadaddress {
    color: #0c0404;
    font-size: 12.79px;
    font-weight: 400;
    letter-spacing: 1.279px;
    opacity: 0.7;
  }
`;

const PlaceGoBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7.92px;
  width: 66px;
  height: 20.557px;
  flex-shrink: 0;
  background: var(--yellow);

  span {
    text-align: center;
    font-size: 7.574px;
    font-weight: 700;
  }

  img {
    width: 8.115px;
    height: 8.115px;
    flex-shrink: 0;
  }
`;
