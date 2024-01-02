import React, { useState } from "react";
import styled from "styled-components";
// import axios from "axios";

const PlaceFilter = ({ onPlaceSelect }) => {
  const [MetroFilterActive, setMetroFilterActive] = useState(true);
  const [doFilterActive, setDoFilterActive] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState(null);
  //const [siLoc, setSiLoc] = useState(null);
  const [selectedDo, setSelectedDo] = useState(null);

  const metroLoc = [
    "서울",
    "부산",
    "인천",
    "대구",
    "광주",
    "울산",
    "대전",
    "세종",
  ];
  const doLoc = [
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

  const siLoc = {
    경기도: [
      "경기도",
      "고양시",
      "용인시",
      "과천시",
      "광명시",
      "광주시",
      "구리시",
      "군포시",
      "김포시",
      "남양주시",
      "동두천시",
      "부천시",
    ],
    경상북도: [
      "경상북도",
      "포항시",
      "경주시",
      "김천시",
      "안동시",
      "구미시",
      "영주시",
    ],
    경상남도: ["경상남도", "고양시", "용인시", "과천시", "광명시"],
    충청북도: ["충청북도", "고양시", "용인시", "과천시", "광명시", "광주시"],
    충청남도: ["충청남도", "고양시", "용인시", "과천시", "광명시"],
    전라북도: ["전라북도", "고양시", "용인시", "과천시"],
    전라남도: ["전라남도", "고양시", "용인시", "과천시", "광명시"],
    강원도: ["강원도", "고양시", "용인시"],
    제주: ["제주", "고양시", "용인시", "과천시"],
  };

  // 백 연동 관련 임시 코드
  {
    /* const getSiLoc = async () => {
    try {
      //const response = await axios.get(`${BASE_URL}/`);
      //setSiLoc(response.data);
    } catch (error) {
      console.error("데이터 받아오기 실패", error);
    }
  }; */
  }

  const handleMetroFilterClick = () => {
    setMetroFilterActive(true);
    setDoFilterActive(false);
    setSelectedBtn(null);
  };

  const handleDoFilterClick = () => {
    setDoFilterActive(true);
    setMetroFilterActive(false);
    setSelectedBtn(null);
    //setSiLoc(null);
    setSelectedDo(null);
  };

  const handleBtnClick = (location) => {
    if (selectedBtn === location) {
      console.log("선택 취소: ", location);
      setSelectedBtn(null);
      //setSiLoc(null);
      setSelectedDo(null);
      onPlaceSelect(null);
    } else {
      console.log("새로운 선택: ", location);
      setSelectedBtn(location);
      //getSiLoc(location);
      setSelectedDo(siLoc[location]);
      if (!siLoc[location]) {
        onPlaceSelect(location);
      }
    }
  };

  const handleSiLocBtnClick = (location, index) => {
    if (index === 0) {
      console.log("뒤로 가기 선택: ", location);
      setSelectedBtn(null);
      setSelectedDo(null);
      onPlaceSelect(null);
    } else {
      if (selectedBtn === location) {
        console.log("선택 취소: ", location);
        setSelectedBtn(null);
        onPlaceSelect(null);
      } else {
        console.log("새로운 선택: ", location);
        setSelectedBtn(location);
        onPlaceSelect(location);
      }
    }
  };

  return (
    <>
      <Filters>
        <MetroFilter
          onClick={handleMetroFilterClick}
          $active={MetroFilterActive}
        >
          광역시 및 특별시
        </MetroFilter>
        <DoFilter onClick={handleDoFilterClick} $active={doFilterActive}>
          도 및 특별자치도
        </DoFilter>
      </Filters>
      <Contents>
        {MetroFilterActive && !doFilterActive && (
          <MetroContent>
            {metroLoc.map((location, index) => (
              <button
                key={index}
                onClick={() => handleBtnClick(location)}
                style={{
                  backgroundColor:
                    selectedBtn === location ? "var(--yellow)" : "var(--white)",
                }}
              >
                {location}
              </button>
            ))}
          </MetroContent>
        )}
        {doFilterActive && (
          <>
            {selectedDo ? (
              <SiContent>
                {selectedDo &&
                  selectedDo.map((location, index) => (
                    <button
                      key={index}
                      onClick={() => handleSiLocBtnClick(location, index)}
                      style={{
                        backgroundColor:
                          index === 0
                            ? "var(--yellow)"
                            : selectedBtn === location
                            ? "#D9D9D9"
                            : "var(--white)",
                      }}
                    >
                      {location}
                    </button>
                  ))}
              </SiContent>
            ) : (
              <DoContent>
                {doLoc.map((location, index) => (
                  <button
                    key={index}
                    onClick={() => handleBtnClick(location)}
                    style={{
                      backgroundColor:
                        selectedBtn === location
                          ? "var(--yellow)"
                          : "var(--white)",
                    }}
                  >
                    {location}
                  </button>
                ))}
              </DoContent>
            )}
          </>
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
  width: 100%;
  color: var(--black2);
  text-align: center;
  font-family: "Apple SD Gothic Neo";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: 1.4px;
`;

const FilterStyle = styled.div`
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "var(--yellow)" : "none")};
`;

const MetroFilter = styled(FilterStyle)`
  border: 1.5px solid var(--black2);
  border-left: none;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 48px;
`;
const DoFilter = styled(FilterStyle)`
  border: 1.5px solid var(--black2);
  border-left: none;
  border-right: none;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 47px;
`;

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

const MetroContent = styled.div`
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

const SiContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
`;
