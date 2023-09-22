'use client';

import Link from "next/link";
import { useState } from "react";


export default function NavBar() {

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen)
  }
  const toggleLinks = () => {
    if (isOpen) {
      toggleButton()
    }
  }

  return (
    <header className="w-full flex justify-between items-center p-5 lg:px-10">

      <Link
        href='/'
        className="text-3xl font-bold text-black/80">
          martin.dev
      </Link>

      <button
        type="button"
        onClick={ toggleButton }
        className={`${ isOpen ? 'hidden' : 'block md:hidden'} text-black/80`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
        </svg>
      </button>

      <nav className={`fixed z-10 ${ isOpen
        ? 'opacity-100 visible top-0 right-0 bottom-0 bg-black/10 backdrop-blur-lg w-3/4 sidebar h-screen ease-in-out duration-200'
        : 'opacity-0 invisible md:opacity-100 md:visible md:relative'}`}>

        <button
          type="button"
          onClick={ toggleButton }
          className={`absolute ${isOpen ? 'block' : 'hidden'} text-black/80 top-6 right-5`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ul className={`flex items-center text-black/80 ${isOpen ? 'flex-col mt-20 space-y-5' : 'flex-row'} relative`}>

          <li>
            <Link
              href='#home'
              onClick={ toggleLinks }
              className="font-semibold hover:text-black ease-in duration-200 hover:bg-black/10 px-3 py-1 rounded">
                Home
            </Link>
          </li>

          <li>
            <Link
              href='#about'
              onClick={ toggleLinks }
              className="font-semibold hover:text-black ease-in duration-200 hover:bg-black/10 px-3 py-1 rounded">
                About
            </Link>
          </li>

          <li>
            <Link
              href='#projects'
              onClick={ toggleLinks }
              className="font-semibold hover:text-black ease-in duration-200 hover:bg-black/10 px-3 py-1 rounded">
                Projects
            </Link>
          </li>

          <li>
            <Link
              href='#contact'
              onClick={ toggleLinks }
              className="font-semibold hover:text-black ease-in duration-200 hover:bg-black/10 px-3 py-1 rounded">
                Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
