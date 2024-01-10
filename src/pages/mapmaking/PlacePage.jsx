import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { initMapmaking, setLocation } from "../../redux/mapmakingSlice";

import PlaceFilter from "../../components/mapmaking/PlaceFilter";
import TopBar from "../../components/_common/TopBar";
import { WhiteBox, NextBtnBlack } from "../../components/_common/CommonExport";

const PlacePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handlePlaceSelect = (selectedPlace) => {
    setSelectedPlace(selectedPlace);
  };

  const handleNextBtn = () => {
    if (selectedPlace) {
      dispatch(setLocation(selectedPlace));
      navigate(`/mapmaking/theme`);
    } else {
      alert("장소를 선택해주세요");
    }
  };

  const handleInit = () => {
    dispatch(initMapmaking());
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText="Making" addClickHandler={handleInit} />
      <Wrapper>
        <WhiteBox text={"Q. 어디로 가시나요? 또는 어디에 관심이 있으신가요?"} />
        <PlaceFilter onPlaceSelect={handlePlaceSelect} />
        <NextBtnBlack addClickHandler={handleNextBtn} />
      </Wrapper>
    </>
  );
};

export default PlacePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 106px);
  overflow-x: hidden;
  overflow-y: auto;
`;
