<template>
  <ul class="blog-list" v-if="posts">
    <li v-for="post of posts" :key="post.id" class="post-card">
      <PostItem :post="post" />
    </li>
  </ul>
</template>

<script setup>
defineProps({
  posts: {
    type: Array,
    default: () => ([]),
    validate: (v) => !!v.id,
  }
});
</script>

<style scoped>
.blog-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  padding: 1rem;
  list-style-type: none;
}

.post-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  padding: 1rem;
  border: 1px solid #000;
}
</style>
