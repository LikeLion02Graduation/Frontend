import React from "react";
import styled from "styled-components";

import triangle from "../../assets/images/triangle.svg";

const PlaceContainer = ({ item }) => {
  return (
    <Container>
      <PlaceInfo>
        <div className="placename">{item.name}</div>
        <div className="roadaddress">{item.address}</div>
      </PlaceInfo>
      <PlaceGoBtn onClick={() => (window.location.href = item.link)}>
        <span>go!</span>
        <img src={triangle} alt="go!" />
      </PlaceGoBtn>
    </Container>
  );
};

export default PlaceContainer;

const Container = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: end;
  font-family: Apple SD Gothic Neo;
`;

const PlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  gap: 7.65px;
  border: 1.5px solid var(--yellow);
  padding: 12px 16px 11.35px 16px;
  box-sizing: border-box;

  .placename {
    font-size: 17.053px;
    font-weight: 700;
    letter-spacing: 1.705px;
  }

  .roadaddress {
    color: #0c0404;
    font-family: "Hack Regular";
    font-size: 12.79px;
    font-weight: 400;
    letter-spacing: 1.279px;
    opacity: 0.7;
  }
`;

const PlaceGoBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7.92px;
  width: 66px;
  height: 20.557px;
  flex-shrink: 0;
  background: var(--yellow);

  span {
    text-align: center;
    font-family: "Hack Regular";
    font-size: 7.574px;
    font-weight: 700;
  }

  img {
    width: 8.115px;
    height: 8.115px;
    flex-shrink: 0;
  }
`;
