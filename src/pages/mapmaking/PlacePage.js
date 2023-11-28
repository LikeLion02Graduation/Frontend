import React from "react";
import styled from "styled-components";

import PlaceFilter from "../../components/mapmaking/PlaceFilter";

const PlacePage = () => {
  return (
    <Wrapper>
      <Question>Q. 어디로 가시나요? 또는 어디에 관심이 있으신가요?</Question>
      <PlaceFilter />
      <NextBtn>Next</NextBtn>
    </Wrapper>
  );
};

export default PlacePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Question = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 128px;
  font-family: Hack;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 145%;
  letter-spacing: 1.4px;
  padding: 22px 29px 19px 29px;
`;

const NextBtn = styled.div`
  margin-bottom: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342.222px;
  height: 55px;
  color: #fff;
  text-align: center;
  font-family: Hack;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
  border: 1.5px solid #000;
  background: #000;
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
`;
