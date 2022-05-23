import type { NextPage } from 'next'

import Layout from '../layouts/Layout'
import SearchField from '../components/SearchField'
import Typography from '../components/Typography'

const Home: NextPage = () => {
  return (
    <Layout>
      <div>This is my blog</div>
      <Typography text="Latest Posts" />
      <Typography text="Latest Posts">
        <SearchField placeholder="Search posts ..." value={''} />
      </Typography>
    </Layout>
  )
}

export default Home
