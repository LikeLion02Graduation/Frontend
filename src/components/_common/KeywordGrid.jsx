import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";

const KeywordGrid = (props) => {
  const dispatch = useDispatch();
  const { selectedKeywords, setSelectedKeywords, addReducer, deleteReducer } =
    props;

  const handleKeywordClick = (keyword) => {
    const isSelected = selectedKeywords.includes(keyword);
    const currentSelectedCount = selectedKeywords.length;

    const updatedSelectedKeywords = isSelected
      ? selectedKeywords.filter(
          (selectedKeyword) => selectedKeyword !== keyword
        )
      : currentSelectedCount < 5
      ? [...selectedKeywords, keyword]
      : selectedKeywords;

    setSelectedKeywords(updatedSelectedKeywords);

    if (!isSelected && currentSelectedCount >= 5) {
      alert("최대 5개의 키워드까지만 선택할 수 있습니다.");
    }

    if (isSelected) {
      dispatch(deleteReducer(keyword));
    } else if (currentSelectedCount < 5) {
      dispatch(addReducer(keyword));
    }
  };

  const keywords = [
    "맛집",
    "명소",
    "카페",
    "자연",
    "산책",
    "빵",
    "비건",
    "브런치",
  ];
  return (
    <>
      <Grid>
        {keywords.map((keyword, index) => (
          <Keyword
            key={keyword}
            onClick={() => handleKeywordClick(keyword)}
            style={{
              backgroundColor: selectedKeywords?.includes(keyword)
                ? "var(--yellow)"
                : "var(--white)",
            }}
            className={index % 2 === 0 ? "left-column" : "right-column"}
          >
            <span>#{keyword}</span>
          </Keyword>
        ))}
      </Grid>
      <Noti>키워드 선택은 최대 5개까지..</Noti>
    </>
  );
};

export default KeywordGrid;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  background-color: var(--black1);
  gap: 1.5px;
  padding: 1.5px 0;

  color: var(--black2);
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 500;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;

  .left-column {
    display: flex;
    justify-content: end;
    padding-right: 81px;
    box-sizing: border-box;
  }

  .right-column {
    padding-left: 81px;
    box-sizing: border-box;
  }
`;

const Keyword = styled.div`
  display: flex;
  align-items: center;
  height: 61px;
  cursor: pointer;
`;

const Noti = styled.div`
  margin-top: 71px;
  color: var(--black2);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 14px;
  font-weight: 400;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
`;
