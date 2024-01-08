import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import PlaceFilter from "../../components/mapmaking/PlaceFilter";
import TopBar from "../../components/_common/TopBar";
import { WhiteBox, NextBtnBlack } from "../../components/_common/CommonExport";

const HomeBuyingPage = () => {
  const navigate = useNavigate();
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handlePlaceSelect = (selectedPlace) => {
    setSelectedPlace(selectedPlace);
  };

  const handleNextBtn = () => {
    if (selectedPlace) {
      console.log("Selected Place:", selectedPlace);
      navigate(`/hotmap/${selectedPlace}`);
    } else {
      alert("장소를 선택해주세요");
    }
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText="Contents" />
      <Wrapper>
        <WhiteBox text={"Q. 어디로 가시나요? 또는 어디에 관심이 있으신가요?"} />
        <PlaceFilter onPlaceSelect={handlePlaceSelect} />
        <NextBtnBlack addClickHandler={handleNextBtn} />
      </Wrapper>
    </>
  );
};

export default HomeBuyingPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
