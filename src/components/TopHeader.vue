<template>
  <van-nav-bar
    :title="title"
    left-text="返回" 
    left-arrow 
    @click-left="onClickLeft" 
    @click-right="onClickRight" 
  >
    <template #right>
      <van-icon name="fire-o" size="18" />
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: 'TopHeader',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onClickLeft() {
      // console.log('onClickLeft')
      this.$router.go(-1)
    },
    onClickRight() {
      // console.log('onClickRight')
      this.$router.push('/hot')
    },
  },
}
</script>

<style scoped lang='less'>

</style>
