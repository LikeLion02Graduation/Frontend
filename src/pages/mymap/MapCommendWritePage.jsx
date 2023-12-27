import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import TopBar from "../../components/_common/TopBar";
import { Line1, Line2, NextBtnWhite, Wrapper } from "../../components/_common/CommonExport";
import CommendModal from "../../components/mymap/CommendModal";

const MapCommendWritePage = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [savedEmoji, setSavedEmoji] = useState(null);

  const saveInputValue = () => {
    if (inputValue.trim() !== "") {
      console.log("Data saved:", inputValue);
      setSavedEmoji(selectedEmoji);
    }
  };

  const emojiColor = (index) => {
    if (savedEmoji === index) return "black";
    else if (selectedEmoji === index) return "yellow";
    else return "white";
  };

  const closeModal = () => {
    setSavedEmoji(null);
    navigate("/map/1/1/commend");
  };

  console.log(selectedEmoji, savedEmoji);
  const emojis = ["🥰", "😔", "😢", "😭"];

  return (
    <>
      <TopBar navBtnOn={true} where={"/map/1/1/commend"} titleText="recommend" />
      <Wrapper>
        <Title>
          <span>받은 추천에 반응을 남겨 보세요 !</span>
        </Title>
        <Line2 />

        <InputBox
          placeholder="남길 반응을 작성해 주세요."
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Line1 />

        <EmojiContainer>
          {emojis.map((emoji, index) => (
            <EmojiButton
              key={index}
              style={{ backgroundColor: emojiColor(index) }}
              onClick={() => setSelectedEmoji(index)}
            >
              {emoji}
            </EmojiButton>
          ))}
        </EmojiContainer>

        <NextBtnWhite addClickHandler={saveInputValue} text={"반응 남기기 완료 !"} number={"96px"} />
      </Wrapper>

      {savedEmoji && <CommendModal onClose={closeModal} />}
    </>
  );
};

export default MapCommendWritePage;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 61px;

  span {
    color: var(--Black3);
    text-align: center;
    font-family: Apple SD Gothic Neo;
    font-size: 14px;
    font-weight: 600;
    line-height: 145%; /* 20.3px */
    letter-spacing: 1.4px;
  }
`;

const InputBox = styled.input`
  display: flex;
  align-items: center;
  width: 393px;
  padding: 21px 81px 20px 81px;
  box-sizing: border-box;

  color: var(--Black2);
  font-size: 14px;
  font-weight: 400;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
  opacity: 1;

  ::placeholder {
    opacity: 0.3;
  }

  @media (max-width: 393px) {
    width: 100%;
  }
`;

const EmojiContainer = styled.div`
  margin-top: 34px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 331px;
  gap: 17px;

  @media (max-width: 393px) {
    width: calc(100% - 60px);
  }
`;

const EmojiButton = styled.button`
  width: 70px;
  height: 70px;
  border: 1px solid var(--black1);
  border-radius: 50%;
  cursor: pointer;

  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Apple SD Gothic Neo;
  font-size: 30.732px;
  font-weight: 500;

  /* @media (max-width: 393px) {
    width: 50px;
    height: 50px;
  } */
`;
