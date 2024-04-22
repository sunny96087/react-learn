import React from "react";

const HisUseEffect = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://apiservice.mol.gov.tw/OdService/download/A17000000J-030243-YTl"
    )
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        console.log(`data = ${JSON.stringify(d)}`);
      });
  }, []);

  const element = data.map((d, index) => (
    <div key={index}>
      <p>{d.年度}</p>
    </div>
  ));

  return (
    <div>
      <h4>Fetch Data</h4>
      {/* <div>{element}</div> */}

      <hr />

      <pre>
        {JSON.stringify(data, null, 6)}
      </pre>

      {/* 顯示資料，這裡假設 data 是一個物件的陣列，並且每個物件都有一個名為 '年度' 的屬性 */}
      <div style={{ display: "flex", gap: "12px" }}>
        <p>年度</p>
        <p>經濟成長率</p>
      </div>
      {data.map((item, index) => (
        <div key={index} style={{ display: "flex", gap: "12px" }}>
          <p>{item.年度}</p>
          <p>{item.經濟成長率}</p>
        </div>
      ))}
    </div>
  );
};

export default HisUseEffect;
