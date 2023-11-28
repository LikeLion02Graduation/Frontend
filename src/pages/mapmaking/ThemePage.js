import React from "react";
import styled from "styled-components";

const ThemePage = () => {
  const Themes = [
    "#맛집",
    "#명소",
    "#카페",
    "#자연",
    "#산책",
    "#빵",
    "#국밥",
    "#브런치",
  ];

  return (
    <Wrapper>
      <Question>Q. 당신의 지도는 어떤 테마인가요?</Question>
      <Content>
        {Themes.map((location, index) => (
          <button key={index}>{location}</button>
        ))}
      </Content>
      <FeedbackBtn>어 뭐야 왜없어??</FeedbackBtn>
      <NextBtn>Next</NextBtn>
    </Wrapper>
  );
};

export default ThemePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Question = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 128px;
  font-family: Hack;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 145%;
  letter-spacing: 1.4px;
  padding: 22px 29px 19px 29px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);

  button {
    width: 196.5px;
    height: 61px;
    border: 1.5px solid #202329;
    background: none;
    color: #202329;
    text-align: center;
    font-family: Apple SD Gothic Neo;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 145%; /* 20.3px */
    letter-spacing: 1.4px;
    cursor: pointer;
  }
`;

const FeedbackBtn = styled.div`
  margin-top: 116px;
  width: 441px;
  height: 61px;
  transform: rotate(-15deg);
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #000;
  background: #fff500;
  color: var(--Background_color, #262932);
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 145%;
  letter-spacing: 1.4px;
`;

const NextBtn = styled.div`
  margin-top: 15.94px;
  margin-bottom: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342.222px;
  height: 55px;
  color: #fff;
  text-align: center;
  font-family: Hack;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
  border: 1.5px solid #000;
  background: #000;
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
`;
