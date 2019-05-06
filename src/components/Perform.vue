<template>
  <div class="hello">
    <p style="font-size:30px;margin-top:0;">绩效墙</p>
        <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            type="index"
            label="排名">
        </el-table-column>
        <el-table-column
            prop="userName"
            label="姓名">
        </el-table-column>
        <el-table-column
            prop="score"
            label="绩效得分">
        </el-table-column>
        <el-table-column
        prop="reward"
        label="得奖情况">
        </el-table-column>
        </el-table>
        <br>
        <el-pagination
        style="text-align:right;"
        background
        layout="prev, pager, next"
        :total="1000">
        </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Honor',
  data () {
    return {
      tableData: [{
        "userId": "123",
        "userName":"贺妍",
        "score": 23,
        "reward": "有奖金"
      },
      {
        "userId": "321",
        "userName":"小李",
        "score": 22,
        "reward": "有奖金"
      },
      {
        "userId": "222",
        "userName":"小张",
        "score": 20
      }]
    }
  },
  methods:{
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.warning-row {
    background-color: oldlace !important;
  }
</style>
