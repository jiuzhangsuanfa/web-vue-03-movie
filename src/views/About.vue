<template>
  <div class="about">
    <TopHeader title="关于我们"></TopHeader>

    <van-empty description="Vue的学习项目" >
      <h1>This is an about page</h1>
    </van-empty>

    <TabNav selected="about"></TabNav>

  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<style scoped lang='less'>

</style>
