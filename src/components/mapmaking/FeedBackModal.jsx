import React, { useState } from "react";
import styled from "styled-components";

const FeedBackModal = ({ onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // 서버에 데이터 전송
    setIsSubmitted(true);
  };

  return (
    <Wrapper>
      {isSubmitted ? (
        // 제출 완료 후 보여질 새로운 화면
        <>
          <Box1>내친만에 직접 작성해주신 피드백을 전송했어요</Box1>
          <Box2>검토 후 빠른 시일 내에 반영하도록 하겠습니다 ^^</Box2>
          <OkBtn onClick={onClose}>Ok</OkBtn>
        </>
      ) : (
        <>
          <Box3>원하는 태그를 찾지 못했나요?</Box3>
          <Box4>내친만에 직접 원하는 태그 추가 요청을 피드백 해보세요!</Box4>
          <Container1>
            <InputBox placeholder="요기에 입력 !" />
            <Container2>
              <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
              <BackBtn onClick={onClose}>Back</BackBtn>
            </Container2>
          </Container1>
        </>
      )}
    </Wrapper>
  );
};

export default FeedBackModal;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 10;
`;

const Box1 = styled.div`
  margin-top: 125px;
  width: 300%;
  height: 61px;
  transform: rotate(15deg);
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid var(--black1);
  background: var(--yellow);
  color: var(--Background_color, var(--black3));
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: 1.4px;
`;
const Box2 = styled.div`
  margin-top: 125px;
  width: 300%;
  height: 61px;
  transform: rotate(-15deg);
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid var(--black1);
  background: var(--yellow);
  color: var(--Background_color, var(--black3));
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: 1.4px;
`;
const OkBtn = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 61px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid var(--black1);
  background: var(--yellow);
  color: var(--Background_color, var(--black3));
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: 1.4px;
  cursor: pointer;
`;
const Box3 = styled.div`
  margin-top: 125px;
  width: 300%;
  height: 61px;
  transform: rotate(15deg);
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid var(--black1);
  background: #d9d9d9;
  color: var(--Background_color, var(--black3));
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: 1.4px;
`;
const Box4 = styled.div`
  margin-top: 70px; //차후 수정 필요
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 61px;
  flex-shrink: 0;
  border: 1.5px solid var(--black1);
  background: #d9d9d9;
  color: var(--Background_color, var(--black3));
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 145%;
  letter-spacing: 1.4px;
`;

const Container1 = styled.div`
  margin: auto;
`;

const InputBox = styled.input`
  margin-top: 31px;
  width: 456px;
  height: 199px;
  border: 3px solid var(--yellow);
  background-color: var(--white);
  color: rgba(0, 0, 0, 0.3);
  font-family: "Hack Regular";
  font-size: 14.961px;
  font-style: normal;
  font-weight: 400;
  line-height: 145%;
  letter-spacing: 1.496px;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const SubmitBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 38px;
  flex-shrink: 0;
  background-color: var(--yellow);
  color: var(--black1);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

const BackBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 38px;
  flex-shrink: 0;
  background-color: #d9d9d9;
  color: var(--black1);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
