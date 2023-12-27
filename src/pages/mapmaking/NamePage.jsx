import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../redux/mapmakingSlice";

import TopBar from "../../components/_common/TopBar";
import {
  WhiteBox,
  NextBtnWhite,
  Line1,
  Line2,
  Wrapper,
} from "../../components/_common/CommonExport";

const NamePage = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({ name: "" });

  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const saveData = () => {
    const trimmedName = inputValue.name.trim();

    if (trimmedName === "") {
      alert("이름을 작성해주세요");
    } else {
      dispatch(setName({ name: trimmedName }));
    }
  };

  return (
    <Wrapper>
      <TopBar navBtnOn={true} titleText="Making" />
      <WhiteBox text={"Q. 새로 만들어질 지도의 이름을 붙여주세요!"} />
      <Line2 />
      <InputBox>
        <input
          placeholder="내 지도의 이름은..."
          type="text"
          name="name"
          value={inputValue.name}
          onChange={handleInputChange}
        />
      </InputBox>
      <Line1 />
      <div id="temporary" />

      <NextBtnWhite
        where={"/mapmaking/image"}
        text={"Next"}
        number={"96px"}
        addClickHandler={saveData}
      />
    </Wrapper>
  );
};

export default NamePage;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 61px;
  input {
    display: flex;
    justify-content: flex-start;
    border: none;
    color: var(--black2);
    font-family: "Hack Regular";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
    letter-spacing: 1.4px;
    outline: none;
  }
`;
