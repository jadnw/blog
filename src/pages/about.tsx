import type { NextPage } from 'next'

import Layout from '@/layouts/Layout'
import Typography from '@/components/Typography'

const About: NextPage = () => (
  <Layout title="About Me">
    <section className="mx-auto py-12 px-4 lg:px-0 w-full lg:w-wrapper leading-loose">
      <Typography text="About Me" />
      <h3 className="mt-12 text-xl font-bold">Me, Myself and I</h3>
      <p className="mt-2">
        Hey, I&apos;m Jay 😉. To get to know more about me, you can visit my
        portfolio 🤩.
      </p>
      <h3 className="mt-12 text-xl font-bold">About This Blog</h3>
      <p className="mt-3">
        The blog name, SpaceRokt 🚀 (spās ˈräkət) came from &apos;space
        rocket&apos;. Space rocket is partially reusable rocket-launched vehicle
        designed to go into orbit around Earth, to transport people and cargo to
        and from orbitting spacecraft, and to glide to a runway landing on its
        return to Earth&apos;s surface.
      </p>
      <p className="mt-2">
        SpaceRokt has been created by me as my personal programming blog. You
        can find many contents about Web Developement as well as Programming
        Languages and Problem Solving here.
      </p>
      <p className="mt-2">
        I usually write ✒️ stuff about my development in my spare time to track
        my learning path in programming. This blog will cover all problems and
        solutions I have to deal with 🔥.
      </p>
      <p className="mt-2">
        Beside writing articles, sometimes I write some notes down to memorize
        them. It&apos;s good to put them in one place.
      </p>
      <p className="mt-2">Happy Coding! 🤗</p>
    </section>
  </Layout>
)

export default About
