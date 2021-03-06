import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Validator from 'vue-validator'

// 首页导航条
import Home from '@/view/home'
// 注册
import Register from '@/view/register'
// 登录
import Login from '@/view/login'
// 首页内容
import Hello from '@/view/home_content/hello'
// 个人信息
import Personal from '@/view/information/personal'

// 个人中心模块模块
import User from '@/view/user/user'
import UserInformation from '@/view/user/userInformation'

// 搜索模块
import Search from '@/view/search/search'

// 品牌介绍
import Introduce from '@/view/introduce/introduce'

// 购物
// import Buying from '@/view/buying/buying'

// 活动
import Activity from '@/view/activity/activity'

// 社区
import Community from '@/view/community/community'

// 详细页模块
import Description from '@/view/desciption/description'


Vue.use(Router)
Vue.use(Resource)
Vue.use(Validator)


export default new Router({
  routes: [
    {path:'/',component: Login},
    { path: '/register',component: Register},
    { path: '/home',component: Home,
        children:[
            {path:'personal',component: Personal },
            {path:'hello',component: Hello,
                children:[
                   {path:'login',component: Login}
                   
                ]
            },
            {path: 'description',component: Description},
            {path: 'search',component: Search},
            {path:'user',component: User,
                children:[                 
                  {path:'userInformation',component: UserInformation},
                  {path: '/', redirect: 'userInformation' }//在子路由定向到userInformation
                ]
            },
            {path: 'introduce',component: Introduce},
            // {path: 'buying',component: Buying},
            {path: 'activity',component: Activity},
            {path: 'community',component: Community}
           
        ]
}     
  ]
})
