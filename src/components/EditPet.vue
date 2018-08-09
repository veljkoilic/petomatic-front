<template>
  <div>
      <el-row>
        <el-col :span="6">
          <img :src="newPet.pet_photo" alt="">
        </el-col>
      </el-row>
    <el-row>
      <el-col :span="10">
        <h2>{{newPet.pet_name}}, {{newPet.species}} </h2>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="visits"
        style="width: 100%">
        <el-table-column type="expand">
          <template  slot-scope="props" >
            <div>
              <p>Diagnosis: {{ props.row.diagnosis }}</p>
              <p>Description: {{ props.row.long_description }}</p>
              <p>Examination photo:</p>
              <img :src="props.row.photo" alt="">
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="Date"
          prop="date">
        </el-table-column>
        <el-table-column
          label="Diagnosis"
          prop="diagnosis">
        </el-table-column>
        <el-table-column
          label="Preview"
          prop="short_description">
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-col>
        <el-button type="primary" @click="dialogFormVisible = true">Edit pet</el-button>

        <el-dialog title="Edit pet" :visible.sync="dialogFormVisible">
          <el-form :model="newPet">
            <el-form-item label="Pet name" :label-width="formLabelWidth">
              <el-input v-model="newPet.pet_name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Species" :label-width="formLabelWidth">
              <el-input v-model="newPet.species" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="Breed" :label-width="formLabelWidth">
              <el-select v-model="newPet.breed_id" placeholder="Please select a breed">
                <el-option v-for="breed in gbreeds" :key="breed.id" :label="breed.breed_name" :value="breed.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Photo" :label-width="formLabelWidth">
              <input type="file"> //v-model="newPet.pet_photo"
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" @click="editPet()">Confirm</el-button>
           </span>
        </el-dialog>

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
</style>

<script>
const axios = require('axios')

export default {
  data () {
    return {

      gbreeds: [],
      newPet: {
        pet_name: '',
        species: '',
        pet_photo: '',
        breed_id: '',
        clients_id: ''
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: '120px',
      visits: []
    }
  },
  methods: {
    editPet () {
      axios.post('http://localhost:8080/pets/' + this.$route.params.petId, this.newPet)
        .then((response) => {
          console.log(response.data)
        })
      this.dialogFormVisible = false
      console.log(this.newPet)
    }
  },
  mounted () {
    axios.get('http://localhost:8080/pets/' + this.$route.params.petId)
      .then((response) => {
        console.log(response.data)
        this.pet = response.data
        this.newPet = response.data
      })
    axios.get('http://localhost:8080/pet/visits/' + this.$route.params.petId)
      .then((response) => {
        console.log(response.data)
        this.visits = response.data
      })
    axios.get('http://localhost:8080/breeds')
      .then((response) => {
        this.gbreeds = response.data
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
