import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setContent, setDescription } from "../../redux/mapmakingSlice";
import { persistor } from "../../index";

import TopBar from "../../components/_common/TopBar";
import {
  MapNameBox,
  NextBtnWhite,
  Line2,
  Wrapper,
} from "../../components/_common/CommonExport";

const DonePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState({ content: "" });

  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      content: e.target.value,
    });
  };

  const saveData = () => {
    const trimmedContent = inputValue.desciption.trim();

    if (trimmedContent === "") {
      alert("내용을 작성해주세요");
    } else {
      dispatch(setDescription({ content: trimmedContent }));
      navigate(`/map/:id/share`);

      setTimeout(async () => {
        await persistor.purge();
      }, 200);
    }
  };

  const mapLocation = useSelector((state) => state.mapmaking.location);
  const mapName = useSelector((state) => state.mapmaking.name);
  const mapImg = useSelector((state) => state.mapmaking.img);
  const mapHashtag = useSelector((state) => state.mapmaking.hashtag);

  return (
    <>
      <TopBar navBtnOn={true} titleText="Making" />
      <Wrapper>
        <MapNameBox place={mapLocation} user="시은" />
        <Line2 />
        <MapProfile>
          <ImageBox>
            <StyledImg src={mapImg} alt="Image Preview" />
          </ImageBox>
          <MapName>{mapName}</MapName>
        </MapProfile>
        <ThemeBoxContainer>
          <ThemeBox>
            {mapHashtag.map((tag, index) => (
              <HashTag key={index}>#{tag}</HashTag>
            ))}
          </ThemeBox>
        </ThemeBoxContainer>
        <InputBox>
          <textarea
            type="text"
            name="content"
            value={inputValue.content}
            onChange={handleInputChange}
            placeholder={`이곳을 클릭해 나에게 여행 스팟을 추천해줄\n\n친구들에게 남기고 싶은\n한 마디를 작성해보세요..(공백 포함 110자)\n\n친구들이 추천 시 참고하기 용이할거예요!`}
          />
        </InputBox>
        <NextBtnWhite
          addClickHandler={saveData}
          text={"Next"}
          number={"96px"}
        />
        <NextBtnWhite
          where={"/mapmaking/share"}
          text={"Skip"}
          number={"28px"}
        />
      </Wrapper>
    </>
  );
};

export default DonePage;

const MapProfile = styled.div`
  margin-top: 44px;
`;

const ImageBox = styled.div`
  width: 156.787px;
  height: 156.787px;
  flex-shrink: 0;
  border: 1.527px solid var(--black1);
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MapName = styled.div`
  color: var(--black2);
  font-family: "Apple SD Gothic Neo";
  font-size: 14.253px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.425px;
  text-align: left;
`;

const ThemeBoxContainer = styled.div`
  width: 100%;
  min-height: 60px;
  border: 1.5px solid var(--black1);
  background: var(--yellow);
  margin-top: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const ThemeBox = styled.div`
  width: 393px;
  padding-left: 31px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 47px;
`;

const HashTag = styled.div`
  color: var(--black2);
  text-align: center;
  font-family: "Apple SD Gothic Neo";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: 1.4px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 120px;

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
    opacity: 0.3;
    white-space: pre-line;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
