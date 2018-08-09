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
export default {
  data () {
    return {
      visits: []
    }
  },
  mounted () {
    this.axios.get('http://localhost:8080/visits/')
      .then((response) => {
        this.visits = response.data
      })
  }
}
</script>
