import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { Line2, YellowBox } from "../../components/_common/CommonExport";

const RecommendResultPage = () => {
  const [isSelected, setSelected] = useState(true);

  return (
    <>
      <TopBar navBtnOn={true} titleText="Result" />
      <Wrapper>
        <SearchAgain>탭해서 [다시] 장소 검색하기. . .</SearchAgain>
        <Line2 />
        {isSelected ? (
          <>
            <div></div>
            <YellowBox text="이 장소가 맞나요?" font={"Hack Regular"} weight={"400"} />
            <Buttons>
              <div>y</div>
              <div style={{ background: "var(--white)", color: "var(--black1)" }}>N</div>
            </Buttons>
          </>
        ) : (
          <>
            <ListBox>
              <Index>1</Index>
              <Info>
                <div>명동교자 이태원점</div>
                <div>명동교자 이태원점</div>
                <div style={{ opacity: "0.3" }}>명동교자 이태원점</div>
                <div style={{ opacity: "0.3", fontFamily: "Hack Regular", fontWeight: "400" }}>명동교자 이태원점</div>
              </Info>
            </ListBox>
            <Line2 />
          </>
        )}
      </Wrapper>
    </>
  );
};

export default RecommendResultPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 393px;
  height: 746px;
  background: var(--white);
`;

const SearchAgain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 61px;
  padding-left: 30px;
  box-sizing: border-box;

  color: var(--Black2);
  font-family: "Hack Regular";
  font-size: 14px;
  font-weight: 400;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
  opacity: 0.3;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 145px;
  padding-top: 31px;
  box-sizing: border-box;

  color: var(--black3);
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 600;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
`;

const Index = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 29px 0px 31px;
  width: 27px;
  height: 27px;
  flex-shrink: 0;
  border: 1.2px solid var(--black1);

  font-family: "Hack Regular";
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 142px;
    height: 41px;
    flex-shrink: 0;
    border: 1.5px solid var(--black1);
    background: var(--black1);
    box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
    color: var(--white);
  }
`;
