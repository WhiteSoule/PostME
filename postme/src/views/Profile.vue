<template>
  <div class="profile">
    <h1>Welcome to your Profile</h1>
    <form @submit.prevent="post">
      <div class="form-floating">
        <input
          type="text"
          placeholder="Title"
          data-testid="post_title"
          id="floatingtitle"
          class="form-control"
          v-model="title"
        />
        <label for="floatingtitle">Title</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          placeholder="Text"
          data-testid="post_text"
          class="form-control"
          id="floating-text"
          v-model="text"
        />
        <label for="floating-text">Text</label>
      </div>
      <button class="button" data-testid="post" type="submit">Post</button>
    </form>
    <div>
      <ul>
        <Post
          v-for="object in posts"
          v-bind:post="object"
          v-bind:key="object.id"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
export default {
  name: "Profile",
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
      title: "",
      text: "",
    };
  },
  methods: {
    post() {
      this.posts.push({ title: this.title, text: this.text });
    },
  },
};
</script>
