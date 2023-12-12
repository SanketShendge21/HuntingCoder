import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import * as fs from "fs";

const Blog = (props) => {
	function createMarkup(c) {
		// Dangerously create markup to set innerHTML
		return { __html: c };
	}
	const [count, setCount] = useState(2);

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

	const fetchData = async () => {
		let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
		setCount(count + 2);
		let data = await d.json();
		setBlogs(data);
	};
	return (
		// 	These are steps we will follow to display title and description on the blog page.
		// First step would be to collect all the files from the blogdata directory.
		// Second step would be to iterate through all the collected files and display the needed information on the blog.js page.

		<div className={styles.container}>
			<main className={`${styles.main}`}>
				<InfiniteScroll
					dataLength={blogs.length} //This is important field to render the next data
					next={fetchData}
					hasMore={props.allCount !== blogs.length}
					loader={<h4>Loading...</h4>}
					endMessage={
						<p style={{ textAlign: "center" }}>
							<b>Yay! You have seen it all</b>
						</p>
					}
				>
					{blogs.map((blogitem) => {
						return (
							<div key={blogitem.slug}>
								<Link href={`/blogpost/${blogitem.slug}`}>
									<h3 className={styles.blogItemh3}>{blogitem.title}</h3>
								</Link>
								<p className={styles.blogItemp}>
									{blogitem.metadesc.substr(0, 140)}...
								</p>
								<Link href={`/blogpost/${blogitem.slug}`}>
									<button className={styles.btn}>Read More</button>
								</Link>
							</div>
						);
					})}
				</InfiniteScroll>
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
	let data = await fs.promises.readdir("blogdata");
	let allCount = data.length;
	let myfile;
	let allBlogs = [];
	for (let index = 0; index < 2; index++) {
		const item = data[index];
		myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
		allBlogs.push(JSON.parse(myfile));
	}

	return {
		props: { allBlogs, allCount }, // will be passed to the page component as props
	};
}

export default Blog;
