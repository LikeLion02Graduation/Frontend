import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import TopBar from "../../components/_common/TopBar";
import {
  WhiteBox,
  NextBtnWhite,
  Line2,
} from "../../components/_common/CommonExport";

const ImagePage = () => {
  return (
    <Wrapper>
      <TopBar navBtnOn={true} titleText="Making" />
      <WhiteBox text={"Q. 지도에 들어갈 대표 이미지를 업로드 해보세요"} />
      <Line2 />
      <MapProfile>
        <ImageBox />
        <MapName>부산에 가자</MapName>
      </MapProfile>
      <NextBtnWhite where={"/mapmaking/done"} text={"Next"} number={"13px"} />
      <NextBtnWhite where={"/mapmaking/done"} text={"Skip"} number={"28px"} />
    </Wrapper>
  );
};

export default ImagePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MapProfile = styled.div`
  margin-top: 44px;
  margin-bottom: 265px; //나중에 next 버튼 고정 및 조정 필요
`;

const ImageBox = styled.div`
  width: 156.787px;
  height: 156.787px;
  flex-shrink: 0;
  border: 1.527px solid var(--black1);
`;

const MapName = styled.div`
  color: var(--black2);
  font-family: Apple SD Gothic Neo;
  font-size: 14.253px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.425px;
  text-align: left;
`;
