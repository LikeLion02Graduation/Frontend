import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../redux/mapmakingSlice";

import TopBar from "../../components/_common/TopBar";
import {
  WhiteBox,
  NextBtnWhite,
  Line2,
  Wrapper,
} from "../../components/_common/CommonExport";
import ImgUpload from "../../components/mapmaking/ImgUpload";

const ImagePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mapName = useSelector((state) => state.mapmaking.name);

  const [isImageSelected, setIsImageSelected] = useState(false);

  const handleImgChange = (selectedImg) => {
    setIsImageSelected(selectedImg !== null);
    dispatch(setImage({ img: selectedImg }));
  };

  const handlePostImg = () => {
    if (!isImageSelected) {
      alert("이미지를 업로드해주세요");
    } else {
      navigate(`/mapmaking/done`);
    }
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText="Making" />
      <Wrapper>
        <WhiteBox text={"Q. 지도에 들어갈 대표 이미지를 업로드 해보세요"} />
        <Line2 />
        <MapProfile>
          <ImgUpload onImageUpload={handleImgChange} />
          <MapName>{mapName}</MapName>
        </MapProfile>
        <NextBtnWhite
          addClickHandler={handlePostImg}
          text={"Next"}
          number={"96px"}
        />
        <NextBtnWhite where={"/mapmaking/done"} text={"Skip"} number={"28px"} />
      </Wrapper>
    </>
  );
};

export default ImagePage;

const MapProfile = styled.div`
  margin-top: 44px;
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
