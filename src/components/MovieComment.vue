<template>
  <div>
    <van-tabs v-model="tabCommentActive" type="line" color="#79f2af" line-width="70px" line-height="2px" swipeable duration="0.3">
      <van-tab title="热门影评">
        <van-list
          finished-text="没有更多了"
        >
          <van-panel v-for="c in reviews" :key="c.id" >
            <template #header>
              <van-cell
                size="large" 
                center
              >
                <template #icon>
                  <img :src="c.author.avatar" alt="" style="width:2rem;height:2rem; margin-right:.5rem">
                </template>

                <template #title>
                  <span class="custom-title">{{c.author.name}}</span>
                </template>

                <template #default>
                  <van-rate v-model="c.rating.value" allow-half oid-icon="star" color="#39a9ed" void-color="#AAA" readonly size="16px" />
                </template>
              </van-cell>
            </template>
            <template #footer>
              <van-panel :title="c.title" >
                <span class="mytext">{{c.summary}}</span>
              </van-panel>
            </template>
          </van-panel>
        </van-list>
      </van-tab>
      <van-tab title="热门短评">
        <van-list
          finished-text="没有更多了"
        >
          <van-panel v-for="c in comments" :key="c.id" >
            <template #header>
              <van-cell
                size="large" 
                center
              >
                <template #icon>
                  <img :src="c.author.avatar" alt="" style="width:2rem;height:2rem; margin-right:.5rem">
                </template>

                <template #title>
                  <span class="custom-title">{{c.author.name}}</span>
                </template>

                <template #label>
                  <van-rate v-model="c.rating.value" allow-half oid-icon="star" color="#39a9ed" void-color="#AAA" readonly size="12px" />
                  
                </template>

                <template #default>
                  <span style="font-size: 12px;">{{c.created_at}}</span><br>
                  <van-button type="primary" hairline plain round size="small" icon="good-job-o">
                    有用 ({{c.useful_count}})
                  </van-button>
                </template>
              </van-cell>
            </template>
            <template #footer>
              <p class="mytext">{{c.content}}</p>
            </template>
          </van-panel>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'MovieComment',
  props: {
    // 热门短评
    comments: {
      type: Array
    },
    // 热门影评
    reviews: {
      type: Array
    }
  },
  data () {
    return {
      tabCommentActive: 0,
    }
  }
}
</script>

<style scoped lang='less'>

</style>
