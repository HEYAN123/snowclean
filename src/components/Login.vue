<template>
  <div class="hello">
    <el-row>
        <el-card class="box-card" style="margin: 0 auto;width:50%;min-height: 00px;">
          <div slot="header" class="clearfix">
            <h1>请先登录</h1>
          </div>
          <div>
            <br>
            <el-row>
              <el-col :span="2" style="line-height: 40px;">
                <span>账号：</span>
              </el-col>
              <el-col :span="22">
                <el-input
                  placeholder="请输入您的账号"
                  prefix-icon="el-icon-user-solid"
                  v-model="userId">
                </el-input>
              </el-col>
            </el-row>
            <br><br>
            <el-row>
              <el-col :span="2" style="line-height: 40px;">
                <span>密码：</span>
              </el-col>
              <el-col :span="22">
                <el-input
                  placeholder="请输入您的账号密码"
                  prefix-icon="el-icon-s-check"
                  v-model="password">
                </el-input>
              </el-col>
            </el-row>
            <br><br>
            <el-button type="primary" style="width: 100%;">登录</el-button>
            <br><br>
            <el-button type="warning" style="width: 100%;">没有账号？点击注册</el-button>
          </div>
        </el-card>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userId: "",
      password: ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
