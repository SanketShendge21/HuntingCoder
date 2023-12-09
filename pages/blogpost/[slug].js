import { useRouter } from 'next/router'

import styles from '@/styles/BlogPost.module.css';
import { useState , useEffect } from 'react';


// This is dynamic route so if path is not specified then it will return a default page
export default function Page(props) {
  const [blog, setBlog] = useState(props.myBlog)

  // Now we used server side rendering to render the blog so commented useEffect
  // const router = useRouter()
	// useEffect(() => {
  //   if(!router.isReady) return;
  //   const slug = router.query.slug;
	// 	fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
	// 		.then((a) => {
	// 			// Wating for promise resolution
	// 			return a.json(); // Promise returns some data then we wait for to parse the data
	// 		})
	// 		.then((parsed) => {
	// 			console.log(parsed);
	// 			setBlog(parsed);
	// 		});
	// }, [router.isReady]); // isReady return a boolean, if return true then run useEffect again
  

  return(

// These are steps we will follow to display the content of the blog on the blogpost page.

// First step would be to find the file in the blogdata directory corresponding to the slug. 
// Second step would be to populate the content of the blog inside the page in the format specified.

    <div className={styles.container}>
      <main className={`${styles.main}`}>
      <h1>{blog && blog.title}</h1>
      <hr />
      <p>
        {blog && blog.content}
      </p>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {

  // Context object contains a lot of things we can extract query from context
  const slug = context.query.slug;

  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
	let myBlog = await data.json();

	return {
	  props: { myBlog }, // will be passed to the page component as props
	}
  }