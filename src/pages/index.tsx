import type { NextPage } from 'next'

import Layout from '../layouts/Layout'
import Button from '../components/Button'
import Typography from '../components/Typography'

import Decor from '../assets/svgr/decor.svg'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="mx-auto py-24 w-wrapper">
        <h1 className="font-heading text-5xl font-bold">Hey, I&apos;m Jay.</h1>
        <p className="pt-4 pb-12">
          I am a self-taught Front End developer from Ho Chi Minh, Vietnam.
          <br />
          Welcome to my blog! I love working on side projects and blogging about
          them.
        </p>
        <div className="flex items-center space-x-4">
          <Button text="Subscribe Me" href="/#subscribe" />
          <Decor />
        </div>
      </div>
    </Layout>
  )
}

export default Home
