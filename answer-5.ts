enum TYPE {
  LIMIT = 'limit',
  MARKET = 'market'
}
enum SIDE {
  SELL = 'buy',
  BUY = 'sell'
}
interface IBufferObjectBase {
  price: number
  quantity: number
  side: SIDE // or use literal string. side: "buy"|"sell"
  type: TYPE// or use literal string. side: "limit"|"market"
}
const object:IBufferObjectBase = {
  price: 1,
  quantity: 2,
  side: SIDE.BUY,
  type: TYPE.LIMIT,
}

new Buffer.from(JSON.stringify({price: 0, quantity: 0, side: ''})