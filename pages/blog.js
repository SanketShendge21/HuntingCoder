import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import * as fs from 'fs';

const blog = (props) => {
	function createMarkup(c) { // Dangerously create markup to set innerHTML
        return { __html: c };
    }

	// console.log(props);
	const [blogs, setBlogs] = useState(props.allBlogs);

	// Now we used server side rendering to render the blog so commented useEffect
	// useEffect(() => {
	// 	fetch("http://localhost:3000/api/blogs")
	// 		.then((a) => {
	// 			// Wating for promise resolution
	// 			return a.json(); // Promise returns some data then we wait for to parse the data
	// 		})
	// 		.then((parsed) => {
	// 			console.log(parsed);
	// 			setBlogs(parsed);
	// 		});
	// }, []);
	return (
		// 	These are steps we will follow to display title and description on the blog page.
		// First step would be to collect all the files from the blogdata directory.
		// Second step would be to iterate through all the collected files and display the needed information on the blog.js page.

		<div className={styles.container}>
			<main className={`${styles.main}`}>
				{blogs.map((blogitem) => {
					return <div key={blogitem.slug} className={styles.blogItem}>
						
							<h3>{blogitem.title}</h3>
						
						{blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
						<p className={styles.blogItemp}>{blogitem.content.substr(0, 140)}...</p>
						<Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More</button> </Link>
					</div>
				})}
			</main>
		</div>
	);
};

// export async function getServerSideProps(context) {
// 	let data = await fetch("http://localhost:3000/api/blogs")
// 	let allBlogs = await data.json();
// 	return {
// 	  props: { allBlogs }, // will be passed to the page component as props
// 	}
//   }

export async function getStaticProps(context) {
	
	let data = await fs.promises.readdir("blogdata");// it takes a path and callback function
	let allBlogs = [];
	let myFile;
	for (let index = 0; index < data.length; index++) {
	const item = data[index];
	console.log(item);
	myFile = await fs.promises.readFile(('blogdata/'+ item),'utf-8');
	console.log(myFile);
	allBlogs.push(JSON.parse(myFile)); // Myfile is a string we need to convert to JSON object
	}
	
	return{
		props: {allBlogs}, // will be passed to the page component
	}
}

export default blog;
