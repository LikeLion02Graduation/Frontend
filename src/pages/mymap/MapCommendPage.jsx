import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";

//components
import TopBar from "../../components/_common/TopBar";
import { Line1, Line2, NextBtnBlack, NextBtnWhite, Wrapper } from "../../components/_common/CommonExport";

//api
import { GetRecomReact } from "../../api/map";

const MapCommendPage = () => {
  const { mapId, recomId } = useParams();
  const previousUrl = `/map/${mapId}/${recomId}`;
  const nextUrl = `/map/${mapId}/${recomId}/commend/w`;

  const [reactData, setReactData] = useState({});
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await GetRecomReact(recomId);
      setReactData(response);
      setIsSaved("emoji" in response);
    };

    getData();
  }, [recomId]);

  const emojis = ["🥰", "😔", "😢", "😭"];

  return (
    <>
      <TopBar navBtnOn={true} where={previousUrl} titleText="recommend" />
      <Wrapper>
        <Title>
          <span>{reactData.map_name}</span>
          <span>에 대한 반응</span>
        </Title>
        <Line2 />

        {isSaved ? (
          <>
            <Commend>{reactData.content}</Commend>
            <Line1 />
            <Emoji>{emojis[reactData.emoji]}</Emoji>
            {reactData.mine && <NextBtnWhite where={nextUrl} text={"edit"} number={"96px"} />}
          </>
        ) : (
          <>
            <Commend style={{ opacity: "0.3", paddingLeft: "47px" }}>아직 남겨진 반응이...</Commend>
            <Line1 />
            {reactData.mine && <NextBtnWhite where={nextUrl} text={"writing"} number={"96px"} />}
          </>
        )}
        <NextBtnBlack where={previousUrl} text={"back"} number={"28px"} />
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
    max-width: 144px;
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

const Emoji = styled.button`
  margin-top: 45px;
  width: 70px;
  height: 70px;
  border: 1px solid var(--black1);
  border-radius: 50%;
  background-color: var(--yellow);

  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Apple SD Gothic Neo;
  font-size: 30.732px;
  font-weight: 500;
`;
