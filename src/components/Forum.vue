<template>
  <div class="hello">
    <p style="font-size:30px;margin-top:0;">雪情论坛</p>
    <div>
        <el-card class="box-card" shadow="never" style="color:#777777;" v-for="snow in snows" :key="snow.snowId" >
            <el-row>
                <el-col :span="20" style="color:#409EFF;font-size:20px;">
                    <router-link :to="'/newscontent/'+snow.snowId">{{snow.title}}</router-link>
                </el-col>
                <el-col :span="4">{{snow.time}}</el-col>
            </el-row><br>
            <i class="el-icon-s-custom"></i>{{snow.author}}
        </el-card>
        <p style="text-align:left;"><el-button size="small" type="primary" @click="publishHandle">发表</el-button></p>
        <el-pagination
        style="text-align:right;"
        background
        layout="prev, pager, next"
        :total="1000">
        </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Forum',
  data () {
    return {
      snows: [
      {
        "snowId": 123,
        "title": "和兴路重大雪灾",
        "content": "严重严重严重",
        "time": "2019/4/4 9:00:23",
        "author": "贺妍",
      },
      {
        "snowId": 321,
        "title": "和兴路重大雪灾",
        "content": "严重严重严重",
        "time": "2019/4/4 9:00:23",
        "author": "贺妍",
      },
      {
        "snowId": 2,
        "title": "和兴路重大雪灾",
        "content": "严重严重严重",
        "time": "2019/4/4 9:00:23",
        "author": "贺妍",
      },
      {
        "snowId": 3,
        "title": "和兴路重大雪灾",
        "content": "严重严重严重",
        "time": "2019/4/4 9:00:23",
        "author": "贺妍",
      }
    ]
    }
  },
  methods:{
      tableRowClassName({row, rowIndex}) {
        if (rowIndex < 3) {
          return 'warning-row';
        } 
        return '';
      },
      newsHandle(index) {
          console.log(index);
      },
      publishHandle() {
          this.$router.push({
              path: `/newseditor`
          });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-card.box-card.is-never-shadow:hover {
    background-color: #eeeeee;
}
.warning-row {
    background-color: oldlace !important;
  }
a {
    text-decoration: none;
}
</style>
