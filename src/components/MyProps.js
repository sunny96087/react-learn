import React from 'react';
import { Component } from 'react';

// 繼承 Component
class MyProps extends Component {

    // 建構子 (式)
    constructor(props) {
        super(props); // 呼叫父類別的建構子
        this.state = {
            name: "apple",
            price: 0,
            desc: 'apple yummy',
            origin: 'taiwan',
        };
        
    }
    render() {
        return (
            <div>
                <h3>props 應用範例</h3>
                <p>{this.props.e}</p>
                <p>{this.props.f}</p>

                <p>{ this.state.name } 每公斤 <span style={{color: 'red'}}>{this.state.price}</span> 元，{ this.state.desc}</p>

                <button onClick={()=>(this.state.price <= 0 ? this.setState({price:0}): this.setState({price: this.state.price - 10}))}>降低售價</button>
                <button onClick={() => (this.state.price >=100 ? this.setState({price:100}): this.setState({price: this.state.price + 10}))}>提高售價</button>

                {/* 同頁面組件 1. 可直接傳參數 2. 傳字串 */}
                <YourProps origin={this.state.origin}/>
                <YourProps origin="japan" link="https://www.google.com"/>
            </div>
        );
    }
}

export default MyProps;


// 另一個類別 class
class YourProps extends Component {

    render(){
        return(
            <div>
                {/* 接收參數 */}
                <p>產地：{this.props.origin}</p>
                <a href={this.props.link}>link</a>
            </div>
        )
    }
}

// 同頁面使用，不用匯出