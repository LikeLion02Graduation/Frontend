import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import arrow from "../../assets/images/arrow-left.svg";

const TopBar = ({ navBtnOn = false, newMapBtnOn = false, where, titleText }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    console.log("이전 페이지로");
    if (where) navigate(where);
    else navigate(-1);
  };

  const handleNewMapClick = () => {
    navigate("/mapmaking/main");
  };

  return (
    <Wrapper>
      <div>
        {navBtnOn && <img onClick={handleBackClick} src={arrow} alt="go to previous page" />}
        <Title>{titleText}</Title>
        {newMapBtnOn && <button onClick={handleNewMapClick}>새 지도</button>}
      </div>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 106px;
  background: var(--black1);

  div {
    position: relative;
    top: 0;
    width: 393px;

    @media (max-width: 393px) {
      width: 100%;
    }
  }

  div > img {
    position: absolute;
    top: 50px;
    left: 25px;
    width: 44px;
    height: 44px;
    cursor: pointer;
    z-index: 1;
  }

  div > button {
    position: absolute;
    top: 65px;
    right: 25px;
    background: none;
    cursor: pointer;

    color: var(--white);
    text-align: center;
    font-family: "Hack Regular";
    font-size: 14px;
    font-weight: 400;
    line-height: 145%;
    letter-spacing: 1.4px;
    z-index: 1;
  }
`;

const Title = styled.div`
  justify-content: center;
  padding-top: 61px;

  color: var(--white);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Hack Regular";
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 5px;
`;
