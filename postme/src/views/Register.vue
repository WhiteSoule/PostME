<template>
  <h3>Register</h3>
  <form @submit.prevent="handleRegister">
    <div class="form-floating">
      <input
        type="email"
        data-testid="register-email"
        class="form-control"
        id="floatingInput"
        placeholder="email@example.com"
        v-model="email"
        required
      />
      <label for="floatingInput">Email adress</label>
    </div>
    <div class="form-floating">
      <input
        type="password"
        data-testid="register-password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
        v-model="password"
        required
      />
      <label for="floatingPassword">Password</label>
    </div>
    <button class="button" data-testid="register-button" type="submit">
      Register
    </button>
  </form>
  <span id="errorRegister"></span>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleRegister() {
      var error = document.getElementById("errorRegister");

      const response = await axios.post("register", {
        email: this.email,
        password: this.password,
      });
      if (response.status == 201) {
        console.log(response.data.email);
        this.$router.push("/login");
      } else {
        console.log(response);
        error.textContent = response.data.error;
      }
    },
  },
};
</script>
