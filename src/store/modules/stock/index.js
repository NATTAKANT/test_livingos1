import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      stock: [
        {
            id: 1,
            stockName: 'DEAR',
            image: 'testimg',
        
          },
          {
            id: 2,
            stockName: 'TTTT',
            image: 'testiAAAAAmg',
        
          },

      ]
    };
  },
  mutations,
  actions,
  getters
};
