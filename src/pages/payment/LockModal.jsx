import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LockModal = () => {
  const navigate = useNavigate();

  // const goPayment = () => {
  //   navigate();
  // };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Background />
      <Modal>
        <Box style={{ transform: "rotate(15deg)", background: "var(--gray)" }}>
          <span>부산에 가다2</span>가 탐나신다면 ..
        </Box>
        <Box style={{ transform: "rotate(-15deg)" }}>결제하고 자세히 보기..🫶</Box>
        <Box
          onClick={goBack}
          style={{ marginTop: "150px", fontFamily: "Hack-Regular", fontWeight: "700", cursor: "pointer" }}
        >
          back
        </Box>
      </Modal>
    </>
  );
};

export default LockModal;

const Background = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  background: var(--black1);
`;

const Modal = styled.div`
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  color: var(--black3);
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: 1.4px;
`;

const Box = styled.div`
  margin-top: 125px;
  width: 110vw;
  height: 61px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid var(--black1);
  background: var(--yellow);

  font-family: Apple SD Gothic Neo;

  span {
    font-weight: 900;
  }
`;
