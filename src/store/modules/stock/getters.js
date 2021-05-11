export default {
    stock(state) {
      return state.stock;
    },
    hasStock(state) {
      return state.stock && state.stock.length > 0;
    },
   
    isStock(_, getters, _2, rootGetters) {
      const stock = getters.stock;
      const stockId = rootGetters.stockId;
      return stock.some(stock => stock.id === stockId);
    }
   
  };