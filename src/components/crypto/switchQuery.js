export const switchQuery = query => {
  const cryptoLists = [
    /(bch)|(bitcoin cash)$/i,
    /(eth)|(ethereum)/i,
    /(ltc)|(litecoin)/i,
    /(xrp)|(ripple)/i,
    /(btc)|(bitcoin)/i
  ];

  let match = cryptoLists.findIndex(rgxp => {
    return rgxp.test(query);
  })
console.log(match)
  switch(match){
    case 0:
      return 'BCH'
    case 1:
      return 'ETH';
    case 2:
      return 'LTC';
    case 3:
      return 'XRP';
    case 4:
      return 'BTC';
    default:
      return null;
  }
}
