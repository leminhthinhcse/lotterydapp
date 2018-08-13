import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

//import Demo from './demo';
import "./css/site_global.css";
import "./css/master_a-master.css";
import "./css/index.css";
import background from "./images/back.gif";
import start from "./images/asset 3@5x.png";
import ball from "./images/asset 6@5x.png";
import textLottery from "./images/Asset 11@10x.png";
import spin from "./images/asset 7@5x.png";
import button from "./images/asset 4@5x.png";


class App extends Component {

  state = {
    manager: '',
    player: [],
    balance: '',
    fee: '',
    value: ''
  }

  constructor(props){
    super(props);

    this.state = {manager: ''};
  }

  async componentDidMount(){
    const manager = await lottery.methods._manager().call();
    const player = await lottery.methods.f_check().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    const fee = await lottery.methods._fee().call();

    this.setState({manager, player, balance, fee});
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({message: 'Đang đợi giao dịch thành công...'});
    
    await lottery.methods.f_enter().send({
      from: accounts[0],
      value: this.state.fee
    });

    alert("Mua vé thành công!");
    setTimeout("location.reload(true)",1);
  };


  onClick = async () => {
    const accounts = await web3.eth.getAccounts();

    await lottery.methods.f_pickWiner().send({
      from: accounts[0]
    });

    alert("Đã chọn được người chiến thắng!");
    setTimeout("location.reload(true)",1);
  };

  render() {
    return (
      <div class="clearfix borderbox" id="page">
        <div class="clip_frame grpelem" id="u114">
          <img
            class="block"
            id="u114_img"
            src={background}
            alt=""
            data-heightwidthratio="0.6666666666666666"
            data-image-width="960"
            data-image-height="640"
          />{" "}
        </div>
        <div
          class="clip_frame grpelem"
          id="u136"
          data-sizePolicy="fluidWidthHeight"
          data-pintopage="page_fixedCenter"
        >
          <img
            class="block"
            id="u136_img"
            src={start}
            alt=""
            data-heightwidthratio="0.44"
            data-image-width="300"
            data-image-height="132"
          />{" "}
        </div>
        <div
          class="clip_frame grpelem"
          id="u146"
          data-sizePolicy="fluidWidthHeight"
          data-pintopage="page_fixedCenter"
        >
          <img
            class="block"
            id="u146_img"
            src={ball}
            alt=""
            data-heightwidthratio="0.27"
            data-image-width="600"
            data-image-height="162"
          />{" "}
        </div>
        <div class="clip_frame grpelem" id="u156">
          <img
            class="block"
            id="u156_img"
            src= {textLottery}
            alt=""
            data-heightwidthratio="0.38"
            data-image-width="300"
            data-image-height="114"
          />{" "}
        </div>
        <div class="clip_frame grpelem" id="u166" onClick={this.onClick}>
          <img
            class="block"
            id="u166_img"
            src={spin}
            alt=""
            data-heightwidthratio="1.0486486486486486"
            data-image-width="185"
            data-image-height="194"
          />{" "}
        </div>
        <div
          class="clearfix grpelem"
          id="u176-3"
          data-sizePolicy="fluidWidth"
          data-pintopage="page_fixedCenter"
        >
          <p>Contract được quản lý bởi: {this.state.manager}</p>
          <p>Hiện tại có {this.state.balance/this.state.fee} người tham gia. Và phần thưởng là {this.state.balance/1000000000000000000} ether</p>
          <p>Giá vé: {this.state.fee/1000000000000000000} ether</p>
        </div>
        <div class="clearfix grpelem" id="u192" onClick={this.onSubmit} >
          <div class="clip_frame grpelem" id="u179">
            <img
              class="block"
              id="u179_img"
              src={button}
              alt=""
              data-heightwidthratio="0.2966101694915254"
              data-image-width="236"
              data-image-height="70"
            />{" "}
          </div>
          <div
            class="clearfix grpelem"
            id="u189-4"
            data-muse-temp-textContainer-sizePolicy="true"
            data-muse-temp-textContainer-pinning="true"
          >
            <p>MUA VÉ</p>
          </div>
        </div>
        <div
          class="verticalspacer"
          data-offset-top="638"
          data-content-above-spacer="639"
          data-content-below-spacer="21"
          data-sizePolicy="fixed"
          data-pintopage="page_fixedLeft"
        />
      </div>
    );
  }
}

export default App;
