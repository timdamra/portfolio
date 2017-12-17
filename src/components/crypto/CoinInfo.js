import React, { Component } from 'react';

import { Coin } from './styles';

export default class CoinInfo extends Component{
  constructor(props){
    super(props);
  }
  render = () => {
    return (
      <Coin>
        <h3>{this.props.info.symbol}</h3>
        <h5>Price: <span>{this.props.info.price}</span></h5>
      </Coin>
    )
  }
}
