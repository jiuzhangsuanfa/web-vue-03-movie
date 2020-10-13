<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang='less'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.movie-desc {
  padding: 10px 0;
  font-size: .8rem;
}
.van-tag {
  margin-right: 5px;
}

.movie-list {
  display: block;
  > div {
    &:last-of-type {
      height: 320px;
    }
  }
}
.mytext {
  padding: 0 20px;
  font-size: .9rem;
  color: #666;
}
</style>
