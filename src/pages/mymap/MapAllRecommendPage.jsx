import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { Line1, NextBtnBlack, Wrapper } from "../../components/_common/CommonExport";

import triangle from "../../assets/images/triangle.svg";

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

        <Line1 />
        {/* 페이지네이션 필요 */}
        <ListContainer>
          <ListBox>
            <Profile>이미지</Profile>
            <Content>
              <span>From. 핑핑이</span>
              <span>
                <span>여기 안가면 평생 후회하게 될 것입니다.</span>
                <img src={triangle} alt="go to " />
              </span>
              <span>23.11.19 03:06</span>
            </Content>
          </ListBox>
          <ListBox>
            <Profile>이미지</Profile>
            <Content>
              <span>From. 핑핑이</span>
              <span>
                <span>여기 안가면 평생 후회하게 될 것입니다.</span>
                <img src={triangle} alt="go to " />
              </span>
              <span>23.11.19 03:06</span>
            </Content>
          </ListBox>
          <ListBox>
            <Profile>이미지</Profile>
            <Content>
              <span>From. 핑핑이</span>
              <span>
                <span>여기 안가면 평생 후회하게 될 것입니다.</span>
                <img src={triangle} alt="go to " />
              </span>
              <span>23.11.19 03:06</span>
            </Content>
          </ListBox>
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

const ListBox = styled.div`
  padding: 9px 12px 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  font-family: Apple SD Gothic Neo;
`;

const Profile = styled.div`
  width: 69px;
  height: 69px;
  border: 1.5px solid #000;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  color: var(--black2);

  span:nth-child(1) {
    color: var(--black1);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 5px;
  }

  span:nth-child(2) {
    display: flex;
    flex-direction: row;
    width: 234px;
  }

  span:nth-child(2) > span {
    margin-right: 12px;
    max-width: 207px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1.4px;
  }

  span:nth-child(3) {
    font-family: "Hack Regular";
    font-size: 12px;
    font-weight: 400;
  }
`;
