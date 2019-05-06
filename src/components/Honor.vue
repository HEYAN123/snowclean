<template>
  <div class="hello">
    <p style="font-size:30px;margin-top:0;">荣誉墙</p>
        <el-table
        :data="tableData"
        :row-class-name="tableRowClassName"
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
            prop="vote"
            label="所得票数">
        </el-table-column>
        <el-table-column
        prop="tag"
        label="荣誉">
        <template slot-scope="scope">
            {{scope.$index >3 || scope.$index == 3 ? null :"光荣扫雪员"}}
        </template>
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
