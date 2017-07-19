<template>
  <div id="info-list">
    <mu-sub-header><h2 style="margin-bottom: 0px">网申信息</h2></mu-sub-header>
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
              <el-col :span="12"><div class="grid-content">
                <span>招聘单位</span>
              </div></el-col>
              <el-col :span="6"><div class="grid-content">
                <span>截止时间</span>
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
            time: '2016/11/5  14:30:00'
          },
          {
            id: '123456',
            name: '234',
            time: '234',
          },
          {
            id: '123457',
            name: '345',
            time: '345',
          },
          {
            id: '123458',
            name: '456',
            time: '456',
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
        this.$router.push('/ApplicationAdd')
      }
    }
  }
</script>
<style>

</style>
