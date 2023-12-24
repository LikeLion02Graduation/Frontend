import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const WhiteBox = ({ text }) => {
  return (
    <Box>
      <span>{text}</span>
    </Box>
  );
};

const MapNameBox = ({ place, user }) => {
  return (
    <Box>
      <span>{`<${place}에 가는 ${user}의 지도>`}</span>
    </Box>
  );
};

const YellowBox = ({ text, font, weight }) => {
  return (
    <Box2 font={font} weight={weight}>
      <div>{text}</div>
    </Box2>
  );
};

const Line1 = () => {
  return <LineStyle style={{ background: "var(--black1)" }} />;
};

const Line2 = () => {
  return <LineStyle style={{ background: "var(--black2)" }} />;
};

const NextBtnBlack = ({ where, text, number }) => {
  const navigate = useNavigate();
  return (
    <BoxB
      onClick={() => {
        console.log("버튼 클릭 시 어디로:", where);
        navigate(where);
      }}
      style={{ bottom: number }}
    >
      {text ? text : "next"}
    </BoxB>
  );
};

const NextBtnWhite = ({ where, text, number }) => {
  const navigate = useNavigate();
  return (
    <BoxW
      onClick={() => {
        console.log("버튼 클릭 시 어디로:", where);
        navigate(where);
      }}
      style={{ bottom: number }}
    >
      {text}
    </BoxW>
  );
};

const LongBtnBlack = ({ where, text }) => {
  const navigate = useNavigate();
  return (
    <LongBtnB
      onClick={() => {
        console.log("버튼 클릭 시 어디로:", where);
        navigate(where);
      }}
    >
      {text}
    </LongBtnB>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 106px);
  background: var(--white);
  font-family: "Hack Regular";
`;

export { WhiteBox, MapNameBox, YellowBox, Line1, Line2, NextBtnBlack, NextBtnWhite, LongBtnBlack, Wrapper };

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 61px;

  span {
    color: var(--Black2);
    text-align: center;
    font-family: Apple SD Gothic Neo;
    font-size: 14px;
    font-weight: 600;
    line-height: 145%; /* 20.3px */
    letter-spacing: 1.4px;
  }
`;

const Box2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 61px;
  background-color: var(--yellow);

  color: var(--Black2);
  font-family: ${(props) => props.font || "Apple SD Gothic Neo"};
  font-size: 14px;
  font-weight: ${(props) => props.weight || "600"};
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;

  div {
    width: 390px;
    padding-left: 30px;
    box-sizing: border-box;
  }
`;

const BoxB = styled.div`
  position: fixed;
  bottom: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342.222px;
  height: 55px;
  color: var(--white);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 15px;
  font-weight: 700;

  letter-spacing: 0.75px;
  border: 1.5px solid var(--black1);
  background: var(--black1);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
  cursor: pointer;

  @media (max-width: 393px) {
    width: calc(100% - 50px);
  }
`;

const BoxW = styled.div`
  position: fixed;
  bottom: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342.222px;
  height: 55px;
  color: var(--black1);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.75px;
  border: 1.5px solid var(--black1);
  background: var(--white);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
  cursor: pointer;

  @media (max-width: 393px) {
    width: calc(100% - 50px);
  }
`;

const LongBtnB = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 55px;
  background-color: var(--black1);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);

  color: var(--white);
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.75px;
`;

const LineStyle = styled.div`
  width: 100%;
  height: 1.5px;
`;
