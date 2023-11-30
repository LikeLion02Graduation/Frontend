import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import PlaceFilter from "../../components/mapmaking/PlaceFilter";
import TopBar from "../../components/_common/TopBar";
import {
  WhiteBox,
  NextBtnBlack,
  Line1,
} from "../../components/_common/CommonExport";

const PlacePage = () => {
  return (
    <Wrapper>
      <TopBar navBtnOn={true} titleText="Making" />
      <WhiteBox text={"Q. 어디로 가시나요? 또는 어디에 관심이 있으신가요?"} />

      <PlaceFilter />
      <div id="temporary" />
      <NextBtnBlack where={"/mapmaking/theme"} />
    </Wrapper>
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
