import React, { useState } from "react";
import styled from "styled-components";
import { Line1, Line2 } from "../../components/_common/CommonExport";

const PlaceFilter = () => {
  const [siFilterActive, setSiFilterActive] = useState(false);
  const [doFilterActive, setDoFilterActive] = useState(true);
  const [selectedBtn, setSelectedBtn] = useState(null);

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

  const handleSiFilterClick = () => {
    setSiFilterActive(true);
    setDoFilterActive(false);
    setSelectedBtn(null);
  };

  const handleDoFilterClick = () => {
    setDoFilterActive(true);
    setSiFilterActive(false);
    setSelectedBtn(null);
  };

  const handleBtnClick = (location) => {
    setSelectedBtn(location);
  };

  return (
    <>
      <Line1 />
      <Filters>
        <SiFilter onClick={handleSiFilterClick} active={siFilterActive}>
          광역시 및 특별시
        </SiFilter>
        <VerticalLine />
        <DoFilter onClick={handleDoFilterClick} active={doFilterActive}>
          도 및 특별자치도
        </DoFilter>
      </Filters>
      <Line2 />
      <Contents>
        {siFilterActive && !doFilterActive && (
          <SiContent>
            {siLocations.map((location, index) => (
              <button
                key={index}
                onClick={() => handleBtnClick(location)}
                style={{
                  backgroundColor:
                    selectedBtn === location ? "var(--yellow)" : "none",
                }}
              >
                {location}
              </button>
            ))}
          </SiContent>
        )}
        {doFilterActive && (
          <DoContent>
            {doLocations.map((location, index) => (
              <button
                key={index}
                onClick={() => handleBtnClick(location)}
                style={{
                  backgroundColor:
                    selectedBtn === location ? "var(--yellow)" : "none",
                }}
              >
                {location}
              </button>
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
  padding: 0px 46px 0px 46px;
  gap: 30px;
  color: var(--black2);
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: 1.4px;
`;

const VerticalLine = styled.div`
  border-right: 1.5px solid var(--black1);
  height: 61px;
`;

const FilterStyle = styled.div`
  cursor: pointer;
  background-color: ${(props) => (props.active ? "var(--yellow)" : "none")};
`;

const SiFilter = styled(FilterStyle)``;
const DoFilter = styled(FilterStyle)``;

const Contents = styled.div`
  padding: 40px 23px 0px 23px;

  button {
    width: 103px;
    height: 55px;
    border: 1.5px solid var(--black2);
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
