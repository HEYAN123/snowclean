<template>
  <div class="hello">
    <p style="font-size:30px;margin-top:0;">管理中心</p>
    <el-divider content-position="left">员工管理</el-divider>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
            type="index">
        </el-table-column>
        <el-table-column
            prop="userName"
            label="姓名">
        </el-table-column>
        <el-table-column
            prop="score"
            label="性别">
        </el-table-column>
        <el-table-column
        prop="reward"
        label="身份证号">
        </el-table-column>
        <el-table-column
        prop="reward"
        label="小组编号">
        </el-table-column>
        <el-table-column
        prop="reward"
        label="工作状态">
        </el-table-column>
        <el-table-column
        prop="reward"
        label="操作">
            <template slot-scope="scope">
                <el-button type="primary" size="small">调配小组</el-button>
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
    <br>
    <el-divider content-position="left">小组管理</el-divider>
    <p><el-button type="success" size="small">新建小组</el-button></p>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
            type="index">
        </el-table-column>
        <el-table-column
            prop="userName"
            label="小组编号">
        </el-table-column>
        <el-table-column
            width="400px"
            prop="score"
            label="任务">
        <template slot-scope="scope">
            <el-row>
                <el-col span="20">
                    <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="请输入任务要求"
                    v-model="textarea">
                    </el-input>
                </el-col>
                <el-col span="4" style="padding-left:10px;">
                    <el-button type="primary" size="small">通知</el-button>
                </el-col>
            </el-row>
        </template>
        </el-table-column>
        <el-table-column
        prop="reward"
        label="平均进度">
        </el-table-column>
        <el-table-column
        prop="reward"
        label="操作">
            <template slot-scope="scope">
                <el-button type="primary" size="small">打分</el-button>
            </template>
        </el-table-column>
        </el-table>
    <br>
    <el-divider content-position="left">申请管理</el-divider>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
            type="index">
        </el-table-column>
        <el-table-column
            prop="userName"
            label="小组编号">
        </el-table-column>
        <el-table-column
            prop="score"
            label="申请内容">
        </el-table-column>
        <el-table-column
        prop="reward"
        label="申请处理">
            <template slot-scope="scope">
                <el-button type="primary" size="small">调配完成</el-button>
                <el-button type="warning" size="small">忽略申请</el-button>
            </template>
        </el-table-column>
        </el-table>
        <br>
    <el-divider content-position="left">车辆管理</el-divider>
    <p><el-button type="success" size="small">新增车辆</el-button></p>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
            type="index">
        </el-table-column>
        <el-table-column
            prop="userName"
            label="车辆编号">
        </el-table-column>
        <el-table-column
            width="400px"
            prop="score"
            label="车牌号">
        </el-table-column>
        <el-table-column
        prop="reward"
        label="小组编号">
        </el-table-column>
        <el-table-column
        prop="reward"
        label="使用状态">
        </el-table-column>
        <el-table-column
        prop="reward"
        label="操作">
            <template slot-scope="scope">
                <el-button type="primary" size="small">调配</el-button>
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
    <el-divider content-position="left">工具管理</el-divider>
    <p><el-button type="success" size="small">新增车辆</el-button></p>
    <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
            type="index">
        </el-table-column>
        <el-table-column
            prop="userName"
            label="工具编号">
        </el-table-column>
        <el-table-column
            prop="userName"
            label="小组编号">
        </el-table-column>
        <el-table-column
            prop="score"
            label="使用状态">
        </el-table-column>
        <el-table-column
        prop="reward"
        label="操作">
            <template slot-scope="scope">
                <el-button type="primary" size="small">调配</el-button>
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
        <el-divider content-position="left">活动管理</el-divider>
        <el-button type="primary" size="small">投票系统开启</el-button>
        <el-button type="success" size="small">绩效系统开启</el-button>
  </div>
</template>

<script>
export default {
  name: 'Manager',
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
