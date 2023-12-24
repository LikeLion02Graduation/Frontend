import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import TopBar from "../../components/_common/TopBar";
import { Line1, Line2, MapNameBox, Wrapper } from "../../components/_common/CommonExport";
import linkbg from "../../assets/images/link-background.svg";
import linkcopy from "../../assets/images/link-copy.svg";
import linkig from "../../assets/images/link-ig.svg";
import MapTitleText from "../../components/mymap/MapTitleText";

const MapMainPage = () => {
  const navigate = useNavigate();
  const currentUserId = 2; //임시
  // 임시 코드
  const [isSelected, setSelected] = useState(true);
  const [mapData, setMapData] = useState({
    id: 1, // MAP 아이디
    name: "부산 갈거야",
    location: "부산",
    img: "[이미지url]",
    description: "2023 12 30 떠난다 추천 부탁해~~",
    created_at: "2023-11-11 12:12:11",
    hashtag: ["카페", "국밥"],
    user: 1, // 작성자 id
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

  const getPostitStyle = () => {
    const styles = [{ backgroundColor: "#ff9dd8" }, { backgroundColor: "#FFF615" }, { backgroundColor: "#00F0FF" }];

    const randomIndex = Math.floor(Math.random() * styles.length);

    return styles[randomIndex];
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText={"Map"} />
      <Wrapper>
        <MapNameBox place={mapData.location} user={"시은이"} />
        <Line2 />
        <TitleContainer>
          <TitleBox>
            <MapTitleText mapData={mapData} />
            <LinkContainer>
              <div>
                <img src={linkcopy} />
                <img src={linkbg} />
              </div>
              <div>
                <img src={linkig} />
                <img src={linkbg} />
              </div>
            </LinkContainer>
          </TitleBox>
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
        <Line1 />

        <GridTitle>지도 위 포스트잇 총 {mapData.recommend.length}개</GridTitle>
        <GridContainer>
          <AddPostit>+</AddPostit>
          {mapData.recommend.map((item) => (
            <Postit
              key={item}
              onClick={() => {
                navigate(`/map/${mapData.id}/${item.id}`);
              }}
              style={getPostitStyle()}
            >
              From.
              <br />
              {item.user.username}
            </Postit>
          ))}
        </GridContainer>
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
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 41px;

  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 41px;
    height: 41px;

    img {
      position: absolute;
    }
  }
`;

const MapNameText = styled.div`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.75px;
`;

const TagContainer = styled.div`
  padding-left: 31px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 393px;
  height: 60px;
  gap: 47px;
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
  margin-top: 34px;
  margin-bottom: 20px;
  padding-left: 21px;
  box-sizing: border-box;
  width: 393px;

  font-size: 15px;
  font-weight: 400;
  line-height: 20px; /* 133.333% */
  letter-spacing: 0.75px;
`;

const GridTitle = styled.div`
  margin: 34px auto 28px auto;
  padding-left: 21px;
  box-sizing: border-box;
  width: 393px;

  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.75px;
`;

const GridContainer = styled.div`
  margin: 12px 22px 10px 21px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 351px;
  row-gap: 36.84px;
  column-gap: 23.42px;
`;

const AddPostit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92.442px;
  height: 88.744px;
  flex-shrink: 0;
  background: var(--yellow);

  color: var(--black2);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 18.488px;
  font-weight: 500;
`;

const Postit = styled.div`
  width: 92.442px;
  height: 88.744px;
  flex-shrink: 0;
  padding-top: 11px;
  padding-left: 11px;
  box-sizing: border-box;
  border: 1.165px solid rgba(0, 0, 0, 0.1);

  color: var(--black2);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 18.488px;
  font-weight: 400;
  letter-spacing: 2.329px;
`;
