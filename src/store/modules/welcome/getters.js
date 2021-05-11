export default {
    welcome(state) {
      return state.welcome;
    },
    hasuser(state) {
      return state.welcome && state.welcome.length > 0 ;
    },
    isuser(_, getters, _2, rootGetters) {
      const welcome = getters.welcome;
      const userId = rootGetters.userId;
      return welcome.some(welcome => welcome.id === userId);
    }
   
  };