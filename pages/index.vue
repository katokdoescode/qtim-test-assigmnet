<template>
  <section class="blog">
    <div class="banner">
      <h1>Welcome to our Blog</h1>
      <p>A collection of articles, insights, and stories from our team.</p>
    </div>

    <h2 class="blog-posts-title">Blog posts</h2>

    <PostList :posts="paginatedPosts"/>

    <ThePagination :pages-count="pagesCount" :current-page="currentPage"/>
  </section>
</template>


<script setup>
const { data: posts } = useFetch('/api/posts');

const currentPage = ref(1);
const perPage = ref(8);
const route = useRoute();

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  const end = start + perPage.value;
  return posts.value.slice(start, end)
});

const pagesCount = computed(() => {
  return Math.ceil(posts.value.length / perPage.value);
});

watch(
  () => route.query.page,
  (page) => page ? currentPage.value = Number(page) : false,
	{immediate: true},
);

</script>
<style scoped>
.blog {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.banner {
  background-color: #fff;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.banner h1 {
  font-size: 3rem;
  color: #000;
  margin-bottom: 1rem;
}

.banner p {
  font-size: 1.5rem;
  color: #000;
}

.blog-posts-title {
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 2rem;
}
</style>
