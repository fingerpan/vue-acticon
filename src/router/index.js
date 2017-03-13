import Vue from 'vue'
import Router from 'vue-router'
import layout from 'components/layout/acticon-box.vue'
import acticonDetail from "components/layout/acticon-detail.vue"

Vue.use(Router)

export default new Router({
  routes: [

    {
      name: "home",
      path:'/home',
      component:layout
    },
    {
      path:'/',
      redirect:"/home"
    },
    {
      name:"acticon-detail",
      path:"/acticon/:iconname",
      component: acticonDetail
    }


  ]
})
