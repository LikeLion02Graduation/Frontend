import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { initRecommend, setRecomInfo } from "../../redux/recommendSlice";

import TopBar from "../../components/_common/TopBar";
import { MainWebBox, WhiteBox, Wrapper } from "../../components/_common/CommonExport";
import { RecommendTitleText } from "../../components/mymap/MapTitleText";

import triangle from "../../assets/images/triangle.svg";
import KeywordBox from "../../components/_common/KeywordBox";

const RecommendContentPage = () => {
  const { mapId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recommendData = useSelector((state) => state.recommend);

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
      dispatch(setRecomInfo({ map_id: mapId, user_id: 1, title: trimmedTitle, content: trimmedContent }));

      dispatch(initRecommend());

      navigate(`/map/${mapId}/1`); //recom_id 데이터 받아서 넣기
    }
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText="giving" />
      <Wrapper>
        <WhiteBox text="Q. 남겨질 추천에 들어갈 내용을 작성해보아요~.~" />
        <KeywordBox keywords={recommendData.hashtag} />

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
          {recommendData.place.map((item) => (
            <div key={item}>
              <img src={triangle} alt="place" />
              <span>{item.name}</span>
            </div>
          ))}
        </SelectedPlaces>

        <BoxW onClick={saveData}>upload</BoxW>
      </Wrapper>
    </>
  );
};

export default RecommendContentPage;

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

  &::placeholder {
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

  &::placeholder {
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

const BoxW = styled.div`
  position: fixed;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342.222px;
  height: 55px;
  flex-shrink: 0;

  color: var(--black1);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.75px;
  border: 1.5px solid var(--black1);
  background: var(--white);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
  cursor: pointer;

  @media (max-width: 393px) {
    width: calc(100% - 50px);
  }

  @media (max-height: 892px) {
    position: static;
    margin-top: 42px;
    margin-bottom: 50px;
  }
`;
