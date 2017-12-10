export const testCompany = {
  name: 'test company',
  startprice: 120,
  orderbook: {

    latestTrades: [
      {
        buyer: 0,
        seller: 5,
        volume: 20,
        price: 120
      },
    ],

    orderDepthLevels: {

      buy: [
        {
          volume: 40,
          price: 119
        },
        {
          volume: 20,
          price: 118
        },
        {
          volume: 30,
          price: 117
        },
        {
          volume: 10,
          price: 116
        },
        {
          volume: 30,
          price: 115
        },
      ],

      sell: [
        {
          volume: 40,
          price: 121
        },
        {
          volume: 40,
          price: 122
        },
        {
          volume: 40,
          price: 123
        },
        {
          volume: 40,
          price: 124
        },
        {
          volume: 40,
          price: 125
        }
      ]
    }
  }
};