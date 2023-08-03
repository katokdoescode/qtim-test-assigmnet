<template>
  <section class="blog">
    <nav>
      <NuxtLink to="/">Back to all posts</NuxtLink>
    </nav>
    <h1 class="blog__title">{{ post.title }}</h1>
    <p class="blog__date">{{ formatDate(post.createdAt) }}</p>
    <img class="blog__image" :src="post.image" :alt="post.title">
    <p class="blog__preview">{{ post.preview }}</p>
    <p class="blog__description">{{ post.description }}</p>
  </section>
</template>

<script setup>
const route = useRoute();
const { id } = route.params;
const { data: post } = useFetch(`/api/posts`, { params: { id } });
</script>

<style scoped>
.blog {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fff;
}

.blog__title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000;
}

.blog__date {
  font-size: 1rem;
  color: #000;
  margin-bottom: 2rem;
}

.blog__image {
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
}

.blog__preview {
  font-size: 1.5rem;
  line-height: 2rem;
  color: #000;
  margin-bottom: 2rem;
}

.blog__description {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #000;
}
</style>
