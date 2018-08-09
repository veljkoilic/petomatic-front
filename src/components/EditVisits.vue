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
              <el-button type="primary" @click="dialogFormVisible = true">Edit visit</el-button>
              <el-dialog title="Edit pet" :visible.sync="dialogFormVisible">
                <el-form ref="visit" :model="visit" label-width="120px">
                  <el-form-item label="Client">
                    <el-select v-model="visit.clients_id" placeholder="Select client">
                      <el-option v-for="client in clients" :key="client.id" selected="true"  :label="client.client_name + ',' + client.client_lastname" :value="client.id"></el-option>
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
                    <el-input type="file" ></el-input>
                  </el-form-item>
                  <el-form-item label="Visit Type">
                    <el-select v-model="visit.type_id" placeholder="Select type">
                      <el-option v-for="type in types" :key="type.id" :label="type.type" :value="type.id"></el-option>
                    </el-select>
                  </el-form-item>

                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="editVisit(visit)">Confirm</el-button>
                 </span>
              </el-dialog>
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
export default {
  data () {
    return {
      visits: [{
        clients_id: '',
        pet_id: '',
        short_description: '',
        long_description: '',
        diagnosis: '',
        photo: '',
        type_id: '',
        staff_id: 1
      }],
      clients: [],
      pets: [],
      types: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: '120px'
    }
  },
  mounted () {
    this.axios.get('http://localhost:8080/visits/')
      .then((response) => {
        this.visits = response.data
      })
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
  },
  methods: {
    editVisit (visit) {
      var index = this.visits.indexOf(visit)
      this.axios.post('http://localhost:8080/visits/' + visit.id, this.visits[index])
      this.dialogFormVisible = false
    }
  }
}
</script>
