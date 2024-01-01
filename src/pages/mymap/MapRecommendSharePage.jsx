import React, { useState } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";

import TopBar from "../../components/_common/TopBar";
import { Line2, MainWebBox, WhiteBox, Wrapper } from "../../components/_common/CommonExport";
import ShareModal from "../../components/mymap/ShareModal";

import triangle from "../../assets/images/triangle.svg";
import { RecommendTitleText } from "../../components/mymap/MapTitleText";

const MapRecommendSharePage = () => {
  const { mapId } = useParams();
  const [recommendData, setRecommendData] = useState({
    id: "1",
    title: "여기 안가면 평생 후회할 것입니다..",
    content:
      "수변국밥? 이걸 먹은 뒤로 내 인생이 수변국밥? 이걸 먹은 뒤로 내 인생이 수변국밥? 이걸 먹은 뒤로 내 인생이 바뀌었음!!!",
    username: "혜지",
    hashtag: ["카페"],
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShareBtnClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText={"instagram"} />
      <Wrapper>
        <WhiteBox text={"Q. 스토리로 공유로 더 많은 추천을 받아보는 건 어때요"} />
        <Line2 />

        <MainWebBox>
          <TitleContainer>
            <RecommendTitleText username={recommendData.username} />
            <MapNameText>{recommendData.title}</MapNameText>
          </TitleContainer>
          <TagContainer>
            {recommendData.hashtag.map((item) => (
              <span key={item}>#{item}</span>
            ))}
          </TagContainer>
          <Description>{recommendData.content}</Description>
          <SelectedPlaces>
            {recommendData.place.map((item) => (
              <div key={item}>
                <img src={triangle} alt="place" />
                <span>{item.name}</span>
              </div>
            ))}
          </SelectedPlaces>
        </MainWebBox>

        <BoxW onClick={handleShareBtnClick}>Share to Instagram</BoxW>
      </Wrapper>
      {isModalOpen && <ShareModal onClose={() => setIsModalOpen(false)} mapId={mapId} recomId={recommendData.id} />}
    </>
  );
};

export default MapRecommendSharePage;

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
  padding: 0 25px;
  box-sizing: border-box;

  font-size: 15px;
  font-weight: 400;
  line-height: 20px; /* 133.333% */
  letter-spacing: 0.75px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SelectedPlaces = styled.div`
  margin-top: 14px;
  margin-bottom: 55px;
  padding-left: 25px;
  padding-right: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;

  font-size: 15px;
  font-weight: 400;
  line-height: 20px; /* 133.333% */
  letter-spacing: 0.75px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 9px;
  }

  div > img {
    width: 17px;
    height: 17px;
  }
`;

const BoxW = styled.div`
  position: fixed;
  bottom: 28px;
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

  @media (max-height: 816px) {
    position: static;
    margin-top: 49px;
    margin-bottom: 28px;
  }
`;
