import config from 'lib/config'

const Home = () => {
  return (
    <div className="mx-auto w-wrapper">
      <section className="flex min-h-[calc(100vh_-_64px)] flex-col items-center space-y-6 pt-48">
        <h1 className="text-6xl">🎉 Welcome to my blog! I&apos;m Jaden. 🥳</h1>
        <p className="text-center leading-relaxed">
          I am a self-taught Front End developer from Ho Chi Minh, Vietnam.
          <br />I love working on side projects and blogging about everything.
        </p>
        <a
          href={config.metadata.portfolio}
          target="_blank"
          rel="noreferrer"
          className="rounded bg-ink-700 px-6 py-3 font-medium text-ink-200 duration-200 hover:bg-ink-600"
        >
          Say hi to me!
        </a>
      </section>
    </div>
  )
}

export default Home
