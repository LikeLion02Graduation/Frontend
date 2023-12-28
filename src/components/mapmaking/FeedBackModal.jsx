import React, { useState } from "react";
import styled from "styled-components";

const FeedBackModal = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // 서버에 데이터 전송
    setIsSubmitted(true);
  };

  return (
    <>
      <Overlay />
      <Wrapper>
        {isSubmitted ? (
          // 제출 완료 후 보여질 새로운 화면
          <>
            <YellowBox style={{ transform: "rotate(15deg)" }}>내친만에 직접 작성해주신 피드백을 전송했어요</YellowBox>
            <YellowBox style={{ transform: "rotate(-15deg)" }}>
              검토 후 빠른 시일 내에 반영하도록 하겠습니다 ^^
            </YellowBox>
            <YellowBox onClick={onClose} style={{ marginTop: "150px" }}>
              Ok
            </YellowBox>
          </>
        ) : (
          <>
            <GrayBox style={{ transform: "rotate(15deg)" }}>원하는 태그를 찾지 못했나요?</GrayBox>
            <GrayBox style={{ marginTop: "70px" }}>내친만에 직접 원하는 태그 추가 요청을 피드백 해보세요!</GrayBox>

            <InputBox placeholder="요기에 입력 !" />
            <BtnContainer>
              <Btn onClick={handleSubmit} style={{ background: "var(--yellow)" }}>
                Submit
              </Btn>
              <Btn onClick={onClose} style={{ background: "var(--gray)" }}>
                Back
              </Btn>
            </BtnContainer>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default FeedBackModal;

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const YellowBox = styled.div`
  margin-top: 125px;
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
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: 1.4px;
`;

const GrayBox = styled.div`
  margin-top: 125px;
  width: 110vw;
  height: 61px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid var(--black1);
  background: var(--gray);

  color: var(--black3);
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: 1.4px;
`;

const InputBox = styled.textarea`
  margin-top: 31px;
  padding: 18px 22px;
  box-sizing: border-box;
  width: 393px;
  height: 199px;
  border: 3px solid var(--yellow);
  background-color: var(--white);

  color: var(--black1);
  font-family: "Hack Regular";
  font-size: 14.961px;
  font-weight: 400;
  line-height: 145%;
  letter-spacing: 1.496px;

  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

const BtnContainer = styled.div`
  width: 393px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 38px;
  flex-shrink: 0;

  color: var(--black1);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;
