import React, { Component } from 'react';

import { QueryInput, Title, Button, CryptoList, ErrSpan } from './styles';
import CoinInfo from './CoinInfo';
import { switchQuery } from './switchQuery';

let exchange = new ccxt['binance']();

export default class Crypto extends Component {
  state = {
    query: '',
    cryptos: [],
    error: ''
  }
  handleQuery = ({ target }) => {
    this.setState({
      query: target.value,
      error: ''
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();

    let search = switchQuery(this.state.query);

    if(search === null){
      this.setState({ error: 'Not found or incorrect search term' });
      return;
    }

    let api = `https://min-api.cryptocompare.com/data/price?fsym=${search}&tsyms=USD`;

    fetch(api)
    .then(response => response.json())
    .then(data => {
      let { query } = this.state;
      let addCryptos = {
        symbol: query,
        price: `$${data.USD}`
      }

      this.setState(prevState => {
        return {
          cryptos: [...this.state.cryptos, addCryptos],
          query: ''
        }
      })
    })
    .catch(err => {
      this.setState({
        error: 'Not found or incorrect search term'
      })
    });

    // (async () => {
    //   let search = switchQuery(this.state.query);
    //   let binance = new ccxt.binance();
    //   binance.proxy = 'https://cors-anywhere.herokuapp.com/';
    //   let markets = await binance.fetch_ticker(search);
    //
    //   let addCryptos = [...this.state.cryptos, markets];
    //
    //   this.setState(() => {
    //     return {
    //       cryptos: addCryptos,
    //       query: ''
    //     }
    //   })
    //
    //   console.log(this.state);
    // })()
  }
  render = () => {
    return (
      <div className="hd-container">
        <Title>CryptoCurrency Check</Title>
        <form onSubmit={this.handleSubmit}>
          <QueryInput
            type="text"
            size="38"
            placeholder="Enter cryptocurrency you want to check"
            value={this.state.query}
            onChange={this.handleQuery}
          />
          <Button>
            <h4>Go!</h4>
          </Button>
          <ErrSpan>{this.state.error}</ErrSpan>
        </form>
        <CryptoList>
          {this.state.cryptos && this.state.cryptos.map((val, i) => {
            return (
              <CoinInfo
                key={i + 1}
                info={val}
              />
            )
          })}
        </CryptoList>
      </div>
    )
  }
}
