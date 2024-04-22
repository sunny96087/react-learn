import React from "react";
import MyState from "./MyState";
import MyProps from "./MyProps";
import FruitProps from "./FruitProps";
import MyInput from "./MyInput";

export default function Main() {
  const mystyle = {
    padding: "24px 12px",
    // color: "gray",
  };

  const currentFruit = ["mango", "apple", "banana", "pineapple", "papaya"];
  const date = new Date();

  const currentMonth = date.getMonth() + 1;

  return (
    <main style={mystyle}>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>
        {currentMonth} 月 | 當季賀甲水果{" "}
        {currentFruit.map((e) => (
          <li>{e}</li>
        ))}
      </p>
      <p style={{ color: "#faa" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eaque
        dolorem. Necessitatibus culpa accusamus voluptates!
      </p>
      <MyState />
      <MyProps e="Main 傳遞來的參數" f="Main 傳遞來的第二個參數" />

      {/* 水果卡片 */}
      <div style={{ display: "flex",gap: "16px" }}>
        <FruitProps
          fruit={require("../images/fruit/03.jpg")}
          heart={5.0}
          word="店長強力推薦"
          price={300}
          desc="這個真的很讚"
        />
        <FruitProps
          fruit={require("../images/fruit/04.jpg")}
          heart={5.0}
          word="超級無敵酸"
          price={555}
          desc="酸到懷疑人生"
        />
        <FruitProps
          fruit={require("../images/fruit/05.jpg")}
          heart={5.0}
          word="西不西瓜"
          price={688}
          desc="瓜瓜瓜"
        />
      </div>

      {/* 計算總額 MyInput */}
      <MyInput />
    </main>
  );
}
