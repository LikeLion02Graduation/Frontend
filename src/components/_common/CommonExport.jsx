import styled from "styled-components";

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
      {text}
    </Box2>
  );
};

const Line1 = () => {
  return <LineStyle style={{ background: "var(--black1)" }} />;
};

const Line2 = () => {
  return <LineStyle style={{ background: "var(--black2)" }} />;
};

export { WhiteBox, MapNameBox, YellowBox, Line1, Line2 };

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  width: 100%;
  height: 61px;
  background-color: var(--yellow);
  padding-left: 30px;
  box-sizing: border-box;

  color: var(--Black2);
  font-family: ${(props) => props.font || "Apple SD Gothic Neo"};
  font-size: 14px;
  font-weight: ${(props) => props.weight || "600"};
  line-height: 145%; /* 20.3px */
  letter-spacing: 1.4px;
`;

const LineStyle = styled.div`
  width: 100%;
  height: 1.5px;
`;
