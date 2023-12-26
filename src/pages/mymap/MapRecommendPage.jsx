import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { NextBtnBlack, NextBtnWhite, Wrapper } from "../../components/_common/CommonExport";
import { WTagContainer } from "../../components/mymap/LinkContainer";

import triangle from "../../assets/images/triangle.svg";

const MapRecommendPage = () => {
  const [recommendData, setRecommendData] = useState({
    id: "1",
    title: "여기 안가면 평생 후회할 것입니다...",
    content:
      "수변국밥? 이걸 먹은 뒤로 내 인생이 수변국밥? 이걸 먹은 뒤로 내 인생이 수변국밥? 이걸 먹은 뒤로 내 인생이 수변국밥? 이걸 먹은 뒤로 내 인생이 수변국밥? 이걸 먹은 뒤로 내 인생이 바뀌었음!!!",
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
      <TopBar navBtnOn={true} where={"/map/1"} titleText="recommend" />
      <Wrapper>
        <Scroll>
          <TitleContainer>
            <Col>
              <Title>
                <div>{recommendData.title}</div>
              </Title>
              <From>From.{recommendData.username}</From>
              <WTagContainer />
            </Col>
            <Col>
              <MapProfile />
              <SubTitle>부산에 가자</SubTitle>
            </Col>
          </TitleContainer>

          <ContentContainer>
            <UnderlinedContent>
              <Content>{recommendData.content}</Content>
              <Underline>
                <div />
                <div />
                <div />
                <div />
              </Underline>
            </UnderlinedContent>

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
        </Scroll>

        <NextBtnWhite where={"/map/1/1/commend"} text={"commend"} number={"96px"} />
        <NextBtnBlack where={"/map/1"} text={"back"} number={"28px"} />
      </Wrapper>
    </>
  );
};

export default MapRecommendPage;

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 272px);
  overflow: scroll;
`;

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
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const UnderlinedContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 216px;
  flex-shrink: 0;
`;

const Content = styled.div`
  position: absolute;
  top: 12px;
  width: 340px;
  line-height: 50px;

  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
`;

const Underline = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;

  div {
    margin-top: 50px;
    height: 1px;
    background: var(--black1);
  }
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
