import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

const MapTitleText = ({ mapData }) => {
  const mapPlace = useSelector((state) => state.mapmaking.place);

  return (
    <TitleText>
      <div>
        <BlackBackGround>{mapData.location}</BlackBackGround>에 가는
        {/*<BlackBackGround>{mapPlace}</BlackBackGround>에 가는*/}
      </div>
      <div>
        <BlackBackGround>예원이</BlackBackGround>의 지도
      </div>
    </TitleText>
  );
};

export default MapTitleText;

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
