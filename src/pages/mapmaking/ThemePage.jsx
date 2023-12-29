import React, { useState } from "react";
import { styled } from "styled-components";

import { useSelector } from "react-redux";
import { addTheme, deleteTheme } from "../../redux/mapmakingSlice";

import TopBar from "../../components/_common/TopBar";
import { WhiteBox, NextBtnBlack, Wrapper } from "../../components/_common/CommonExport";
import FeedBackModal from "../../components/mapmaking/FeedBackModal";
import KeywordGrid from "../../components/mapmaking/KeywordGrid";

const ThemePage = () => {
  const initSelectedThemes = useSelector((state) => state.mapmaking.hashtag);
  const [selectedKeywords, setSelectedKeywords] = useState(initSelectedThemes);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <TopBar navBtnOn={true} titleText="Making" />
      <Wrapper>
        <WhiteBox text="Q. 당신의 지도는 어떤 테마인가요?(최대 5개!!)" />
        <KeywordGrid {...{ selectedKeywords, setSelectedKeywords }} addReducer={addTheme} deleteReducer={deleteTheme} />
        <FeedbackBtn onClick={() => setIsModalOpen(true)}>어 뭐야 왜없어??</FeedbackBtn>
        <NextBtnBlack where={"/mapmaking/name"} text={"Next"} />
        {isModalOpen && <FeedBackModal onClose={() => setIsModalOpen(false)} />}
      </Wrapper>
    </>
  );
};

export default ThemePage;

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
