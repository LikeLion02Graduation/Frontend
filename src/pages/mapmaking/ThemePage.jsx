import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { addTheme, deleteTheme } from "../../redux/mapmakingSlice";

import TopBar from "../../components/_common/TopBar";
import {
  WhiteBox,
  NextBtnBlack,
  Wrapper,
} from "../../components/_common/CommonExport";
import KeywordGrid from "../../components/_common/KeywordGrid";
import FeedBackBtn from "../../components/mapmaking/FeedBackModal";

const ThemePage = () => {
  const navigate = useNavigate();
  const initSelectedThemes = useSelector((state) => state.mapmaking.hashtag);
  const [selectedKeywords, setSelectedKeywords] = useState(initSelectedThemes);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isThemeSelected = () => {
    return selectedKeywords.length > 0;
  };

  const handleNextBtn = () => {
    if (isThemeSelected()) {
      // Theme이 선택되어 있는 경우
      navigate("/mapmaking/name");
    } else {
      // Theme 선택 안 한 경우
      alert("테마를 최소 1개 이상 선택하세요.");
    }
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText="Making" />
      <Wrapper>
        <WhiteBox text="Q. 당신의 지도는 어떤 테마인가요?(최대 5개!!)" />
        <KeywordGrid
          {...{ selectedKeywords, setSelectedKeywords }}
          addReducer={addTheme}
          deleteReducer={deleteTheme}
        />
        <FeedBackBtn {...{ isModalOpen, setIsModalOpen }} />
        <NextBtnBlack addClickHandler={handleNextBtn} />
      </Wrapper>
    </>
  );
};

export default ThemePage;

const BoxB = styled.div`
  position: fixed;
  bottom: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342.222px;
  height: 55px;
  flex-shrink: 0;

  color: var(--white);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.75px;
  border: 1.5px solid var(--black1);
  background: var(--black1);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
  cursor: pointer;

  @media (max-height: 852px) {
    position: static;
    margin-top: 80px;
    margin-bottom: 81px;
  }
`;
