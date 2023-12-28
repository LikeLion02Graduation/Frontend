import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { Line2, MainWebBox, NextBtnWhite, WhiteBox, Wrapper } from "../../components/_common/CommonExport";
import { MapTitleText } from "../../components/mymap/MapTitleText";
import ShareModal from "../../components/mymap/ShareModal";

const MapSharePage = () => {
  const [mapData, setMapData] = useState({
    id: 1, // MAP 아이디
    name: "부산 갈거야",
    location: "부산",
    img: "[이미지url]",
    description: "2023 12 30 떠난다 추천 부탁해~~",
    created_at: "2023-11-11 12:12:11",
    hashtag: ["카페", "국밥"],
    user: {
      id: 1,
      nickname: "서연",
    },
    do_buy: true, // 현재 사용자가 이 map을 구매했는지 -> 이에 따라 추천 detail 페이지 url on/off
    recommend: [
      {
        id: 1, // RECOMMEND 아이디
        user: {
          id: 12,
          username: "혜지",
          profile: "[이미지url]",
        },
        created_at: "2023-11-11 12:12:11",
        content: "여기 안가면 평생", // 미리보기로 8글자만 제공
        exist_react: true,
      },
      {
        id: 2, // RECOMMEND 아이디
        user: {
          id: 12,
          username: "채린",
          profile: "[이미지url]",
        },
        created_at: "2023-11-11 12:12:11",
        content: "여기 안가면 평생", // 미리보기로 8글자만 제공
        exist_react: true,
      },
    ],
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShareBtnClick = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText={"Making"} />
      <Wrapper>
        <WhiteBox text={"Q. 스토리로 공유로 더 많은 추천을 받아보는 건 어때요"} />
        <Line2 />

        <MainWebBox>
          <TitleContainer>
            <MapTitleText mapData={mapData} />
            <MapNameText>{mapData.name}</MapNameText>
          </TitleContainer>
          <TagContainer>
            {mapData.hashtag.map((item) => (
              <span key={item}>#{item}</span>
            ))}
          </TagContainer>
          <Description>
            <div>{mapData.description}</div>
          </Description>
        </MainWebBox>
        <NextBtnWhite addClickHandler={handleShareBtnClick} text={"Share to Instagram"} number={"96px"} />
        <NextBtnWhite where={"/"} text={"Skip"} number={"28px"} />
      </Wrapper>
      {isModalOpen && <ShareModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default MapSharePage;

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

const MapNameText = styled.div`
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
