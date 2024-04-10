import { useEffect, useState } from "react";
import { fetchCountries } from "../api";
import CountryList from "../components/CountryList";
import Searchbar from "../components/Searchbar";
import style from "./Home.module.css";
import usePageTitle from "../hooks/usePageTitle";

const Home = () => {
  usePageTitle(`NARAS`);

  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchCountries();
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, []);

  return (
    <div className={style.container}>
      <Searchbar />
      <CountryList countries={countries} />
    </div>
  );
};

export default Home;
