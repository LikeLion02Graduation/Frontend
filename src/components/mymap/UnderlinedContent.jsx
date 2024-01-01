import React from "react";
import styled from "styled-components";

const UnderlinedContent = ({ recommendData }) => {
  return (
    <Container>
      <Content>{recommendData.content}</Content>
      <Underline>
        <div />
        <div />
        <div />
        <div />
      </Underline>
    </Container>
  );
};

export default UnderlinedContent;

const Container = styled.div`
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 216px;
  flex-shrink: 0;
`;

const Content = styled.div`
  position: absolute;
  top: 12px;
  width: 340px;
  line-height: 50px;

  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-weight: 400;
`;

const Underline = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100vw;

  div {
    margin-top: 50px;
    height: 1px;
    background: var(--black1);
  }
`;
