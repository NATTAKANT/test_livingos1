<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
       <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Welcome page
          </v-list-item-title>
            <p v-if="hasuser">
          <v-list-item-subtitle v-for="welcome in allwelcome" :key="welcome.id">
          {{ welcome.email }}
           </v-list-item-subtitle>
            </p>
              <h3 v-else> ไม่ได้เข้าด้วย Login </h3>
        </v-list-item-content>
      </v-list-item>
    <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
            
          </v-list-item-icon>
          

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        <v-btn
     class="mt-1 ml-1"
     @click="loadOnce"
     >

      Logout
    </v-btn>
    
    </v-navigation-drawer>
    
 

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title> Webaplication </v-toolbar-title>
    </v-app-bar>

       <v-main>
         <router-view></router-view>
    </v-main>
      

 
  </v-app>
</template>

<script>
  export default {
    data: () => ({
       drawer: null ,
          items: [
          { title: 'Wellcome', icon: 'mdi-view-dashboard',to:'/welcome' },
          { title: 'Listlog', icon: 'mdi-image',to:'/Listlog' },
          // { title: 'Logout', icon: 'mdi-help-box',to:'/' },
        ],
       }),
    computed:{
        allwelcome(){
            return this.$store.getters['welcome/welcome'];
        }, 
        hasuser(){
            return this.$store.getters['welcome/hasuser'];
        },     
  },
      methods:{
         clear () {
        this.email = ''
        this.password = ''
      },
   loadOnce (){
       window.location.reload()
    }
      }
  }
</script>