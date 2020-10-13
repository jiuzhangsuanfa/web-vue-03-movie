<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="hot" icon="fire-o">热播</van-tabbar-item>
    <van-tabbar-item name="soon" icon="new-o">马上</van-tabbar-item>
    <van-tabbar-item name="about" icon="contact">关于</van-tabbar-item>
  </van-tabbar>
</template>

<script>

export default {
  name: 'TabNav',
  props: {
    selected: String,
  },
  data () {
    return {
      active: this.selected,
    }
  },
  watch: {
    active: function(val, oldVal) {
      console.log(val,oldVal)
      // 这里就可以通过 val 的值变更来确定去向
      switch (val) {
        case "home":
          this.$router.push("/");
          break;
        case "hot":
          this.$router.push("/hot");
          break;
        case "soon":
          this.$router.push("/soon");
          break;
        case "about":
          this.$router.push("/about");
          break;
      }
    }
  },
}
</script>

<style scoped lang='less'>

</style>
