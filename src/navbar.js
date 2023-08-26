'use client';

import { Navbar } from 'flowbite-react';
import logo from "./assets/Logo.png"
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';
import { Collapse } from 'flowbite';

export default function NavbarWithCTAButton() {
  return (
    <Navbar className='bannertext1 fixed z-10 w-full'
      fluid 
    >
    <Link to ='/'>

      <Navbar.Brand>
        <img
          alt="GeoAI logo"
          className="md:h-16 sm:h-16 lg:h-24 h-16"
          src={logo}
        />
      </Navbar.Brand>
    </Link>
      <div className="flex ">
        <Navbar.Toggle />
      </div>
      
      <Navbar.Collapse>
        <Link to ='/home'>
      <button class="inline-flex w-full justify-center gap-x-1.5 font-semibold rounded-lg border-2 text-black border-emerald-50 bg-zinc-200 text-slate-800 px-2 py-2 self-center hover:bg-red-600 hover:text-zinc-200 ease-in duration-200 drop-shadow-md"
            >
          Startseite 
        </button>
          </Link>
       
          <Link to='/about'>
      <button class="inline-flex w-full justify-center gap-x-1.5 font-semibold rounded-lg border-2 text-black border-emerald-50 bg-zinc-200 text-slate-800 px-2 py-2 self-center hover:bg-red-600 hover:text-zinc-200 ease-in duration-200 drop-shadow-md"
            >
          Über uns
        </button>
          </Link>
        
          <Dropdown/>

        <Link to ='/contact'>
      <button class="inline-flex w-full justify-center gap-x-1.5 font-semibold rounded-lg border-2 text-black border-emerald-50 bg-zinc-200 text-slate-800 px-2 py-2 self-center hover:bg-red-600 hover:text-zinc-200 ease-in duration-200 drop-shadow-md"
            >
          Kontakt
        </button>
          </Link>

          
      </Navbar.Collapse>
    </Navbar>
  )
}


