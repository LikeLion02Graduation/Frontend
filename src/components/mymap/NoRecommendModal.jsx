import React from "react";
import styled from "styled-components";

const NoRecommendModal = ({ location }) => {
  return (
    <>
      <GrayBox>{location}에 대한 더 많은 정보는 ?</GrayBox>
      <YellowBox>다양한 곳에 링크를 공유하고 받은 추천을 자랑하세요 🤭</YellowBox>
    </>
  );
};

export default NoRecommendModal;

const GrayBox = styled.div`
  position: fixed;
  bottom: 150px;
  /* width: 110vw; */
  width: 441px;
  height: 61px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid var(--black1);
  background: var(--gray);
  transform: rotate(8.527deg);
  cursor: pointer;

  color: var(--black3);
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 600;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
`;

const YellowBox = styled.div`
  position: fixed;
  bottom: 28px;
  /* width: 110vw; */
  width: 441px;
  height: 61px;
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
  font-weight: 900;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
`;
