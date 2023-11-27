import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../../components/_common/TopBar";

const RecommendSearchPage = () => {
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText(inputText);
    setInputText("");
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText="Search" />
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <GrayBox placeholder="검색어를 탭해서 장소 검색하기. . ." onChange={onChange} value={inputText} />
          <SearchBox
            type="submit"
            style={{
              color: inputText ? "var(--white)" : "var(--black1)",
              backgroundColor: inputText ? "var(--black1)" : "var(--white)",
            }}
          >
            Search
          </SearchBox>
        </form>
      </Wrapper>
    </>
  );
};

export default RecommendSearchPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 393px;
  height: 746px;
  background: var(--white);

  form {
    width: 100%;
  }
`;

const GrayBox = styled.input`
  width: 100%;
  height: 60px;
  padding: 0px 30px;
  box-sizing: border-box;
  background-color: var(--gray);
  border: none;
  outline: none;

  color: var(--black2);
  font-family: "Hack Regular";
  font-size: 14px;
  font-weight: 400;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
  opacity: 0.3;
`;

const SearchBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  border: none;
  border-top: 1.5px solid var(--black1);
  border-bottom: 1.5px solid var(--black1);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);

  color: var(--black1);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.75px;
`;
