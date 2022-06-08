import { useState } from 'react'

import Scissors from '@/assets/svgr/scissors.svg'
import ArrowRight from '@/assets/svgr/arrow-right.svg'
import SpinnerThird from '@/assets/svgr/spinner-third.svg'
import Typography from '@/components/Typography'

import { SENDINBLUE_ENDPOINT, SENDINBLUE_API_KEY } from '@/lib/secrets'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [registered, setRegistered] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const onEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const subscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!regex.test(email) && email !== '') {
      setLoading(false)
      setError(true)
      setMessage('Your email is invalid!')
      return
    }

    const res = await fetch(SENDINBLUE_ENDPOINT!, {
      body: JSON.stringify({
        email,
        updateEnabled: false,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': SENDINBLUE_API_KEY!,
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      setLoading(false)
      setError(true)
      setMessage('Your email is already subscribed!')
      return
    }

    setLoading(false)
    setEmail('')
    setError(false)
    setRegistered(true)
    setMessage('Successfully! You are now subscribed.')
  }

  return (
    <section
      id="subscribe"
      className="text-lg text-ink-600 dark:text-ink-200 bg-white dark:bg-ink-800 border-t border-dashed border-ink-400"
    >
      <div className="relative mx-auto py-24 px-4 lg:px-0 w-full lg:w-wrapper">
        <Scissors className="absolute top-0 left-0 -translate-y-1/2 text-ink-600 dark:text-ink-300 w-6 h-6" />
        <Typography text="Subscribe My Blog" />
        <p className="pt-6">
          Stay updated. Receive the latest stuff straight to your mailbox.
        </p>
        <form
          className="mt-8 w-full sm:w-96 flex items-stretch"
          onSubmit={subscribe}
        >
          <input
            className="xs:flex-1 px-4 w-full bg-white dark:bg-ink-800 border-2 border-r-0 border-ink-200 dark:border-ink-500 rounded-tl rounded-bl outline-none"
            type="text"
            placeholder={
              registered ? 'Subscribed. Thank you! 🎉' : 'Enter your email'
            }
            value={email}
            onChange={onEmailInputChange}
            disabled={registered}
          />
          <button
            className="px-4 xs:px-6 py-2.5 text-white dark:text-ink-800 bg-ink-600 dark:bg-white rounded-tr rounded-br"
            disabled={loading}
          >
            {loading ? (
              <SpinnerThird className="w-4 xs:w-4 h-4 xs:h-5 animate-spin" />
            ) : (
              <ArrowRight className="w-4 xs:w-4 h-4 xs:h-5" />
            )}
          </button>
        </form>
        {(error || registered) && (
          <p className="mt-4 text-lg text-ink-500 dark:text-ink-400">
            {message}
          </p>
        )}
      </div>
    </section>
  )
}

export default Subscribe
