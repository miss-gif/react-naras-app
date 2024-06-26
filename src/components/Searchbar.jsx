import { useEffect, useState } from "react";
import style from "./Searchbar.module.css";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ q }) => {
  const [search, setSearch] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    setSearch(q);
  }, [q]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onClickSearch = () => {
    if (search !== "") {
      nav(`/search?q=${search}`);
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };

  return (
    <div className={style.container}>
      <input
        type="text"
        onKeyDown={onKeyDown}
        placeholder="검색어를 입력하세요."
        value={search}
        onChange={onChangeSearch}
      />
      <button onClick={onClickSearch}>검색</button>
    </div>
  );
};

export default Searchbar;
