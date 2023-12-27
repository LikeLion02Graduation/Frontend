import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Postit = ({ mapDataId, item }) => {
  const navigate = useNavigate();

  const getPostitStyle = () => {
    const styles = [{ backgroundColor: "#ff9dd8" }, { backgroundColor: "#FFF615" }, { backgroundColor: "#00F0FF" }];
    const randomIndex = Math.floor(Math.random() * styles.length);
    return styles[randomIndex];
  };

  return (
    <Style
      key={item.id}
      onClick={() => {
        navigate(`/map/${mapDataId}/${item.id}`);
      }}
      style={getPostitStyle()}
    >
      From.
      <br />
      {item.user.username}
    </Style>
  );
};

export default Postit;

const Style = styled.div`
  width: 92.442px;
  height: 88.744px;
  flex-shrink: 0;
  padding-top: 11px;
  padding-left: 11px;
  box-sizing: border-box;
  border: 1.165px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;

  color: var(--black2);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 18.488px;
  font-weight: 400;
  letter-spacing: 2.329px;
`;
