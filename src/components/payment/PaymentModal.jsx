import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PaymentModal = () => {
  const navigate = useNavigate();

  // const goMain = () => {
  //   navigate(`/`);
  // };

  const goHotmap = () => {
    navigate(`/payment/hotmap`);
  };

  return (
    <>
      <Background />
      <Modal>
        <Box style={{ transform: "rotate(15deg)" }}>성공적으로 구매가 완료되었습니다 !</Box>
        <Box style={{ transform: "rotate(-15deg)" }}>내 지도에서 확인하기</Box>
        <Box
          style={{
            width: "393px",
            marginTop: "20vh",
            background: "var(--gray)",
            fontFamily: "Hack Regular",
            fontWeight: "700",
            cursor: "pointer",
          }}
          onClick={goHotmap}
        >
          추천 콘텐츠 더 알아보기
        </Box>
      </Modal>
    </>
  );
};

export default PaymentModal;

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
  margin-top: 15vh;
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
