import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { Line1, Line2 } from "../../components/_common/CommonExport";

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
            <WhtieBoxBtn>edit</WhtieBoxBtn>
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
                ></InputBox>
                <Line1 />
                {/* 이모지 */}
                <WhtieBoxBtn onClick={saveInputValue}>save</WhtieBoxBtn>
              </>
            ) : (
              <>
                <Commend style={{ opacity: "0.3", paddingLeft: "47px" }}>아직 남겨진 반응이...</Commend>
                <Line1 />
                <WhtieBoxBtn onClick={() => setIsWriting(true)}>write</WhtieBoxBtn>
              </>
            )}
          </>
        )}

        <BlackBoxBtn>back</BlackBoxBtn>
      </Wrapper>
    </>
  );
};

export default MapCommendPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 106px);
  background: var(--white);
  font-family: "Hack Regular";
`;

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
  outline: none;
  border: none;

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

const WhtieBoxBtn = styled.div`
  position: fixed;
  bottom: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342.222px;
  height: 55px;
  flex-shrink: 0;
  border: 1.5px solid var(--black1);
  background: var(--white);
  box-shadow: 0px 0px 6.978px 0.997px rgba(0, 0, 0, 0.03);
  cursor: pointer;

  color: var(--black1);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.75px;
`;

const BlackBoxBtn = styled.div`
  position: fixed;
  bottom: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342.222px;
  height: 55px;
  flex-shrink: 0;
  border: 1.5px solid var(--black1);
  background: var(--black1);
  box-shadow: 0px 0px 6.978px 0.997px rgba(0, 0, 0, 0.03);
  cursor: pointer;

  color: var(--white);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.75px;
`;
