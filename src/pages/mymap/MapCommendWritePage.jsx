import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

//components
import TopBar from "../../components/_common/TopBar";
import { Line1, Line2, NextBtnWhite, Wrapper } from "../../components/_common/CommonExport";
import CommendModal from "../../components/mymap/CommendModal";
import EmojiContainer from "../../components/mymap/EmojiContainer";

//api
import { GetRecomReact, PatchRecomReact, PostRecomReact } from "../../api/map";

const MapCommendWritePage = () => {
  const { recomId } = useParams();
  const navigate = useNavigate();

  const [isSaved, setIsSaved] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [savedEmoji, setSavedEmoji] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await GetRecomReact(recomId);
      setIsSaved("emoji" in response);

      if ("emoji" in response) {
        setInputValue(response.content);
        setSelectedEmoji(response.emoji);
      } else {
        setInputValue("");
        setSelectedEmoji(null);
      }
    };

    getData();
  });

  //반응 남기기 함수
  const saveInputValue = () => {
    const trimmedInputValue = inputValue.trim();

    if (!trimmedInputValue) {
      alert("반응을 작성해주세요.");
    } else if (selectedEmoji === null) {
      alert("이모지를 선택해주세요.");
    } else {
      console.log("Data saved:", trimmedInputValue);

      if (isSaved) {
        PatchRecomReact(recomId, selectedEmoji, trimmedInputValue);
      } else {
        PostRecomReact(recomId, selectedEmoji, trimmedInputValue);
      }
      setSavedEmoji(selectedEmoji);
    }
  };

  //모달 닫기
  const closeModal = () => {
    setSavedEmoji(null);
    navigate(-1);
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText="recommend" />
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

        <EmojiContainer {...{ selectedEmoji, setSelectedEmoji, savedEmoji }} />

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

  &::placeholder {
    opacity: 0.3;
  }

  @media (max-width: 393px) {
    width: 100%;
  }
`;
