import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const HomeBuyingModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleHotMap = () => {
    navigate(`/homebuying`);
  };

  return (
    <>
      <Overlay />
      <Wrapper>
        <GreyBox style={{ transform: "rotate(15deg)" }}>
          아직 구매한 지도가 없네요..🥺
        </GreyBox>
        <GreyBox style={{ transform: "rotate(-15deg)" }}>
          더 많은 정보를 얻고 싶다면..
        </GreyBox>
        <YellowBox
          onClick={handleHotMap}
          style={{ width: "393px", marginTop: "20vh" }}
        >
          여기를 눌러 추천 콘텐츠를 받아보세요!
        </YellowBox>
      </Wrapper>
    </>
  );
};

export default HomeBuyingModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GreyBox = styled.div`
  margin-top: 15vh;
  width: 110vw;
  height: 61px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid var(--black1);
  background: #d9d9d9;

  color: var(--black3);
  text-align: center;
  font-family: "Apple SD Gothic Neo";
  font-size: 14px;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: 1.4px;
`;

const YellowBox = styled.div`
  margin-top: 15vh;
  width: 110vw;
  height: 61px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid var(--black1);
  background: var(--yellow);

  color: var(--black3);
  text-align: center;
  font-family: "Apple SD Gothic Neo";
  font-size: 14px;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: 1.4px;
`;
