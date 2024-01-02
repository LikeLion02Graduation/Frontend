import React, { useState } from "react";
import { styled } from "styled-components";

import TopBar from "../../components/_common/TopBar";
import { Line1, Line2, NextBtnBlack, Wrapper } from "../../components/_common/CommonExport";
import PaymentModal from "../../components/payment/PaymentModal";

import triangle from "../../assets/images/triangle.svg";

const PaymentPage = () => {
  //결제 완료 모달 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  //결제하기 함수
  const buyMap = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <TopBar navBtnOn={true} titleText="Buy" />
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
          <PayBtn onClick={buyMap}>
            <span>카카오페이로 결제</span>
            <img src={triangle} alt="카카오페이로 결제" />
          </PayBtn>
        </Container>

        <NextBtnBlack where={-1} text={"back"} number={"28px"} />
      </Wrapper>

      {isModalOpen && <PaymentModal />}
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
  cursor: pointer;

  text-align: center;
  font-family: "Hack Regular";
  font-size: 10.81px;
  font-weight: 700;

  img {
    width: 8.115px;
    height: 8.115px;
    flex-shrink: 0;
  }
`;
