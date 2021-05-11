<template>
 <section>
<!-- 
<v-container  fluid class="fill-height" >
   <v-row>
<v-simple-table >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
           v-for="stock in allstock" :key="stock.id"
      
        >
          <td>{{ stock.id}}</td>
          <td>{{ stock.stockName }}</td>
          <td>{{ stock.image }}</td>
          <td>{{ }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

      <stock-item >   </stock-item>
   </v-row>
</v-container> -->

 <stock-form  @save-data="saveData">
  </stock-form>

 </section>

  
</template>

<script>
import StockForm from '../../components/Stock/StockForm.vue';

export default {
  components: {
    StockForm,

  },
  computed: {
   allstock() {
     return this.$store.getters['stock/stock'];
   }
      },
 methods: {
    saveData(data) {
      this.$store.dispatch('welcome/Stock', data);
      this.$router.replace('/welcome');
    }
  }
};
</script>