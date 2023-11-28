import React, { useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import styled from "styled-components";

const PlaceFilter = () => {
  const [siFilterActive, setSiFilterActive] = useState(true);
  const [doFilterActive, setDoFilterActive] = useState(false);

  const siLocations = [
    "서울",
    "부산",
    "인천",
    "대구",
    "광주",
    "울산",
    "대전",
    "세종",
  ];
  const doLocations = [
    "경기도",
    "경상북도",
    "경상남도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "강원도",
    "제주",
  ];

  return (
    <>
      <Filters>
        <SiFilter
          onClick={() => {
            setSiFilterActive(true);
            setDoFilterActive(false);
          }}
        >
          광역시 및 특별시
        </SiFilter>
        <div id="vertical-line" />
        <DoFilter
          onClick={() => {
            setDoFilterActive(true);
            setSiFilterActive(false);
          }}
        >
          도 및 특별자치도
        </DoFilter>
      </Filters>
      <Contents>
        {siFilterActive && !doFilterActive && (
          <SiContent>
            {siLocations.map((location, index) => (
              <button key={index}>{location}</button>
            ))}
          </SiContent>
        )}
        {doFilterActive && (
          <DoContent>
            {doLocations.map((location, index) => (
              <button key={index}>{location}</button>
            ))}
          </DoContent>
        )}
      </Contents>
    </>
  );
};

export default PlaceFilter;

const Filters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1.5px solid #000;
  border-bottom: 1.5px solid #000;
  padding: 21px 46px 20px 46px;
  gap: 20px;
  color: #202329;
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: 1.4px;
`;
const SiFilter = styled.div`
  cursor: pointer;
`;
const DoFilter = styled.div`
  cursor: pointer;
`;
const Contents = styled.div`
  padding: 40px 23px 0px 23px;

  button {
    width: 103px;
    height: 55px;
    border: 1.5px solid #202329;
    background: none;
    cursor: pointer;
  }
`;
const SiContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
`;
const DoContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
`;
