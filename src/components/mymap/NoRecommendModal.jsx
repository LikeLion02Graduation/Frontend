import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NoRecommendModal = ({ location }) => {
  const navigate = useNavigate();

  const goHotMap = () => {
    navigate(`/hotmap/${location}`);
  };

  return (
    <Container>
      <GrayBox>{location}에 대한 더 많은 정보는 ?</GrayBox>
      <YellowBox onClick={goHotMap}>추천 콘텐츠 보러 가기</YellowBox>
    </Container>
  );
};

export default NoRecommendModal;

const Container = styled.div`
  position: fixed;
  bottom: 4vh;
  width: 110%;

  color: var(--black3);
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 600;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;

  div {
    height: 61px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1.5px solid var(--black1);
  }
`;

const GrayBox = styled.div`
  background: var(--gray);

  @media (max-width: 430px) {
    margin-bottom: 5vh;
    border-bottom: 1.5px solid var(--black1);
    transform: rotate(8.527deg);
  }
`;

const YellowBox = styled.div`
  background: var(--yellow);
  border-bottom: 1.5px solid var(--black1);
  cursor: pointer;

  font-family: Apple SD Gothic Neo SB;
  font-weight: 900;
`;
