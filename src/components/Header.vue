<template>
  <div class="header">
    <h1>PostIT 2.0</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Signup</router-link>
    </nav>
  </div>

</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.header {
  border-radius: 5px;
  background-color: lightgray;
  margin: 10px;
  padding: 5px;

}

</style>