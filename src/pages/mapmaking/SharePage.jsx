import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import TopBar from "../../components/_common/TopBar";
import { WhiteBox, NextBtnWhite } from "../../components/_common/CommonExport";

const SharePage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <TopBar navBtnOn={true} titleText="Making" />
      <WhiteBox text={"Q. 스토리 공유로 더 많은 추천을 받아보는 건 어때요"} />
      <ShareBtn>Share to Instagram</ShareBtn>
      <NextBtnWhite where={"/mapmaking/done"} text={"Skip"} number={"28px"} />
    </Wrapper>
  );
};

export default SharePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShareBtn = styled.div`
  margin-bottom: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342.222px;
  height: 55px;
  color: var(--black1);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
  border: 1.5px solid var(--black1);
  background: var(--white);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
  cursor: pointer;
`;
