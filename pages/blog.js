import React, { useEffect, useState } from "react";
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

const blog = () => {
	const [blogs, setBlogs] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3000/api/blogs")
			.then((a) => {
				// Wating for promise resolution
				return a.json(); // Promise returns some data then we wait for to parse the data
			})
			.then((parsed) => {
				console.log(parsed);
				setBlogs(parsed);
			});
	}, []);
	return (
		// 	These are steps we will follow to display title and description on the blog page.
		// First step would be to collect all the files from the blogdata directory.
		// Second step would be to iterate through all the collected files and display the needed information on the blog.js page.

		<div className={styles.container}>
			<main className={`${styles.main}`}>
				{blogs.map((blogitem) => {
					return <div key={blogitem.slug} className={styles.blogItem}>
						<Link href={`/blogpost/${blogitem.slug}`}>
							<h3>{blogitem.title}</h3>
						</Link>
						<p className={styles.blogItemP}>{blogitem.content.substr(0,140)}...</p>
					</div>
				})}
			</main>
		</div>
	);
};

export default blog;
