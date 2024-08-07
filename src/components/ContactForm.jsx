import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Modal } from './Modal'
import { dateCheck } from '@/utilities/datecheck'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function ContactForm() {
const [submitted, setSubmitted] = useState(false)
const [message, setMessage] = useState(null)
const moveDateCheck = dateCheck('2024-08-15')


    const handleSubmit = async (event) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
      // Get data from the form.
      const data = {
        first: event.target.first.value,
        last: event.target.last.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        message: event.target.message.value,
      }

      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)

      // API endpoint where we send form data.
      const endpoint = '/api/contact'

      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      }

      // Send the form data to our forms API on Vercel and get a response.
      const response = await fetch(endpoint, options)

      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response.json()
      setMessage({title: result.title, message: result.message, code: result.code, button: result.button })
      setSubmitted(true)
      event.target.reset();

    }

  return (
    <>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let&apos;s Chat
          </h2>
          <p className="text-md mt-2 font-bold leading-8 text-gray-600">
            For same day appointments please call or text.{' '}
          </p>
          <p className="text-md mt-2 leading-8 text-gray-600">
            Phone: (720) 480-4979 | Email: jeff@jonesbodywork.com
          </p>
          {moveDateCheck ? (
            <>
              <p className="text-md mt-1 leading-8 text-gray-600">
                Office:{' '}
                <a href="https://www.google.com/maps/place/7345+S+Pierce+St,+Littleton,+CO+80128/data=!4m2!3m1!1s0x876b7e60d663a621:0xfbcb410553da9129?sa=X&ved=2ahUKEwjyidjEppHyAhURH80KHQiICQ8Q8gF6BAgOEAE">
                  6860 S. Yosemite Ct. Centennial, CO 80112
                </a>
              </p>
            </>
          ) : (
            <>
              <p className="text-md mt-1 leading-8 text-gray-600">
                Office:{' '}
                <a href="https://www.google.com/maps/place/7345+S+Pierce+St,+Littleton,+CO+80128/data=!4m2!3m1!1s0x876b7e60d663a621:0xfbcb410553da9129?sa=X&ved=2ahUKEwjyidjEppHyAhURH80KHQiICQ8Q8gF6BAgOEAE">
                  7345 S. Pierce St, Suite 203C Littleton, CO 80128
                </a>
              </p>
              <p className="text-md mt-1 leading-8 text-red-600">
                We will be moving August 15th to:
              </p>
              <p className="mb-2">
                <a
                  className="text-bold"
                  href="https://www.google.com/maps/place/Centennial+building,+6860+S+Yosemite+Ct,+Centennial,+CO+80112/data=!4m2!3m1!1s0x876c867921fcbcb1:0x17d4e1fe616be5d8?sa=X&ved=1t:242&ictx=111"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  6860 S. Yosemite Ct. Centennial, CO 80112
                </a>
              </p>
              <a
                href="https://www.google.com/maps/place/Centennial+building,+6860+S+Yosemite+Ct,+Centennial,+CO+80112/data=!4m2!3m1!1s0x876c867921fcbcb1:0x17d4e1fe616be5d8?sa=X&ved=1t:242&ictx=111"
                className="rounded-md bg-[#3F88C5] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1C415E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                target="_blank"
                rel="noreferrer noopener"
              >
                View on Google
              </a>
            </>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-8 max-w-xl sm:mt-10"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first"
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last"
                  required
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone"
                  required
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message{' '}
                <span className="text-xs text-gray-600">
                  (please include days and times, if you are looking to schedule
                  a session.)
                </span>
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
            {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group> */}
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-[#3F88C5] px-3.5  py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#1C415E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let&apos;s talk
            </button>
          </div>
        </form>
      </div>
      <Modal open={submitted} setOpen={setSubmitted} result={message} />
    </>
  )
}
