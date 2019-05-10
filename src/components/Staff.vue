<template>
  <div class="hello">
    <p style="font-size:30px;margin-top:0;">员工中心</p>
    <el-divider content-position="left">当前任务</el-divider>
    <br>
    <p>分配时间：2019/10/10</p>
    <p>任务信息：xxxxx处的雪三天内扫完</p>
    <br>
    <el-divider content-position="left">工作状态</el-divider>
    <br>
    <p>累计总工时：12小时</p>
    <p>
    <el-button type="primary">开始工作</el-button>
    <el-button type="success">结束工作</el-button>
    <el-button type="warning">有事请假</el-button>
    </p>
    <br>
    <el-divider content-position="left">内部活动</el-divider>
    
  </div>
</template>

<script>
export default {
  name: 'Staff',
  data () {
    return {
      tableData: [{
        "userId": "123",
        "userName":"贺妍",
        "vote": 23
      },
      {
        "userId": "321",
        "userName":"小李",
        "vote": 22
      },
      {
        "userId": "222",
        "userName":"小张",
        "vote": 20
      },
      {
        "userId": "222",
        "userName":"小张",
        "vote": 20
      }]
    }
  },
  methods:{
      tableRowClassName({row, rowIndex}) {
        if (rowIndex < 3) {
          return 'warning-row';
        } 
        return '';
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.warning-row {
    background-color: oldlace !important;
  }
</style>
