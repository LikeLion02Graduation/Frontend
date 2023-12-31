import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import TopBar from "../../components/_common/TopBar";
import { Wrapper } from "../../components/_common/CommonExport";
import { WTagContainer } from "../../components/mymap/LinkContainer";
import KeywordBox from "../../components/_common/KeywordBox";
import UnderlinedContent from "../../components/mymap/UnderlinedContent";
import PlaceContainer from "../../components/mymap/PlaceContainer";

const MapRecommendPage = () => {
  const { mapId, recomId } = useParams();
  const navigate = useNavigate();

  const [recommendData, setRecommendData] = useState({
    id: "1",
    title: "여기 안가면 평생 후회할 것입니다...",
    content:
      "수변국밥? 이걸 먹은 뒤로 내 인생이 수변국밥? 이걸 먹은 뒤로 내 인생이 수변국밥? 이걸 먹은 뒤로 내 인생이 수변국밥? 이걸 먹은 뒤로 내 인생이 수변국밥? 이걸 먹은 뒤로 내 인생이 바뀌었음!!!",
    username: "혜지",
    hashtag: ["카페", "혜지", "혜지", "혜지", "혜지"],
    place: [
      {
        id: 23,
        name: "수원왕족발",
        address: "경기도 수원시 어쩌구",
        link: "[카카오 url]",
      },
    ],
    react: {
      id: 12,
      emoji: 2,
      content: "와 너무 고마워!! 진짜 맛있더라",
      user: 1,
    },
  });

  return (
    <>
      <TopBar navBtnOn={true} where={`/map/${mapId}`} titleText="recommend" />
      <Wrapper>
        <KeywordBox keywords={recommendData.hashtag} />
        <TitleContainer>
          <Col>
            <Title>
              <div>{recommendData.title}</div>
            </Title>
            <From>From.{recommendData.username}</From>
            <WTagContainer mapId={mapId} recomId={recomId} />
          </Col>
          <Col>
            <MapProfile />
            <SubTitle>부산에 가자</SubTitle>
          </Col>
        </TitleContainer>

        <UnderlinedContent recommendData={recommendData} />
        {recommendData.place.map((item) => (
          <PlaceContainer key={item} item={item} />
        ))}

        <BoxW onClick={() => navigate(`/map/${mapId}/${recomId}/commend`)}>남긴 반응 보기 !</BoxW>
      </Wrapper>
    </>
  );
};

export default MapRecommendPage;

const TitleContainer = styled.div`
  margin-top: 44px;
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

const BoxW = styled.div`
  position: fixed;
  bottom: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342.222px;
  height: 55px;
  flex-shrink: 0;

  color: var(--black1);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.75px;
  border: 1.5px solid var(--black1);
  background: var(--white);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
  cursor: pointer;

  @media (max-width: 393px) {
    width: calc(100% - 50px);
  }

  @media (max-height: 892px) {
    position: static;
    margin-top: 40px;
    margin-bottom: 42px;
  }
`;
