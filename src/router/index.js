import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../Layout.vue"
import Home from "../views/Home.vue";
import Welcome from "../views/welcome/welcome.vue"
import Listlog from "../views/listlog/listlog.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  }, 

  {
    path: "/Layout/:id",
    component: Layout,
    redirect: '/',
    children:[
      {
        path: "/welcome",
        component: Welcome,
      },
      {
        path: '/Listlog/',
        component: Listlog, 
     
      },
    ]
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
