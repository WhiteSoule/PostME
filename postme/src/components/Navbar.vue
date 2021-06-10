<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/login" data-testid="login-link" class="nav-link"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/register"
              data-testid="register-link"
              class="nav-link"
              >Register</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="javascript:void(0)" @click="handleClick" class="nav-link"
              >Logout</a
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/profile"
              data-testid="profile-link"
              class="nav-link"
              >Profile</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    handleClick() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>
