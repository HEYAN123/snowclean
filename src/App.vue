<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="12" class="sysname">扫雪工作管理系统</el-col>
          <el-col :span="10" class="username">欢迎，贺妍</el-col>
          <el-col :span="2" class="username" @click.native="logout"><i class="el-icon-remove"></i>退出</el-col>
        </el-row>
      </el-header>
      <el-main style="min-height: 700px;background-color:#fff;">
        <el-row>
          <el-col :span="4" style="padding-right:20px;">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              :router="true">
              <el-menu-item index="honor">
                <i class="el-icon-menu"></i>
                <span slot="title">荣誉墙</span>
              </el-menu-item>
              <el-menu-item index="perform">
                <i class="el-icon-setting"></i>
                <span slot="title">绩效墙</span>
              </el-menu-item>
              <el-menu-item index="forum">
                <i class="el-icon-document"></i>
                <span slot="title">雪情论坛</span>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="20">
            <router-view/>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    logout() {
      console.log(this.API)
      this.Cookies.remove('token');
      this.Cookies.remove('userId');
      this.Cookies.remove('type');
      this.$router.push({
          path: '/'
      })
    }
  }
}
</script>

<style>
#app {
  min-height: 100%;
  height: auto !important;
  height: 100%;
  position: relative;
}
.el-main {
  margin-top: 30px;
  border: 1px solid #eee;
}
  .username {
    text-align: right;
    padding-right: 10px;
  }
  .sysname {
    text-align: left;
    font-size: 35px;
    font-weight: 800;
  }
  .el-header {
    color: white;
    line-height: 60px;
    background-color: #409EFF;
  }
</style>
