import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { setPlace } from "../../redux/mapmakingSlice";

import PlaceFilter from "../../components/mapmaking/PlaceFilter";
import TopBar from "../../components/_common/TopBar";
import {
  WhiteBox,
  NextBtnBlack,
  Line1,
} from "../../components/_common/CommonExport";

const PlacePage = () => {
  const dispatch = useDispatch();
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handlePlaceSelect = (selectedPlace) => {
    dispatch(setPlace(selectedPlace));
  };

  const handleNextBtn = () => {
    if (selectedPlace) {
      dispatch(setPlace(selectedPlace));
    } else {
      // 사용자가 장소 선택 안 했을 경우
      console.log("장소를 선택해주세요.");
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
          where={"/mapmaking/theme"}
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

  #temporary {
    margin-bottom: 221px;
  }
`;
