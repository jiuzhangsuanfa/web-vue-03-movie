<template>
  <div>
    <TopHeader title="电影详情"></TopHeader>

    <div v-if="loading" style="display: flex; justify-content: center; padding: 40px 0;" >
      <van-loading type="spinner" color="#1989fa" />
    </div>

    <van-panel v-if="!loading" :title="item.title" :status="item.year" >
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
            <van-col span="6">语言</van-col>
            <van-col span="18">
              <van-tag type="primary" plain v-for="(t, i) in item.languages" :key='i'>{{t}}</van-tag>
            </van-col>
          </van-row>
          <van-row gutter="2" >
            <van-col span="6">浏览</van-col>
            <van-col span="18">
              <span>{{item.reviews_count}} 次</span>
            </van-col>
          </van-row>
          <van-row gutter="2" >
            <van-col span="6">导演</van-col>
            <van-col span="18">
              <span v-for="(t, i) in item.directors" :key='i'>{{t.name}}<br></span>
            </van-col>
          </van-row>

        </van-col>
      </van-row>
      <van-grid gutter="10" column-num="2" :border="false" >
        <van-grid-item>
          <van-button type="primary" hairline plain icon="like-o">
            想看 ({{item.wish_count}})
          </van-button>
        </van-grid-item>
        <van-grid-item>
          <van-button type="primary" hairline plain icon="star-o">
            看过 ({{item.collect_count}})
          </van-button>
        </van-grid-item>
      </van-grid>
    </van-panel>
    
    <van-panel title="点播" v-if="!loading && item.has_video" >
      <van-grid :gutter="6" :border="false" column-num="4">
        <van-grid-item  v-for="(t, i) in item.videos" :key='i' :text="t.source && t.source.name" :url="t.sample_link"  >
          <template #icon>
            <img :src="t.source && t.source.pic" alt="" style="width:2.5rem;height:2.5rem;">
          </template>
        </van-grid-item>
      </van-grid>
    </van-panel>

    <van-tabs v-if="!loading" v-model="tabActive" type="line" color="#79f2af" line-width="30px" line-height="2px" swipeable duration="0.3">
      <van-tab title="简介">
        <van-panel title="剧情" >
          <p class="mytext">{{item.summary}}</p>
        </van-panel>

        <van-panel title="主演"  >
          <van-grid :gutter="6" :border="false" column-num="2">
            <van-grid-item  v-for="(t, i) in item.casts" :key='i' :text="t.name"  >
              <template #icon>
                <img :src="t.avatars && t.avatars.small" alt="" style="width:100%;" @click="viewImg(item.casts.map(i => i.avatars.large), i)" >
              </template>
            </van-grid-item>
          </van-grid>
        </van-panel>
        
        <van-panel title="导演"  >
          <van-grid :gutter="6" :border="false" column-num="2">
            <van-grid-item  v-for="(t, i) in item.directors" :key='i' :text="t.name"  >
              <template #icon>
                <img :src="t.avatars && t.avatars.small" alt="" style="width:100%;" @click="viewImg(item.casts.map(v => v.avatars.large), i)">
              </template>
            </van-grid-item>
          </van-grid>
        </van-panel>
        <van-panel title="编剧"  >
          <van-grid :gutter="6" :border="false" column-num="2">
            <van-grid-item  v-for="(t, i) in item.writers" :key='i' :text="t.name"  >
              <template #icon>
                <img :src="t.avatars && t.avatars.small" alt="" style="width:100%;" @click="viewImg(item.writers.map(v => v.avatars.large), i)">
              </template>
            </van-grid-item>
          </van-grid>
        </van-panel>

        <van-panel title="原型"  >
          <van-grid :gutter="6" :border="false" column-num="2">
            <van-grid-item  v-for="(t, i) in item.trailers" :key='i' :text="t.title"  >
              <template #icon>
                <img :src="t.small" alt="" style="width:100%;" @click="viewImg(item.trailers.map(v => v.medium), i)">
              </template>
            </van-grid-item>
          </van-grid>
        </van-panel>
        
      </van-tab>

      <van-tab title="剧照" :badge="item.photos.length">
        <van-grid :gutter="6" border column-num="1">
          <van-grid-item  v-for="(t, i) in item.photos" :key='i' @click="viewImg(item.photos.map(v => v.image), i)" >
            <template #icon>
              <img :src="t.thumb" alt="" style="width:100%;" >
            </template>
          </van-grid-item>
        </van-grid>
      </van-tab>

      <van-tab title="标签">
          <van-grid :gutter="6" :border="false" column-num="4">
            <van-grid-item  v-for="(t, i) in item.tags" :key='i'  >
              <template #text>
                <van-tag type="primary" plain >{{t}}</van-tag>
              </template>
            </van-grid-item>
          </van-grid>
      </van-tab>
      <van-tab title="评价" :badge="item.rating.average">
        <van-panel>
          <!-- <van-rate
            v-model="item.rating.average"
            :size="25"
            :count="10" 
            allow-half 
            readonly
            color="#ee0a24"
            void-icon="star"
            void-color="#eee"
          /> -->
          <!-- <van-progress :percentage="(item.rating.average / item.rating.max).toFixed(2) * 100" stroke-width="10" :pivot-text="item.rating.average" /> -->
        </van-panel>
        
        <MovieComment :comments="item.popular_comments" :reviews="item.popular_reviews"></MovieComment>
      </van-tab>
      
    </van-tabs>

    <van-divider
      :style="{ color: '#1989fa', margin: '3rem 0' }"
    >
    我是有底线的
    </van-divider>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import MovieComment from '@/components/MovieComment'

import {detail} from "@/api";

export default {
  name: 'Movie',
  components: {
    MovieComment
  },
  data () {
    return {
      id: 0,
      loading: true,
      item: { // 解决多层数据渲染的问题，设置默认值，否则控制台报错
        images: {
          small: ''
        },
        durations: [0],
        rating: {
          average: 0
        },
        casts:[]
      },
      tabActive:0, // 当前默认选中的tab标签,
      times: 0, // setInterval的执行次数
    }
  },
  methods: {
    getData() {
      // console.log(this.$route)
      this.id = this.$route.query.id ? this.$route.query.id : 0
      if (this.id === 0) {
        this.$toast('参数非法')
      } else {
        detail(this.id).then(res => {
          this.item = res
        }).catch(res => {
          // this.loading = false
        })
      }
    },
    viewImg(images,index) {
      ImagePreview({
        images:images, //需要预览的图片 URL 数组
        showIndex:true, //是否显示页码
        loop:false, //是否开启循环播放
        startPosition:index //图片预览起始位置索引
      })
    },
  },
  created() {
    this.getData()
  },
  mounted() {
    const t1 = setInterval(() => {
      this.times++
      console.log(this.times)
      
      // 累计调用超过10次，就强制退出
      if (this.times > 10) {
        console.log('超时')
        this.loading = false
        clearInterval(t1)
        this.$dialog.alert({
          title: '警告',
          message: '数据不完整'
        })
        // 没有数据时，设置默认数据
        // this.item.casts.map(i => {
        //   i.avatars.small = "http://dummyimage.com/100X160/7f29af"
        //   i.avatars.large = "http://dummyimage.com/200X360/7f29af"
        //   return i
        // })
        // this.loading = false
        // console.log('dddddddd', this.item)
        // clearInterval(t1)
      }

      // 当多层数据渲染完成后，在加载完成
      if (t1 && this.item.casts.length && this.item.casts[0].avatars.small) {
        // this.$toast('加载完成')
        this.loading = false
        console.log('dddddddd', this.item)
        clearInterval(t1)
      }
    }, 200)
  },
}
</script>

<style scoped lang='less'>

</style>
