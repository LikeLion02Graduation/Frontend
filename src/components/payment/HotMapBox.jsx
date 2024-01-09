import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { GetHotMapList } from "../../api/recom";

import gofront from "../../assets/images/go-front.svg";

const HotMapBox = ({ location, page }) => {
  const navigate = useNavigate();
  const [hotMapData, setHotMapData] = useState([]);
  const [nowHotMapData, setNowHotMapData] = useState([]);

  const itemsPerPage = 6;

  useEffect(() => {
    const getData = async () => {
      const response = await GetHotMapList(location);
      if (response && Array.isArray(response.data.data)) {
        setHotMapData(response.data.data);
      } else {
        console.error("Data is not an array: ", response);
      }
    };

    getData();
  }, [location]);

  useEffect(() => {
    const updatedNowHotMapData = hotMapData.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
    setNowHotMapData(updatedNowHotMapData);
  }, [hotMapData, page, itemsPerPage]);
  console.log("nowHotMapData: ", nowHotMapData);

  const handleClickBox = (item) => {
    navigate(`/payment/${location}/${item.id}`);
  };

  return (
    <BoxContainer>
      {nowHotMapData.map((item) => (
        <Box key={item.id}>
          <Box2 onClick={() => handleClickBox(item)}>
            <MapImg src={item.img} alt={item.name} />
            <Content>
              <User>by. {item.user.nickname}</User>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "4px",
                  marginBottom: "7px",
                  gap: "3px",
                }}
              >
                <MapName>{item.name}</MapName>
                <RecomNum>
                  {"("}
                  {item.recom_num}
                  {")"}
                </RecomNum>
                <img
                  src={gofront}
                  alt="gofront"
                  style={{ width: "15px", height: "15px" }}
                />
              </div>
              <Theme>
                {item.hashtag.map((tag, index) => (
                  <HashTag key={index}>#{tag.tagname}</HashTag>
                ))}
              </Theme>
            </Content>
          </Box2>
        </Box>
      ))}
    </BoxContainer>
  );
};

export default HotMapBox;

const BoxContainer = styled.div`
  width: 100%;
  height: 117px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Box = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1.5px solid var(--black1);
`;

const Box2 = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 21px;
  width: 393px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
`;

const MapImg = styled.img`
  width: 69px;
  height: 69px;
  object-fit: cover;
  border: 1.5px solid var(--black1);
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const User = styled.div`
  color: var(--black2);
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  line-height: 145%;
  letter-spacing: 1.4px;
`;
const MapName = styled.div`
  color: var(--black2);
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  line-height: 3px;
  letter-spacing: 1.4px;
`;
const RecomNum = styled.div`
  color: var(--black2);
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 3px; /* 21.429% */
  letter-spacing: 1.4px;
`;
const Theme = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
`;

const HashTag = styled.div`
  color: var(--black2);
  font-family: "Hack Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
