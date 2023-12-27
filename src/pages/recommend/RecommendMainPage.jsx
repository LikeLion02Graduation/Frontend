import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { deletePlace } from "../../redux/recommendSlice";

import TopBar from "../../components/_common/TopBar";
import { Line2, LongBtnBlack, MapNameBox, Wrapper, YellowBox } from "../../components/_common/CommonExport";

import xBtn1 from "../../assets/images/x-btn-1.svg";
import xBtn2 from "../../assets/images/x-btn-2.svg";
import triangle from "../../assets/images/triangle.svg";

const RecommendMainPage = () => {
  const mapId = 1;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const savedPlaces = useSelector((state) => state.recommend?.place);

  const handleDelete = (index) => {
    dispatch(deletePlace(index));
  };

  const goToSearchPage = () => {
    navigate(`/map/${mapId}/r/search`);
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText="giving" />
      <Wrapper>
        <MapNameBox place="부산" user="시은" />
        <Line2 />
        <YellowBox text=". .에 남기는 나의 추천은 ? ! !" />

        {savedPlaces?.length > 0 ? (
          <ListContainer>
            {savedPlaces.map((p, index) => (
              <ListBox key={p.name}>
                <img src={xBtn1} alt="del btn" onClick={() => handleDelete(index)} />
                <img src={xBtn2} alt="del btn" style={{ top: "-0.6px" }} onClick={() => handleDelete(index)} />
                <span>{p.name}</span>
                <span>
                  {p.address} <img src={triangle} alt="go to " />
                </span>
              </ListBox>
            ))}

            {savedPlaces.length < 2 && <ListText>충격.복수 추천도 가능하다 ? !</ListText>}
          </ListContainer>
        ) : (
          <BlankContainer>
            아래 회색깔 검색 바를 탭해서 <br />
            남기고 싶은 장소를 픽해주세요
          </BlankContainer>
        )}
        <SearchContainer>
          <GrayBox onClick={goToSearchPage}>
            <div>탭해서 장소 검색하기. . .</div>
          </GrayBox>
          <SearchBox onClick={goToSearchPage}>Search</SearchBox>
          {savedPlaces?.length > 0 && <LongBtnBlack where={`/map/${mapId}/r/keyword`} text={"next"} />}
        </SearchContainer>
      </Wrapper>
    </>
  );
};

export default RecommendMainPage;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 438px);
  overflow: scroll;
`;

const ListBox = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 39px 31px;
  box-sizing: border-box;
  gap: 4px;
  border-bottom: 1.5px solid var(--black1);

  color: var(--black2);
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 500;
  line-height: 3px; /* 21.429% */
  letter-spacing: 1.4px;

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: 27px;
    height: 27px;
  }

  span {
    display: flex;
    flex-direction: row;
    width: 393px;
    gap: 3px;

    img {
      position: static;
      width: 15px;
      height: 15px;
    }
  }
`;

const ListText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  color: var(--black2);
  text-align: center;
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
  height: calc(100vh - 438px);

  color: var(--black2);
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
  opacity: 0.3;
`;

const SearchContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 212px;
`;

const GrayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 60px;
  background-color: var(--gray);

  color: var(--black2);
  font-size: 14px;
  font-weight: 400;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
  opacity: 0.3;

  div {
    width: 393px;
    padding-left: 30px;
    box-sizing: border-box;
  }
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
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
