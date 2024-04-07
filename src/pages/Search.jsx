import { useSearchParams } from "react-router-dom";
import { fetchSearchResults } from "../api";
import { useEffect, useState } from "react";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // 현재 URL의 쿼리 매개변수를 가져와서 searchParams 상태로 설정합니다.
  const q = searchParams.get("q"); // "q"라는 쿼리 매개변수를 가져옵니다.

  const [countries, setCountries] = useState([]); // 국가 목록을 관리할 상태를 초기화합니다.

  // 초기 데이터를 설정하는 함수를 선언합니다.
  const setInitialData = async () => {
    const data = await fetchSearchResults(q); // fetchSearchResults 함수를 사용하여 검색 결과를 가져옵니다.
    setCountries(data); // 가져온 데이터로 국가 목록 상태를 업데이트합니다.
  };

  // q가 변경될 때마다 초기 데이터를 설정하는 useEffect 훅을 설정합니다.
  useEffect(() => {
    setInitialData(); // setInitialData 함수를 호출하여 초기 데이터를 설정합니다.
  }, [q]);

  // 검색어를 화면에 표시합니다.
  return <div>{searchParams.get("q")}</div>;
};

export default Search;
