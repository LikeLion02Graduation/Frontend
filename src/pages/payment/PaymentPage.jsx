import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { Line1, Line2, NextBtnBlack, WhiteBox, Wrapper } from "../../components/_common/CommonExport";

import triangle from "../../assets/images/triangle.svg";

const PaymentPage = () => {
  // const currentUserId = 1;

  const [recommendData, setRecommendData] = useState({
    id: "1",
    title: "여기 안가면 평생 후회할 것입니다...",
    content:
      "수변국밥? 이걸 먹은 뒤로 내 인생이 수변국밥? 이걸 먹은 뒤로 내 인생이 수변국밥? 이걸 먹은 뒤로 내 인생이 수변국밥? 이걸 먹은 뒤로 내 인생이 수변국밥? 이걸 먹은 뒤로 내 인생이 바뀌었음!!!",
    username: "혜지",
    hashtag: ["카페"],
    place: [
      {
        id: 23,
        name: "수원왕족발",
        address: "경기도 수원시 어쩌구",
        link: "[카카오 url]",
      },
    ],
    react: {
      id: 12,
      emoji: 2,
      content: "와 너무 고마워!! 진짜 맛있더라",
      user: 1,
    },
  });

  return (
    <>
      <TopBar navBtnOn={true} titleText="recommend" />
      <Wrapper>
        <Header>
          <span>부산에 가자2</span>결제하기
        </Header>
        <Line2 />

        <Price>
          <div>총 결제 금액은</div>
          <div>₩500</div>
        </Price>

        <Line1 />
        <Container>
          <PayBtn onClick={() => (window.location.href = "")}>
            <span>카카오페이로 결제</span>
            <img src={triangle} alt="카카오페이로 결제" />
          </PayBtn>
        </Container>

        <NextBtnBlack where={-1} text={"back"} number={"28px"} />
      </Wrapper>
    </>
  );
};

export default PaymentPage;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 61px;

  color: var(--Black3);
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 600;
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;

  span {
    margin-right: 3px;
    font-weight: 800;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 393px;
  color: var(--black1);

  @media (max-width: 393px) {
    width: 100%;
  }
`;

const Price = styled.div`
  margin-top: 21px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  width: 308px;

  div {
    height: 34px;
    flex-shrink: 0;

    font-feature-settings: "clig" off, "liga" off;
    font-family: Apple SD Gothic Neo;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1.4px;
  }

  @media (max-width: 393px) {
    width: calc(100% - 85px);
  }
`;

const PayBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  width: 128px;
  height: 26px;
  flex-shrink: 0;
  background: var(--yellow);

  text-align: center;
  font-family: "Hack-Regular";
  font-size: 10.81px;
  font-weight: 700;

  img {
    width: 8.115px;
    height: 8.115px;
    flex-shrink: 0;
  }
`;
