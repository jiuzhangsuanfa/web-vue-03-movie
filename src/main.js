import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入Vant UI
import {
  Cell, CellGroup, Tabbar, TabbarItem, PullRefresh, Stepper, Tab, Tabs, Button, 
  Row, Col, Swipe, SwipeCell, Card, SwipeItem, Lazyload, List, Field, NavBar, 
  Icon, Search, Toast, Dialog, Grid, GridItem, Form, Rate, Divider, TreeSelect, Image, Tag, Empty, IndexBar, IndexAnchor, AddressList, AddressEdit, SubmitBar, Panel, ActionSheet, Step, Steps, DropdownMenu, DropdownItem, Pagination, Loading,ImagePreview, Progress } from 'vant'

Vue.use(Cell).use(CellGroup).use(Tabbar).use(TabbarItem).use(Stepper).use(PullRefresh).use(Tab).use(Tabs).use(Field).use(NavBar).use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload).use(List).use(Icon).use(SwipeCell).use(Card).use(Search).use(Toast).use(Grid).use(GridItem).use(Form).use(Dialog).use(Rate).use(Divider).use(TreeSelect).use(Image).use(Tag).use(Empty).use(IndexBar).use(IndexAnchor).use(AddressList).use(AddressEdit).use(SubmitBar).use(Panel).use(ActionSheet).use(Step).use(Steps).use(DropdownMenu).use(DropdownItem).use(Pagination).use(Loading).use(ImagePreview).use(Progress)


import TopHeader from '@/components/TopHeader.vue'
import TabNav from '@/components/TabNav.vue'

// 注册全局组件
Vue.component('TopHeader', TopHeader)
Vue.component('TabNav', TabNav)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
