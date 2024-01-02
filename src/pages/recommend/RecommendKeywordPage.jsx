import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { addKeyword, deleteKeyword } from "../../redux/recommendSlice";

import TopBar from "../../components/_common/TopBar";
import { WhiteBox, Wrapper } from "../../components/_common/CommonExport";
import KeywordGrid from "../../components/_common/KeywordGrid";
import FeedBackBtn from "../../components/mapmaking/FeedBackModal";

const RecommendKeywordPage = () => {
  const { mapId } = useParams();
  const navigate = useNavigate();
  const initSelectedKeywords = useSelector((state) => state.recommend.hashtag);
  const [selectedKeywords, setSelectedKeywords] = useState(initSelectedKeywords);

  //태그 추가 모달 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  //키워드 선택 검사 후 페이지 이동
  const handleNextBtn = () => {
    if (selectedKeywords.length > 0) {
      navigate(`/map/${mapId}/r/content`);
    } else {
      alert("키워드를 최소 1개 이상 선택하세요.");
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
        <FeedBackBtn {...{ isModalOpen, setIsModalOpen }} />
        <BoxB onClick={handleNextBtn}>Next</BoxB>
      </Wrapper>
    </>
  );
};

export default RecommendKeywordPage;

const BoxB = styled.div`
  position: fixed;
  bottom: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342.222px;
  height: 55px;
  flex-shrink: 0;

  color: var(--white);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.75px;
  border: 1.5px solid var(--black1);
  background: var(--black1);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
  cursor: pointer;

  @media (max-height: 852px) {
    position: static;
    margin-top: 80px;
    margin-bottom: 81px;
  }
`;
