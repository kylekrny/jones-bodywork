import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { Button } from './Button'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="pt-8">
          <div className="flex flex-col items-center">
            <Logo className="mx-auto h-10 w-auto" />
            <Button
              href="https://jonesbodywork.as.me/"
              className="mt-6 bg-[#3F88C5] hover:bg-[#1C415E]"
            >
              <span>
                Schedule <span className="hidden lg:inline">now</span>
              </span>
            </Button>
          </div>
          <nav className="mt-8 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="/#about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <NavLink href="/faq">Faq</NavLink>
              <NavLink href="/#pricing">Pricing</NavLink>
              <NavLink href="/reviews">Reviews</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10">
          <div className="mb-2 flex flex-col gap-x-8 text-center lg:flex-row">
            <Link
              href="mailto:jeff@jonesbodywork.com"
              className="group"
              aria-label="Jeff Jones Email"
            >
              jeff@jonesbodywork.com
            </Link>
            <Link
              href="tel:7206757448"
              className="group"
              aria-label="Jeff Jones phone number"
            >
              (720) 480-4979
            </Link>
            <Link
              href="https://www.google.com/maps/place/Jones+Bodywork+LLC/@39.583202,-105.0736117,15z/data=!4m2!3m1!1s0x0:0xf63bfd22009883b?sa=X&ved=2ahUKEwiJgafK8Ln_AhWVLzQIHZqYAxQQ_BJ6BAhYEAg"
              className="group"
              aria-label="Jeff Jones phone number"
            >
              7345 S. Pierce St, Suite 203C Littleton, CO 80128
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Jones Bodywork. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
