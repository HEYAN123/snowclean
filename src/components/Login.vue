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
                  placeholder="请输入您的身份证后六位"
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
            <el-button type="warning" style="width: 100%;" @click="dialogVisible = true">没有账号？点击注册</el-button>
            <el-dialog
              title="注册"
              :visible.sync="dialogVisible"
              width="30%">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                  <el-radio v-model="ruleForm.sex" label="男">男</el-radio>
                  <el-radio v-model="ruleForm.sex" label="女">女</el-radio>
                </el-form-item>
                <el-form-item label="身份证号" prop="id">
                  <el-input v-model="ruleForm.id"></el-input>
                </el-form-item>
                <el-form-item label="工龄" prop="workAge">
                  <el-input v-model="ruleForm.workAge"></el-input>
                </el-form-item>
                <el-form-item label="居住地址" prop="address">
                  <el-input v-model="ruleForm.address"></el-input>
                </el-form-item>
                <el-form-item label="账号密码" prop="password">
                  <el-input v-model="ruleForm.password" type="password"></el-input>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm">确 定</el-button>
              </span>
            </el-dialog>
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
      dialogVisible: false,
      userId: "",
      password: "",
      ruleForm: {
          name: '',
          sex: '',
          id: '',
          password: ''
        },
      rules: {
        name: [
          { required: true, message: '请输入您的姓名', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择您的性别', trigger: 'blur' }
        ],
        id: [
          { required: true, message: '请输入您的身份证号码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请设置您的密码', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    submitForm() {
        console.log(this.ruleForm);
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
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
