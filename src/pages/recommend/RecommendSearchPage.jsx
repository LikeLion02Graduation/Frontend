import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../../components/_common/TopBar";
import RecommendResultPage from "./RecommendResultPage";
import { Wrapper } from "../../components/_common/CommonExport";

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
      <TopBar navBtnOn={true} where={"/recommend/main"} titleText="Search" />
      <Wrapper>
        <SearchForm onSubmit={handleSubmit}>
          <GrayBox>
            <input type="text" placeholder="검색어를 탭해서 장소 검색하기. . ." onChange={onChange} value={inputText} />
          </GrayBox>
          <SearchBox
            type="submit"
            style={{
              color: inputText ? "var(--white)" : "var(--black1)",
              backgroundColor: inputText ? "var(--black1)" : "var(--white)",
            }}
          >
            Search
          </SearchBox>
        </SearchForm>
      </Wrapper>
      {searchText && <RecommendResultPage searchText={searchText} setSearchText={setSearchText} />}
    </>
  );
};

export default RecommendSearchPage;

const SearchForm = styled.form`
  width: 100vw;
`;

const GrayBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray);

  input {
    width: 393px;
    padding: 0 30px;
    box-sizing: border-box;
    background-color: var(--gray);

    color: var(--black2);
    font-family: "Hack Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 145%; /* 20.3px */
    letter-spacing: 1.4px;

    &::placeholder {
      color: var(--black2);
      opacity: 0.3;
    }

    @media (max-width: 393px) {
      width: 100%;
    }
  }
`;

const SearchBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
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
