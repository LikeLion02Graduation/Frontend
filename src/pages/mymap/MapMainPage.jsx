import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import TopBar from "../../components/_common/TopBar";
import { Line1, Line2, MapNameBox, NextBtnBlack, Wrapper } from "../../components/_common/CommonExport";
import { MapTitleText } from "../../components/mymap/MapTitleText";
import Postit from "../../components/mymap/Postit";
import { LinkContainer } from "../../components/mymap/LinkContainer";
import NoRecommendModal from "../../components/mymap/NoRecommendModal";

const MapMainPage = () => {
  const { mapId } = useParams();
  const navigate = useNavigate();

  const [mapData, setMapData] = useState({
    id: 1, // MAP 아이디
    name: "부산 갈거야",
    location: "부산",
    img: "[이미지url]",
    description: "2023 12 30 떠난다 추천 부탁해~~",
    created_at: "2023-11-11 12:12:11",
    hashtag: [
      {
        tagname: "맛집",
      },
      {
        tagname: "명소",
      },
    ],
    user: {
      id: 1,
      nickname: "서연",
    },
    map_mine: true,
    do_buy: false,
    recommend: [],
  });

  const addPostit = () => {
    navigate(`/map/${mapId}/r/main`);
  };

  return (
    <>
      <TopBar navBtnOn={true} where={"/"} titleText={"Map"} />
      <Wrapper>
        <MapNameBox place={mapData.location} user={"시은이"} />
        <Line2 />

        <TitleContainer>
          <TitleBox>
            <MapTitleText mapData={mapData} />
            <LinkContainer mapId={mapId} />
          </TitleBox>
          <MapNameText>{mapData.name}</MapNameText>
        </TitleContainer>

        <TagContainer>
          <div>
            {mapData.hashtag.map((tag) => (
              <span key={tag.tagname}>#{tag.tagname}</span>
            ))}
          </div>
        </TagContainer>

        <Description>
          <div>{mapData.description}</div>
        </Description>
        <Line1 />

        <GridTitle>지도 위 포스트잇 총 {mapData.recommend.length}개</GridTitle>
        <GridContainer>
          <AddPostit onClick={addPostit}>+</AddPostit>
          {mapData.recommend.map((item) => (
            <Postit key={item.id} mapData={mapData} item={item} />
          ))}
        </GridContainer>
        {!mapData.map_mine ? (
          <NextBtnBlack addClickHandler={addPostit} text={"giving"} number={"28px"} />
        ) : (
          mapData.recommend.length === 0 && <NoRecommendModal location={mapData.location} />
        )}
      </Wrapper>
    </>
  );
};

export default MapMainPage;

const TitleContainer = styled.div`
  margin-top: 43px;
  margin-bottom: 20px;
  padding-left: 21px;
  padding-right: 21px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 34px;
  width: 393px;

  @media (max-width: 393px) {
    width: 100%;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const MapNameText = styled.div`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.75px;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  flex-shrink: 0;
  background: var(--yellow);
  border-top: 1.5px solid var(--black1);
  border-bottom: 1.5px solid var(--black1);

  color: var(--black2);
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 500;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;

  div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    width: 393px;
    padding: 0 15px;
    box-sizing: border-box;

    @media (max-width: 393px) {
      width: 100%;
      padding: 0 36px;
    }

    span {
      display: flex;
      justify-content: center;
    }
  }
`;

const Description = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
  padding-left: 21px;
  box-sizing: border-box;
  width: 393px;

  font-size: 15px;
  font-weight: 400;
  line-height: 20px; /* 133.333% */
  letter-spacing: 0.75px;

  @media (max-width: 393px) {
    width: 100%;
  }
`;

const GridTitle = styled.div`
  margin: 34px auto 28px auto;
  padding-left: 21px;
  box-sizing: border-box;
  width: 393px;

  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.75px;

  @media (max-width: 393px) {
    width: 100%;
  }
`;

const GridContainer = styled.div`
  margin-top: 12px;
  margin-bottom: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 36.84px;
  column-gap: 23.42px;
  min-height: 200px;
`;

const AddPostit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92.442px;
  height: 88.744px;
  flex-shrink: 0;
  background: var(--yellow);
  cursor: pointer;

  color: var(--black2);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 18.488px;
  font-weight: 500;
`;
