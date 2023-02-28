import "./Advice.scss";
import Card from "./Card";
import { useState, useEffect } from "react";

const API_URL = "https://api.adviceslip.com/advice";

const Advice = function () {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async function () {
    if (loading) return;
    setLoading(true);

    const res = await fetch(API_URL);
    const data = await res.json();

    setApiData(data);

    setTimeout(() => setLoading(false), 2000);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="advice">
      {apiData ? (
        <Card
          id={apiData.slip.id}
          advice={apiData.slip.advice}
          onClick={getData}
          disabled={loading}
          hideButton={false}
        />
      ) : (
        <Card advice={"Loading..."} disabled={loading} hideButton={true} />
      )}
    </div>
  );
};

export default Advice;
