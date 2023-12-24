import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { Line2, NextBtnWhite, WhiteBox, Wrapper } from "../../components/_common/CommonExport";

import triangle from "../../assets/images/triangle.svg";

const RecommendContentPage = () => {
  const [inputValue, setInputValue] = useState({ title: "", content: "" });
  const [selectedPlaces, setSelectedPlaces] = useState([
    {
      address_name: "경기 성남시 분당구 판교동 588",
      category_group_code: "CE7",
      category_group_name: "카페",
      category_name: "음식점 > 카페 > 커피전문점",
      distance: "",
      id: "710265643",
      phone: "",
      place_name: "테라로사커피 판교지점",
      place_url: "http://place.map.kakao.com/710265643",
      road_address_name: "경기 성남시 분당구 판교공원로2길 22",
    },
  ]);

  return (
    <>
      <TopBar navBtnOn={true} titleText="giving" />
      <Wrapper>
        <WhiteBox text="Q. 남겨질 추천에 들어갈 내용을 작성해보아요~.~" />
        <Line2 />
        <MainBox>
          <TopBlackBar>
            <WhiteSmallBox />
            <WhiteSmallBox />
          </TopBlackBar>
          <TextBox>
            <span>
              <BlackBackGround>예원이</BlackBackGround>가 남긴
            </span>
            <BlackBackGround>추천!!</BlackBackGround>
          </TextBox>
        </MainBox>
        <InputContainer>
          <InputTitle
            placeholder="제목을 입력하세요..."
            type="text"
            value={inputValue.title}
            onChange={(e) => setInputValue({ ...inputValue, title: e.target.value })}
          />
          <InputContent
            placeholder="내용을 작성해주세요..."
            type="text"
            value={inputValue.content}
            onChange={(e) => setInputValue({ ...inputValue, content: e.target.value })}
          />
        </InputContainer>
        <SelectedPlaces>
          {selectedPlaces.map((item) => (
            <div key={item}>
              <img src={triangle} />
              <span>{item.place_name}</span>
            </div>
          ))}
        </SelectedPlaces>
        <NextBtnWhite text="next" number={"28px"} />
      </Wrapper>
    </>
  );
};

export default RecommendContentPage;

const MainBox = styled.div`
  margin-top: 49px;
  margin-bottom: 22px;
  width: 319px;
  border: 1px solid var(--black1);
  background-color: #f9f9f9;

  @media (max-width: 393px) {
    width: calc(100% - 60px);
  }
`;

const TopBlackBar = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 37px;
  flex-shrink: 0;
  background: var(--black1);
`;

const WhiteSmallBox = styled.div`
  margin: 7px 7px 7px 0;
  width: 23px;
  height: 23px;
  flex-shrink: 0;
  background: var(--white);
`;

const TextBox = styled.div`
  margin: 40px auto 39px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-shrink: 0;

  color: var(--black3);
  font-size: 30px;
  font-weight: 400;
  line-height: 145%; /* 43.5px */
  letter-spacing: 1.5px;

  span {
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

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 156px;
  padding-top: 27px;
  box-sizing: border-box;
  gap: 18px;
  flex-shrink: 0;
  background: var(--gray);
`;

const InputTitle = styled.input`
  width: 333px;
  background: var(--gray);

  color: var(--black2);
  font-family: "Hack Regular";
  font-size: 14px;
  font-weight: 700;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;

  ::placeholder {
    opacity: 0.3;
  }

  @media (max-width: 393px) {
    width: calc(100% - 60px);
  }
`;

const InputContent = styled.textarea`
  width: 333px;
  background: var(--gray);

  color: var(--black2);
  font-family: "Hack Regular";
  font-size: 14px;
  font-weight: 400;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;

  ::placeholder {
    opacity: 0.3;
  }

  @media (max-width: 393px) {
    width: calc(100% - 60px);
  }
`;

const SelectedPlaces = styled.div`
  margin-top: 19px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 343px;

  font-size: 15px;
  font-weight: 400;
  line-height: 20px; /* 133.333% */
  letter-spacing: 0.75px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 9px;
  }

  div > img {
    width: 17px;
    height: 17px;
  }

  @media (max-width: 393px) {
    width: calc(100% - 50px);
  }
`;
