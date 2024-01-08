import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import TopBar from "../../components/_common/TopBar";
import { Wrapper } from "../../components/_common/CommonExport";

import HomeMyContent from "../../components/main/HomeMyContent";
import HomeOthersContent from "../../components/main/HomeOthersContent";
import HomeBuyingContent from "../../components/main/HomeBuyingContent";

const HomePage = () => {
  const navigate = useNavigate();
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
            MY
          </MyFilter>
          {/*결제 정보에 따라 텍스트 다르게*/}
          <OthersFilter
            onClick={handleOthersFilterClick}
            $active={buyingFilterActive || othersFilterActive}
          >
            {paymentInfo ? "Others" : "Buying"}
          </OthersFilter>
        </Filters>
        <Content>
          {myFilterActive && <HomeMyContent />}
          {othersFilterActive && <HomeOthersContent />}
          {buyingFilterActive && <HomeBuyingContent />}
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
  background-color: ${(props) => (props.$active ? "var(--yellow)" : "none")};
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
