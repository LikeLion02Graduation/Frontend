import React, { useState } from "react";
import styled from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { Line1, WhiteBox, NextBtnBlack } from "../../components/_common/CommonExport";
import FeedBackModal from "../../components/mapmaking/FeedBackModal";

const ThemePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpanModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const Themes = ["#맛집", "#명소", "#카페", "#자연", "#산책", "#빵", "#국밥", "#브런치"];

  return (
    <Wrapper>
      <TopBar navBtnOn={true} titleText="Making" />
      <WhiteBox text={"Q. 당신의 지도는 어떤 테마인가요?"} />
      <Line1 />
      <Content>
        {Themes.map((location, index) => (
          <button key={index}>{location}</button>
        ))}
      </Content>
      <FeedbackBtn onClick={handleOpanModal}>어 뭐야 왜없어??</FeedbackBtn>
      <NextBtnBlack where={"/mapmaking/name"} />
      {isModalOpen && <FeedBackModal onClose={handleCloseModal} />}
    </Wrapper>
  );
};

export default ThemePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);

  button {
    width: 196.5px;
    height: 61px;
    border: 1.5px solid var(--black2);
    border-top: none;
    background: none;
    color: var(--black2);
    text-align: center;
    font-family: Apple SD Gothic Neo;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
    letter-spacing: 1.4px;
    cursor: pointer;
  }
`;

const FeedbackBtn = styled.div`
  margin-top: 116px;
  margin-bottom: 80px; //임시 설정
  width: 110vw;
  height: 61px;
  transform: rotate(-15deg);
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid var(--black1);
  background: var(--yellow);

  color: var(--black3);
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 700;
  line-height: 145%;
  letter-spacing: 1.4px;
  cursor: pointer;
`;
