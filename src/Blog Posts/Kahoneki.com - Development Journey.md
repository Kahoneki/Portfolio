---
title: "Kahoneki.com - Development Journey"
date: "2025-07-19"
excerpt: "Detailing the design decisions and implementation details for my portfolio website."
---



## Introduction
This portfolio site has been long overdue.  
In my defence, knowing that I wanted to make it myself from the ground up (rather than use a website builder or template), and remembering my previous experiences of web development from high school, it left me procrastinating this one for a while. CSS in particular has always frightened me. I have *many* memories of spending *many* hours fighting with the damn thing; knowing what I wanted but just being unable to communicate it to the computer was a feeling I had long forgotten as a traditional programmer.

Thankfully, I eventually came to find out that web development in production looks a lot different than the kind I was forced into years ago, one which largely consisted of a pure HTML+CSS+JS paradigm, one in which the use of *flex containers* were prohibited for being "too advanced".  
And while these new libraries certainly didn't solve **all** my problems...  
![image](/Images/BlogPosts/Kahoneki.com%20-%20Development%20Journey/MY-AUTO%20IS%20A%20LIE.png)  
They certainly made the process of creating this website a lot easier. I can confidently say that I *actually enjoyed* working on this - something I'm sure 15 year old me would've got a kick out of hearing.

Now that it's complete, I hope to walk through the process of making my portfolio from start to finish - covering the design decisions and providing some explanations of the libraries I used for those that are just as clueless as I was when I first started.

*(psst, if you don't care about the design stuff, you can skip to the code explanation [here](#part-2-code) !!)*



## Technical Summary
The tl;dr for those that are simply curious:
- TypeScript for type safety
- React for the component paradigm
- Tailwind CSS for template classes
- React Router for routing
- Gray Matter for markdown parsing
- Vite for bundling
- GitHub Actions for deployment
- GitHub Pages for hosting



## Part 1: Design
Despite not being a web developer (and hence not knowing what I was getting myself into), the design stage proved quite easy. For starters, I've been looking at websites my whole life - 4 year old me might not have known it, but that was all market research !! It at least helped me in knowing what was possible - "Yeah I've seen other websites do the slidy image wheel-thing, so it's probably not too hard to add it to mine."

Making a portfolio in particular though has some extra design implications that had to be considered. Since its primary purpose is as a hiring aid, it needs to be as easy to understand and navigate as possible. A snippet of advice I've heard thrown around is the 'two-click rule': "it should take at most two clicks for someone to get to your projects from your homepage." It's vague - perhaps purposefully - but the sentiment holds true and it's a good rule of thumb.


### Home
My plan started as a simple wireframe on a whiteboard of the main landing page's horizontal design. I settled on the final look almost immediately - I particularly love the way the navbar connects to the sidebar, and the carousel's ability to quickly give a showcase of my projects helps to satisfy that ~~two~~ zero click rule!  
The only thing I wish I had done differently is considered responsive design earlier on (i.e.: how will this look on different screen sizes? on mobile? etc.), because it came back to bite me in the ass when I had to actually implement the design.


### About
The development of the design plans for my 'About' page is a good lesson in remembering to regularly consult your project requirements. I struggled for a long time to follow up on the 'Home' page with a design for this page that felt similarly interesting and unique. In particular, I spent a lot of time trying to make a **timeline view** work - labelling the key events along my journey (high school, internship, university, etc.).  
I had to take a step back and recall the **one** project requirement I had written for myself - "It needs to be *as easy* to understand and navigate *as possible*."
Were any of the ideas I was coming up with *actually* easier for people that were looking for an 'About' page? No.

After that revelation, I quickly landed on the design that's there now - just simple headings with separators between sections and a few images in there to make it look pretty.


### Portfolio
This page has fundamentally always just been a grid of all my projects with hover descriptions and the ability to click on them for a more detailed description. The design lends itself quite well to responsive design since the layout can stay largely the same with just the number of columns changing (along with the typical responsive design things - text size, margins, and whatnot).

The first design revision came from a desire to highlight certain projects more than others. This is why some of the tiles are rendered much larger - they are the ones I consider as "stand-out" pieces.

The next design revision came about because, ever since I had a first draft of this website, I was sending it to anyone that could offer me feedback (notably my lecturers and some folk from industry). The most overwhelming piece of feedback I received was that I **need** to include my source code. To be honest, this was something I had known for a while but was somewhat scared of. I'm confident in my ability to write clean and easy-to-understand code, but many of the projects (namely the smaller graphics ones) were developed without any knowledge that they would be: a) public, or b) ever looked at again. This is all to say, the code on some of these projects wasn't something I was particularly proud of sharing publicly.

Despite this, I figured that no matter how old and unrepresentative it is, it was better to have it than not - particularly if somebody just wants a reference for an algorithm I've implemented. Over time, I hope to clear out these older projects with new up-to-date ones anyway.

The design I landed on was to include a little GitHub logo on the tile if it includes public source code (not all can - for example, those under NDA). And since I was already recording short demonstration videos for my LinkedIn anyway, I added the YouTube videos to those that have them also.


### Blog / Contact
And finally, the blog! Hello, welcome!  
This page started its life under the name 'Contact'. During my initial brainstorm for the site, "Home, About, Portfolio, and Contact" just... sounded about right. There wasn't much to the thought to be honest, and I would eventually come to realise that I don't really have any social medias or the like to put on there, so it sat quite bare for a while just containing my LinkedIn and BlueSky.  
(I don't use BlueSky).

![image](/Images/BlogPosts/Kahoneki.com%20-%20Development%20Journey/Richard_Feynman.png)

I've always been a big proponent of the Feynman technique (named after physicist Richard Feynman - handsomely pictured above): "To truly cement your understanding of something, you should be able to explain it simply to someone."  
I *love* yapping about something I'm learning, though usually it's just to myself (or my poor friends...). Sometimes I get a bit of yapping opportunity when I'm writing the descriptions for my portfolio items, but there are many very interesting topics I'm learning about that don't lend themselves well to an entire project or can't be briefly described in a satisfying manner as part of a larger project.  
"Damn, if only I had a blog instead of that contact page."



## Part 2: Code
When trying to communicate code to someone, a certain level of prerequisite understanding has to be assumed. This section will be written assuming you're familiar with programming, but not any web development tools in particular. In this sense, I will be explaining these concepts as though I was teaching them to my younger self before I learnt about any of it. I'll cover the source code (including all libraries I'm using), then the bundling process, and finally deployment. By the end, it is my hope that you'll have a robust understanding of how my portfolio was developed - perhaps as a precursor to creating your own! :D  
(Note: While I've tried my best to make sure I'm well researched into everything I'm saying, I'm no web developer...)


### Source Code
This section will cover the following topics in the following order:
- [TypeScript](#typescript)
- [React](#react)
- [Tailwind](#tailwind)
- [React Router](#react-router)
- [Gray Matter](#gray-matter)
- [Vite](#vite)
- [Github Actions/Pages](#github-actionspages)


#### TypeScript
TypeScript is a *language superset* of JavaScript. This means it contains everything that JavaScript does and hence **all legal JavaScript is also legal in TypeScript**. However, not all TypeScript is legal JavaScript - TypeScript adds support for *static typing*.

So, "what the hell is static typing?"  
JavaScript is what's known as a "dynamically typed language", meaning its types are evaluated and checked at runtime.  
For example;
```js
let value = 10; //`value` is a `number` type
value = "Hello world!" //This is valid JS, the type will change at runtime
value.toUpperCase(); //Works
value.toFixed(2); //Throws a TypeError at runtime - `value` is a string
```
For those of us used to C-like languages where types are deduced during the compilation stage, this seems very unintuitive - and like not at all type safe, right?  
That's because, C, C#, C++ - these are all what's known as "statically typed languages." I.e.: types are required to be known at compile time and hence can't be changed.
```cpp
std::uint32_t value{ 10 }; //`value` is an std::uint32_t type
value = "Hello world!" //Illegal in C++ - will throw a compilation error
```
TypeScript serves to introduce static typing to the dynamically typed JavaScript:
```ts
let value: number = 10; //`value` is a `number` type - this is strictly enforced at compile time
value = "Hello World"; //Throws a TypeError at compile time - `value` is a `number`
```
Recall though, that as a language superset, all valid JS is valid TS - this means the top example will still compile in TS. In TypeScript, static typing is an optional addition, something you have to opt into by specifying a type (as seen above).

Another important fact to know is that browsers *don't run TypeScript*. The bundling process will be covered in more detail further down, but for now, know that TypeScript needs to be converted to JavaScript during compilation to be executable in browsers. This means the type safety that TypeScript grants you is for **compilation only**. For example:
```ts
//Define the User type
interface User {
    id: number;
    name: string;
    email: string;
}

async function FetchAndDisplayUser(userId: number): Promise<void> {
    const response = await fetch(`https://userapi.com/users/${userId}`);
    const user: User = await response.json();
    console.log(`Username: ${user.name.toUpperCase()}`);
}

FetchAndDisplayUser(1);
```
In the above example, what happens if the `fetch` returns malformed JSON?  
During compilation, the `const user: User = await response.json();` got stripped of its type annotation and was converted to `const user = await response.json();`. `user` now contains the malformed JSON. When we try to grab the user's name, it fails and we get a runtime TypeError.  
All TypeScript can do is provide error checking and IDE tooling (such as autocomplete) based on what it has been told - `user` is of type `User` - regardless of whether that actually turns out to be true at runtime.

Because of this, it's perhaps useful to think of TypeScript not as a language but as just an extra build layer - providing optional support for extra checks during the compilation of your JavaScript.


#### React
React is a JavaScript library designed to make the process of creating web user interface structures more intuitive - this is accomplished through a component-based model.  
Instead of thinking of a webpage as a large HTML document that you manually update with JavaScript, React lets you break it up into small, reusable pieces known as **components.**

For example, some of the components on my website are:
- **<Navbar>:** The navigation bar at the top of every page
- **<PortfolioItem>:** A component that gets reused for every project in the grid of my Portfolio page
- **<BlogPost>:** The component you're looking at right now!

##### JSX
JSX (or JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code within JavaScript. It's often used with React to make the process of writing components feel more akin to standard HTML.  
React does support traditional JavaScript through the use of `React.createElement()`:
```js
const element = React.createElement(
    'div',
    { className: 'hello-world' },
    'Hello, World!'
);
```
But the alternative is generally seen as much cleaner and more intuitive:
```jsx
const element = <div className="hello-world">Hello, World!</div>;
```
Also, just as there's TypeScript for type-strict JavaScript, there's also **TSX** for type-strict JSX.  
It's perhaps also worth knowing that, just like how browsers don't run TypeScript, they also don't run JSX (and hence TSX), any JSX you provide will be compiled down into standard JavaScript - all of your JSX components will be converted into `React.createElement()` calls.

##### State
Each component in React holds its own internal data (known as state). When React detects a component's state changing, it *reacts* by **automatically and efficiently re-rendering** the component (and any of its children) to reflect the new state. This removes the burden of manually keeping the UI in sync with the application's data.  
Consider the following example:
```jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState<number>(0);
    const increment = () => { setCount(count + 1) };

    return (
        <div>
            <p>You've clicked {count} times</p>
            <button onClick={increment}>Click to increment!</button>
        </div>
    );
}

export default Counter;
```
In the `Counter` component, we use the `useState` hook to declare a new state variable `count` and the function we'll be using to update it, `setCount`. Every time `setCount()` is called, React will update the `count` variable with the provided parameter and re-render the component with the new `count` variable.



#### Tailwind
If you felt like you could relate to my story of despising CSS, Tailwind is a modern CSS framework that solved almost all of my problems and I couldn't recommend it enough. Out of everything discussed here, it was by far my favourite tool to work with.  
It provides simple CSS utility-classes made by people that actually know what they're doing, so that people like me (and presumably you if you've read this far) aren't ripping our hair out trying to center a damn div.  

I think the best way to demonstrate Tailwind's utility would be to provide an example of a design that uses Tailwind and that same design but with traditional CSS. However, while I obviously have plenty examples of Tailwind code available, if I haven't made it obvious enough, I'm not exactly the biggest CSS fan. I'm not personally eager to relearn a bunch of my high school curriculum for this, and it probably wouldn't be a very good demonstration of the differences anyway since, once again, I'm no web developer.

This is all to say, I've given one of my Tailwind code blocks to Google's Gemini 2.5 Pro AI model and asked it to rewrite my design using traditional CSS classes. Apologies to those AI-averse, and apologies for any potential mistakes that I can't personally verify.

Here's my HTML+Tailwind block for the main design of the Portfolio page (note: this doesn't include the items themselves which are handled with more complex Tailwind. This is essentially just the grid design). Pay attention to the `className` string, it's a collection of small single-purpose utility classes. In addition, prefixes like `sm:`, `md:`, and `lg:` are known as breakpoints and are how Tailwind handles responsive design.
```tsx
<>
<Navbar></Navbar>
<div className="p-10">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">Click to learn more!</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:gap-8 md:p-8">
    {
        thumbnails.map(t => (
            <PortfolioItem large={t.large} key={t.title} path={t.path} projectName={t.title} description={t.description} repoLink={t.repoLink} youtubeLink={t.youtubeLink}></PortfolioItem>
        ))
    }
    </div>
</div>
</>
```

Here is what I was given as the traditional-CSS alternative:
```html
<!-- HTML -->
<>
<Navbar></Navbar>
<div class="container">
    <h1 class="main-heading">Click to learn more!</h1>
    <div class="grid-container">
        <!-- Portfolio items would be rendered here -->
    </div>
</div>
</>
```
```css
/*--CSS--*/

/* General container styling */
.container {
    padding: 2.5rem; /* Equivalent to p-10 */
}

/* Heading styles */
.main-heading {
    font-size: 1.875rem; /* Equivalent to text-3xl */
    font-weight: 700; /* Equivalent to font-bold */
    text-align: center; /* Equivalent to text-center */
}

/* Grid container for portfolio items */
.grid-container {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr)); /* Equivalent to grid-cols-1 */
    gap: 1.5rem; /* Equivalent to gap-6 */
    padding: 1rem; /* Equivalent to p-4 */
}

/* Responsive styles for small screens and up (640px) */
@media (min-width: 640px) {
    .main-heading {
        font-size: 2.25rem; /* Equivalent to sm:text-4xl */
    }

    .grid-container {
        grid-template-columns: repeat(2, minmax(0, 1fr)); /* Equivalent to sm:grid-cols-2 */
    }
}

/* Responsive styles for medium screens and up (768px) */
@media (min-width: 768px) {
    .grid-container {
        gap: 2rem; /* Equivalent to md:gap-8 */
        padding: 2rem; /* Equivalent to md:p-8 */
    }
}

/* Responsive styles for large screens and up (1024px) */
@media (min-width: 1024px) {
    .main-heading {
        font-size: 3rem; /* Equivalent to lg:text-5xl */
    }

    .grid-container {
        grid-template-columns: repeat(3, minmax(0, 1fr)); /* Equivalent to lg:grid-cols-3 */
    }
}
``` 
...What the fuck?



#### React Router
On a traditional website, when you click a link to go to a different page, the browser will fully reload the site. It will throw away the old HTML, send a new request to the server, get a new HTML file, and render it from scratch. This is what's known as a **full page reload**, and it's usually discouraged if it can be avoided - it's slow and loses your application's state.  
On the other hand, you might prefer to have all your JSX loaded at once on startup then simply... *"swap it out"* when the page changes. This is what's known as a **single-page application (SPA)**, and it's something that's provided to websites built on React through the *React Router* library.

The easiest way to showcase this is with an example, so here's a snippet of `App.tsx` where I use React Router:
```tsx
function App() {
  
return (
  <>
  <HashRouter>
  {/* Main page */}
  <div className="bg-background text-text h-full min-h-screen">
    {/* Page content */}
    <div>

      <ScrollToTopOnSiteChange></ScrollToTopOnSiteChange>
      <OnWindowResize></OnWindowResize>

      {/* HashRouter element will be replaced with Route element for appropriate path lookup
      (e.g.: if url path="/", it will be replaced with Home element) */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:projectName" element={<PortfolioItemPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost/>} />
        
        {/* Fallback */}
        <Route path="*" element={
            <div className="flex flex-col">
                <Navbar></Navbar>
                <img src="Images/favicon.png" className="mt-16 mx-auto flex-1 h-1/6 w-1/6"></img>
                <p className="font-bold mx-auto mt-8 text-4xl text-center">Error 404: Page not found!</p>
            </div>
        }/>

      </Routes>
    </div>
  </div>
  </HashRouter>
  </>
)
}
```
There are a few key elements in here so let's break it down one at a time.
`<HashRouter>` is the main "engine". The entire site is wrapped in this and it uses the URL hash (#) to manage the client-side route, keeping the UI in sync with the URL. There are two main options for your routing engine - `<HashRouter>` and `<BrowserRouter>`. The difference is that static hosting natively supports `<HashRouter>`, whereas to get `<BrowserRouter>` working, it would need some extra server-side configuration. GitHub Pages does not provide easy support for this configuration.

`<Link>` is the React Router replacement for the standard `<a>` tag that is to be used for *internal navigation* (navigation within the website, as opposed to between websites). When the user clicks, for example, `<Link to="/about">`, a few things happen:
1) React Router calls a special function, `event.preventDefault()`, stopping the browser from carrying out its default behaviour (which is to do a full page reload)
2) React Router updates the URL in the address bar to `/#/about`.
3) This URL change triggers the `<Routes>` component seen above to re-evaluate.

`<Routes>` is the main controller. It snoops on the URL and, when it detects a change, will find the first `<Route>` child whose path matches that URL. It then renders the React component provided in the `element={}` property for that `<Route>`.  
For example, if you click `<Link to="/about">About</Link>`, the URL will become `https://kahoneki.com/#/about` and the `<About>` react component will be rendered.  
If the URL doesn't match any of the route paths, the fallback option will be used, rendering a simple Error-404 page.

But what if you have a lot of "sub-pages"? For the portfolio and blog sections, did I have to write out a `<Route>` for each individual portfolio item, or each individual blog page (for which there is currently one (1)). No, because React Router also provides support for **dynamic routing.**  
Let's take the portfolio route as an example:
```tsx
<Route path="/portfolio/:projectName" element={<PortfolioItemPage />} />
```
React Router interprets the `:` in the path as a **URL parameter** - in this case, the URL parameter means that anything which follows `https://kahoneki.com/#/portfolio/` will be passed as the `projectName` parameter. This parameter can be accessed with the `useParams()` hook which can be seen in `PortfolioItemPage.tsx` like this:
```tsx
const { projectName } = useParams<{ projectName: string }>();
```



#### Gray Matter
Probably the least known item I'm discussing, Gray Matter was very helpful for this site in particular, and so it would feel weird not including at least a small section on it.  
Gray Matter is a **Markdown Parser** which I'm using for my blog pages. Each page is stored as a Markdown (`.md`) file and is split into two sections:
1) **Front Matter:** Metadata about the file written at the top in YAML (a serialisation language)
2) **Content:** The actual content itself, written in Markdown.  
Here's an example, it's the very blog page you're looking at right now!
```
---
title: "Kahoneki.com - Development Journey"
date: "2025-07-19"
excerpt: "Detailing the design decisions and implementation details for my portfolio website."
---
[CONTENT GOES HERE]
```
Upon loading the `.md` file into a `string`, it can be parsed using the `matter()` function. Here's how I'm using it to parse the blog pages:
```ts
//Stores the data for a single blog post
export interface Post
{
    title: string;
    date: string;
    excerpt: string;
    slug: string;
    content: string;
}

//Stores all blog posts
const posts: Post[] = [];

//Loop through all blog post paths
for (const path in modules)
{
    //Get the .md file contents as a string
    const rawContent:string = modules[path];

    //Pass the raw content to the matter() function, retrieving the formatted metadata and content
    const { data, content } = matter(rawContent);

    //Format the slug based on the path
    const slug:string = path.split('/').pop()?.replace('.md', '')!;

    //Add the post to the list of all posts
    posts.push
    ({
        slug: slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content: content,
    });
}
```



#### Vite
So I've mentioned a few times up to this point that browsers don't support some of the things we've been using for development. They don't support TypeScript, and they don't support JSX/TSX.  
On a seemingly unrelated note, up until now we've just been working with .tsx files, yet we know that browsers operate only on .html, .css, and .js files. Where do these files come from?  
On a seemingly even more unrelated note, is it not a big hassle having to rebuild our entire website everytime we want to view our changes? Somebody should make a tool that can automatically and efficiently rebuild your project whenever you modify a file.

Vite is a **build tool** for web applications. That is, very purposefully, incredibly vague, but that's because it does all of the following:
- **Transpiles:** It converts your TypeScript into JavaScript, your JavaScript XML into JavaScript, your TypeScript XML into JavaScript. JSON? JavaScript. Your non-JavaScript imports? JavaScript!
- **Production Bundling:** When you're ready to deploy, running `npm run build` will cause Vite to read your `index.html` and `main.tsx` files (which were generated at the start of development by running the `npm create vite@latest` command), and bundle all the necessary JavaScript into a few highly-optimised files. It creates a `dist` folder containing the final production-ready `index.html`, `.js`, and `.css` files.
- **Local Dev Server Hosting:** When you run `npm run dev`, Vite starts a local web server to serve your `index.html` and other files at `localhost:5173`.
- **Hot Module Replacement (HMR):** While running a dev server, Vite will check for file changes and, when it detects one, it intelligently rebuilds *only the part that changed* and instantly injects it into the running application in your browser. This usually doesn't even require so much as a page refresh.
- **Processes Tailwind:** It's also responsible for running the beautiful-Tailwind -> ugly-CSS conversion and injecting it into the browser. Injection is a good descriptor here, it brings to mind thoughts of large needles and lots of gore, very apt for CSS.



#### Github Actions/Pages
The final thing we'll cover in this section is **deployment and hosting.**  
So we have our website all set up and ready to be brought online. How do we do that? Up until now, everything has just been local to our computer.

Now, we could set up our computer to serve as a **server**, opening it up to anyone that wants to access our website and serving them the files, but that comes with quite a few issues:
- Everything is currently local, we would need to set up a framework to be able to send our files to those that request it - we can't just send someone a local file path like `C:/Users/Ava/Portfolio/dist/index.html`. That sounds like a lot of effort.
- Our computer isn't always turned on, but it would need to be if we wanted access to our website to be available 24/7.
- Hosting a web server can demand handling a lot of incoming and outgoing traffic, something which our computer isn't set up to handle.
- The website's speed can vary depending on where someone is connecting from because we only have one computer as opposed to a network of interconnected servers all across the world (otherwise known as a Content Delivery Network or CDN).
  
The solution to these problems is to use a **hosting provider.** We can upload our `dist` folder to them and they can use their super big and expensive servers that are set up all over the globe and are specially made to handle web traffic. The hosting provider can give us a public URL (e.g. kahoneki.github.io), and when someone types the URL into their browser, the hosting provider will serve them our files.  
The hosting provider I went with was Github Pages, simply because it has nice integration with GitHub Actions and... it's free. They also allow you to use your own domain if you own one so that it can be the entry point to their server (in my case: kahoneki.com).

Now that we have a server we can provide our files to for hosting, how do we actually get our code from being just a bunch of source files into the `dist` folder, then provide that dist folder to the hosting provider? This process is known as **deployment**, and it generally looks like this:
1) **Get the latest code:** E.g.: from the `master` branch on GitHub
2) **Install dependencies:** Run `npm install` to get all the necessary libraries (React, Tailwind, Gray Matter, etc.)
3) **Build the Site:** Run `npm run build`, causing Vite to take all your source files and convert them into pure HTML, CSS, and JS, placing them inside the `dist` folder.
4) **Transfer the Built Files:** Send the `dist` folder contents to the hosting provider, replacing the old files.

Phew, that's like, what, 4 steps? And it would be just slightly annoying having to do that more than once, so let's do what programmers know best and spend a bunch of time learning an entirely new framework to write an automation script that can do this for us. This is where CI/CD (or **"Continuous Integration / Continuous Deployment"**) comes in, and while I like to poke fun, it's actually an incredibly powerful tool that can do a lot more than what we'll be using it for here.  
**GitHub Actions** is a CI/CD platform that's built into GitHub (which is useful because I'm using git for source control). It lets you define a set of automated steps (aka a **"workflow"**) that will run automatically whenever something specific happens in your repository (e.g.: pushing to `master`).  
It's contained within a `.yml` file, here's mine:
```yml
name: Deploy static content to Pages

on:
  #Runs everytime a push to master occurs
  push:
    branches: ['master']

  #Just lets you run this workflow manually from the Actions tab
  workflow_dispatch:

#Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

#Allow one concurrent deployment
concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  #The jobs itself (what will happen when the `on` condition - a push to master - is met)
  #We only have one deploy job because we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest

    #The steps to be carried out in this job
    steps:
        #Checks out the master branch
      - name: Checkout
        uses: actions/checkout@v4

        #Initialise npm (Node Package Manager)
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      
        #Install all the dependencies (e.g.: React, Tailwind, etc.)
      - name: Install dependencies
        run: npm ci
      
        #Build the project (using Vite)
      - name: Build
        run: npm run build
      
      #Initialise GitHub Pages
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      #Upload the dist folder to GitHub pages
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload dist folder
          path: './dist'
      
      #Tell GitHub pages to start hosting our dist folder
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
Everytime GitHub detects a push to master, it will start up a virtual machine to run these commands.



### Part 3: Summary
Phew, you've made it to the end, well done! I hope it proved somewhat useful and that you've maybe learnt a thing or two. This website has been the culmination of about 7 months working on and off in between my graphics projects and I've thoroughly enjoyed it. I was personally very surprised to find out just how fun web development can often be.  
Although at the start of development, I had a very pragmatic mindset of just wanting to get stuff working (and quickly), I can't help but feel like I've just scratched the surface of a deep rabbit hole that has consistently kept me intrigued and continued to hold my interest for potential future projects.  
Maybe, just maybe, web development isn't so bad after all.



### Acknowledgements
Throughout the entirety of this project, I've received constant support and help from a friend and fella by the name of Jowsey. In fact, this section might as well be titled 'References' with how much I referred to him for help, a monumental accomplishment given how unknowledgeable I was at the start of this. He receives my undying gratitude for helping me get this site to what it is and never getting fed up with my constant questioning. Pretty much all the libraries I've mentioned in this blog post have been a result of his recommendation and are the reason I was able to do this at all.

He's an incredibly experienced web developer and games programmer, check him out [here](https://tom.cafe/) !! NOW !!



![image](/Images/BlogPosts/Kahoneki.com%20-%20Development%20Journey/favicon.png)