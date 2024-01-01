import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../redux/mapmakingSlice";

import PlaceFilter from "../../components/mapmaking/PlaceFilter";
import TopBar from "../../components/_common/TopBar";
import { WhiteBox, NextBtnBlack } from "../../components/_common/CommonExport";

const PlacePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handlePlaceSelect = (selectedPlace) => {
    setSelectedPlace(selectedPlace);
    // dispatch(setLocation(selectedPlace));
  };

  const handleNextBtn = () => {
    if (selectedPlace) {
      dispatch(setLocation(selectedPlace));
      navigate(`/mapmaking/theme`);
    } else {
      alert("장소를 선택해주세요");
    }
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText="Making" />
      <Wrapper>
        <WhiteBox text={"Q. 어디로 가시나요? 또는 어디에 관심이 있으신가요?"} />
        <PlaceFilter onPlaceSelect={handlePlaceSelect} />
        <div id="temporary" />
        <NextBtnBlack
          addClickHandler={handleNextBtn}
          //where={"/mapmaking/theme"}
          text={"Next"}
        />
      </Wrapper>
    </>
  );
};

export default PlacePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
