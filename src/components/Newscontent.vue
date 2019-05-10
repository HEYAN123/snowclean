<template>
  <div class="hello">
    <p style="font-size:30px;margin-top:0;margin-bottom:0;">帖子详情</p>
    <p style="color: #666666;">2018/10/19 贺妍</p>
    <el-divider></el-divider>
    <div v-html="content" style="word-wrap:break-word;"></div>
    <br>
    <el-divider></el-divider>
    <el-card class="box-card" shadow="never" style="color:#777777;" v-for="snow in snows" :key="snow.snowId" >
        <p><i class="el-icon-s-custom"></i>{{`${snow.author} ${snow.time}`}}</p>
        <el-row>
            <el-col :span="20" style="color:#333333;">
                {{snow.title}}
            </el-col>
            <el-col :span="4"></el-col>
        </el-row><br>
    </el-card>
    <br>
    <el-pagination
    style="text-align:right;"
    background
    layout="prev, pager, next"
    :total="1000">
    </el-pagination>
    <br>
    <quill-editor
    v-model="comment" 
    ref="myQuillEditor" 
    :options="editorOption" 
    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
    @change="onEditorChange($event)">
    </quill-editor>
    <p style="text-align:right;"><el-button size="small" type="primary">评论</el-button></p>
  </div>
</template>

<script>
export default {
  name: 'Newscontent',
  data () {
    return {
      editorOption:{
        modules:{
            toolbar:[
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block']
            ]
        }
      },
      content:"<h1>hell0000098765456789098765457654345678987654567890987654567890678998765456789098765456789098765456789o</h1>哈哈哈哈哈哈哈哈哈哈哈",
      snows: [
      {
        "snowId": 123,
        "title": "和兴路重大雪灾",
        "content": "严重严重严重",
        "time": "2019/4/4 9:00:23",
        "author": "贺妍",
      },
      {
        "snowId": 123,
        "title": "和兴路重大雪灾",
        "content": "严重严重严重",
        "time": "2019/4/4 9:00:23",
        "author": "贺妍",
      },
      {
        "snowId": 123,
        "title": "和兴路重大雪灾",
        "content": "严重严重严重",
        "time": "2019/4/4 9:00:23",
        "author": "贺妍",
      },
      {
        "snowId": 123,
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.warning-row {
    background-color: oldlace !important;
  }
</style>
