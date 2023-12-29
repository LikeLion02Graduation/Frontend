import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import TopBar from "../../components/_common/TopBar";
import { Wrapper } from "../../components/_common/CommonExport";
import sort from "../../assets/images/sort.svg";
import monkey_1 from "../../assets/images/monkey-1.png";
import monkey_2 from "../../assets/images/monkey-2.png";
import monkey_3 from "../../assets/images/monkey-3.png";
import monkey_4 from "../../assets/images/monkey-4.png";

const HomePage = () => {
  const navigate = useNavigate();
  const [myFilterActive, setMyFilterActive] = useState(true);
  const [othersFilterActive, setOthersFilterActive] = useState(false);

  const MapData = [
    { id: 1, img: monkey_1, name: "부산에 가자", time: "23.11.19 03:06" },
    { id: 2, img: monkey_2, name: "서울에 가자", time: "23.11.19 03:06" },
    {
      id: 3,
      img: monkey_3,
      name: "국밥 추천 받습니다",
      time: "23.11.19 03:06",
    },
    {
      id: 4,
      img: monkey_4,
      name: "저는 비빔면이 땡겨요",
      time: "23.11.19 03:06",
    },
  ];

  const handleMyFilterClick = () => {
    setMyFilterActive(true);
    setOthersFilterActive(false);
  };

  const handleOthersFilterClick = () => {
    setOthersFilterActive(true);
    setMyFilterActive(false);
  };

  return (
    <>
      <TopBar
        navBtnOn={false}
        myPageBtnOn={true}
        newMapBtnOn={true}
        titleText="Main"
      />
      <Wrapper>
        <Filters>
          <MyFilter onClick={handleMyFilterClick} active={myFilterActive}>
            MY
          </MyFilter>
          <OthersFilter
            onClick={handleOthersFilterClick}
            active={othersFilterActive}
          >
            Others
          </OthersFilter>
        </Filters>
        <TotalSort>
          <Total>Total {MapData.length}</Total>
          <Sort>
            <p>Earliest</p>
            <img src={sort} />
          </Sort>
        </TotalSort>
        <BoxGrid>
          {MapData.map((box) => (
            <Box key={box.id} onClick={() => navigate(`/map/${box.id}`)}>
              <Img>
                <img src={box.img} />
              </Img>
              <Name>{box.name}</Name>
              <Time>{box.time} up</Time>
            </Box>
          ))}
        </BoxGrid>
      </Wrapper>
    </>
  );
};

export default HomePage;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--black2);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Hack Regular";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 5px;
`;

const FilterStyle = styled.div`
  cursor: pointer;
  background-color: ${(props) => (props.active ? "var(--yellow)" : "none")};
`;

const MyFilter = styled(FilterStyle)`
  border: 1.5px solid var(--black2);
  border-left: none;
  width: 100%;
  height: 61px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 8%;
`;
const OthersFilter = styled(FilterStyle)`
  border: 1.5px solid var(--black2);
  border-left: none;
  border-right: none;
  width: 100%;
  height: 61px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 8%;
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
`;
