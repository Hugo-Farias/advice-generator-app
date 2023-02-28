import "./Advice.scss";
import Card from "./Card";
import { useState, useEffect } from "react";

const API_URL = "https://api.adviceslip.com/advice";

const DUMMY_DATA = {
  slip: {
    id: 204,
    advice:
      "The best nights out are when people around you are simply having fun.",
  },
};

const Advice = function () {
  const [apiData, setApiData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async function () {
    if (loading) return;
    setLoading(true);

    const res = await fetch(API_URL);
    const data = await res.json();

    setApiData(data.slip);

    setTimeout(() => setLoading(false), 2000);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="advice">
      {apiData ? (
        <Card
          id={apiData.id}
          advice={apiData.advice}
          onClick={getData}
          disabled={loading}
        />
      ) : (
        <Card disabled={loading} />
      )}
    </div>
  );
};

export default Advice;
