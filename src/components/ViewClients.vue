<template>
  <el-table
    :data="clients"
    style="width: 100%">
    <el-table-column
      label="Client ID"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Name"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>Name: {{ scope.row.client_name }}</p>
          <p>Lastname: {{ scope.row.client_lastname }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.client_name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="Operations">
      <template slot-scope="scope">
        <router-link :to="'/view-client/'+ scope.row.id">
        <el-button
          size="mini"
          type="success"
          @click="handleDelete(scope.$index, scope.row)">View</el-button></router-link>
        <router-link :to="'/edit-client/'+ scope.row.id">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button></router-link>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<style>
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
      clients: []
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
    this.axios.get('http://localhost:8080/clients/')
      .then((response) => {
        this.clients = response.data
      })
  }
}
</script>
