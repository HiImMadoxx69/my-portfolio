import Link from 'next/link'
import Layout from '../components/Layout'
//todo list
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Im, Emmanuel Nocum</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
)

export default IndexPage
