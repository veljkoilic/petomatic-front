<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="createClient">Create Client</button>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    // kad oces jednog ' + this.$route.params.clientId
    axios.get('http://localhost:8080/clients/')
      .then((response) => {
        console.log(response.data)
      })
  },
  methods: {
    createClient () {
      axios.post('http://localhost:8080/clients/', {
        name: 'Fred',
        lastname: 'Flintstone'
      })
        .then(function (response) {
          console.log(response)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
