<template>
  <li>
    {{ post.title }} <br />
    {{ post.text }}
  </li>
</template>

<script>
export default {
  name: "Post",
  props: ["post"],
};
</script>
