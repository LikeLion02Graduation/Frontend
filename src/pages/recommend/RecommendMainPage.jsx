import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { Line2, MapNameBox, YellowBox } from "../../components/_common/CommonExport";

import xBtn1 from "../../assets/images/x-btn-1.svg";
import xBtn2 from "../../assets/images/x-btn-2.svg";
import triangle from "../../assets/images/triangle.svg";

const RecommendMainPage = () => {
  // 임시 코드
  const [isSelected, setSelected] = useState(false);

  return (
    <>
      <TopBar navBtnOn={true} titleText="giving" />
      <Wrapper>
        <MapNameBox place="부산" user="시은" />
        <Line2 />
        <YellowBox text=". .에 남기는 나의 추천은 ? ! !" />

        {/* 높이 조정 필요 */}
        {isSelected ? (
          <ListContainer>
            <ListBox>
              <img src={xBtn1} alt="del btn" />
              <img src={xBtn2} alt="del btn" style={{ top: "-0.6px" }} />
              <div>
                <span>수변최고돼지국밥 민락본점</span>
                <span>
                  부산 수영구 광안해변로370번길 9-32 <img src={triangle} alt="go to " />
                </span>
              </div>
            </ListBox>
            <ListText>충격.복수 추천도 가능하다 ? !</ListText>
          </ListContainer>
        ) : (
          <BlankContainer>
            아래 회색깔 검색 바를 탭해서 <br />
            남기고 싶은 장소를 픽해주세요
          </BlankContainer>
        )}
        <SearchContainer>
          <GrayBox>탭해서 장소 검색하기. . .</GrayBox>
          <SearchBox>Search</SearchBox>
          {/* 선택한 장소가 있을 때만 띄우기 */}
          <NextBox>Next</NextBox>
        </SearchContainer>
      </Wrapper>
    </>
  );
};

export default RecommendMainPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 393px;
  height: 100%;
  background: var(--white);
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 410.5px; //임시
  overflow: scroll;
`;

const ListBox = styled.div`
  position: relative;
  border-bottom: 1.5px solid var(--black1);

  color: var(--black2);
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 500;
  line-height: 3px; /* 21.429% */
  letter-spacing: 1.4px;

  img {
    position: absolute;
    right: 0;
    width: 27px;
    height: 27px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 39px 31px;
    gap: 4px;

    span {
      display: flex;
      flex-direction: row;
      width: fit-content;
      gap: 3px;

      img {
        position: static;
        width: 15px;
        height: 15px;
      }
    }
  }
`;

const ListText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; //임시

  color: var(--black2);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 14px;
  font-weight: 400;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
  opacity: 0.3;
`;

const BlankContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 410.5px; //임시

  color: var(--black2);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 14px;
  font-weight: 400;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
  opacity: 0.3;
`;

const SearchContainer = styled.div`
  /* position: absolute;
  bottom: 0; */
  width: 393px;
  height: 212px;
  font-family: "Hack Regular";
`;

const GrayBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 30px;
  box-sizing: border-box;
  background-color: var(--gray);

  color: var(--black2);
  font-size: 14px;
  font-weight: 400;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
  opacity: 0.3;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  background-color: var(--white);
  border-top: 1.5px solid var(--black1);
  border-bottom: 1.5px solid var(--black1);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);

  color: var(--black1);
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.75px;
`;

const NextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  background-color: var(--black1);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);

  color: var(--white);
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.75px;
`;
