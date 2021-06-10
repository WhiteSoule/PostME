<template>
  <h3>Login</h3>
  <form @submit.prevent="handleLogin">
    <div class="form-floating">
      <input
        type="email"
        data-testid="login-email"
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
        data-testid="login-password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
        v-model="password"
        required
      />
      <label for="floatingPassword">Password</label>
    </div>
    <button class="button" data-testid="login-button" type="submit">
      Sign In
    </button>
  </form>
  <span id="error"></span>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      var error = document.getElementById("error");

      const response = await axios.post("login", {
        email: this.email,
        password: this.password,
      });
      if (response.status == 201) {
        console.log(response);
        localStorage.setItem("token", response.data.data.token);
        this.$router.push("/profile");
        console.log(response);
      } else {
        console.log("error here!");
        error.textContent = response.data.error;
      }
    },
  },
};
</script>
