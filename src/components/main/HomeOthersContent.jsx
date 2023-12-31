import React, { useState } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router";
import sort from "../../assets/images/sort.svg";

const HomeOthersContent = ({ children }) => {
  const navigate = useNavigate();
  const [showSortBox, setShowSortBox] = useState(false);
  const [sortType, setSortType] = useState("Earliest");

  const handleSortClick = () => {
    setShowSortBox(!showSortBox);
  };

  const handleSortTypeSelect = (type) => {
    setSortType(type);
    setShowSortBox(false);
  };

  return (
    <>
      <TotalSort>
        <Total>Total {children.length}</Total>
        <Sort onClick={handleSortClick} active={showSortBox}>
          <p>{sortType}</p>
          <img src={sort} />
          {showSortBox && (
            <SortOptions>
              <SortOption onClick={() => handleSortTypeSelect("Earliest")}>
                Earliest
              </SortOption>
              <SortOption onClick={() => handleSortTypeSelect("Oldest")}>
                Oldest
              </SortOption>
            </SortOptions>
          )}
        </Sort>
      </TotalSort>
      <BoxGrid>
        {children.map((box) => (
          <Box key={box.id} onClick={() => navigate(`/map/${box.id}`)}>
            <Img>
              <img src={box.img} />
            </Img>
            <Name>{box.name}</Name>
            <Time>{box.time} up</Time>
            <User>{box.user}님의 지도</User>
          </Box>
        ))}
      </BoxGrid>
    </>
  );
};

export default HomeOthersContent;

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
  cursor: pointer;
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
