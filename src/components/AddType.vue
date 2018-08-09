<template>
  <div>
    <el-row>
      <el-col :offset="9">
        <h3>Create a type of pet</h3>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="9">
        <el-input placeholder="Enter Type" v-model="type.type"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="end">
      <el-col :span=10>
        <el-button @click="createType()">Create type</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
  button{
    text-align: center;
  }
  .el-col{
    margin-top: 20px;
  }
</style>
<script>
export default {
  data () {
    return {
      type: {
        type: ''
      }
    }
  },
  methods: {
    createType () {
      this.axios.post('http://localhost:8080/types', this.type)
    }
  }
}
</script>
