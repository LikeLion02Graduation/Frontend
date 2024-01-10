import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import sort from "../../assets/images/sort.svg";
import { GetOthersMapList } from "../../api/map";

const HomeBuyingContent = () => {
  const navigate = useNavigate();
  const [showSortBox, setShowSortBox] = useState(false);
  const [sortType, setSortType] = useState("Earliest");
  const [mapList, setMapList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const order = sortType === "Earliest" ? "최신순" : "오래된순";
      const response = await GetOthersMapList(order);
      setMapList(response.data);
    };
    getData();
  }, [sortType]);

  const handleSortClick = () => {
    setShowSortBox(!showSortBox);
  };

  const handleSortTypeSelect = (type) => {
    setSortType(type);
    setShowSortBox(false);
  };

  const handleHotMap = () => {
    navigate(`/buyingplace`);
  };

  return (
    <Wrapper>
      <TotalSort>
        <Total>Total {mapList.length}</Total>
        <Sort onClick={handleSortClick} $active={showSortBox}>
          <p>{sortType}</p>
          <img src={sort} alt="sort" />
          {showSortBox && (
            <SortOptions>
              <SortOption onClick={() => handleSortTypeSelect("Earliest")}>Earliest</SortOption>
              <SortOption onClick={() => handleSortTypeSelect("Oldest")}>Oldest</SortOption>
            </SortOptions>
          )}
        </Sort>
      </TotalSort>
      {mapList.length === 0 ? (
        <>
          <GrayBox style={{ transform: "rotate(15deg)" }}>아직 구매한 지도가 없네요..🥺</GrayBox>
          <GrayBox style={{ transform: "rotate(-15deg)" }}>더 많은 정보를 얻고 싶다면..</GrayBox>
          <YellowBox onClick={handleHotMap} style={{ marginTop: "20vh" }}>
            여기를 눌러 추천 콘텐츠를 받아보세요!
          </YellowBox>
        </>
      ) : (
        <>
          <BoxGrid>
            {mapList.map((box) => (
              <Box key={box.id} onClick={() => navigate(`/map/${box.id}`)}>
                <Img>
                  <img src={box.img} alt={box.name} />
                </Img>
                <Name>{box.name}</Name>
                <Time>{box.created_at} up</Time>
                <User>{box.location}의 지도</User>
              </Box>
            ))}
          </BoxGrid>
        </>
      )}
    </Wrapper>
  );
};

export default HomeBuyingContent;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  background: var(--white);
  font-family: "Hack Regular";
`;

const GrayBox = styled.div`
  margin-top: 15vh;
  width: 110vw;
  height: 61px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid var(--black1);
  background: #d9d9d9;

  color: var(--black3);
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: 1.4px;
`;

const YellowBox = styled.div`
  margin-top: 15vh;
  margin-bottom: 10.56vh;
  width: 110vw;
  height: 61px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid var(--black1);
  background: var(--yellow);

  color: var(--black3);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 14px;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: 1.4px;
  cursor: pointer;
`;

const TotalSort = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 335px;
`;
const Total = styled.div`
  padding-top: 33px;
  color: var(--black2);
  font-family: "Hack Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.7px;
`;

const Sort = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 33px;
  gap: 10px;
  color: var(--black2);
  font-family: "Hack Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  p {
    cursor: pointer;
  }
  img {
    cursor: pointer;
  }
`;

const SortOptions = styled.div`
  position: absolute;
  margin-top: 30px;
  width: 106px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid var(--black1);
  z-index: 1;
`;

const SortOption = styled.div`
  cursor: pointer;
  padding: 6px;
  border-bottom: 1px solid var(--black1);
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #d9d9d9;
  }
`;

const BoxGrid = styled.div`
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 21.21px;
  grid-row-gap: 33.83px;
`;

const Box = styled.div`
  width: 156.787px;
`;

const Img = styled.div`
  width: 100%;
  height: 156.787px;
  flex-shrink: 0;
  border: 1.527px solid var(--black1);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Name = styled.div`
  color: var(--black2);
  font-family: Apple SD Gothic Neo;
  font-size: 14.253px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.425px;
  margin-top: 12.2px;
  margin-bottom: 7.47px;
`;

const Time = styled.div`
  color: var(--black2);
  font-family: "Hack Regular";
  font-size: 12.217px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 7.54px;
`;

const User = styled.div`
  color: var(--black2);
  font-family: "Hack Regular";
  font-size: 12.217px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
