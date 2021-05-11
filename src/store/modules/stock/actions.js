export default {
    Stock(context, data) {
      const StockData = {
        id: context.rootGetters.stockId,
        stockName: data.st,
        image: data.im,
      };
  
      context.commit('Stock', StockData);
    }
  };