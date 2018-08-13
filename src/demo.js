import React, { Component } from "react";
import "./css/site_global.css";
import "./css/master_a-master.css";
import "./css/index.css";
import background from "./images/asset.jpg";
import start from "./images/asset 3@5x.png";
import ball from "./images/asset 6@5x.png";
import textLottery from "./images/asset 2@5x-crop-u156.png";
import spin from "./images/asset 7@5x.png";
import button from "./images/asset 4@5x.png";

class Demo extends Component {
  render() {
    return (
        <div>
        <h2>XỔ SỐ</h2>
        <p>Contract được quản lý bởi: {this.state.manager}</p>
        <p>Hiện tại có {this.state.balance/this.state.fee} người tham gia. Và phần thưởng là {this.state.balance/1000000000000000000} ether</p>
        <hr/>
        <form onSubmit={this.onSubmit}>
          <h4>Mua vé sổ số?</h4>
          <div>
            <label>Vui lòng nhập {this.state.fee/1000000000000000000} để xác nhận mua vé với giá {this.state.fee/1000000000000000000} ether</label>
            <br/>
            <input 
              value = {this.state.value}
              onChange = {event => this.setState({value: event.target.value})}
            />
          </div>
          <button>Mua</button>
        </form>
        <hr/>
        
        <h4>Quay số?</h4>
        <button onClick={this.onClick}>Quay!</button>

        <hr/>
      </div>
    );
  }
}

export default Demo;
