<template>
  <div>
    <TopHeader :title="title"></TopHeader>

    <div class="movie-list">
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
    </div>

    <TabNav selected="hot"></TabNav>
  </div>
</template>

<script>
import {hot} from "@/api";

export default {
  name: 'Hot',
  data () {
    return {
      start: 0,
      count: 10,
      total: 0,
      title: '',
      loading: true,
      list: []
    }
  },
  methods: {
    getData() {
      // console.log(this.$route)
      this.start = this.$route.query.start ? this.$route.query.start : 0
      this.count = this.$route.query.count ? this.$route.query.count : 10
      hot(this.start, this.count).then(res => {
        // console.log('data', res)
        this.loading = false;
        this.list = res.subjects
        this.total = res.total
        this.title = res.title
      }).catch(res => {
          this.loading = false
      })
    }
  },
  mounted() {
    this.getData()
  },
}
</script>

<style lang='less'>

</style>