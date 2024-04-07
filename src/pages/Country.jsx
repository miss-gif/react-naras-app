import { useParams } from "react-router-dom";
import { fetchCountry } from "../api";
import { useEffect, useState } from "react";

const Country = () => {
  const pararms = useParams();
  const [country, setCountry] = useState(null);

  const setInitData = async () => {
    const data = await fetchCountry(pararms.code);
    setCountry(data);
  };

  useEffect(() => {
    setInitData();
  }, [pararms.code]);

  return <div>Country : {pararms.code}</div>;
};

export default Country;
