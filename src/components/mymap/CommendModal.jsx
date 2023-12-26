import React from "react";
import styled from "styled-components";

const CommendModal = ({ onClose }) => {
  return (
    <>
      <Background onClick={onClose} />
      <Modal>
        <Text>
          친구가 남긴 추천에
          <br />
          반응이 잘 ~ ~ 남겨졌습니다 !
        </Text>
        <Btn onClick={onClose}>확인</Btn>
      </Modal>
    </>
  );
};

export default CommendModal;

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
  gap: 22px;

  width: 319px;
  height: fit-content;
  flex-shrink: 0;
  padding: 36px 21px 18px 21px;
  box-sizing: border-box;
  border: 0.997px solid #ededed;
  background: var(--white);
  box-shadow: 0px 0px 6.978px 0.997px rgba(0, 0, 0, 0.03);
  font-family: "Hack Regular";

  @media (max-width: 393px) {
    width: 80%;
  }
`;

const Text = styled.div`
  color: var(--black1);
  text-align: center;
  font-size: 15px;
  font-weight: 400;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 41px;
  flex-shrink: 0;
  background: var(--black2);
  box-shadow: 0px 0px 6.978px 0.997px rgba(0, 0, 0, 0.03);
  cursor: pointer;

  color: var(--white);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.7px;
`;
