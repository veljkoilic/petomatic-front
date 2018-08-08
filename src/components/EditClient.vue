<template>
  <div>
    <el-row>
      <el-button @click="saveChanges" type="success">Save changes</el-button>
      <el-col :span="10">
        <h5>{{clients.client_name + " " + clients.client_lastname}}</h5>
          <el-button type="button" @click="editName">Edit name</el-button>
          <el-button type="button" @click="editLastName">Edit lastname</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-row>
        <el-col :span="6">
          <img :src="clients.client_photo" alt="">
        </el-col>
      </el-row>
      <h3>Pets:</h3>
      <el-col :span="8" v-for="pet in pets" :key="pet.id" :offset="2">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="pet.pet_photo" class="image">
          <div style="padding: 14px;">
            <span>{{pet.pet_name}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ pet.species }}, {{pet.breed_name}}</time>
              <router-link :to="'/pet/'+ pet.id"><el-button type="text" class="button">View</el-button></router-link>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style>
img{
  width: 250px;
  height: 250px;
  background: red;
  margin: 50px 0 50px 150px;
}
  h5{
    font-size: 50px;
  }
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 300px;
  display: block;
  margin: 0 auto;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>

<script>
const axios = require('axios')

export default {
  data () {
    return {
      clients: [],
      pets: [],
      newClient: {}
    }
  },
  methods: {
    editName () {
      this.$prompt('Please input clients name', 'Name', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputPattern: '',
        inputErrorMessage: 'Invalid Email'
      }).then(value => {
        this.newClient.client_name = value.value
        this.$message({
          type: 'success',
          message: 'Clients name is now:' + value.value
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Input canceled'
        })
      })
    },
    editLastName () {
      this.$prompt('Please input clients lastname', 'Lastname', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputPattern: '',
        inputErrorMessage: 'Invalid Email'
      }).then(value => {
        this.newClient.client_name = value.value
        this.$message({
          type: 'success',
          message: 'Clients lastname is now:' + value.value
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Input canceled'
        })
      })
    },
    saveChanges () {
      axios.post('http://localhost:8080/clients/' + this.$route.params.clientId, this.newClient)
        .then((response) => {
          console.log(response.data)
        })
    }
  },
  mounted () {
    axios.get('http://localhost:8080/clients/' + this.$route.params.clientId)
      .then((response) => {
        console.log(response.data)
        this.clients = response.data
        this.newClient = response.data
      })
    axios.get('http://localhost:8080/client/pets/' + this.$route.params.clientId)
      .then((response) => {
        console.log(response.data)
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
