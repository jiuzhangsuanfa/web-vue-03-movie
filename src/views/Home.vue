<template>
  <div class="home">
    <van-nav-bar
      title="小喵电影"
      left-text="+" 
    >
      <template #right>
        <!-- <van-icon name="search" size="18" /> -->
      </template>
    </van-nav-bar>

    <van-list
        v-model="loading"
        :finished="finished"
        :immediate-check="false"
        :offset="offset"
        finished-text="我是有底线的"
        loading-text="正在玩命加载..."
        @load="onLoadList" 
        class="movie-list"
    >

      <van-panel :title="item.title" :status="item.year" v-for="item in list" :key="item.id" @click="$router.push({name: 'movie', query: {id: item.id} })">
        <van-row gutter="2" >
          <van-col span="10">
            <van-cell>
              <template #icon>
                <img :src="item.images.small" alt="" style="width:100%;">
              </template>
            </van-cell>
          </van-col>
          <van-col span="14" class="movie-desc">
            <van-row gutter="2" >
              <van-col span="6">片名</van-col>
              <van-col span="18">{{item.original_title}}</van-col>
            </van-row>
            <van-row gutter="2" >
              <van-col span="6">片长</van-col>
              <van-col span="18">{{item.durations[0]}}</van-col>
            </van-row>
            <van-row gutter="2" >
              <van-col span="6">评分</van-col>
              <van-col span="18">
                <van-rate v-model="item.rating.average" :count="10" allow-half readonly size="12px" gutter="2px" />
              </van-col>
            </van-row>
            <van-row gutter="2" >
              <van-col span="6">类别</van-col>
              <van-col span="18">
                <van-tag type="primary" plain v-for="(t, i) in item.genres" :key='i'>{{t}}</van-tag>
              </van-col>
            </van-row>
            <van-row gutter="2" >
              <van-col span="6">上映</van-col>
              <van-col span="18">
                <span>{{item.mainland_pubdate}}</span>
              </van-col>
            </van-row>
            <van-row gutter="2" >
              <van-col span="6">导演</van-col>
              <van-col span="18">
                <span v-for="(t, i) in item.directors" :key='i'>{{t.name}}<br></span>
              </van-col>
            </van-row>
            <van-row gutter="2" >
              <van-col span="6">主演</van-col>
              <van-col span="18">
                <span v-for="(t, i) in item.casts" :key='i'>{{t.name}}<br></span>
              </van-col>
            </van-row>

          </van-col>
        </van-row>
      </van-panel>
    </van-list>

    <TabNav selected="home"></TabNav>
  </div>
</template>

<script>
import {all} from "@/api";

export default {
  name: 'Soon',
  data () {
    return {
      start: 0, // 当前页码
      count: 10, // 单页记录数
      total: 0, // 总记录数
      title: '',
      loading: true,
      finished: false,
      list: [],
      offset: 200 // 滚动条与底部距离小于 offset 时触发load事件
    }
  },
  methods: {
    getData() {
      all(this.start, this.count).then(res => {
        console.log('data', res)
        this.loading = false;
        // this.list = this.list.concat(res.subjects)
        this.list = res.subjects.slice(0,this.start+this.count)
        this.total = res.total
        this.title = res.title
        if (this.list.length >= this.total) {
          // 当所有的记录都加载完成时，才设置完成
          this.finished = true
        }       
      }).catch(res => {
          this.loading = false
          this.finished = true
      })
    },
    // 上拉加载请求方法
    onLoadList() {
      this.$toast('loading...')
      this.start = this.start + this.count
      this.loading = true
      this.getData()
    },
  },
  mounted() {
    this.getData()
  },
}
</script>

<style lang='less'>

</style>