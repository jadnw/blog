import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'

import Layout from '@/layouts/Layout'
import Button from '@/components/Button'
import Typography from '@/components/Typography'
import Grid from '@/components/Grid'

import Decor from '@/assets/svgr/decor.svg'
import { getMdxFrontmatters } from '@/lib/mdx'
import { getItemsByPage } from '@/lib/utils'

export const getStaticProps: GetStaticProps = async () => {
  const { frontmatters } = await getMdxFrontmatters()
  const latestFrontmatters = getItemsByPage(frontmatters, 1)

  return {
    props: {
      latestFrontmatters,
    },
  }
}

const Home: NextPage = ({
  latestFrontmatters,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <div className="mx-auto pt-24 pb-16 px-4 lg:px-0 w-full lg:w-wrapper">
        <section>
          <h1 className="font-heading text-5xl font-bold">
            Hey, I&apos;m Jay.
          </h1>
          <p className="pt-4 pb-12 leading-relaxed">
            I am a self-taught Front End developer from Ho Chi Minh, Vietnam.
            <br />
            Welcome to my blog! I love working on side projects and blogging
            about them.
          </p>
          <div className="flex items-center space-x-4">
            <Button text="Subscribe Me" href="/#subscribe" />
            <Decor className="hidden sm:block text-primary-300 dark:text-primary-500" />
          </div>
        </section>
        <section className="mt-12 w-full flex flex-col items-start">
          <span className="w-1/2 h-0.5 block bg-ink-600 dark:bg-ink-400">
            &nbsp;
          </span>
          <pre className="py-12 whitespace-pre-wrap font-mono font-medium text-ink-600 dark:text-ink-200">
            <span className="text-purple-500 dark:text-purple-400">const</span>{' '}
            quote ={' '}
            <span className="text-green-500">
              &apos;It is not enough for code to work&apos;
            </span>
            <br />
            <span className="text-purple-500 dark:text-purple-400">
              const
            </span>{' '}
            author ={' '}
            <span className="text-green-500">&apos;Robert C. Martin&apos;</span>
            <br />
            <span className="text-purple-500 dark:text-purple-400">
              const
            </span>{' '}
            book ={' '}
            <span className="text-green-500">&apos;Clean Code&apos;</span>
            <br />
            <br />
            <span className="text-ink-400">
              &#47;&#47;{' '}
              <span className="px-2 inline-block font-bold text-ink-600 bg-yellow-500">
                TODO
              </span>
              : Use literal string in this case. Best practice?
            </span>
            <br />
            console.<span className="text-blue-600">log</span>
            (`???$&#123;quote&#125;??? -- from $&#123;book&#125; by
            $&#123;author&#125;.`)
            <br />
            <br />
            <span className="text-primary-500">$</span> ???It is not enough for
            code to work??? -- from Clean Code by Robert C. Martin.
          </pre>
          <span className="self-end w-1/2 h-0.5 block bg-ink-600 dark:bg-ink-400">
            &nbsp;
          </span>
        </section>
        <section className="pt-16 flex flex-col items-stretch">
          <Typography text="Latest Posts" />
          <Grid frontmatters={latestFrontmatters} />
          <div className="self-center">
            <Button text="Read More Posts" href="/blog" />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Home
