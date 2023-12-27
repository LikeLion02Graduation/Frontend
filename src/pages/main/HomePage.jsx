import React, { useState } from "react";
import styled from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { Line1, Line2, Wrapper } from "../../components/_common/CommonExport";
import sort from "../../assets/images/sort.svg";
import monkey_1 from "../../assets/images/monkey-1.svg";
import monkey_2 from "../../assets/images/monkey-2.svg";
import monkey_3 from "../../assets/images/monkey-3.svg";
import monkey_4 from "../../assets/images/monkey-4.svg";

const HomePage = () => {
  const MapData = [
    { id: 1, img: { monkey_1 }, name: "부산에 가자", time: "23.11.19 03:06" },
    { id: 2, img: { monkey_2 }, name: "서울에 가자", time: "23.11.19 03:06" },
    {
      id: 3,
      img: { monkey_3 },
      name: "국밥 추천 받습니다람쥐",
      time: "23.11.19 03:06",
    },
    {
      id: 4,
      img: { monkey_4 },
      name: "저는 비빔면이 땡겨요",
      time: "23.11.19 03:06",
    },
  ];
  return (
    <Wrapper>
      <TopBar navBtnOn={true} titleText="Main" />
      <Filters>
        <MyFilter>MY</MyFilter>
        <OthersFilter>Others</OthersFilter>
      </Filters>
      <TotalSort>
        <Total>Total {MapData.length}</Total>
        <Sort>
          <p>Earliest</p>
          <img src={sort} />
        </Sort>
      </TotalSort>
      <Content>
        {MapData.map((box) => (
          <Box key={box.id}>
            <Img>
              <img src={box.img} />
            </Img>
            <Name>{box.name}</Name>
            <Time>{box.time} up</Time>
          </Box>
        ))}
      </Content>
    </Wrapper>
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
  justify-content: center;
  align-items: center;
`;
const OthersFilter = styled(FilterStyle)`
  border: 1.5px solid var(--black2);
  border-left: none;
  border-right: none;
  width: 100%;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TotalSort = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Total = styled.div`
  padding-top: 33px;
  padding-left: 29px;
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
  padding-right: 29px;
  gap: 10px;
  color: var(--black2);
  font-family: "Hack Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Content = styled.div``;
const Box = styled.div``;
const Img = styled.div`
  border: 1.527px solid var(--black1);
  img {
    width: 156.787px;
    height: 156.787px;
    flex-shrink: 0;
  }
`;
const Name = styled.div``;
const Time = styled.div``;
