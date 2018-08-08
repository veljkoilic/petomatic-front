<template>
  <div>
    <el-main>
      <el-table
        :data="visits"
        style="width: 100%">
        <el-table-column type="expand">
          <template v-for="visit in visits" slot-scope="props" >
            <div v-bind:key="visit.id">
              <p>Owner: {{ props.row.client_name }} {{ props.row.client_lastname }} </p>
              <p>Description: {{ props.row.long_description }} </p>
              <p>Pet: {{ props.row.pet_name }}</p>
              <p>Animal: {{ props.row.species }}, {{props.row.breed_name}}</p>
              <p>Diagnosis: {{ props.row.diagnosis }}</p>
              <p>Vet: {{ props.row.staff_name }} {{ props.row.staff_lastname }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="Time"
          prop="date">
        </el-table-column>
        <el-table-column
          label="Client"
          prop="client_name">
        </el-table-column>
        <el-table-column
          label="Preview"
          prop="short_description">
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>
<style>
  .el-table__empty-text{
    display: none;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
const axios = require('axios')
export default {
  data () {
    return {
      visits: []
    }
  },
  mounted () {
    axios.get('http://localhost:8080/visits/today')
      .then((response) => {
        console.log(response.data)
        this.visits = response.data
      })
  },
  methods: {

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
