import Scissors from '@/assets/svgr/scissors.svg'
import ArrowRight from '@/assets/svgr/arrow-right.svg'
import Typography from '@/components/Typography'

const Subscribe = () => {
  return (
    <section
      id="subscribe"
      className="text-lg text-ink-600 dark:text-ink-200 bg-white dark:bg-ink-800 border-t border-dashed border-ink-400"
    >
      <div className="relative mx-auto py-16 w-wrapper">
        <Scissors className="absolute top-0 left-0 -translate-y-1/2 text-ink-600 dark:text-ink-300 w-6 h-6" />
        <Typography text="Subscribe My Blog" />
        <p className="pt-6">
          Stay updated. Receive the latest stuff straight to your mailbox.
        </p>
        <div className="mt-8 w-96 flex items-stretch">
          <input
            className="flex-1 px-4 bg-white dark:bg-ink-800 border border-ink-400 rounded-tl-sm rounded-bl-sm outline-none"
            type="email"
            placeholder="Enter your email"
          />
          <button className="px-6 py-2 text-white dark:text-ink-800 bg-ink-600 dark:bg-white rounded-tr-sm rounded-br-sm">
            <ArrowRight className="h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
