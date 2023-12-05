import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<style jsx>
				{`
					h2 {
						font-size: 38px;
					}
					h3 {
						font-size: 28px;
					}
				`}
			</style>
			<Head>
				<title>Hunting Coder</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<nav className={styles.mainnav}>
				<ul>
					<Link href="/">
						<li>Home</li>
					</Link>
					<Link href="/blog">
						<li>Blog</li>
					</Link>
					<Link href="/about">
						<li>About</li>
					</Link>
					<Link href="/contact">
						<li>Contact</li>
					</Link>
				</ul>
			</nav>
			<main className={`${styles.main} ${inter.className}`}>
				<div className={styles.description}>
					<p>
						Hunting Coder &nbsp;
						<code className={styles.code}>
							A blog for hunting coders by a hunting coder
						</code>
					</p>
				</div>
				<div className={styles.imagewrap}>
					<Image
						className={styles.myImg}
						src="/home.jpg"
						width={237}
						height={158}
						alt="Cant find a suitable image"
					/>
				</div>
				<div className="blogs">
					<h2>Popular Blogs</h2>
					<div className="blogItem">
						<h3>How to learn Next Js in 2023-2024</h3>
						<p>This is gonna be fun</p>
					</div>
					<div className="blogItem">
						<h3>How to learn Next Js in 2023-2024</h3>
						<p>This is gonna be fun</p>
					</div>
					<div className="blogItem">
						<h3>How to learn Next Js in 2023-2024</h3>
						<p>This is gonna be fun</p>
					</div>
					<div className="blogItem">
						<h3>How to learn Next Js in 2023-2024</h3>
						<p>This is gonna be fun</p>
					</div>
				</div>
			</main>
		</>
	);
}
