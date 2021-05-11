<template>
  <v-container fluid class="fill-height">
     <v-row align="center" justify="center">
       <v-col cols="12" md="12" lg="10" xl="8" align="center" justify="center">      
<form @submit.prevent="submitForm">
<v-tab >
    <v-card class="px-12">
    <v-card-title class="text-center justify-center py-6"> 
    <h2>
        <v-icon color="red darken-2" >
         mdi-lock
        </v-icon>
        Login
    </h2>
  </v-card-title>
      <v-card-text>
    <v-text-field
      id="email" 
      v-model.trim="email"
      label="E-mail"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'email'"
    ></v-text-field>
    <v-text-field
            id="pasword" 
            v-model.trim="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            password="input-10-1"
            label="password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
    ></v-text-field>
    
    <v-btn type="submit"
      class="mr-4 mt-4"
    >
      Login
    </v-btn>
    <v-btn
     class="mt-4"
     @click="clear">
      clear
    </v-btn>
   
      </v-card-text>
         </v-card>
</v-tab>
  </form>
      </v-col>
           </v-row>
  </v-container>
</template>
<script>
export default {
   emits: ['save-data'],
    data () {
      return {
        email: '',
        password: '',
        show1: false,
        show2: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'กรุณาใส่ข้อมูล',
          emailMatch: () => (`The email and  you entered don't match`),
        },
           
      };
    },
   methods: {
    submitForm() {
      const formData = {
        em: this.email,
        pass: this.password
      };
      this.$emit('save-data', formData);
      console.log(formData);
    },
     clear () {
        this.email = ''
        this.password = ''
      },
  }
  }



</script>
