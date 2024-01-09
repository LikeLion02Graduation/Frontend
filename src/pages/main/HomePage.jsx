import React, { useState } from "react";
import styled from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { Wrapper } from "../../components/_common/CommonExport";

import HomeMyContent from "../../components/main/HomeMyContent";
import HomeOthersContent from "../../components/main/HomeOthersContent";
import HomeBuyingContent from "../../components/main/HomeBuyingContent";

const HomePage = () => {
  const [myFilterActive, setMyFilterActive] = useState(true);
  const [othersFilterActive, setOthersFilterActive] = useState(false);
  const [buyingFilterActive, setBuyingFilterActive] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState(false);

  const handleMyFilterClick = () => {
    setMyFilterActive(true);
    setOthersFilterActive(false);
    setBuyingFilterActive(false);
  };

  const handleOthersFilterClick = () => {
    if (paymentInfo) {
      setOthersFilterActive(true);
      setMyFilterActive(false);
      setBuyingFilterActive(false);
    } else {
      setBuyingFilterActive(true);
      setMyFilterActive(false);
      setOthersFilterActive(false);
    }
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
          <OthersFilter
            onClick={handleOthersFilterClick}
            $active={buyingFilterActive || othersFilterActive}
          >
            <span>{paymentInfo ? "Others" : "Buying"}</span>
          </OthersFilter>
        </Filters>

        {myFilterActive && <HomeMyContent />}
        {othersFilterActive && <HomeOthersContent />}
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

const OthersFilter = styled(FilterStyle)`
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
