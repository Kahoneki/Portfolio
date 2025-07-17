import "../setupBuffer"
import matter from 'gray-matter'
import { Post } from '../types';

//Vite feature - import all mds in a directory
const modules:Record<string,string> = import.meta.glob('../Blog Posts/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
});

const posts: Post[] = [];

for (const path in modules)
{
    const rawContent:string = modules[path];
    const { data, content } = matter(rawContent);

    const slug:string = path.split('/').pop()?.replace('.md', '')!;

    posts.push
    ({
        slug: slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content: content,
    });
}

//Sort posts by date in descending order
const sortedPosts:Post[] = posts.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());

//Get all posts
export function GetAllPosts(): Post[]
{
    return sortedPosts;
}

//Get a single post by its slug
export function GetPost(slug: string): Post | undefined
{
    return sortedPosts.find(post => post.slug === slug);
}