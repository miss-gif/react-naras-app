import usePageTitle from "../hooks/usePageTitle";

const NotFound = () => {
  usePageTitle("잘못된 경로 요청입니다");

  return <div>NotFound</div>;
};

export default NotFound;
