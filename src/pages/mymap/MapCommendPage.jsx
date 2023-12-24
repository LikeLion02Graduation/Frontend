import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { Line1, Line2, NextBtnBlack, NextBtnWhite, Wrapper } from "../../components/_common/CommonExport";

const MapCommendPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const [isWriting, setIsWriting] = useState(false);

  const saveInputValue = () => {
    if (inputValue.trim() !== "") {
      console.log("Data saved:", inputValue);
      setIsSaved(true);
    }
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText="recommend" />
      <Wrapper>
        <Title>
          <span>여기 안가면 평생 후회할 것입니다.</span>
          <span>에 대한 반응</span>
        </Title>
        <Line2 />

        {isSaved ? (
          <>
            <Commend>아..... 진짜 너무 맛있고 눈물만 나는 엄청난 맛입니다.</Commend>
            <Line1 />
            <NextBtnWhite text={"edit"} number={"96px"} />
          </>
        ) : (
          <>
            {isWriting ? (
              <>
                <InputBox
                  placeholder="추천에 대한 코멘트를 적어주세요."
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Line1 />
                {/* 이모지 */}
                <NextBtnWhite onClick={saveInputValue} text={"save"} number={"96px"} />
              </>
            ) : (
              <>
                <Commend style={{ opacity: "0.3", paddingLeft: "47px" }}>아직 남겨진 반응이...</Commend>
                <Line1 />
                <NextBtnWhite onClick={() => setIsWriting(true)} text={"write"} number={"96px"} />
              </>
            )}
          </>
        )}

        <NextBtnBlack text={"back"} number={"28px"} />
      </Wrapper>
    </>
  );
};

export default MapCommendPage;

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

  span:nth-child(1) {
    display: -webkit-box;
    width: 144px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 800;
  }
`;

const Commend = styled.div`
  display: flex;
  align-items: center;
  width: 390px;
  padding: 21px 42.5px 20px 42.5px;
  box-sizing: border-box;

  color: var(--Black2);
  font-size: 14px;
  font-weight: 400;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
`;

const InputBox = styled.input`
  display: flex;
  align-items: center;
  width: 390px;
  padding: 21px 47px 20px 47px;
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
`;
