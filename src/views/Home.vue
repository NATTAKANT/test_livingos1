<template>
 
      <login-form  @save-data="saveData"></login-form>
    
  
</template>

<script>
import LoginForm from '../components/Home/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
 methods: { //มันรู้ได้ด้วยตัวเองว่า methods ต้องไปหา modules  - action.js
    saveData(data) {
      this.$store.dispatch('welcome/Login', data);
      this.$router.replace('/welcome');
    }
  }
};
</script>