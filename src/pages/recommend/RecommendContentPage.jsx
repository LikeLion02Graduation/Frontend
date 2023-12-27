import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { initRecommend, setTitleContent } from "../../redux/recommendSlice";

import TopBar from "../../components/_common/TopBar";
import { Line2, MainWebBox, NextBtnWhite, WhiteBox, Wrapper } from "../../components/_common/CommonExport";
import { RecommendTitleText } from "../../components/mymap/MapTitleText";

import triangle from "../../assets/images/triangle.svg";

const RecommendContentPage = () => {
  const mapId = 1;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const savedPlaces = useSelector((state) => state.recommend.place);

  const [inputValue, setInputValue] = useState({ title: "", content: "" });

  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const saveData = () => {
    const trimmedTitle = inputValue.title.trim();
    const trimmedContent = inputValue.content.trim();

    if (trimmedTitle === "" && trimmedContent === "") {
      alert("제목과 내용을 작성해주세요");
    } else if (trimmedTitle === "") {
      alert("제목을 작성해주세요");
    } else if (trimmedContent === "") {
      alert("내용을 작성해주세요");
    } else {
      dispatch(setTitleContent({ title: trimmedTitle, content: trimmedContent }));

      dispatch(initRecommend());
      navigate(`/map/${mapId}/1`);
    }
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText="giving" />
      <Wrapper>
        <WhiteBox text="Q. 남겨질 추천에 들어갈 내용을 작성해보아요~.~" />
        <Line2 />

        <Scroll>
          <MainWebBox>
            <TitleContainer>
              <RecommendTitleText username={"예원이"} />
            </TitleContainer>
          </MainWebBox>

          <InputContainer>
            <InputTitle
              placeholder="제목을 입력하세요..."
              type="text"
              name="title"
              value={inputValue.title}
              onChange={handleInputChange}
            />
            <InputContent
              placeholder="내용을 작성해주세요..."
              type="text"
              name="content"
              value={inputValue.content}
              onChange={handleInputChange}
              rows={3}
              maxLength={110}
            />
          </InputContainer>

          <SelectedPlaces>
            {savedPlaces.map((item) => (
              <div key={item}>
                <img src={triangle} alt="place" />
                <span>{item.name}</span>
              </div>
            ))}
          </SelectedPlaces>
        </Scroll>

        <NextBtnWhite addClickHandler={saveData} text="upload" number={"28px"} />
      </Wrapper>
    </>
  );
};

export default RecommendContentPage;

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 266px);
  overflow: scroll;
`;

const TitleContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 39px;
  padding-left: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 28px;
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
