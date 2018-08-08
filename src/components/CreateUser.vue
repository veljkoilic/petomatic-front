<template>
  <div>
    <el-row>
      <el-col :offset="9">
        <h3>Create a client</h3>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="9">
        <el-input placeholder="Name" v-model="client.client_name"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="9">
        <el-input placeholder="Lastname" v-model="client.client_lastname"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="9">
        <h5>Client photo:</h5>
        <input type="file">
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="9">
        <el-button @click="createClient()">Create Client</el-button>
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
const axios = require('axios')
export default {
  data () {
    return {
      client: {
        client_name: '',
        client_lastname: ''
      },
      pet: {
        pet_name: '',
        species: '',
        breed_id: 0,
        clients_id: 2
      },
      breeds: {
        breed_id: 0
      },
      gbreeds: []
    }
  },
  mounted () {
    axios.get('http://localhost:8080/breeds')
      .then((response) => {
        this.gbreeds = response.data
      })
  },
  methods: {
    createClient () {
      axios.post('http://localhost:8080/clients', this.client)
        .then((response) => {
          console.log(response.data)
        })
    }
  }
}
</script>
