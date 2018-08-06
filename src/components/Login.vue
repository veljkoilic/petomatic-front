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
const axios = require('axios')
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
      axios.post('http://localhost:8080/staff/login', this.credentials)
        .then((response) => {
          console.log(response.data)
        })
    }
  }
}
</script>

<!--<template>-->
  <!--<div class="hello">-->
    <!--<h1>{{ msg }}</h1>-->
    <!--<button @click="create">Create Client</button>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--const axios = require('axios')-->

<!--export default {-->
  <!--name: 'HelloWorld',-->
  <!--data () {-->
    <!--return {-->
      <!--msg: 'Welcome to Your Vue.js App'-->
    <!--}-->
  <!--},-->
  <!--mounted () {-->
    <!--// kad oces jednog ' + this.$route.params.clientId-->
    <!--axios.get('http://localhost:8080/pets/')-->
      <!--.then((response) => {-->
        <!--console.log(response.data)-->
      <!--})-->
  <!--},-->
  <!--methods: {-->
    <!--create () {-->
      <!--axios.post('http://localhost:8080/pets/', {-->
        <!--name: 'Zika',-->
        <!--species: 'rat'-->
      <!--})-->
        <!--.then(function (response) {-->
          <!--console.log(response)-->
        <!--})-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped>-->
<!--h1, h2 {-->
  <!--font-weight: normal;-->
<!--}-->
<!--ul {-->
  <!--list-style-type: none;-->
  <!--padding: 0;-->
<!--}-->
<!--li {-->
  <!--display: inline-block;-->
  <!--margin: 0 10px;-->
<!--}-->
<!--a {-->
  <!--color: #42b983;-->
<!--}-->
<!--</style>-->
