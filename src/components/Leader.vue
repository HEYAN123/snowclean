<template>
  <div class="hello">
    <p style="font-size:30px;margin-top:0;">组长中心</p>
    <el-divider content-position="left">当前任务</el-divider>
    <p>分配时间：2019/10/10</p>
    <p>任务信息：xxxxx处的雪三天内扫完</p>
    <el-divider content-position="left">借调</el-divider>
    <el-row>
        <el-col span="12">
            <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入借调需求"
            v-model="textarea">
            </el-input>
        </el-col>
        <el-col span="3">
            <el-button size="small" type="primary" style="margin-left: 10px;">
                确定
            </el-button>
        </el-col>
    </el-row>
   <el-divider content-position="left">组员工作</el-divider>
   平均工作进度：<el-progress :percentage="70"></el-progress><br>
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
                    <el-button type="primary" size="small">更新</el-button>
                </el-col>
            </el-row>
        </template>
        </el-table-column>
        <el-table-column
        prop="reward"
        width="550px"
        label="进度">
        <template slot-scope="scope">
            <el-row>
                <el-col span="20">
                    <el-slider
                    v-model="value"
                    show-input>
                    </el-slider>
                </el-col>
                <el-col span="4" style="padding-left:10px;padding-right:10px;">
                    <el-button type="primary" size="small">更新</el-button>
                </el-col>
            </el-row>
        </template>
        </el-table-column>
        <el-table-column
        prop="reward"
        label="活动"
        >
            <template slot-scope="scope">
                <el-button type="warning" size="small">打分</el-button>
            </template>
        </el-table-column>
        </el-table>
    <br>
    <el-divider content-position="left">车辆状态</el-divider>
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
            prop="score"
            label="车牌号">
        </el-table-column>
        <el-table-column
        prop="reward"
        label="当前状态">
        </el-table-column>
        <el-table-column
        prop="reward"
        label="状态更新"
        >
            <template slot-scope="scope">
                <el-button type="primary" size="small">工作中</el-button>
                <el-button type="success" size="small">待工作</el-button>
                <el-button type="warning" size="small">待维修</el-button>
            </template>
        </el-table-column>
        </el-table>
    <br>
    <el-divider content-position="left">工具状态</el-divider>
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
        prop="reward"
        label="当前状态">
        </el-table-column>
        <el-table-column
        prop="reward"
        label="状态更新"
        >
            <template slot-scope="scope">
                <el-button type="primary" size="small">工作中</el-button>
                <el-button type="success" size="small">待工作</el-button>
                <el-button type="warning" size="small">待维修</el-button>
            </template>
        </el-table-column>
        </el-table>
    
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
