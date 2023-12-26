import React, { useState } from "react";
import styled from "styled-components";

import TopBar from "../../components/_common/TopBar";
import {
  Line1,
  Line2,
  WhiteBox,
  NextBtnBlack,
} from "../../components/_common/CommonExport";
import FeedBackModal from "../../components/mapmaking/FeedBackModal";

const ThemePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState([]);

  const handleOpanModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleThemeClick = (clickedTheme) => {
    if (selectedTheme.includes(clickedTheme)) {
      setSelectedTheme((prevTheme) =>
        prevTheme.filter((theme) => theme !== clickedTheme)
      );
    } else {
      setSelectedTheme((prevTheme) => [...prevTheme, clickedTheme]);
    }

    console.log(selectedTheme);
  };

  const Themes = [
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
    <Wrapper>
      <TopBar navBtnOn={true} titleText="Making" />
      <WhiteBox text={"Q. 당신의 지도는 어떤 테마인가요?"} />
      <Line1 />
      <Content>
        {Themes.map((theme) => (
          <Button
            key={theme}
            onClick={() => handleThemeClick(theme)}
            selected={selectedTheme.includes(theme)}
          >
            #{theme}
          </Button>
        ))}
      </Content>
      <FeedbackBtn onClick={handleOpanModal}>어 뭐야 왜없어??</FeedbackBtn>
      <NextBtnBlack where={"/mapmaking/name"} />
      {isModalOpen && (
        <>
          <Overlay />
          <FeedBackModal onClose={handleCloseModal} />
        </>
      )}
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
  width: 393px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 61px;
  border: 1.5px solid var(--black2);
  border-top: none;
  color: var(--black2);
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: 1.4px;
  background-color: ${(props) =>
    props.selected ? "var(--yellow)" : "var(--white)"};
  cursor: pointer;
`;

const FeedbackBtn = styled.div`
  margin-top: 116px;
  margin-bottom: 80px; //임시 설정
  width: 300%;
  height: 61px;
  transform: rotate(-15deg);
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid var(--black1);
  background: var(--yellow);
  color: var(--Background_color, var(--black3));
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 145%;
  letter-spacing: 1.4px;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9;
`;
