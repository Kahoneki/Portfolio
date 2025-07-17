import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';

interface CodeBlockProps {
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
}

function CodeBlock({ className, children, ...props }: CodeBlockProps)
{
    //Create a reference to the `<code>` element
    const codeRef = useRef<HTMLElement>(null);

      // We use a regular expression to see if the className contains "language-..."
  const match = /language-(\w+)/.exec(className || '');

  // If there is NO language match, it's an INLINE code block.
  if (!match) {
    return (
      <code className="bg-inlineCodeBackground text-contentSeparator font-mono rounded-md px-1.5 py-0.5" {...props}>
        {children}
      </code>
    );
  }

    //Extract the language from the className (e.g.: "language-javascript")
    const language = className?.replace('language-', '') || 'plaintext';

    //This hook runs after the component renders
    useEffect(() => 
    {
        //If the code element exists, highlight it
        if (codeRef.current)
        {
            hljs.highlightElement(codeRef.current);
        }
    }, [language,children]);

    return (
        //Render a standard <pre><code> structure
        //highlight.js will find this and style it
        <pre>
            <code ref={codeRef} className={`language-${language}`}>
                {String(children).replace(/\n$/, '')}
            </code>
        </pre>
    )
}


export default CodeBlock