import React from "react";
import styled from "styled-components";

const KeywordBox = ({ keywords }) => {
  return (
    <TagContainer>
      {keywords.map((tag, index) => (
        <span key={index}>#{tag}</span>
      ))}
    </TagContainer>
  );
};

export default KeywordBox;

const TagContainer = styled.div`
  padding: 0 30%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  width: 100%;
  height: 60px;
  flex-shrink: 0;
  background: var(--yellow);
  border-top: 1.5px solid var(--black1);
  border-bottom: 1.5px solid var(--black1);

  span {
    display: flex;
    justify-content: center;
    color: var(--black2);
    font-family: Apple SD Gothic Neo;
    font-size: 14px;
    font-weight: 500;
    line-height: 145%; /* 20.3px */
    letter-spacing: 1.4px;
  }

  @media (max-width: 864px) {
    padding: 0 15%;
  }

  @media (max-width: 472px) {
    padding: 0 36px;
  }
`;
