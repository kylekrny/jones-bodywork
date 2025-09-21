import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { Button } from './Button'
import { dateCheck } from '@/utilities/datecheck'

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
              href="tel:7204804979"
              className="group"
              aria-label="Jeff Jones phone number"
            >
              (720) 480-4979
            </Link>

              <Link
                href="https://www.google.com/maps/place/Centennial+building,+6860+S+Yosemite+Ct,+Centennial,+CO+80112/@39.5928725,-104.8848904,17z/data=!3m1!4b1!4m6!3m5!1s0x876c867921fcbcb1:0x17d4e1fe616be5d8!8m2!3d39.5928725!4d-104.8848904!16s%2Fg%2F11b8v4fr8k?entry=ttu"
                className="group"
                aria-label="Jeff Jones address"
                rel="noreferrer noopener"
                target="_blank"
              >
                6860 S Yosemite Ct, Centennial, CO 80112
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
