import config from 'lib/config'
import Github from 'components/svgs/Github'
import Facebook from 'components/svgs/Facebook'
import Twitter from 'components/svgs/Twitter'
import Discord from 'components/svgs/Discord'

const Footer = () => (
  <footer className="border-t border-ink-300 py-4 dark:border-ink-800">
    <div className="mx-auto flex w-wrapper items-center justify-between">
      <p>From {config.metadata.author} with 🔥 &bull; &copy; 2022</p>
      <ul className="flex items-center space-x-1">
        <li>
          <a
            href={config.metadata.github}
            target="_blank"
            rel="noreferrer"
            className="block p-1 duration-200 hover:text-ink-800 dark:text-ink-400 dark:hover:text-ink-100"
          >
            <Github className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href={config.metadata.facebook}
            target="_blank"
            rel="noreferrer"
            className="block p-1 duration-200 hover:text-ink-800 dark:text-ink-400 dark:hover:text-ink-100"
          >
            <Facebook className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href={config.metadata.twitter}
            target="_blank"
            rel="noreferrer"
            className="block p-1 duration-200 hover:text-ink-800 dark:text-ink-400 dark:hover:text-ink-100"
          >
            <Twitter className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href={config.metadata.discord}
            target="_blank"
            rel="noreferrer"
            className="block p-1 duration-200 hover:text-ink-800 dark:text-ink-400 dark:hover:text-ink-100"
          >
            <Discord className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
