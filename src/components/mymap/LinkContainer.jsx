import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import linkbg from "../../assets/images/link-background.svg";
import linkcopy from "../../assets/images/link-copy.svg";
import linkig from "../../assets/images/link-ig.svg";
import wtagBack from "../../assets/images/wtag-background.svg";
import LinkCopyModal from "./LinkCopyModal";

const LinkContainer = ({ mapId }) => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const currentURL = window.location.href;

  const copyURL = async () => {
    try {
      await navigator.clipboard.writeText(currentURL);
      console.log("복사된 링크 :", currentURL);
      setModalOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <div onClick={copyURL}>
          <img src={linkcopy} alt="link" />
          <img src={linkbg} alt="link" />
        </div>
        <div onClick={() => navigate(`/map/${mapId}/share`)}>
          <img src={linkig} alt="instagram" />
          <img src={linkbg} alt="instagram" />
        </div>
      </Container>
      {isModalOpen && <LinkCopyModal onClose={() => setModalOpen(false)} />}
    </>
  );
};

const WTagContainer = ({ mapId, recomId }) => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const currentURL = window.location.href;

  const copyURL = async () => {
    try {
      await navigator.clipboard.writeText(currentURL);
      console.log("복사된 링크 :", currentURL);
      setModalOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <WTag>
        <div onClick={copyURL}>
          <img src={wtagBack} alt="link" />
          <span>link</span>
        </div>
        <div onClick={() => navigate(`/map/${mapId}/${recomId}/share`)}>
          <img src={wtagBack} alt="instagram" />
          <span>instagram</span>
        </div>
      </WTag>
      {isModalOpen && <LinkCopyModal onClose={() => setModalOpen(false)} />}
    </>
  );
};

export { LinkContainer, WTagContainer };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 41px;

  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 41px;
    height: 41px;
    cursor: pointer;

    img {
      position: absolute;
    }
  }
`;

const WTag = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  div {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      height: 16.59px;
      flex-shrink: 0;
    }

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 8.967px;
      font-weight: 700;
      letter-spacing: 0.897px;
    }
  }
`;
