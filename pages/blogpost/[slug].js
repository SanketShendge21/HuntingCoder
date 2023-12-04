import { useRouter } from 'next/router'

// This is dynamic route so if path is not specified then it will return a default page
export default function Page() {
  const router = useRouter()
  return <p>Post: {router.query.slug}</p>
}