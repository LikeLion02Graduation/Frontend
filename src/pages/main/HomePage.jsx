import React, { useState } from "react";
import styled from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { Wrapper } from "../../components/_common/CommonExport";

import HomeMyContent from "../../components/main/HomeMyContent";
import HomeBuyingContent from "../../components/main/HomeBuyingContent";

const HomePage = () => {
  const [myFilterActive, setMyFilterActive] = useState(true);
  const [buyingFilterActive, setBuyingFilterActive] = useState(false);

  const handleMyFilterClick = () => {
    setMyFilterActive(true);
    setBuyingFilterActive(false);
  };

  const handleBuyingFilterClick = () => {
    setMyFilterActive(false);
    setBuyingFilterActive(true);
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
          <MyFilter onClick={handleMyFilterClick} $active={myFilterActive}>
            <span>MY</span>
          </MyFilter>
          {/*결제 정보에 따라 텍스트 다르게*/}
          <BuyingFilter
            onClick={handleBuyingFilterClick}
            $active={buyingFilterActive}
          >
            <span>Buying</span>
          </BuyingFilter>
        </Filters>
        {myFilterActive && <HomeMyContent />}
        {buyingFilterActive && <HomeBuyingContent />}
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
  font-weight: 400;
  letter-spacing: 5px;
`;

const FilterStyle = styled.div`
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "var(--yellow)" : "none")};
  width: 100%;
  height: 61px;
  border: 1.5px solid var(--black2);
`;

const MyFilter = styled(FilterStyle)`
  border-left: none;
  display: flex;
  justify-content: flex-end;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 61px;

    @media (min-width: 393px) {
      width: 197px;
    }
  }
`;

const BuyingFilter = styled(FilterStyle)`
  border-left: none;
  border-right: none;
  display: flex;
  justify-content: flex-start;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 61px;

    @media (min-width: 393px) {
      width: 196px;
    }
  }
`;
