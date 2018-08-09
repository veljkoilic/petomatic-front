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
              <router-link :to="'/edit-pet/'+ pet.id"><el-button type="text" class="button">Edit</el-button></router-link>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-button type="primary" @click="dialogFormVisible = true">Add pet</el-button>

        <el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
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
            <el-button type="primary" @click="addPet()">Confirm</el-button>
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
  background: lightgray;
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
export default {
  data () {
    return {
      clients: [],
      pets: [],
      gbreeds: [],
      newClient: {
        client_name: '',
        client_lastname: '',
        client_photo: ''
      },
      newPet: {
        pet_name: '',
        species: '',
        pet_photo: '',
        breed_id: '',
        clients_id: ''
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: '120px'
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
        this.newClient.client_lastname = value.value
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
    addPet () {
      this.axios.post('http://localhost:8080/pets/', this.newPet)
      this.dialogFormVisible = false
      console.log(this.newPet)
    },
    saveChanges () {
      this.axios.post('http://localhost:8080/clients/' + this.$route.params.clientId, this.newClient)
    }
  },
  mounted () {
    this.axios.get('http://localhost:8080/clients/' + this.$route.params.clientId)
      .then((response) => {
        this.clients = response.data
        this.newClient = response.data
      })
    this.axios.get('http://localhost:8080/client/pets/' + this.$route.params.clientId)
      .then((response) => {
        this.pets = response.data
        this.newPet.clients_id = this.$route.params.clientId
      })
    this.axios.get('http://localhost:8080/breeds')
      .then((response) => {
        this.gbreeds = response.data
      })
  }
}
</script>
