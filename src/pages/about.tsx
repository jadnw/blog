import type { NextPage } from 'next'

import Layout from '@/layouts/Layout'
import Typography from '@/components/Typography'

import Logo from '@/assets/svgr/logo.svg'
import { siteMetadata } from '@/lib/config'

const About: NextPage = () => (
  <Layout title="About">
    <section className="mx-auto py-16 px-4 lg:px-0 w-full lg:w-wrapper leading-loose">
      <Typography text="About" />
      <div className="flex items-center space-x-16">
        <div className="py-12">
          <h3 className="text-2xl font-bold">Me, Myself and I</h3>
          <p className="mt-2">
            Hey, I&apos;m Jay 😉. To get to know more about me, you can visit{' '}
            <a
              className="text-secondary-500 dark:text-primary-400 hover:underline"
              href={siteMetadata.portfolio}
            >
              my portfolio
            </a>{' '}
            or{' '}
            <a
              className="text-secondary-500 dark:text-primary-400 hover:underline"
              href={siteMetadata.github}
            >
              Github profile
            </a>{' '}
            🤩.
          </p>
          <h3 className="mt-8 text-2xl font-bold">About This Blog</h3>
          <p className="mt-2">
            This blog has been created by me as my personal programming blog.
            You can find many contents about Web Developement as well as
            Programming Languages and Problem Solving here.
          </p>
          <p className="mt-2">
            I usually write ✒️ stuff about my development in my spare time to
            track my learning path in programming. This blog will cover all
            problems and solutions I have to deal with 🔥.
          </p>
          <p className="mt-2">
            Beside writing articles, sometimes I write some notes down to
            memorize them. It&apos;s good to put them in one place.
          </p>
          <p className="mt-2">Happy Coding! 🤗</p>
        </div>
        <div className="hidden sm:block">
          <Logo className="w-48 md:w-64 h-48 md:h-64" />
        </div>
      </div>
    </section>
  </Layout>
)

export default About
