import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";

//components
import TopBar from "../../components/_common/TopBar";
import { Line2, MainWebBox, WhiteBox, Wrapper } from "../../components/_common/CommonExport";
import { MapTitleText } from "../../components/mymap/MapTitleText";
import ShareModal from "../../components/mymap/ShareModal";

//api
import { GetMapMain } from "../../api/map";

const MapSharePage = () => {
  const { mapId } = useParams();

  const [loading, setLoading] = useState(true);
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await GetMapMain(mapId);
      setMapData(response);
      setLoading(false);
    };

    getData();
  }, [mapId]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleShareBtnClick = () => {
  //   setIsModalOpen(true);
  // };

  const saveAsImage = () => {
    const component = document.getElementById("myComponent");
    if (!component) return;

    html2canvas(component).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "myComponent.png";
      link.click();
    });
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText={"instagram"} />
      <Wrapper>
        <WhiteBox text={"Q. 스토리로 공유로 더 많은 추천을 받아보는 건 어때요"} onClick={saveAsImage} />
        <Line2 />

        <MainWebBox id={"myComponent"}>
          <TitleContainer>
            <MapTitleText loading={loading} mapData={mapData} />
            <MapNameText>{mapData.name}</MapNameText>
          </TitleContainer>
          <TagContainer>
            {mapData.hashtag?.map((item) => (
              <span key={item.tagname}>#{item.tagname}</span>
            ))}
          </TagContainer>
          <Description>
            <div>{mapData.description}</div>
          </Description>
        </MainWebBox>

        <BoxW onClick={saveAsImage}>Share to Instagram</BoxW>
      </Wrapper>
      {isModalOpen && <ShareModal onClose={() => setIsModalOpen(false)} mapId={mapData.id} />}
    </>
  );
};

export default MapSharePage;

const TitleContainer = styled.div`
  margin-top: 43px;
  margin-bottom: 21px;
  padding-left: 25px;
  padding-right: 21px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const MapNameText = styled.div`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1.5px;
`;

const TagContainer = styled.div`
  padding-left: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  gap: 38px;
  background: var(--yellow);
  border-top: 1.5px solid var(--black1);
  border-bottom: 1.5px solid var(--black1);

  color: var(--black2);
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 500;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
`;

const Description = styled.div`
  margin-top: 29px;
  margin-bottom: 47px;
  padding-left: 25px;
  box-sizing: border-box;

  font-size: 15px;
  font-weight: 400;
  line-height: 20px; /* 133.333% */
  letter-spacing: 0.75px;
`;

const BoxW = styled.div`
  position: fixed;
  bottom: 28px;
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

  @media (max-height: 774px) {
    position: static;
    margin-top: 49px;
    margin-bottom: 28px;
  }
`;
