import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { setContent } from "../../redux/mapmakingSlice";

import TopBar from "../../components/_common/TopBar";
import {
  MapNameBox,
  NextBtnWhite,
  Line2,
  Wrapper,
} from "../../components/_common/CommonExport";

const DonePage = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({ content: "" });

  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      content: e.target.value,
    });
  };

  const saveData = () => {
    const trimmedContent = inputValue.content.trim();

    if (trimmedContent === "") {
      alert("내용을 작성해주세요");
    } else {
      dispatch(setContent({ content: trimmedContent }));
    }
  };

  const mapPlace = useSelector((state) => state.mapmaking.place);
  const mapName = useSelector((state) => state.mapmaking.name);
  const mapImg = useSelector((state) => state.mapmaking.img);
  const mapTheme = useSelector((state) => state.mapmaking.hashtag);

  return (
    <Wrapper>
      <Wrapper2>
        <TopBar navBtnOn={true} titleText="Making" />
        <MapNameBox place={mapPlace} user="시은" />
        <Line2 />
        <MapProfile>
          <ImageBox>{mapImg}</ImageBox>
          <MapName>{mapName}</MapName>
        </MapProfile>
        <ThemeBox>{mapTheme}</ThemeBox>
        <InputBox>
          <textarea
            type="text"
            name="content"
            value={inputValue.content}
            onChange={handleInputChange}
            placeholder="이곳을 클릭해 나에게 여행 스팟을 추천해줄&#13;&#10;친구들에게 남기고 싶은&#13;&#10;한 마디를 작성해보세요..(공백 포함 110자)&#13;&#10;친구들이 추천 시 참고하기 용이할거예요 !"
          />
        </InputBox>
        <NextBtnWhite
          addClickHandler={saveData}
          where={"/map/:id/share"}
          text={"Next"}
          number={"96px"}
        />
        <NextBtnWhite where={"/map/:id/share"} text={"Skip"} number={"28px"} />
      </Wrapper2>
    </Wrapper>
  );
};

export default DonePage;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
`;

const MapProfile = styled.div`
  margin-top: 44px;
`;

const ImageBox = styled.div`
  width: 156.787px;
  height: 156.787px;
  flex-shrink: 0;
  border: 1.527px solid var(--black1);
`;

const MapName = styled.div`
  color: var(--black2);
  font-family: Apple SD Gothic Neo;
  font-size: 14.253px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.425px;
  text-align: left;
`;

const ThemeBox = styled.div`
  width: 100%;
  height: 60px;
  border: 1.5px solid var(--black1);
  background: var(--yellow);
  margin-top: 44px;
`;
const InputBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 156px;
  margin-bottom: 28px;

  textarea {
    width: 350px;
    height: 120px;
    padding-top: 35px;
    padding-bottom: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    resize: none;
    color: var(--black2);
    font-family: "Hack Regular";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 145%;
    letter-spacing: 1.4px;
    ::placeholder {
      opacity: 0.3;
      white-space: pre-line;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
