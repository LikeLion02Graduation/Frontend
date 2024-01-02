import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NoRecommendModal = ({ location }) => {
  const navigate = useNavigate();

  const goHotMap = () => {
    navigate(`/hotmap/${location}`);
  };

  return (
    <>
      <GrayBox>{location}에 대한 더 많은 정보는 ?</GrayBox>
      <YellowBox onClick={goHotMap}>추천 콘텐츠 보러 가기</YellowBox>
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
  cursor: pointer;

  color: var(--black3);
  text-align: center;
  font-family: Apple SD Gothic Neo SB;
  font-size: 14px;
  font-weight: 900;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
`;
