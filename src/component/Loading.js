import { useSelector } from "react-redux";

const Loading = () => {
  const loadingState = useSelector((state) => state?.loading?.isLoadingShow);

  return <>{loadingState && <div id="preloader"></div>}</>;
};

export default Loading;
