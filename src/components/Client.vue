<template>
  <el-row>
    <el-col :span="6">
      <img :src="clients.client_photo" alt="">
    </el-col>
    <el-col :span="10">
      <h5>{{clients.client_name + " " + clients.client_lastname}}</h5>
    </el-col>
  </el-row>
</template>
<style>
img{
  width: 250px;
  height: 250px;
  background: red;
}
  h5{
    font-size: 50px;
  }
</style>

<script>
const axios = require('axios')

export default {
  data () {
    return {
      clients: [],
      pets: []
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  },
  mounted () {
    axios.get('http://localhost:8080/clients/' + this.$route.params.clientId)
      .then((response) => {
        console.log('prvi')
        console.log(response.data)
        this.clients = response.data
      })
    axios.get('http://localhost:8080/client/pets/' + this.$route.params.clientId)
      .then((response) => {
        console.log('drugi')
        console.log(response)
        this.pets = response.data
      })
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
