import { type CollectionEntry, getCollection } from "astro:content";

/** filter out draft posts based on the environment */
export async function getAllPosts(): Promise<CollectionEntry<"post">[]> {
	return await getCollection("post", ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
}

/** groups posts by year (based on option siteConfig.sortPostsByUpdatedDate), using the year as the key
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 */
export function groupPostsByYear(posts: CollectionEntry<"post">[]) {
	return posts.reduce<Record<string, CollectionEntry<"post">[]>>((acc, post) => {
		const year = post.data.publishDate.getFullYear();
		if (!acc[year]) {
			acc[year] = [];
		}
		acc[year]?.push(post);
		return acc;
	}, {});
}

/** groups posts by tag. returns an object where keys are tag names and values are arrays of posts
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 */
export function groupPostsByTag(posts: CollectionEntry<"post">[]) {
	return posts.reduce<Record<string, CollectionEntry<"post">[]>>((acc, post) => {
		const tags = post.data.tags ?? [];
		tags.forEach((t) => {
			if (!acc[t]) acc[t] = [];
			acc[t].push(post);
		});
		return acc;
	}, {});
}

/** convenience: return posts for a single tag (empty array if none)
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 */
export function getPostsByTag(posts: CollectionEntry<"post">[], tag: string) {
	const grouped = groupPostsByTag(posts);
	return grouped[tag] ?? [];
}

/** groups posts by category field. returns an object where keys are category names and values are arrays of posts
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  Note: Posts without a category field will be grouped under "uncategorized"
 */
export function groupPostsByCategory(posts: CollectionEntry<"post">[]) {
	return posts.reduce<Record<string, CollectionEntry<"post">[]>>((acc, post) => {
		const category = post.data.category ?? "uncategorized";
		if (!acc[category]) acc[category] = [];
		acc[category].push(post);
		return acc;
	}, {});
}

/** convenience: return posts for a single category (empty array if none)
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 */
export function getPostsByCategory(posts: CollectionEntry<"post">[], category: string) {
	const grouped = groupPostsByCategory(posts);
	return grouped[category] ?? [];
}

/** returns all tags created from posts (inc duplicate tags)
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getAllTags(posts: CollectionEntry<"post">[]) {
	return posts.flatMap((post) => [...post.data.tags]);
}

/** returns all unique tags created from posts
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getUniqueTags(posts: CollectionEntry<"post">[]) {
	return [...new Set(getAllTags(posts))];
}

/** returns a count of each unique tag - [[tagName, count], ...]
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getUniqueTagsWithCount(posts: CollectionEntry<"post">[]): [string, number][] {
	return [
		...getAllTags(posts).reduce(
			(acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}
