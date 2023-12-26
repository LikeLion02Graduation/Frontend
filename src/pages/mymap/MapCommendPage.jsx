import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { Line1, Line2, NextBtnBlack, NextBtnWhite, Wrapper } from "../../components/_common/CommonExport";

const MapCommendPage = () => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <>
      <TopBar navBtnOn={true} where={"/map/1/1"} titleText="recommend" />
      <Wrapper>
        <Title>
          <span>여기 안가면 평생 후회할 것입니다.</span>
          <span>에 대한 반응</span>
        </Title>
        <Line2 />

        {isSaved ? (
          <>
            <Commend>아..... 진짜 너무 맛있고 눈물만 나는 엄청난 맛입니다.</Commend>
            <Line1 />
            <NextBtnWhite where={"/map/1/1/commend/w"} text={"edit"} number={"96px"} />
          </>
        ) : (
          <>
            <Commend style={{ opacity: "0.3", paddingLeft: "47px" }}>아직 남겨진 반응이...</Commend>
            <Line1 />
            <NextBtnWhite where={"/map/1/1/commend/w"} text={"writing"} number={"96px"} />
          </>
        )}
        <NextBtnBlack where={"/map/1/1"} text={"back"} number={"28px"} />
      </Wrapper>
    </>
  );
};

export default MapCommendPage;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 61px;

  span {
    color: var(--Black3);
    text-align: center;
    font-family: Apple SD Gothic Neo;
    font-size: 14px;
    font-weight: 600;
    line-height: 145%; /* 20.3px */
    letter-spacing: 1.4px;
  }

  span:nth-child(1) {
    display: -webkit-box;
    width: 144px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 800;
  }
`;

const Commend = styled.div`
  display: flex;
  align-items: center;
  width: 390px;
  padding: 21px 42.5px 20px 42.5px;
  box-sizing: border-box;

  color: var(--Black2);
  font-size: 14px;
  font-weight: 400;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
`;
