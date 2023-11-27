import { styled } from "styled-components";

import arrow from "../../assets/images/arrow-left.svg";

const TopBar = ({ navBtnOn = false, titleText }) => {
  return (
    <Wrapper>
      <div>
        {navBtnOn && <img src={arrow} alt="go to previous page" />}
        <Title>{titleText}</Title>
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
    position: absolute;
    top: 0;
    width: 393px;
  }

  div > img {
    position: relative;
    top: 50px;
    left: 25px;
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
