import React from "react";
import styled from "styled-components";

const MapTitleText = ({ mapData }) => {
  return (
    <TitleText>
      <div>
        <BlackBackGround>{mapData.location}</BlackBackGround>에 가는
      </div>
      <div>
        <BlackBackGround>{mapData.user.nickname}</BlackBackGround>의 지도
      </div>
    </TitleText>
  );
};

const RecommendTitleText = ({ username }) => {
  return (
    <TextBox>
      <span>
        <BlackBackGround>{username}</BlackBackGround>가 남긴
      </span>
      <BlackBackGround>추천!!</BlackBackGround>
    </TextBox>
  );
};

export { MapTitleText, RecommendTitleText };

const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;

  color: var(--Black3);
  font-size: 30px;
  font-weight: 400;
  line-height: 145%; /* 43.5px */
  letter-spacing: 1.5px;

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

const BlackBackGround = styled.span`
  padding: 1px 12px 0 11px;
  width: fit-content;
  flex-shrink: 0;
  color: var(--white);
  background: var(--black1);

  font-size: 30px;
  font-weight: 400;
  line-height: 145%; /* 43.5px */
  letter-spacing: 1.5px;
`;

const TextBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-shrink: 0;

  color: var(--black3);
  font-size: 30px;
  font-weight: 400;
  line-height: 145%; /* 43.5px */
  letter-spacing: 1.5px;

  span {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;
