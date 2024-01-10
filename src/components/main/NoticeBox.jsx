import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import gofront from "../../assets/images/go-front.svg";
import xbtn1 from "../../assets/images/x-btn-1.svg";
import xbtn2 from "../../assets/images/x-btn-2.svg";

import { GetNoticeList } from "../../api/recom";
import { DeleteNotice } from "../../api/recom";

const NoticeBox = () => {
  const navigate = useNavigate();
  const [noticeList, setNoticeList] = useState([]);

  // 알림 조회
  useEffect(() => {
    const getData = async () => {
      const response = await GetNoticeList();
      setNoticeList(response.data);
    };
    getData();
  }, []);

  // 알림 삭제
  const handleDeleteClick = (id) => {
    DeleteNotice(id).then(() => {
      setNoticeList(noticeList.filter((item) => item.alert_id !== id));
    });
  };

  const handleNoticeClick = (item) => {
    if (item.type === "추천") {
      navigate(`/map/${item.map.id}`);
    } else {
      navigate(`/map/${item.map.id}/${item.recom_id}/commend`);
    }
  };

  return (
    <>
      {noticeList &&
        noticeList.map((item) => (
          <BoxContainer key={item.alert_id}>
            <Box>
              <MapImg src={item.user.profile} alt={item.map.name} />
              <Content onClick={() => handleNoticeClick(item)}>
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
                    {item.type === "추천" ? `${item.map.name}에 추천을 남겼어요` : "남겨주신 추천에 반응을 남겼어요"}
                  </MapName>
                  <img src={gofront} alt="gofront" style={{ width: "15px", height: "15px" }} />
                </div>
                <Time>{item.created_at}</Time>
              </Content>

              <DeleteBtnContainer>
                <DeleteBtn onClick={() => handleDeleteClick(item.alert_id)}>
                  <img src={xbtn1} alt="x btn" />
                  <img src={xbtn2} alt="x btn" />
                </DeleteBtn>
              </DeleteBtnContainer>
            </Box>
          </BoxContainer>
        ))}
    </>
  );
};

export default NoticeBox;

const BoxContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 117px;
  border-bottom: 1.5px solid var(--black1);
`;

const Box = styled.div`
  padding: 24px 0 24px 21px;
  box-sizing: border-box;
  width: 393px;
  display: flex;
  flex-direction: row;
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
  cursor: pointer;
`;

const User = styled.div`
  color: var(--black2);
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-weight: 500;
  line-height: 145%;
  letter-spacing: 1.4px;
`;

const MapName = styled.div`
  color: var(--black2);
  font-family: "Pretendard-Regular";
  font-size: 14px;
  font-weight: 500;
  line-height: 3px; /* 21.429% */
  letter-spacing: 1.4px;
`;

const Time = styled.div`
  color: var(--black2);
  font-family: "Hack Regular";
  font-size: 12px;
  font-weight: 400;
`;

const DeleteBtnContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const DeleteBtn = styled.div`
  position: relative;
  width: 27px;
  height: 27px;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
