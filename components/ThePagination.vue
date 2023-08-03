<template>
	<nav name="Pagination" class="pagination">
		<ul class="pagination-list">
			<li v-for="page in pages" class="pagination-list__item">
				<NuxtLink
					class="pagination-list__link"
					:class="{'pagination-list__link_active': page === currentPage}"
					:to="`?page=${page}`"
				>{{ page }}</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script setup>
const props = defineProps({
	pagesCount: {
		type: Number,
		default: 1,
	},
	currentPage: {
		type: Number,
		default: 1,
	}
});

const pages = computed(() => Array.from({length: props.pagesCount}, (_, i) => i + 1));
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.pagination-list {
  display: flex;
  list-style-type: none;
}

.pagination-list__item {
  margin: 0 0.5rem;
}

.pagination-list__link {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.25rem;
  color: #000;
  text-decoration: none;
}

.pagination-list__link_active {
  color: #008BF0;
}
</style>
