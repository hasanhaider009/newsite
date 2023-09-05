
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from './assets/Logo.png'


const navigation = [
  { name: 'Startseite', href: '#/home', current: false },
  { name: 'Über uns', href: '#/about', current: false },
  { name: 'Geschäftsbereiche', href: '#/services', current: false },  
  { name: 'Publikations', href: '#/publication', current: false },
  { name: 'Kontakt', href: '#/contact', current: false },
 
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navabar() {
  return (
    <Disclosure as="nav" className="bannertext1 fixed z-20 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 md:px-6 lg:px-8 ">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2  hover:bg-red-600 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between">
                <div className="flex flex-shrink-0 items-end">
                <a href='#/'>

                  <img
                    className="h-auto w-48"
                    src={logo}
                    alt="GeoAI"
                  />

                </a>
                </div>
                <div className="hidden md:my-6 md:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-red-600 text-white' : 'text-gray-900 hover:bg-red-600 bg-white hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                

                {/* Profile dropdown */}
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-red-600 text-white' : 'text-gray-900 hover:bg-red-600 bg-white hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
