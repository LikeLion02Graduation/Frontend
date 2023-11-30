import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import TopBar from "../../components/_common/TopBar";
import {
  MapNameBox,
  NextBtnWhite,
  Line2,
} from "../../components/_common/CommonExport";

const DonePage = () => {
  return (
    <Wrapper>
      <TopBar navBtnOn={true} titleText="Making" />
      <MapNameBox place="부산" user="시은" />
      <Line2 />
      <MapProfile>
        <ImageBox />
        <MapName>부산에 가자</MapName>
      </MapProfile>
      <ThemeBox>#맛집</ThemeBox>
      <InputBox>
        <textarea
          type="text"
          placeholder="이곳을 클릭해&#13;&#10; 나에게 여행 스팟을 추천해줄 친구들에게&#13;&#10; 남기고 싶은 한 마디를 작성해보세요...&#13;&#10; 친구들이 추천 시 참고하기 용이할거예요 !"
        />
      </InputBox>
      <NextBtnWhite where={"/mapmaking/share"} text={"Next"} number={"13px"} />
      <NextBtnWhite where={"/mapmaking/done"} text={"Skip"} number={"28px"} />
    </Wrapper>
  );
};

export default DonePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MapProfile = styled.div`
  margin-top: 44px;
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

const ThemeBox = styled.div`
  width: 100%;
  height: 60px;
  border: 1.5px solid var(--black1);
  background: var(--yellow);
  margin-top: 44px;
`;
const InputBox = styled.div`
  margin-bottom: 5px; //차후 조정 필요
  textarea {
    width: 350px;
    height: 120px;
    margin-top: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    resize: none;
    color: var(--black2);
    font-family: "Hack Regular";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
    letter-spacing: 1.4px;
    white-space: pre-line;
  }

  textarea::-webkit-scrollbar {
    display: none;
  }
`;
