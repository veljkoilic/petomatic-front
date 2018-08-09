<template>
  <div>
    <el-row>
      <el-col :offset="9">
        <h3>Create a breed of pet</h3>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="9">
        <el-input placeholder="Enter breed" v-model="breed.breed_name"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="end">
      <el-col :span=10>
        <el-button @click="createBreed()">Create breed</el-button>
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
      breed: {
        breed_name: ''
      }
    }
  },
  methods: {
    createBreed () {
      this.axios.post('http://localhost:8080/breeds', this.breed)
    }
  }
}
</script>
