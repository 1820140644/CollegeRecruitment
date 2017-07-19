<template>
  <div>
    <mu-sub-header><h2>新增宣讲会</h2></mu-sub-header>
    <mu-content-block>
      <el-form ref="form" :model="form" label-width="100px">
        <el-row>
          <el-col :span="12"><div class="grid-content">
            <el-form-item label="单位名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </div></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><div class="grid-content">
            <el-form-item label="网申时间">
                <el-date-picker
                  v-model="form.time"
                  type="datetimerange"
                  placeholder="选择日期时间"
                  format="yyyy-MM-dd HH:mm"
                  style="width: 100%"
                  editable="false"
                  :picker-options="afterToday">
                </el-date-picker>
            </el-form-item>
          </div></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><div class="grid-content">
            <el-form-item label="招聘岗位">
              <el-input type="textarea" v-model="form.worker" :autosize="{minRows:2}" placeholder="岗位用“，”分隔"></el-input>
            </el-form-item>
          </div></el-col>
          <el-col :span="12"><div class="grid-content">
            <el-form-item label="工作地点">
              <el-input type="textarea" v-model="form.workplace" :autosize="{minRows:2}" placeholder="地点用“，”分隔"></el-input>
            </el-form-item>
          </div></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><div class="grid-content">
            <el-form-item label="招聘人数">
              <el-input v-model="form.people"></el-input>
            </el-form-item>
          </div></el-col>
          <el-col :span="12"><div class="grid-content">
            <el-form-item label="工资待遇">
              <el-input v-model="form.salary"></el-input>
            </el-form-item>
          </div></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><div class="grid-content">
            <el-form-item label="备注">
              <el-input type="textarea" v-model="form.info" :autosize="{minRows:2}"></el-input>
            </el-form-item>
          </div></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"><div class="grid-content">
            <el-form-item label="详细信息链接">
              <el-input v-model="form.url"></el-input>
            </el-form-item>
          </div></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><div class="grid-content">&nbsp;</div></el-col>
          <el-col :span="8"><div class="grid-content">
            <el-button type="primary" @click="onSubmit('form')">提交</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
            <el-button @click="goBack">返回</el-button>
          </div></el-col>
          <el-col :span="8"><div class="grid-content">&nbsp;</div></el-col>
        </el-row>
      </el-form>
    </mu-content-block>
  </div>
</template>
<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  export default{
    components: {
      ElCol,
      ElRow
    },
    name: 'add-item',
    data: function () {
      return {
        afterToday: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        form: {
          name: '',
          location: '',
          time: '',
          worker: '',
          workplace: '',
          people: '',
          salary: '',
          info: '',
          url: ''
        }
      }
    },
    methods: {
      onSubmit: function (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm: function (formName) {
        this.$refs[formName].resetFields();
      },
      goBack: function () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style>

</style>
