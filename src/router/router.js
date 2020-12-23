import Vue from "vue";
import Router from "vue-router";
import {user , offer , report} from "./menu"

Vue.use(Router);


let routes = [
  {
    path:"" ,
    redirect:"/user" ,
  } 
];



routes =  routes.concat(user , offer , report);

console.log(routes);

export default new Router({
  routes ,
  mode:"history"
});

