import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import TopBar from "../../components/_common/TopBar";
import {
  WhiteBox,
  NextBtnWhite,
  Line1,
  Line2,
} from "../../components/_common/CommonExport";

const NamePage = () => {
  return (
    <Wrapper>
      <TopBar navBtnOn={true} titleText="Making" />
      <WhiteBox text={"Q. 새로 만들어질 지도의 이름을 붙여주세요!"} />
      <Line2 />
      <InputBox placeholder="내 지도의 이름은..." />
      <Line1 />
      <div id="temporary" />
      <NextBtnWhite where={"/mapmaking/image"} text={"Next"} number={"96px"} />
    </Wrapper>
  );
};

export default NamePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #temporary {
    margin-bottom: 443px;
  }
`;

const InputBox = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 61px;
  border: none;
  color: var(--black2);
  font-family: "Hack Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 145%;
  letter-spacing: 1.4px;
`;
