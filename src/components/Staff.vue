<template>
  <div class="hello">
    <p style="font-size:30px;margin-top:0;">员工中心</p>
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
