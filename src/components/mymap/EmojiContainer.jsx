import React from "react";
import styled from "styled-components";

const EmojiContainer = (props) => {
  const { selectedEmoji, setSelectedEmoji, savedEmoji } = props;

  const emojis = ["🥰", "😔", "😢", "😭"];

  //이모지 선택
  const selectEmoji = (index) => {
    setSelectedEmoji((prevSelectedEmoji) => (prevSelectedEmoji === index ? null : index));
  };

  //이모지 배경 색 설정
  const emojiColor = (index) => {
    if (savedEmoji === index) return "black";
    else if (selectedEmoji === index) return "yellow";
    else return "white";
  };

  return (
    <Container>
      {emojis.map((emoji, index) => (
        <EmojiButton key={index} style={{ backgroundColor: emojiColor(index) }} onClick={() => selectEmoji(index)}>
          {emoji}
        </EmojiButton>
      ))}
    </Container>
  );
};

export default React.memo(EmojiContainer);

const Container = styled.div`
  margin-top: 34px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 331px;
  gap: 17px;
`;

const EmojiButton = styled.button`
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  border: 1px solid var(--black1);
  border-radius: 50%;
  cursor: pointer;

  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Apple SD Gothic Neo;
  font-size: 30.732px;
  font-weight: 500;

  @media (max-width: 330px) {
    width: 60px;
    height: 60px;
  }
`;
