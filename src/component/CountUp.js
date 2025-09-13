import CountUp from "react-countup";

const CountUpAnimation = ({ end, label }) => {
  return <CountUp start={0} end={end} duration={2} />;
};

export default CountUpAnimation;
