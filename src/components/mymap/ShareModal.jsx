import React from "react";
import styled from "styled-components";

const ShareModal = ({ onClose, mapId, recomId }) => {
  const domain = "https://naechinman.swygbro.com";
  const mapURL = () => {
    if (recomId) return `${domain}/map/${mapId}/${recomId}`;
    else return `${domain}/map/${mapId}`;
  };

  const copyURL = async () => {
    try {
      await navigator.clipboard.writeText(mapURL());
      console.log("복사된 링크 :", mapURL());
      alert("링크가 복사되었습니다!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Background onClick={onClose} />
      <Modal>
        <MainText>
          추천을 더 잘 받을
          <br />
          수 있는 꿀팁을
          <br />
          大공개 !
        </MainText>
        <SubText>
          스토리 링크 스티커를 이용해
          <br />
          바로가기 링크를 임베드 해 보세요.
        </SubText>
        <LinkBox>{mapURL()}</LinkBox>
        <Btn style={{ marginTop: "12px", background: "var(--yellow)", color: "var(--black1)" }} onClick={copyURL}>
          링크 복사하기
        </Btn>
        <Btn style={{ marginTop: "9px", background: "var(--black2)", color: "var(--white)" }} onClick={onClose}>
          확인
        </Btn>
      </Modal>
    </>
  );
};

export default ShareModal;

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
  width: 319px;
  height: fit-content;
  flex-shrink: 0;
  padding: 31px 21px 25px 21px;
  box-sizing: border-box;
  border: 0.997px solid #ededed;
  background: var(--white);
  box-shadow: 0px 0px 6.978px 0.997px rgba(0, 0, 0, 0.03);
  font-family: "Hack Regular";
`;

const MainText = styled.div`
  color: var(--black3);
  font-size: 30px;
  font-weight: 700;
  line-height: 145%; /* 43.5px */
  letter-spacing: -1.5px;
`;

const SubText = styled.div`
  margin: 30px 0 36px 0;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.75px;
`;

const LinkBox = styled.div`
  flex-shrink: 0;
  padding: 16px 13px;
  box-sizing: border-box;
  border: 0.997px solid #000;
  box-shadow: 0px 0px 6.978px 0.997px rgba(0, 0, 0, 0.03);

  color: var(--black2);
  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
  white-space: pre-line;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 41px;
  flex-shrink: 0;
  box-shadow: 0px 0px 6.978px 0.997px rgba(0, 0, 0, 0.03);
  cursor: pointer;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.7px;
`;
