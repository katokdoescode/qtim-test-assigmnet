<template>
	<article>
		<img :src="post.image" :alt="post.title" class="post-image" width="200" height="200" />
		<div class="post-content">
			<h2 class="post-title">{{ post.title }}</h2>
			<p class="post-preview">{{ post.preview }}</p>
			<p class="post-date">{{ formatDate(post.createdAt) }}</p>

			<NuxtLink :to="`/posts/${post.id}`">Read More</NuxtLink>
		</div>
	</article>
</template>

<script setup>
defineProps({
	post: {
		type: Object,
		default: () => ({}),
	}
});
</script>
<style scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.post-image {
  object-fit: cover;
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
}

.post-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.post-title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5rem;
  color: #000;
  margin-bottom: 1rem;
}

.post-preview {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.25rem;
  color: #000;
  margin-bottom: 1rem;
}

.post-date {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  color: #000;
  margin-bottom: 1rem;
}

NuxtLink {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.25rem;
  color: #000;
  text-decoration: underline;
}
</style>
