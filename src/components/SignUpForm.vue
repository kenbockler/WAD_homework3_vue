<template>
  <div class="backgroundCard">
    <div class="signUpCard">
      <form @submit="validateForm" id="loginForm" method="post" action="javascript:void(0);">
        <p v-if="errors.length" class="errors">
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>

        <label for="email">Email</label><input v-model="email" type="email" id="email" placeholder="Email"><br>
        <label for="password">Password</label><input v-model="password" type="password" id="password" placeholder="Password"><br>
        <button type="submit">Signup</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpForm",
  methods: {
    validateForm: function(e) {
      this.errors = []
      if (!this.email) {
        this.errors.push("Email is required")
      }

      if (!this.password) {
        this.errors.push("Password is required")
      } else {
        if (this.password.length >= 15 || this.password.length < 8) {
          this.errors.push("Password must be between 8 and 15 characters long")
        }

        if ((this.password.match(/[A-Z]/g) || []).length === 0) {
          this.errors.push("Password must contain at least one uppercase character")
        }

        if ((this.password.match(/[a-z]/g) || []).length < 2) {
          this.errors.push("Password must contain at least two lowercase characters")
        }

        if ((this.password.match(/[0-9]/g) || []).length === 0) {
          this.errors.push("Password must contain at least one number")
        }

        if ((this.password[0].match(/[A-Z]/g) || []).length === 0) {
          this.errors.push("Password must start with uppercase character")
        }

        if ((this.password.match(/_/g) || []).length === 0) {
          this.errors.push("Password must contain _ character")
        }
      }





      if (this.errors.length === 0) {
        return true;
      }
      e.preventDefault()
    }

  },
  data() {
    return {
      errors: [],
      email: null,
      password: null,
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

.errors {
  background-color: indianred;
}

.errors > ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}


</style>