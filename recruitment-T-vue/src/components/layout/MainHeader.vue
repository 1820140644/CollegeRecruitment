<template>
  <div id="main-header" class="header">
    <div class="logo">
      {{title}}
    </div>
  </div>
</template>
<script>
export default{
  name: 'main-header',
  data: function () {
    return {
      title: '招聘信息系统'
    }
  }
}
</script>
<style>

  .header{
    background-color: #2196f3;
  }

  .logo{
    font-size: 24px;
    color: white;
    display: inline-block;
    padding: 10px 20px;
  }
</style>
