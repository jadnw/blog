'use client'
import { useState } from 'react'

import config from 'lib/config'
import Typo from 'components/Typo'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [registered, setRegistered] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const onSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)
    const regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/

    if (!regex.test(email) && email !== '') {
      setLoading(false)
      setError(true)
      setMessage('Invalid email address! Please check your email address before submitting.')
      return
    }

    const res = await fetch(config.sendinblue.endpoint, {
      body: JSON.stringify({
        email,
        updateEnabled: false,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': config.sendinblue.apiKey,
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
    <section>
      <div className="space-y-4 pb-24">
        <Typo text="Subscribe Newsletter" />
        <p>Stay updated. Receive the latest stuff straight to your mailbox. No spam.</p>
        <form onSubmit={onSignIn} className="space-x-2">
          <input
            type="text"
            className="min-w-[320px] rounded border border-ink-400 px-4 py-2 focus:outline-none dark:border-ink-700 dark:bg-ink-800"
            placeholder={registered ? 'Subscribed. Thank you! 🎉' : 'Enter your email address'}
            value={email}
            onChange={onFieldChange}
            disabled={registered}
          />
          <button
            className="rounded bg-teal-700 px-6 py-2 font-medium text-ink-200 duration-200 dark:bg-teal-400 dark:text-ink-800"
            disabled={loading}
          >
            Sign in
          </button>
        </form>
        {(error || registered) && <p className="text-ink-500">{message}</p>}
      </div>
    </section>
  )
}

export default Subscribe
