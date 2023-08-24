import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 rounded-lg border-2 text-black border-emerald-50 bg-zinc-200 text-slate-800 px-2 py-2 self-center hover:bg-red-600 hover:text-zinc-200 ease-in duration-200 drop-shadow-md">
        Geschäftsbereiche
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none rounded-lg border-2 text-black border-emerald-50 bg-zinc-200 text-slate-800 px-2 py-2 self-center hover:text-zinc-200 ease-in duration-200 drop-shadow-md">
          <div className="py-1">
            <Menu.Item className="hover:bg-red-600 hover:text-zinc-100 ease-in duration-200 rounded-md">
              {({ active }) => (
                <Link to = '/services'>

                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                
                  Hochspannungskabel
– Erdkabel & Freileitungen
                
                </Link>
              )}
            </Menu.Item>
            <Menu.Item className="hover:bg-red-600 hover:text-zinc-200 ease-in duration-200 rounded-md">
              {({ active }) => (
                <Link to = '/services'>

                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                
                  Tiefe und Flache
Geothermie & Speichern
                
                </Link>
              )}
            </Menu.Item>
            <Menu.Item className="hover:bg-red-600 hover:text-zinc-200 ease-in duration-200 rounded-md">
              {({ active }) => (
                <Link to = '/services'>

                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                
                  UAV Monitoring & Infrastruktur GIS-Modellierung
                
                             </Link>
              )}
            </Menu.Item>
           
              <Menu.Item className="hover:bg-red-600 hover:text-zinc-200 ease-in duration-200 rounded-md">
              {({ active }) => (
                <Link to = '/services'>

                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                
                    Innovatives &
Nachhaltiges Materialdesign
              
                </Link>
                )}
              </Menu.Item>

              <Menu.Item className="hover:bg-red-600 hover:text-zinc-200 ease-in duration-200 rounded-md">
              {({ active }) => (
                <Link to = '/services'>

                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                
                    Standorterkundung
& Bodenkunde
              
                </Link>
                )}
              </Menu.Item>

              <Menu.Item className="hover:bg-red-600 hover:text-zinc-200 ease-in duration-200 rounded-md">
              {({ active }) => (
                <Link to = '/services'>

                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                
                    Laboranalysen –
Boden, Fels & Beton
              
                </Link>
                )}
              </Menu.Item>

              <Menu.Item className="hover:bg-red-600 hover:text-zinc-200 ease-in duration-200 rounded-md">
              {({ active }) => (
                <Link to = '/services'>

                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                
                    Geotechnik – Entwurf /
Konstruktion / Prüfung
              
                </Link>
                )}
              </Menu.Item>

              <Menu.Item className="hover:bg-red-600 hover:text-zinc-200 ease-in duration-200 rounded-md">
              {({ active }) => (
                <Link to = '/services'>

                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                
                    Komplexe Numerische
Simulationen & KI
              
                </Link>
                )}
              </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}