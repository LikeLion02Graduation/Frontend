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

const NextBtnBlack = ({ where }) => {
  const navigate = useNavigate();
  return (
    <Box3
      onClick={() => {
        console.log("버튼 클릭 시 어디로:", where);
        navigate(where);
      }}
    >
      Next
    </Box3>
  );
};

const NextBtnWhite = ({ where, text, number }) => {
  const navigate = useNavigate();
  return (
    <Box4
      onClick={() => {
        console.log("버튼 클릭 시 어디로:", where);
        navigate(where);
      }}
      style={{ marginBottom: number }}
    >
      {text}
    </Box4>
  );
};

export { WhiteBox, MapNameBox, YellowBox, Line1, Line2, NextBtnBlack, NextBtnWhite };

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

const Box3 = styled.div`
  margin-bottom: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342.222px;
  height: 55px;
  color: var(--white);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
  border: 1.5px solid var(--black1);
  background: var(--black1);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
  cursor: pointer;
`;

const Box4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 342.222px;
  height: 55px;
  color: var(--black1);
  text-align: center;
  font-family: "Hack Regular";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.75px;
  border: 1.5px solid var(--black1);
  background: var(--white);
  box-shadow: 0px 0px 6.97764px 0.99681px rgba(0, 0, 0, 0.03);
  cursor: pointer;
`;

const LineStyle = styled.div`
  width: 100%;
  height: 1.5px;
`;
