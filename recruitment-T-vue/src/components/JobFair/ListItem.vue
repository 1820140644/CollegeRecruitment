<template>
  <li>
    <!--<input
      type="checkbox"
      :value="listitem.id"
      :id="listitem.id"
      @change="selected">
    <router-link :to="{ path: 'detail', query: { id: listitem.id}}">{{listitem.name}}</router-link>
    <span>{{listitem.location}}</span>
    <span>{{listitem.time}}</span>
    -->
    <el-row :gutter="20">
      <el-col :span="1"><div class="grid-content">
        <input
          type="checkbox"
          :value="listitem.id"
          :id="listitem.id"
          @change="selected">
      </div></el-col>
      <el-col :span="10"><div class="grid-content">
        <router-link :to="{ path: 'JobFairDetail', query: { id: listitem.id}}">{{listitem.name}}</router-link>
      </div></el-col>
      <el-col :span="7"><div class="grid-content">
        <span>{{listitem.location}}</span>
      </div></el-col>
      <el-col :span="6"><div class="grid-content">
        <span>{{listitem.time}}</span>
      </div></el-col>
    </el-row>
  </li>
</template>
<script>
export default{
  name: 'list-item',
  props: ['item'],
  data: function () {
    return {
      listitem: this.item
    }
  },
  methods: {
    selected: function (event) {
      this.$emit('change',event.target.value)
    }
  }
}
</script>
<style>
  li{
    list-style: none;
  }
  el-row {
    margin-bottom: 20px;

  }
  el-row:last-child {
    margin-bottom: 0;
  }
  el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
