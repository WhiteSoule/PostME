/* eslint-disable prettier/prettier */
<template>
  <div class="Sign-in">
    <form>
      <div>
        <input id="floatingInput" type="email" placeholder="name@example.com" />
        <label for="floatingInput">Email adress</label>
      </div>
      <div>
        <input
          id="floatingPassword"
          type="password"
          placeholder="name@example.com"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
