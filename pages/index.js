import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Hunting Coder</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
      <nav className={styles.mainnav}>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
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
					<div>
						<a
							href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							By{" "}
							<Image
								src="/vercel.svg"
								alt="Vercel Logo"
								className={styles.vercelLogo}
								width={100}
								height={24}
								priority
							/>
						</a>
					</div>
				</div>

				<div className={styles.center}>
					<Image
						className={styles.logo}
						src="/next.svg"
						alt="Next.js Logo"
						width={180}
						height={37}
						priority
					/>
				</div>

				<div className={styles.grid}>
					<a
						href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2>
							Docs <span>-&gt;</span>
						</h2>
						<p>
							Find in-depth information about Next.js features and&nbsp;API.
						</p>
					</a>

					<a
						href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2>
							Learn <span>-&gt;</span>
						</h2>
						<p>
							Learn about Next.js in an interactive course with&nbsp;quizzes!
						</p>
					</a>

					<a
						href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2>
							Templates <span>-&gt;</span>
						</h2>
						<p>
							Discover and deploy boilerplate example Next.js&nbsp;projects.
						</p>
					</a>

					<a
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
					>
						<h2>
							Deploy <span>-&gt;</span>
						</h2>
						<p>
							Instantly deploy your Next.js site to a shareable URL
							with&nbsp;Vercel.
						</p>
					</a>
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
