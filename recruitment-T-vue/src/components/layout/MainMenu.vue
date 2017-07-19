<template>
  <div id="main-menu">
    <!--<mu-list @change="handleListChange" :vlaue="activeItem">
      <mu-list-item
        v-for="item in menulist"
        :title="item.title"
        :value="item.value"
        :to="item.itemUrl">
      </mu-list-item>
    </mu-list>-->
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :router="true">
      <el-menu-item index="/JobFairList">宣讲会信息</el-menu-item>
      <el-menu-item index="/ApplicationList">网申信息</el-menu-item>
      <el-menu-item index="3">导航3</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default{
  name: 'main-menu',
  data: function () {
    return {
      menulist: [
        {
          title: '招聘信息管理',
          value: 'InfoManagement',
          itemUrl: '/InfoMessageList'
        },
        {
          title: '招聘信息管理3',
          value: 'InfoManagement3'
        },
        {
          title: '招聘信息管理2',
          value: 'InfoManagement2'
        }
      ],
      activeItem: 'InfoManagement'
    }
  },
  methods: {
    handleListChange(val){
      this.activeItem = val
    }
  }
}
</script>
<style>
.active-item{
  color: #2196f3;
}
</style>
