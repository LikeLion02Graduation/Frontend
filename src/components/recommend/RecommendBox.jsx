import React from "react";
import styled from "styled-components";

import xBtn1 from "../../assets/images/x-btn-1.svg";
import xBtn2 from "../../assets/images/x-btn-2.svg";
import heartOff from "../../assets/images/heart-off.svg";
import heartOn from "../../assets/images/heart-on.svg";
import triangle from "../../assets/images/triangle.svg";

const RecommendBox = ({ recomData }) => {
  return (
    <Container>
      <SmallBox>
        <div>
          <img src={xBtn1} alt="heart btn" />
          <img src={heartOff} alt="heart btn" />
        </div>
        <div>
          <img src={xBtn1} alt="del btn" />
          <img src={xBtn2} alt="del btn" style={{ top: "-1px" }} />
        </div>
      </SmallBox>
      <Box>
        <Profile>이미지</Profile>
        <Content>
          <span>From. 핑핑이</span>
          <span>
            <span>여기 안가면 평생 후회하게 될 것입니다.</span>
            <span>추천을 남겼어요</span>
            <img src={triangle} alt="go to " />
          </span>
          <span>23.11.19 03:06</span>
        </Content>
      </Box>
    </Container>
  );
};

export default RecommendBox;

const Container = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const SmallBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 27px;
  display: flex;
  flex-direction: row;

  div {
    position: relative;
    width: 27px;
    height: 27px;

    img {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 393px;
  padding: 23px 51px 24px 21px;
  box-sizing: border-box;
  gap: 14px;
`;

const Profile = styled.div`
  width: 69px;
  height: 69px;
  flex-shrink: 0;
  border: 1.5px solid #000;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  color: var(--black2);
  font-family: Apple SD Gothic Neo;

  span:nth-child(1) {
    color: var(--black1);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 5px;
  }

  span:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3px;
  }

  span:nth-child(2) > span {
    max-width: 117px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1.4px;
  }

  span:nth-child(3) {
    font-family: "Hack Regular";
    font-size: 12px;
    font-weight: 400;
  }
`;
