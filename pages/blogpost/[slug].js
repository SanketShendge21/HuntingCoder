import { useRouter } from 'next/router'

import styles from '@/styles/BlogPost.module.css';


// This is dynamic route so if path is not specified then it will return a default page
export default function Page() {
  const router = useRouter()
  const slug = router.query.slug;
  return(

// These are steps we will follow to display the content of the blog on the blogpost page.

// First step would be to find the file in the blogdata directory corresponding to the slug. 
// Second step would be to populate the content of the blog inside the page in the format specified.

    <div className={styles.container}>
      <main className={`${styles.main}`}>
      <h1>Title of the page is {slug}</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor quo beatae ut ipsum molestias harum aspernatur consequuntur illum fugiat!
      </p>
      </main>
    </div>
  )
}