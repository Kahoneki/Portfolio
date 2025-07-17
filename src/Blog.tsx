import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import { GetAllPosts } from "./utils/mdParser"
import { Post } from "./types"


function Blog()
{
    const posts: Post[] = GetAllPosts();
    console.log(posts.length);

return (
    <>
    <div className="flex flex-col">
        <Navbar></Navbar>
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Blog (Under Development)</h1>

            <div className="flex flex-col gap-y-6 text-center">
                {posts.map(post => (
                    <Link
                      key={post.slug}
                      to={`/blog/${post.slug}`}
                      className="block p-6 bg-contentSeparator rounded-lg hover:bg-sidebar"
                    >
                        <h2 className="text-2xl font-bold">{post.title}</h2>
                        <p className="text-sm text-date mt-1 italic">{new Date(post.date).toLocaleDateString()}</p>
                        <p className="mt-3">{post.excerpt}</p>
                    </Link>
                ))}
            </div>

        </div>
    </div>
    </>
)
}

export default Blog
