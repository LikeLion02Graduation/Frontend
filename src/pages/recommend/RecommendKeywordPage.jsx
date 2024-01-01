import React, { useState } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addKeyword, deleteKeyword } from "../../redux/recommendSlice";

import TopBar from "../../components/_common/TopBar";
import {
  WhiteBox,
  NextBtnBlack,
  Wrapper,
} from "../../components/_common/CommonExport";
import FeedBackModal from "../../components/mapmaking/FeedBackModal";
import KeywordGrid from "../../components/_common/KeywordGrid";

const RecommendKeywordPage = () => {
  const navigate = useNavigate();
  const { mapId } = useParams();
  const initSelectedKeywords = useSelector((state) => state.recommend.hashtag);
  const [selectedKeywords, setSelectedKeywords] =
    useState(initSelectedKeywords);

  //태그 추가 모달 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isThemeSelected = () => {
    return selectedKeywords.length > 0;
  };

  const handleNextBtn = () => {
    if (isThemeSelected()) {
      // Theme이 선택되어 있는 경우
      navigate(`/map/${mapId}/r/content`);
    } else {
      // Theme 선택 안 한 경우
      alert("테마를 최소 1개 이상 선택하세요.");
    }
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText="giving" />
      <Wrapper>
        <WhiteBox text="Q. 지금 요 추천을 설명할 수 있는 키워드! 를 알려주세요" />
        <KeywordGrid
          {...{ selectedKeywords, setSelectedKeywords }}
          addReducer={addKeyword}
          deleteReducer={deleteKeyword}
        />
        <FeedbackBtn onClick={() => setIsModalOpen(true)}>
          어 뭐야 왜없어??
        </FeedbackBtn>
        <NextBtnBlack addClickHandler={handleNextBtn} />
      </Wrapper>
      {isModalOpen && <FeedBackModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default RecommendKeywordPage;

const FeedbackBtn = styled.div`
  margin-top: 116px;
  margin-bottom: 80px; //임시 설정
  width: 110vw;
  height: 61px;
  transform: rotate(-15deg);
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.5px solid var(--black1);
  background: var(--yellow);

  color: var(--black3);
  text-align: center;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 700;
  line-height: 145%;
  letter-spacing: 1.4px;
  cursor: pointer;
`;
