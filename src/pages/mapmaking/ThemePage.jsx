import React, { useState } from "react";
import { styled } from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { addTheme, deleteTheme } from "../../redux/mapmakingSlice";

import TopBar from "../../components/_common/TopBar";
import {
  WhiteBox,
  NextBtnBlack,
  Wrapper,
} from "../../components/_common/CommonExport";
import FeedBackModal from "../../components/mapmaking/FeedBackModal";

const ThemePage = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initSelectedThemes = useSelector((state) => state.mapmaking.hashtag);
  const [selectedThemes, setSelectedThemes] = useState(initSelectedThemes);

  const handleThemeClick = (theme) => {
    const isSelected = selectedThemes.includes(theme);
    const updatedSelectedThemes = isSelected
      ? selectedThemes.filter((selectedTheme) => selectedTheme !== theme)
      : [...selectedThemes, theme];

    setSelectedThemes(updatedSelectedThemes);
    console.log(selectedThemes);

    if (isSelected) {
      dispatch(deleteTheme(theme));
    } else {
      dispatch(addTheme(theme));
    }
  };

  const themes = [
    "맛집",
    "명소",
    "카페",
    "자연",
    "산책",
    "빵",
    "국밥",
    "브런치",
  ];

  return (
    <>
      <TopBar navBtnOn={true} titleText="giving" />
      <Wrapper>
        <WhiteBox text="Q. 당신의 지도는 어떤 테마인가요?(최대 5개!!)" />
        <ThemeGrid>
          {themes.map((theme, index) => (
            <Button
              key={theme}
              onClick={() => handleThemeClick(theme)}
              style={{
                backgroundColor: selectedThemes?.includes(theme)
                  ? "var(--yellow)"
                  : "var(--white)",
              }}
              className={index % 2 === 0 ? "left-column" : "right-column"}
            >
              <span>#{theme}</span>
            </Button>
          ))}
        </ThemeGrid>
        <FeedbackBtn onClick={() => setIsModalOpen(true)}>
          어 뭐야 왜없어??
        </FeedbackBtn>
        <NextBtnBlack where={"/mapmaking/name"} text={"Next"} />
        {isModalOpen && <FeedBackModal onClose={() => setIsModalOpen(false)} />}
      </Wrapper>
    </>
  );
};

export default ThemePage;

const ThemeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  background-color: var(--black1);
  gap: 1.5px;
  padding: 1.5px 0;

  color: var(--black2);
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 500;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;

  .left-column {
    display: flex;
    justify-content: end;
    padding-right: 81px;
    box-sizing: border-box;
  }

  .right-column {
    padding-left: 81px;
    box-sizing: border-box;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  height: 61px;
  cursor: pointer;
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
