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
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async function () {
    if (loading) return;
    setLoading(true);

    const res = await fetch(API_URL);
    const data = await res.json();

    console.log("getData triggered");

    setApiData(data);
    await setLoading(false);
  };

  useEffect(() => {
    const data = getData();

    console.log(data);
  }, []);

  return (
    <div className="advice">
      {apiData ? (
        <Card
          id={apiData.slip.id}
          advice={apiData.slip.advice}
          onClick={getData}
        />
      ) : (
        <Card advice={"Loading..."} />
      )}
    </div>
  );
};

export default Advice;
