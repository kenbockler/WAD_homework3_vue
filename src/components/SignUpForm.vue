<template>
  <div class="backgroundCard">
    <div class="signUpCard">
      <form>
        <label for="email">Email</label><input type="email" id="email" placeholder="Email"><br>
        <label for="password">Password</label><input type="password" id="password" placeholder="Password"><br>
        <button type="submit" @click="validatePassword()">Signup</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpForm",
  methods: {
    validatePassword: function() {

    }
  }

}

</script>

<style scoped>
* {
  box-sizing: border-box;
}
.backgroundCard {
  border-radius: 5px;
  background-color: darkgray;
  margin: 10px;
  padding: 5px;
}
input {
  margin: 5px;
  height: 1.7rem;

}
.signUpCard {
  background-color: rgba(66, 185, 131, 0.95);
  width: fit-content;
  display: flex;
  margin: auto;
  padding: 10px;
}

label {
  display: inline-block;
  width: 80px;
  text-align: right;
}


</style>