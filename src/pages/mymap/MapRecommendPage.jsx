import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { NextBtnBlack, NextBtnWhite, Wrapper } from "../../components/_common/CommonExport";

import triangle from "../../assets/images/triangle.svg";
// import wtagBack from "../../assets/images/wtag-background.svg";

const MapRecommendPage = () => {
  const [recommendData, setRecommendData] = useState({
    id: "1", // 추천 id
    title: "여기 안가면 평생 후회할 것입니다...",
    content: "수변국밥? 이걸 먹은 뒤로 내 인생이 바뀌었음!!!",
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

  return (
    <>
      <TopBar navBtnOn={true} titleText="recommend" />
      <Wrapper>
        <TitleContainer>
          <Col>
            <Title>
              <div>{recommendData.title}</div>
            </Title>
            <From>From.{recommendData.username}</From>
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
          <UnderlinedContent>{recommendData.content}</UnderlinedContent>
          {recommendData.place.map((item) => (
            <>
              <PlaceContainer key={item}>
                <PlaceInfo>
                  <div className="placename">{item.name}</div>
                  <div className="roadaddress">{item.address}</div>
                </PlaceInfo>
                <PlaceGoBtn>
                  <span>go!</span>
                  <img src={triangle} alt="go!" />
                </PlaceGoBtn>
              </PlaceContainer>
            </>
          ))}
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
