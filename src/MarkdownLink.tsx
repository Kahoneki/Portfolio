import { Link, useLocation } from 'react-router-dom'

interface MarkdownLinkProps {
    href?: string;
    children?: React.ReactNode;
}

const MarkdownLink: React.FC<MarkdownLinkProps> = ({ href, children }) => {
    const { pathname } = useLocation();

    //For internal hash links, use React Router's Link to navigate to the current page's path plus the hash
    //This tells the browser to scroll to the id - not navigate away to a different page
    if (href && href.startsWith('#')) {

        const handleHashLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            
            //Find the element in the DOM that corresponds to the href id.
            const id = href.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                //Scroll the element into view
                element.scrollIntoView({ behavior: 'smooth', block:'start' })
            }
        }

        return <Link to={`${pathname}${href}`} onClick={handleHashLinkClick}>{children}</Link>
    }

    //For all other links, use a standard <a> tag
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    )
};

export default MarkdownLink