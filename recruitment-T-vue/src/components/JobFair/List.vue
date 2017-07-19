<template>
  <div id="info-list">
    <mu-sub-header><h2 style="margin-bottom: 0px">招聘会信息</h2></mu-sub-header>
    <mu-content-block>
      <div class="toolbar">
        <el-button type="primary" icon="plus" size="small" @click="addItem">添加</el-button>
      </div>
      <div>
        <ul>
          <li >
            <el-row :gutter="20">
              <el-col :span="1"><div class="grid-content">
              </div></el-col>
              <el-col :span="10"><div class="grid-content">
                <span>招聘单位</span>
              </div></el-col>
              <el-col :span="7"><div class="grid-content">
                <span>宣讲会地点</span>
              </div></el-col>
              <el-col :span="6"><div class="grid-content">
                <span>宣讲会时间</span>
              </div></el-col>
            </el-row>
          </li>
          <hr>
          <li is="list-item"
              v-for="(item,index) in info"
              :item="item"
              @change="cbChange">
          </li>
        </ul>
      </div>
    </mu-content-block>
  </div>
</template>
<script>
import ListItem from './ListItem.vue'
export default{
  name: 'info-list',
  data: function () {
    return {
      info: [
        {
          id: '12345',
          name: '深圳市灵游互娱股份有限公司',
          location: '东院就业大楼东风厅',
          time: '2016/11/5  14:30:00',
          worker: '数值策划、系统策划、游戏运营、游戏商务',
          workplace: '深圳',
          people: '各10名'
        },
        {
          id: '123456',
          name: '234',
          location: '234',
          time: '234',
          worker: '234',
          workplace: '234',
          people: '243'
        },
        {
          id: '123457',
          name: '345',
          location: '345',
          time: '345',
          worker: '345',
          workplace: '345',
          people: '354'
        },
        {
          id: '123458',
          name: '456',
          location: '456',
          time: '456',
          worker: '456',
          workplace: '465',
          people: '465'
        }
      ],
      selectedItem: [],
      foo: 'checked'
    }
  },
  components: {
      ListItem
  },
  methods: {
    cbChange: function (id) {
      //alert(id)
      var index = this.selectedItem.indexOf(id)
      if(index<0){
        this.selectedItem.push(id)
      }
      else {
        this.selectedItem.splice(index,1)
      }
    },
    addItem: function () {
      this.$router.push('/JobFairAdd')
    }
  }
}
</script>
<style>

</style>
