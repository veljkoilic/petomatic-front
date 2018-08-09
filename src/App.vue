<template>
  <div id="app">
    <el-container style="min-height: 100vh; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['0']">
          <router-link to="/"><el-menu-item index="1-1">Home</el-menu-item></router-link>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>Clients</template>
            <el-menu-item-group>
              <router-link to="/create-client"><el-menu-item index="1-1">Create new client</el-menu-item></router-link>
              <router-link to="/view-clients"><el-menu-item index="1-2">View all clients</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>Visits</template>
            <el-menu-item-group>
              <router-link to="/create-visit"><el-menu-item index="2-1">Create a visit</el-menu-item></router-link>
              <router-link to="/all-visits"><el-menu-item index="2-2">View all visits</el-menu-item></router-link>
              <router-link to="/edit-visits"><el-menu-item index="2-3">Edit visits</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
          <router-link to="/add-breed"><el-menu-item index="1-1">Add breed</el-menu-item></router-link>
          <router-link to="/add-type"><el-menu-item index="1-1">Add type</el-menu-item></router-link>
        </el-menu>
      </el-aside>

      <el-container>
        <h1>PET-O-MATIC</h1>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px; font-size: 18px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click="logout">Log out</el-dropdown-item>
              <router-link to="/staff/login"><el-dropdown-item>Log in</el-dropdown-item></router-link>
            </el-dropdown-menu>
          </el-dropdown>
          <span>Quick options</span>
        </el-header>
        <div class="view">
          <router-view></router-view>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'App',
  methods: {
    logout () {
      axios.post('http://localhost:8080/staff/logout')
        .then((response) => {
          console.log(response)
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
h1{
  text-align: center;
}
tr:nth-of-type(odd) {
  background: lightgray;
}
.view{
  padding: 20px;
}
</style>
