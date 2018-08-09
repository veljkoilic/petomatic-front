<template>
  <div>
    <el-row>
      <el-col :span="10">
        <h5>{{clients.client_name + " " + clients.client_lastname}}</h5>
      </el-col>
    </el-row>
      <el-row>
        <el-col :span="6">
          <img :src="clients.client_photo" alt="">
        </el-col>
      </el-row>
    <el-row>
      <el-col>
        <h2>Pets:</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" v-for="pet in pets" :key="pet.id" :offset="2">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="pet.pet_photo" class="image">
          <div style="padding: 14px;">
            <span>{{pet.pet_name}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ pet.species }}, {{pet.breed_name}}</time>
              <router-link :to="'/pet/'+ pet.id"><el-button type="text" class="button">View</el-button></router-link>
            </div>
          </div>
        </el-card>
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
      currentDate: new Date()
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
    this.axios.get('http://localhost:8080/clients/' + this.$route.params.clientId)
      .then((response) => {
        this.clients = response.data
      })
    this.axios.get('http://localhost:8080/client/pets/' + this.$route.params.clientId)
      .then((response) => {
        this.pets = response.data
      })
  }
}
</script>
