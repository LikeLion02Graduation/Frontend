import React from "react";
import styled from "styled-components";

const LinkCopyModal = ({ onClose }) => {
  return (
    <>
      <Background onClick={onClose} />
      <Modal>
        <Box style={{ transform: "rotate(15deg)" }}>내 지도 링크를 클립보드에 복사했어요</Box>
        <Box style={{ transform: "rotate(-15deg)" }}>다양한 곳에 링크를 공유하고 받은 추천을 자랑하세요 🤭</Box>
        <Box
          style={{
            width: "393px",
            marginTop: "20vh",
            fontFamily: "Hack Regular",
            fontWeight: "700",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          Ok
        </Box>
      </Modal>
    </>
  );
};

export default LinkCopyModal;

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
`;
