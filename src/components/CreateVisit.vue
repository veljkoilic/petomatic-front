<template>
  <div>
    <el-form ref="visit" :model="visit" label-width="120px">
      <el-form-item label="Client">
        <el-select v-model="visit.clients_id" placeholder="Select client">
          <el-option v-for="client in clients" :key="client.id" :label="client.client_name + ',' + client.client_lastname" :value="client.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Pets">
        <el-select v-model="visit.pet_id" placeholder="Select client">
          <el-option v-if="visit.clients_id == pet.clients_id" v-for="pet in pets" :key="pet.id" :label="pet.pet_name" :value="pet.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Date">
        <el-col :span="11">
          <el-date-picker format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="date" placeholder="Pick a date" v-model="visit.date" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Short description">
        <el-input type="textarea" v-model="visit.short_description"></el-input>
      </el-form-item>
      <el-form-item label="Long description">
        <el-input type="textarea" v-model="visit.long_description"></el-input>
      </el-form-item>
      <el-form-item label="Diagnosis">
        <el-input type="text" v-model="visit.diagnosis"></el-input>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input type="file" v-model="visit.photo"></el-input>
      </el-form-item>
      <el-form-item label="Visit Type">
        <el-select v-model="visit.type_id" placeholder="Select type">
          <el-option v-for="type in types" :key="type.id" :label="type.type" :value="type.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>

</style>

<script>
export default {
  data () {
    return {
      visit: {
        clients_id: '',
        pet_id: '',
        short_description: '',
        long_description: '',
        diagnosis: '',
        photo: '',
        type_id: '',
        staff_id: 1
      },
      clients: [],
      pets: [],
      types: []
    }
  },
  methods: {
    onSubmit () {
      this.axios.post('http://localhost:8080/visits/', this.visit)
    }
  },
  mounted () {
    this.axios.get('http://localhost:8080/clients/')
      .then((response) => {
        this.clients = response.data
      })
    this.axios.get('http://localhost:8080/pets/')
      .then((response) => {
        this.pets = response.data
      })
    this.axios.get('http://localhost:8080/types/')
      .then((response) => {
        this.types = response.data
      })
  }
}
</script>
