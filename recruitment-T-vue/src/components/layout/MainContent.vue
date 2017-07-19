<template>
  <div id="main-content" class="content">
    <div class="content-left">
      <main-menu></main-menu>
    </div>
    <div class="content-right">
      <div class="body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import MainMenu from './MainMenu.vue'

export default{
  name: 'main-content',
  data: function () {
    return {

    }
  },
  components: {
      MainMenu
  }
}
</script>
<style>
  .content{
    overflow: hidden;
  }

  .content-left{
    width: 20%;
    float: left;
    background-color: white;
    margin-bottom: -4000px;
    padding-bottom: 4000px;
  }

  .content-right{
    width: 80%;
    display: inline-block;
    float: right;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0)
  }
  .body{
    background-color: white;
    border-radius: 5px;
    min-height: 500px;
  }
</style>
