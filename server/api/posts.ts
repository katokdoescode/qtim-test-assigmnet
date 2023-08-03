import { request } from "./config";
import { Post } from "@/types/posts";

export default defineEventHandler((event) => {
	const { id } = getQuery(event);
	if(id) return request<Array<Post>>(`/posts/${id}`);
	else return request<Array<Post>>('/posts');
});
