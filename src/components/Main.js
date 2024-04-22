import React from "react";
import MyState from "./MyState"; 
import MyProps from "./MyProps";
import FruitProps from "./FruitProps";
import MyInput from "./MyInput";

export default function Main(){
    const mystyle={
        paddingLeft:'3vw',
        color:'gray'
    }

    const currentFruit=['Mango','Watermelon','Banana','龍眼','芭樂'];
    const d=new Date();
    const myMonth=d.getMonth() +1; // 1 月傳回 0

    return(
        <main style={mystyle}>
        <p style={{color:'tomato'}}>Let's go, take a fruit journey</p>

        <p>現在是 {myMonth} 月 | 當季賀呷水果：{currentFruit.map((e)=>(<li>{e}</li>))}</p>

        <p>Visitors can taste the fresh fruits of the season in Taiwan and experience the fun of fruit picking. Let us visit the gardens all over Taiwan.</p>

        <div>
            <MyState />
            <MyProps subject="Taiwan Fruit Stand"/>
        </div>

        <div style={{display:'inline-flex'}}>
            <FruitProps  
                fruit={require('../images/fruits/1.jpg')}
                heart={5.0}
                word='店長強力推薦'
                price='顆 NT$30 元' 
                desc='蘋果 | 含有大量的膳食纖維及維他命C'/>

            <FruitProps  
                fruit={require('../images/fruits/2.jpg')}
                heart={4.5}
                word='店長強力推薦'
                price='串 NT$69 元' 
                desc='香蕉 | 富含膳食纖維中的果膠，可促進腸蠕動'/>

            <FruitProps  
                fruit={require('../images/fruits/3.jpg')}
                heart={4.2}
                word='巨蜂葡萄'
                price='顆 NT$200 元' 
                desc='葡萄 | 營養豐富，含有多種礦物質'/>
        </div>
        <hr />
        <MyInput />

        </main>
    )
}