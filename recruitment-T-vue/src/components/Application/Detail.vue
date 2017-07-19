<template>
  <div>
    <mu-sub-header><h2>{{details.name}}</h2></mu-sub-header>
    <mu-content-block>
      <p :class="{'item-hidden':itemHidden.time}">网申时间：{{details.startTime}}-{{details.endTime}}</p>
      <p :class="{'item-hidden':itemHidden.worker}">招聘岗位：{{details.worker}}</p>
      <p :class="{'item-hidden':itemHidden.workplace}">工作地点：{{details.workplace}}</p>
      <p :class="{'item-hidden':itemHidden.people}">招聘人数：{{details.people}}</p>
      <p :class="{'item-hidden':itemHidden.salary}">工资待遇：{{details.salary}}</p>
      <p :class="{'item-hidden':itemHidden.info}">备注：{{details.info}}</p>
      <p :class="{'item-hidden':itemHidden.url}">
        详细信息链接：
        <a :href="details.url" target="_blank">{{details.url}}</a>
      </p>
      <a @click="goBack">返回</a>
    </mu-content-block>
  </div>

</template>
<script>
  export default{
    name: 'item-detail',
    created: function () {
      this.id=this.$route.query.id
      this.showItem(this.itemHidden)
    },
    data: function () {
      return {
        location: false,
        id: '',
        details: {
          id: '12345',
          name: '深圳市灵游互娱股份有限公司',
          startTime: '2016/11/5  14:30:00',
          endTime: '2016/11/10  14:30:00',
          worker: '数值策划、系统策划、游戏运营、游戏商务',
          workplace: '深圳',
          people: '各10名',
          salary: null,
          info: '英语六级',
          url: 'http://scc.whut.edu.cn/vjread.aspx?id=24d1999e-8d03-4fd4-820c-3522eb3f27f4&vj'
        },
        itemHidden: {
          id: false,
          name: false,
          location: false,
          time: false,
          worker: false,
          workplace: false,
          people: false,
          salary: false,
          info: false,
          url: false
        }
      }
    },
    methods: {
      showItem: function(hidden) {
        for (var i = 0; i < this.details.length; i++) {
          if (this.details[i].value == null) {
            hidden[i].value = true
            console.log(i)
          }
        }
      },
      goBack: function () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style>
  a{
    cursor: pointer;
  }
  .item-hidden{
    display: none;
  }
  .setcolor{
    color: red;
    display: none;
  }
</style>
