import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import Navbar from "./Navbar"
import { GetPost } from "../src/utils/mdParser"
import CodeBlock from "../src/CodeBlock"
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug';
import MarkdownLink from './MarkdownLink';

function BlogPost()
{

    const { slug } = useParams<{ slug: string }>();

    console.log('slug =', slug);

    if (!slug)
    {
        return <div>Post slug is missing.</div>;
    }

    const post = GetPost(slug);

    if (!post) {
        console.log(("Page not found"));
        
        return (
            <>
            <div className="flex flex-col">
                <Navbar></Navbar>
                <img src="Images/favicon.png" className="mt-16 mx-auto flex-1 h-1/6 w-1/6"></img>
                <p className="font-bold mx-auto mt-8 text-4xl text-center">Error 404: Page not found!</p>
            </div>
            </>
        )
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="flex justify-center pt-20">
                <article className="prose prose-blog-theme lg:prose-xl">
                    <div className="mb-8">
                        <h1 className="!mb-4 text-center">{post!.title}</h1>
                        <p className="!mt-4 text-sm text-center text-date mb-8 italic">
                            Published on {new Date(post!.date).toLocaleDateString()}
                        </p>
                    </div>
                    {/* For every `<code>` element, render the `CodeBlock` component instead */}
                    <ReactMarkdown components={{ code: CodeBlock, a: MarkdownLink }} remarkPlugins={[remarkGfm, remarkSlug as any]}>
                        {post!.content}
                    </ReactMarkdown>
                </article>
            </div>
        </>
    )
}

export default BlogPost