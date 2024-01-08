import React, { useState, useEffect } from "react";
import styled from "styled-components";

import gofront from "../../assets/images/go-front.svg";
import xbtn1 from "../../assets/images/x-btn-1.svg";
import xbtn2 from "../../assets/images/x-btn-2.svg";

import { GetNoticeList } from "../../api/recom";
import { DeleteNotice } from "../../api/recom";

const NoticeBox = () => {
  const [noticeList, setNoticeList] = useState([]);
  const [loading, setLoading] = useState(false);

  // 알림 조회
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await GetNoticeList();
        setNoticeList(response.data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    console.log("NoticeList 데이터: ", noticeList);
  }, [noticeList]);

  // 알림 삭제
  const handleDeleteClick = (id) => {
    DeleteNotice(id).then(() => {
      setNoticeList(noticeList.filter((item) => item.alert_id !== id));
    });
  };

  return (
    <Wrapper>
      {noticeList &&
        noticeList.map((item) => (
          <BoxContainer key={item.alert_id}>
            <Box>
              <Box2>
                <MapImg src={item.user.profile} alt={item.map.name} />
                <Content>
                  <User>{item.user.nickname} 님께서</User>
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
                    <MapName>
                      {item.type === "추천"
                        ? `${item.map.name}에 추천을 남겼어요`
                        : "남겨주신 추천에 반응을 남겼어요"}
                    </MapName>
                    <img
                      src={gofront}
                      style={{ width: "15px", height: "15px" }}
                    />
                  </div>
                  <Time>{item.created_at}</Time>
                </Content>
              </Box2>
              <DeleteBtnContainer>
                <DeleteBtn onClick={() => handleDeleteClick(item.alert_id)}>
                  <img src={xbtn1} />
                  <img src={xbtn2} />
                </DeleteBtn>
              </DeleteBtnContainer>
            </Box>
          </BoxContainer>
        ))}
    </Wrapper>
  );
};

export default NoticeBox;

const Wrapper = styled.div`
  width: 100%;
  height: 117px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxContainer = styled.div`
  width: 100%;
  border-bottom: 1.5px solid var(--black1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Box2 = styled.div`
  position: relative;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 21px;
  padding-right: 0;
  width: 100%;
  max-width: 393px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin: 0 auto;
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
  font-family: "Apple SD Gothic Neo";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: 1.4px;
`;
const MapName = styled.div`
  color: var(--black2);
  font-family: "Apple SD Gothic Neo";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 3px; /* 21.429% */
  letter-spacing: 1.4px;
`;

const Time = styled.div`
  font-family: Hack;
  color: var(--black2);
  font-family: "Hack Regular";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DeleteBtnContainer = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 27px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
`;

const DeleteBtn = styled.div`
  position: absolute;
  width: 27px;
  height: 27px;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
