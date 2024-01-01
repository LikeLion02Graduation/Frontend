import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import TopBar from "../../components/_common/TopBar";
import { Wrapper } from "../../components/_common/CommonExport";

import HomeMyContent from "../../components/main/HomeMyContent";
import HomeOthersContent from "../../components/main/HomeOthersContent";

import monkey_1 from "../../assets/images/monkey-1.png";
import monkey_2 from "../../assets/images/monkey-2.png";
import monkey_3 from "../../assets/images/monkey-3.png";
import monkey_4 from "../../assets/images/monkey-4.png";

const HomePage = () => {
  const navigate = useNavigate();
  const [myFilterActive, setMyFilterActive] = useState(true);
  const [othersFilterActive, setOthersFilterActive] = useState(false);

  const MapData1 = [
    { id: 1, img: monkey_1, name: "부산에 가자", created_at: "23.11.19 03:06" },
    { id: 2, img: monkey_2, name: "서울에 가자", created_at: "23.11.19 03:06" },
    {
      id: 3,
      img: monkey_3,
      name: "국밥 추천 받습니다",
      created_at: "23.11.19 03:06",
    },
    {
      id: 4,
      img: monkey_4,
      name: "저는 비빔면이 땡겨요",
      created_at: "23.11.19 03:06",
    },
  ];

  const MapData2 = [
    {
      id: 1,
      img: monkey_1,
      name: "부산에 가자",
      created_at: "23.11.19 03:06",
      user: "손예원",
    },
    {
      id: 2,
      img: monkey_2,
      name: "서울에 가자",
      created_at: "23.11.19 03:06",
      user: "손예원",
    },
    {
      id: 3,
      img: monkey_3,
      name: "국밥 추천 받습니다",
      created_at: "23.11.19 03:06",
      user: "손예원",
    },
    {
      id: 4,
      img: monkey_4,
      name: "저는 비빔면이 땡겨요",
      created_at: "23.11.19 03:06",
      user: "손예원",
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
        <Content>
          {myFilterActive && <HomeMyContent children={MapData1} />}
          {othersFilterActive && <HomeOthersContent children={MapData2} />}
        </Content>
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

const Content = styled.div`
  margin-bottom: 100px;
`;
