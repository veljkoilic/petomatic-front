<template>
  <div>
      <el-row>
        <el-col :span="6">
          <img :src="pet.pet_photo" alt="">
        </el-col>
      </el-row>
    <el-row>
      <el-col :span="10">
        <h2>{{pet.pet_name}}, {{pet.species}} </h2>
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
  </div>
</template>
<style>
img{
  width: 250px;
  height: 250px;
  background: lightgray;
  margin: 50px 0 50px 150px;
}
</style>

<script>
export default {
  data () {
    return {
      pet: [],
      newPet: [],
      visits: []
    }
  },
  methods: {
  },
  mounted () {
    this.axios.get('http://localhost:8080/pets/' + this.$route.params.petId)
      .then((response) => {
        this.pet = response.data
      })
    this.axios.get('http://localhost:8080/pet/visits/' + this.$route.params.petId)
      .then((response) => {
        this.visits = response.data
      })
  }
}
</script>
