import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function RegionFilter({ onRegionFilter }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-48 justify-center gap-x-1.5 rounded bg-white px-3 py-2 text-sm shadow-md hover:bg-gray-50 dark:bg-[#2B3844]">
          Filter by Region
          <ChevronDownIcon className="w-5 h-5 -mr-1 text-gray-400" aria-hidden="true" />
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
        <Menu.Items className="absolute z-10 w-56 mt-2 origin-top-right bg-white dark:bg-[#2B3844] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => onRegionFilter('')}
                  className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900 dark:bg-[#202C36] dark:text-white' : 'dark:text-white'}`}
                >
                  Worldwide
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => onRegionFilter('Africa')}
                  className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900 dark:bg-[#202C36] dark:text-white' : 'dark:text-white'}`}
                >
                  Africa
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => onRegionFilter('America')}
                  className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900 dark:bg-[#202C36] dark:text-white' : 'dark:text-white'}`}
                >
                  America
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => onRegionFilter('Europe')}
                  className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900 dark:bg-[#202C36] dark:text-white' : 'dark:text-white'}`}
                >
                  Europe
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => onRegionFilter('Asia')}
                  className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900 dark:bg-[#202C36] dark:text-white' : 'dark:text-white'}`}
                >
                  Asia
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => onRegionFilter('Oceania')}
                  className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900 dark:bg-[#202C36] dark:text-white' : 'dark:text-white'}`}
                >
                  Oceania
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default RegionFilter;
