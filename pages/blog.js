import React from 'react'
import styles from '@/styles/Blog.module.css';
import Link from 'next/link';

const blog = () => {
  return (
	
// 	These are steps we will follow to display title and description on the blog page.
// First step would be to collect all the files from the blogdata directory. 
// Second step would be to iterate through all the collected files and display the needed information on the blog.js page.

    <div className={styles.container}>
      <main className={`${styles.main}`}>
					<div className={styles.blogItem}>
            <Link href={'/blogpost/learn-javascript'}>
						  <h3>How to learn Next Js in 2023-2024</h3>
            </Link>
						<p>This is gonna be fun</p>
					</div>
					<div className={styles.blogItem}>
						<h3>How to learn Next Js in 2023-2024</h3>
						<p>This is gonna be fun</p>
					</div>
					<div className={styles.blogItem}>
						<h3>How to learn Next Js in 2023-2024</h3>
						<p>This is gonna be fun</p>
					</div>
					<div className={styles.blogItem}>
						<h3>How to learn Next Js in 2023-2024</h3>
						<p>This is gonna be fun</p>
					</div>
      </main>
		</div>
  )
}

export default blog