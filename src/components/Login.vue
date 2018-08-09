<template>
  <div>
      <h1>Please log in</h1>
      <el-row>
        <el-col :span="12" :offset="6">
          <el-input placeholder="E-mail" v-model="credentials.email" :type="email"></el-input>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12" :offset="6">
          <el-input placeholder="Password" v-model="credentials.password" :type="password"></el-input>
        </el-col>
      </el-row>

    <el-row>
      <el-col :span="4" :offset="10">
        <el-button type="primary" @click="login">Continue</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<style>

  .el-input__inner{
    margin-top: 20px;
    text-align: center;

  }
  .el-button{
    margin-top: 10px;
  }
</style>

<script>
export default {
  data () {
    return {
      credentials: {
        email: '',
        password: ''
      },
      password: 'password',
      email: 'email'
    }
  },
  methods: {
    login () {
      this.axios.post('http://localhost:8080/staff/login', this.credentials)
    }
  }
}
</script>
