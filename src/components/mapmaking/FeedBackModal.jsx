import React, { useState } from "react";
import styled from "styled-components";

const FeedBackBtn = (props) => {
  const { isModalOpen, setIsModalOpen } = props;
  return (
    <>
      <FeedBack onClick={() => setIsModalOpen(true)}>어 뭐야 왜없어??</FeedBack>
      {isModalOpen && <FeedBackModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

const FeedBackModal = ({ onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      setIsSubmitted(true);
    } else alert("피드백을 작성해주세요!");
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
            <YellowBox onClick={onClose} style={{ width: "393px", marginTop: "20vh" }}>
              Ok
            </YellowBox>
          </>
        ) : (
          <>
            <GrayBox style={{ marginTop: "8vh", transform: "rotate(15deg)" }}>원하는 태그를 찾지 못했나요?</GrayBox>
            <GrayBox style={{ marginTop: "15vh" }}>내친만에 직접 원하는 태그 추가 요청을 피드백 해보세요!</GrayBox>

            <InputBox placeholder="요기에 입력 !" type="text" value={inputValue} onChange={handleInputChange} />
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

export default FeedBackBtn;

const FeedBack = styled.div`
  margin-top: 8vh;
  width: 110vw;
  height: 61px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid var(--black1);
  background: var(--yellow);
  transform: rotate(-15deg);

  color: var(--black3);
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: 1.4px;
`;

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
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: 1.4px;
`;

const GrayBox = styled.div`
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

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 393px) {
    width: calc(100vw + 6px);
  }
`;

const BtnContainer = styled.div`
  width: 393px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 393px) {
    width: 100vw;
  }
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
